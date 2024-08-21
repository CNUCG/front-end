import React, { useState } from 'react';

const Formulario = () => {
  // Definindo o estado inicial para cada variável
  const [cpf, setCpf] = useState('variável');
  const [rg, setRg] = useState('variável');
  const [nomeCompleto, setNomeCompleto] = useState('variável');
  const [sexo, setSexo] = useState('variável');
  const [instituicao, setInstituicao] = useState('variável');
  const [dataNascimento, setDataNascimento] = useState('variável');
  const [cao, setCao] = useState('variável');

  // Estilo do formulário
  const formStyle = {
    backgroundColor: '#D3D3D3',
    padding: '20px',
    borderRadius: '10px',
    width: '800px',
    height: '400px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '10px',
    position: 'center',
    alignItems: 'start',
  };



  const labelStyle = {
    display: 'flex',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const iconStyle = {
    width: '80px',
    height: '80px',
    backgroundColor: '#B0B0B0',
    borderRadius: '10px',
    gridColumn: '1 / 2',
    gridRow: '1 / 3',
  };

  const fullNameStyle = {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
  };

  const cpfStyle = {
    gridColumn: '1 / 2',
    gridRow: '2 / 3',
  };

  const sexoStyle = {
    gridColumn: '2 / 3',
    gridRow: '2 / 3',
  };

  const rgStyle = {
    gridColumn: '1 / 2',
    gridRow: '3 / 4',
  };

  const instituicaoStyle = {
    gridColumn: '2 / 3',
    gridRow: '3 / 4',
  };

  const dataNascimentoStyle = {
    gridColumn: '1 / 2',
    gridRow: '4 / 5',
  };

  const caoStyle = {
    gridColumn: '2 / 3',
    gridRow: '4 / 5',
  };

  return (
    
      <div style={formStyle}>
        <div style={iconStyle}></div>
        <div style={fullNameStyle}>
          <label style={labelStyle}>Nome completo:</label>
          <input type="text" value={`${nomeCompleto}`} readOnly style={inputStyle} />
        </div>
        <div style={cpfStyle}>
          <label style={labelStyle}>CPF:</label>
          <input type="text" value={`${cpf}`} readOnly style={inputStyle} />
        </div>
        <div style={sexoStyle}>
          <label style={labelStyle}>Sexo:</label>
          <input type="text" value={`${sexo}`} readOnly style={inputStyle} />
        </div>
        <div style={rgStyle}>
          <label style={labelStyle}>RG:</label>
          <input type="text" value={`${rg}`} readOnly style={inputStyle} />
        </div>
        <div style={instituicaoStyle}>
          <label style={labelStyle}>Instituição:</label>
          <input type="text" value={`${instituicao}`} readOnly style={inputStyle} />
        </div>
        <div style={dataNascimentoStyle}>
          <label style={labelStyle}>Data de nascimento:</label>
          <input type="text" value={`${dataNascimento}`} readOnly style={inputStyle} />
        </div>
        <div style={caoStyle}>
          <label style={labelStyle}>Cão:</label>
          <input type="text" value={`${cao}`} readOnly style={inputStyle} />
        </div>
      </div>

  );
}

export default Formulario;
