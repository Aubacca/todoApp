import { OnInit, Component } from '@angular/core';

import { TodoService } from '@features/services/todo.service';

@Component({
  selector: 'app-todos',
  template: `
    <div *ngFor="let todo of todos" class="todo">
      {{todo.id}}
    </div>
  `
})
export class Todo2Component implements OnInit {
  todos = [];

  constructor(private todosService: TodoService) {}

  ngOnInit() {
    this.todosService.find().subscribe(todos => {
      this.todos = todos;
    });
  }
}
