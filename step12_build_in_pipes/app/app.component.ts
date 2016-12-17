import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Dates</h1>
    <!-- Sep 1, 2015 -->
    <p>{{date | date:'mediumDate'}}</p>
    <!-- September 1, 2015 -->
    <p>{{date | date:'yMMMMd'}}</p>
    <!-- 3:50 pm -->
    <p>{{date | date:'shortTime'}}</p>

    <h1>Decimals/Percentages</h1>
    <!-- 99.00% -->
    <p>{{grade | percent:'.2'}}</p>
    <!-- 09.12 -->
    <p>{{rating | number:'2.1-2'}}</p>

    <h1>String</h1>

    <p> {{ name | uppercase}}</p>
    <p> {{ name | lowercase}}</p>
    <p> {{ name | slice: '2':'4'}}</p>
 
  `,
})
export class AppComponent  { 
  date: Date;
  grade: number;
  rating: number;

  name: string;

  constructor() {
    this.date = new Date();
    this.grade = 0.99;
    this.rating = 9.1243;
    this.name = "Morgan Stanley";
  }
 }
