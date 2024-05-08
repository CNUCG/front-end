import Perfilfoto from "../components/perfilfoto"
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
            <Perfilfoto icon="qr_code_2" title="Perfil do Usuário" nome="lucas " />
            <Perfilfoto icon="sound_detection_dog_barking" title="Perfil do Cão" nome="Sou usuário de cão guia e quero me cadastrar para obter a carteina nacional de usuário de cão guia" />        
            </HomeContainer>
    )
}