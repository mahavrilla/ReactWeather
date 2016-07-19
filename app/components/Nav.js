var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  onSearch(e) {
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if( location.length > 0) {
      this.refs.location = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },

  render() {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
              <li className='menu-text'> React Weather App</li>
              <li> <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink> </li>
              <li> <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}> About </Link> </li>
              <li> <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}> Examples </Link> </li>
          </ul>
        </div>

        <div className='top-bar-right'>
            <form onSubmit={(e) => this.onSearch(e)}>
                <ul className='menu'>
                  <li>
                      <input ref='search' type='search' placeholder='Search Weather' />
                  </li>
                  <li>
                      <input type='submit' className='button' value='Get Weather'/>
                  </li>
                </ul>
            </form>
        </div>
      </div>
    );
  }
})

module.exports = Nav;