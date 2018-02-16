// @author Anjali Malik
// @email malik11@purdue.edu

"use strict";

// global variables
var scene, camera, renderer;
var cube;
var w  = window.innerWidth;
var h = window.innerHeight;

// call functions 
init();
render();

function init() {
    scene = new THREE.Scene(); // create new scene

    camera = new THREE.PerspectiveCamera(70, w/h, 0.01, 10);  // using a perspective camera
    camera.position.set(5, 5, 5); // move the camera
    camera.lookAt(scene.position); // orientate to look at the center of the scene

    // initialize renderer
    renderer = new THREE.WebGLRenderer({ antialias: true }); // using WebGL
    renderer.setSize(w, h);

    // method to update the viewport
    window.addEventListener('resize', function(){
        renderer.setSize(window.innerWidth, window.innerHeight); // re-size
        camera.aspect = window.innerWidth / window.innerHeight; // update aspect ratio
        camera.updateProjectionMatrix();
    });
    
    // add Orbital controls to the DOM
    var controls = new THREE.OrbitControls( camera, renderer.domElement);

    initCube(); // initialize cube mesh and add to the scene
    document.body.appendChild(renderer.domElement); // appending renderer into the DOM
}

function render() {
  requestAnimationFrame(render); //efficient way to call function periodically
  cubing(); // for spinning
  renderer.render(scene, camera);
}

function initCube() {
    var geometry = new THREE.CubeGeometry(2, 2, 2); // set cube geometry 
    //var material = new THREE.MeshBasicMaterial({ color: 0xffacac  }, { aoMapIntensity: 0.5}, { wireframe: true }); // material of the cube
    var material = new THREE.MeshNormalMaterial();
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube); // add to the scene
}

function cubing(){
    // manipulating rotating speeds for spinning of the cube
    cube.rotation.x -= 0.02;
    cube.rotation.y -= 0.02;
    cube.rotation.z -= 0.02;
}
