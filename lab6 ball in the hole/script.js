const ball = document.querySelector('.ball');
const hole = document.querySelector('.hole');
const request = document.querySelector('.request')
let startTime;
let records = [];

const maxWidth = window.innerWidth
const maxHeight = window.innerHeight


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
    alert(`It took ${records[records.length - 1] / 1000}s to hit the hole`);
    startTime = Date.now()
    records = []
    ball.style.left = '0px';
    ball.style.top = '0px';
    randomPosition()
  } 
}

const randomPosition = () => {
    const x =  Math.floor(Math.random() * (maxWidth - 0 + 1) + 0)
    const y =   Math.floor(Math.random() * (maxHeight - 0 + 1) + 0)
    hole.style.left = x + 'px'
    hole.style.top = y + 'px'
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


randomPosition()
requestOrientationPermission()