import { Component, OnInit } from '@angular/core';
import { SoundService } from '../../service/sound/sound.service';

@Component({
  selector: 'app-game-setting',
  templateUrl: './game-setting.component.html',
  styleUrls: ['./game-setting.component.scss']
})
export class GameSettingComponent implements OnInit {
  isMuted: boolean = false;

  constructor(private playSound: SoundService) {

  }
  toggleBackgroundMusic() {
    if (this.isMuted) {
      this.playSound.unmute();
    }
    else {
      this.playSound.mute();
      this.playSound.clickPlay();
    }
    this.isMuted = !this.isMuted;
  }
  ngOnInit(): void {
  }
}