import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  question: string = '';
  answers: string[] = [];
  constructor() { }

  generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  }

  generateGameContent(difficulty: string) {
    if (difficulty === "easy") {
      const answerOption = Array.from({ length: 3 }, () => this.generateRandomColor());
      const randomIndex = Math.floor(Math.random() * 3);

      this.question = answerOption[randomIndex];
      this.answers = answerOption;
    }
    else {
      const answerOption = Array.from({ length: 6 }, () => this.generateRandomColor());
      const randomIndex = Math.floor(Math.random() * 6);

      this.question = answerOption[randomIndex];
      this.answers = answerOption;
    }
  }
}
