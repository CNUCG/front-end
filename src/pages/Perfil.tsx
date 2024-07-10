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
            <Perfilfoto icon="qr_code_2" title="Perfil do Usuário" nome="Nome" Instituicao= "Instituicao" Telefone= "Telefone" Endereco= "Endereco" CEP= "CEP" Estado= "Estado"
             Cidade= "Cidade" Logradouro= "Logradouro" Numero= "Numero" Complemento= "Complemento"  Bairro= "Bairro"/>

            <Perfilfoto icon="sound_detection_dog_barking" title="Perfil do Cão" nomecao="Nome do cao" Raca="Raça" Cor= "Cor" Sexo="Sexo" 
            Numeroreg="Numero de Registro" Status="Status"  />        
            </HomeContainer>
    )
}