import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Todo } from './../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  private _todoItem: Todo;

  constructor(
    private _route: ActivatedRoute,
    private _todoService: TodoService
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      window.scrollTo(0, 0);
      console.log('params: ', params);
      if (params && params.id) {
        this._todoService
          .findOne(params.id)
          .subscribe(data => (this._todoItem = data));
      } else {
        this._todoItem = { _id: '', todo: '', done: false, public: false };
        console.log('new todo!');
      }
    });
  }

  get todoItem(): Todo {
    return this._todoItem;
  }
  onSubmit(formsData) {
    console.log(formsData);
    console.log('formsData.value:', formsData.value);
    console.log('todoItem:', this._todoItem);
    if (this._todoItem._id) {
      this._todoService
        .updateTodo(this._todoItem)
        .subscribe(data =>
          console.log('Client-service>Todo successfully update: ', data)
        );
    } else {
      this._todoService
        .addTodo(this._todoItem)
        .subscribe(data =>
          console.log('Client-service>Todo successfully created: ', data)
        );
    }
  }
}
