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
import {MatIconModule} from '@angular/material/icon';
import { PageOneComponent } from './page-one/page-one.component';

@NgModule({
   declarations: [
      AppComponent,
      TaskPanelComponent,
      BottomNavbarComponent,
      ScheduleComponent,
      WholeLayoutComponent,
      PageOneComponent,
      
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatGridListModule,
      MatToolbarModule,
      MatIconModule,
      RouterModule.forRoot([
         { path: 'PageOne', component: PageOneComponent },
         { path: 'WholeLayout', component: WholeLayoutComponent },
       ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
