import { AppPage } from './app.po';

describe('todo-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display "Todo List" message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todo List');
  });
});
