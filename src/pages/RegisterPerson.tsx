import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
/* import Container from 'react-bootstrap/Container'; */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function () {
    return <>
        <Form>
            <h1 className='Titulo'>Cadastro de usuário cães guia</h1>
            <Row>
                <h2 className='Titulo'>Pessoa Física</h2>
                <h3 className='Sub_titulo'>Dados de identificação </h3>

                <Col className="mb-3" >
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome" />
                </Col>

                <Col className="mb-3" >
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control type="date" />
                </Col>
            </Row>
            <Row>
                <Col className="mb-3" >
                    <Form.Label>RG</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu RG" />
                </Col>

                <Col className="mb-3" >
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu CPF" />
                </Col>

                <Col className="mb-3" >
                    <Form.Label>Sexo</Form.Label>
                    <Form.Select>
                        <option>Feminino</option>
                        <option>Masculino</option>
                        <option>Prefiro não informar</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                <h3 className='Sub_itulo'>Endereço</h3>
                <Col className="mb-3" >
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu CEP" />
                </Col>

                <Col className="mb-3" >
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu estado" />
                </Col>

                <Col className="mb-3" >
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu cidade" />
                </Col>
            </Row>
            <Form.Group className="mb-3" >
                <Form.Label>Logradouro</Form.Label>
                <Form.Control type="text" placeholder="Digite seu logradouro" />
            </Form.Group>
            <Row>
                <Col className="mb-3" >
                    <Form.Label>Número</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu número" />
                </Col>
                
                <Col className="mb-3" >
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control type="text" placeholder="Digite o complemento" />
                </Col>

                <Col className="mb-3" >
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu bairro" />
                </Col>
            </Row>
            <Row>
                <h3 className='Sub_itulo'>Dados para contato</h3>
                <Col className="mb-3" >
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Col>

                <Col className="mb-3" >
                    <Form.Label>Confirmação de E-mail</Form.Label>
                    <Form.Control type="text" placeholder="Digite novamente seu e-mail" />
                </Col>
            </Row>
            <Row>
                <Col className="mb-3" >
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="phone" placeholder="Digite seu telefone" />
                </Col>

                <col className="mb-3" >
                    <Form.Label>Instituição</Form.Label>
                    <Form.Control type="text" placeholder="Digite sua instituição" />
                </col>
            </Row>
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