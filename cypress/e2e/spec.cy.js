describe('Cadastro de participante', () => {
  it('Deve impedir o cadastro com os campos vazios', () => {
    // Abre nossa página.
    cy.visit('https://matteocandidosenna.github.io/WorkShop-TMS---Cypress/');

    // Clica em Cadastrar sem preencher os campos.
    cy.get('[data-cy="cadastrar"]').click();

    // Confere se apareceu a mensagem esperada.
    cy.get('[data-cy="resultado"]')
      .should('be.visible')
      .and('contain.text', 'Preencha todos os campos.');
  });
});

describe('Validação do e-mail', () => {
  it('Deve rejeitar um e-mail inválido', () => {
    cy.visit('https://matteocandidosenna.github.io/WorkShop-TMS---Cypress/');

    cy.get('[data-cy="nome"]').type('Ana');
    cy.get('[data-cy="email"]').type('ana');
    cy.get('[data-cy="senha"]').type('teste123');
    cy.get('[data-cy="confirmacao"]').type('teste123');

    cy.get('[data-cy="cadastrar"]').click();

    // Esperamos que o formulário apresente um erro.
    cy.get('[data-cy="resultado"]')
      .should('be.visible')
      .and('have.class', 'erro');
  });
});

describe('Confirmação da senha', () => {
  it('Deve rejeitar senhas diferentes', () => {
    cy.visit('https://matteocandidosenna.github.io/WorkShop-TMS---Cypress/');

    cy.get('[data-cy="nome"]').type('Ana');
    cy.get('[data-cy="email"]').type('ana@exemplo.com');

    // Preenche senha e confirmação com valores diferentes.
    cy.get('[data-cy="senha"]').type('teste123');
    cy.get('[data-cy="confirmacao"]').type('outra456');

    cy.get('[data-cy="cadastrar"]').click();

    // O formulário deveria impedir o cadastro.
    cy.get('[data-cy="resultado"]')
      .should('be.visible')
      .and('have.class', 'erro');
  });
});