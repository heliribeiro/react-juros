import React, { useState } from "react";
import Rendimento from "./components/Rendimento";
import calcularJurosCompostos from "./helpers/calculoJuros";

export default function App() {
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [periodo, setPeriodo] = useState([1]);

  function handleInputCapital (event){
    const capitalAtual = Number(event.target.value);
    setCapitalInicial(capitalAtual)
   }

   function handleInputTaxa (event){
    const taxaAtual = Number(event.target.value) / 100;
    setTaxa(taxaAtual)
   }

  function handleInputPeriodo(event) {
    const periodoAtual = Number(event.target.value);
    const arrayPeriodo = [];
    for (let i = 1; i <= periodoAtual; i++) {
      arrayPeriodo.push(i);
    }
    setPeriodo(arrayPeriodo);
  }

  return (
    <div className="container">
      <div className="row">
        <h1>React - Juros Compostos</h1>
        <label className="col s4">
          <p>Montante inicial</p>
          <input type="number" min="0" max="100000" step='100' onChange={handleInputCapital}/>
        </label>
        <label className="col s4">
          <p>Taxa de Juros Mensal</p>
          <input type="number" min="-12" max="12" step='0.1' onChange={handleInputTaxa} />
        </label>
        <label className="col s4">
          <p>Período (meses):</p>
          <input type="number" min="1" max="36" onChange={handleInputPeriodo} />
        </label>
        <Rendimento>
          {periodo.map((_,index) => {
           const {montante,juros} =  calcularJurosCompostos(capitalInicial,taxa,index+1)
           const porcentagem = juros/capitalInicial*100
            return (
              <div className="col s2">
                <p>{index+1}</p>
                <ul>
                  <li>R$ {montante.toFixed(2)}</li>
                  <li> +R$ {juros.toFixed(2)}</li>
                  <li>{porcentagem ? porcentagem.toFixed(2) : 0}%</li>
                </ul>
              </div>
            );
          })}
        </Rendimento>
      </div>
    </div>
  );
}
