import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function () {
    return <>
        <Form>
            <h1 className='Titulo'>Carteira Nacional</h1>
            <div> Valide sua carteira nacional </div>
        
            <Form.Group className="mb-3" >
                <Form.Label>Câmera</Form.Label>
                <Form.Control type="text" placeholder="Escolha uma câmera" />
            </Form.Group>
            <div>caso queira utilizar a leitura do QrCode da Carteira Nacional de Usuários de Cães Guia, por favor selecione qual câmera você deseja usar, caso constrário, digite o número no campo CNUCG.</div>

            <Form.Group className="mb-3" >
                <Form.Label>CNUCG</Form.Label>
                <Form.Control type="text" placeholder="Digite o codigo" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Validar
            </Button>
        </Form>
    </>
} 