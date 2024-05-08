import styled from "styled-components"
import Button from 'react-bootstrap/Button';


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
                <Button variant="secondary">Pessoa Física</Button>{' '}
                <Button variant="secondary">Pessoa jurídica</Button>{' '}
            </ContainerBts>
        </Cadastro>
    </>
}
