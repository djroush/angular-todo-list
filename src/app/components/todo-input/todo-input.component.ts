import { Component, OnInit, HostListener } from '@angular/core';
import { TodoService } from '../../services'
import { Todo } from '../../models/todo'

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  public text: string;
  
  constructor(private service: TodoService) {}

  ngOnInit() {}

  onKeyPress(event: KeyboardEvent): void {
    const key: number = event.keyCode;
    const ENTER_KEY: number = 13;
    if (key === ENTER_KEY) {
    	this.addTodo();
    }	
  }
  private addTodo(): void {
    var todo: Todo = this.service.add(this.text);
    this.text = '';
  }
}
