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
    root.AdyenApiJs.PayoutEntityType = factory(root.AdyenApiJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class PayoutEntityType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "NaturalPerson"
     * @const
     */
    "NaturalPerson": "NaturalPerson",
    /**
     * value: "Company"
     * @const
     */
    "Company": "Company"  };

  /**
   * Returns a <code>PayoutEntityType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/PayoutEntityType} The enum <code>PayoutEntityType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


