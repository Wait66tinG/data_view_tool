import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskPanelComponent } from './TaskPanel/TaskPanel.component';
import { TaskEditComponent }  from './task-edit/task-edit.component';
const routes: Routes = [
  { path: 'tasks', component: TaskEditComponent },
  { path: 'detail/:id', component: TaskEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
