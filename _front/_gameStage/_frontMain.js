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
    pointLight.position.copy(cam.position);
    // controls.target.set(220/2, -108, -1);
    // controls.update();
    // Render Scene
    draw.render(scene, cam);
  }
}
