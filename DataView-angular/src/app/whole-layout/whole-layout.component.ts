import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whole-layout',
  templateUrl: './whole-layout.component.html',
  styleUrls: ['./whole-layout.component.css']
})
export class WholeLayoutComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 1, color: 'lightpink'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
