import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function chooseMain(props) {
  switch (props.loggedInUser.role[0]) {
    case "Yayo":
      return (<a href={`tel:${props.family}`}>
        <div className={`button family`}>
          <p>Familia</p>
        </div>
      </a>)
    case "Family": 
    default:
      return (<a href="tel:112">
        <div className={`button family`}>
          <p>Alertas</p>
        </div>
      </a>)
      }
      }

const Warming = props => {
  return (
    <Container>
      <Row>
        <Col xs={10} md={10} lg={10}>
          <a href="tel:112">
            <div className={`button emergency`}>
              <p>112</p>
            </div>
          </a>
        </Col>
         <Col xs={10} md={10} lg={10}>
       {props && chooseMain(props)}
         </Col>
      </Row>
    </Container>
  )
}

export default Warming
