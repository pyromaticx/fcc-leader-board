var React = require('react');
var Api = require('./Api.jsx');
var Camper = require('./Camper.jsx');
var recentUrl = 'http://fcctop100.herokuapp.com/api/fccusers/top100/recent';
var allTimeUrl = 'http://fcctop100.herokuapp.com/api/fccusers/top100/alltime';

var Leaderboard = React.createClass({
  getInitialState: function() {
    return {campers: [],
            currentDataTitle: 'Click for All-Time Records',
            currentData: 'recent',
            sorted: 'most',
            url: recentUrl};
  },

  componentWillMount: function() {
    this.getter(this.state.url);
  },
  getter: function(url) {
    Api.get(url).then(function(data) {
      this.setState({camperData: data});
      this.formatter(data);
    }.bind(this));
  },

  formatter: function(data) {
    var count = 0;
    var formedCampers = data.map(function(el) {
      return (
        <Camper key={++count}
          rank={this.state.sorted === 'most' ? (data.length - count) : count}
          data={el} />
      );
    }.bind(this));
    this.setState({campers:formedCampers});
  },

  render: function() {
    var headLine = {
      rank: (<button className='btn btn-disabled btn-xs' id="rank">Rank</button>),
      username: (<button className='btn btn-default btn-xs' id="username" onClick={this.sortName}>Username</button>),
      total: (<button className='btn btn-default btn-xs' id="total" onClick={this.sortBased}>Total</button>),
      points: (<button className='btn btn-default btn-xs' id="points" onClick={this.sortBased}>Points</button>),
      basejumps: (<button className='btn btn-default btn-xs' id="basejumps" onClick={this.sortBased}>Base Jumps</button>),
      ziplines: (<button className='btn btn-default btn-xs' id="ziplines" onClick={this.sortBased}>Zip Lines</button>),
      bonfires: (<button className='btn btn-default btn-xs' id="bonfires" onClick={this.sortBased}>Bonfires</button>),
      totalRecent: (<button className='btn btn-default btn-xs' id="totalRecent" onClick={this.sortBased}>Recent</button>)
    };
    return (
      <div className='well'>
      <div className='row'>
        <button onClick={this.changeRecords} className='col-xs-4 col-xs-offset-4 btn btn-primary switch'>
          {this.state.currentDataTitle}
        </button>
      </div>
      <div>
        <Camper id="headline" rank="Rank" data={headLine} />
        {this.state.campers}
      </div>
    </div>
    );
  },
  changeRecords: function() {

    if(this.state.currentData === 'recent') {
      this.setState({currentDataTitle: 'Click for 30 Day Records',
                     currentData: 'alltime'});
      this.getter(allTimeUrl);
    } else {
      this.setState({currentDataTitle: 'Click for All-Time Records',
                     currentData: 'recent'})
      this.getter(recentUrl);
    }
  },
  sortBased: function(e) {
    var data = this.state.camperData;
    var sorted = this.sortFrom(data, (e.target.id || 'total'));
    if (this.state.sorted === 'most') {
      this.setState({sorted: 'least'});
        this.formatter(sorted);
    } else {
      sorted.reverse();
      this.setState({sorted: 'most'});
      this.formatter(sorted);
    }
  },

  sortFrom: function(data, cat) {
    var val = data.sort(function(a, b) {
        return a[cat] - b[cat];
    });
    return val;
  },
  sortName: function() {
    var data = this.state.camperData;
    var alphaSort = data.sort(function(a, b) {
      var A = a.username.toLowerCase();
      var B = b.username.toLowerCase();
      if (A < B) {
        return -1;
      }else if (A > B) {
        return 1;
      }else return 0;

    });
    if(this.state.alpha === 'a'){
      data.reverse();
      this.setState({alpha: 'z',
                     sorted: 'least'})
      this.formatter(data);
    } else {
    this.setState({alpha: 'a',
                   sorted: 'most'});
    this.formatter(data);
  }
  }
});

module.exports = Leaderboard;
