import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-singletask',
  templateUrl: './singletask.component.html',
  styleUrls: ['./singletask.component.css']
})
export class SingletaskComponent implements OnInit {
  @Input() getSingleTask: any;
  


  constructor() { 

  }

  ngOnInit() {

  }

}
