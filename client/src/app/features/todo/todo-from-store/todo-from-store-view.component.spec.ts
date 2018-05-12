import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFromStoreComponent } from './todo-from-store-view.component';

describe('TodoFromStoreComponent', () => {
  let component: TodoFromStoreComponent;
  let fixture: ComponentFixture<TodoFromStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFromStoreComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFromStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
