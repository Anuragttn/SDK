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
    define(['ApiClient', 'model/Feature', 'model/FeatureTrack', 'model/PageFeature', 'model/PageFeatureTrack'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Feature'), require('../model/FeatureTrack'), require('../model/PageFeature'), require('../model/PageFeatureTrack'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.FeatureApi = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.Feature, root.HydrogenNucleusApi.FeatureTrack, root.HydrogenNucleusApi.PageFeature, root.HydrogenNucleusApi.PageFeatureTrack);
  }
}(this, function(ApiClient, Feature, FeatureTrack, PageFeature, PageFeatureTrack) {
  'use strict';

  /**
   * Feature service.
   * @module api/FeatureApi
   * @version 1.8.0
   */

  /**
   * Constructs a new FeatureApi. 
   * @alias module:api/FeatureApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createFeatureTrackUsingPost operation.
     * @callback module:api/FeatureApi~createFeatureTrackUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeatureTrack} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Feature Track
     * Create a new feature track.
     * @param {module:model/FeatureTrack} featureTrack featureTrack
     * @param {module:api/FeatureApi~createFeatureTrackUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeatureTrack}
     */
    this.createFeatureTrackUsingPost = function(featureTrack, callback) {
      var postBody = featureTrack;

      // verify the required parameter 'featureTrack' is set
      if (featureTrack === undefined || featureTrack === null) {
        throw new Error("Missing the required parameter 'featureTrack' when calling createFeatureTrackUsingPost");
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
      var returnType = FeatureTrack;

      return this.apiClient.callApi(
        '/feature_track', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createFeatureUsingPost operation.
     * @callback module:api/FeatureApi~createFeatureUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Feature} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a  Feature
     * Create a new feature.
     * @param {module:model/Feature} feature feature
     * @param {module:api/FeatureApi~createFeatureUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Feature}
     */
    this.createFeatureUsingPost = function(feature, callback) {
      var postBody = feature;

      // verify the required parameter 'feature' is set
      if (feature === undefined || feature === null) {
        throw new Error("Missing the required parameter 'feature' when calling createFeatureUsingPost");
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
      var returnType = Feature;

      return this.apiClient.callApi(
        '/feature', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFeatureTrackUsingDelete operation.
     * @callback module:api/FeatureApi~deleteFeatureTrackUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Feature Track
     * Permanently delete a feature track registered with your firm.
     * @param {String} featureTrackId UUID feature_track_id
     * @param {module:api/FeatureApi~deleteFeatureTrackUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFeatureTrackUsingDelete = function(featureTrackId, callback) {
      var postBody = null;

      // verify the required parameter 'featureTrackId' is set
      if (featureTrackId === undefined || featureTrackId === null) {
        throw new Error("Missing the required parameter 'featureTrackId' when calling deleteFeatureTrackUsingDelete");
      }


      var pathParams = {
        'feature_track_id': featureTrackId
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
        '/feature_track/{feature_track_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFeatureUsingDelete operation.
     * @callback module:api/FeatureApi~deleteFeatureUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Feature
     * Permanently delete a  feature registered with your firm.
     * @param {String} featureId UUID feature_id
     * @param {module:api/FeatureApi~deleteFeatureUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFeatureUsingDelete = function(featureId, callback) {
      var postBody = null;

      // verify the required parameter 'featureId' is set
      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling deleteFeatureUsingDelete");
      }


      var pathParams = {
        'feature_id': featureId
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
        '/feature/{feature_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFeatureAllUsingGet operation.
     * @callback module:api/FeatureApi~getFeatureAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageFeature} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Feature
     * Get details for all features.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/FeatureApi~getFeatureAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageFeature}
     */
    this.getFeatureAllUsingGet = function(opts, callback) {
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
      var returnType = PageFeature;

      return this.apiClient.callApi(
        '/feature', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFeatureTrackAllUsingGet operation.
     * @callback module:api/FeatureApi~getFeatureTrackAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageFeatureTrack} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Feature track
     * Get details for all feature track.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/FeatureApi~getFeatureTrackAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageFeatureTrack}
     */
    this.getFeatureTrackAllUsingGet = function(opts, callback) {
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
      var returnType = PageFeatureTrack;

      return this.apiClient.callApi(
        '/feature_track', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFeatureTrackUsingGet operation.
     * @callback module:api/FeatureApi~getFeatureTrackUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeatureTrack} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Feature track
     * Retrieve the information for a Feature track.
     * @param {String} featureTrackId UUID feature_track_id
     * @param {module:api/FeatureApi~getFeatureTrackUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeatureTrack}
     */
    this.getFeatureTrackUsingGet = function(featureTrackId, callback) {
      var postBody = null;

      // verify the required parameter 'featureTrackId' is set
      if (featureTrackId === undefined || featureTrackId === null) {
        throw new Error("Missing the required parameter 'featureTrackId' when calling getFeatureTrackUsingGet");
      }


      var pathParams = {
        'feature_track_id': featureTrackId
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
      var returnType = FeatureTrack;

      return this.apiClient.callApi(
        '/feature_track/{feature_track_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFeatureUsingGet operation.
     * @callback module:api/FeatureApi~getFeatureUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Feature} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Feature
     * Retrieve the information for a Feature.
     * @param {String} featureId UUID feature_id
     * @param {module:api/FeatureApi~getFeatureUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Feature}
     */
    this.getFeatureUsingGet = function(featureId, callback) {
      var postBody = null;

      // verify the required parameter 'featureId' is set
      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling getFeatureUsingGet");
      }


      var pathParams = {
        'feature_id': featureId
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
      var returnType = Feature;

      return this.apiClient.callApi(
        '/feature/{feature_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFeatureTrackUsingPut operation.
     * @callback module:api/FeatureApi~updateFeatureTrackUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeatureTrack} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Feature Track
     * Update the information for a Feature track registered with your firm.
     * @param {Object} featureTrack feature_track
     * @param {String} featureTrackId UUID feature_track_id
     * @param {module:api/FeatureApi~updateFeatureTrackUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeatureTrack}
     */
    this.updateFeatureTrackUsingPut = function(featureTrack, featureTrackId, callback) {
      var postBody = featureTrack;

      // verify the required parameter 'featureTrack' is set
      if (featureTrack === undefined || featureTrack === null) {
        throw new Error("Missing the required parameter 'featureTrack' when calling updateFeatureTrackUsingPut");
      }

      // verify the required parameter 'featureTrackId' is set
      if (featureTrackId === undefined || featureTrackId === null) {
        throw new Error("Missing the required parameter 'featureTrackId' when calling updateFeatureTrackUsingPut");
      }


      var pathParams = {
        'feature_track_id': featureTrackId
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
      var returnType = FeatureTrack;

      return this.apiClient.callApi(
        '/feature_track/{feature_track_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFeatureUsingPut operation.
     * @callback module:api/FeatureApi~updateFeatureUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Feature} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Feature
     * Update the information for a Feature registered with your firm.
     * @param {Object} feature feature
     * @param {String} featureId UUID feature_id
     * @param {module:api/FeatureApi~updateFeatureUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Feature}
     */
    this.updateFeatureUsingPut = function(feature, featureId, callback) {
      var postBody = feature;

      // verify the required parameter 'feature' is set
      if (feature === undefined || feature === null) {
        throw new Error("Missing the required parameter 'feature' when calling updateFeatureUsingPut");
      }

      // verify the required parameter 'featureId' is set
      if (featureId === undefined || featureId === null) {
        throw new Error("Missing the required parameter 'featureId' when calling updateFeatureUsingPut");
      }


      var pathParams = {
        'feature_id': featureId
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
      var returnType = Feature;

      return this.apiClient.callApi(
        '/feature/{feature_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
