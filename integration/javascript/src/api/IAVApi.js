/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IavRequestCO', 'model/IavResponseVo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/IavRequestCO'), require('../model/IavResponseVo'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.IAVApi = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.IavRequestCO, root.HydrogenIntegrationApi.IavResponseVo);
  }
}(this, function(ApiClient, IavRequestCO, IavResponseVo) {
  'use strict';

  /**
   * IAV service.
   * @module api/IAVApi
   * @version 1.2.1
   */

  /**
   * Constructs a new IAVApi. 
   * @alias module:api/IAVApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createIAVUsingPost operation.
     * @callback module:api/IAVApi~createIAVUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IavResponseVo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Instant Account Verification of an account.
     * Endpoint is used to verify account.
     * @param {module:model/IavRequestCO} iavRequestCO iavRequestCO
     * @param {module:api/IAVApi~createIAVUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IavResponseVo}
     */
    this.createIAVUsingPost = function(iavRequestCO, callback) {
      var postBody = iavRequestCO;

      // verify the required parameter 'iavRequestCO' is set
      if (iavRequestCO === undefined || iavRequestCO === null) {
        throw new Error("Missing the required parameter 'iavRequestCO' when calling createIAVUsingPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = IavResponseVo;

      return this.apiClient.callApi(
        '/iav', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIAVUsingGet operation.
     * @callback module:api/IAVApi~getIAVUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IavResponseVo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get verified account based on id.
     * Get verified account based on id.
     * @param {String} nucleusBankLinkId nucleus_bank_link_id
     * @param {module:api/IAVApi~getIAVUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IavResponseVo}
     */
    this.getIAVUsingGet = function(nucleusBankLinkId, callback) {
      var postBody = null;

      // verify the required parameter 'nucleusBankLinkId' is set
      if (nucleusBankLinkId === undefined || nucleusBankLinkId === null) {
        throw new Error("Missing the required parameter 'nucleusBankLinkId' when calling getIAVUsingGet");
      }


      var pathParams = {
        'nucleus_bank_link_id': nucleusBankLinkId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = IavResponseVo;

      return this.apiClient.callApi(
        '/iav/{nucleus_bank_link_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
