var Fetch = require('whatwg-fetch');

module.exports = window.api = {
  get: function(url) {
    return fetch(url).then(function(res) {
      return res.json();
    });
  }
}
