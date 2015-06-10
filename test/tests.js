test('options.onload', function(assert) {
  var done = assert.async();

  var img1 = document.getElementById('img1');
  var imgUrl1 = 'https://c.s-microsoft.com/zh-cn/CMSImages/mslogo.png?version=856673f8-e6be-0476-6669-d5bf2300391d';

  imgReady(imgUrl1, {
    onload: function(e) {
      ok(true, 'onload callback called');
      ok(this.width > 0, 'The image width is greater than zero');
      ok(this.height > 0, 'The image height is greater than zero');
      // In IE6, the below line code will throw error.
      // ok(this instanceof Image, 'The context this refers to an Image instance, that is an image element.');
      equal(e.type, 'load', 'The load event object is passed as the first argument');
      done();
      img1.src = this.src;
    }
  });

});

test('options.onerror', function(assert) {
  var done = assert.async();

  imgReady('/non-exist.png', {
    onerror: function(e) {
      ok(true, 'onerror callback called');
      equal(e.type, 'error', 'The error event object is passed as the first argument');
      done();
    }
  });
});

test('callback parameter', function(assert) {
  var done = assert.async();

  var img2 = document.getElementById('img2');
  var imgUrl2 = 'http://c.s-microsoft.com/zh-cn/CMSImages/pmg-newOfficeLogo_135x30.png?version=25e941c1-7583-e0fd-d341-f146cf43e100';

  imgReady(imgUrl2, function() {
    ok(true, 'callback parameter is called');
    done();
    img2.src = this.src;
  });
    
});
