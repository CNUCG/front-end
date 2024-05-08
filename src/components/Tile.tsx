import styled from "styled-components"

const Menu_item = styled.div`
    --menu-item-size: 250px;
    
    width: var(--menu-item-size);
    height: var(--menu-item-size);

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
    justify-content: center;
    align-items: center;                        
    height: 100%;
    font-size: 7em;
`
    
const Actions = styled.div`
    height: 100px;
`

const Button = styled.button`
    height: 100%;
    background-color: #d4d4d4;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    outline: none;
    padding: .3em;
    font-size: .7em;
`

interface Props {
    title: String
    button: String
    icon: String
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
                <Button data-permission="any only-unlogged" className="show">
                    {props.button}
                </Button>
            </Actions>
        </Menu_item>
    </>
}