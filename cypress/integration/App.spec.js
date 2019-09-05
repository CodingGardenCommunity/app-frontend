describe('App component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should have 3 children', () => {
    cy.get('#app')
      .children()
      .should('have.length', 3);
  });
});
