/** Import Files **/
const Global = require('./gameStageGlobal.js');

test('Ensure that Game Area has independent height and width.', () => {
  expect(Global.gameArea.width).not.toBe(Global.gameArea.height);
});
