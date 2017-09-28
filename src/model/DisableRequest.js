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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.DisableRequest = factory(root.AdyenApiJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DisableRequest model module.
   * @module model/DisableRequest
   * @version 1.30.0
   */

  /**
   * Constructs a new <code>DisableRequest</code>.
   * @alias module:model/DisableRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DisableRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DisableRequest} obj Optional instance to populate.
   * @return {module:model/DisableRequest} The populated <code>DisableRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantAccount')) {
        obj['merchantAccount'] = ApiClient.convertToType(data['merchantAccount'], 'String');
      }
      if (data.hasOwnProperty('shopperReference')) {
        obj['shopperReference'] = ApiClient.convertToType(data['shopperReference'], 'String');
      }
      if (data.hasOwnProperty('recurringDetailReference')) {
        obj['recurringDetailReference'] = ApiClient.convertToType(data['recurringDetailReference'], 'String');
      }
      if (data.hasOwnProperty('contract')) {
        obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
      }
    }
    return obj;
  }

  /**
   * the merchant account which will be used for processing this request
   * @member {String} merchantAccount
   */
  exports.prototype['merchantAccount'] = undefined;
  /**
   * a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   * @member {String} shopperReference
   */
  exports.prototype['shopperReference'] = undefined;
  /**
   * the recurring detail you wish to disable
   * @member {String} recurringDetailReference
   */
  exports.prototype['recurringDetailReference'] = undefined;
  /**
   * specify the contract if you only want to disable a specific use
   * @member {String} contract
   */
  exports.prototype['contract'] = undefined;


  /**
   * Returns the merchant account which will be used for processing this request
   * @return {String}
   */
  exports.prototype.getMerchantAccount = function() {
    return this['merchantAccount'];
  }

  /**
   * Sets the merchant account which will be used for processing this request
   * @param {String} merchantAccount the merchant account which will be used for processing this request
   */
  exports.prototype.setMerchantAccount = function(merchantAccount) {
    this['merchantAccount'] = merchantAccount;
  }


  /**
   * Returns a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   * @return {String}
   */
  exports.prototype.getShopperReference = function() {
    return this['shopperReference'];
  }

  /**
   * Sets a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   * @param {String} shopperReference a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   */
  exports.prototype.setShopperReference = function(shopperReference) {
    this['shopperReference'] = shopperReference;
  }


  /**
   * Returns the recurring detail you wish to disable
   * @return {String}
   */
  exports.prototype.getRecurringDetailReference = function() {
    return this['recurringDetailReference'];
  }

  /**
   * Sets the recurring detail you wish to disable
   * @param {String} recurringDetailReference the recurring detail you wish to disable
   */
  exports.prototype.setRecurringDetailReference = function(recurringDetailReference) {
    this['recurringDetailReference'] = recurringDetailReference;
  }


  /**
   * Returns specify the contract if you only want to disable a specific use
   * @return {String}
   */
  exports.prototype.getContract = function() {
    return this['contract'];
  }

  /**
   * Sets specify the contract if you only want to disable a specific use
   * @param {String} contract specify the contract if you only want to disable a specific use
   */
  exports.prototype.setContract = function(contract) {
    this['contract'] = contract;
  }



  return exports;
}));


