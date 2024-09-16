/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../utilities/Particle";

const ParticleRing = () => {
    const ref = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (ref.current) {
          // Adjust rotation and scale based on scroll
          ref.current.rotation.z = scrollY * 0.001; // Slow rotation effect
          ref.current.scale.set(1 + scrollY * 0.001, 1 + scrollY * 0.001, 1 + scrollY * 0.001); // Scale effect
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        className="w-full h-full absolute"
      >
        <OrbitControls maxDistance={20} minDistance={10} enableZoom={false} />
        <directionalLight intensity={0.5} />
        <pointLight position={[-30, 0, -30]} intensity={1.0} />
        <PointCircle ref={ref} />
      </Canvas>
    );
  };
  
  const PointCircle = React.forwardRef((_, ref) => {
    useFrame(({ clock }) => {
      if (ref.current?.rotation) {
        ref.current.rotation.z = clock.getElapsedTime() * 0.05;
      }
    });

    
  
    return (
      <group ref={ref}>
        {pointsInner.map((point) => (
          <Point key={point.idx} position={point.position} color={point.color} />
        ))}
        {pointsOuter.map((point) => (
          <Point key={point.idx} position={point.position} color={point.color} />
        ))}
      </group>
    );
  });
  PointCircle.displayName = 'PointCircle';
  
  const Point = ({ position, color }) => {
    return (
      <Sphere position={position} args={[0.1, 10, 10]}>
        <meshStandardMaterial
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.5}
          color={color}
        />
      </Sphere>
    );
  };
  
  export default ParticleRing;