/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CategoryResponseVO', 'model/Country', 'model/Currency', 'model/FxRateView', 'model/MXMerchantRes', 'model/MerchantCategoryCode', 'model/State'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CategoryResponseVO'), require('../model/Country'), require('../model/Currency'), require('../model/FxRateView'), require('../model/MXMerchantRes'), require('../model/MerchantCategoryCode'), require('../model/State'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.ResourceApi = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.CategoryResponseVO, root.HydrogenNucleusApi.Country, root.HydrogenNucleusApi.Currency, root.HydrogenNucleusApi.FxRateView, root.HydrogenNucleusApi.MXMerchantRes, root.HydrogenNucleusApi.MerchantCategoryCode, root.HydrogenNucleusApi.State);
  }
}(this, function(ApiClient, CategoryResponseVO, Country, Currency, FxRateView, MXMerchantRes, MerchantCategoryCode, State) {
  'use strict';

  /**
   * Resource service.
   * @module api/ResourceApi
   * @version 1.8.0
   */

  /**
   * Constructs a new ResourceApi. 
   * @alias module:api/ResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAggregationAccountCategoryMappingUsingGet operation.
     * @callback module:api/ResourceApi~getAggregationAccountCategoryMappingUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CategoryResponseVO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregation Account Category mapping
     * Get All Aggregation Account Category mapping.
     * @param {Object} opts Optional parameters
     * @param {String} opts.categories categories
     * @param {String} opts.tenantName tenant_name
     * @param {module:api/ResourceApi~getAggregationAccountCategoryMappingUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CategoryResponseVO>}
     */
    this.getAggregationAccountCategoryMappingUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'categories': opts['categories'],
        'tenant_name': opts['tenantName'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [CategoryResponseVO];

      return this.apiClient.callApi(
        '/resource/account_category', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAggregationAccountTransactionCategoryMappingUsingGet operation.
     * @callback module:api/ResourceApi~getAggregationAccountTransactionCategoryMappingUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CategoryResponseVO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregation Account Transaction Category mapping
     * Get All Aggregation Account Transaction Category mapping.
     * @param {Object} opts Optional parameters
     * @param {String} opts.categories categories
     * @param {String} opts.tenantName tenant_name
     * @param {module:api/ResourceApi~getAggregationAccountTransactionCategoryMappingUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CategoryResponseVO>}
     */
    this.getAggregationAccountTransactionCategoryMappingUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'categories': opts['categories'],
        'tenant_name': opts['tenantName'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [CategoryResponseVO];

      return this.apiClient.callApi(
        '/resource/merchant_category', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

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
      var collectionQueryParams = {
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
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
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
      var collectionQueryParams = {
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
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllMerchantCategoryCodeUsingGet operation.
     * @callback module:api/ResourceApi~getAllMerchantCategoryCodeUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MerchantCategoryCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Merchant Category Codes
     * Get All Merchant Category Codes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {module:api/ResourceApi~getAllMerchantCategoryCodeUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MerchantCategoryCode>}
     */
    this.getAllMerchantCategoryCodeUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [MerchantCategoryCode];

      return this.apiClient.callApi(
        '/resource/merchant_category_code', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
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
        'country_code': opts['countryCode'],
      };
      var collectionQueryParams = {
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
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
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
      var collectionQueryParams = {
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
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrencyExchangeRateAllUsingGet operation.
     * @callback module:api/ResourceApi~getCurrencyExchangeRateAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FxRateView>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all fxRates
     * Get information for all fxRates defined for your firm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {module:api/ResourceApi~getCurrencyExchangeRateAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FxRateView>}
     */
    this.getCurrencyExchangeRateAllUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
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
      var returnType = [FxRateView];

      return this.apiClient.callApi(
        '/resource/fx_rate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMerchantsAllUsingGet operation.
     * @callback module:api/ResourceApi~getMerchantsAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MXMerchantRes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all merchants
     * List all merchants.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to id)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/ResourceApi~getMerchantsAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MXMerchantRes}
     */
    this.getMerchantsAllUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'ascending': opts['ascending'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page': opts['page'],
        'size': opts['size'],
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
      var returnType = MXMerchantRes;

      return this.apiClient.callApi(
        '/resource/merchant', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
