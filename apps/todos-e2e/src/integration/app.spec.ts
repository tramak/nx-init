import { getAddTodoButton, getTodos } from '../support/app.po';

describe('TodoApps', () => {
  beforeEach(() => cy.visit('/'));

  it('button exists Add Todo', () => {
    cy.get('button#add-todo').should((t) => expect(t.length).equal(1));
  })
  // it('should display todos', () => {
  //   getTodos().should((t) => expect(t.length).equal(2));
  //   getAddTodoButton().click();
  //   getTodos().should((t) => expect(t.length).equal(3));
  // });
});
