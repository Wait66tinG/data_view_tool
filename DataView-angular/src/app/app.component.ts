import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataView-angular';
  winHeight: string = window.innerHeight +"px";
  ngOnInit(): void {
    console.log(this.winHeight)
  }
}
