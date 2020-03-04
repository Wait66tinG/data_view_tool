import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import *as Chart from 'chart.js';
import { TaskService } from '../task.service';
import { Task ,Project} from '../TASK';
@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})

export class BasicsComponent implements OnInit {
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  displayedColumns = ['#', 'Project Name'];
  // dataSource = ELEMENT_DATA;
  tasks: Task[]
  showtasks: Project[]
  projects:Project[]
  @ViewChild('canvas1')
  public canvas1Ref: ElementRef;
  canvas1: any;
  constructor(private taskService: TaskService, ) {
    this.getTasks()
    this.getProject()
    this.showTaskChange()
  }

  ngOnInit(): void {
  }

  showTaskChange() {
    this.showtasks = JSON.parse(JSON.stringify(this.projects));
    this.showtasks = this.showtasks.slice(0, this.projects.length - 1);
    for (let i = 0; i < this.showtasks.length; i++) {
      this.showtasks[i].id += 1
    }
    console.log( this.projects)
  }

  getProject(): void {
    this.taskService.getProject()
      .subscribe(projects => this.projects = projects);
      // console.log("getProject is work",this.projects)
  }
  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
    // console.log(this.tasks.length, this.tasks)
  }
  winHeight: number
  getHeight() {
    this.winHeight = window.innerHeight
    this.taskService.getHeight(this.winHeight)
      .subscribe(winHeight => this.winHeight = winHeight);
    // console.log("function", this.winHeight)
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
