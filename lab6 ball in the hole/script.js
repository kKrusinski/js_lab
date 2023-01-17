const ball = document.querySelector('.ball');
const hole = document.querySelector('.hole');
const request = document.querySelector('.request')
let startTime;
let records = [];


window.addEventListener('load', startTimer);
request.addEventListener('click', requestOrientationPermission)
document.addEventListener('touchstart', startTimer);
document.addEventListener('touchend', stopTimer);

function onDeviceMove(event) {
  ball.style.left = event.gamma * 10 + 'px';
  ball.style.top = event.beta * 10 + 'px';
  
  if (collision(ball, hole)) {
    records.push(Date.now() - startTime);
    stopTimer();
    console.log(`It took ${records[records.length - 1]}ms to hit the hole`);
    console.log("Ball in Hole!");
  }
}

function startTimer() {
  startTime = Date.now();
}

function stopTimer() {
  records.push(Date.now() - startTime);
  console.log("Time: ", Date.now() - startTime, "ms");
}

function collision(element1, element2) {
    let element1Rect = element1.getBoundingClientRect();
    let element2Rect = element2.getBoundingClientRect();
  
    return (
        element1Rect.x < element2Rect.x + element2Rect.width &&
        element1Rect.x + element1Rect.width > element2Rect.x &&
        element1Rect.y < element2Rect.y + element2Rect.height &&
        element1Rect.y + element1Rect.height > element2Rect.y
    );
}

function displayRecords() {
  console.log("Records: ", records);
}


function requestOrientationPermission() {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      DeviceOrientationEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            window.addEventListener('deviceorientation', onDeviceMove);
          }
        })
        .catch(console.error);
      return;
    } else {
      window.addEventListener('deviceorientation', onDeviceMove);
    }
  }


const detectScore = (e) => {
    
}


requestOrientationPermission()