
import React, { Suspense} from 'react'
import { Canvas} from '@react-three/fiber'

import { OrbitControls, Html } from '@react-three/drei'
import { Strips1 } from './Strips'
import { ModelD } from './Diagram'




export default function App() {
  function Loader() {
    return <Html center style={{ color: 'black' }}>loading...</Html>
  }

  return (

    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [-4, 6, 6] }}>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        maxDistance={40}
      />
      <Suspense fallback={<Loader />}>
        <ambientLight />
        {/*} <pointLight position={[5, 10, 20]} />*/}


        <Strips1 position={[0, 0, 0]} />
        <ModelD position={[0, -3, 0]} rotation={[0,Math.PI*3.6,0]} />
{/*
        <Shapes position={[0, 0, 0]} />
        <Arrows1 position={[0, 0, 0]} />
        <Text1 position={[0, 0, 0]} />
        <Numbers position={[0, 0, 0]} />
        <Model2 position={[0, 0, 0]} />
        <Model3 position={[0, 0, 0]} />
        <Model4 position={[0, 0, 0]} />
        <Model5 position={[0, 0, 0]} />
        <Model6 position={[0, 0, 0]} />
        <Model7 position={[0, 0, 0]} />
  */}
      </Suspense>
    </Canvas>
  )
}