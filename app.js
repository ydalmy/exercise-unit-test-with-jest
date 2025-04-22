

function sum(a, b) {
   return a + b;
}

//console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};



function fromDollarToYen (dolares) {
    
    let euros = dolares / oneEuroIs.USD;
    let yenes = euros * oneEuroIs.JPY;
    return parseFloat(yenes.toFixed(1));
}
function fromEuroToDollar (euros) {
    return(oneEuroIs.USD) * euros
}
function fromYenToPound (yenes) {
    let euros = yenes/oneEuroIs.JPY;
    let pound = euros * oneEuroIs.GBP
    return parseFloat(pound.toFixed(1));
}
console.log(fromYenToPound(1000))

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound }
module.exports + {sum,fromEuroToDollar}