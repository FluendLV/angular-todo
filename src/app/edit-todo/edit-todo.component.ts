import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  todo?: Todo;


  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private location: Location) { 
      /*this.todoService.todo$.subscribe(
      (savedTodo: Todo) => this.todo = savedTodo)*/
  }

  ngOnInit(): void {
    this.getTodo()
  }

  getBack(): void {
    this.location.back();
  }

  getTodo(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id).subscribe(todo => this.todo = todo);
  }

}
