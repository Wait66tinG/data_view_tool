import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animations';
import { RouterOutlet } from '@angular/router';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-Basic',
  templateUrl: './Basic.component.html',
  styleUrls: ['./Basic.component.css'],
  animations: [
    slideInAnimation
  ]
})


export class BasicComponent implements OnInit {
  winHeight: number
  // winHeightStr:string
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor(
    private taskService: TaskService,
  ) { 
    
  }

  ngOnInit(): void {
    this.getHeight()
  }
  getHeight(){
    this.winHeight = window.innerHeight
    this.taskService.getHeight(this.winHeight)
      .subscribe(winHeightStr => this.winHeight = winHeightStr);
      console.log( "function" ,this.winHeight)
  }

}

