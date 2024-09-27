import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
/* import Container from 'react-bootstrap/Container'; */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function () {
    return <>
        <Form>
            <h1>Cadastro de cão guia</h1>
            <h2 className='Sub_titulo'>Dados de identificação </h2>
            <Row>
                <Col className="mb-3" >
                    <Form.Label>Nome do cão</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do cão" />
                </Col>

                <Col className="mb-3" >
                    <Form.Label>Raça</Form.Label>
                    <Form.Control type="text" placeholder="Digite a raça do cão" />
                </Col>
            </Row>
            <Row>
                <Col className="mb-3" >
                    <Form.Label>Sexo</Form.Label>
                    <Form.Select >
                        <option value="fem">Feminino</option>
                        <option value="masc">Masculino</option>
                    </Form.Select>
                </Col>

                <Col className="mb-3" >
                    <Form.Label>Número de registro</Form.Label>
                    <Form.Control type="text" placeholder="Digite o número de registro do cão" />
                </Col>

                <Col className="mb-3" >
                    <Form.Label>Cor</Form.Label>
                    <Form.Control type="text" placeholder="Digite a cor do cão" />
                </Col>
            </Row>
''
            <Row>
                <Col className="mb-3" >
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control type="date" />
                </Col>
                
                <Col className="mb-3" >
                    <Form.Label>Instituição</Form.Label>
                    <Form.Control type="text" placeholder="Digite sua instituição" />
                </Col>
            </Row>
            <div className="conf">
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Ao informar meu dados,estou ciente que..." />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Cadastrar
                            </Button>
            </div>
        </Form>
    </>
} 