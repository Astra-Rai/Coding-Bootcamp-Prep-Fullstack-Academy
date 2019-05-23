let num1 = 854;
let num2 = 385;
let num3 = 779;

// YOUR CODE BELOW

//set variable myFirstSum to the number 2018
let myFirstSum = 2018;
describe("myFirstSum", function() {

  it("should be a number", function() {
    expect(typeof myFirstSum).toEqual('number');
  });

  it("should be equal to 2018", function () {
  	expect(myFirstSum).toEqual(2018);
  });

});