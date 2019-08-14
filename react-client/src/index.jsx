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
      city: '',
      error: false,
      loading: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(city) {
    this.setState({ 
      city: city,
      loading: true, 
    })
    axios.get('/api/getWeather', {
      params : {
        city: city
      }
    })
    .then(({ data }) => {
      if(data === "Error" || Object.keys(data).length === 0 && data.constructor === Object){
        this.setState({ 
          error: true,
          loading: false
        })
      }else{
        this.setState({
          temps: data,
          loading: false,
        });
      }
    })
  }

  render () {
  console.log("Error", this.state.error)
  console.log(this.state.loading)
    return (
    <div>
      <Search 
        handleSubmit={this.handleSubmit} />
      { this.state.loading? <div style={header} >Loading... </div> : this.state.error ?   <div style={header} >No Results</div> : <Results header={header} temps={this.state.temps} city={this.state.city}/>}
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

const header = {
  display: 'flex',
  alignContent: 'center',
  color:'#000000',
  opacity: '100%',
  fontSize: '38px',
  fontFamily: 'Helvetica-Bold, system-ui',
  fontWeight: '700',
  paddingLeft: '40%',
}