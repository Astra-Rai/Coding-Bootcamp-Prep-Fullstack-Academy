// YOUR CODE BELOW

//create a function with one parameter
//if no argument is passed, set default of parameter to 'Hello !'
//if name is string is passed through function, return a string..
//the string should read 'Hello (whatever name passed)'
//use template literals and implicit return
const greeting = (name = 'Hello!') => `Hello ${name}!`; 

//console.log(greeting(''));//-> "Hello !""..if the argument for name is empty 
//console.log(greeting('Astra'));//-> "Hello Astra!"


/*describe('greeting', () => {

  it('is a function', () => {
    expect(typeof greeting).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = greeting();
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a personalized greeting, given a name', () => {
    let returnedValue = greeting('Layla');
    expect(returnedValue).toEqual('Hello Layla!');
  });

  it('returns an anonymous greeting if no name is provided', () => {
    let returnedValue = greeting();
    expect(returnedValue).toEqual('Hello!');
  });

});

*/