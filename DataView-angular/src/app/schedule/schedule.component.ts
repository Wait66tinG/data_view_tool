import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import *as Chart from 'chart.js';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {

  @ViewChild('canvas1')
  public canvas1Ref: ElementRef;
  canvas1: any;
  @ViewChild('canvas2')
  public canvas2Ref: ElementRef;
  canvas2: any;
  @ViewChild('canvas3')
  public canvas3Ref: ElementRef;
  canvas3: any;
  @ViewChild('canvas4')
  public canvas4Ref: ElementRef;
  canvas4: any;
  constructor() {

  }

  onClickMe() {


  }
  ngOnInit() {


  }

  ngAfterViewInit(): void {
    this.canvas1 = this.canvas1Ref.nativeElement;
    var ctx = this.canvas1Ref.nativeElement.getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(0, 200, 225, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    this.canvas2 = this.canvas2Ref.nativeElement;
    var ctx2 = this.canvas2Ref.nativeElement.getContext('2d');
    var myChart = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 10, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(0, 200, 225, 1)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    this.canvas3 = this.canvas3Ref.nativeElement;
    var ctx3 = this.canvas3Ref.nativeElement.getContext('2d');
    var myChart = new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 10, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(0, 200, 225, 1)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 5
        }]
      },
      options: {
        scales: {
        }
      }
    });
    this.canvas4 = this.canvas4Ref.nativeElement;
    var ctx4 = this.canvas4Ref.nativeElement.getContext('2d');
    var myChart = new Chart(ctx4, {
      type: 'radar',
      data: {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{
          label: '# of Votes',
            data: [20, 10, 4, 2],
            backgroundColor: [
              'rgba(0, 200, 225, .2)'
            ],
        }]
        
    },
      options : {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 10,
                suggestedMax: 20
            }
        }
    }
    });
  }
  


}
