/*!
 * img-ready - Execute a callback after an image loaded. 
 * https://github.com/Alex1990/img-ready
 * Under the MIT license | 2015 (c) Alex Chao
 */

!(function(root, factory) {

  // Uses CommonJS, AMD or browser global to create a jQuery plugin.
  // See: https://github.com/umdjs/umd
  if (typeof define === 'function' && define.amd) {
    // Expose this plugin as an AMD module. Register an anonymous module.
    define(factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS module
    module.exports = factory();
  } else {
    // Browser globals 
    root.imgReady = factory();
  }

}(this, function(undefined) {

  'use strict';

  var defaults ={};

  // Main function
  function imgReady(src, opts) {
    if (typeof opts === 'function') {
      opts = {
        onload: opts
      };
    }

    opts = extend(extend({}, defaults), opts);

    var proxyImg = new Image();

    if (opts.onload) {
      proxyImg.onload = function() {
        opts.onload.call(proxyImg);
      };
    }

    if (opts.onerror) {
      proxyImg.onerror = function() {
        opts.onerror.call(proxyImg);
      };
    }

    proxyImg.src = src;
  }

  // Shadow copy
  function extend(to, from) {
    for (var p in from) {
      if (from.hasOwnProperty(p)) {
        to[p] = from[p];
      }
    }
  }

  return imgReady;

}));
