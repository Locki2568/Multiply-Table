const getMultiplicationTable = require('../getMultiplicationTable.js');

it ('should generate a combination table from 2 to 4', ()=>{
    expect(getMultiplicationTable(2,4)).toBe( '2*2=4\n' + 
                                            '2*3=6  3*3=9\n' + 
                                            '2*4=8  3*4=12  4*4=16');
});

it ('should return null when start range <= 0', ()=>{
    expect(getMultiplicationTable(0,5)).toBe( null);
});

it ('should return null when end range >1000', ()=>{
	expect(getMultiplicationTable(10,1001)).toBe(null);
});

it ('should return null when start range > end range', ()=>{
	expect(getMultiplicationTable(100,50)).toBe(null);
});