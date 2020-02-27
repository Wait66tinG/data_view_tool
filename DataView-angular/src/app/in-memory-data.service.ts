import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './TASK';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const TASKS = [
      // { id: 1, taskname: 'Dr Nice' },
      // { id: 2, taskname: 'Narco' },
      // { id: 3, taskname: 'Bombasto' },
      // { id: 4, taskname: 'Celeritas' },
      // { id: 5, taskname: 'Magneta' },
      // { id: 6, taskname: 'RubberMan' },
      // { id: 7, taskname: 'Dynama' },
      // { id: 8, taskname: 'Dr IQ' },
      // { id: 9, taskname: 'Magma' },
      // { id: 10, taskname: 'Tornado' }
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