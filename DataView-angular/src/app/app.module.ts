import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskPanelComponent } from './TaskPanel/TaskPanel.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RouterModule } from '@angular/router';
import { WholeLayoutComponent } from './whole-layout/whole-layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BasicComponent } from './Basic/Basic.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProcedureComponent } from './procedure/procedure.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { Chart } from 'chart.js/dist/Chart.js';

@NgModule({
   declarations: [
      AppComponent,
      TaskPanelComponent,
      BottomNavbarComponent,
      ScheduleComponent,
      WholeLayoutComponent,
      BasicComponent,
      ProcedureComponent,
      
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatGridListModule,
      MatToolbarModule,
      MatIconModule,
      MatTabsModule,
      BrowserAnimationsModule,
      RouterModule.forRoot([
         { path: 'Basic', component: BasicComponent , /*data: {animation: 'FilterPage'}*/},
         { path: 'TaskPanel', component: TaskPanelComponent , /* data: {animation: 'FilterPage'}*/},
         { path: 'Schedule', component: ScheduleComponent , /* data: {animation: 'FilterPage'}*/},
         { path: 'Procedure', component: ProcedureComponent , /* data: {animation: 'FilterPage'}*/},
       ])
   ],
   
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {

 }
