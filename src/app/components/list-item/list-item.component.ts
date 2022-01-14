import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { question } from 'src/app/models/question';

@Component({
  // Notice the selector here and the selector tag in /src/app/components/list/list.component.html
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  // Initialize a new question object with an empty value
  @Input() question: question = {} as question;
  @Output() answerEventEmitter = new EventEmitter<string>();
  public answers: string[] = [];

  async ngOnInit(): Promise<void> {
    console.log(this.question);

    await this.arrangeAnswers();
  }

  // Very important!
  // If the input ever changes this will update the component automatically
  ngOnChanges() {}

  /**
   * Arranges all answers for a question so that the ordering is alphabetical
   * Simply done because the answers should not be in the same order every time
   */
  async arrangeAnswers(): Promise<void> {
    this.answers.push(this.question.correct_answer);
    this.question.incorrect_answers.forEach((answer) => {
      this.answers.push(answer);
    });
    this.answers.sort();
  }

  handleAnswer(answer: string) {
    console.log(`Emitting answer: ${answer} from list-item component`);
    this.answerEventEmitter.emit(answer);
  }
}
