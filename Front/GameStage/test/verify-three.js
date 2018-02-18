var THREE = require('three');
var assert = require("assert");
var Global = require('../gameStageGlobal.js')


// to check if lights are of correct types
describe('Global', function() {
  it('ambient light should be of correct type', function() {
    assert(Global.ambLight.isAmbientLight);
  })
})

describe('Global', function() {
  it('point light should be of correct type', function() {
    assert(Global.camLight.isPointLight);
  })
})
/*
// to check type of camera
describe('Global', function() {
  it('camera should be of the perspective type', function() {
    assert(Global.camera.isPerspectiveCamera);
  })
}) 


// to ensure proper use of orbital controls
describe('Global', function() {
  it('orbital controls should control camera only', function() {
    assert.equal(Global.camera, Global.controls.object);
  })
})
*/
// check material of mesh
describe('Global', function() {
  it('cube and plate should of lambert material', function() {
    assert(Global.cube.material.isMeshLambertMaterial);
    assert(Global.plate.material.isMeshLambertMaterial);
  })
})

// check color of mesh
// this is important because one of the animations changes colors of objects
describe('Global', function() {
  it('cube and plate should be of the expected color', function() {
    assert.equal(Global.cube.material.color.r, 0.6392156862745098);
    assert.equal(Global.cube.material.color.b, 0.6392156862745098);
    assert.equal(Global.cube.material.color.g, 0.6392156862745098);

    assert.equal(Global.plate.material.color.r, 0.8431372549019608);
    assert.equal(Global.plate.material.color.b, 0.8980392156862745);
    assert.equal(Global.plate.material.color.g, 0.8745098039215686);
  })
})

// check color of lights
// this is important because one of the animations changes colors of lights
describe('Global', function() {
  it('lights should be of the expected color', function() {
    assert.equal(Global.camLight.color.r, 1);
    assert.equal(Global.camLight.color.b, 1);
    assert.equal(Global.camLight.color.g, 1);

    assert.equal(Global.ambLight.color.r, 1);
    assert.equal(Global.ambLight.color.b, 1);
    assert.equal(Global.ambLight.color.g, 1);
  })
})

// cube dimensions and geometry
describe('Global', function() {
  it('cube should have a cube geometry with sizes as expected', function() {
    var geo = new THREE.CubeGeometry(4, 4, 4);
    assert.equal(Global.cube.geometry.type, geo.type);
    assert.equal(Global.cube.geometry.vertices.x, geo.vertices.x);
    assert.equal(Global.cube.geometry.vertices.y, geo.vertices.y);
    assert.equal(Global.cube.geometry.vertices.z, geo.vertices.z);

  })
})

// each plate dimensions and geometry
describe('Global', function() {
  it('each plate should have a cube geometry with sizes as expected', function() {
    var geo = new THREE.CubeGeometry(7, 7, 1);
    assert.equal(Global.plate.geometry.type, geo.type);
    assert.equal(Global.plate.geometry.vertices.x, geo.vertices.x);
    assert.equal(Global.plate.geometry.vertices.y, geo.vertices.y);
    assert.equal(Global.plate.geometry.vertices.z, geo.vertices.z);

  })
})

// plate array should initially have 25 components
// this is important because we will be shrinking the plate array
describe('Global', function() {
  it('plate array should initially have 25 components (5x5)', function() {
    assert.equal(Global.plateArray.length, 5);

  })
})

