import { browser, by, element } from 'protractor';

export class TodoListPage {

    get() {
        browser.get('');
    };

    gettodoList() {
        return element.all(by.css('mat-list > mat-list-item'));
    } 

    clickTodoItemTodoLink(rowIndex1) {
        return this.gettodoList().get(rowIndex1).element(by.css('h4 > a')).click();
    };

    clickA0 (rowIndex1) {
        return this.gettodoList().get(rowIndex1).element(by.css('li.todo-list-item > a')).click();
    };
};