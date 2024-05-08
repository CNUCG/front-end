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
`

export default function () {
    return (
        <HomeContainer>
            <Tile icon="qr_code_2" title="Validar Carteira Nacional" button="Quero verificar a autenticidade de uma carteina nacional de usuário de cão guia" />
            <Tile icon="sound_detection_dog_barking" title="Novo cadastro" button="Sou usuário de cão guia e quero me cadastrar para obter a carteina nacional de usuário de cão guia" />
            <Tile icon="assignment_ind" title="Acesso" button="Acesse o sistema para as demais funcionalidades!" />
        </HomeContainer>
    )
}
