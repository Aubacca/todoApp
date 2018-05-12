import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TodoService } from '@features/services/todo.service';
import { Todo2Component } from './todo2.component';

describe('Todo2Component', () => {
    let comp: Todo2Component;
    let fixture: ComponentFixture<Todo2Component>;

    beforeEach(() => {
        const todoServiceStub = {
            find: () => ({
                subscribe: () => ({})
            })
        };
        TestBed.configureTestingModule({
            declarations: [ Todo2Component ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: TodoService, useValue: todoServiceStub }
            ]
        });
        fixture = TestBed.createComponent(Todo2Component);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('todos defaults to: []', () => {
        expect(comp.todos).toEqual([]);
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const todoServiceStub: TodoService = fixture.debugElement.injector.get(TodoService);
            spyOn(todoServiceStub, 'find');
            comp.ngOnInit();
            expect(todoServiceStub.find).toHaveBeenCalled();
        });
    });

});
