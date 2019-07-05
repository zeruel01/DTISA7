import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Song } from 'src/app/models/song';
import { AppleResponse } from 'src/app/models/appleresponse';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor() { 

  }

  @Input('appleResponse') appleResponse: Song[];

  ngOnInit() {

  }

  displayedColumns: string[] = [
    //'trackId'
    'artistName'
    ,'collectionName'
    ,'releaseDate'
    ,'trackName'
    ,'primaryGenreName'
    ,'collectionPrice'
    ,'trackPrice'

  ]
    ;

  

  
}
