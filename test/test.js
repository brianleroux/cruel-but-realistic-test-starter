var test = require('tape');
var cheerio = require('cheerio');
var path = require('path');
var fs = require('fs');
var file = path.join(__dirname, '..', 'index.html');
var idx = fs.readFileSync(file, 'UTF-8');
var $ = cheerio.load(idx);

var bootstrap = {
  version2: ['.row-fluid', '.span*', '.offset*', '.brand', '.navbar .nav', '.nav-collapse', '.nav-toggle', '.btn-navbar', '.hero-unit', '.icon-*', '.btn', '.btn-mini', '.btn-small', '.btn-large', '.alert-error', '.visible-phone', '.visible-tablet', '.visible-desktop', '.hidden-phone', '.hidden-tablet', '.hidden-desktop', '.input-block-level', '.control-group', '.control-group.warning .control-group.error .control-group.success', '.checkbox.inline .radio.inline', '.input-prepend .input-append', '.add-on', '.img-polaroid', 'ul.unstyled', 'ul.inline', '.muted', '.label', '.label-important', '.text-error', '.table .error', '.bar', '.bar-*', '.accordion', '.accordion-group', '.accordion-heading', '.accordion-body', '.accordion-inner']
};

test('Sanity', function (t) {
  t.plan(1);
  t.ok($, 'got some elements');
  t.end();
});

test('Check for rogue bootstrap 2 elements', function (t) {
  t.plan(bootstrap.version2.length);
  for (var i = 0, l = bootstrap.version2.length; i < l; i++) {
    var selector = bootstrap.version2[i];
    t.ok($(selector).length === 0, 'no ' + selector);
  }
  t.end();
});