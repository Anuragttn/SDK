/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BacktestRequest', 'model/EventStudyRequest', 'model/MonteCarloRequest', 'model/PortfolioWhatIfRequest', 'model/SavingsCalculatorRequest', 'model/ScenarioAnalysisRequest', 'model/SensitivityAnalysisRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BacktestRequest'), require('../model/EventStudyRequest'), require('../model/MonteCarloRequest'), require('../model/PortfolioWhatIfRequest'), require('../model/SavingsCalculatorRequest'), require('../model/ScenarioAnalysisRequest'), require('../model/SensitivityAnalysisRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.SimulationsApi = factory(root.HydrogenProtonApi.ApiClient, root.HydrogenProtonApi.BacktestRequest, root.HydrogenProtonApi.EventStudyRequest, root.HydrogenProtonApi.MonteCarloRequest, root.HydrogenProtonApi.PortfolioWhatIfRequest, root.HydrogenProtonApi.SavingsCalculatorRequest, root.HydrogenProtonApi.ScenarioAnalysisRequest, root.HydrogenProtonApi.SensitivityAnalysisRequest);
  }
}(this, function(ApiClient, BacktestRequest, EventStudyRequest, MonteCarloRequest, PortfolioWhatIfRequest, SavingsCalculatorRequest, ScenarioAnalysisRequest, SensitivityAnalysisRequest) {
  'use strict';

  /**
   * Simulations service.
   * @module api/SimulationsApi
   * @version 1.8.0
   */

  /**
   * Constructs a new SimulationsApi. 
   * @alias module:api/SimulationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the backtest operation.
     * @callback module:api/SimulationsApi~backtestCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Backtest
     * Run a historical analysis for a group of investments
     * @param {module:model/BacktestRequest} backtestRequest Request payload for Backtest
     * @param {module:api/SimulationsApi~backtestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {'String': Object}>}
     */
    this.backtest = function(backtestRequest, callback) {
      var postBody = backtestRequest;

      // verify the required parameter 'backtestRequest' is set
      if (backtestRequest === undefined || backtestRequest === null) {
        throw new Error("Missing the required parameter 'backtestRequest' when calling backtest");
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
      var accepts = ['application/json'];
      var returnType = {'String': Object};

      return this.apiClient.callApi(
        '/backtest', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventStudy operation.
     * @callback module:api/SimulationsApi~eventStudyCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Event Study
     * Analyze a group of investments against key historical events
     * @param {module:model/EventStudyRequest} eventStudyRequest Request payload for Event Study
     * @param {module:api/SimulationsApi~eventStudyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {'String': Object}>}
     */
    this.eventStudy = function(eventStudyRequest, callback) {
      var postBody = eventStudyRequest;

      // verify the required parameter 'eventStudyRequest' is set
      if (eventStudyRequest === undefined || eventStudyRequest === null) {
        throw new Error("Missing the required parameter 'eventStudyRequest' when calling eventStudy");
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
      var accepts = ['application/json'];
      var returnType = {'String': Object};

      return this.apiClient.callApi(
        '/event_study', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the monteCarlo operation.
     * @callback module:api/SimulationsApi~monteCarloCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Monte Carlo
     * Simulate the future growth of a group of investments
     * @param {module:model/MonteCarloRequest} monteCarloRequest Request payload for Monte Carlo
     * @param {module:api/SimulationsApi~monteCarloCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {'String': Object}>}
     */
    this.monteCarlo = function(monteCarloRequest, callback) {
      var postBody = monteCarloRequest;

      // verify the required parameter 'monteCarloRequest' is set
      if (monteCarloRequest === undefined || monteCarloRequest === null) {
        throw new Error("Missing the required parameter 'monteCarloRequest' when calling monteCarlo");
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
      var accepts = ['application/json'];
      var returnType = {'String': Object};

      return this.apiClient.callApi(
        '/monte_carlo', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the portfolioWhatIf operation.
     * @callback module:api/SimulationsApi~portfolioWhatIfCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Porfolio What-If
     * Simulate the impact of adding, removing, reducing, or increasing various positions in a group of investments
     * @param {module:model/PortfolioWhatIfRequest} portfolioWhatIfRequest Request payload for Portfolio What-If
     * @param {module:api/SimulationsApi~portfolioWhatIfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {'String': Object}>}
     */
    this.portfolioWhatIf = function(portfolioWhatIfRequest, callback) {
      var postBody = portfolioWhatIfRequest;

      // verify the required parameter 'portfolioWhatIfRequest' is set
      if (portfolioWhatIfRequest === undefined || portfolioWhatIfRequest === null) {
        throw new Error("Missing the required parameter 'portfolioWhatIfRequest' when calling portfolioWhatIf");
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
      var accepts = ['application/json'];
      var returnType = {'String': Object};

      return this.apiClient.callApi(
        '/portfolio_what_if', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the savingsCalculator operation.
     * @callback module:api/SimulationsApi~savingsCalculatorCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Savings Calculator
     * Simulate the future growth of a simple savings account
     * @param {module:model/SavingsCalculatorRequest} savingsCalculatorRequest Request payload for Savings Calculator
     * @param {module:api/SimulationsApi~savingsCalculatorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {'String': Object}>}
     */
    this.savingsCalculator = function(savingsCalculatorRequest, callback) {
      var postBody = savingsCalculatorRequest;

      // verify the required parameter 'savingsCalculatorRequest' is set
      if (savingsCalculatorRequest === undefined || savingsCalculatorRequest === null) {
        throw new Error("Missing the required parameter 'savingsCalculatorRequest' when calling savingsCalculator");
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
      var accepts = ['application/json'];
      var returnType = {'String': Object};

      return this.apiClient.callApi(
        '/savings_calculator', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scenarioAnalysis operation.
     * @callback module:api/SimulationsApi~scenarioAnalysisCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Scenario Analysis
     * Analyze a group of investments against a series of external economic factors
     * @param {module:model/ScenarioAnalysisRequest} scnearioAnalysisRequest Request payload for Scenario Analysis
     * @param {module:api/SimulationsApi~scenarioAnalysisCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {'String': Object}>}
     */
    this.scenarioAnalysis = function(scnearioAnalysisRequest, callback) {
      var postBody = scnearioAnalysisRequest;

      // verify the required parameter 'scnearioAnalysisRequest' is set
      if (scnearioAnalysisRequest === undefined || scnearioAnalysisRequest === null) {
        throw new Error("Missing the required parameter 'scnearioAnalysisRequest' when calling scenarioAnalysis");
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
      var accepts = ['application/json'];
      var returnType = {'String': Object};

      return this.apiClient.callApi(
        '/scenario_analysis', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensitivityAnalysis operation.
     * @callback module:api/SimulationsApi~sensitivityAnalysisCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sensitivity Analysis
     * Analyze a group of investments against an external economic factor
     * @param {module:model/SensitivityAnalysisRequest} sensitivityAnalysisRequest Request payload for Sensitivity Analysis
     * @param {module:api/SimulationsApi~sensitivityAnalysisCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {'String': Object}>}
     */
    this.sensitivityAnalysis = function(sensitivityAnalysisRequest, callback) {
      var postBody = sensitivityAnalysisRequest;

      // verify the required parameter 'sensitivityAnalysisRequest' is set
      if (sensitivityAnalysisRequest === undefined || sensitivityAnalysisRequest === null) {
        throw new Error("Missing the required parameter 'sensitivityAnalysisRequest' when calling sensitivityAnalysis");
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
      var accepts = ['application/json'];
      var returnType = {'String': Object};

      return this.apiClient.callApi(
        '/sensitivity_analysis', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
