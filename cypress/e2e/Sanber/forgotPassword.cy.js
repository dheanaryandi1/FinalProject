import ForgotPasswordPage from '../../support/pageObjects/ForgotPasswordPage';

describe('Fitur Forgot Password - OrangeHRM', () => {
  it('Berhasil request reset password', () => {
    ForgotPasswordPage.visit();
    ForgotPasswordPage.clickForgotPassword();
    ForgotPasswordPage.enterUsername('Admin');
    ForgotPasswordPage.clickResetPassword();

    cy.contains('Reset Password link sent successfully').should('be.visible');
  });
});
