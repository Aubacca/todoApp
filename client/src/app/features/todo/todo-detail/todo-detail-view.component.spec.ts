import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailViewComponent } from './todo-detail-view.component';

describe('TodoDetailViewComponent', () => {
  let component: TodoDetailViewComponent;
  let fixture: ComponentFixture<TodoDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
