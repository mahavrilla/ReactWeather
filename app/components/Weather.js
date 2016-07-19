var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage= require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState() {
    return {
      isLoading: false
    }
  },

  componentDidMount() {
    var location = this.props.location.query.location;
    if( location && location.length > 0) {
      this.handleSearch( location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps(newProps) {
    var location = newProps.location.query.location;

    if( location && location.length > 0) {
      this.handleSearch( location);
      window.location.hash = '#/';
    }
  },

  handleSearch(location) {
    this.setState({
      isLoading: true,
      location: undefined,
      temp: undefined,
    });

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false,
      })
    }, (error) => {
      alert( error);
      this.setState({isLoading: false});
    });
  },
  render() {
    var { isLoading, location, temp} = this.state;

    function renderMessage() {
      if( isLoading) {
        return ( <h3> Fetching Weather ... </h3> );
      } else if (temp && location) {
        return ( <WeatherMessage location={location} temp={temp}/> );
      }
    }

    return (
      <div>
          <WeatherForm onSearch={(location) => this.handleSearch(location)}/>
          {renderMessage()}
      </div>
    );
  }
});


module.exports = Weather;
