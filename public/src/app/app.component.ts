import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mainTitle = 'Restful Tasks API';
  getAllTasks = 'Get All Tasks';
  tasks: any = [];
  singleTask: any;
  showTasks = false;
  showOneTask = false;

  constructor(private _httpService: HttpService) {


  }

  ngOnInit() {

  }

  showSingleTask(event) {
    this.singleTask = event;
    this.showOneTask = true;
    this.showTasks = false;
  }



  getTaskFromService() {
    const allTasks = this._httpService.getAllTasks();
    allTasks.subscribe(data => {
      this.tasks = data;
      this.showTasks = true;
      this.showOneTask = false;
    });
  }

  





}
