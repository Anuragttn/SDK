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
    define(['ApiClient', 'model/AvailableDateDoubleVO', 'model/Goal', 'model/GoalTrack', 'model/PageGoal', 'model/PageGoalTrack', 'model/PagePortfolioTransaction', 'model/PortfolioHoldingAgg'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AvailableDateDoubleVO'), require('../model/Goal'), require('../model/GoalTrack'), require('../model/PageGoal'), require('../model/PageGoalTrack'), require('../model/PagePortfolioTransaction'), require('../model/PortfolioHoldingAgg'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.GoalApi = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.AvailableDateDoubleVO, root.HydrogenNucleusApi.Goal, root.HydrogenNucleusApi.GoalTrack, root.HydrogenNucleusApi.PageGoal, root.HydrogenNucleusApi.PageGoalTrack, root.HydrogenNucleusApi.PagePortfolioTransaction, root.HydrogenNucleusApi.PortfolioHoldingAgg);
  }
}(this, function(ApiClient, AvailableDateDoubleVO, Goal, GoalTrack, PageGoal, PageGoalTrack, PagePortfolioTransaction, PortfolioHoldingAgg) {
  'use strict';

  /**
   * Goal service.
   * @module api/GoalApi
   * @version 1.8.0
   */

  /**
   * Constructs a new GoalApi. 
   * @alias module:api/GoalApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createGoalTrackUsingPost operation.
     * @callback module:api/GoalApi~createGoalTrackUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GoalTrack} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a goal track record
     * Create a goal track record for a goal under a client.
     * @param {module:model/GoalTrack} goalTrack goalTrack
     * @param {module:api/GoalApi~createGoalTrackUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GoalTrack}
     */
    this.createGoalTrackUsingPost = function(goalTrack, callback) {
      var postBody = goalTrack;

      // verify the required parameter 'goalTrack' is set
      if (goalTrack === undefined || goalTrack === null) {
        throw new Error("Missing the required parameter 'goalTrack' when calling createGoalTrackUsingPost");
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
      var returnType = GoalTrack;

      return this.apiClient.callApi(
        '/goal_track', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createGoalUsingPost operation.
     * @callback module:api/GoalApi~createGoalUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Goal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a goal
     * Create a new goal for your firm that clients can customize for themselves.
     * @param {module:model/Goal} goalRequest goalRequest
     * @param {module:api/GoalApi~createGoalUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Goal}
     */
    this.createGoalUsingPost = function(goalRequest, callback) {
      var postBody = goalRequest;

      // verify the required parameter 'goalRequest' is set
      if (goalRequest === undefined || goalRequest === null) {
        throw new Error("Missing the required parameter 'goalRequest' when calling createGoalUsingPost");
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
      var returnType = Goal;

      return this.apiClient.callApi(
        '/goal', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGoalTrackUsingDelete operation.
     * @callback module:api/GoalApi~deleteGoalTrackUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a goal track record
     * Permanently delete an goal track record for a goal under a client.
     * @param {String} goalTrackId UUID goal_track_id
     * @param {module:api/GoalApi~deleteGoalTrackUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGoalTrackUsingDelete = function(goalTrackId, callback) {
      var postBody = null;

      // verify the required parameter 'goalTrackId' is set
      if (goalTrackId === undefined || goalTrackId === null) {
        throw new Error("Missing the required parameter 'goalTrackId' when calling deleteGoalTrackUsingDelete");
      }


      var pathParams = {
        'goal_track_id': goalTrackId
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
        '/goal_track/{goal_track_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGoalUsingDelete operation.
     * @callback module:api/GoalApi~deleteGoalUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a goal
     * Permanently delete a goal for your firm.
     * @param {String} goalId UUID goal_id
     * @param {module:api/GoalApi~deleteGoalUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGoalUsingDelete = function(goalId, callback) {
      var postBody = null;

      // verify the required parameter 'goalId' is set
      if (goalId === undefined || goalId === null) {
        throw new Error("Missing the required parameter 'goalId' when calling deleteGoalUsingDelete");
      }


      var pathParams = {
        'goal_id': goalId
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
        '/goal/{goal_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGoalAllUsingGet operation.
     * @callback module:api/GoalApi~getGoalAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageGoal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all goals
     * Get the details for all goals defined by your firm.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/GoalApi~getGoalAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageGoal}
     */
    this.getGoalAllUsingGet = function(opts, callback) {
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
      var returnType = PageGoal;

      return this.apiClient.callApi(
        '/goal', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGoalAssetSizeAllUsingGet operation.
     * @callback module:api/GoalApi~getGoalAssetSizeAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AvailableDateDoubleVO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List goal asset sizes
     * Get a list of asset sizes per date for a goal for a specified client.
     * @param {String} clientId client_id
     * @param {String} goalId UUID goal_id
     * @param {Object} opts Optional parameters
     * @param {String} opts.currencyConversion Currency Code
     * @param {Date} opts.endDate end date
     * @param {Boolean} opts.getLatest get_latest (default to false)
     * @param {Boolean} opts.portfolioGoal portfolio_goal (default to false)
     * @param {String} opts.sortType sort_type
     * @param {Date} opts.startDate start date
     * @param {module:api/GoalApi~getGoalAssetSizeAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AvailableDateDoubleVO>}
     */
    this.getGoalAssetSizeAllUsingGet = function(clientId, goalId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getGoalAssetSizeAllUsingGet");
      }

      // verify the required parameter 'goalId' is set
      if (goalId === undefined || goalId === null) {
        throw new Error("Missing the required parameter 'goalId' when calling getGoalAssetSizeAllUsingGet");
      }


      var pathParams = {
        'goal_id': goalId
      };
      var queryParams = {
        'client_id': clientId,
        'currency_conversion': opts['currencyConversion'],
        'end_date': opts['endDate'],
        'get_latest': opts['getLatest'],
        'portfolio_goal': opts['portfolioGoal'],
        'sort_type': opts['sortType'],
        'start_date': opts['startDate'],
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
      var returnType = [AvailableDateDoubleVO];

      return this.apiClient.callApi(
        '/goal/{goal_id}/asset_size', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGoalHoldingAllUsingGet operation.
     * @callback module:api/GoalApi~getGoalHoldingAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PortfolioHoldingAgg>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List goal holdings
     * Get the information for all the securities that are currently being held in portfolios associated with a particular goal.
     * @param {String} clientId client_id
     * @param {String} goalId UUID goal_id
     * @param {Object} opts Optional parameters
     * @param {String} opts.currencyConversion Currency Code
     * @param {Date} opts.endDate end date
     * @param {Boolean} opts.portfolioGoal portfolio_goal (default to false)
     * @param {Date} opts.startDate start date
     * @param {module:api/GoalApi~getGoalHoldingAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PortfolioHoldingAgg>}
     */
    this.getGoalHoldingAllUsingGet = function(clientId, goalId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getGoalHoldingAllUsingGet");
      }

      // verify the required parameter 'goalId' is set
      if (goalId === undefined || goalId === null) {
        throw new Error("Missing the required parameter 'goalId' when calling getGoalHoldingAllUsingGet");
      }


      var pathParams = {
        'goal_id': goalId
      };
      var queryParams = {
        'client_id': clientId,
        'currency_conversion': opts['currencyConversion'],
        'end_date': opts['endDate'],
        'portfolio_goal': opts['portfolioGoal'],
        'start_date': opts['startDate'],
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
      var returnType = [PortfolioHoldingAgg];

      return this.apiClient.callApi(
        '/goal/{goal_id}/holding', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGoalTrackAllUsingGet operation.
     * @callback module:api/GoalApi~getGoalTrackAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageGoalTrack} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all goal track records
     * Get information for all goal track records stored for your firm.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.endDate end date 
     * @param {String} opts.filter filter
     * @param {Boolean} opts.getLatest true or false
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {String} opts.startDate start date 
     * @param {module:api/GoalApi~getGoalTrackAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageGoalTrack}
     */
    this.getGoalTrackAllUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'ascending': opts['ascending'],
        'end_date': opts['endDate'],
        'filter': opts['filter'],
        'get_latest': opts['getLatest'],
        'order_by': opts['orderBy'],
        'page': opts['page'],
        'size': opts['size'],
        'start_date': opts['startDate'],
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
      var returnType = PageGoalTrack;

      return this.apiClient.callApi(
        '/goal_track', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGoalTrackUsingGet operation.
     * @callback module:api/GoalApi~getGoalTrackUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GoalTrack} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a goal track record
     * Retrieve the information for a specific goal track record for a goal under a client.
     * @param {String} goalTrackId UUID goal_track_id
     * @param {module:api/GoalApi~getGoalTrackUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GoalTrack}
     */
    this.getGoalTrackUsingGet = function(goalTrackId, callback) {
      var postBody = null;

      // verify the required parameter 'goalTrackId' is set
      if (goalTrackId === undefined || goalTrackId === null) {
        throw new Error("Missing the required parameter 'goalTrackId' when calling getGoalTrackUsingGet");
      }


      var pathParams = {
        'goal_track_id': goalTrackId
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
      var returnType = GoalTrack;

      return this.apiClient.callApi(
        '/goal_track/{goal_track_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGoalTransactionAllUsingGet operation.
     * @callback module:api/GoalApi~getGoalTransactionAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePortfolioTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List goal transactions
     * Get the information for all transactions under portfolios associated with a particular goal.
     * @param {String} clientId client_id
     * @param {String} goalId UUID goal_id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.currencyConversion Currency Code
     * @param {Date} opts.endDate end date
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Boolean} opts.portfolioGoal portfolio_goal (default to false)
     * @param {Number} opts.size size (default to 25)
     * @param {Date} opts.startDate start date
     * @param {module:api/GoalApi~getGoalTransactionAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagePortfolioTransaction}
     */
    this.getGoalTransactionAllUsingGet = function(clientId, goalId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getGoalTransactionAllUsingGet");
      }

      // verify the required parameter 'goalId' is set
      if (goalId === undefined || goalId === null) {
        throw new Error("Missing the required parameter 'goalId' when calling getGoalTransactionAllUsingGet");
      }


      var pathParams = {
        'goal_id': goalId
      };
      var queryParams = {
        'ascending': opts['ascending'],
        'client_id': clientId,
        'currency_conversion': opts['currencyConversion'],
        'end_date': opts['endDate'],
        'order_by': opts['orderBy'],
        'page': opts['page'],
        'portfolio_goal': opts['portfolioGoal'],
        'size': opts['size'],
        'start_date': opts['startDate'],
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
      var returnType = PagePortfolioTransaction;

      return this.apiClient.callApi(
        '/goal/{goal_id}/transaction', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGoalUsingGet operation.
     * @callback module:api/GoalApi~getGoalUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Goal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a goal
     * Retrieve the information for a goal defined for your firm.
     * @param {String} goalId UUID goal_id
     * @param {module:api/GoalApi~getGoalUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Goal}
     */
    this.getGoalUsingGet = function(goalId, callback) {
      var postBody = null;

      // verify the required parameter 'goalId' is set
      if (goalId === undefined || goalId === null) {
        throw new Error("Missing the required parameter 'goalId' when calling getGoalUsingGet");
      }


      var pathParams = {
        'goal_id': goalId
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
      var returnType = Goal;

      return this.apiClient.callApi(
        '/goal/{goal_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGoalTrackUsingPut operation.
     * @callback module:api/GoalApi~updateGoalTrackUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GoalTrack} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a goal track record
     * Update the information for a goal track record.
     * @param {Object} goalTrack goal_track
     * @param {String} goalTrackId UUID goal_track_id
     * @param {module:api/GoalApi~updateGoalTrackUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GoalTrack}
     */
    this.updateGoalTrackUsingPut = function(goalTrack, goalTrackId, callback) {
      var postBody = goalTrack;

      // verify the required parameter 'goalTrack' is set
      if (goalTrack === undefined || goalTrack === null) {
        throw new Error("Missing the required parameter 'goalTrack' when calling updateGoalTrackUsingPut");
      }

      // verify the required parameter 'goalTrackId' is set
      if (goalTrackId === undefined || goalTrackId === null) {
        throw new Error("Missing the required parameter 'goalTrackId' when calling updateGoalTrackUsingPut");
      }


      var pathParams = {
        'goal_track_id': goalTrackId
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
      var returnType = GoalTrack;

      return this.apiClient.callApi(
        '/goal_track/{goal_track_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGoalUsingPut operation.
     * @callback module:api/GoalApi~updateGoalUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Goal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a goal
     * Update a goal defined for your firm.
     * @param {Object} goal goal
     * @param {String} goalId UUID goal_id
     * @param {module:api/GoalApi~updateGoalUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Goal}
     */
    this.updateGoalUsingPut = function(goal, goalId, callback) {
      var postBody = goal;

      // verify the required parameter 'goal' is set
      if (goal === undefined || goal === null) {
        throw new Error("Missing the required parameter 'goal' when calling updateGoalUsingPut");
      }

      // verify the required parameter 'goalId' is set
      if (goalId === undefined || goalId === null) {
        throw new Error("Missing the required parameter 'goalId' when calling updateGoalUsingPut");
      }


      var pathParams = {
        'goal_id': goalId
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
      var returnType = Goal;

      return this.apiClient.callApi(
        '/goal/{goal_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
