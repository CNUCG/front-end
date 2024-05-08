import styled from "styled-components"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Titulo = styled.h1 `
    font-family: "Acme", sans-serif;
    font-size: 5vh;
    
`
const Sub_titulo = styled.h4`
    font-family: "Open Sans", sans-serif;
    font-size: 4vh;
    font-weight: bold;
`

 const Form_cont = styled.form`
    background-color: #DC143C;
    border-radius: 45px;
 `
export default function () {
    return <>
        <Form>
            <Titulo>Cadastro de cão guia</Titulo>
            <Sub_titulo className='Sub_titulo'>Dados de identificação </Sub_titulo>

            <Form.Group className="mb-3" >
                <Form.Label>Nome do cão</Form.Label>
                <Form.Control type="text" placeholder="Digite o nome do cão" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Raça</Form.Label>
                <Form.Control type="text" placeholder="Digite a raça do cão" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Sexo</Form.Label>
                <Form.Select >
                    <option>Feminino</option>
                    <option>Masculino</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Número de registro//</Form.Label>
                <Form.Control type="text" placeholder="Digite o número de registro do cão" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Cor</Form.Label>
                <Form.Control type="text" placeholder="Digite a cor do cão" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            
            <Form.Group className="mb-3" >
                <Form.Label>Instituição</Form.Label>
                <Form.Control type="text" placeholder="Digite sua instituição" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
    </>
} 