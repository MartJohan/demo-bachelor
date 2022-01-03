import { Component, Input, OnInit } from '@angular/core';
import { question } from 'src/app/models/question';

@Component({
  // Notice the selector here and the selector tag in /src/app/components/list/list.component.html
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  // Initialize a new question object with an empty value
  @Input() question : question = {} as question;
  public answers : string[] = [];

  constructor() { }

  async ngOnInit(): Promise<void> {
    await this.arrangeAnswers();
  }

  // If the input ever changesm this will handle the change
  ngOnChanges() { }

  /**
   * Arranges all answers for a question so that the ordering is alphabetical
   */
  async arrangeAnswers(): Promise<void> {
    this.answers.push(this.question.correct_answer);
    this.question.incorrect_answers.forEach(answer => {this.answers.push(answer)});
    this.answers.sort();
  }
}
