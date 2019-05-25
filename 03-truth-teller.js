let boolean1 = true, boolean2 = true;
// let boolean1 = true, boolean2 = false;
// let boolean1 = false, boolean2 = true;
// let boolean1 = false, boolean2 = false;

let result;

// YOUR CODE BELOW

//if both boolean1 and boolean2 === true...

if(boolean1 === true && boolean2 === true){
  
  //set 'result' variable to string 'both'
  result = 'both'
  
  //if boolean1 or boolean2 === true...  
  } else if  (boolean1 === true || boolean2 === true ){
  
  //set 'result' variable to string 'one'
  result = 'one';

  } else {
  
  //all ohter conditons, set result to string 'one'

  result = 'none';

  }

//result is to be set to both, one or none, depending on given condition
describe('result', () => {

  it('should be of type string', () => {
    expect(typeof result).toEqual('string');
//this string will be 'both', 'one', 'none' 
    });

  it('should be both, one, or none depending on the boolean1 and boolean2 values', () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let resultValues = {
      'truetrue': 'both',
      'truefalse': 'one',
      'falsetrue': 'one',
      'falsefalse': 'none'
    }
//i don't know how to read the line of code below
    expect(result).toEqual(resultValues[String(boolean1) + String(boolean2)]);
  });

});