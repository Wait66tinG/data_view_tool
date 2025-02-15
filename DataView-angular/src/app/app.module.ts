import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MindMapComponent } from './mind-map/mind-map.component';
import { AppComponent } from './app.component';
import { TaskPanelComponent } from './TaskPanel/TaskPanel.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RouterModule } from '@angular/router';
import { BasicComponent } from './Basic/Basic.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { BasicsComponent } from './basics/basics.component'

import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
// import {MatPaginator} from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogInputTaskComponent } from './dialog-input-task/dialog-input-task.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { ProjectPanelComponent } from './project-panel/project-panel.component';

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
      DialogInputTaskComponent,
      MessagesComponent,
      TaskEditComponent,
      ProjectPanelComponent,
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
      MatDatepickerModule,
      MatTableModule,
      MatNativeDateModule,
      FormsModule,
      ReactiveFormsModule,
      MatDialogModule,
      TextFieldModule,
      HttpClientModule,
      // MatPaginator,
      // MatTableDataSource,
      HttpClientModule,

      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      ),


      RouterModule.forRoot([
         { path: '', component: BasicsComponent, /*data: {animation: 'FilterPage'}*/ },
         { path: 'MindMap', component: MindMapComponent, /*data: {animation: 'FilterPage'}*/ },
         { path: 'Basics', component: BasicsComponent, /*data: {animation: 'FilterPage'}*/ },
         { path: 'TaskPanel', component: TaskPanelComponent, /* data: {animation: 'FilterPage'}*/ },
         { path: 'Schedule', component: ScheduleComponent, /* data: {animation: 'FilterPage'}*/ },
         { path: 'Procedure', component: ProcedureComponent, /* data: {animation: 'FilterPage'}*/ },
      ])
      
   ],

   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {

}
