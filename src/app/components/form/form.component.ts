import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { category } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public isLoading: boolean = false;
  public categories: category[] = [];
  private config: string = '';

  constructor(private readonly apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    await this.apiService.getCategories().then((res) => {
      this.categories = res;
      this.isLoading = false;
    });
  }

  onChange(form: NgForm) {
    console.log(form);
    // If you already know the *required* variables, destructuring the object itself is much better
    const { Amount: amount, Category: category, Difficulty: difficulty, Type: type } = form.value;

    /* instead of doing this
    // let amount = form.value.Amount;
    // let category = form.value.Category;
    // let difficulty = form.value.Difficulty;
    // let type = form.value.Type;
    */
    let tempConfig = '&';
    if (amount.length != 0) {
      tempConfig += `amount=${amount}&`;
    }
    if (category.length != 0) {
      tempConfig += `category=${category}&`;
    }
    if (difficulty.length != 0) {
      tempConfig += `difficulty=${difficulty.toLowerCase()}&`;
    }
    if (type.length != 0) {
      if (type === 'Multiple choice') {
        tempConfig += 'type=multiple&';
      } else {
        tempConfig += `type=boolean&`;
      }
    }
    //Need to remove the last character in the string so that the format stays correct
    this.apiService._configString = tempConfig.slice(0, -1);;
  }
}
