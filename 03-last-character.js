// YOUR CODE BELOW

//write a function that has two parameters, data type of argument will be a string

const lastCharacter = (testString1, testString2) => {

//return true if arguments passed through function, last letters are the same....
//use bracket notation and array.length property to access last element in each string  

if(testString1[testString1.length-1] === testString2[testString2.length-1]){
  
  //return a boolean value true  
  return true;
}

  //else return false  
  return false;
}

//console.log(lastCharacter('roun', 'hound')); //--> false
console.log(lastCharacter('compassion', 'lesson')); // true

/*
describe('lastCharacter', () => {

  it('is a function', () => {
    expect(typeof lastCharacter).toEqual('function');
  });

  it('returns a boolean', () => {
    let returnedValue = lastCharacter('happy string1', 'happy string2');
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if both strings end with the same character', () => {
    let returnedValue = lastCharacter('funiful', 'wonderful');
    expect(returnedValue).toEqual(true);
  });

  it('returns false if the strings end with different characters', () => {
    let returnedValue = lastCharacter('happy', 'sad');
    expect(returnedValue).toEqual(false);
  });

});

*/