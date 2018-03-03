/**
* Description: The Stage Builder is responsible for controlling
* variables that are specific to the game enviroment and stage.
* This can include things like lighting, stage size etc.
* This should only be used as a setup and not as a continously
* running script.
**/

/** Initialize Minimum Vars **/
function initScreen() {
  // Set Background Color
  draw.setClearColor(BACKGROUND_COLOR);
  // Set Size
  draw.setSize(screen.width, screen.height);
  // Attach Render to HTML Element
  document.body.appendChild(draw.domElement);
  // Set cam Postion
  cam.position.set(CAM_POS.X, CAM_POS.Y, CAM_POS.Z);
  // Set cam Direction
  cam.lookAt(new THREE.Vector3(CAM_LOOK.X, CAM_LOOK.Y, CAM_LOOK.Z));
  // Add Axes
  if(AXES) {
    scene.add(axes);
  }
  // Add Lights
  scene.add(ambLight);
  scene.add(pointLight);

  // Console Print
  if(VERBOSE && !TESTING) {
    console.log("Scene Color and Size Set");
    if(DEEP_VERBOSE){
      console.log(scene);
    }
    console.log("Camera Oriented and Positioned");
    if(DEEP_VERBOSE){
      console.log(cam);
    }
    console.log("Lights Added");
    if(DEEP_VERBOSE){
      console.log(ambLight);
      console.log(pointLight);
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

      // Console Print
      if(VERBOSE && !TESTING) {
        console.log("WebGL Detected \n Lights Camera Action!!!");
      }
    }

    // Error if no WebGL
    else {
      // Get Message
      var warning = Detector.getWebGLErrorMessage();

      // Post Message on Screen
      document.getElementById('container').appendChild(warning);
    }
  }
}


/** Build Stage **/
function buildStage(size) {
  // Add Plate to Scene
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      obj3DArray[i+j] = plate.clone();
      obj3DArray[i+j].position.z = PLATE_DEPTH;
      obj3DArray[i+j].position.x = (PLATE_SIZE + PLATE_GAP) * i;
      obj3DArray[i+j].position.y = (PLATE_SIZE + PLATE_GAP) * j;
      scene.add(obj3DArray[i+j]) ;
      SP++;
    }
  }

  // Console Print
  if(VERBOSE && !TESTING) {
    console.log("Plates Generated and Added to Scene");
    console.log("Stack Pointer: ", SP);
    if(DEEP_VERBOSE){
      console.log(obj3DArray);
      console.log(scene);
    }
  }
}


/** Load Asset **/
// Handler
function loadHandler(geometry) {
  obj3DArray[SP] = new THREE.Mesh( geometry, lambert );
  scene.add(obj3DArray[SP]);
  SP++;
}

// Function
function loadSTL(filename) {
  STL.load(filename, loadHandler);

  // Console Print
  if(VERBOSE && !TESTING) {
    console.log("Load Object onto Scene and Added to Array");
    console.log("Stack Pointer: ", SP);
    if(DEEP_VERBOSE){
      console.log(obj3DArray);
      console.log(scene);
    }
  }

  return (SP - 1);
}
