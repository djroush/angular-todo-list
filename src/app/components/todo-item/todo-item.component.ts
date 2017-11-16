import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services'
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() text: string;
  @Input() completed: boolean;
  //Fixme: index will always be null because this value is available in todo-input
  @Input() id: number;

  constructor(private service: TodoService) { }

  public todo: Todo;

  ngOnInit() {}

  public showCloseButton(): boolean {
  	return this.completed;
  }

  public removeItem(): void {
  	console.log("In removeItem() - index: " + this.id)
  	const todo: Todo = {
  		text: this.text,
  		completed: this.completed, 
      id: this.id
  	}
  	this.service.remove(todo);
  }
}
