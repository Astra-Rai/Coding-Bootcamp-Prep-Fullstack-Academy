// YOUR CODE BELOW
//set a variable to a string, your name
const myFirstName = 'Astra';

//set a varible to a number
const myFavoriteNum = 3;

//set a variable to boolean value 
const havingFun = true;


//Instructions

describe('myFirstName', function() {

  it('should be a string value', function() {
    expect(typeof myFirstName).toEqual('string');
  });

});

describe('myFavoriteNum', function() {

  it('should be a number value', function() {
    expect(typeof myFavoriteNum).toEqual('number');
  });

});

describe('havingFun', function() {

  it('should be a boolean value', function() {
    expect(typeof havingFun).toEqual('boolean');
  });

});