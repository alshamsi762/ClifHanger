const sum = require('./sum.js');
//const mul = require('./mul');
test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});
test('multiplies 3 * 5 to equal 15',() =>{ 

	expect(sum.mul(3,5)).toBe(15);
});
test('variable test to equal 12',() =>{ 

	expect(sum.z).toBe(12);
	expect(sum.z).toBe(13);

});

