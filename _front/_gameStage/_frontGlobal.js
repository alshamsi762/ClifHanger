/**
* Description: The _frontGlobal.js is where all globally
* used variables are initialized. The variables that
* are present here need to be used elsewhere. If they
* are not used elsewhere, place the variables where they are
* used once instead of here. Also objects are created here.
**/

/** Config Vars **/
global.TESTING = true;
global.ELEMENT_ID = 'gameScreen';
global.BACKGROUND_COLOR = 0x87CEEB;
global.LAMBERT_COLOR = 0xD7DFE5;
global.AXES = true;
global.AXES_SIZE = 5;
global.LIGHT_COLOR = 0xFFFFF0;
global.LIGHT_INTENSITY = 0.5;
global.PLATE_SIZE = 7;
global.PLATE_THICKNESS = 1;
global.CAM_FOV = 45;
global.CAM_FAR_PLANE = 500;
global.CAM_NEAR_PLANE = 1;
global.CAM_POS = {X:0, Y:0, Z:100};
global.CAM_LOOK = {X:0, Y:0, Z:0};
global.PLATE_POS_FACTOR = {X:8, Y:8, Z:-3};

// Import Node Lib
if (TESTING) {
  var THREE = require('three');
}


/** Setup HTML Element **/
// Get Element Reference

// NOT TESTABLE
if (!TESTING) {
  var screen = document.getElementById(ELEMENT_ID);
  // Change Based on Available setSize
  screen.width = window.innerWidth;
  screen.height = window.innerHeight;
}

// TESTABLE ALTERNATIVE
if (TESTING && TESTING_SSIDE) {
  var screen = {
    width: 100,
    height: 50
  };
}


/** Setup Render Engine **/
// Set WebGL

// NOT TESTABLE
if (!TESTING) {
  var draw = new THREE.WebGLRenderer();
}


/** Setup cam & Orbital Controls **/
// Set cam
var cam = new THREE.PerspectiveCamera(CAM_FOV, screen.width / screen.height, CAM_NEAR_PLANE, CAM_FAR_PLANE);
// Set Controls

// NOT TESTABLE
if (!TESTING) {
  var controls = new THREE.OrbitControls(cam, draw.domElement);
}


/** Setup Geometries **/
// Set Scene
var scene = new THREE.Scene();
// Add Axis
if (AXES) {
  var axes = new THREE.AxesHelper(AXES_SIZE);
}
// Set Lighting
var ambLight = new THREE.AmbientLight(LIGHT_COLOR, LIGHT_INTENSITY);
var pointLight = new THREE.PointLight(LIGHT_COLOR, LIGHT_INTENSITY / 2);
// Set Material
var lambert = new THREE.MeshLambertMaterial({color: LAMBERT_COLOR});
// Set Geometry
var plateGeom = new THREE.CubeGeometry(PLATE_SIZE, PLATE_SIZE, PLATE_THICKNESS);
// Set Plate with Geometry & Material
var plate = new THREE.Mesh(plateGeom, lambert);


/** Load Custom Object **/
// 3D Object Array (Remove from Here)
var obj3DArray = [];


// NOT TESTABLE
if (!TESTING) {
  var STL = new THREE.STLLoader();
}


function loadHandler(geometry) {
  model = new THREE.Mesh( geometry, lambert );
  model.position.set(-9.0, -8.4, -2.0);
  model.scale.set( 0.09, 0.09, 0.09 );
  scene.add(model);
}
