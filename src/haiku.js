export default function haikuChecker(text) {
  let output = { lineNumberCorrect: false, line1Syllables: false, line2Syllables: false, line3Syllables: false};
  let splitResult = text.split(/\r?\n/);
  if(splitResult.length === 3){
    output.lineNumberCorrect = true;
  } else {
    return output;
  }

  const correctHaikuSyllableCount = [5, 7, 5];
  for (let i=0; i <= 2; i++) {
    if((syllableCounter(splitResult[i])) === correctHaikuSyllableCount[i]) {
      output[`line${i +1}Syllables`] = true;
    }
  }
  return output;
}

function syllableCounter(testString) {
  if(testString !== undefined) {
    var count = ((testString.match(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/gi)) || []).length;
    return count;
  }
  else {
    return 0;
  }
}