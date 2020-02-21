import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import *as Chart from 'chart.js';
@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})

export class BasicsComponent implements OnInit {
  @ViewChild('canvas1')
  public canvas1Ref: ElementRef;
  canvas1: any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.canvas1 = this.canvas1Ref.nativeElement;
    var ctx = this.canvas1Ref.nativeElement.getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
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
        // scales: {
        //   yAxes: [{
        //     ticks: {
        //       beginAtZero: true
        //     }
        //   }]
        // }
      }
    });
  }
}
