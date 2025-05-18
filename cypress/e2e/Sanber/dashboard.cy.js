import DashboardPage from '../../support/pageObjects/DashboardPage';
import LoginPage from '../../support/pageObjects/LoginPage';

describe('Menu Directory - Dashboard OrangeHRM', () => {
  before(() => {
    LoginPage.visit();
    LoginPage.enterUsername('Admin');
    LoginPage.enterPassword('admin123');
    LoginPage.clickLogin();
    cy.url().should('include', '/dashboard');
  });

  it('Berhasil akses menu Directory', () => {
    DashboardPage.clickMenuDirectory();
    cy.url().should('include', '/directory');
    cy.get('h6').should('contain', 'Directory');
  });
});
