import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function () {
    return <>
        <Form>
            <h1>Cadastro de cão guia</h1>
            <h2 className='Sub_titulo'>Dados de identificação </h2>

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
                    <option value="fem">Feminino</option>
                    <option value="masc">Masculino</option>
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