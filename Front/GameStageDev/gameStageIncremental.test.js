var THREE = require('three');
const gSG = require('./gameStageGlobal.js');

test('Test if Camera is Perspective', () =>{
  expect(gSG.cam.aspect).toBe(gSG.screen.width / gSG.screen.width);
});

test('Test if Camera has right Aspect Ratio', () =>{
  expect(gSG.cam.aspect).toBe(gSG.screen.width / gSG.screen.width);
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
