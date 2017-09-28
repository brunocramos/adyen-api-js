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
    define(['ApiClient', 'model/ConfirmOrDeclineRequest', 'model/ConfirmOrDeclineResult', 'model/Error', 'model/StoreDetailAndSubmitRequest', 'model/StoreDetailAndSubmitResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ConfirmOrDeclineRequest'), require('../model/ConfirmOrDeclineResult'), require('../model/Error'), require('../model/StoreDetailAndSubmitRequest'), require('../model/StoreDetailAndSubmitResult'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.PayoutApi = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.ConfirmOrDeclineRequest, root.AdyenApiJs.ConfirmOrDeclineResult, root.AdyenApiJs.Error, root.AdyenApiJs.StoreDetailAndSubmitRequest, root.AdyenApiJs.StoreDetailAndSubmitResult);
  }
}(this, function(ApiClient, ConfirmOrDeclineRequest, ConfirmOrDeclineResult, Error, StoreDetailAndSubmitRequest, StoreDetailAndSubmitResult) {
  'use strict';

  /**
   * Payout service.
   * @module api/PayoutApi
   * @version 1.30.0
   */

  /**
   * Constructs a new PayoutApi. 
   * @alias module:api/PayoutApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Confirm a payout
     * You can decide over a period of seven days to proceed a payout, after which the payout expires automatically
     * @param {module:model/ConfirmOrDeclineRequest} confirmOrDeclineRequest The confirm or decline payout request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfirmOrDeclineResult} and HTTP response
     */
    this.confirmWithHttpInfo = function(confirmOrDeclineRequest) {
      var postBody = confirmOrDeclineRequest;

      // verify the required parameter 'confirmOrDeclineRequest' is set
      if (confirmOrDeclineRequest === undefined || confirmOrDeclineRequest === null) {
        throw new Error("Missing the required parameter 'confirmOrDeclineRequest' when calling confirm");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ConfirmOrDeclineResult;

      return this.apiClient.callApi(
        '/Payout/v30/confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Confirm a payout
     * You can decide over a period of seven days to proceed a payout, after which the payout expires automatically
     * @param {module:model/ConfirmOrDeclineRequest} confirmOrDeclineRequest The confirm or decline payout request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfirmOrDeclineResult}
     */
    this.confirm = function(confirmOrDeclineRequest) {
      return this.confirmWithHttpInfo(confirmOrDeclineRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Decline a payout
     * You can decide over a period of seven days to cancel a payout, after which the payout expires automatically.
     * @param {module:model/ConfirmOrDeclineRequest} confirmOrDeclineRequest The confirm or decline payout request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfirmOrDeclineResult} and HTTP response
     */
    this.declineWithHttpInfo = function(confirmOrDeclineRequest) {
      var postBody = confirmOrDeclineRequest;

      // verify the required parameter 'confirmOrDeclineRequest' is set
      if (confirmOrDeclineRequest === undefined || confirmOrDeclineRequest === null) {
        throw new Error("Missing the required parameter 'confirmOrDeclineRequest' when calling decline");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ConfirmOrDeclineResult;

      return this.apiClient.callApi(
        '/Payout/v30/decline', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Decline a payout
     * You can decide over a period of seven days to cancel a payout, after which the payout expires automatically.
     * @param {module:model/ConfirmOrDeclineRequest} confirmOrDeclineRequest The confirm or decline payout request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfirmOrDeclineResult}
     */
    this.decline = function(confirmOrDeclineRequest) {
      return this.declineWithHttpInfo(confirmOrDeclineRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Store the payouts details and make a payout request
     * Besides storing payout details using the normal payment flow, the payout web service offers a call to store payout details, either bank account or credit card, for a specific shopper and make a payout request in a single API call.
     * @param {module:model/StoreDetailAndSubmitRequest} storeDetailAndSubmitRequest The store detail and submit Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StoreDetailAndSubmitResult} and HTTP response
     */
    this.storeDetailAndSubmitWithHttpInfo = function(storeDetailAndSubmitRequest) {
      var postBody = storeDetailAndSubmitRequest;

      // verify the required parameter 'storeDetailAndSubmitRequest' is set
      if (storeDetailAndSubmitRequest === undefined || storeDetailAndSubmitRequest === null) {
        throw new Error("Missing the required parameter 'storeDetailAndSubmitRequest' when calling storeDetailAndSubmit");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StoreDetailAndSubmitResult;

      return this.apiClient.callApi(
        '/Payout/v30/storeDetailAndSubmitThirdParty', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Store the payouts details and make a payout request
     * Besides storing payout details using the normal payment flow, the payout web service offers a call to store payout details, either bank account or credit card, for a specific shopper and make a payout request in a single API call.
     * @param {module:model/StoreDetailAndSubmitRequest} storeDetailAndSubmitRequest The store detail and submit Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoreDetailAndSubmitResult}
     */
    this.storeDetailAndSubmit = function(storeDetailAndSubmitRequest) {
      return this.storeDetailAndSubmitWithHttpInfo(storeDetailAndSubmitRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
