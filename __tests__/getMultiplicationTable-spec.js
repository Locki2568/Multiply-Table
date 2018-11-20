const getMultiplicationTable = require('../getMultiplicationTable.js');

it ('should add two number', ()=>{
    expect(getMultiplicationTable(2,4)).toBe( '2*2=4\n' + 
                                            '2*3=6  3*3=9\n' + 
                                            '2*4=8  3*4=12  4*4=16');
});