import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Clone, OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <Clone object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = ({ variant = "contact" }) => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 500px)").matches
  );
  const [shouldRender, setShouldRender] = useState(variant === "hero");
  const isHero = variant === "hero";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    } else {
      mediaQuery.addListener(handleMediaQueryChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      } else {
        mediaQuery.removeListener(handleMediaQueryChange);
      }
    };
  }, []);

  useEffect(() => {
    if (isHero || shouldRender) return;

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 1.5) {
        setShouldRender(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHero, shouldRender]);

  if (!shouldRender) {
    return <div className='w-full h-full' />;
  }

  return (
    <Canvas
      shadows={!isHero}
      frameloop={isHero && isMobile ? "demand" : "always"}
      dpr={isMobile ? 1 : [1, 2]}
      gl={{ alpha: true, antialias: !isMobile, powerPreference: "high-performance" }}
      camera={{
        fov: isHero ? 38 : 45,
        near: 0.1,
        far: 200,
        position: isHero ? [0, 0, 8] : [-4, 3, 6],
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={!isMobile || !isHero}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        {!isHero && <Preload all />}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
