import { Component, OnInit } from "@angular/core";
import { TodoPropertyChange } from "./TodoPropertyChange";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  private todoPropChange: TodoPropertyChange;

  constructor() {}

  ngOnInit() {
    this.todoPropChange.type = "BOOLEAN";
    this.todoPropChange.fieldName = "Done";
    this.todoPropChange.newValue = "true";
    this.todoPropChange.oldValue = "false";
  }
}
