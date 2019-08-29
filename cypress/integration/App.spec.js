/* eslint-disable no-undef */
describe('App >', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should .. ', () => {
    cy.get('#app')
      .children()
      .should('have.length', 3);
  });
});
