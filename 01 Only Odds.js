// YOUR CODE BELOW

//container that will store sum of odd numbers

const onlyOdds = (numberPassed) => {
  //variable to hold sum of odd numbers, if any
  let sum = 0;
  //start counting from 1
  //increment by one as long as the current increment of number is less than or equal to numberPassed
  for(let i = 1; i<=numberPassed; i++){
    if(i % 2 === 1) sum +=i;
    ///1 odd, add to count, current count 1
    //2 even, dont not add to count, current count 1
    //3 odd, add to count, 1 +3 = 4, current count 4
    //4 even, do not add to count, current count still 4
    //5 odd, add to current count, 4 + 5 = 9
    //6 even, do not add to current count, current count still 9
    //7 odd, add to current count, 9 + 7 = 16
    //8 even, do not add to count, current count still 16
    //9 odd, add to to current count 16 + 9 = 25
  }
  //sum of odd numbers is 25
  return sum;
}
//pass the number 9 as an argument through function onlyOdds
console.log(onlyOdds(9));//--> 25



/*describe('onlyOdds', () => {

  it('is a function', () => {
    expect(typeof onlyOdds).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = onlyOdds(6);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the sum of all odd nums between the provided argument and 0', () => {
    let returnedValue = onlyOdds(10);
    expect(returnedValue).toEqual(9 + 7 + 5 + 3 + 1);
  });

  it('returns 0 if inputted argument is less than 1', () => {
    let returnedValue = onlyOdds(-5);
    expect(returnedValue).toEqual(0);
  });

});
*/