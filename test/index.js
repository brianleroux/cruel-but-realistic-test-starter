var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');

var test = require('tape');

var deprecated = require('./deprecated.json');

fs.readFile(path.resolve(__dirname + '/../index.html'), function (err, buffer) {
  var file = buffer.toString();
  var $ = cheerio.load(file);
  deprecated.forEach(function(className) {
    test('checking for ' + className, function (t) {
      t.plan(1);
      var instances = $(className); 
      if (instances.length > 0) {
        t.fail();
      }
      t.pass();
    });
  });  
});
