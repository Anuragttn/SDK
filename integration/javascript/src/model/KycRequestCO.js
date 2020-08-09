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
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Mapstringobject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Mapstringobject'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.KycRequestCO = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.Mapstringobject);
  }
}(this, function(ApiClient, Mapstringobject) {
  'use strict';

  /**
   * The KycRequestCO model module.
   * @module model/KycRequestCO
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>KycRequestCO</code>.
   * @alias module:model/KycRequestCO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>KycRequestCO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KycRequestCO} obj Optional instance to populate.
   * @return {module:model/KycRequestCO} The populated <code>KycRequestCO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('auth_token'))
        obj.authToken = ApiClient.convertToType(data['auth_token'], 'String');
      if (data.hasOwnProperty('doc_type'))
        obj.docType = ApiClient.convertToType(data['doc_type'], 'String');
      if (data.hasOwnProperty('electron_document_id'))
        obj.electronDocumentId = ApiClient.convertToType(data['electron_document_id'], 'String');
      if (data.hasOwnProperty('kyc_type'))
        obj.kycType = ApiClient.convertToType(data['kyc_type'], 'String');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], [Mapstringobject]);
      if (data.hasOwnProperty('nucleus_client_id'))
        obj.nucleusClientId = ApiClient.convertToType(data['nucleus_client_id'], 'String');
      if (data.hasOwnProperty('product'))
        obj.product = ApiClient.convertToType(data['product'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} authToken
   */
  exports.prototype.authToken = undefined;

  /**
   * @member {String} docType
   */
  exports.prototype.docType = undefined;

  /**
   * @member {String} electronDocumentId
   */
  exports.prototype.electronDocumentId = undefined;

  /**
   * @member {String} kycType
   */
  exports.prototype.kycType = undefined;

  /**
   * @member {Array.<module:model/Mapstringobject>} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {String} nucleusClientId
   */
  exports.prototype.nucleusClientId = undefined;

  /**
   * @member {String} product
   */
  exports.prototype.product = undefined;

  return exports;

}));