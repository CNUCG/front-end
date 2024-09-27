import Tile from "../components/Tile"
import styled from "styled-components"
import { useEffect, useState } from "react"

const HomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 1em; 
    padding: 2em;
    align-items: center;
    flex-grow: 1;
    a {
        color: inherit;
        text-decoration: none
    }
`

const tiles = {
    login:
        <Tile to="/login"
            icon="assignment_ind"
            title="Acesso"
            button="Acesse o sistema para as demais funcionalidades!" />,

    validar:
        <Tile to="/validar"
            icon="inventory"
            title="Processo de validação "
            button="Acesse para validar o cadastro do usuário e seu cão " />,

    autenticar:
        <Tile to="/autenticar"
            icon="qr_code_2"
            title="Verificar Autenticidade"
            button="Quero verificar a autenticidade de uma carteina nacional de usuário de cão guia" />,

    cadastro_usuario:
        <Tile to="/cadastro/usuário"
            icon="person_add"
            title="Novo cadastro"
            button="Sou usuário de cão guia e quero me cadastrar para obter a carteina nacional de usuário de cão guia" />,

    cadastro_cao:
        <Tile to="/cadastro/cão"
            icon="sound_detection_dog_barking"
            title="Cadastro cão"
            button="Sou usuário de cão guia e quero cadastrar minha dupla" />,

    cadastro_instituicao:
        <Tile to="/cadastro/instituição"
            icon="book_5"
            title="Cadastro de Instituição"
            button="Cadastre uma instituição, que seja formadora de cães-guia" />,
}

export default function () {
    const [hash, setHash] = useState<string>("")

    useEffect(() => {
        setHash(window.location.hash)
        onhashchange = _ => setHash(window.location.hash)
    }, [])

    return (
        <HomeContainer>
            {hash === "" && <>
                {tiles.autenticar}
                {tiles.cadastro_usuario}
                {tiles.login}
            </>}

            {hash === "#usuario" && <>
                {tiles.autenticar}
                {tiles.cadastro_cao}
            </>}

            {hash === "#instituicao" && <>
                {tiles.cadastro_usuario}
                {tiles.cadastro_cao}
                {tiles.validar}
            </>}

            {hash === "#instituicao-ifc" && <>
                {tiles.cadastro_instituicao}
                {tiles.cadastro_usuario}
                {tiles.cadastro_cao}
                {tiles.validar}
            </>}
        </HomeContainer>
    )
}