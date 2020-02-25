import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../TASK';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInputTaskComponent } from '../dialog-input-task/dialog-input-task.component';
// import { TASKS } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { TaskService } from '../task.service';
export interface DialogData {
  // id: number;
  // taskname: string;
  // taskdetail: string;
}

@Component({
  selector: 'app-TaskPanel',
  templateUrl: './TaskPanel.component.html',
  styleUrls: ['./TaskPanel.component.css']
})
export class TaskPanelComponent implements OnInit {
  tasks: Task[];
  // id: number;
  // taskname: string;
  // taskdetail: string;
  states = "lock";

  panelOpenState = false;
  constructor(
    public dialog: MatDialog,  
    private taskService: TaskService,) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogInputTaskComponent, {
      width: '350px',
      height: '320px',
      // data: { id: this.id, taskname: this.taskname, taskdetail: this.taskdetail }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.id = result;
    });
  }
  ngOnInit() {
    this.getTasks ()
  }

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(heroes => this.tasks = heroes);
  }

  changeIcon() {
    if (this.states === "lock") {
      this.states = "lock_open";
    }
    else{
      this.states = "lock";
    }
  }



}
