// YOUR CODE BELOW

//set variable my guess to num value 400

let myGuess = 400;

//Instructions

describe("myGuess", function() {

  it("should be a number", function() {
    expect(typeof myGuess).toEqual('number');
  });

  it("should be the right value", function() {
    expect(myGuess).toEqual(400);
  });

});