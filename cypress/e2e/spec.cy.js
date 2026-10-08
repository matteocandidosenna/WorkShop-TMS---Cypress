// describe: agrupa testes. it: define um cenário.
describe('Cadastro de participante', () => {
  it('Deve impedir o cadastro com os campos vazios', () => {
    // Abre o formulário.
    cy.visit('https://matteocandidosenna.github.io/WorkShop-TMS---Cypress/');

    // Envia sem preencher.
    cy.get('[data-cy="cadastrar"]').click();

    // Exige aviso visível e texto correto.
    cy.get('[data-cy="resultado"]')
      .should('be.visible')
      .and('contain.text', 'Preencha todos os campos.');
  });
});

describe('Validação do e-mail', () => {
  it('Deve rejeitar um e-mail inválido', () => {
    // Inicia com a página limpa.
    cy.visit('https://matteocandidosenna.github.io/WorkShop-TMS---Cypress/');

    // Apenas o e-mail é inválido.
    cy.get('[data-cy="nome"]').type('Ana');
    cy.get('[data-cy="email"]').type('ana');
    cy.get('[data-cy="senha"]').type('teste123');
    cy.get('[data-cy="confirmacao"]').type('teste123');

    // Envia o cadastro.
    cy.get('[data-cy="cadastrar"]').click();

    // Exige retorno de erro.
    cy.get('[data-cy="resultado"]')
      .should('be.visible')
      .and('have.class', 'erro');
  });
});

describe('Confirmação da senha', () => {
  it('Deve rejeitar senhas diferentes', () => {
    // Abre o formulário.
    cy.visit('https://matteocandidosenna.github.io/WorkShop-TMS---Cypress/');

    // Mantém nome e e-mail válidos.
    cy.get('[data-cy="nome"]').type('Ana');
    cy.get('[data-cy="email"]').type('ana@exemplo.com');

    // Provoca divergência entre as senhas.
    cy.get('[data-cy="senha"]').type('teste123');
    cy.get('[data-cy="confirmacao"]').type('outra456');

    // Envia o cadastro.
    cy.get('[data-cy="cadastrar"]').click();

    // Exige retorno de erro.
    cy.get('[data-cy="resultado"]')
      .should('be.visible')
      .and('have.class', 'erro');
  });
});

describe('Cadastro válido', () => {
  it('Deve aceitar dados corretos', () => {
    // Abre o formulário.
    cy.visit('https://matteocandidosenna.github.io/WorkShop-TMS---Cypress/');

    // Preenche todos os campos corretamente.
    cy.get('[data-cy="nome"]').type('Ana');
    cy.get('[data-cy="email"]').type('ana@exemplo.com');
    cy.get('[data-cy="senha"]').type('teste123');
    cy.get('[data-cy="confirmacao"]').type('teste123');

    // Envia o cadastro.
    cy.get('[data-cy="cadastrar"]').click();

    // Exige sucesso visível e mensagem correta.
    cy.get('[data-cy="resultado"]')
      .should('be.visible')
      .and('have.class', 'sucesso')
      .and('contain.text', 'Cadastro realizado com sucesso!');
  });
});