/**
* Description: The Stage Builder is responsible for controlling
* variables that are specific to the game enviroment and stage.
* This can include things like lighting, stage size etc.
* This should only be used as a setup and not as a continously
* running script.
**/

function initScreen() {
  // Set Background Color
  draw.setClearColor(BACKGROUND_COLOR);
  // Set Size
  draw.setSize(screen.width, screen.height);
  // Attach Render to HTML Element
  document.body.appendChild(draw.domElement);
  // Set cam Postion
  cam.position.set(0, 0, 100);
  // Set cam Direction
  cam.lookAt(new THREE.Vector3(0, 0, 0));
  // Add Axes
  if(AXES) {
    scene.add(axes);
  }
  // Add Lights
  scene.add(ambLight);
  scene.add(pointLight);
}

STL.load('./ServerStaging/yodabust.stl', loadHandler);
