import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';

import Search from './components/SearchContainer'
import Results from './components/Results/ResultsList'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temps: [],
      city: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(city) {
    this.setState({ city: city })
    axios.get('/api/getWeather', {
      params : {
        city: city
      }
    })
    .then(({data}) => {
      this.setState({
        temps: data
      });
    }) 
  }

  render () {
  console.log(this.state.temps)
    return (
    <div>
      <Search 
        handleSubmit={this.handleSubmit} />

      {this.state.temps.length > 1 ? <Results temps={this.state.temps} city={this.state.city}/>: <div></div>}
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));