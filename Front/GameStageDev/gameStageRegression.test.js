var THREE = require('three');
const gSG = require('./gameStageGlobal.js');

/** Global **/

test('Test if Screen Width and Height are correctly obtained.', () =>{
  expect(gSG.screen.width).not.toBe(gSG.screen.height);
});

test('Test if Camera has right Aspect Ratio and not 1.', () =>{
  expect(gSG.cam.aspect).not.toBe(1);
});

test('Test if Camera FOV is resonable', () =>{
  expect(gSG.cam.fov).toBeGreaterThan(30);
  expect(gSG.cam.fov).toBeLessThan(100);
});

test('Test if Camera Far Plane is resonable', () =>{
  expect(gSG.cam.far).toBeGreaterThan(200);
});

test('Test if Camera Near Plane is resonable', () =>{
  expect(gSG.cam.near).toBeLessThan(10);
});

test('Test if Ambient Light has Color that is Not Default', () => {
  expect(gSG.ambLight.color.getHex()).not.toBe(0xFFFFFF);
});

test('Test if Point Light has Color that is Not Default', () => {
  expect(gSG.pointLight.color.getHex()).not.toBe(0xFFFFFF);
});

test('Test if Material has Color that is Not Default', () => {
  expect(gSG.lambert.color.getHex()).not.toBe(0xFFFFFF);
});

test('Test if Geometry Size is resonable Large', () => {
  expect(gSG.plateGeom.parameters.width).toBeGreaterThan(1);
  expect(gSG.plateGeom.parameters.height).toBeGreaterThan(1);
  expect(gSG.plateGeom.parameters.depth).toBeGreaterThan(0.5);
});

test('Test if Geometry Size is resonable Small', () => {
  expect(gSG.plateGeom.parameters.width).toBeLessThan(10);
  expect(gSG.plateGeom.parameters.height).toBeLessThan(10);
  expect(gSG.plateGeom.parameters.depth).toBeLessThan(5);
});

/** Builder **/
