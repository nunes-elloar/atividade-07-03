const imc = (peso, altura) => {
    const imc = peso / (altura*altura)
    return parseFloat(imc.toFixed(2))
    
}

describe("Testar valores de IMC", () => {
    it("Verifique se IMC está correto", () => {
        expect(imc(70, 1.74)).to.equal(23.12)
    })
})

