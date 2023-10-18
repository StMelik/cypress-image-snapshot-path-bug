describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('.box').eq(0).matchImageSnapshot('one');

    cy.matchImageSnapshot('test');
  });
});
