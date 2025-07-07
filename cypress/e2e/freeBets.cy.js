describe('Punters page', () => {
  before('Visit Punters page', () => {
    cy.visit(Cypress.config("baseUrl"));
  });
  beforeEach('Get offer element', () => {
     cy.get('.promo-codes-card').eq(0).as('offerCard');
  })

  it('Should display 9 offers', () => {
    cy.get('#best-free-bet-offers-right-now').next('.promo-codes-instance').find('.promo-codes-card:not(.d-none)').as('allVisibleOffers');
    cy.get('@allVisibleOffers').should('have.length', 9);
  })
  it('Offer should show image, call to action and bonus text', () => {
    cy.get('@offerCard').find('img').invoke('attr', 'src').should('contain', 'https://www.thepunterspage.com/app/uploads/2023/06/bet365-logo-126E51.svg')
    cy.get('@offerCard').find('.promo-title').invoke('text').should('contain', 'Sports: Bet £10 & Get £30 in Free Bets');
    cy.get('@offerCard').find('a.btn').should('contain', 'CLAIM BONUS');
  })
  it('Call to action click should redirect the user to the proper page', () => {
    cy.get('@offerCard').find('a.btn').invoke('attr', 'target').should('contain', '_blank');
    cy.get('@offerCard').find('a.btn').invoke('attr', 'href').should('contain', 'https://www.thepunterspage.com/goto/bet365/?referrer=https://www.thepunterspage.com/free-bets/&ga_id=GA2130579123.1751888565');
  })
  it('See more button should show another 9 offers', () => {
    cy.get('.promo-codes-see-more').eq(0).click();
    cy.get('#best-free-bet-offers-right-now').next('.promo-codes-instance').find('.promo-codes-card:not(.d-none)').as('allVisibleOffers');
    cy.get('@allVisibleOffers').should('have.length', 18);
  })
})