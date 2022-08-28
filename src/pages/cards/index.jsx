import { useEffect, useState } from "react";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { CardsPageWrapper, Popup, SmallCard } from "./style";
import StarImg from "../../assets/images/star.png";

// import MODEL from "../../assets/free_merc_hovercar/scene.gltf";

// function Interactive() {
//   useEffect(() => {
//     const canvas = document.getElementById("interactive");
//     const scene = new THREE.Scene();

//     const glftLoader = new GLTFLoader();
//     glftLoader.load(
//       "./free_merc_hovercar/scene.gltf",
//       (gltfScene) => {
//         gltfScene.scene.scale.set(0.5, 1, 1);
//         scene.add(gltfScene.scene);
//       },
//       () => {},
//       (error) => {
//         console.log(error);
//       }
//     );

//     const size = {
//       width: 1000,
//       height: 600,
//     };

//     const light = new THREE.DirectionalLight(0xffffff, 1);
//     light.position.set(1, 2, 5);
//     scene.add(light);

//     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     const meterial = new THREE.MeshBasicMaterial({
//       color: 0x00ff00,
//     });
//     const mesh = new THREE.Mesh(geometry, meterial);
//     // scene.add(mesh);

//     const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 100);
//     camera.position.set(0, 1, 2);
//     scene.add(camera);
//     const renderer = new THREE.WebGL1Renderer({
//       canvas,
//     });
//     renderer.setSize(size.width, size.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.shadowMap.enabled = true;
//     renderer.gammaOutput = true;

//     function animate() {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     }
//     animate();
//   }, []);
//   return (
//     <div id="interactiveParent">
//       <canvas id="interactive" />
//     </div>
//   );
// }

export default function Index() {
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const list = [{ model: "sample" }, { model: "sample" }, { model: "sample" }, { model: "sample" }];
  return (
    <CardsPageWrapper
      onClick={() => {
        if (selected !== false) {
          setSelected(false);
        }
      }}
    >
      {selected === false &&
        list.map((card, i) => (
          <SmallCard
            onClick={() => {
              setSelected(i);
              setLoading(true);
            }}
          >
            <img src={StarImg} alt="" aria-hidden="true" />
          </SmallCard>
        ))}
      {selected !== false && (
        <Popup>
          <div>
            {loading && <div className="loading">Slow Loading... Please wait </div>}

            <iframe
              onLoad={() => {
                setLoading(false);
              }}
              title="Parts of a cell"
              frameBorder={0}
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/cd9d5d3599204882a019bd10a0ab3f22/embed"
            />
            {/* <Interactive /> */}
          </div>
        </Popup>
      )}

      {/* <SmallCard /> */}
    </CardsPageWrapper>
  );
}
