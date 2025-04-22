const {sum, fromDollarToYen} = require('./app.js')
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

 test("One euro should be 1.07 dollars" , function() {
    const {fromEuroToDollar} = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(expected);
 })
    
 
 test("Conversion from USD to JPY (1 USD = 146.26 JPY)", function() {
    const { fromDollarToYen } = require('./app.js')
    const JPY = fromDollarToYen(10);
    const expected = 10 * 146.26;
    expect (fromDollarToYen(10)).toBe(expected); 
    
})


test("Conversion from JPY to GBP (1 JPY = 0.0055 GBP)", function() {
    const { fromYenToPound } = require('./app.js')
    const GBP = fromYenToPound(1000);
    const expected = 1000 * 0.0056;
    expect(fromYenToPound(1000)).toBe(5.6);

})
