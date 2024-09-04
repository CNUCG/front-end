import styled from "styled-components"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Cadastro = styled.div`
    user-select: none;
    display: grid;
    justify-items: center;
    align-items: center;

    
`
const Titulo_cad = styled.div `
    font-family: "Acme", sans-serif;
    font-size: 5vh;
`
const Sub_titulo = styled.div`
    font-family: "Open Sans", sans-serif;
    font-size: 2vh;
    width: 52%;
`
const ContainerBts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px; 
    height: 20px;
`

export default function () {
    return <>
        <Cadastro>
            <Titulo_cad>
                <div>Cadastro de usuário do cão guia</div>
            </Titulo_cad>
            <Sub_titulo>
                <div>O projeto de cão-guia oferece um treinamento especializado para preparar cães que irão auxiliar pessoas com deficiência visual, garantindo-lhes independência e mobilidade na sua rotina.</div>
            </Sub_titulo>
            <ContainerBts>
            <Link to="/cadastro/usuário" >
            <Button variant="secondary" > Usuário </Button>
            </Link>
            <Link to="/cadastro/instituição" >
            <Button variant="secondary" > Instituição </Button>
            </Link>
            <Link to="/cadastro/cão" >
            <Button variant="secondary" type="submit"> Cão </Button>
            </Link>
            </ContainerBts>
        </Cadastro>
    </>
}


// // Container principal
// const Cadastro = styled.div`
//     
// `;

// // Título principal
// const Titulo_cad = styled.h1`
//     font-family: "Acme", sans-serif;
//     font-size: 2.5rem; // Font size em rem para melhor escalabilidade
//     color: #333; // Cor de texto escura
//     text-align: center;
//     margin-bottom: 20px; // Espaçamento inferior
// `;

// // Subtítulo
// const Sub_titulo = styled.p`
//     font-family: "Open Sans", sans-serif;
//     font-size: 1.25rem; // Font size em rem
//     color: #666; // Cor de texto mais clara
//     text-align: center;
//     width: 80%;
//     max-width: 800px; // Largura máxima para maior legibilidade
//     margin-bottom: 30px; // Espaçamento inferior
// `;

// // Container de botões
// const ContainerBts = styled.div`
//     display: flex;
//     flex-wrap: wrap; // Permite que os botões se ajustem na linha seguinte
//     gap: 10px; // Espaçamento entre os botões
//     justify-content: center; // Centraliza os botões horizontalmente
//     max-width: 600px; // Largura máxima para a área de botões
// `;

// export default function CadastroPage() {
//     return (
//         <Cadastro>
//             <Titulo_cad>Cadastro de usuário do cão guia</Titulo_cad>
//             <Sub_titulo>
//                 O projeto de cão-guia oferece um treinamento especializado para preparar cães que irão auxiliar pessoas com deficiência visual, garantindo-lhes independência e mobilidade na sua rotina.
//             </Sub_titulo>
//             <ContainerBts>
//                 <Link to="/cadastro/usuário">
//                     <Button variant="secondary">Usuário</Button>
//                 </Link>
//                 <Link to="/cadastro/instituição">
//                     <Button variant="secondary">Instituição</Button>
//                 </Link>
//                 <Link to="/cadastro/cão">
//                     <Button variant="secondary">Cão</Button>
//                 </Link>
//             </ContainerBts>
//         </Cadastro>
//     );
// }
