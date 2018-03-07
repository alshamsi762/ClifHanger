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
      cancelAnimationFrame(childID);
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
  controls.update();
  camLight.position.copy(camera.position);

  // Render Scene
  renderer.render(scene, camera);
}

/** Animation Handler **/
function moveHandler(str, obj) {
  // Null Handler
  if(str === undefined || obj === undefined || (str !== "Up" && str !== "Down" && str !== "Right" && str !== "Left")) {
    console.log("moveHanler(): Invalid Argument");
    return;
  }

  // Cancel Main & Child
  cancelAnimationFrame(mainID);
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
