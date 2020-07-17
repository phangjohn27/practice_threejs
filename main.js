// import * as THREE from 'three'; //Why doesn't this work???

let scene, camera, renderer, cube;

//help resize the window if you minimize or maximize it.
function init(){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
    25, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
    );

    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );

const texture = new THREE.TextureLoader().load('pictures/kirby_n_soda.jpg');
const material = new THREE.MeshBasicMaterial( {map: texture} );
cube = new THREE.Mesh( geometry, material );
scene.add( cube );


camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();