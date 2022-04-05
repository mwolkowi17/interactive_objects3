import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelD(props) {
  const group = useRef()
  const { nodes } = useGLTF('/diagram_1.gltf')
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive castShadow receiveShadow object={nodes.Obj_table_storage1}
        scale={nodes.Obj_table_storage1.scale}
        translateOnAxis={nodes.Obj_table_storage1.translation}
        rotation={nodes.Obj_table_storage1.rotation}
      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.dObj_table_storage2}
        scale={nodes.dObj_table_storage2.scale}
        translateOnAxis={nodes.dObj_table_storage2.translation}
        rotation={nodes.dObj_table_storage2.rotation}
      /* onClick={() => console.log('clicked')}
         onPointerOver={() => setHovered(true)}
         onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.dObj_table_storage3}
        scale={nodes.dObj_table_storage3.scale}
        translateOnAxis={nodes.dObj_table_storage3.translation}
        rotation={nodes.dObj_table_storage3.rotation}
      /* onClick={() => console.log('clicked')}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.dObj_erp}
        scale={nodes.dObj_erp.scale}
        translateOnAxis={nodes.dObj_erp.translation}
        rotation={nodes.dObj_erp.rotation}
      /* onClick={() => console.log('clicked')}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.dObj_erp2}
        scale={nodes.dObj_erp2.scale}
        translateOnAxis={nodes.dObj_erp2.translation}
        rotation={nodes.dObj_erp2.rotation}
      /* onClick={() => console.log('clicked')}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.dObj_server}
        scale={nodes.dObj_server.scale}
        translateOnAxis={nodes.dObj_server.translation}
        rotation={nodes.dObj_server.rotation}
      /* onClick={() => console.log('clicked')}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}*/
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

      <primitive castShadow receiveShadow object={nodes.one}
        scale={nodes.one.scale}
        translateOnAxis={nodes.one.translation}
        rotation={nodes.one.rotation}
        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.oneb}
        scale={nodes.oneb.scale}
        translateOnAxis={nodes.oneb.translation}
        rotation={nodes.oneb.rotation}
        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.two}
        scale={nodes.two.scale}
        translateOnAxis={nodes.two.translation}
        rotation={nodes.two.rotation}
        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.four}
        scale={nodes.four.scale}
        translateOnAxis={nodes.four.translation}
        rotation={nodes.four.rotation}
        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.five}
        scale={nodes.five.scale}
        translateOnAxis={nodes.five.translation}
        rotation={nodes.five.rotation}
        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.eight}
        scale={nodes.eight.scale}
        translateOnAxis={nodes.eight.translation}
        rotation={nodes.eight.rotation}
        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.MyText}
        scale={nodes.MyText.scale}
        translateOnAxis={nodes.MyText.translation}
        rotation={nodes.MyText.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText1}
        scale={nodes.MyText1.scale}
        translateOnAxis={nodes.MyText1.translation}
        rotation={nodes.MyText1.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText2}
        scale={nodes.MyText2.scale}
        translateOnAxis={nodes.MyText2.translation}
        rotation={nodes.MyText2.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText3}
        scale={nodes.MyText3.scale}
        translateOnAxis={nodes.MyText3.translation}
        rotation={nodes.MyText3.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText4}
        scale={nodes.MyText4.scale}
        translateOnAxis={nodes.MyText4.translation}
        rotation={nodes.MyText4.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText5}
        scale={nodes.MyText5.scale}
        translateOnAxis={nodes.MyText5.translation}
        rotation={nodes.MyText5.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText6}
        scale={nodes.MyText6.scale}
        translateOnAxis={nodes.MyText6.translation}
        rotation={nodes.MyText6.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText7}
        scale={nodes.MyText7.scale}
        translateOnAxis={nodes.MyText7.translation}
        rotation={nodes.MyText7.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText8}
        scale={nodes.MyText8.scale}
        translateOnAxis={nodes.MyText8.translation}
        rotation={nodes.MyText8.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Arrow1}
        scale={nodes.Arrow1.scale}
        translateOnAxis={nodes.Arrow1.translation}
        rotation={nodes.Arrow1.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Arrow2}
        scale={nodes.Arrow2.scale}
        translateOnAxis={nodes.Arrow2.translation}
        rotation={nodes.Arrow2.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.canvas_plane_1}
        scale={nodes.canvas_plane_1.scale}
        translateOnAxis={nodes.canvas_plane_1.translation}
        rotation={nodes.canvas_plane_1.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.canvas_plane_2}
        scale={nodes.canvas_plane_2.scale}
        translateOnAxis={nodes.canvas_plane_2.translation}
        rotation={nodes.canvas_plane_2.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.canvas_plane_3}
        scale={nodes.canvas_plane_3.scale}
        translateOnAxis={nodes.canvas_plane_3.translation}
        rotation={nodes.canvas_plane_3.rotation}
      />




    </group>
  )
}

useGLTF.preload('/diagram_1.gltf')