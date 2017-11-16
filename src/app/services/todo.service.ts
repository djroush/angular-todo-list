import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
  public todoList: Observable<Todo[]>;
  private todos: Todo[];
  private todoSubject: BehaviorSubject<Todo[]>;
  private listIndex: number = 0;

  constructor() { 
  	this.todos = [];
    this.todoSubject = new BehaviorSubject<Todo[]>(this.todos);
    this.todoList = this.todoSubject.asObservable();
  }

  public add(text: string) : Todo {
    const todo: Todo = {
  		text: text,
  		completed: false,
      id: this.listIndex
  	}
    this.listIndex += 1;

    console.log("added: `" + todo.text + "`  at " + todo.id);
  	this.todos.push(todo);
    console.log("first index: " +this.todos[0].id);
  	this.todoSubject.next(this.todos);
    return todo;
  }

  public remove(todo: Todo) : void {
//    this.todos.splice(todo.id, 1);
    var todoJson = JSON.stringify(todo);

    for(var i=0; i < this.todos.length; i++) {
      if (todoJson === JSON.stringify(this.todos[i])) {
        console.log("About to remove:" + todoJson + " at pos: " + i);
        this.todos.splice(i, 1);
      }
    }
  }
}
