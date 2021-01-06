import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  quitarTodo(todo:Todo){
    //cpn filter basicamente devuelvo los todos que no tengan id como el enviado
    this.todos = this.todos.filter(t => t.id !== todo.id);

    //en el video el hace los cambios en el servidor yo lo voy a dejar asi 
    //para no complicar mas el codigo
  }

  //no esta entrando aqui y no consigo ver por que.
  agregarTodo(todo: any){
    this.todos.push(todo);
  }

}
