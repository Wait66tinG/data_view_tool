import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../TASK';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent implements OnInit {
  @Input() task: Task;
  constructor() { }

  ngOnInit(): void {
  }
  addTask(newTask: string) {
    // this.newTask1 = {id:this.id,taskname:newTask,taskdetail:''};
    // this.tasks.push(this.newTask1);
  }
  // goBack(): void {
  //   this.location.back();
  // }
  save(): void {
    // this.taskService.updateTask(this.task)
    //   .subscribe(() => this.goBack());
  }
}
