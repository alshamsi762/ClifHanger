var THREE = require('three');
const gSG = require('./_frontGlobal.js');
const gSM = require('./_frontMain.js');

/** Global **/

test('Test if Camera is Perspective', () =>{
  expect(gSG.cam.isPerspectiveCamera).toBeTruthy();
});

test('Test if Camera has right Aspect Ratio', () =>{
  expect(gSG.cam.aspect).toBe(gSG.screen.width / gSG.screen.height);
});

test('Test if Camera has right FOV', () =>{
  expect(gSG.cam.fov).toBe(global.CAM_FOV);
});

test('Test if Camera has right Far Plane', () =>{
  expect(gSG.cam.far).toBe(global.CAM_FAR_PLANE);
});

test('Test if Camera has right Near Plane', () =>{
  expect(gSG.cam.near).toBe(global.CAM_NEAR_PLANE);
});

test('Test if Scene is Created', () =>{
  expect(gSG.scene.type).toBe(new THREE.Scene().type);
  expect(gSG.scene.matrix).toEqual(new THREE.Scene().matrix);
});

test('Test if Light is Ambient', () => {
  expect(gSG.ambLight.isAmbientLight).toBeTruthy();
});

test('Test if Light has Color', () => {
  expect(gSG.ambLight.color.getHex()).toBe(global.LIGHT_COLOR);
});

test('Test if Light has Intesity', () => {
  expect(gSG.ambLight.intensity).toBe(global.LIGHT_INTENSITY);
});

test('Test if Light is Point', () => {
  expect(gSG.pointLight.isPointLight).toBeTruthy();
});

test('Test if Light has Color', () => {
  expect(gSG.pointLight.color.getHex()).toBe(global.LIGHT_COLOR);
});

test('Test if Light has Intesity', () => {
  expect(gSG.pointLight.intensity).toBe(global.LIGHT_INTENSITY / 2);
});

test('Test if Material is Lambert', () => {
  expect(gSG.lambert.isMeshLambertMaterial).toBeTruthy();
});

test('Test if Material has Color', () => {
  expect(gSG.lambert.color.getHex()).toBe(global.LAMBERT_COLOR);
});

test('Test if Geometry is Created', () => {
  expect(gSG.plateGeom.parameters.width).toBe(global.PLATE_SIZE);
  expect(gSG.plateGeom.parameters.height).toBe(global.PLATE_SIZE);
  expect(gSG.plateGeom.parameters.depth).toBe(global.PLATE_THICKNESS);
});

test('Test if Mesh is Created', () => {
  expect(gSG.plate.isMesh).toBeTruthy();
});

test('Test if Mesh has Material', () => {
  expect(gSG.plate.material).toEqual(gSG.lambert);
});

test('Test if Mesh has Geometry', () => {
  expect(gSG.plate.geometry).toEqual(gSG.plateGeom);
});

/** Builder **/

/** Main **/
test('Test if The 25 plates have been created', () => {
  for (var i = 0; i < plateArray.length; i++) {
  expect(plateArray[i].length).toEqual(5);
  }
  expect(plateArray.length).toEqual(5);
});


test('Test if The light dynamically moves with the camera', () => {
  expect(camLight.position).toEqual(camera.position);
});

test('Test if The 25 plates have been created', () => {
  for (var i = 0; i < plateArray.length; i++) {
  expect(plateArray[i].length).toEqual(5);
  }
  expect(plateArray.length).toEqual(5);
});


/** Main **/
