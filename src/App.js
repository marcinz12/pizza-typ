import logo from './logo.svg';
import './App.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import CalculaterPanel from "./CalculaterPanel";
import {useState} from "react";

function App() {
    const [result1, setResult1] = useState();
    const [result2, setResult2] = useState();

  return (
 <Container className={'mt-3'}>
     <Row>
         <Col><CalculaterPanel isBest={result1<result2} setResult={setResult1} title={"Pizza 1"}/></Col>
         <Col><CalculaterPanel isBest={result1>result2} setResult={setResult2} title={"Pizza 2"}/></Col>
     </Row>

   {/*<Button variant="primary">Primary</Button>{' '}*/}
     {/*from https://react-bootstrap.github.io/components/cards/*/}
 </Container>
  );
}

export default App;
