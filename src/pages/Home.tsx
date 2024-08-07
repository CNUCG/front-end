import { Link } from "react-router-dom"
import Tile from "../components/Tile"
import styled from "styled-components"

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    height: 100%;

    place-self: center;
    flex-grow: 1;

    a {
        color: inherit;
        text-decoration: none
    }
`

export default function () {
    return (
        <HomeContainer>
            <Link to="/autenticar">
                <Tile icon="qr_code_2" title="Verificar Autenticidade" button="Quero verificar a autenticidade de uma carteina nacional de usuário de cão guia" />
            </Link>
            <Link to="/cadastro">
                <Tile icon="sound_detection_dog_barking" title="Novo cadastro" button="Sou usuário de cão guia e quero me cadastrar para obter a carteina nacional de usuário de cão guia" />
            </Link>
            <Link to="/login">
                <Tile icon="assignment_ind" title="Acesso" button="Acesse o sistema para as demais funcionalidades!" />
            </Link> 
            <Link to="/validar">
                <Tile icon="inventory" title="Processo de validação " button="Acesse para validar o cadastro do usuário e seu cão " />
            </Link> 
        </HomeContainer>
    )
}
