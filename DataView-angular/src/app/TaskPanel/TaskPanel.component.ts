import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-TaskPanel',
  templateUrl: './TaskPanel.component.html',
  styleUrls: ['./TaskPanel.component.css']
})
export class TaskPanelComponent implements OnInit {
  Tasks = ['Task1', 'Task1', 'Task1','Task1','Task1','Task1','Task1','Task1','Task1','Task1'];
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}

