
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Environment, OrbitControls } from '@react-three/drei'
import { useState } from 'react';
import { Car } from './components/Car';


function App() {
 



  return (
    <div className='w-full h-screen'>
      <Canvas style={{ background: '#ccc' }} className='w-full h-full'>

        <OrbitControls

        />

        <ambientLight intensity={3} />

        <Environment preset="forest" />

        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
        />

        <Car position-y={-1} scale={1} wireframe />


      </Canvas>

    </div>
  )
}

export default App
