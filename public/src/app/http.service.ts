import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTasks(){
    let tempObservable = this._http.get('/task');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  showTasks(){
    let tempObservable = this._http.get('/task/:id');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
}
