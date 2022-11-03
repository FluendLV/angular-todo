import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TODOES } from './mock-todo';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  myTodos = TODOES; // Initial data array (can also be empty)

  todo = new BehaviorSubject<any>(null); //Behavior subj [EMPTY] 
  todo$ = this.todo.asObservable(); // Same subject but bet lai varetu pie to subskribēt 

  singleTodo = new BehaviorSubject<any>(null);
  singleTodo$ = this.singleTodo.asObservable();
  

  constructor() { }

  getTodoes(): void {
    this.todo.next(this.myTodos); // Initialize myTodos for behavior subject
  }

  getTodo(id: number): void{
    this.singleTodo.next(this.myTodos.find(t => t.id === id)!);
  }

  addTodo(newTodo: Todo): void{
    if(this.myTodos.find(listTodo => newTodo.task === listTodo.task)) { return }

    this.myTodos.push(newTodo); // push into array
    this.todo.next(this.myTodos); // UPDATE the info about the array
  }

  deleteTodo(incomingTodoId: number): void{
    this.myTodos = this.myTodos.filter(listTodo => incomingTodoId !== listTodo.id) //
    this.todo.next(this.myTodos);
  }

  completeItem(index: number): void{
    let todo = this.myTodos[index];
    todo.done = !todo.done;
    this.singleTodo.next(todo);
    this.todo.next(this.myTodos);
  }

}
