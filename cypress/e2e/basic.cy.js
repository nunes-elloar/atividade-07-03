/// <reference types="cypress"/>

describe("Pegando elementos básicos", () => {
    it("Visitar uma página e obter o seu título", () => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.title().should("be.equal", "Campo de Treinamento")
    })
    it("Clica no botão", () =>{

        cy.visit("https://wcaquino.me/cypress/componentes.html")

        cy.get('#buttonSimple').click().should("value", "Obrigado!")
    })
})
describe.only("Escrevendo nos campos do formulário", () => {
    it("Cadastra nome e sobrenome em um formulário", () =>{

        cy.visit("https://wcaquino.me/cypress/componentes.html")

        cy.get('#formNome').type("Elloar")
        cy.get('[data-cy="dataSobrenome"]').type("Teixeira")

        cy.get('#formCadastrar').click()

        cy.get('#formSexoFem').check()

        cy.get('#formComidaPizza').check()

        cy.get('[data-test="dataEscolaridade"]').

    
    })
})