const sum = require('../sum')

test( 'Sum test function' , ()=> {
    const result = sum(1,2);
    expect(result).toBe(3);
})