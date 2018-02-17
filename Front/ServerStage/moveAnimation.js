/** Setup HTML Element **/
// Get Element Reference
var gameArea = document.getElementById('gameScreen');

// Change Based on Available setSize
gameArea.width = window.innerWidth;
gameArea.height = window.innerHeight;


/** Setup Render Engine **/
// Set WebGL
var renderer = new THREE.WebGLRenderer();

// Set Background Color
renderer.setClearColor(0x87CEEB);

// Set Size
renderer.setSize(gameArea.width, gameArea.width);

// Attach Render to HTML Element
document.body.appendChild(renderer.domElement);


/** Setup Camera & Orbital Controls **/
// Set Camera
var camera = new THREE.PerspectiveCamera(45, gameArea.width / gameArea.width, 1, 500);

// Set Camera Postion
camera.position.set(0, 0, 100);

// Set Camera Direction
camera.lookAt(new THREE.Vector3(0, 0, 0));

// Set Controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);


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
}

/** Animation Sequence **/
/** General Purpose Variables **/
var gpObj;        // Used to Store Object
var gpTarget;     // Used to Store Target
var gpDirection;  // Used to Store Direction
var childID;      // ID of Animator
var mainID;       // ID of Main Animator

// Simple
function animate() {
  // Efficient FPS Call
  mainID = requestAnimationFrame(animate);

  // Update based on Orbital Controls
  controls.update();
  camLight.position.copy(camera.position);

  // Render Scene
  renderer.render(scene, camera);
}

// Move
function moveAnimate() {
  // Efficient FPS Call
  var childID = requestAnimationFrame(moveAnimate);

  // Move Body
  if(gpDirection == "Up") {
    // Exit Call
    if(gpTarget < gpObj.position.y) {
      gpObj.position.y = gpTarget;
      cancelAnimationFrame(childID);
      animate();
    }

    // Move
    gpObj.position.y += 1.0
  }

  else if(gpDirection == "Down") {
    // Exit Call
    if(gpTarget > gpObj.position.y) {
      gpObj.position.y = gpTarget;
      cancelAnimationFrame(childID);
      animate();
    }

    // Move
    gpObj.position.y -= 1.0
  }

  else if(gpDirection == "Right") {
    // Exit Call
    if(gpTarget < gpObj.position.x) {
      gpObj.position.x = gpTarget;

      animate();
    }

    // Move
    gpObj.position.x += 1.0
  }

  else if(gpDirection == "Left") {
    // Exit Call
    if(gpTarget > gpObj.position.x) {
      gpObj.position.x = gpTarget;
      cancelAnimationFrame(childID);
      animate();
    }

    // Move
    gpObj.position.x -= 1.0
  }

  // Update based on Orbital Controls
  //controls.update();
  //camLight.position.copy(camera.position);

  // Render Scene
  //renderer.render(scene, camera);
}

/** Animation Handler **/
function moveHandler(str, obj) {
  // Null Handler
  if(str === undefined || obj === undefined || (str !== "Up" && str !== "Down" && str !== "Right" && str !== "Left")) {
    console.log("moveHanler(): Invalid Argument");
    return;
  }

  // Cancel Main & Child
  //cancelAnimationFrame(mainID);
  cancelAnimationFrame(childID);

  // Parse Target
  if(str == "Up") {
    gpTarget = obj.position.y + 7
  }
  else if(str == "Down") {
    gpTarget = obj.position.y - 7
  }
  else if(str == "Right") {
    gpTarget = obj.position.x + 7
  }
  else if(str == "Left") {
    gpTarget = obj.position.x - 7
  }

  // Stage Parameters
  gpObj = obj;
  gpDirection = str;

  // Call Animator
  moveAnimate();
}

/** Event Handler **/
window.addEventListener("keydown", keyCatcher, false);

// Parse Key Strokes
function keyCatcher(key) {
  // Up (W)
  if(key.keyCode == "87") {
    console.log("keyCatcher(): Registered \'W\' Key");
    moveHandler("Up", model);
  }

  // Down (S)
  else if(key.keyCode == "83") {
    console.log("keyCatcher(): Registered \'S\' Key");
    moveHandler("Down", model);
  }

  // Right (D)
  else if(key.keyCode == "68") {
    console.log("keyCatcher(): Registered \'D\' Key");
    moveHandler("Right", model);
  }

  // Left (A)
  else if(key.keyCode == "65") {
    console.log("keyCatcher(): Registered \'A\' Key");
    moveHandler("Left", model);
  }

  // Invalid
  else {
    console.log("keyCatcher(): Registered Invalid Key");
  }
}

/** Only meant for use in JSFiddle **/
//animate();

/** Only meant for use in Actual Browser **/
// Run if WebGL
if (Detector.webgl) {
  animate();
}

// Error if no WebGL
else {
  // Get Message
  var warning = Detector.getWebGLErrorMessage();

  // Post Message on Screen
  document.getElementById('container').appendChild(warning);
}
