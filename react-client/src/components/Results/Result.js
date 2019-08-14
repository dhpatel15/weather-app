import React from 'react'
import { Modal, Col, Image, Row, ListGroup} from 'react-bootstrap';

const imgURL = 'https://www.metaweather.com/static/img/weather/';
const imgExt = '.svg';


function formatDate(input) {

	let date = new Date(input)
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + ' '+ day + ', ' + year;
}


function Result({ temp, ind }) {
  return (
  		<Modal.Dialog size="sm" className="justify-content-md-center">
  			<Modal.Header className="justify-content-md-center">
		   		{ind === 0 ? <Modal.Title md="auto">Today's Weather</Modal.Title> : <Modal.Title md="auto">{formatDate(temp.applicable_date)}</Modal.Title>}
		    </Modal.Header>
		   <br/>
		    <Row className="justify-content-md-center" >
					<Col  md="auto"><h6>{temp.weather_state_name}</h6></Col>
		    </Row>
		     <Row className="justify-content-md-center" >
					<Col xs={6} md={4} ><Image xs={6} md={4} src={`${imgURL}${temp.weather_state_abbr}${imgExt}`} alt=''  rounded /></Col>
		    </Row>		    
		  <Modal.Body>
		  	<ListGroup>
				  { ind === 0 ? <ListGroup.Item>Current Temperature : {temp.the_temp.toFixed(0)}&deg;C</ListGroup.Item>: <div></div>}
				  <ListGroup.Item>
				  	<Row className="justify-content-md-center" >
							<Col md="auto">HIGH - {temp.max_temp.toFixed(0)}&deg;C</Col>
				    </Row>
				    <Row className="justify-content-md-center" >
				    <Col md="auto">LOW - {temp.min_temp.toFixed(0)}&deg;C</Col>
				    </Row>
				  </ListGroup.Item>
				  <ListGroup.Item>WIND - {temp.wind_speed.toFixed(0)} {temp.wind_direction_compass}</ListGroup.Item>
				  <ListGroup.Item>HUMIDITY - {temp.humidity}</ListGroup.Item>
				  <ListGroup.Item>VISIBILITY - {temp.visibility.toFixed(0)} %</ListGroup.Item>
				</ListGroup>
		  </Modal.Body>
		</Modal.Dialog>
  );
};

export default Result;