import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  audioElement: HTMLAudioElement;
  clickSound: HTMLAudioElement;
  correctSound: HTMLAudioElement;
  wrongSound: HTMLAudioElement;
  isMuted: boolean = false;
  constructor() {
    this.audioElement = new Audio('assets/sounds/backgroundmusic.mp3');
    this.audioElement.loop = true;
    this.audioElement.autoplay = true;
    this.clickSound = new Audio('assets/sounds/mouseclick.mp3');
    this.correctSound = new Audio('assets/sounds/correctanswer.mp3');
    this.wrongSound = new Audio('assets/sounds/wronganswer.mp3');
  }
  play() {
    if (!this.isMuted) {
      this.audioElement.play();
    }
  }
  clickPlay() {
    if (!this.isMuted) {
      this.clickSound.play();
    }
  }
  correctSoundPlay() {
    if (!this.isMuted) {
      this.correctSound.play();
    }
  }
  wrongSoundPlay() {
    if (!this.isMuted) {
      this.wrongSound.play();
    }
  }
  mute() {
    this.audioElement.pause();
    this.clickSound.pause();
    this.isMuted = true;
  }
  unmute() {
    if (!this.isMuted) {
      return;
    }
    this.audioElement.play();
    this.clickSound.play();
    this.isMuted = false;
    this.audioElement.currentTime = 0;
  }
}
