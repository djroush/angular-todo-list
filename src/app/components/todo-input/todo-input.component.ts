import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { TodoService } from '../../services'
import { Todo } from '../../models/todo'


@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  public text: string;
  private defaultText: string = "Type a task description and press enter to create it";
  
  @HostBinding('class.default-text') textIsEmpty:boolean;
  constructor(private service: TodoService) {}

  ngOnInit() {
    this.showDefaultText();
  }

  onKeyPress(event: KeyboardEvent): void {
    const key: number = event.keyCode;
    const ENTER_KEY: number = 13;
    if (this.text === this.defaultText) {
      this.hideDefaultText();
    } else if (key === ENTER_KEY) {
    	this.addTodo();
    }
  }
  
  onFocus(event: FocusEvent): void {
    if (this.text === this.defaultText) {
      this.hideDefaultText();
    }
  }
  
  
  private addTodo(): void {
    var todo: Todo = this.service.add(this.text);
    this.showDefaultText();
  }
  
  private showDefaultText(): void {
    this.textIsEmpty = true;
    this.text = this.defaultText; 
  }
  private hideDefaultText(): void {
    this.textIsEmpty = false;
    this.text = '';
  }
}
