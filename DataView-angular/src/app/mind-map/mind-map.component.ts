import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mind-map',
  templateUrl: './mind-map.component.html',
  styleUrls: ['./mind-map.component.css']
})


export class MindMapComponent implements OnInit {
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  constructor() { 
  
  }

  ngOnInit(): void {
  }
  click(){
    console.log(localStorage.id,localStorage.taskname)
  }

}

