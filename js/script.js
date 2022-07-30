const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pausa = document.querySelector('#pausa')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector("#forward");

$play.addEventListener('click', handlePlay )
$pausa.addEventListener("click", handlePausa)
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);

function handlePlay(){
  $video.play()
  $play.hidden=true
  $pausa.hidden=false
  console.log('le diste click al boton de play')
}
function handlePausa() {
  $video.pause();
  $pausa.hidden = true;
  $play.hidden = false;
  console.log("le diste click al boton de Pausa");
}
function handleBackward() {
 
  console.log(
    "para atras 10 segundos",
    ($video.currentTime -= 10)
  );
}
function handleForward() {
  console.log(
    "para adelante 10 segundos",
    ($video.currentTime += 10)
  );
}

const $progress =document.querySelector('#progress')
$video.addEventListener("loadedmetadata", handledLoaded);
$video.addEventListener("timeupdate", handledTimeUpdate);

function handledLoaded(){
  $progress.max = $video.duration
  console.log('A cargado el video',$video.duration);
}

function handledTimeUpdate(){
  $progress.value= $video.currentTime;
  // console.log('hoili',$video.currentTime);
}

$progress.addEventListener('input',handleInput)

function handleInput(){
  $video.currentTime = $progress.value
  console.log($progress.value);
}