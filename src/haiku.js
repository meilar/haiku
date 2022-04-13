export default function haikuCheck(text) {
  let output = { lineNumberCorrect: false, line1Syllables: false, line2Syllables: false, line3Syllables: false};
  let splitResult = text.split(/\r?\n/);
  if(splitResult.length === 3){
    output.lineNumberCorrect = true;
  }

  const correctHaikuSyllableCount = [5, 7, 5];
  for(let i=0; i++; i <= 3) {
    if(syllableCounter(splitResult[i]) === correctHaikuSyllableCount[i])
    {
      output[`line${i}Syllables`] = true;
    }
  }
  return output;
}

function syllableCounter(testString) {
  console.log("input : " + testString);
  var count = (testString.match(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/gi) || []).length;
  console.log("result :" + count);
  return count;
}