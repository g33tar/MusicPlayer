var food = document.getElementById('food')
var song1 = document.getElementById('songA')

  food.addEventListener('click', function(){
    song1.play()
    toggle(food);
  })


var thrill = document.getElementById('thrill')
var song2 = document.getElementById('songB')

    thrill.addEventListener('click', function(){
      song2.play()
      toggle(thrill);
  })

var blues = document.getElementById('blues')
var song3 = document.getElementById('songC')

    blues.addEventListener('click', function(){
      song3.play()
      toggle(blues);
  })

var whereim = document.getElementById('whereim')
var song4 = document.getElementById('songD')

  whereim.addEventListener('click', function(){
    song4.play()
    toggle(whereim);
  })

var toggle = function(element){
  var aFile;
  if(element.classList.contains('fa-play')){
    element.classList.remove('fa-play');
    element.classList.add('fa-stop');
    aFile = element.parentNode.children[2];
    play(aFile);
  }
  else{
    element.classList.remove('fa-stop');
    element.classList.add('fa-play');
    aFile = element.parentNode.children[2];
    stop(aFile);
    }
  }

  var stop = function(element){
    element.pause();
  }

var play = function(element){
    element.play();
  }
