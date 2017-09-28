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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Amount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.ForexQuote = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.Amount);
  }
}(this, function(ApiClient, Amount) {
  'use strict';




  /**
   * The ForexQuote model module.
   * @module model/ForexQuote
   * @version 1.30.0
   */

  /**
   * Constructs a new <code>ForexQuote</code>.
   * the forex quote as returned in the response of the forex service
   * @alias module:model/ForexQuote
   * @class
   * @param validTill {Date} 
   * @param basePoints {Number} 
   */
  var exports = function(validTill, basePoints) {
    var _this = this;





    _this['validTill'] = validTill;
    _this['basePoints'] = basePoints;






  };

  /**
   * Constructs a <code>ForexQuote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ForexQuote} obj Optional instance to populate.
   * @return {module:model/ForexQuote} The populated <code>ForexQuote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('interbank')) {
        obj['interbank'] = Amount.constructFromObject(data['interbank']);
      }
      if (data.hasOwnProperty('sell')) {
        obj['sell'] = Amount.constructFromObject(data['sell']);
      }
      if (data.hasOwnProperty('buy')) {
        obj['buy'] = Amount.constructFromObject(data['buy']);
      }
      if (data.hasOwnProperty('validTill')) {
        obj['validTill'] = ApiClient.convertToType(data['validTill'], 'Date');
      }
      if (data.hasOwnProperty('basePoints')) {
        obj['basePoints'] = ApiClient.convertToType(data['basePoints'], 'Number');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('signature')) {
        obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('baseAmount')) {
        obj['baseAmount'] = Amount.constructFromObject(data['baseAmount']);
      }
      if (data.hasOwnProperty('account')) {
        obj['account'] = ApiClient.convertToType(data['account'], 'String');
      }
      if (data.hasOwnProperty('accountType')) {
        obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
      }
    }
    return obj;
  }

  /**
   * the reference assigned to the forex quote request
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {module:model/Amount} interbank
   */
  exports.prototype['interbank'] = undefined;
  /**
   * @member {module:model/Amount} sell
   */
  exports.prototype['sell'] = undefined;
  /**
   * @member {module:model/Amount} buy
   */
  exports.prototype['buy'] = undefined;
  /**
   * @member {Date} validTill
   */
  exports.prototype['validTill'] = undefined;
  /**
   * @member {Number} basePoints
   */
  exports.prototype['basePoints'] = undefined;
  /**
   * the source of the forex quote
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * the signature to validate the integrity
   * @member {String} signature
   */
  exports.prototype['signature'] = undefined;
  /**
   * the type of forex
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/Amount} baseAmount
   */
  exports.prototype['baseAmount'] = undefined;
  /**
   * the account name
   * @member {String} account
   */
  exports.prototype['account'] = undefined;
  /**
   * the account type
   * @member {String} accountType
   */
  exports.prototype['accountType'] = undefined;


  /**
   * Returns the reference assigned to the forex quote request
   * @return {String}
   */
  exports.prototype.getReference = function() {
    return this['reference'];
  }

  /**
   * Sets the reference assigned to the forex quote request
   * @param {String} reference the reference assigned to the forex quote request
   */
  exports.prototype.setReference = function(reference) {
    this['reference'] = reference;
  }


  /**
   * @return {module:model/Amount}
   */
  exports.prototype.getInterbank = function() {
    return this['interbank'];
  }

  /**
   * @param {module:model/Amount} interbank
   */
  exports.prototype.setInterbank = function(interbank) {
    this['interbank'] = interbank;
  }


  /**
   * @return {module:model/Amount}
   */
  exports.prototype.getSell = function() {
    return this['sell'];
  }

  /**
   * @param {module:model/Amount} sell
   */
  exports.prototype.setSell = function(sell) {
    this['sell'] = sell;
  }


  /**
   * @return {module:model/Amount}
   */
  exports.prototype.getBuy = function() {
    return this['buy'];
  }

  /**
   * @param {module:model/Amount} buy
   */
  exports.prototype.setBuy = function(buy) {
    this['buy'] = buy;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getValidTill = function() {
    return this['validTill'];
  }

  /**
   * @param {Date} validTill
   */
  exports.prototype.setValidTill = function(validTill) {
    this['validTill'] = validTill;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getBasePoints = function() {
    return this['basePoints'];
  }

  /**
   * @param {Number} basePoints
   */
  exports.prototype.setBasePoints = function(basePoints) {
    this['basePoints'] = basePoints;
  }


  /**
   * Returns the source of the forex quote
   * @return {String}
   */
  exports.prototype.getSource = function() {
    return this['source'];
  }

  /**
   * Sets the source of the forex quote
   * @param {String} source the source of the forex quote
   */
  exports.prototype.setSource = function(source) {
    this['source'] = source;
  }


  /**
   * Returns the signature to validate the integrity
   * @return {String}
   */
  exports.prototype.getSignature = function() {
    return this['signature'];
  }

  /**
   * Sets the signature to validate the integrity
   * @param {String} signature the signature to validate the integrity
   */
  exports.prototype.setSignature = function(signature) {
    this['signature'] = signature;
  }


  /**
   * Returns the type of forex
   * @return {String}
   */
  exports.prototype.getType = function() {
    return this['type'];
  }

  /**
   * Sets the type of forex
   * @param {String} type the type of forex
   */
  exports.prototype.setType = function(type) {
    this['type'] = type;
  }


  /**
   * @return {module:model/Amount}
   */
  exports.prototype.getBaseAmount = function() {
    return this['baseAmount'];
  }

  /**
   * @param {module:model/Amount} baseAmount
   */
  exports.prototype.setBaseAmount = function(baseAmount) {
    this['baseAmount'] = baseAmount;
  }


  /**
   * Returns the account name
   * @return {String}
   */
  exports.prototype.getAccount = function() {
    return this['account'];
  }

  /**
   * Sets the account name
   * @param {String} account the account name
   */
  exports.prototype.setAccount = function(account) {
    this['account'] = account;
  }


  /**
   * Returns the account type
   * @return {String}
   */
  exports.prototype.getAccountType = function() {
    return this['accountType'];
  }

  /**
   * Sets the account type
   * @param {String} accountType the account type
   */
  exports.prototype.setAccountType = function(accountType) {
    this['accountType'] = accountType;
  }



  return exports;
}));


