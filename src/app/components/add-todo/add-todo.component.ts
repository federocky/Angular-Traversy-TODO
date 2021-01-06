import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//esto me lo he marcado yo porque no me funciona el eventoemitter
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  //aqui poemos any porque no tiene id, el id se lo da automaticamente 
  //json.
  @Output() agregaTodo: EventEmitter<any> = new EventEmitter();

  title:string;

  constructor(private todosComponent: TodosComponent) { }

  ngOnInit(): void {
  }

  addTodo(){
    const TODO = {
      title: this.title,
      completed: false
    }

    this.agregaTodo.emit(TODO);
    
    //esto me lo marco yo pewro no funciona bien.
    //ya que no genera el id por no subirlo a la nube.
    this.todosComponent.agregarTodo(TODO);
  }

}
