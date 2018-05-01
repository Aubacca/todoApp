import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '@env/environment';
import { Todo } from '@app/features/models/todo.model';

@Injectable()
export class TodoService {
  readonly HOST_URL = `${environment.apiUrl}/api/v1/todos`;

  constructor(private _http: HttpClient) {}

  find(): Observable<Todo[]> {
    return this._http.get<Todo[]>(this.HOST_URL);
  }

  findOne(todoId): Observable<Todo> {
    return this._http.get<Todo>(`${this.HOST_URL}/${todoId}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    console.log('Add new todo:', todo);
    return this._http.post<Todo>(`${this.HOST_URL}`, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    console.log('Update todo:', todo);
    return this._http.put<Todo>(`${this.HOST_URL}/${todo._id}`, todo);
  }

  delete(todo: Todo): Observable<Todo> {
    return this._http.delete<Todo>(`${this.HOST_URL}/${todo._id}`);
  }
}

/**
 *
  getWeather(cityName: string): Observable<IWeather> {
    console.log("getWeather>cityName=", cityName);
    let options: Object = { responseType: "json" };
    //
    return this._http.get<IWeather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=de&units=metric&appid=${
        this._apiKey
      }`,
      options
    );
  }


  find one:
  localhost:3000/api/v1/todos/91d36f17-211c-4209-b04e-5b83fd273d53

 */
