import styled from "styled-components"

const Header = styled.header`
    background-color: #d6d6d6;
    justify-content: space-between;
    align-items: center;
    padding: .5em;
    display: flex;
    width: 100%;
    user-select: none;
`
const Logo = styled.div``
const Img = styled.img`
    width: 2em;
`
const Search = styled.div`
`
const Input = styled.input`
    border-radius: 50px;
    border: none;
    padding-left: 10px;
` 
const Permission_name = styled.div``

export default function () {
    return <>
        <Header>
            <Logo>
                <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Instituto_Federal_Marca_2015.svg/640px-Instituto_Federal_Marca_2015.svg.png"></Img>
            </Logo>

            <Search>
                <Input placeholder="Pesquisa" />
            </Search>
            <Permission_name>Meu perfil</Permission_name>
        </Header>
    </>
}