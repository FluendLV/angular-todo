import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent},
  { path: 'todo-editor/:id', component: EditTodoComponent},
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
