vvar icon1 = document.getElementById('icon1')
var icon2 = document.getElementById('icon2')
var icon3 = document.getElementById('icon3')
var icon4 = document.getElementById('icon4')

var song1 = document.getElementById('songA')
var song2 = document.getElementById('songB')
var song3 = document.getElementById('songC')
var song4 = document.getElementById('songD')

var element = document.getElementsByClassName("header")

var stopSongs = function() {
  song1.pause();
  song2.pause();
  song3.pause();
  song4.pause();
};

icon1.addEventListener('click', function() {
  if (song1.paused) {
    stopSongs();
    song1.play();
    element[0].innerHTML = "Now Playing: " + "<em>" + "Favorite Food" + "</em>";
    icon1.classList.toggle('fa-stop')
  } else {
    song1.pause();
    icon1.classList.toggle('fa-stop')
    element[0].innerHTML = "Select a song!";
  }
});

icon2.addEventListener('click', function() {
  if (song2.paused) {
    stopSongs();
    song2.play();
    element[0].innerHTML = "Now Playing: " + "<em>" + "Thrill Of The Hunt" + "</em>";
    icon2.classList.toggle('fa-stop')
  } else {
    song2.pause();
    icon2.classList.toggle('fa-stop')
    element[0].innerHTML = "Select a song!";
  }
});

icon3.addEventListener('click', function() {
  if (song3.paused) {
    stopSongs();
    song3.play();
    element[0].innerHTML = "Now Playing: " + "<em>" + "Transgender Dysphoria Blues" + "</em>";
    icon3.classList.toggle('fa-stop')
  } else {
    song3.pause();
    icon3.classList.toggle('fa-stop')
    element[0].innerHTML = "Select a song!";
  }
});

icon4.addEventListener('click', function() {
  if (song4.paused) {
    stopSongs();
    song4.play();
    element[0].innerHTML = "Now Playing: " + "<em>" + "Where I'm From" + "</em>";
    icon4.classList.toggle('fa-stop')
  } else {
    song4.pause();
    icon4.classList.toggle('fa-stop')
    element[0].innerHTML = "Select a song!";
  }
});
