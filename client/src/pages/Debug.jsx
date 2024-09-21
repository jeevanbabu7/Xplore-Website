import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import {
  MeshWobbleMaterial,
  OrbitControls,
  ScrollControls,
  Scroll,
  Sphere,
  Box,
  Edges,
  Plane,
  useHelper,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { useScroll } from "framer-motion";
import { DirectionalLightHelper } from "three";

const Cube = ({ pos }) => {
  const [hovered, setHovered] = useState(false);
  const boxRef = useRef(null);
  useFrame((state, delta) => {
    boxRef.current.rotation.y += delta;
  });
  return (
    <Box
      castShadow
      position={pos}
      ref={boxRef}
      onPointerEnter={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerLeave={(e) => (e.stopPropagation(), setHovered(false))}
    >
      <meshPhysicalMaterial emissive={"red"} emissiveIntensity={hovered ? 1 : 0} color={"hotpink"} />
    </Box>
  );
};
const Scene = () => {
  const dirLight = useRef(null);
  useHelper(dirLight, DirectionalLightHelper);
  return (
    <>
      {/* <ambientLight intensity={0.3} /> */}
      <OrbitControls />
      <directionalLight castShadow position={[2, 0, 5]} ref={dirLight} />
      <ambientLight intensity={0.35} />
      <Cube pos={[0, 0, 2]} />
    </>
  );
};
const Debug = () => {
  return (
    <div className="h-screen w-screen absolute">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Debug;
