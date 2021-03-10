import { Container, Jumbotron } from 'reactstrap';

const Rodape = () => {
  return (
    <Jumbotron fluid className="rodape">
      <style>
        {`.rodape{
    background-color:#050D3D;
    color:#fff;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 0rem !important;
  }`}
      </style>
      <Container className="text-center">
        <h2 className="lead">Dubai Log</h2>
        <p>CNPJ: 24.534.109/0001-77</p>
        <p>
          Endereço: Rua Araponga, N° 445- Z de expansão, São José de Mipibu/RN
          Cep: 59162-000
        </p>
        <p>Email: contatodubailog@gmail.com</p>
        <p>Telefone: (84) 99849-2497</p>
      </Container>
    </Jumbotron>
  );
};

export default Rodape;
