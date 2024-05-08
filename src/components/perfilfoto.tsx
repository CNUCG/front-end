import styled from "styled-components"

const Menu_item = styled.div`
    width:  530px;
    height: 716px;

    background-color: #FFFFFF;
    border-radius: 6px;
    padding: 1em;
    box-shadow: 0 3px 6px #00000029;
    user-select: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.div`
    font-family: "Open Sans", sans-serif;
`

const Icon = styled.span`
    display: flex;
    justify-content: left;
    align-items: above;                        
    height: 100%;
    font-size: 7em;
`
    
const Actions = styled.div`
    height: 100px;
`

const Nome = styled.div`
display: flex;
justify-content: right;
align-items: above;                        
height: 100%;
font-size: 1em;
`

interface Props {
    title: String
    nome: String
    icon: String
    Email: String
    Telefone: String
    

}

export default function (props: Props) {
    return <>
        <Menu_item>
            <Title>
                {props.title}
            </Title>
            <Icon className="icon material-symbols-outlined">
                {props.icon}
            </Icon>
            <Actions>
                <Nome data-permission="any only-unlogged" className="show">
                    {props.nome}
                </Nome>
            </Actions>
        </Menu_item>
    </>
}