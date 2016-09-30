start.addEventListener("click", start_click);
pause.addEventListener("click", pause_click);
stp.addEventListener("click", stp_click);

var count = 0, timerId, go = false;

for_count.innerHTML = "00:00:00:00";

pause.style = "display: none;"

function start_click() {
  if ( go == false ) {
    console.log('Start click');
    timerId = setInterval( function() {
      count++;
      var msec = count % 100;
      if ( msec < 10 ) { msec = "0" + msec; }
      var sec = Math.floor( count / 100 ) % 60;
      if ( sec < 10 ) { sec = "0" + sec; }
      var min = Math.floor( count / 6000 ) % 60;
      if ( min < 10 ) { min = "0" + min; }
      var hours = Math.floor( count / 360000 ) % 24;
      if ( hours < 10 ) { hours = "0" + hours; }
      var time = hours + ":" + min + ":" + sec + ":" + msec;
      for_count.innerHTML = time;
    }, 1);
    go = true;
    start.style = "display: none;"
    pause.style = "display: inline-block;"
  }
}

function pause_click() {
  if (go == true) {
    console.log('Pause click');
  	clearInterval(timerId);
    go = false;
    start.style = "display: inline-block;"
    pause.style = "display: none;"
  }
}

function stp_click() {
  console.log('Stop click');
	clearInterval(timerId);
	count=0;
  go = false;
  start.style = "display: inline-block;"
  pause.style = "display: none;"
	for_count.innerHTML = "00:00:00:00";
}
