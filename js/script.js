function clock (){
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let mins = fullDate.getMinutes();
  let secs = fullDate.getSeconds();

  if (hours < 10){
    hours = '0' + hours;
  }

  if (mins < 10){
    mins = '0' + mins;
  }

  if (secs < 10){
    secs = '0' + secs;
  }

  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = ': ' + mins;
  document.getElementById('second').innerHTML = ': ' + secs;
}

function clockForLondon (){
  const fullDate = new Date();
  let hoursLondon = fullDate.getHours() - 1;
  let minsLondon = fullDate.getMinutes();
  let secsLondon = fullDate.getSeconds();

  if (hoursLondon < 10){
    hoursLondon = '0' + hoursLondon;
  }

  if (minsLondon < 10){
    minsLondon = '0' + minsLondon;
  }

  if (secsLondon < 10){
    secsLondon = '0' + secsLondon;
  }

  document.getElementById('hour-london').innerHTML = hoursLondon;
  document.getElementById('minute-london').innerHTML = ': ' + minsLondon;
  document.getElementById('second-london').innerHTML = ': ' + secsLondon;
}

function clockForBangalore (){
  const fullDate = new Date();
  let hoursBangalore = fullDate.getHours() + 5;
  let minsBangalore = fullDate.getMinutes() + 30; //sprawdzic
  let secsBangalore = fullDate.getSeconds();

  if (hoursBangalore < 10){
    hoursBangalore = '0' + hoursBangalore;
  }

  if (minsBangalore < 10){
    minsBangalore = '0' + minsBangalore;
  }

  if (secsBangalore < 10){
    secsBangalore = '0' + secsBangalore;
  }

  document.getElementById('hour-bangalore').innerHTML = hoursBangalore;
  document.getElementById('minute-bangalore').innerHTML = ': ' + minsBangalore;
  document.getElementById('second-bangalore').innerHTML = ': ' + secsBangalore;
}

setInterval(clock, 100);
setInterval(clockForLondon, 100);
setInterval(clockForBangalore, 100);