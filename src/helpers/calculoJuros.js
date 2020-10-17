function calcularJurosCompostos (capital,taxa,periodo){
    const montante = capital * (1+taxa)**periodo
    const juros = montante - capital
    return {montante,juros}
}

export default calcularJurosCompostos