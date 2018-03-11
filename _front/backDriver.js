initScreen();
buildStage(10);
console.log("Driver:" ,loadSTL('_assets/Spider_Scaled.stl'));
THREE.DefaultLoadingManager.onLoad = function ( ) {
fallPiece(65);
movePiece(100, "Y-");
lookAtMeNow(90);
};
