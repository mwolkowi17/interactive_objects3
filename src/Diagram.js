import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelD(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/diagram_1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive castShadow receiveShadow object={nodes.Obj_table_storage1}
        scale={nodes.Obj_table_storage1.scale}
        translateOnAxis={nodes.Obj_table_storage1.translation}
        rotation={nodes.Obj_table_storage1.rotation} />

      <primitive castShadow receiveShadow object={nodes.dObj_table_storage2}
        scale={nodes.dObj_table_storage2.scale}
        translateOnAxis={nodes.dObj_table_storage2.translation}
        rotation={nodes.dObj_table_storage2.rotation} />

      <primitive castShadow receiveShadow object={nodes.dObj_table_storage3}
        scale={nodes.dObj_table_storage3.scale}
        translateOnAxis={nodes.dObj_table_storage3.translation}
        rotation={nodes.dObj_table_storage3.rotation} />

      <primitive castShadow receiveShadow object={nodes.dObj_erp}
        scale={nodes.dObj_erp.scale}
        translateOnAxis={nodes.dObj_erp.translation}
        rotation={nodes.dObj_erp.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.dObj_erp2}
        scale={nodes.dObj_erp2.scale}
        translateOnAxis={nodes.dObj_erp2.translation}
        rotation={nodes.dObj_erp2.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.dObj_server}
        scale={nodes.dObj_server.scale}
        translateOnAxis={nodes.dObj_server.translation}
        rotation={nodes.dObj_server.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Rectangle}
        scale={nodes.Rectangle.scale}
        translateOnAxis={nodes.Rectangle.translation}
        rotation={nodes.Rectangle.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Rectangle2}
        scale={nodes.Rectangle2.scale}
        translateOnAxis={nodes.Rectangle2.translation}
        rotation={nodes.Rectangle2.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Rectangle3}
        scale={nodes.Rectangle3.scale}
        translateOnAxis={nodes.Rectangle3.translation}
        rotation={nodes.Rectangle3.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Rectangle4}
        scale={nodes.Rectangle4.scale}
        translateOnAxis={nodes.Rectangle4.translation}
        rotation={nodes.Rectangle4.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Rectangle5}
        scale={nodes.Rectangle5.scale}
        translateOnAxis={nodes.Rectangle5.translation}
        rotation={nodes.Rectangle5.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Rectangle6}
        scale={nodes.Rectangle6.scale}
        translateOnAxis={nodes.Rectangle6.translation}
        rotation={nodes.Rectangle6.rotation}
      />


    </group>
  )
}

useGLTF.preload('/diagram_1.gltf')