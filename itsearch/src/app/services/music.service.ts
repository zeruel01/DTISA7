import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
//import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  rootURL: string;
  url: string;
  constructor(
    //public http: Http,
    private httpClient: HttpClient

  ) {   
    this.rootURL = `${environment.baseUrl}`;
   }

   public getElements(term,limit): any {

    this.url = `${this.rootURL}/search?term=${term}%limit=${limit}`;
    return this.httpClient.get(this.url+"");
    // .map((res: any) => res.json());
  }
}
