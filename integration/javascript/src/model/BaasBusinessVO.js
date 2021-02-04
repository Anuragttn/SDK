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
    define(['ApiClient', 'model/BusinessVendorRequestDataVO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BusinessVendorRequestDataVO'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.BaasBusinessVO = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.BusinessVendorRequestDataVO);
  }
}(this, function(ApiClient, BusinessVendorRequestDataVO) {
  'use strict';

  /**
   * The BaasBusinessVO model module.
   * @module model/BaasBusinessVO
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>BaasBusinessVO</code>.
   * @alias module:model/BaasBusinessVO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BaasBusinessVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaasBusinessVO} obj Optional instance to populate.
   * @return {module:model/BaasBusinessVO} The populated <code>BaasBusinessVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('nucleus_business_id'))
        obj.nucleusBusinessId = ApiClient.convertToType(data['nucleus_business_id'], 'String');
      if (data.hasOwnProperty('nucleus_document_id'))
        obj.nucleusDocumentId = ApiClient.convertToType(data['nucleus_document_id'], ['String']);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('vendor_name'))
        obj.vendorName = ApiClient.convertToType(data['vendor_name'], 'String');
      if (data.hasOwnProperty('vendor_request_data'))
        obj.vendorRequestData = BusinessVendorRequestDataVO.constructFromObject(data['vendor_request_data']);
      if (data.hasOwnProperty('vendor_response'))
        obj.vendorResponse = ApiClient.convertToType(data['vendor_response'], Object);
    }
    return obj;
  }

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * @member {String} nucleusBusinessId
   */
  exports.prototype.nucleusBusinessId = undefined;

  /**
   * @member {Array.<String>} nucleusDocumentId
   */
  exports.prototype.nucleusDocumentId = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} vendorName
   */
  exports.prototype.vendorName = undefined;

  /**
   * @member {module:model/BusinessVendorRequestDataVO} vendorRequestData
   */
  exports.prototype.vendorRequestData = undefined;

  /**
   * @member {Object} vendorResponse
   */
  exports.prototype.vendorResponse = undefined;


  return exports;

}));
