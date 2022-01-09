import { Component, Input, OnInit } from '@angular/core';
import { question } from 'src/app/models/question';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() questions : question[] = [];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.questions);
  }

  
  // Very important!
  // If the input ever changes this will update the component automatically
  ngOnChanges() {}

}
