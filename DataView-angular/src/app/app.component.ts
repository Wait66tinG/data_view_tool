import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INnoVation';
  constructor(
  ) {
    // this.getHeight()
  }
  ngOnInit(): void {
    // console.log(this.winHeight)
    
  }
  // getHeight(){
  //   this.winHeight = window.innerHeight + "px";
  // }
}
