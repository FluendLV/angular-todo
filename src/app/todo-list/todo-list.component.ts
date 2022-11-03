import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoes: Todo[] = [];  // Local myTodo array
  todo?: Todo;



  constructor(private todoService: TodoService,
    private route: ActivatedRoute) {
    todoService.todo$.subscribe((savedTodos: Todo[]) => {
      this.todoes = savedTodos;    // todoes = todoes which already are saved 
    })
    todoService.singleTodo$.subscribe((savedSingleTodo: Todo) => {
      this.todo = savedSingleTodo;
    }) 
   }

   ngOnInit(): void {}

 /* ngOnInit(): void {
    this.getTodoes();
  } */                  

/*  getTodoes() {
    this.todoService.getTodoes();
  } */  

  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id);
  }
  

  add(task: string, id: number): void{
    task = task.trim();
    this.todoService.addTodo({ id, task } as Todo)
  }

  delete(id: number): void{
    this.todoService.deleteTodo(id);
  }

  completeItem(index: number): void{
    this.todoService.completeItem(index);
  }

  moveUp(index: number): void {
    this.todoService.moveUp(index);
  }

  moveDown(index: number): void {
    this.todoService.moveDown(index);
  }

  
  
}
