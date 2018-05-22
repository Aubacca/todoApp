import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from '@features/containers/todo-list/todo-list.component';
import { TodoDetailComponent } from '@features/components/todo-detail/todo-detail.component';
import { TodoFromStoreComponent } from '@features/containers/todo-from-store/todo-from-store.component';

export const ROUNTING_COMPONENTS = [
  TodoDetailComponent,
  TodoListComponent,
  TodoFromStoreComponent
];

const routes: Routes = [
  { path: 'list', component: TodoListComponent },
  { path: 'details', component: TodoDetailComponent },
  { path: 'details/:todoId', component: TodoDetailComponent },
  {
    path: 'todos',
    component: TodoFromStoreComponent,
    children: [
      // { path: '', redirectTo: 'detail', pathMatch: 'full' },
      { path: 'detail', component: TodoFromStoreComponent }
    ]
  },
  { path: '**', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
