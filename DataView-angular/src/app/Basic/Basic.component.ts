import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-Basic',
  templateUrl: './Basic.component.html',
  styleUrls: ['./Basic.component.css'],
  animations: [
    slideInAnimation
  ]})
export class BasicComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
