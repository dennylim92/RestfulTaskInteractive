import { Component, OnInit } from '@angular/core';
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
  gotTasks = false;
  showButton = 'SHOW';
  singleTask: any;
  gotSingleTask = false;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {

  }

  getTaskFromService() {
    const allTasks = this._httpService.getAllTasks();
    allTasks.subscribe(data => {
      this.tasks = data;
      this.gotTasks = true;
      this.gotSingleTask = false;
    });
  }

  getSingleTask(id) {
    console.log(id);
    const singleTask = this._httpService.getTask(id);
    singleTask.subscribe(data => {
      this.singleTask = data[0];
      this.gotSingleTask = true;
      this.gotTasks = false;
    });

  }
}
