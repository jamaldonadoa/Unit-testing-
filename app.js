// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to Yens
    let valueInYen = valueInDollar * 0.8 * 127.9;
    //return the Yen value
    return valueInYen;
}

// we declare the function with the exact name "fromYenToPoundn"
const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to Pound
    let valueInPound = valueInYen * 0.01 * 0.8;
    //return the dollar value
    return valueInPound;
}




// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


console.log(fromDollarToYen(1)*4)
console.log(fromYenToPound(1)*4)