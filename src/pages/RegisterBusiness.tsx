import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function () {
    return <>
        <Form>
            <h1 className='Titulo'>Cadastro de usuário cães guia</h1>
            <h2 className='Titulo'>Pessoa Jurídica</h2>
            <h3 className='Sub_titulo'>Dados de identificação </h3>

            <Form.Group className="mb-3" >
                <Form.Label>Razão social</Form.Label>
                <Form.Control type="text" placeholder="Digite a razão social" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>CNPJ</Form.Label>
                <Form.Control type="text" placeholder="Digite seu CNPJ" />
            </Form.Group>

            <h3 className='Sub_itulo'>Endereço</h3>
            <Form.Group className="mb-3" >
                <Form.Label>CEP</Form.Label>
                <Form.Control type="text" placeholder="Digite seu CEP" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" placeholder="Digite seu estado" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="Digite seu cidade" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Logradouro</Form.Label>
                <Form.Control type="text" placeholder="Digite seu logradouro" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Número</Form.Label>
                <Form.Control type="text" placeholder="Digite seu número" />
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label>Complemento</Form.Label>
                <Form.Control type="text" placeholder="Digite o complemento" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Bairro</Form.Label>
                <Form.Control type="text" placeholder="Digite seu bairro" />
            </Form.Group>

            <h3 className='Sub_itulo'>Dados para contato</h3>
            <Form.Group className="mb-3" >
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Confirmação de E-mail</Form.Label>
                <Form.Control type="text" placeholder="Digite novamente seu e-mail" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="phone" placeholder="Digite seu telefone" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Instituição</Form.Label>
                <Form.Control type="text" placeholder="Digite sua instituição" />
            </Form.Group>

            <h3 className='Sub_itulo'>Segurança</h3>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Crie uma senha" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmação de senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Ao informar meu dados,estou ciente que..." />
            </Form.Group>

            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
    </>
}