import { Component, OnInit, Renderer2 } from '@angular/core';
import { SoundService } from '../service/sound/sound.service';
import { GameService } from '../service/game/game.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  chooseLevel: boolean = false;
  correctanswer: boolean = false;
  completedGame: boolean = false;
  question: string = '';
  answers: string[] = [];
  status: string = "";
  level: string = "";
  constructor(private playSound: SoundService, protected gameService: GameService, private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
    this.playSound.play();
  }
  chooseDifficulty(difficulty: string) {
    this.playSound.clickPlay();
    this.level = difficulty;
    this.createGameContent();
    this.chooseLevel = true;
    this.completedGame = true;
  }
  createGameContent() {
    this.gameService.generateGameContent(this.level);
    this.answers = this.gameService.answers;
    this.question = this.gameService.question;

  }
  selectAnswer(selectedAnswer: string, event: Event) {
    this.playSound.clickPlay();
    console.log(this.level);
    console.log(event.target);
    if (selectedAnswer === this.question) {
      this.playSound.correctSoundPlay();
      this.status = "Correct!";
      this.question = "";
      this.answers = [];
      console.log('win');
      setTimeout(() => {
        this.status = "";
        this.correctanswer = true;
      }, 2000)
    }
    else {
      this.status = "Wrong Choice!";
      this.playSound.wrongSoundPlay();
      const element = event.target as HTMLElement;
      console.log("wrong");
      console.log(this.answers)
      this.renderer.removeChild(element.parentElement, element);
      setTimeout(() => {
        this.status = "";
      }, 2000)
    }
  }
  gotohome() {
    this.playSound.clickPlay();
    this.router.navigate(['/home']);
  }
  nextGame() {
    this.playSound.clickPlay();
    this.createGameContent();
    this.correctanswer = false;

  }
  gotoChooseLevel() {
    this.playSound.clickPlay();
    this.chooseLevel = false;
    this.completedGame = false;
    this.correctanswer = false;
  }
}
