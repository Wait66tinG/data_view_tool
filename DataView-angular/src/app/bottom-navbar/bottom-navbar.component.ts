import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent implements OnInit {
  links = ['Basic', 'Schedule', 'TaskPanel','Procedure'];
  activeLink = this.links[0];
  constructor() { };

  ngOnInit() {
  }

}

