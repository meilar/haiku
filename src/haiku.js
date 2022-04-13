export default function haikuCheck(text) {
  let output = { lineNumberCorrect: false, line1Syllables: false, line2Syllables: false, line3Syllables: false};
  return output;
}

// have function to validate input? no numbers - punctuation is ok
// haiku has 3 lines
// line 1 has 5 syllables
// line 2 has 7 syllables
// line 3 has 5 syllables
// function to parse input into lines 1/2/3 (output = 3 strings)
// syllable counter that gets run on each line - returns number of syllables
// overall return statement is json object with key pair values/properties - one could be rule, one is bool if it passes that rule

/* 
json object
{
  line1has5syllables = true;
  line2has7syllables = true;
  line3has5syllables = true;
}

*/

// syllable counter input = a line of text (string) "man dog is best friend"
// run regex counter tracking # of occurances
// syllable counter output = int (5)