/*import styled from "styled-components"*/ 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function () {

    return <>
        <Form>
            <h1 className='Titulo'>Login de cão guia</h1>
            <h4 className='Sub_titulo'>Coloque suas informações</h4>

            <Form.Group className="mb-3" >
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" placeholder="Digite o seu CPF" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite a sua senha" />
            </Form.Group>

            
            <Button variant="primary" type="submit">
                Entrar
            </Button>

            <Button variant="danger" type="submit">
                Sair
            </Button>

            <a href="">Recuperar senha</a>
        </Form>
            </>
             
    }
        