import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import *as Chart from 'chart.js';
import { TaskService } from '../task.service';
import { Task } from '../TASK';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];
@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})

export class BasicsComponent implements OnInit {
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  displayedColumns = ['id', 'taskname'];
  // dataSource = ELEMENT_DATA;
  tasks: Task[]
  showtasks: Task[]
  @ViewChild('canvas1')
  public canvas1Ref: ElementRef;
  canvas1: any;
  constructor(private taskService: TaskService, ) {
    this.getTasks()
    this.showTaskChange()
  }

  ngOnInit(): void {
  }

  showTaskChange() {
    this.showtasks = JSON.parse(JSON.stringify(this.tasks));
    this.showtasks = this.showtasks.slice(0, this.tasks.length - 1);
    for (let i = 0; i < this.showtasks.length; i++) {
      this.showtasks[i].id += 1
    }
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
    // console.log(this.tasks.length, this.tasks)
  }

  // ngAfterViewInit(): void {
  //   this.canvas1 = this.canvas1Ref.nativeElement;
  //   var ctx = this.canvas1Ref.nativeElement.getContext('2d');
  //   var myChart = new Chart(ctx, {
  //     type: 'pie',
  //     data: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //           'rgba(0, 200, 225, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       // scales: {
  //       //   yAxes: [{
  //       //     ticks: {
  //       //       beginAtZero: true
  //       //     }
  //       //   }]
  //       // }
  //     }
  //   });
  // }
}
