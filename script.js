let clock = document.getElementById("time");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let pause = document.getElementById("pause");

let i = 0,
  k = 0;
z = 0;
function timer() {
  if (z < 10) {
    if (k < 10) {
      if (i < 10) {
        clock.innerHTML = `0${z}:0${k}:0${i}`;
      } else {
        clock.innerHTML = `0${z}:0${k}:${i}`;
      }
    } else {
      clock.innerHTML = `0${z}:${k}:${i}`;
    }
  } else {
    clock.innerHTML = `${z}:${k}:${i}`;
  }
  if (i > 59) {
    i = 0;

    if (k > 59) {
      k = 0;
      z++;
    } else {
      k++;
    }
  } else {
    i++;
  }
}

var my
start.addEventListener("click", function () {
  console.log(stop);
  stop.disabled = false;
  pause.disabled = false;
  start.disabled = true;

    my = setInterval(timer, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(my)
  my=null
  i=0,j=0,k=0;
  clock.innerHTML=`00:00:00`
  pause.disabled=true;
  stop.disabled=true;
  start.disabled=false

});
pause.addEventListener('click',function(){
    console.log(pause.innerText)
    if(pause.innerHTML == 'Pause')
    {
        pause.innerHTML = 'Continue'
        clearInterval(my)
    }
    else 
    {
        pause.innerHTML = 'Pause'
        setInterval(timer,1000)
    }
})