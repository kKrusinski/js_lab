const btnStartRecording = document.getElementById("btn-start-recording");
//let timer = 

document.addEventListener('keypress', (event) => {
    playSound(event.key);
    startRecording(event.key);
});

function playSound(key) {
    switch (key) {
        case '1':
            var boom = new Audio('sounds/boom.wav');
            boom.play();
            break;

        case '2':
            var clap = new Audio('sounds/clap.wav');
            clap.play();
            break;

        case '3':
            var hihat = new Audio('sounds/hihat.wav');
            hihat.play();
            break;

        case '4':
            var kick = new Audio('sounds/kick.wav');
            kick.play();
            break;

        case '5':
            var openhat = new Audio('sounds/openhat.wav');
            openhat.play();
            break;

        case '6':
            var ride = new Audio('sounds/ride.wav');
            ride.play();
            break;

        case '7':
            var snare = new Audio('sounds/snare.wav');
            snare.play();
            break;
        case '8':
            var tink = new Audio('sounds/tink.wav');
            tink.play();
            break;

        case '9':
            var tom = new Audio('sounds/tom.wav');
            tom.play();
            break;

        default:
            console.log(key);
    }
}


let mediaRecorder;
let audioContext;
let audioElement;
let sourceNode;
let streamDestination;
let recordedBlobs = [];

audioElement = document.getElementById("audioElement");

audioElement.onloadedmetadata = function(e) {
  audioContext = new AudioContext();
  sourceNode = audioContext.createMediaElementSource(audioElement);
  streamDestination = audioContext.createMediaStreamDestination();
  sourceNode.connect(streamDestination);
  mediaRecorder = new MediaRecorder(streamDestination.stream);
  mediaRecorder.ondataavailable = handleDataAvailable;
}

function startRecording() {
  recordedBlobs = [];
  mediaRecorder.start();
}

function stopRecording() {
  mediaRecorder.stop();
}

function handleDataAvailable(event) {
  if (event.data.size > 0) {
    recordedBlobs.push(event.data);
  }
}

