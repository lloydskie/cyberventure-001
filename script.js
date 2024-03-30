window.onload = function() {
    var audio = document.getElementById('bg-music');
    var source = document.createElement('source');
    source.src = 'assets/music/LEMMiNO - Cipher (BGM).mp3';
    audio.appendChild(source);
    audio.play();
    
  };