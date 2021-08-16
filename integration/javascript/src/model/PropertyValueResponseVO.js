/**
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.1
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
    define(['ApiClient', 'model/ZillowPropertyVendorResponseVO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ZillowPropertyVendorResponseVO'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.PropertyValueResponseVO = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.ZillowPropertyVendorResponseVO);
  }
}(this, function(ApiClient, ZillowPropertyVendorResponseVO) {
  'use strict';




  /**
   * The PropertyValueResponseVO model module.
   * @module model/PropertyValueResponseVO
   * @version 1.3.1
   */

  /**
   * Constructs a new <code>PropertyValueResponseVO</code>.
   * @alias module:model/PropertyValueResponseVO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>PropertyValueResponseVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropertyValueResponseVO} obj Optional instance to populate.
   * @return {module:model/PropertyValueResponseVO} The populated <code>PropertyValueResponseVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('integration_type')) {
        obj['integration_type'] = ApiClient.convertToType(data['integration_type'], 'String');
      }
      if (data.hasOwnProperty('nucleus_business_id')) {
        obj['nucleus_business_id'] = ApiClient.convertToType(data['nucleus_business_id'], 'String');
      }
      if (data.hasOwnProperty('nucleus_client_id')) {
        obj['nucleus_client_id'] = ApiClient.convertToType(data['nucleus_client_id'], 'String');
      }
      if (data.hasOwnProperty('product')) {
        obj['product'] = ApiClient.convertToType(data['product'], 'String');
      }
      if (data.hasOwnProperty('vendor_name')) {
        obj['vendor_name'] = ApiClient.convertToType(data['vendor_name'], 'String');
      }
      if (data.hasOwnProperty('vendor_response')) {
        obj['vendor_response'] = ZillowPropertyVendorResponseVO.constructFromObject(data['vendor_response']);
      }
    }
    return obj;
  }

  /**
   * @member {String} integration_type
   */
  exports.prototype['integration_type'] = undefined;
  /**
   * @member {String} nucleus_business_id
   */
  exports.prototype['nucleus_business_id'] = undefined;
  /**
   * @member {String} nucleus_client_id
   */
  exports.prototype['nucleus_client_id'] = undefined;
  /**
   * @member {String} product
   */
  exports.prototype['product'] = undefined;
  /**
   * @member {String} vendor_name
   */
  exports.prototype['vendor_name'] = undefined;
  /**
   * @member {module:model/ZillowPropertyVendorResponseVO} vendor_response
   */
  exports.prototype['vendor_response'] = undefined;



  return exports;
}));


