import { Component, OnInit } from '@angular/core';
import { question } from '../models/question';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public isLoading : boolean = false;
  public questions : question[] = [];
  public showQuestions : boolean = false;

  constructor(private readonly apiService : ApiService) { }

  handleGetQuestions() : void {
    this.isLoading = true;
    // Using RXJS
    // this.apiService.getQuestionsRXJS().then(response => {
    //   this.questions = response;
    //   this.isLoading = false;
    //   this.showQuestions = true;      
    // });

    // Using fetch api
    this.apiService.getQuestions().then(response => {
      this.questions = response;
      this.isLoading = false;
      this.showQuestions = true;
    })
  }

  /**
   * Simple toggle function for viewing questions or not whenever a button is clicked
   */
  handleShowQuestions() : void {  
    this.showQuestions = !this.showQuestions;
  }
}
