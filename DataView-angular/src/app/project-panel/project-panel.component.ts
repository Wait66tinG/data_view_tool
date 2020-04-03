import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, Project, isActive } from '../TASK';
import { TaskService } from '../task.service';
import { FormControl, FormGroupDirective, NgForm, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.css']
})
export class ProjectPanelComponent implements OnInit {
  @Input() project: Task

  @Output() selected = new EventEmitter<Task>();
  tasks: Task[];
  task: Task
  // project :Project;
  // lock: string;
  // newTask1: Task;
  // tasks: Task[];
  // lastname: Task[] = JSON.parse(localStorage.getItem('tasks'));
  static IsAddTure: any;
  constructor(
    private taskService: TaskService,
  ) {
    this.getTasks()
  }


  ngOnInit(): void {
  }

  winHeight: number
  getHeight() {
    this.winHeight = window.innerHeight
    this.taskService.getHeight(this.winHeight)
      .subscribe(winHeight => this.winHeight = winHeight);
    console.log("function", this.winHeight)
  }

  selectedTask: Task;
  selectTask(task: Task): void {
    this.selectedTask = task;
    var select = task.taskName
    if (select == "PLUS") {
      this.selectedTask = null;
    }
      this.selected.emit(this.selectedTask);
    // console.log("project is work",this.selectedTask)
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
    console.log(this.tasks)
  }

  // add(newTask: string): void {
  //   if (newTask !== "" && newTask !== "PLUS") {
  //     this.newTask1 = { id: this.lastname.length - 1, taskName: newTask }
  //     this.taskService.addTask(this.newTask1)
  //       .subscribe(task => {
  //         this.lastname = task;
  //       });
  //   }
  //   // console.log("add", this.lastname)
  //   // this.select()
  // }

  // delete(): void {
  //   // console.log(this.task.taskname)
  //   this.taskService.deleteTask(this.task)
  //     .subscribe(task => {
  //       this.lastname = task;
  //       // console.log("delete", task)
  //     });
  //   // this.select()
  //   if (this.task.taskName == "PLUS") {
  //     this.task = null
  //   }
  // }

  // select() {
  //   // console.log("select task" ,this.task)
  //   this.taskService.selectedTask(this.task, this.task.id)
  //     .subscribe(task1 => this.task = task1);
  // }

  // save(newTask: string): void {
  //   if (newTask !== "" && newTask !== "PLUS") {
  //     this.newTask1 = { id: this.task.id, taskName: newTask }
  //     this.taskService.saveTask(this.newTask1, this.task)
  //       .subscribe(task => {
  //         this.lastname = task;
  //       });
  //     // console.log("save is work")
  //   }
  //   // this.select()
  // }

  // taskFormControl = new FormControl('',
  //   Validators.required
  // );
}
