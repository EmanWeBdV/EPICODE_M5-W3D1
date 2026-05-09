import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

function Welcome() {
  return (
    <Container className="mt-4">
      <h1>Benvenuto su EpiBooks!</h1>

      <Alert variant="info">
        Trova il tuo prossimo libro preferito.
      </Alert>
    </Container>
  );
}

export default Welcome;