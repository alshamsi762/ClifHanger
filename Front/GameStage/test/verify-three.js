var THREE = require('three');
var assert = require("assert");
var Global = require('../gameStageGlobal.js')

describe('The THREE object', function() {
  it('should have a defined BasicShadowMap constant', function() {
    assert.notEqual('undefined', THREE.BasicShadowMap);
  }),

  it('should be able to construct a Vector3 with default of x=0', function() {
    var vec3 = new THREE.Vector3();
    assert.equal(0, vec3.x);
  })
})

describe('Global', function() {
  //a = new THREE.MeshNormalMaterial();
  it('should be able to construct a Vector3 with default of x=0', function() {
    a = new THREE.MeshNormalMaterial();
    //a.uuid = Global.cubeMaterial.uuid;
  assert(Global.cubeMaterial.isMeshNormalMaterial);
  })
})

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

// check geometry of mesh
describe('Global', function() {
  it('cube and plate should of lambert material', function() {
    assert(Global.cubeMaterial.isMeshLambertMaterial);
    assert(Global.plateMaterial.isMeshLambertMaterial);
  })
})


