import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export  function ModelD(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/diagram_1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive castShadow receiveShadow object={nodes.Obj_table_storage1} 
     
      scale={nodes.Obj_table_storage1.scale}
      translateOnAxis={nodes.Obj_table_storage1.translation}
      rotation={nodes.Obj_table_storage1.rotation}  />
      <primitive castShadow receiveShadow object={nodes.dObj_erp} 
      
      scale={nodes.dObj_erp.scale}
      translateOnAxis={nodes.dObj_erp.translation}
      rotation={nodes.dObj_erp.rotation}  
       />
     {/*<mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />*/}
    </group>
  )
}

useGLTF.preload('/diagram_1.gltf')