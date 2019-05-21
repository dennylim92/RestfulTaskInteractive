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

  showEdit(id) {
    console.log('hit service');
    return this._http.get('/task/' + id);
  }

  addTask(newtask) {
    return this._http.post('/task/create', newtask);
  }

  editTask(id, editTask) {
    return this._http.put('/task/' + id, editTask);
  }

  removeTask(id) {
    return this._http.delete('/task/' + id);
  }
}

