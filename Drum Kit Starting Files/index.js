let buttons = document.querySelectorAll('.drum');

// let tom1 = new DrumPiece('w', './sounds/tom-1.mp3', './images/tom1.png');
// let tom2 = new DrumPiece('a', './sounds/tom-2.mp3', './images/tom2.png');
// let tom3 = new DrumPiece('s', './sounds/tom-3.mp3', './images/tom3.png');
// let tom4 = new DrumPiece('d', './sounds/tom-4.mp3', './images/tom4.png');
// let crash = new DrumPiece('j', './sounds/crash.mp3', './images/crasj.png');
// let bass = new DrumPiece('k', './sounds/kick-bass.mp3', './images/kick.png');
// let snare = new DrumPiece('l', './sounds/snare.mp3', './images/snare.png');

let audioPaths = [
    './sounds/tom-1.mp3',
    './sounds/tom-2.mp3',
    './sounds/tom-3.mp3',
    './sounds/tom-4.mp3',
    './sounds/crash.mp3',
    './sounds/kick-bass.mp3',
    './sounds/snare.mp3',
];

let imagePaths = [
    './images/tom1.png',
    './images/tom2.png',
    './images/tom3.png',
    './images/tom4.png',
    './images/crash.png',
    './images/kick.png',
    './images/snare.png',
];

for(let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundImage = "url('" + imagePaths[i] + "')";
    buttons[i].addEventListener('click', () => {
        playAudio(audioPaths[i]);
        keyAnimate(buttons[i].innerHTML);
    });
}

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'w':
            playAudio(audioPaths[0]);
            keyAnimate('w');
            break;
        case 'a':
            playAudio(audioPaths[1]);
            keyAnimate('a');
            break;
        case 's':
            playAudio(audioPaths[2]);
            keyAnimate('s');
            break;
        case 'd':
            playAudio(audioPaths[3]);
            keyAnimate('d');
            break;
        case 'j':
            playAudio(audioPaths[4]);
            keyAnimate('j');
            break;
        case 'k':
            playAudio(audioPaths[5]);
            keyAnimate('k');
            break;
        case 'l':
            playAudio(audioPaths[6]);
            keyAnimate('l');
            break;
        default:
            console.log("unknown audio");
            break;
    }
});

function playAudio(path) {
    let audioPlayer = new Audio(path);
    audioPlayer.play();
}

function keyAnimate(key) {
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add('pressed');
    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100);
}

// function DrumPiece(key, imagePath, audioPath) {
//     this.key = key;
//     this.imagePath = imagePath;
//     this.audioPath = audioPath;
// }