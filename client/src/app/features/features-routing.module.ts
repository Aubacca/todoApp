import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoFromStoreComponent } from '@features/todo/todo-from-store/todo-from-store.component';

export const ROUNTING_COMPONENTS = [
  TodoDetailComponent,
  TodoListComponent,
  TodoFromStoreComponent
];

const routes: Routes = [
  { path: 'list', component: TodoListComponent },
  { path: 'storeList', component: TodoFromStoreComponent },
  { path: 'details', component: TodoDetailComponent },
  { path: 'details/:id', component: TodoDetailComponent },
  { path: '**', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
