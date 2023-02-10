import * as THREE from '/src/js/three.module.js'
import { FBXLoader } from '/src/js/FBXLoader.js'
import { OrbitControls } from './OrbitControls.js';

//Mouse
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const objects = [];
//Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

//Material
const material = new THREE.MeshStandardMaterial({ color: 0x3277a8 });
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffabed,
    roughness: 1,
    metalness: 0,
});

//Model
const group = new THREE.Group();
const fbxLoader = new FBXLoader();
const test = await fbxLoader.loadAsync('/src/static/fbx/test.fbx');
const test2 = await fbxLoader.loadAsync('/src/static/fbx/test2.fbx');
const test3 = await fbxLoader.loadAsync('/src/static/fbx/test3.fbx');
const test4 = await fbxLoader.loadAsync('/src/static/fbx/test4.fbx');
const test5 = await fbxLoader.loadAsync('/src/static/fbx/test5.fbx');
const test6 = await fbxLoader.loadAsync('/src/static/fbx/test6.fbx');
const test7 = await fbxLoader.loadAsync('/src/static/fbx/test7.fbx');
const test8 = await fbxLoader.loadAsync('/src/static/fbx/test8.fbx');
const room = await fbxLoader.loadAsync('/src/static/fbx/room.fbx');
const try1 = await fbxLoader.loadAsync('/src/static/fbx/try.fbx');
objects[0] = test;
objects[1] = test2;
objects[2] = test3;
objects[3] = test4;
objects[4] = test5;
objects[5] = test6;
objects[6] = test7;
objects[7] = test8;

test.position.set(0, 0, 22);
test2.position.set(20, 0, 0);
test3.position.set(-20, 0, 0);
test4.position.set(0, 0, -18);
test5.position.set(-13, 0, 15);
test6.position.set(-13, 0, -11);
test7.position.set(13, 0, 15);
test8.position.set(13, 0, -11);

room.position.set(0, -8, 0);
try1.position.set(0, 0, -8)

group.scale.set(0.7, 0.7, 0.7);
group.add(test);
group.add(test2);
group.add(test3);
group.add(test4);
group.add(test5);
group.add(test6);
group.add(test7);
group.add(test8);
scene.add(group);
scene.add(room);
scene.add(try1);
// group.add(test);

group.rotation.set(0, 0, 0);


//Floor
const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

planeMesh.receiveShadow = true;
planeMesh.castShadow = false;
var angle = -90 * (Math.PI / 180);
planeMesh.position.set(0, -3, 0);
planeMesh.rotation.set(calRadians(-90), 0, 0);
// scene.add(planeMesh);

//Axis
// const worldAxis = new THREE.AxesHelper(5);
// mesh.add(worldAxis);

//Light
const light = new THREE.HemisphereLight(0xffffff, 0x000, 1.5);
scene.add(light);

//Camera
const camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.set(0, 30, 100)
// camera.rotateOnAxis(camera.rotation.x, 0)
camera.lookAt(0, 0.5, 0);
scene.add(camera);

//Render
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(0xffffff);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

//Control
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.y = 0.5;

window.addEventListener('resize', onWindowResize);
// document.addEventListener('click', onClick);
document.addEventListener('wheel', onWheel);

animate();

function calRadians(angle) {
    return angle * (Math.PI / 180);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();
}

function onClick(event) {
    console.log(test.scale.x);
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const intersections = raycaster.intersectObjects(objects, true);
    if (intersections.length > 0) {
        const object = intersections[0].object;
        object.scale.set(200, 200, 200);
        console.log(intersections.length);
    }
}

function onWheel() {
    group.rotateY(0.2);
}

function render() {
    // controls.update();
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}