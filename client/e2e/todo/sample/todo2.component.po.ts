import { browser, by, element } from 'protractor';

export class Todo2 {
  navigateTo() {
    return browser.get('/');
  }

  a0 = element(by.css('a.a'));
  todos = element.all(by.css('div.todo'));

  a0ShouldBeVisible() {
    expect(this.a0.isDisplayed()).toBeTruthy();
  }

  a0ShouldNotBeVisible() {
    expect(this.a0.isDisplayed()).toBeFalsy();
  }

  todosCountShouldBe(count) {
    expect(this.todos.count()).toBe(count);
  }

  todosShouldHaveText(rowIndex1, value) {
    expect(this.todos.get(rowIndex1).getText()).toBe(value);
  }

  todosShouldHaveClass(rowIndex1, className) {
    this.todos
      .get(rowIndex1)
      .getAttribute('class')
      .then(function(classes) {
        expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
      });
  }

  todosShouldNotHaveClass(rowIndex1, className) {
    this.todos
      .get(rowIndex1)
      .getAttribute('class')
      .then(function(classes) {
        expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
      });
  }
}
