var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/Header.jsx');
var Footer = require('./components/Footer.jsx');
var Leaderboard = require('./components/Leaderboard.jsx');

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Leaderboard />, document.getElementById('leaderboard'));
