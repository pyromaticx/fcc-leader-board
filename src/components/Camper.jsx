var React = require('react');

var Camper = React.createClass({
  render: function() {
    return (

      <div className={this.props.rank % 2 === 0 ? "row camper evenCamper " : "row camper"}>
        <div className="col-xs-1">
          {this.props.data.rank || this.props.rank}
        </div>
        <div className=" col-xs-2">
          {this.props.data.img ? (<img src={this.props.data.img} className='camperIcon' />) : ''}
          {this.props.data.username}
        </div>
        <div className="col-xs-1 text-right">
          {this.props.data.total}
        </div>
        <div className="col-xs-1 text-right">
          {this.props.data.totalRecent}
        </div>
        <div className="col-xs-1 col-xs-offset-1 text-right">
          {this.props.data.basejumps}
        </div>
        <div className="col-xs-1 col-xs-offset-1 text-right">
          {this.props.data.ziplines}
        </div>
        <div className="col-xs-1 col-xs-offset-1 text-right">
          {this.props.data.bonfires}
        </div>

      </div>
    );
  }
});

module.exports = Camper;
