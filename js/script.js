import * as THREE from '../node_modules/three/build/three.min'
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const contact = document.querySelector('.contact')

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
contact.appendChild(renderer.domElement);

const loader = new GLTFLoader();

loader.load( '../medias/gltf/feu.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );