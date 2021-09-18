// VAR
const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pausa = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $fowdard = document.querySelector('#fowdard');
const progreso = document.querySelector('#progress');

// EVENTOS
$play.addEventListener('click',handlPlay);
$pausa.addEventListener('click',handlPause);
$backward.addEventListener('click',handlBack);
$fowdard.addEventListener('click',handlFod);
// 
$video.addEventListener('loadedmetadata',handleLoad);
$video.addEventListener('timeupdate', handleTime);
progreso.addEventListener('input',handlInput);

// FUNCIONES PARA LOS CONTROLES
// CONTROLES DE REPRODUCTOR
function handlPlay(){
     $video.play();
     $play.hidden = true;
     $pausa.hidden = false;
    console.log('Play');
}
function handlPause(){
     $video.pause(); 
     $play.hidden = false;
     $pausa.hidden = true;

    console.log('Pause');
}
function handlBack(){
    $video.currentTime -= 10;
    // console.log('retrocede',$video.currentTime);
}
function handlFod(){
    $video.currentTime=$video.currentTime +10;
    // console.log('adelanta' ,$video.currentTime);

}
// PROGRESS

function handleTime(){
    progreso.value=$video.currentTime
}
function handleLoad(){    
    progreso.max = $video.duration
    // console.log('cargando..',$video.duration);
}
function handlInput(){
    $video.currentTime =  progreso.value
}
