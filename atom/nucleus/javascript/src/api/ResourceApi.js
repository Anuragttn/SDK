/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
 * Contact: info@hydrogenplatform.com
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
    define(['ApiClient', 'model/Country', 'model/Currency', 'model/State'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Country'), require('../model/Currency'), require('../model/State'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.ResourceApi = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.Country, root.HydrogenNucleusApi.Currency, root.HydrogenNucleusApi.State);
  }
}(this, function(ApiClient, Country, Currency, State) {
  'use strict';

  /**
   * Resource service.
   * @module api/ResourceApi
   * @version 1.7.0
   */

  /**
   * Constructs a new ResourceApi. 
   * @alias module:api/ResourceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAllCountryUsingGet operation.
     * @callback module:api/ResourceApi~getAllCountryUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Country>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Countries
     * Get All Countries. 
     * @param {module:api/ResourceApi~getAllCountryUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Country>}
     */
    this.getAllCountryUsingGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Country];

      return this.apiClient.callApi(
        '/resource/country', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllCurrencyUsingGet operation.
     * @callback module:api/ResourceApi~getAllCurrencyUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Currency>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Currencies
     * Get All Currencies. 
     * @param {module:api/ResourceApi~getAllCurrencyUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Currency>}
     */
    this.getAllCurrencyUsingGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Currency];

      return this.apiClient.callApi(
        '/resource/currency', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllStatesUsingGet operation.
     * @callback module:api/ResourceApi~getAllStatesUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/State>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all state resource
     * Get the information for all possible state resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.countryCode country_code (default to US)
     * @param {module:api/ResourceApi~getAllStatesUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/State>}
     */
    this.getAllStatesUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'country_code': opts['countryCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [State];

      return this.apiClient.callApi(
        '/resource/state', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllStatisticsUsingGet operation.
     * @callback module:api/ResourceApi~getAllStatisticsUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': [StatisticResourceVO]}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all statistic resource
     * Get the information for all possible statistic resource.
     * @param {module:api/ResourceApi~getAllStatisticsUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {'String': [StatisticResourceVO]}>}
     */
    this.getAllStatisticsUsingGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {'String': [StatisticResourceVO]};

      return this.apiClient.callApi(
        '/resource/statistic', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));