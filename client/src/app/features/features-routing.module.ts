import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoDetailViewComponent } from './todo/todo-detail/todo-detail-view.component';

export const ROUNTING_COMPONENTS = [
  TodoDetailViewComponent,
  TodoListComponent];

const routes: Routes = [
  { path: 'list', component: TodoListComponent },
  { path: 'details', component: TodoDetailViewComponent },
  { path: 'details/:id', component: TodoDetailViewComponent },
  { path: '**', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
