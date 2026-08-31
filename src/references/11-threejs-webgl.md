# Three.js / WebGL — when it earns its place

3D is the single most expensive decision on this list. It can also be the one thing that makes a site memorable. The rule: **3D must answer a question that 2D cannot** — showing a physical product, demonstrating spatial data, or being the actual brand statement on a portfolio.

Do not use 3D for: a decorative blob behind a SaaS hero, anything a video or animated SVG would do at 5% of the cost, or anything sitting behind the LCP element.

## The cost, stated honestly

| Item | Typical weight |
|---|---|
| three (tree-shaken, minified+gzip) | ~150KB |
| @react-three/fiber + drei | +40–80KB |
| A single compressed GLTF model | 200KB–3MB |
| HDR environment map | 500KB–2MB (use a compressed `.hdr` at 1k, or a baked lightmap) |

Plus continuous GPU work: battery drain on laptops and phones, and heat throttling on cheap Android devices.

## Vanilla vs React Three Fiber

- **Vanilla three.js**: full control, no React overhead, best for a single self-contained canvas on an otherwise static site.
- **React Three Fiber (R3F) + drei**: declarative, integrates with React state, and drei supplies the pieces you'd otherwise write yourself (`OrbitControls`, `Environment`, `useGLTF`, `Float`, `MeshTransmissionMaterial`, `Html`). Use it in any React project.

```bash
npm i three @react-three/fiber @react-three/drei
```

## The non-negotiable setup pattern

Lazy-load the canvas, render a poster fallback, and never let 3D block first paint.

```jsx
"use client";
import dynamic from "next/dynamic";
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <img src="/hero-poster.webp" alt="" className="h-full w-full object-cover" />,
});

export function Hero() {
  return (
    <section className="relative min-h-[80svh]">
      {/* LCP content — plain DOM, never inside the canvas */}
      <h1 className="relative z-10">Real headline, rendered immediately</h1>
      <div className="absolute inset-0 -z-0"><Scene /></div>
    </section>
  );
}
```

```jsx
// Scene.jsx
import { Canvas } from "@react-three/fiber";
import { Environment, PerformanceMonitor, useGLTF } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import { useState } from "react";

export default function Scene() {
  const reduce = useReducedMotion();
  const [dpr, setDpr] = useState(1.5);

  return (
    <Canvas
      dpr={dpr}                                  // never uncapped devicePixelRatio
      frameloop={reduce ? "demand" : "always"}   // static frame for reduced-motion users
      gl={{ antialias: false, powerPreference: "high-performance" }}
      camera={{ fov: 35, position: [0, 0, 6] }}
    >
      <PerformanceMonitor
        onDecline={() => setDpr(1)}              // degrade instead of stuttering
      />
      <Environment preset="city" />
      <Model />
    </Canvas>
  );
}
```

## Performance rules

1. **Cap DPR** at 1.5–2. Uncapped `devicePixelRatio` on a 3× phone renders 9× the pixels.
2. **Turn off antialiasing** on heavy scenes; use a cheap post-process pass instead if needed.
3. **Pause when off-screen.** Use an IntersectionObserver or drei's `useIntersect` to stop the render loop; a canvas rendering at 60fps while scrolled past is pure waste.
4. **`frameloop="demand"`** for static or interaction-only scenes — renders only when something changes.
5. **Compress models**: Draco or Meshopt for geometry, KTX2/Basis for textures. `gltf-transform optimize model.glb out.glb` typically cuts 60–80%.
6. **Instance repeated geometry** (`<Instances>`), and merge static meshes; draw calls matter more than triangle count.
7. **Bake lighting** where possible instead of shipping multiple real-time lights and shadow maps.
8. **Dispose** geometries, materials, and textures on unmount — R3F handles most of it, but manually created resources leak.
9. **Budget**: aim for <100k triangles, <100 draw calls, and a stable 60fps on a mid-range Android.

## Mandatory fallbacks

```jsx
// WebGL absent, or the user prefers less motion, or the device is low-power
const canUseWebGL = typeof window !== "undefined" &&
  !!document.createElement("canvas").getContext("webgl2");
const lowPower = navigator.hardwareConcurrency <= 4 || matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!canUseWebGL || lowPower) return <img src="/hero-poster.webp" alt="" />;
```

Also handle the `webglcontextlost` event — mobile browsers drop contexts under memory pressure, and a black rectangle is a worse outcome than a static image.

## Common premium 3D patterns

| Pattern | Approach | Watch out for |
|---|---|---|
| Product viewer | `useGLTF` + `OrbitControls` + `Stage` | Give keyboard/button controls too; drag-only excludes people |
| Scroll-driven camera | `useScroll` from drei, or GSAP driving camera values | Keep the DOM content readable independently |
| Floating hero object | `<Float>` + `MeshTransmissionMaterial` | Transmission is expensive — check mid-range mobile |
| Particle field | `<Points>` with a buffer geometry + custom shader | Cap particle count; 50k is usually the practical ceiling |
| Image distortion on hover | Plane + shader with a displacement map | Must degrade to a plain `<img>` |
| Text in 3D | `<Text>` from drei (SDF) | Real HTML text still needs to exist for SEO and screen readers |
| Baked environment scene | GLTF + baked lightmaps, no real-time lights | Best quality-to-cost ratio for architectural/interior scenes |

## Accessibility

- The canvas is invisible to screen readers. Every piece of information conveyed in 3D must exist in the DOM as well.
- Give the canvas `aria-hidden="true"` when it is purely decorative.
- Provide non-drag controls for any interactive scene (buttons, keyboard).
- Freeze or slow the scene under `prefers-reduced-motion` — orbiting cameras and continuous rotation are common vestibular triggers.

## Lighter alternatives worth proposing first

- **OGL** or **Three.js Shading Language** for a single shader effect at a fraction of the size.
- **Spline** or a pre-rendered image sequence for a hero object that doesn't need interaction.
- **A looping video** with `poster` — often visually identical to a 3D hero at a fraction of the complexity, and it works everywhere.
- **Animated SVG or Lottie** for anything illustrative.

Recommend these honestly. A developer shipping a client site usually wants the *look*; the 3D engine is a means, not the goal.
