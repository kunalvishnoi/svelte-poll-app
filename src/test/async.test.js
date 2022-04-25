const fetchData = require('../async');

it('Async test' , async ()=> {
    const result = await fetchData(1);
    expect(result.data.id).toBe(1);
})