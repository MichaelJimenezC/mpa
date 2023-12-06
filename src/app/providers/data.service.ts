import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL: string = 'https://mpadawm.firebaseio.com/collection.json';

  constructor(private http:HttpClient) { 

  }
  getResponse() {
    return this.http.get(this.URL);
}
}
