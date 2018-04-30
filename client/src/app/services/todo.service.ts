import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo/todo-detail/todo-detail.component';

@Injectable()
export class TodoService {
  constructor(private _http: HttpClient) {}

  find(): Observable<any> {
    // const options = { responseType: 'json'};
    //
    return this._http.get<any>('http://localhost:3000/api/v1/todos');
  }

  findOne(todoId): Observable<any> {
    const options: Object = { responseType: 'json' };
    //
    return this._http.get<any>(`http://localhost:3000/api/v1/todos/${todoId}`);
  }

  addTodo(todo: Todo) {
    const options: Object = { responseType: 'json' };
    //
    console.log('Add new todo:', todo);
    // return this._http.post<any>(`http://localhost:3000/api/v1/todos/${todoId}`, options);
  }

  updateTodo(todo: Todo) {
    const options: Object = { responseType: 'json' };
    //
    console.log('Update todo:', todo);
    // return this._http.put<any>(`http://localhost:3000/api/v1/todos/${todoId}`, options);
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
