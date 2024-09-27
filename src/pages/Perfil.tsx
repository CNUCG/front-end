import React from 'react';

const UserProfile = () => {
  return (
    <div style={styles.container}>
      {/* Left Column - User Profile */}
      <div style={styles.profileBox}>
        <h2 style={styles.title}>Perfil do Usuário</h2>
        <div style={styles.profileContent}>
          <div style={styles.iconPlaceholder}></div>
          <h3>Nome do Usuário</h3>
          <p>Email: Email cadastrado <button style={styles.button}>alterar</button></p>
          <p>Instituição: Instituição cadastrada <button style={styles.button}>alterar</button></p>
          <p>Telefone: Telefone cadastrado <button style={styles.button}>alterar</button></p>
          <p>Endereço: Endereço cadastrado <button style={styles.button}>alterar</button></p>
          <div style={styles.addressBox}>
            <p>CEP:</p>
            <p>Estado:</p>
            <p>Cidade:</p>
            <p>Logradouro:</p>
            <p>Número:</p>
            <p>Complemento:</p>
            <p>Bairro:</p>
          </div>
          <button style={styles.confirmButton}>Confirmar</button>
        </div>
      </div>

      {/* Right Column - Dog Profile */}
      <div style={styles.profileBox}>
        <h2 style={styles.title}>Perfil do Cão</h2>
        <div style={styles.profileContent}>
          <div style={styles.dogIconPlaceholder}></div>
          <h3>Nome do Cão</h3>
          <p>Raça: Raça cadastrada</p>
          <p>Cor: Cor cadastrada</p>
          <p>Sexo: Sexo cadastrado</p>
          <p>Número de registro: Número cadastrado</p>
          <p>Status: status Cadastrado</p>
        </div>
      </div>

      {/* Digital Wallet Button */}
      <button style={styles.digitalWalletButton}>Minha carteira Digital</button>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    backgroundColor: '#d2f0a7',
    height: '100vh',
    boxSizing: 'border-box',
  },
  profileBox: {
    backgroundColor: '#f5f5f5',
    
    padding: '20px',
    borderRadius: '10px',
    width: '45%',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  profileContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    marginBottom: '10px',
  },
  iconPlaceholder: {
    width: '60px',
    height: '60px',
    backgroundColor: '#ccc',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  dogIconPlaceholder: {
    width: '60px',
    height: '60px',
    backgroundColor: '#ccc',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  addressBox: {
    margin: '10px 0',
  },
  button: {
    marginLeft: '5px',
    padding: '2px 5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  confirmButton: {
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  digitalWalletButton: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    padding: '10px 20px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UserProfile;
