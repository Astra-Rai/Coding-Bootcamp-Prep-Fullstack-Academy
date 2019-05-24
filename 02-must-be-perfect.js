//let word = 'carrots';

let word = 'pacific';
// let word = 'perfecto';
// let word = 'perfect';

let lastWord;

// YOUR CODE BELOW

//if the first letter of string, is the character 'p', for variable word 
//and the length of string is a string is strictly equal to 7

if(word[0] === 'p' && word.length ===7){

  //use toUpperCase() method to convert contents string to upper case chanracters and...
  //set string (word variable ) to lastWord
  
  lastWord = word.toUpperCase();
  
} else {
  
//if first letter of content of variable, word, doesn't meet conditions in if statement...
//set lastWord to word

  lastWord = word;
}

console.log(lastWord);

describe('lastWord', () => {

  it('should be of type string', () => {
    expect(typeof lastWord).toEqual('string');
  });

  it('should be uppercased if word starts with p and has length of 7', () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let lastWordValues = {
      'carrots': 'carrots',
      'pacific': 'PACIFIC',
      'perfecto': 'perfecto',
      'perfect': 'PERFECT'
    }

    expect(lastWord).toEqual(lastWordValues[word]);
  });

});