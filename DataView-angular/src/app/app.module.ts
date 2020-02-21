import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskPanelComponent } from './TaskPanel/TaskPanel.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BasicComponent } from './Basic/Basic.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProcedureComponent } from './procedure/procedure.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { BasicsComponent } from './basics/basics.component'
import { MatExpansionModule } from '@angular/material/expansion';
import { MindMapComponent } from './mind-map/mind-map.component';
@NgModule({
   declarations: [
      AppComponent,
      TaskPanelComponent,
      BottomNavbarComponent,
      ScheduleComponent,
      BasicComponent,
      ProcedureComponent,
      BasicsComponent,
      MindMapComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatGridListModule,
      MatToolbarModule,
      MatIconModule,
      MatTabsModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatButtonModule,
      MatStepperModule,
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule,
      MatExpansionModule,
      // MatDatepickerModule,
      RouterModule.forRoot([
         { path: '', component: BasicsComponent , /*data: {animation: 'FilterPage'}*/},
         { path: 'MindMap', component: MindMapComponent , /*data: {animation: 'FilterPage'}*/},
         { path: 'Basics', component: BasicsComponent , /*data: {animation: 'FilterPage'}*/},
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
