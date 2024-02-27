import React, { useState } from 'react';
import './styles.css';


function CalculadoraIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);

  const calcularIMC = () => {
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);

    if (isNaN(pesoFloat) || isNaN(alturaFloat) || alturaFloat === 0) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }

    const imcCalculado = pesoFloat / (alturaFloat * alturaFloat);
    setIMC(imcCalculado.toFixed(2));
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <div>
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={e => setPeso(e.target.value)} />
      </div>
      <div>
        <label>Altura (m):</label>
        <input type="number" value={altura} onChange={e => setAltura(e.target.value)} />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && <p>Seu IMC é: {imc}</p>}
    </div>
  );
}

export default CalculadoraIMC;








