import { Component, OnInit, Input } from '@angular/core';
import { Task, Project } from '../TASK';
import { TaskService } from '../task.service'
import { from } from 'rxjs';
import { FormControl, FormGroupDirective, NgForm, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent implements OnInit {
  @Input()  task: Task;
  @Input()  project: Project;
  newTask1: Task;
  tasks: Task[];
  lastname: Task[] = JSON.parse(localStorage.getItem('tasks'));
  projects:Project[]= JSON.parse(localStorage.getItem('projects'));
  selectedTask: Task
  selectedProject:Project
  static IsAddTure: any;
  constructor(
    private taskService: TaskService,
  ) {
    // console.log(this.task)
  }


  ngOnInit(): void {
  }

  // getSelectedTasks(): void {
  //   this.taskService.getSelectedTask()
  //     .subscribe(task => this.selectedTask = task);
  //   console.log(this.selectedTask, "task-edit is work123")
  // }

  add(newTask: string): void {
    this.selectedProject = this.taskService.selectProject
    // console.log(this.selectedProject,"task-edit is work")
    if (newTask !== "" && newTask !== "PLUS") {
      this.newTask1 = { id: this.lastname.length - 1, taskName: newTask, belongToProject: this.selectedProject.projectName }
      this.taskService.addTask(this.newTask1)
        .subscribe(task => {
          this.lastname = task;
        });
    }
    // console.log("add", this.lastname)
    // this.select()
  }

  delete(): void {
    // this.task = this.lastname[this.task.id+1]
    // console.log(this.task.taskname)
    this.taskService.deleteTask(this.task)
      .subscribe(task => {
        this.lastname = task;
        // console.log("delete", task)
      });
    // this.select()
    if (this.task.taskName == "PLUS") {
      this.task = null
    }
    this.task = this.lastname[this.task.id]

  }

  // select() {
  //   // console.log("select task" ,this.task)
  //   this.taskService.selectedTask(this.task, this.task.id)
  //     .subscribe(task1 => this.task = task1);
  // }

  save(newTask: string): void {
    if (newTask !== "" && newTask !== "PLUS") {
      this.task.taskName = newTask
      this.newTask1 = { id: this.task.id, taskName: newTask, belongToProject: "all" }
      this.taskService.saveTask(this.newTask1, this.task)
        .subscribe(task => {
          this.lastname = task;
        });
    }
    // console.log(this.task)
  }

  changeProject:Project
  saveProject(newProject: string): void {
    if (newProject !== "") {
      this.project.projectName = newProject
      this.changeProject = { id: this.project.id, projectName: newProject}
      this.taskService.saveProject(this.changeProject, this.project)
        .subscribe(project => {
          this.projects = project;
        });
    }
    // console.log(this.task)
  }

  taskFormControl = new FormControl('',
    Validators.required
  );

}
