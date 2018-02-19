var THREE = require('three');
const gSG = require('./gameStageGlobal.js');

/** Global **/

test('Test if Camera is Perspective', () =>{
  expect(gSG.cam.isPerspectiveCamera).toBeTruthy();
});

test('Test if Camera has right Aspect Ratio', () =>{
  expect(gSG.cam.aspect).toBe(gSG.screen.width / gSG.screen.height);
});

test('Test if Camera has right FOV', () =>{
  expect(gSG.cam.fov).toBe(gSG.CAM_FOV);
});

test('Test if Camera has right Far Plane', () =>{
  expect(gSG.cam.far).toBe(gSG.CAM_FAR_PLANE);
});

test('Test if Camera has right Near Plane', () =>{
  expect(gSG.cam.near).toBe(gSG.CAM_NEAR_PLANE);
});

test('Test if Scene is Created', () =>{
  expect(gSG.scene.type).toBe(new THREE.Scene().type);
  expect(gSG.scene.matrix).toEqual(new THREE.Scene().matrix);
});

test('Test if Light is Ambient', () => {
  expect(gSG.ambLight.isAmbientLight).toBeTruthy();
});

test('Test if Light has Color', () => {
  expect(gSG.ambLight.color.getHex()).toBe(gSG.LIGHT_COLOR);
});

test('Test if Light has Intesity', () => {
  expect(gSG.ambLight.intensity).toBe(gSG.LIGHT_INTENSITY);
});

test('Test if Light is Point', () => {
  expect(gSG.pointLight.isPointLight).toBeTruthy();
});

test('Test if Light has Color', () => {
  expect(gSG.pointLight.color.getHex()).toBe(gSG.LIGHT_COLOR);
});

test('Test if Light has Intesity', () => {
  expect(gSG.pointLight.intensity).toBe(gSG.LIGHT_INTENSITY / 2);
});

test('Test if Material is Lambert', () => {
  expect(gSG.lambert.isMeshLambertMaterial).toBeTruthy();
});

test('Test if Material has Color', () => {
  expect(gSG.lambert.color.getHex()).toBe(gSG.LAMBERT_COLOR);
});

test('Test if Geometry is Created', () => {
  expect(gSG.plateGeom.parameters.width).toBe(gSG.PLATE_SIZE);
  expect(gSG.plateGeom.parameters.height).toBe(gSG.PLATE_SIZE);
  expect(gSG.plateGeom.parameters.depth).toBe(gSG.PLATE_THICKNESS);
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
