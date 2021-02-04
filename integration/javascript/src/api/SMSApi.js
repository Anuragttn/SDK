/**
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
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
    define(['ApiClient', 'model/SMS', 'model/SMSResponseVO', 'model/SMSVO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SMS'), require('../model/SMSResponseVO'), require('../model/SMSVO'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.SMSApi = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.SMS, root.HydrogenIntegrationApi.SMSResponseVO, root.HydrogenIntegrationApi.SMSVO);
  }
}(this, function(ApiClient, SMS, SMSResponseVO, SMSVO) {
  'use strict';

  /**
   * SMS service.
   * @module api/SMSApi
   * @version 1.2.1
   */

  /**
   * Constructs a new SMSApi. 
   * @alias module:api/SMSApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getVendorCallLimit operation.
     * @callback module:api/SMSApi~getVendorCallLimitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SMS} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch details for corresponding sms_id
     * Fetch details for corresponding sms_id
     * @param {String} smsId sms_id
     * @param {module:api/SMSApi~getVendorCallLimitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SMS}
     */
    this.getVendorCallLimit = function(smsId, callback) {
      var postBody = null;

      // verify the required parameter 'smsId' is set
      if (smsId === undefined || smsId === null) {
        throw new Error("Missing the required parameter 'smsId' when calling getVendorCallLimit");
      }


      var pathParams = {
        'sms_id': smsId
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
      var returnType = SMS;

      return this.apiClient.callApi(
        '/sms/status/{sms_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendMail operation.
     * @callback module:api/SMSApi~sendMailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SMSResponseVO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send SMS to recipient
     * Send SMS to recipient
     * @param {module:model/SMSVO} smsVO smsVO
     * @param {module:api/SMSApi~sendMailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SMSResponseVO}
     */
    this.sendMail = function(smsVO, callback) {
      var postBody = smsVO;

      // verify the required parameter 'smsVO' is set
      if (smsVO === undefined || smsVO === null) {
        throw new Error("Missing the required parameter 'smsVO' when calling sendMail");
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
      var returnType = SMSResponseVO;

      return this.apiClient.callApi(
        '/sms', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
