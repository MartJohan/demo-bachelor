import { Injectable } from '@angular/core';
import { question } from '../models/question';
import { environment } from  '../../environments/environment';
import { category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /*
  * IMPORTANT
  * Gotten from /src/app/enviroments/enviroment.ts when developing on localhost
  * Gotten from /src/app/enviroments.prod.ts when running in prod (on cloud)
  * This means that you have to have one url for localhost and one url for prod.
  */
  private apiUrl = environment.api_url;
  private apiCategory = environment.api_category;
  
  public _configString : string = "";

  constructor(private http: HttpClient) { }

  /**
   * Gets questions from the api.
   * 
   * If the configuration parameter is empty / false, then the method returns 10 random questions
   * 
   * @param configurations Consists of a string of query parameters i.e amount=10&category=movies
   */
  async getQuestions() : Promise<question[]> {
    try {
      if(this._configString.length != 0) {
        const { results } = await fetch(`${this.apiUrl + this._configString}`).then(response => response.json());
        return results;
      } else {
        const { results } = await fetch(`${this.apiUrl}amount=10`).then(response => response.json());
        return results;
      }
    } catch (err) {
      console.log(`Error when getting questions ${err}`);
      return [];
    }
  }
  //Using RXjs library
  // Turns the LAST value from an observable into a promise witch allows async / await
  // The opposite of LastValueFrom is FirstValueFrom whic gets the first value emitted
  async getQuestionsRXJS() {
    const questions: question[] = await lastValueFrom<any>(this.http.get(`${this.apiUrl + this._configString}`));
    return questions;
  }
 
  async getCategories() : Promise<category[]> {
    const { trivia_categories } = await fetch(`${this.apiCategory}`)
    .then(response => response.json()).catch(error => {
      console.log(`Error when fetching categories ${error}`);
      return [];
    });
    return trivia_categories;
  }
}
