import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { browser, by, element } from 'protractor';
import { of } from 'rxjs/observable/of';

import { Todo2Component } from '@features/todo/sample/todo2.component';
import { TodoService } from '@features/services';
import { Todo2 } from './todo2.component.po';

const todosServiceStub = {
  get() {
    const todos = [{ id: 1 }];
    return of(todos);
  }
};

xdescribe('Todo2Component', () => {
  let page: Todo2;
  let fixture: ComponentFixture<Todo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Todo2Component],
      providers: [{ provide: TodoService, useValue: todosServiceStub }]
    });
    page = new Todo2();
  });

  it('should navigate to start page.', () => {
    page.navigateTo();
    // fixture.detectChanges();
    // expect(element(by.css('.todo')).length).toEqual(1);

    // expect(element.querySelectorAll('.todo').length).toEqual(1);
  });
});
