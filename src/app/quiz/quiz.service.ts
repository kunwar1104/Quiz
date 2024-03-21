import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  url : string  = "assets/db-Quiz-Data1.json";

  constructor( public http : HttpClient ) { }

  quiz_Data() {
    return this.http.get<any>(`${this.url}`)
  }

}
