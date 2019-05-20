import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getTasks() {
    console.log('hit service.ts');
    return this._http.get('/tasks');
  }

  // showTasks() {
  //   const allTasks = this._http.get('/task/:id');
  //   allTasks.subscribe(data => console.log("Got our tasks!", data));
  // }
}
