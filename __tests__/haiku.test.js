import { TestScheduler } from 'jest';
import haikuChecker from './../src/haiku.js';

describe('haikuCheckerer', () => {

  const goodHaiku = 
    `the man bit the dog
    the dog bit the mans hand off
    the hand dog'd the man`;

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
    let output = haikuChecker("test");
    expect(typeof output).toEqual("object");
    expect(output['lineNumberCorrect']).toEqual(false);
    expect(output['line1Syllables']).toEqual(false);
    expect(output['line2Syllables']).toEqual(false);
    expect(output['line3Syllables']).toEqual(false);
  });
  
  test('given text input, should correctly identify number of lines', () => {
    let output = haikuChecker(goodHaiku);
    let expectedFail = haikuChecker(lineNumberFail);
    expect(output['lineNumberCorrect']).toEqual(true);
    expect(expectedFail['lineNumberCorrect']).toEqual(false);
  });

  test('given text input, should correctly identify number of syllables', () => {
    let expectedPass = haikuChecker(goodHaiku);
    expect(expectedPass['line1Syllables']).toEqual(true);
    expect(expectedPass['line2Syllables']).toEqual(true);
    expect(expectedPass['line3Syllables']).toEqual(true);
  });
});