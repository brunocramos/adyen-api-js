/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 30
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
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
    instance = new AdyenApiJs.NotificationRequestItemDetails();
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

  describe('NotificationRequestItemDetails', function() {
    it('should create an instance of NotificationRequestItemDetails', function() {
      // uncomment below and update the code to test NotificationRequestItemDetails
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be.a(AdyenApiJs.NotificationRequestItemDetails);
    });

    it('should have the property additionalData (base name: "additionalData")', function() {
      // uncomment below and update the code to test the property additionalData
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property pspReference (base name: "pspReference")', function() {
      // uncomment below and update the code to test the property pspReference
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property eventCode (base name: "eventCode")', function() {
      // uncomment below and update the code to test the property eventCode
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property eventDate (base name: "eventDate")', function() {
      // uncomment below and update the code to test the property eventDate
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property merchantAccountCode (base name: "merchantAccountCode")', function() {
      // uncomment below and update the code to test the property merchantAccountCode
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property operations (base name: "operations")', function() {
      // uncomment below and update the code to test the property operations
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property merchantReference (base name: "merchantReference")', function() {
      // uncomment below and update the code to test the property merchantReference
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property originalReference (base name: "originalReference")', function() {
      // uncomment below and update the code to test the property originalReference
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethod (base name: "paymentMethod")', function() {
      // uncomment below and update the code to test the property paymentMethod
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be();
    });

    it('should have the property success (base name: "success")', function() {
      // uncomment below and update the code to test the property success
      //var instane = new AdyenApiJs.NotificationRequestItemDetails();
      //expect(instance).to.be();
    });

  });

}));
