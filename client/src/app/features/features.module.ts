import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material.module';

import { TodoListViewComponent } from '@app/features/todo/todo-list/todo-list-view.component';
import { TodoDetailViewComponent } from '@app/features/todo/todo-detail/todo-detail-view.component';

import {
  FeaturesRoutingModule,
  ROUNTING_COMPONENTS
} from './features-routing.module';
import { TodoService } from '@app/features/services/todo.service';

@NgModule({
  declarations: [
    ROUNTING_COMPONENTS,
    TodoListViewComponent,
    TodoDetailViewComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [TodoService]
})
export class FeaturesModule {}
