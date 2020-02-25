import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskPanelComponent } from './TaskPanel/TaskPanel.component';

const routes: Routes = [
  { path: 'tasks', component: TaskPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
