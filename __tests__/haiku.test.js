import { TestScheduler } from 'jest';
import haikuCheck from './../src/haiku.js';

describe('haikuCheck', () => {

  const goodHaiku = 
    `the man bit the dog
    the dog bit the mans hand off
    the hand dogged the man`;

  const lineNumberFail = 
    `the calm cool face of the water
    asked me for a kiss`;

  const line1SyllableFail = 
    `gonzo the fool, an alien
    lost without family but 
    finds family here`;


  const line2SyllableFail = 
    `A poodle guides me
    towards a shining dawn and new hope
    he is a good boy`;

  const line3SyllableFail =
  `the man bit the dog
  the dog bit the mans hand off
  the hand bit the doggone man`;

  

  test('given text input, should return an object', () => {
    let output = haikuCheck("test");
    expect(typeof output).toEqual("object");
    expect(output['lineNumberCorrect']).toEqual(false);
    expect(output['line1Syllables']).toEqual(false);
    expect(output['line2Syllables']).toEqual(false);
    expect(output['line3Syllables']).toEqual(false);
  });
  
  test('given text input, should correctly identify number of syllables', () => {
    let output = haikuCheck(goodHaiku);
    let expectedFail = haikuCheck(lineNumberFail);
    expect(output['lineNumberCorrect']).toEqual(true);
    expect(expectedFail['lineNumberCorrect']).toEqual(false);
  });
});