describe('ui: Todos component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todos--primary&args=todos;'));
    
    it('should render the component', () => {
      cy.get('li').should('contain', 'test!!');
    });
});
