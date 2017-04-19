/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 25
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
    instance = new AdyenApiJs.StoreDetailAndSubmitRequest();
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

  describe('StoreDetailAndSubmitRequest', function() {
    it('should create an instance of StoreDetailAndSubmitRequest', function() {
      // uncomment below and update the code to test StoreDetailAndSubmitRequest
      //var instane = new AdyenApiJs.StoreDetailAndSubmitRequest();
      //expect(instance).to.be.a(AdyenApiJs.StoreDetailAndSubmitRequest);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new AdyenApiJs.StoreDetailAndSubmitRequest();
      //expect(instance).to.be();
    });

    it('should have the property merchantAccount (base name: "merchantAccount")', function() {
      // uncomment below and update the code to test the property merchantAccount
      //var instane = new AdyenApiJs.StoreDetailAndSubmitRequest();
      //expect(instance).to.be();
    });

    it('should have the property recurring (base name: "recurring")', function() {
      // uncomment below and update the code to test the property recurring
      //var instane = new AdyenApiJs.StoreDetailAndSubmitRequest();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instane = new AdyenApiJs.StoreDetailAndSubmitRequest();
      //expect(instance).to.be();
    });

    it('should have the property shopperEmail (base name: "shopperEmail")', function() {
      // uncomment below and update the code to test the property shopperEmail
      //var instane = new AdyenApiJs.StoreDetailAndSubmitRequest();
      //expect(instance).to.be();
    });

    it('should have the property shopperReference (base name: "shopperReference")', function() {
      // uncomment below and update the code to test the property shopperReference
      //var instane = new AdyenApiJs.StoreDetailAndSubmitRequest();
      //expect(instance).to.be();
    });

    it('should have the property shopperStatement (base name: "shopperStatement")', function() {
      // uncomment below and update the code to test the property shopperStatement
      //var instane = new AdyenApiJs.StoreDetailAndSubmitRequest();
      //expect(instance).to.be();
    });

    it('should have the property bank (base name: "bank")', function() {
      // uncomment below and update the code to test the property bank
      //var instane = new AdyenApiJs.StoreDetailAndSubmitRequest();
      //expect(instance).to.be();
    });

    it('should have the property card (base name: "card")', function() {
      // uncomment below and update the code to test the property card
      //var instane = new AdyenApiJs.StoreDetailAndSubmitRequest();
      //expect(instance).to.be();
    });

    it('should have the property billingAddress (base name: "billingAddress")', function() {
      // uncomment below and update the code to test the property billingAddress
      //var instane = new AdyenApiJs.StoreDetailAndSubmitRequest();
      //expect(instance).to.be();
    });

  });

}));
