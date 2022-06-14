import { useState } from "react";
import { Accordion, Alert, Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import PaginationBasic from "./pagination";

export default function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    const handleChange = (e)=>{
        console.log(e,"sdsd")
    }
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
    return (<>
    <Button onClick={() => setShow(true)}>Show Alert</Button>

    <Container fluid>
        <Row > 
            <Col sm='6' className="bg-danger">
                hi therer kandsjcnjsndkn
            </Col>
            <Col sm='6' className="bg-danger">
                hi therer kandsjcnjsndkn
            </Col>
        </Row>
        <Row > 
            <Col sm='6' className="bg-danger">
                hi therer kandsjcnjsndkn
            </Col>
            <Col sm='6' className="bg-success">
                hi therer kandsjcnjsndkn
            </Col>
        </Row>
        <Row >
            <PaginationBasic number ={10}/>
        </Row>
        <Accordion defaultActiveKey={['0']} alwaysOpen onSelect={(e)=>handleChange(e)}>
      <Accordion.Item eventKey="0" >
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </Container>
    {/* <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="%PUBLIC_URL%/favicon.ico" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        <ListGroup >
            <ListGroupItem>
                hi
            </ListGroupItem>
        </ListGroup>
      </Card.Text>
      <Card.Subtitle>
        hi
      </Card.Subtitle>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card> */}
</>);
  }
  
  