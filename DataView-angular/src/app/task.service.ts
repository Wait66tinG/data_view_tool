import { Injectable } from '@angular/core';
import { Task } from './TASK';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  createDb() {
    const TASKS = [
      { id: 1, taskname: 'Dr Nice' },
      { id: 2, taskname: 'Narco' },
      { id: 3, taskname: 'PLUS' },

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

  addTask(task: Task): Observable<Task> {
    this.lastname.pop();
    this.lastname.push(task, { id: this.lastname.length + 2, taskname: "PLUS" })
    localStorage.setItem('tasks', JSON.stringify(this.lastname));
    return of(task)
  }

  deleteTask(task: Task): Observable<Task[]> {
    for (var i = 0; i < this.lastname.length; i++) {
      if (this.lastname[i].id == task.id) {
        this.lastname.splice(i, 1)
        localStorage.setItem('tasks', JSON.stringify(this.lastname));
      }
    }
    for (let index = 0; index < this.lastname.length; index++) {
      if (this.lastname[index].id >= i) {
        this.lastname[index].id -= 1
      }
      localStorage.setItem('tasks', JSON.stringify(this.lastname));
    }
    return of(this.lastname)
  }
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


