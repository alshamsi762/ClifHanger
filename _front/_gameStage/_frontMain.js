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
    controls.target.set(220/2, -220/2, 0);
    controls.update();
    pointLight.position.copy(cam.position);

    // Render Scene
    draw.render(scene, cam);
  }
}
