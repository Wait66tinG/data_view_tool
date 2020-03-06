import { Component, OnInit, Inject } from '@angular/core';
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
  isActives: isActive[] =[];

  
  constructor(
    private taskService: TaskService,
  ) {
    this.getTasks()
    this.getProject()
    this.aTagClass()
  }


  aTagClass() {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id == 0) {
        this.isActives.push({HtmlClass:"nav-item nav-link active", Project:this.projects[i]})
      }
      else{
        this.isActives.push({HtmlClass:"nav-item nav-link", Project:this.projects[i]})
      }
    }
    // this.isActives.push({ HtmlClass: "nav-item nav-link active", Project: "123" })
    console.log(this.isActives)
  }

  selectedTask: Task;
  selectedProject:Project ;

  selectTask(task: Task): void {
    this.selectedTask = task;
    var select = task.taskName
    if (select == "PLUS") {
      this.selectedTask = null;
    }
    console.log(this.selectedTask,"selectedtask is work")
  
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
    var select = project.projectName
    if (select == "PLUS") {
      this.selectedProject = null;
    }
    console.log(this.selectedProject,"selected is work")
  
  }

  ngOnInit() {
    this.getHeight()
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
    // console.log(this.projects, "get project is work")
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
