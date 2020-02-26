import { Component, OnInit, Inject, NgZone, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
// import { TASKS } from '../mock-heroes'
import { Task } from '../TASK';
export interface DialogData {
  // id: number;
  // taskname: string;
  // taskdetail: string;
}
@Component({
  selector: 'app-dialog-input-task',
  templateUrl: './dialog-input-task.component.html',
  styleUrls: ['./dialog-input-task.component.css']
})

export class DialogInputTaskComponent implements OnInit {
  // tasks = TASKS;
  // id = this.tasks.length;
  newTask1 :Task;

  constructor(
    private _ngZone: NgZone,
    public dialogRef: MatDialogRef<DialogInputTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addTask(newTask: string , newTaskDetail: string) {
    // this.newTask1 = {id:this.id,taskname:newTask,taskdetail:''};
    // this.tasks.push(this.newTask1);
  }
}
