import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../TASK';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInputTaskComponent } from '../dialog-input-task/dialog-input-task.component';
import { Observable, of } from 'rxjs';
import { TaskService } from '../task.service';
import { TaskEditComponent } from '../task-edit/task-edit.component';


@Component({
  selector: 'app-TaskPanel',
  templateUrl: './TaskPanel.component.html',
  styleUrls: ['./TaskPanel.component.css']
})
export class TaskPanelComponent implements OnInit {
  tasks: Task[];

  states = "lock";

  selectedTask: Task;
  constructor(
    private taskService: TaskService,
  ) {
    this.getTasks()
  }



  select(task: Task): void {
    this.selectedTask = task;
    var select = task.taskname
    if (select == "PLUS") {
      this.selectedTask = null;
    }
    // else{
    //   this.taskService.selectedTask(task)
    //   .subscribe(task1 => this.selectedTask = task);
    //   this.selectedTask = task1;
    // }
  }

  ngOnInit() {
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  changeIcon() {
    if (this.states === "lock") {
      this.states = "lock_open";
    }
    else {
      this.states = "lock";
    }
  }

  add(): void {
    // this.taskService.addTask()
    // .subscribe(tasks => this.tasks = tasks);
    // .subscribe(task => {
    //   this.tasks.push(task);
    // });
    // console.log(123)
  }



}
