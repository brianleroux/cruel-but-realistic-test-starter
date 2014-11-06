
var test = require('tape') 
  , cheerio = require('cheerio')
  , path = require('path')
  , fs = require('fs')
  , idx = path.join(__dirname, '..', 'index.html')
  , $ = cheerio.load(fs.readFileSync(idx))
  , badRows = $('.row-fluid').length

test('row search', function(t) {
  t.plan(2)
  t.ok($, 'got some elements')   
  t.ok(badRows === 0, 'has ' + badRows + ' bad rows')
  t.end()
})

test('span search', function(t) {
  t.plan(2)
  var badSpans = $('[class^="span"]').length
  t.ok(badSpans === 0, 'has ' + badSpans+ ' bad spandex')
  t.end()
})
