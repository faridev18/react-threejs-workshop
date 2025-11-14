
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Car(props) {
  const { nodes, materials } = useGLTF('./model.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.steer.geometry}
        material={materials['gray.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires.geometry}
        material={materials['rubber.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior003.geometry}
        material={materials['gray.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior003_1.geometry}
        material={materials['light_f.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior003_2.geometry}
        material={materials['body.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior003_3.geometry}
        material={materials.glass_crack}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior003_4.geometry}
        material={materials['glassgray.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.interior003_5.geometry}
        material={materials.Light}
      />
    </group>
  )
}

useGLTF.preload('/model.gltf')
