describe('ui: Todos component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header'));

  it('should render the component', () => {
    cy.get('a').should('contain', 'Все активы');
  });
});
