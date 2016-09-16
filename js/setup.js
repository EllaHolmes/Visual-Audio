/**
 * Created by ellaholmes on 8/9/16.
 */
"use strict";

const AUDIO_SOURCES = [
    "mp3/Can't Sleep 1.m4a",
    "mp3/Missing Peace.mp3",
    "mp3/sabor a selva-djcaution remix.wav",
    "mp3/Summer Trees.mp3",
];

var audioFile, analyser;

//Randomly chooses a song, and loads the audio
function preload() {
    var audioSrc = AUDIO_SOURCES[Math.floor(Math.random() * AUDIO_SOURCES.length)];
    audioFile = loadSound(audioSrc);
}

//toggles pause and play when the space bar is pressed
function keyPressed(){
    if( key === " "){
        audioFile.isPlaying() ? audioFile.pause() : audioFile.play();
    }
}