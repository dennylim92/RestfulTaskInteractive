import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getAllTasks() {
    return this._http.get('/tasks');
  }

  getTask(id) {
    console.log("service ->", id);
    return this._http.get('/task/'+id);
  }
}
