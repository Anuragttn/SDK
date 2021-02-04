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
    define(['ApiClient', 'model/Budget', 'model/PageBudget'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Budget'), require('../model/PageBudget'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.BudgetApi = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.Budget, root.HydrogenNucleusApi.PageBudget);
  }
}(this, function(ApiClient, Budget, PageBudget) {
  'use strict';

  /**
   * Budget service.
   * @module api/BudgetApi
   * @version 1.8.0
   */

  /**
   * Constructs a new BudgetApi. 
   * @alias module:api/BudgetApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createBudgetUsingPost operation.
     * @callback module:api/BudgetApi~createBudgetUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Budget} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a budget request
     * Create a new budget request.
     * @param {module:model/Budget} budgetRequest budgetRequest
     * @param {module:api/BudgetApi~createBudgetUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Budget}
     */
    this.createBudgetUsingPost = function(budgetRequest, callback) {
      var postBody = budgetRequest;

      // verify the required parameter 'budgetRequest' is set
      if (budgetRequest === undefined || budgetRequest === null) {
        throw new Error("Missing the required parameter 'budgetRequest' when calling createBudgetUsingPost");
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
      var returnType = Budget;

      return this.apiClient.callApi(
        '/budget', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBudgetUsingDelete operation.
     * @callback module:api/BudgetApi~deleteBudgetUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a budget request
     * Permanently delete a budget request.
     * @param {String} budgetId UUID budget_id
     * @param {module:api/BudgetApi~deleteBudgetUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBudgetUsingDelete = function(budgetId, callback) {
      var postBody = null;

      // verify the required parameter 'budgetId' is set
      if (budgetId === undefined || budgetId === null) {
        throw new Error("Missing the required parameter 'budgetId' when calling deleteBudgetUsingDelete");
      }


      var pathParams = {
        'budget_id': budgetId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/budget/{budget_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBudgetAllUsingGet operation.
     * @callback module:api/BudgetApi~getBudgetAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBudget} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all budget requests
     * Get the information for all budget requests.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.currencyConversion currency_conversion
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/BudgetApi~getBudgetAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBudget}
     */
    this.getBudgetAllUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'ascending': opts['ascending'],
        'currency_conversion': opts['currencyConversion'],
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
      var returnType = PageBudget;

      return this.apiClient.callApi(
        '/budget', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBudgetUsingGet operation.
     * @callback module:api/BudgetApi~getBudgetUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Budget} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a budget request
     * Retrieve the information for a budget request.
     * @param {String} budgetId UUID budget_id
     * @param {Object} opts Optional parameters
     * @param {String} opts.currencyConversion USD
     * @param {module:api/BudgetApi~getBudgetUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Budget}
     */
    this.getBudgetUsingGet = function(budgetId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'budgetId' is set
      if (budgetId === undefined || budgetId === null) {
        throw new Error("Missing the required parameter 'budgetId' when calling getBudgetUsingGet");
      }


      var pathParams = {
        'budget_id': budgetId
      };
      var queryParams = {
        'currency_conversion': opts['currencyConversion'],
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
      var returnType = Budget;

      return this.apiClient.callApi(
        '/budget/{budget_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBudgetUsingPut operation.
     * @callback module:api/BudgetApi~updateBudgetUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Budget} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a budget request
     * Update the information for a budget request.
     * @param {Object} budget budget
     * @param {String} budgetId UUID budget_id
     * @param {module:api/BudgetApi~updateBudgetUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Budget}
     */
    this.updateBudgetUsingPut = function(budget, budgetId, callback) {
      var postBody = budget;

      // verify the required parameter 'budget' is set
      if (budget === undefined || budget === null) {
        throw new Error("Missing the required parameter 'budget' when calling updateBudgetUsingPut");
      }

      // verify the required parameter 'budgetId' is set
      if (budgetId === undefined || budgetId === null) {
        throw new Error("Missing the required parameter 'budgetId' when calling updateBudgetUsingPut");
      }


      var pathParams = {
        'budget_id': budgetId
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
      var returnType = Budget;

      return this.apiClient.callApi(
        '/budget/{budget_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
