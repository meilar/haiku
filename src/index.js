import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import haikuChecker from './haiku.js';

$(document).ready(function() {
  $('#submitHaiku').on('click', function() {
    let inputHaiku = $('#haikuInput').val();
    const haikuResult = haikuChecker(inputHaiku);
    
    const rule1 = haikuResult[0];
    const rule2 = haikuResult[1];
    const rule3 = haikuResult[2];
    const rule4 = haikuResult[3];
    
    if(rule1 && rule2 && rule3 && rule4) {
      $('#result').html("Congratulations you have written a proper Haiku.");
    } else {
      $('#result').html(`Correct number of lines? ${rule1}`);
      $('#result').html(`First line having 5 syllables? ${rule2}`);
      $('#result').html(`Second line having 7 syllables? ${rule3}`);
      $('#result').html(`Third line having 5 syllables? ${rule1}`);
    }
  });
});