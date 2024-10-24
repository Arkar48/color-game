import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoundService } from '../service/sound/sound.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  clickAbout: boolean = false;
  constructor(private router: Router, private playSound: SoundService) { }
  ngAfterViewInit(): void {
    this.playSound.play();
  }
  showAbout() {
    this.clickAbout = true;
    this.playSound.clickPlay();
  }
  hideAbout() {
    this.clickAbout = false;
    this.playSound.clickPlay();
  }
  gotoGame() {
    this.playSound.clickPlay();
    this.router.navigate(['/game']);
  }
}
