import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../TASK';
import { TaskService } from '../task.service'
import { from } from 'rxjs';
import { FormControl, FormGroupDirective, NgForm, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent implements OnInit {
  @Input()

  task: Task;
  lock: string;
  newTask1: Task;
  tasks: Task[];
  lastname: Task[] = JSON.parse(localStorage.getItem('tasks'));
  static IsAddTure: any;
  constructor(
    private taskService: TaskService,
  ) {
    // this.select()
  }


  ngOnInit(): void {
  }

  add(newTask: string): void {
    if (newTask !== "" && newTask !== "PLUS") {
      this.newTask1 = { id: this.lastname.length - 1, taskName: newTask }
      this.taskService.addTask(this.newTask1)
        .subscribe(task => {
          this.lastname = task;
        });
    }
    // console.log("add", this.lastname)
    // this.select()
  }

  delete(): void {
    // console.log(this.task.taskname)
    this.taskService.deleteTask(this.task)
      .subscribe(task => {
        this.lastname = task;
        // console.log("delete", task)
      });
    this.select()
    if (this.task.taskName == "PLUS") {
      this.task = null
    }
  }

  select() {
    // console.log("select task" ,this.task)
    this.taskService.selectedTask(this.task, this.task.id)
      .subscribe(task1 => this.task = task1);
  }

  save(newTask: string): void {
    if (newTask !== "" && newTask !== "PLUS") {
      this.newTask1 = { id: this.task.id, taskName: newTask }
      this.taskService.saveTask(this.newTask1, this.task)
        .subscribe(task => {
          this.lastname = task;
        });
      // console.log("save is work")
    }
    this.select()
  }

  taskFormControl = new FormControl('',
    Validators.required
  );

}
