import { Component, OnInit, Inject } from '@angular/core';
import { Task ,Project} from '../TASK';
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
  projects:Project[];
  states = "lock";

  selectedTask: Task;
  constructor(
    private taskService: TaskService,
  ) {
    this.getTasks()
    this.getProject()
  }



  select(task: Task): void {
    this.selectedTask = task;
    var select = task.taskName
    if (select == "PLUS") {
      this.selectedTask = null;
    }
  }

  ngOnInit() {
    this.getHeight()
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  getProject(): void {
    this.taskService.getProject()
      .subscribe(projects => this.projects = projects);
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
    // console.log("function", this.winHeight)
  }
  labelledby(project:Project):string{
    console.log("nav"+project.projectName+"tab")
    return "nav"+project.projectName+"tab"
  }
}
