import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent, TodoInputComponent, TodoItemComponent, TodoListComponent } from './components';
import { TodoService } from './services'

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
