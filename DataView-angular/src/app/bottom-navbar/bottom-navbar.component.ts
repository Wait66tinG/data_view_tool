import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent implements OnInit {
  links = ['Basics', 'Schedule', 'TaskPanel','Procedure','MindMap'];
  activeLink = this.links[0];
  constructor() { };

  ngOnInit() {
  }

}
