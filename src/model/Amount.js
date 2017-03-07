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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.Amount = factory(root.AdyenApiJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Amount model module.
   * @module model/Amount
   * @version 1.18.1
   */

  /**
   * Constructs a new <code>Amount</code>.
   * the amount to charge
   * @alias module:model/Amount
   * @class
   * @param value {Number} the amount's value in minor units
   * @param currency {String} the amount's three letter currency code (ISO 4217)
   */
  var exports = function(value, currency) {
    var _this = this;

    _this['value'] = value;
    _this['currency'] = currency;
  };

  /**
   * Constructs a <code>Amount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Amount} obj Optional instance to populate.
   * @return {module:model/Amount} The populated <code>Amount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
    }
    return obj;
  }

  /**
   * the amount's value in minor units
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * the amount's three letter currency code (ISO 4217)
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;


  /**
   * Returns the amount's value in minor units
   * @return {Number}
   */
  exports.prototype.getValue = function() {
    return this['value'];
  }

  /**
   * Sets the amount's value in minor units
   * @param {Number} value the amount's value in minor units
   */
  exports.prototype.setValue = function(value) {
    this['value'] = value;
  }


  /**
   * Returns the amount's three letter currency code (ISO 4217)
   * @return {String}
   */
  exports.prototype.getCurrency = function() {
    return this['currency'];
  }

  /**
   * Sets the amount's three letter currency code (ISO 4217)
   * @param {String} currency the amount's three letter currency code (ISO 4217)
   */
  exports.prototype.setCurrency = function(currency) {
    this['currency'] = currency;
  }



  return exports;
}));

