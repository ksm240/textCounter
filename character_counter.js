(function () {
  'use strict';
  var e = document.getElementById('input_text');
  document.getElementById('character_count').innerHTML = 10;
  e.addEventListener('keyup', () => {
    let str = e.value;
    str = str.replace(/\r?\n/g, '');
    let remaining = 10 - str.length;
    document.getElementById('character_count').innerHTML = remaining;
    if (remaining >= 0) {
      document.getElementById('character_count_wrap').style.color ='black';
    }else{
      document.getElementById('character_count_wrap').style.color ='red';
    }
  });
}());
