import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css'],
})
export class AlltasksComponent implements OnInit {
  @Input() getTaskFromService: any;
  showButton = 'SHOW';
  singleTask: any;
  showTasks = false;
  showOneTask = false;
  @Output() gotSingleTask = new EventEmitter();
  
  constructor(private _httpService: HttpService) { 

  }

  ngOnInit() {

  }

  getSingleTask(id) {
    const singleTask = this._httpService.getTask(id);
    singleTask.subscribe(data => {
      this.singleTask = data[0];
      this.gotSingleTask.emit(this.singleTask);
    });
  }


}
