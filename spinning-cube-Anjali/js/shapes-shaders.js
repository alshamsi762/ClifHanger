// @author Anjali Malik
// @email malik11@purdue.edu

"use strict";

// global variables
var renderer,
scene,
camera,
mesh1, 
mesh2, 
mesh3,
vertexDisplacement,
//controls,
canvas = document.getElementById('canvas'),
delta = 0;;

//call init
init(); 

function init() {

    //RENDERER
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    });

    renderer.setClearColor(0x4B0082);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    //CAMERA
    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000);
    //camera.lookAt(scene.position);
    //camera.position.z = 200;

    //SCENE
    scene = new THREE.Scene();

    //LIGHTS
    var light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    var light2 = new THREE.PointLight(0xffffff, 0.5);
    scene.add(light2);


    var customUniforms = {
        delta: { value: 0 }
    };

    var phongShader = THREE.ShaderLib.phong;
    var mUniforms = THREE.UniformsUtils.merge([phongShader.uniforms, customUniforms]);

    var material = new THREE.ShaderMaterial({
        uniforms: mUniforms,
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent
    });

    var sphereGeometry = new THREE.SphereGeometry(150, 50, 50);
    var geometry = new THREE.BufferGeometry().fromGeometry(sphereGeometry);
    mesh1 = new THREE.Mesh(geometry, material);
    mesh1.position.z = -1000;
    mesh1.position.x = -100;
    scene.add(mesh1);

    var OctahedronGeometry = new THREE.OctahedronGeometry(120, 0);
    //new THREE.IcosahedronGeometry(100, 1);
    var geometry2 = new THREE.BufferGeometry().fromGeometry(OctahedronGeometry);
    //var geometry2 = new THREE.BoxBufferGeometry(150, 150, 150, 10, 20,20);
    //var geometry2 = new THREE.IcosahedronBufferGeometry(100, 0);
    //var geometry = new THREE.DodecahedronBufferGeometry(100, 0);
    mesh2 = new THREE.Mesh(geometry2, material);
    mesh2.position.z = -1000;
    mesh2.position.y = 50;
    mesh2.position.x = 180;
    scene.add(mesh2);

    var geometry3 = new THREE.BoxBufferGeometry(150, 150, 150, 10, 10, 10);
    //var geometry2 = new THREE.IcosahedronBufferGeometry(100, 0);
    //var geometry = new THREE.DodecahedronBufferGeometry(100, 0);
    mesh3 = new THREE.Mesh(geometry3, material);
    mesh3.position.z = -1000;
    mesh3.position.y = -150;
    mesh3.position.x = 100;
    scene.add(mesh3);

    vertexDisplacement = new Float32Array(geometry.attributes.position.count);

    for (var i = 0; i < vertexDisplacement.length; i++) {
        vertexDisplacement[i] = Math.sin(i);
    }

    geometry.addAttribute('vertexDisplacement', new THREE.BufferAttribute(vertexDisplacement, 1));
    geometry3.addAttribute('vertexDisplacement', new THREE.BufferAttribute(vertexDisplacement, 1));


    // method to update the viewport
    window.addEventListener('resize', function () {
        renderer.setSize(window.innerWidth, window.innerHeight); // re-size
        camera.aspect = window.innerWidth / window.innerHeight; // update aspect ratio
        camera.updateProjectionMatrix();
    });
    // add Orbital controls to the DOM
    let controls = new THREE.OrbitControls(camera, renderer.domElement);

    //RENDER LOOP
    render();
}

function render() {
    //controls.update();
    delta -= 0.1;

    mesh1.material.uniforms.delta.value = +0.1 + Math.sin(delta) * 0.01;
    mesh2.material.uniforms.delta.value = +0.1 + Math.sin(delta) * 0.01;
    mesh3.material.uniforms.delta.value = +0.1 + Math.sin(delta) * 0.01;

    for (var i = 0; i < vertexDisplacement.length; i++) {
        vertexDisplacement[i] = 0.5 + Math.sin(i + delta) * 0.25;
    }

    mesh1.geometry.attributes.vertexDisplacement.needsUpdate = true;

    
    mesh3.geometry.attributes.vertexDisplacement.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
