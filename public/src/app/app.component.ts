import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mainTitle = 'Restful Tasks API';
  allTaskTitle = 'All the tasks:';
  thirdTaskTitle = "Third task:";
  tasks: any = [];
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getTaskFromService();
  }

  getTaskFromService() {
    console.log('hit components.ts');
    const allTasks = this._httpService.getTasks();
    allTasks.subscribe(data => {
      this.tasks = data;
      console.log("tasks ->", data);
    });
  }
}
