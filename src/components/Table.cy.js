import Table from './Table.vue'

describe('<Table />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Table, {
      propsData: {
        headers: ['Language', 'Rating', 'Date']
      }
    })
    cy.get('h2').should('have.text', 'LanguageRatingDate')
    cy.get('h2').should('have.text', 'LanguageRatingDate')
  })
})