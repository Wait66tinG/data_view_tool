import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { Task, Project, isActive } from '../TASK';
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
  projects: Project[];
  states = "lock";
  isActives: isActive[] = [];
  project: Project;


  constructor(
    private taskService: TaskService,
  ) {
    this.getTasks()
    this.getProject()
    this.aTagClass()
    this.selectProject(this.projects[0])
    // console.log(this.project,"TaskPanel is work")
  }


  aTagClass() {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id == 0) {
        this.isActives.push({ HtmlClass: "nav-item nav-link active", Project: this.projects[i] })
      }
      else {
        this.isActives.push({ HtmlClass: "nav-item nav-link", Project: this.projects[i] })
      }
    }
    // this.isActives.push({ HtmlClass: "nav-item nav-link active", Project: "123" })
    // console.log(this.isActives)
  }

  selectedTask: Task;
  selectedProject: Project;

  selectTask(task: Task): void {
    this.selectedTask = task;
    var select = task.taskName
    if (select == "PLUS") {
      this.selectedTask = null;
    }
    // console.log(this.selectedTask, "selectedtask is work")

  }

  selectProject(project: Project): void {
    this.selectedProject = project;
    var select2 = project.projectName
    if (select2 == "PLUS") {
      this.selectedProject = null;
    }
    // this.transProjectToProject.emit(this.selectedProject);
    // this.taskService.selectProject = project;
    // console.log(this.selectedProject, this.taskService.selectProject, "selected is work")
    this.taskService.selectedProject(project)
    this.selectedTask={id:999,taskName:'',belongToProject:''}
    // console.log(this.selectedProject)
      // .subscribe(tasks => this.selectedProject = tasks);
  }

  ngOnInit() {
    this.getHeight()
  }

  getSelectedTasks(selectedTask: Task): void {
    this.selectedTask = selectedTask
    // console.log(selectedTask,"TaskPanel is work123")
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
    // console.log(this.tasks)
  }


  getProject(): void {
    this.taskService.getProject()
      .subscribe(projects => this.projects = projects);
    this.selectedProject = this.projects[0]
    this.project = this.projects[0];
    // console.log(this.project,"12321")
  }

  changeIcon() {
    if (this.states === "lock") {
      this.states = "lock_open";
    }
    else {
      this.states = "lock";
    }

  }
  winHeight: number
  getHeight() {
    this.winHeight = window.innerHeight
    this.taskService.getHeight(this.winHeight)
      .subscribe(winHeight => this.winHeight = winHeight);
    console.log("function", this.winHeight)
  }
}
