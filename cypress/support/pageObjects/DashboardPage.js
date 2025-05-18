class DashboardPage {
    clickMenuDirectory() {
      cy.contains('Directory').click();
    }
  
    verifyOnDirectoryPage() {
      cy.url().should('include', '/directory');
      cy.contains('Search Directory').should('be.visible');
    }
  }
  
  export default new DashboardPage();
  