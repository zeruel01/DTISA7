import { Component, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Limit} from './models/limit';
import { Song} from './models/song';
import { AppleResponse } from './models/appleresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appleResponse:Song[];  //{resultCount:0,results:Song[]};

  constructor(){
  }
  

 onQuery(data:AppleResponse) {
   this.appleResponse=data.results;
    
  }

}
