import { Injectable } from '@angular/core';
import { Task } from './TASK';
import { TASKS } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
  return TASKS;
}
}
