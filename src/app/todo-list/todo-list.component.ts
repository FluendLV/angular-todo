import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoes: Todo[] = [];  // Local myTodo array

  constructor(private todoService: TodoService) {
    todoService.todo$.subscribe((savedTodos: Todo[]) => {
      this.todoes = savedTodos;    // todoes = todoes which already are saved 
    })
   }

  ngOnInit(): void {
    this.getTodoes();
  }

  getTodoes() {
    this.todoService.getTodoes();
  }  

  add(task: string, id: number): void{
    task = task.trim();
    this.todoService.addTodo({ id, task } as Todo)
  }

  delete(id: number): void{
    this.todoService.deleteTodo(id);
    
  }
  
}
