initScreen();
buildStage(10);
console.log("Driver:" ,loadSTL('_assets/Spider_Scaled.stl'));
THREE.DefaultLoadingManager.onLoad = function ( ) {
setColorRGB(100, 0, 0.99, 0);
};
