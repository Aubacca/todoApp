import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { TodoService } from '@features/services/todo.service';
import { Todo } from '@features/models/todo.model';

@Component({
  selector: 'app-todo-detail-view',
  templateUrl: './todo-detail-view.component.html',
  styleUrls: ['./todo-detail-view.component.css']
})
export class TodoDetailViewComponent implements OnInit {
  @Input() todoItem: Todo;

  @Output() saveTodo = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit() {}

  onSubmit(formsData) {
    console.log(formsData);
    console.log('formsData.value:', formsData.value);
    this.saveTodo.emit(formsData.value);
  }
}
