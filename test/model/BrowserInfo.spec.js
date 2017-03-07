/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 18
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AdyenApiJs);
  }
}(this, function(expect, AdyenApiJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AdyenApiJs.BrowserInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BrowserInfo', function() {
    it('should create an instance of BrowserInfo', function() {
      // uncomment below and update the code to test BrowserInfo
      //var instane = new AdyenApiJs.BrowserInfo();
      //expect(instance).to.be.a(AdyenApiJs.BrowserInfo);
    });

    it('should have the property userAgent (base name: "userAgent")', function() {
      // uncomment below and update the code to test the property userAgent
      //var instane = new AdyenApiJs.BrowserInfo();
      //expect(instance).to.be();
    });

    it('should have the property acceptHeader (base name: "acceptHeader")', function() {
      // uncomment below and update the code to test the property acceptHeader
      //var instane = new AdyenApiJs.BrowserInfo();
      //expect(instance).to.be();
    });

  });

}));