import React from 'react';
import Result from './Result';

import { Row, Col, Container } from 'react-bootstrap';

function ResultsList({ temps, city, header }) {
  return (
  	<div>

  		{ city.length > 1 ? <div style={header}> Weather for {city}</div>: <div></div> }
  		
  		<Row>
    		{temps.map( (temp, ind) => {
      		return <Result key={temp.id} temp={temp} ind={ind}/>
    		})}
	    </Row>
  	</div>

  );
};

export default ResultsList;


