var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if( location.length > 0 ){
      this.refs.location.value = '';
      this.props.onSearch( location);
    }
  },

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
            this.onFormSubmit(e);
          }}>
          <input type='text' ref='location'/>
          <input type='submit' className='button' value='Get Weather'/>
        </form>
      </div>
    );
  }
});


module.exports = WeatherForm;
