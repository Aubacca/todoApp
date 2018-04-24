import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo-detail",
  templateUrl: "./todo-detail.component.html",
  styleUrls: ["./todo-detail.component.css"]
})
export class TodoDetailComponent implements OnInit {
  public todoItem: any;

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

  onSubmit (formsData) {
    console.log(formsData);
  }
}
