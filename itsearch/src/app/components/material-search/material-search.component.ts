import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import {debounceTime, distinctUntilChanged} from "rxjs/internal/operators";
import {Subject} from "rxjs";
import { Limit } from 'src/app/models/limit';
import { Validators, FormControl, NgModel } from '@angular/forms';
import { MusicService } from 'src/app/services/music.service';
import { Song } from 'src/app/models/song';
import { AppleResponse } from 'src/app/models/appleresponse';

@Component({
  selector: 'app-material-search',
  templateUrl: './material-search.component.html',
  styleUrls: ['./material-search.component.css']
})
export class MaterialSearchComponent implements OnInit {


  txtQuery: string=""; 

  limit: number=10; 

  txtChanged: Subject<string> = new Subject<string>();
  limitChanged: Subject<number> = new Subject<number>();
  musicService:MusicService;

  @Output() listChanged: EventEmitter<AppleResponse> =   new EventEmitter();
  
  limits: Limit[] = [
    {value: 10, viewValue: '10'},
    {value: 15, viewValue: '15'},
    {value: 20, viewValue: '20'}
  ];
  
  
  baseFormControl = new FormControl('', [
    Validators.required,    
  ]);
  
  constructor(
    private MusicService:MusicService
    ) {  

   this.txtChanged
      .pipe(debounceTime(300), distinctUntilChanged())
     .subscribe(model => {
       this.txtQuery = model;       
       this.getDataFromAPI(this.txtQuery,this.limit);
      });

      this.limitChanged
      .pipe(debounceTime(100), distinctUntilChanged())
     .subscribe(model => {
       this.limit = model;       
       this.getDataFromAPI(this.txtQuery,this.limit);
      });
 }

 
    onFieldChange(term:string){
      this.txtChanged.next(term);
    }

    
    onLimitChange(number){
      this.limitChanged.next(number);
    }

    ngOnInit() {
    }


  private getDataFromAPI(query:string,limit:number)
  {
    this.MusicService.getElements(query,limit).subscribe(m=>
    {
      this.listChanged.emit(m);      
    }
    );

  }

  

}
