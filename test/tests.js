test('options.onload', function(assert) {
  var done = assert.async();

  var cat = document.getElementById('octocat');
  var catUrl = 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png';

  imgReady(catUrl, {
    onload: function() {
      ok(true, 'onload callback called');
      ok(this instanceof Image, 'this refers to the proxy image element');
      done();
      cat.src = this.src;
    }
  });

});

test('options.onerror', function(assert) {
  var done = assert.async();

  imgReady('/non-exist.png', {
    onerror: function() {
      ok(true, 'onerror callback called');
      done();
    }
  });
});

test('callback parameter', function(assert) {
  var done = assert.async();

  var logo = document.getElementById('logo');
  var logoUrl = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';

  imgReady(logoUrl, function() {
    ok(true, 'callback parameter is called');
    done();
    logo.src = this.src;
  });
    
});
