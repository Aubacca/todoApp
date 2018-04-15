import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoService } from './services/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
