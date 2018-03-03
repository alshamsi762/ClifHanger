/**
* Description: TODO
**/


/** Animation Sequence **/
// Simple
// NOT TESTABLE
if (!TESTING) {
function animate() {
  // Efficient FPS Call
  requestAnimationFrame(animate);

  // Update based on Orbital Controls
  controls.update();
  camLight.position.copy(camera.position);

  // Render Scene
  renderer.render(scene, camera);
}
}

/** Only meant for use in JSFiddle **/
//animate();

/** Only meant for use in Actual Browser **/
// Run if WebGL
// NOT TESTABLE
if (!TESTING) {
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
}
