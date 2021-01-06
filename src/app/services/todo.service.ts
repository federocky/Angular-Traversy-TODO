import { Injectable } from '@angular/core';

//importamos esto para las peticiones
import {HttpClient, HttpHeaders } from '@angular/common/http';

//importamos Todo porque usamos esa clase
import { Todo } from "../models/Todo";

//importamos observable que es lo que voy a devolver
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  /**
   * este metodo devuelve un observable que sera un array de Todos
   * este array l cogeremos desde la url
   */
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

}
