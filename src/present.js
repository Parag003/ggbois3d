import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  PerspectiveCamera,
  useAnimations,
} from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLayoutEffect, useMemo, Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

function Present(props) {
  const group = useRef();
  const { scene, materials, animations } = useGLTF("./burger.glb", true);
  const { actions, names } = useAnimations(animations, group);
  let mixer;
  if (animations.length) {
    mixer = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });
  // *************************

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });
  // useMemo(() => {
  //     for (const material in materials) {
  //       // iterate the materials
  //       if (Object.prototype.hasOwnProperty.call(materials, material)) {
  //         // change the color of all the materials (there's only one in this model)
  //         materials[material].color.set("#bb6f3e");
  //         // you can also change the color of a specific material if you know the name of the material
  //       }
  //     }
  //   }, [materials]);

  // const colorMap = useLoader(TextureLoader, 'cat.jpg')

  return (
    <group dispose={null}>
      <primitive key={props.src} object={scene} {...props} />
    </group>
  );
}
const deg2rad = (degrees) => degrees * (Math.PI / 180);
function CatScene() {
  return (
    <Canvas dpr={[1, 2]} shadows>
      <PerspectiveCamera position={[100, 100, 1000]} makeDefault />
      <pointLight position={[10, 5, -5]} intensity={1} color="#fff" />
      <color attach="background" args={["#000000"]} />

      <Stage environment={null}>
        <Present scale={0.01} />
      </Stage>
    </Canvas>
  );
}

export default CatScene;
