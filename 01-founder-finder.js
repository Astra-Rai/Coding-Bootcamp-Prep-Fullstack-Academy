let name = 'David';
// let name = 'Nimit';
// let name = 'Someone else';

let found;

//Method 2

//use an if else statement to solve exercises
//if name variable strictly equal the string 'David' or 'Nimit'...
//set found variable to boolean value of true...
//else...set found to false

if(name === 'David' || name === 'Nimit') found = true;
else found = false;

console.log(found);

/*
Method 1

if(name ==='David' || name === 'Nimit'){
  found = true;
} else {
  found = false;
}

*/

//Instructions

describe('found', () => {

  it('is of type boolean', () => {
    expect(typeof found).toEqual('boolean');
  })

  it('is true only if name is David or Nimit', () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let foundValues = {
      'David': true,
      'Nimit': true,
      'Someone else': false
    }

    expect(found).toEqual(foundValues[name]);
  });

});