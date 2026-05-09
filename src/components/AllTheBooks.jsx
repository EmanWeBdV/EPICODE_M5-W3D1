import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import fantasyBooks from "../books/fantasy.json";

import SingleBook from "./SingleBook";

function AllTheBooks(props) {
  return (
    <Container className="my-4">
      <Row>
        {fantasyBooks
          .filter((book) =>
            book.title
              .toLowerCase()
              .includes(props.searchQuery.toLowerCase())
          )
          .map((book) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4"
              key={book.asin}
            >
              <SingleBook book={book} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;