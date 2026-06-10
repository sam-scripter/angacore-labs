"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const particleCount = 60;
  
  const { positions, colors, linePositions, lineColors, velocities } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities: THREE.Vector3[] = [];
    
    // Teal color (primary): hsl(175, 55%, 38%) -> rgb(44, 150, 145)
    const tealColor = new THREE.Color(0.17, 0.59, 0.57);
    // Orange color (accent): hsl(25, 95%, 53%) -> rgb(249, 115, 22)
    const orangeColor = new THREE.Color(0.98, 0.45, 0.09);
    
    for (let i = 0; i < particleCount; i++) {
      // Spread particles in a wider area
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      
      // Mix colors - mostly teal, some orange
      const color = Math.random() > 0.8 ? orangeColor : tealColor;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.005
        )
      );
    }
    
    // Pre-allocate line arrays (max connections)
    const maxConnections = particleCount * particleCount;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);
    
    return { positions, colors, linePositions, lineColors, velocities };
  }, []);
  
  useFrame(() => {
    if (!meshRef.current || !linesRef.current) return;
    
    const positionsArray = meshRef.current.geometry.attributes.position.array as Float32Array;
    
    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      positionsArray[i * 3] += velocities[i].x;
      positionsArray[i * 3 + 1] += velocities[i].y;
      positionsArray[i * 3 + 2] += velocities[i].z;
      
      // Bounce off boundaries
      if (Math.abs(positionsArray[i * 3]) > 6) velocities[i].x *= -1;
      if (Math.abs(positionsArray[i * 3 + 1]) > 4) velocities[i].y *= -1;
      if (Math.abs(positionsArray[i * 3 + 2]) > 2) velocities[i].z *= -1;
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Update connections
    let lineIndex = 0;
    const connectionDistance = 2.5;
    
    const linesGeometry = linesRef.current.geometry;
    const linePositionsAttr = linesGeometry.attributes.position.array as Float32Array;
    const lineColorsAttr = linesGeometry.attributes.color.array as Float32Array;
    
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positionsArray[i * 3] - positionsArray[j * 3];
        const dy = positionsArray[i * 3 + 1] - positionsArray[j * 3 + 1];
        const dz = positionsArray[i * 3 + 2] - positionsArray[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < connectionDistance) {
          const opacity = 1 - distance / connectionDistance;
          
          // Line start
          linePositionsAttr[lineIndex * 6] = positionsArray[i * 3];
          linePositionsAttr[lineIndex * 6 + 1] = positionsArray[i * 3 + 1];
          linePositionsAttr[lineIndex * 6 + 2] = positionsArray[i * 3 + 2];
          
          // Line end
          linePositionsAttr[lineIndex * 6 + 3] = positionsArray[j * 3];
          linePositionsAttr[lineIndex * 6 + 4] = positionsArray[j * 3 + 1];
          linePositionsAttr[lineIndex * 6 + 5] = positionsArray[j * 3 + 2];
          
          // Colors with opacity
          const teal = [0.17 * opacity, 0.59 * opacity, 0.57 * opacity];
          lineColorsAttr[lineIndex * 6] = teal[0];
          lineColorsAttr[lineIndex * 6 + 1] = teal[1];
          lineColorsAttr[lineIndex * 6 + 2] = teal[2];
          lineColorsAttr[lineIndex * 6 + 3] = teal[0];
          lineColorsAttr[lineIndex * 6 + 4] = teal[1];
          lineColorsAttr[lineIndex * 6 + 5] = teal[2];
          
          lineIndex++;
        }
      }
    }
    
    // Clear remaining lines
    for (let i = lineIndex; i < linePositionsAttr.length / 6; i++) {
      for (let j = 0; j < 6; j++) {
        linePositionsAttr[i * 6 + j] = 0;
        lineColorsAttr[i * 6 + j] = 0;
      }
    }
    
    linesGeometry.attributes.position.needsUpdate = true;
    linesGeometry.attributes.color.needsUpdate = true;
    linesGeometry.setDrawRange(0, lineIndex * 2);
  });
  
  return (
    <>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
      
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3]}
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.4}
        />
      </lineSegments>
    </>
  );
}

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Floating teal spheres */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={`sphere-${i}`}
          position={[
            Math.sin(i * 0.8) * 4,
            Math.cos(i * 0.6) * 2.5,
            Math.sin(i * 0.4) * 1.5 - 2,
          ]}
        >
          <sphereGeometry args={[0.15 + Math.random() * 0.1, 16, 16]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? "#f97316" : "#2c9691"}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
      
      {/* Floating rings */}
      {[...Array(4)].map((_, i) => (
        <mesh
          key={`ring-${i}`}
          position={[
            Math.cos(i * 1.5) * 3.5,
            Math.sin(i * 1.2) * 2,
            -1.5,
          ]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          <torusGeometry args={[0.4, 0.03, 8, 32]} />
          <meshBasicMaterial
            color="#2c9691"
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

export function ParticleNetwork() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
