import styled from "styled-components"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Cadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    max-width: 500px;
    margin: 2em auto;
`
const Titulo_cad = styled.div `
    font-family: "Acme", sans-serif;
    font-size: 5vh;
    text-align: center;
    width: 100%;
`
const Sub_titulo = styled.div`
    font-family: "Open Sans", sans-serif;
    text-align: center;
    margin-bottom: 1.5em;
    width: 170%;
`
const ContainerBts = styled.div`
    display: flex;
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