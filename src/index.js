import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import haikuChecker from './haiku.js';

$(document).ready(function() {
  $('#submitHaiku').on('click', function() {
    let inputHaiku = $('#haikuInput').val();
    const haikuResult = haikuChecker(inputHaiku);

    console.log(haikuResult);
    
    const rule1 = haikuResult.lineNumberCorrect;
    const rule2 = haikuResult.line1Syllables;
    const rule3 = haikuResult.line2Syllables;
    const rule4 = haikuResult.line3Syllables;

    
    
    if(rule1 && rule2 && rule3 && rule4) {
      $('#result').html("Congratulations you have written a proper Haiku.");
    } else {
      $('#result').append(`Correct number of lines? ${rule1}\n` );
      $('#result').append(`First line having 5 syllables? ${rule2}\n`);
      $('#result').append(`Second line having 7 syllables? ${rule3}\n`);
      $('#result').append(`Third line having 5 syllables? ${rule4}\n`);
    }
  });
});