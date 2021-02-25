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

  it('contains search bar', () => {
    cy.get('[data-cy="search-bar"]').should('exist')
  })

  it('contains a submit button', () => {
    cy.get('[data-cy="submit"]').should('exist')
  })

  it('displays the total count of hits upon submit', () => {
    cy.get('[data-cy="search-bar"]').type('barack')
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="total-count"]').should('contain', '163')
  })

  it('displays a list of info upon submit', () => {
    cy.get('[data-cy="search-bar"]').type('barack')
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="info-list"]').within(() => {
      cy.get('[data-cy="user-0"]').within(() => {
        cy.get('[data-cy="login"]').should('contain', 'barack')
        cy.get('[data-cy="user-id"]').should('contain', '681626')
        cy.get('[data-cy="repos"]').should('have.attr', 'href', 'https://api.github.com/users/barack/repos')
      })
    })
  })

});