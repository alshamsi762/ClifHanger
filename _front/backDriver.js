initScreen();
buildStage(10);
loadSTL0('_assets/Spider_Scaled.stl');
loadSTL1('_assets/Spider_Scaled.stl');
loadSTL2('_assets/Spider_Scaled.stl');
loadSTL3('_assets/Spider_Scaled.stl');
THREE.DefaultLoadingManager.onLoad = function ( ) {
  fallPiece(65);
  movePiece(0, "Y-");
  movePiece(1, "Y+");
  movePiece(2, "X-");
};
