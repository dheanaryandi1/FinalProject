import LoginPage from '../../support/pageObjects/LoginPage';


describe('Fitur Login - OrangeHRM', () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.intercept('POST', '**/auth/validate').as('loginRequest');
  });

  it('Berhasil login dengan kredensial valid', () => {
    LoginPage.enterUsername('Admin');
    LoginPage.enterPassword('admin123');
    LoginPage.clickLogin();

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302);
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });

  it('Gagal login dengan password salah', () => {
    LoginPage.enterUsername('Admin');
    LoginPage.enterPassword('wrongpass');
    LoginPage.clickLogin();

    LoginPage.getErrorMessage().should('be.visible');
  });
});
