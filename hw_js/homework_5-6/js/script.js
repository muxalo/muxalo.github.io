start.addEventListener("click", start_click);
stp.addEventListener("click", stop_click);
split.addEventListener("click", split_click);
reset.addEventListener("click", reset_click);

var count = 0, timerId, go = false, round = 0;

for_count.innerHTML = "00:00:00:00";

stp.style = "display: none;"

function start_click() {
  if ( go == false ) {
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
      time = hours + ":" + min + ":" + sec + ":" + msec;
      for_count.innerHTML = time;
    }, 1);
    go = true;
    start.style = "display: none;"
    stp.style = "display: inline-block;"
    console.log('Start click');
  }
}

function stop_click() {
  if (go == true) {
  	clearInterval(timerId);
    go = false;
    round++;
    var tempElem = document.createElement('li');
    tempElem.classList = "splits__item";
    tempElem.innerHTML = round + ' stop : ' + time;
    parentElem[0].appendChild(tempElem);
    start.style = "display: inline-block;"
    stp.style = "display: none;"
    console.log('Stop click');
  }
}

var parentElem = document.getElementsByClassName('splits');

function split_click() {
  if ( go == true ) {
    round++;
    var tempElem = document.createElement('li');
    tempElem.classList = "splits__item";
    tempElem.innerHTML = round + ' round : ' + time;
    parentElem[0].appendChild(tempElem);
    console.log('Split click', round);
  }
}

function reset_click() {
	clearInterval(timerId);
	count = 0;
  round = 0;
  go = false;
  start.style = "display: inline-block;"
  stp.style = "display: none;"
	for_count.innerHTML = "00:00:00:00";
  while (parentElem[0].lastChild) {
    parentElem[0].removeChild(parentElem[0].lastChild);
  }
  console.log('Reset click');
}
