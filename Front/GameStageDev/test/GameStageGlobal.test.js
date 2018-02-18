//var THREE = require('three');
var assert = require('assert');
var THREE = require('../gameStageGlobal.js')


  test('should have a defined cam constant', () => {
    expect(THREE.cam.isPerspectiveCamera).toBe(true);
  });

  test('should have a defined scene constant', () => {
    expect(THREE.scene.autoUpdate).toBe(true);
  });


  test('should have a defined axes constant', () => {
    expect(THREE.axes).not.toBe('undefined');
  });


  test('should have a defined ambLight constant', () => {
    expect(THREE.ambLight.isAmbientLight).toBe(true);
  });


  test('should have a defined pointLight constant', () => {
    expect(THREE.pointLight.isPointLight).toBe(true);
  });

  it('should have a defined pointLight constant', function() {
    assert.ok(THREE.pointLight.isPointLight);
  }),

  test('should have a defined lambert constant', () => {
    expect(THREE.lambert.isMeshLambertMaterial).toBe(true);
  });

  test('should have a defined plateGeom constant', () => {
    expect(THREE.plateGeom.parameters.width).toBe(7);
  });

  test('should have a defined plate constant', () => {
    expect(THREE.plate.isMesh).toBe(true);
  });
