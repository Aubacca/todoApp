import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';

export class Todo {
  constructor(
    public _id: number,
    public toto: string,
    public done: boolean,
    public remark?: string
  ) {}
}

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  public todoItem: any = {
    todo: '',
    remark: '',
    public: false,
    done: false
  };

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.todoService
        .findOne(params.id)
        .subscribe(data => (this.todoItem = data));
    });
  }

  onSubmit(formsData) {
    console.log(formsData);
    console.log('formsData.value:', formsData.value);
    console.log('todoItem:', this.todoItem);
  }
}
