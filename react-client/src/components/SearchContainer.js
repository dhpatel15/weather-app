import React from 'react';

import { Jumbotron, Form, Button} from 'react-bootstrap';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      timeout: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchQuery);
  }

  handleChange(event) {
    this.setState({searchQuery: event.target.value});
  }


  render() {
    return (
      <Jumbotron>
        <h1>WEATHER APP!</h1>
          <Form onSubmit={this.handleSubmit} >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email City Name </Form.Label>
              <Form.Control value={this.state.value} onChange={this.handleChange} placeholder="New York"/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Form>
      </Jumbotron>
    );
  }
}

export default SearchContainer;