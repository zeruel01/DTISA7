import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Limit } from './models/limit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //title = 'itsearch';

  baseFormControl = new FormControl('', [
    Validators.required,    
  ]);

  limits: Limit[] = [
    {value: 10, viewValue: '10'},
    {value: 15, viewValue: '15'},
    {value: 20, viewValue: '20'}
  ];


}
