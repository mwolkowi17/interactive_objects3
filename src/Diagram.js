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
      <primitive castShadow receiveShadow object={nodes.obj3d_1}
        scale={nodes.obj3d_1.scale}
        translateOnAxis={nodes.obj3d_1.translation}
        rotation={nodes.obj3d_1.rotation}
      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.obj3d_2}
        scale={nodes.obj3d_2.scale}
        translateOnAxis={nodes.obj3d_2.translation}
        rotation={nodes.obj3d_2.rotation}
      /* onClick={() => console.log('clicked')}
         onPointerOver={() => setHovered(true)}
         onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.obj3d_3}
        scale={nodes.obj3d_3.scale}
        translateOnAxis={nodes.obj3d_3.translation}
        rotation={nodes.obj3d_3.rotation}
      /* onClick={() => console.log('clicked')}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.obj3d_4}
        scale={nodes.obj3d_4.scale}
        translateOnAxis={nodes.obj3d_4.translation}
        rotation={nodes.obj3d_4.rotation}
      /* onClick={() => console.log('clicked')}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.obj3d_5}
        scale={nodes.obj3d_5.scale}
        translateOnAxis={nodes.obj3d_5.translation}
        rotation={nodes.obj3d_5.rotation}
      /* onClick={() => console.log('clicked')}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.obj3d_6}
        scale={nodes.obj3d_6.scale}
        translateOnAxis={nodes.obj3d_6.translation}
        rotation={nodes.obj3d_6.rotation}
      /* onClick={() => console.log('clicked')}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.Rectangle}
        scale={nodes.Rectangle.scale}
        translateOnAxis={nodes.Rectangle.translation}
        rotation={nodes.Rectangle.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Rectangle_001}
        scale={nodes.Rectangle_001.scale}
        translateOnAxis={nodes.Rectangle_001.translation}
        rotation={nodes.Rectangle_001.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Rectangle_002}
        scale={nodes.Rectangle_002.scale}
        translateOnAxis={nodes.Rectangle_002.translation}
        rotation={nodes.Rectangle_002.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Rectangle_003}
        scale={nodes.Rectangle_003.scale}
        translateOnAxis={nodes.Rectangle_003.translation}
        rotation={nodes.Rectangle_003.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Rectangle_004}
        scale={nodes.Rectangle_004.scale}
        translateOnAxis={nodes.Rectangle_004.translation}
        rotation={nodes.Rectangle_004.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Rectangle_005}
        scale={nodes.Rectangle_005.scale}
        translateOnAxis={nodes.Rectangle_005.translation}
        rotation={nodes.Rectangle_005.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.fig_1a}
        scale={nodes.fig_1a.scale}
        translateOnAxis={nodes.fig_1a.translation}
        rotation={nodes.fig_1a.rotation}
        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.fig_1b}
        scale={nodes.fig_1b.scale}
        translateOnAxis={nodes.fig_1b.translation}
        rotation={nodes.fig_1b.rotation}
        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.fig_2a}
        scale={nodes.fig_2a.scale}
        translateOnAxis={nodes.fig_2a.translation}
        rotation={nodes.fig_2a.rotation}
        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.fig_4a}
        scale={nodes.fig_4a.scale}
        translateOnAxis={nodes.fig_4a.translation}
        rotation={nodes.fig_4a.rotation}
        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.fig_5a}
        scale={nodes.fig_5a.scale}
        translateOnAxis={nodes.fig_5a.translation}
        rotation={nodes.fig_5a.rotation}
        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.fig_8a}
        scale={nodes.fig_8a.scale}
        translateOnAxis={nodes.fig_8a.translation}
        rotation={nodes.fig_8a.rotation}
        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />

      <primitive castShadow receiveShadow object={nodes.MyText}
        scale={nodes.MyText.scale}
        translateOnAxis={nodes.MyText.translation}
        rotation={nodes.MyText.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText_001}
        scale={nodes.MyText_001.scale}
        translateOnAxis={nodes.MyText_001.translation}
        rotation={nodes.MyText_001.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText_002}
        scale={nodes.MyText_002.scale}
        translateOnAxis={nodes.MyText_002.translation}
        rotation={nodes.MyText_002.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText_003}
        scale={nodes.MyText_003.scale}
        translateOnAxis={nodes.MyText_003.translation}
        rotation={nodes.MyText_003.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText_004}
        scale={nodes.MyText_004.scale}
        translateOnAxis={nodes.MyText_004.translation}
        rotation={nodes.MyText_004.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText_005}
        scale={nodes.MyText_005.scale}
        translateOnAxis={nodes.MyText_005.translation}
        rotation={nodes.MyText_005.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText_006}
        scale={nodes.MyText_006.scale}
        translateOnAxis={nodes.MyText_006.translation}
        rotation={nodes.MyText_006.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText_007}
        scale={nodes.MyText_007.scale}
        translateOnAxis={nodes.MyText_007.translation}
        rotation={nodes.MyText_007.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.MyText_008}
        scale={nodes.MyText_008.scale}
        translateOnAxis={nodes.MyText_008.translation}
        rotation={nodes.MyText_008.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Arrow_1}
        scale={nodes.Arrow_1.scale}
        translateOnAxis={nodes.Arrow_1.translation}
        rotation={nodes.Arrow_1.rotation}
      />

      <primitive castShadow receiveShadow object={nodes.Arrow_2}
        scale={nodes.Arrow_2.scale}
        translateOnAxis={nodes.Arrow_2.translation}
        rotation={nodes.Arrow_2.rotation}
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