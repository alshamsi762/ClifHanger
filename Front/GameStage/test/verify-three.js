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
  assert(Global.cubeMaterial.isMeshNormalMaterial)e;
})
})
