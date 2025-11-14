
import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react';
import { Car } from './components/Car';


function App() {
 



  return (
    <div className='w-full h-screen'>
      <Canvas style={{ background: '#ccc' }} className='w-full h-full'>

        <OrbitControls

        />

        <ambientLight intensity={3} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
        />

        <Car scale={15} wireframe />


      </Canvas>

    </div>
  )
}

export default App
