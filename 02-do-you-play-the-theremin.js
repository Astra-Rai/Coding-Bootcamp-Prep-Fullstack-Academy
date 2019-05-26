// YOUR CODE BELOW

//create a function that 
const doYouPlayTheTheremin = (name) => {
//if the first character of string argument passed through parameter is a   lowercase 's' or uppercase 'S'...
  if(name[0] === 'S' || name[0] === 's'){
  //return true
    return true;
  }
  //else return faslse
    return false;
} 
console.log(doYouPlayTheTheremin('rockstar')); //->returns false
//console.log(doYouPlayTheTheremin('star')); //-> should return true, because 'star' first character is a lowercase 's'


//instructions

/*describe('doYouPlayTheTheremin', () => {

  it('is a function', () => {
    expect(typeof doYouPlayTheTheremin).toEqual('function');
  });

  it('returns an boolean', () => {
    let returnedValue = doYouPlayTheTheremin('Mark');
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if the first letter of the name starts with s', () => {
    let returnedValue = doYouPlayTheTheremin('sarah');
    expect(returnedValue).toEqual(true);
  });

  it('returns true if the first letter of the name starts with S', () => {
    let returnedValue = doYouPlayTheTheremin('Sarah');
    expect(returnedValue).toEqual(true);
  });

  it('returns false given any other input', () => {
    let returnedValue = doYouPlayTheTheremin('Frank');
    expect(returnedValue).toEqual(false);
  });

});

*/