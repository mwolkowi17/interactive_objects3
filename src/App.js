
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

    <Canvas camera={{ fov: 75, near: 0.1, far: 80, position: [-10, 6, 30] }}>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        maxDistance={40}
      />
      <Suspense fallback={<Loader />}>
        <ambientLight />
        <Strips1 position={[0, 0, 0]} />
        <ModelD position={[-4, -4.5, 6]} rotation={[0,Math.PI*3.75,0]} scale={[2,2,2]} />
      </Suspense>
    </Canvas>
  )
}