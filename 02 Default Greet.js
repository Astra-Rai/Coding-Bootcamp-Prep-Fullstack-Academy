// YOUR CODE BELOW


/*

method one

const defaultGreet = (firstName, lastName) => {
  if(lastName === undefined){
    //if lastName is undefined, set last name to default value, 'Doe'...
    //set lastName to 'Doe'
    lastName = 'Doe';
  }
  //use template literals 
  //Template literals are string literals allowing embedded expressions
  
  return `Hi ${firstName} ${lastName} !`;
}
//console.log(defaultGreet('Astra'));//return "Hi Astra Doe"
//console.log(defaultGreet('Astra', 'Rai'));//return "Hi Astra Rai"            


method 2


//use ES6 feature and set to default value of lastName = 'Doe' within () of funciton

const defaultGreet = (firstName, lastName = 'Doe') => {
   return `Hi ${firstName} ${lastName} !`;
}

method 3
//use implict return, note removed {}

const defaultGreet = (firstName, lastName = 'Doe') => `Hi ${firstName} ${lastName} !`;
 
*/

//instructions

describe('defaultGreet', () => {

  it('is a function', () => {
    expect(typeof defaultGreet).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = defaultGreet('Natalie', 'Cole');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the correct greeting if the first and last name is defined', () => {
    let returnedValue = defaultGreet('Natalie', 'Cole');
    expect(returnedValue).toEqual('Hi Natalie Cole!');
  });

  it('returns the correct greeting if the last name is undefined', () => {
    let returnedValue = defaultGreet('Jane');
    expect(returnedValue).toEqual('Hi Jane Doe!');
  });

});