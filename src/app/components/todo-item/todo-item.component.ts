import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  //aqui emitimos el deleteTodo
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }


  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  cambiaClase(){
   /*  if (this.todo.completed== true) this.todo.completed = false;
    else this.todo.completed = true; */
    this.todo.completed = !this.todo.completed;
  }


  //aqui con el emit basicamente estamos mandando el metodo
  onDelete(todo){
    this.deleteTodo.emit(todo);
  }

}
