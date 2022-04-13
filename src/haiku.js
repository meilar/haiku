export default function haikuCheck(text) {
  let output = { lineNumberCorrect: false, line1Syllables: false, line2Syllables: false, line3Syllables: false};
  let splitResult = text.split(/\r?\n/);
  if(splitResult.length === 3){
    output.lineNumberCorrect = true;
  }
  return output;
}

