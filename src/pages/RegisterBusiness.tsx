import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
/* import Container from 'react-bootstrap/Container'; */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function () {
    return <>
        <Form>
        <h1 className='Titulo'>Cadastro de usuário cães guia</h1>           
            <h2 className='Titulo'>Pessoa Jurídica</h2>
           
            <Row>
                <Col>        
                    <Row>
                        <h3 className='Sub_titulo'>Dados de identificação </h3>
                            
                        <Col className="mb-3" >
                            <Form.Label>Razão social</Form.Label>
                            <Form.Control type="text" placeholder="Digite a razão social" />
                        </Col>

                        <Col className="mb-3" >
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu CNPJ" />
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
            
                        <Form.Group className="mb-3" >
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu logradouro" />
                        </Form.Group>
                    </Row>
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
                </Col>
                
                <Col>
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

                        <Col className="mb-3" >
                            <Form.Label>Instituição</Form.Label>
                            <Form.Control type="text" placeholder="Digite sua instituição" />
                        </Col>
                    </Row>
                    <Row>
                        <h3 className='Sub_itulo'>Segurança</h3>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Crie uma senha" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirmação de senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Ao informar meu dados,estou ciente que..." />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Form>
    </>
}
