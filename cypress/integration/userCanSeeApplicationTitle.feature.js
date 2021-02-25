describe('Application main view', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "https://api.github.com/search/users?q=*",
      response: 'fixture:search_fixture.json'
    })
    cy.visit('/')
  });

  it('contains titel', () => {
    cy.get("section[name='title']")
      .should('contain', 'GitHub Search engine')
  });
});