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
<<<<<<< HEAD
    controls.target.set(220/2, -220/2, 0);
    controls.update();
    pointLight.position.copy(cam.position);
=======

    controls.update();
    pointLight.position.copy(cam.position);
    // controls.target.set(220/2, -108, -1);
    // controls.update();
>>>>>>> master
    // Render Scene
    draw.render(scene, cam);
  }
}
