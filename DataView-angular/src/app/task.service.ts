import { Injectable } from '@angular/core';
import { Task } from './TASK';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, last } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  createDb() {
    const TASKS = [
      { id: 0, taskname: '0' },
      { id: 1, taskname: '1' },
      { id: 2, taskname: '2' },
      { id: 3, taskname: '3' },
      { id: 4, taskname: '4' },
      { id: 5, taskname: '5' },
      { id: 6, taskname: '6' },
      { id: 7, taskname: 'PLUS' },

    ];
    // localStorage.setItem('tasks', JSON.stringify(TASKS));
    if (null === JSON.parse(localStorage.getItem('tasks'))) {
      localStorage.setItem('tasks', JSON.stringify(TASKS));
    }
    return { TASKS };
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
    this.createDb();
  }

  lastname: Task[] = JSON.parse(localStorage.getItem('tasks'));

  getTasks(): Observable<Task[]> {
    return of(this.lastname)
  }

  addTask(task: Task): Observable<Task[]> {
    this.lastname.pop();
    this.lastname.push(task, { id: this.lastname.length + 1, taskname: "PLUS" })
    // this.lastname.splice(this.lastname.length - 1, 0, task)
    localStorage.setItem('tasks', JSON.stringify(this.lastname));
    return of(this.lastname)
  }

  deleteTask(task: Task): Observable<Task[]> {
    for (var i = 0; i < this.lastname.length; i++) {
      if (this.lastname[i].id == task.id && this.lastname[i].taskname == task.taskname) {
        this.lastname.splice(i, 1)
        console.log("delete index =", i)
        var index = i;
        // localStorage.setItem('tasks', JSON.stringify(this.lastname));
      }
    }
    for (let j = index; j < this.lastname.length; j++) {
      // console.log("j value=", j)
      this.lastname[j].id -= 1
    }
    localStorage.setItem('tasks', JSON.stringify(this.lastname));
    return of(this.lastname)
  }

  saveTask(task1: Task, task2: Task): Observable<Task[]> {
    for (var i = 0; i < this.lastname.length; i++) {
      if (this.lastname[i].id == task2.id && this.lastname[i].taskname == task2.taskname) {
        this.lastname.splice(i, 1, task1)
        // console.log("delete index =", i)
        // var index = i;
        localStorage.setItem('tasks', JSON.stringify(this.lastname));
      }
    }
    return of(this.lastname)
  }

  selectedTask(task:Task , inputindex:number): Observable<Task>{
    var states:Number = 0
    var index :number
    for (var i = 0; i < this.lastname.length; i++) {
      if (this.lastname[i].id == task.id && this.lastname[i].taskname == task.taskname) {
        states = 1;
        index = i;
        // console.log("inif=", i)
        break
      }
    }
    if (states==1) {
      task = task
    }
    else{
      task = this.lastname[inputindex]
    }
        // console.log("index number=", states , inputindex)
    return of(task)
  }
  // updateTask(task: Task): Observable<Task[]> {
  //   for (var i = 0; i < this.lastname.length; i++) {
  //     if (this.lastname[i].id == task.id && this.lastname[i].taskname == task.taskname) {
  //       this.lastname.splice(i, 1)
  //       localStorage.setItem('tasks', JSON.stringify(this.lastname));
  //     }
  //   }
  // }

  // getTask(id: number): Observable<Task> {
  //   const url = `${this.tasksUrl}/${id}`;
  //   return this.http.get<Task>(url).pipe(
  //     tap(_ => this.log(`fetched task id=${id}`)),
  //     catchError(this.handleError<Task>(`getTask id=${id}`))
  //   );
  // }

  /** GET heroes from the server */
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }



  // private log(message: string) {
  //   this.messageService.add(`TaskService: ${message}`);
  // }



};


