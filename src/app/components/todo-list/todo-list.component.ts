import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/todo";
import { TodoService } from "../../services"

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todos: Todo[];

  constructor(private service: TodoService) { }

  ngOnInit() {
  	this.service.todoList.subscribe(
  		(todos: Todo[]) => this.todos = todos
  	);
  }
}
