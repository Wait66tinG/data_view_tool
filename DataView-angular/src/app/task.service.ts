import { Injectable } from '@angular/core';
import { Task, Project, isActive } from './TASK'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, last } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskDb() {
    const TASKS = [
      { id: 0, taskName: '0' },
      { id: 1, taskName: '1' },
      { id: 2, taskName: '2' },
      { id: 3, taskName: '3' },
      { id: 4, taskName: '4' },
      { id: 5, taskName: '5' },
      { id: 6, taskName: 'PLUS' },
    ];
    // localStorage.setItem('tasks', JSON.stringify(TASKS));
    if (null === JSON.parse(localStorage.getItem('tasks'))) {
      localStorage.setItem('tasks', JSON.stringify(TASKS));
    }
    return { TASKS };
  }
  projectDb() {
    const PROJECTS = [
      { id: 0, projectName: 'FirstProject' },
      { id: 1, projectName: 'SecondProject' },
      { id: 2, projectName: 'ThirdProject' },
      { id: 3, projectName: 'PLUS' },
    ];
    localStorage.setItem('projects', JSON.stringify(PROJECTS));
    // if (null === JSON.parse(localStorage.getItem('projects'))) {
    //   localStorage.setItem('projects', JSON.stringify(PROJECTS));
    // }
    return { PROJECTS };
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
    this.taskDb();
    this.projectDb();
  }

  Tasks: Task[] = JSON.parse(localStorage.getItem('tasks'));
  Projects: Project[] = JSON.parse(localStorage.getItem('projects'));
  isActives: isActive[];
  selectTask: Task ;

  getTasks(): Observable<Task[]> {
    return of(this.Tasks)
  }
  getProject(): Observable<Project[]> {
    return of(this.Projects)
  }

  addTask(task: Task): Observable<Task[]> {
    this.Tasks.pop();
    this.Tasks.push(task, { id: this.Tasks.length + 1, taskName: "PLUS" })
    // this.lastname.splice(this.lastname.length - 1, 0, task)
    localStorage.setItem('tasks', JSON.stringify(this.Tasks));
    return of(this.Tasks)
  }

  deleteTask(task: Task): Observable<Task[]> {
    for (var i = 0; i < this.Tasks.length; i++) {
      if (this.Tasks[i].id == task.id && this.Tasks[i].taskName == task.taskName) {
        this.Tasks.splice(i, 1)
        // console.log("delete index =", i)
        var index = i;
        // localStorage.setItem('tasks', JSON.stringify(this.lastname));
      }
    }
    for (let j = index; j < this.Tasks.length; j++) {
      console.log("j value=", j)
      this.Tasks[j].id -= 1
    }
    localStorage.setItem('tasks', JSON.stringify(this.Tasks));
    return of(this.Tasks)
  }

  saveTask(task1: Task, task2: Task): Observable<Task[]> {
    for (var i = 0; i < this.Tasks.length; i++) {
      if (this.Tasks[i].id == task2.id && this.Tasks[i].taskName == task2.taskName) {
        this.Tasks.splice(i, 1, task1)
        // console.log("delete index =", i)
        // var index = i;
        localStorage.setItem('tasks', JSON.stringify(this.Tasks));
      }
    }
    return of(this.Tasks)
  }
  
  selectedTask(task: Task): Observable<Task> {
    this.selectTask=task
    // console.log(this.selectTask,"service is work 1")
    this.getSelectedTask()
    return of(task)
  }

  getSelectedTask(): Observable<Task>{
    // console.log(this.selectTask,"service is work 2")
    return of(this.selectTask)
  }

  getHeight(height: number): Observable<number> {
    height -= 50
    height /= 16
    return of(height)
  }
};


