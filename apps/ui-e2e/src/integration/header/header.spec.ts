describe('ui: Todos component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=common-header--logged-in'));

  it('should render the component', () => {
    cy.get('a').should('contain', 'Все активы');
  });
});
