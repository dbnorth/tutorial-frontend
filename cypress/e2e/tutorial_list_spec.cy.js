describe('tutorial list', () => {
  it('can load the page', () => {
    cy.visit('/');
    cy.contains('Tutorial List');
  });
});
