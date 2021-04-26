describe('Who Would Win', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('App Load', () => {

    it('Should display app title and button', () => {
      cy.get('[data-cy=home-view]').should('exist');
      cy.get('[data-cy=App-title]').contains('Who Would Win?');
      cy.get('[data-cy=fight-button]').contains(`Let's Fight!`);
    });

    it('Should provide a way to navigate to the Match Up view', () => {
      cy.get('[data-cy=fight-button]').click();
      cy.get('[data-cy=matchup-container]').should('exist');
      cy.get('[data-cy=home-view]').should('not.exist');
    });

  });

  

});
