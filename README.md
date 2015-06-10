# img-ready

Execute a callback after an image loaded.

## Usage

Install

```bash
npm install img-ready
```


This plugin can be used as an AMD/CommonJS module. Otherwise, it will expose an `imgReady` method on the global object (`window`).

```js
var img = document.getElementById('logo');
var imgUrl = 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png';

imgReady(imgUrl, {
  onload: function(e) {
    console.log(e); // `e` is load event object
    console.log(this); // `this` is an Image object
    img.src = this.src;
  },
  onerror: function(e) {
    console.log(e); // `e` is error event object
    console.log('load error');
  }
});
```

Or, a callback (onload) can be passed as the second parameter.

```js
imgReady(imgUrl, function(e) {
  console.log(e); // `e` is load event object
  console.log(this); // `this` is an Image object
  img.src = this.src;
});
```

## License

MIT
