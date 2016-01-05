var React = require('react');
var Leaderboard = require('./Leaderboard.jsx');


var Header = React.createClass({

  render: function() {
    return (

        <div id='header' className='container-fluid row'>
          <div className="col-xs-12 col-md-6 text-center">
          <h1>Free Code Camp Leaderboard</h1>
          </div>

        </div>
    );
  }
});

module.exports = Header
