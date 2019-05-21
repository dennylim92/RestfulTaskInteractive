import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: any = [];
  gotTasks = false;
  singleTask: any;
  newTask: any;
  task: any;
  editSingleTask = false;
  editTask: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.editTask = { title: '', description: ''};
    this.newTask = { title: '', description: ''};
    this.getTaskFromService();
  }

  createTask() {
    const createTask = this._httpService.addTask(this.newTask);
    createTask.subscribe(data => {
      this.newTask = { title: '', description: ''};
      this.getTaskFromService();
    });
  }

  showEdit(id) {
    console.log(id);
    const showEdit = this._httpService.showEdit(id);
    showEdit.subscribe(data => {
      this.singleTask = data[0];
      this.editTask = data[0];
      this.editSingleTask = true;
    });
  }

  updateTask(id) {
    const editTask = this._httpService.editTask(id, this.editTask);
    editTask.subscribe(data => {
      this.editSingleTask = false;
      this.editTask = { title: '', description: ''};
      this.getTaskFromService();
    });
  }

  getTaskFromService() {
    const allTasks = this._httpService.getAllTasks();
    allTasks.subscribe(data => {
      this.tasks = data;
      this.gotTasks = true;
    });
  }

  deleteTask(id) {
    const deleteTask = this._httpService.removeTask(id);
    deleteTask.subscribe(data => {
      this.getTaskFromService();
    });
  }

}
