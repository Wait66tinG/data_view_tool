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
      { id: 0, taskName: '背单词' ,belongToProject:'学英语'},
      { id: 1, taskName: '学语法' ,belongToProject:'学英语'},
      { id: 2, taskName: '练口语' ,belongToProject:'学英语'},
      { id: 3, taskName: '写作文' ,belongToProject:'学英语'},
      { id: 4, taskName: '学Java' ,belongToProject:'学编程'},
      { id: 5, taskName: '学Html' ,belongToProject:'学编程'},
      { id: 6, taskName: 'PLUS' ,belongToProject:''},
    ];
    // localStorage.setItem('tasks', JSON.stringify(TASKS));
    if (null === JSON.parse(localStorage.getItem('tasks'))) {
      localStorage.setItem('tasks', JSON.stringify(TASKS));
    }
    return { TASKS };
  }
  projectDb() {
    const PROJECTS = [
      { id: 0, projectName: '学英语' },
      { id: 1, projectName: '学编程' },
      { id: 2, projectName: 'ThirdProject' },
  
    ];
    // localStorage.setItem('projects', JSON.stringify(PROJECTS));
    if (null === JSON.parse(localStorage.getItem('projects'))) {
      localStorage.setItem('projects', JSON.stringify(PROJECTS));
    }
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
    this.Tasks.push(task, { id: this.Tasks.length + 1, taskName: "PLUS",belongToProject:'' })
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

  saveProject(project1: Project, project2: Project): Observable<Project[]> {
    for (var i = 0; i < this.Projects.length; i++) {
      if (this.Projects[i].id == project2.id && this.Projects[i].projectName == project2.projectName) {
        this.Projects.splice(i, 1, project1)
        // console.log("delete index =", i)
        // var index = i;
        localStorage.setItem('projects', JSON.stringify(this.Projects));
      }
    }
    return of(this.Projects)
  }
  
  selectedTask(task: Task): Observable<Task> {
    this.selectTask=task
    // console.log(this.selectTask,"service is work 1")
    this.getSelectedTask()
    return of(task)
  }

  selectProject:Project;
  selectedProject(project:Project): Observable<Project>{
    this.selectProject = project
    return of(this.selectProject)
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


