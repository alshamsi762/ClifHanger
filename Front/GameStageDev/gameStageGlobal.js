/**
* Description: The Stage Global is where all gloablly
* used variables are inititialized. The variables that
* are present here need to be used elsewhere. If they
* are not used elsewhere, place the varibales where they are
* used once instead of here. Also objects are created here.
**/

/** Config Vars **/
var BACKGROUND_COLOR = 0x87CEEB;
var LAMBERT_COLOR = 0xD7DFE5;
var AXES = true;
var AXES_SIZE = 5;
var LIGHT_COLOR = 0xFFFFFF;
var LIGHT_INTENSITY = 0.5
var PLATE_SIZE = 7
var PLATE_THICKNESS = 1

/** Setup HTML Element **/
// Get Element Reference
var screen = document.getElementById('gameScreen');
// Change Based on Available setSize
screen.width = window.innerWidth;
screen.height = window.innerHeight;

/** Setup Render Engine **/
// Set WebGL
var draw = new THREE.WebGLRenderer();

/** Setup cam & Orbital Controls **/
// Set cam
var cam = new THREE.PerspectiveCamera(45, screen.width / screen.width, 1, 500);
// Set Controls
var controls = new THREE.OrbitControls(cam, draw.domElement);

/** Setup Geometries **/
// Set Scene
var scene = new THREE.Scene();
// Add Axis
var axes = new THREE.AxesHelper(AXES_SIZE);
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
var STL = new THREE.STLLoader();
function loadHandler(geometry) {
  model = new THREE.Mesh( geometry, lambert );
  model.position.set(-9.0, -8.4, -2.0);
  model.scale.set( 0.09, 0.09, 0.09 );
  scene.add(model);
}
