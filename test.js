// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
    test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});


test("One Dollar should be 102.32000000000001 Yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(4)

    // if 1 Dolar are 102.32000000000001 Yens, then 4 dollars should be (3.5 * 102.32000000000001)
    const expected = 4 * 102.32000000000001; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(4)).toBe(409.28000000000003); //1 Dolar are 102.32000000000001 Yens, then 4 dollars should be (3.5 * 102.32000000000001)
});

test("One Yen should be 0.008 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(4)

    // if 1 yen are 0.008 pounds, then 4 yens should be (4 * 0.008)
    const expected = 4 * 0.008; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(4)).toBe(0.032); //if 1 yen are 0.008 pounds, then 4 yens should be (4 * 0.008)
});