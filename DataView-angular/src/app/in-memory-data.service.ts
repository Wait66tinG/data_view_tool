import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './TASK';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const TASKS = [
      { id: 1, taskname: 'Dr Nice' ,taskdetail:'123'},
      { id: 2, taskname: 'Narco' ,taskdetail:'123'},
      { id: 3, taskname: 'Bombasto' ,taskdetail:'123'},
      { id: 4, taskname: 'Celeritas' ,taskdetail:'123'},
      { id: 5, taskname: 'Magneta' ,taskdetail:'123'},
      { id: 6, taskname: 'RubberMan' ,taskdetail:'123'},
      { id: 7, taskname: 'Dynama' ,taskdetail:'123'},
      { id: 8, taskname: 'Dr IQ' ,taskdetail:'123'},
      { id: 9, taskname: 'Magma' ,taskdetail:'123'},
      { id: 10, taskname: 'Tornado' ,taskdetail:'123'}
    ];
    return {TASKS};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(TASKS: Task[]): number {
    return TASKS.length > 0 ? Math.max(...TASKS.map(task => task.id)) + 1 : 11;
  }
}