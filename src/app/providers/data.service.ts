import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL: string = 'https://mpadawm-default-rtdb.firebaseio.com/collection.json';

  constructor(private http: HttpClient) {

  }
  getResponse() {
    // Configura las opciones de la solicitud para especificar la codificación
    const options = {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      }
    };

    return this.http.get(this.URL, options);
  }
}
