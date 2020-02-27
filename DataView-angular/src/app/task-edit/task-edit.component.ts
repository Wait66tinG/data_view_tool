import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../TASK';
import { TaskService } from '../task.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent implements OnInit {
  @Input()
  task: Task;
  newTask1: Task;
  tasks: Task[];
  lastname: Task[] = JSON.parse(localStorage.getItem('tasks'));
  static IsAddTure: any;
  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
  }

  add(newTask: string): void {
    this.newTask1 = { id: this.lastname.length, taskname: newTask }
    this.taskService.addTask(this.newTask1)
      .subscribe(task => {
        this.lastname.push(task);
      });
  }

  delete(): void {
    console.log(this.task.taskname)
    this.taskService.deleteTask(this.task)
      .subscribe(task => {
        this.lastname=task;
        console.log(task)
      });

  }

  save(): void {

  }
}
