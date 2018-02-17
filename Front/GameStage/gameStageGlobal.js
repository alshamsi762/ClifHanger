var THREE = require('three');
/** Setup HTML Element **/
// Get Element Reference
/**
var gameArea = document.getElementById('gameScreen');

// Change Based on Available setSize
gameArea.width = window.innerWidth;
gameArea.height = window.innerHeight;
**/

/** Setup Render Engine **/
// Set WebGL
/**
var renderer = new THREE.WebGLRenderer();

// Set Background Color
renderer.setClearColor(0x87CEEB);

// Set Size
renderer.setSize(gameArea.width, gameArea.width);

// Attach Render to HTML Element
document.body.appendChild(renderer.domElement);
**/


/** Setup Camera & Orbital Controls **/
// Set Camera
/**
//var camera = new THREE.PerspectiveCamera(45, gameArea.width / gameArea.width, 1, 500);

// Set Camera Postion
camera.position.set(0, 0, 100);

// Set Camera Direction
camera.lookAt(new THREE.Vector3(0, 0, 0));

// Set Controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
**/


/** Setup Geometries **/
// Set Scene
var scene = new THREE.Scene();

// Add Axis
var axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

// Set Lighting
var ambLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(ambLight);
var camLight = new THREE.PointLight(0xFFFFFF, 0.25);
scene.add(camLight);

// Set Material
var cubeMaterial = new THREE.MeshNormalMaterial();
var plateMaterial = new THREE.MeshLambertMaterial({color: 0xD7DFE5});

// Set Geometry
var cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
var plateGeometry = new THREE.CubeGeometry(7, 7, 1);

// Set Cube & Plate with Geometry & Material
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
var plate = new THREE.Mesh(plateGeometry, plateMaterial);

/** Load Custom Object **/
/**
var model;
var loader = new THREE.STLLoader();
loader.load('yodabust.stl', loadHandler);
function loadHandler(geometry) {
  model = new THREE.Mesh( geometry, cubeMaterial );
  model.position.set(-9.0, -8.4, -2.0);
  model.scale.set( 0.09, 0.09, 0.09 );
  scene.add(model);
}

// Add Cube & Plate to Scene
//scene.add(cube);
var plateArray = [];
for (i = 0; i < 5; i++) {
  for (j = 0; j < 5; j++) {
    plateArray[i] = plate.clone();
    plateArray[i].position.z = -3;
    plateArray[i].position.x = 8 * i;
    plateArray[i].position.y = 8 * j;
    scene.add(plateArray[i]) ;
  }

}**/
module.exports = {
  scene
  , axesHelper
  , ambLight
  , camLight
  , cubeMaterial
  , plateMaterial
  , cubeGeometry
  , plateGeometry
  , cube
  , plate

};
