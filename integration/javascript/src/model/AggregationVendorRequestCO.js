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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.AggregationVendorRequestCO = factory(root.HydrogenIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AggregationVendorRequestCO model module.
   * @module model/AggregationVendorRequestCO
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>AggregationVendorRequestCO</code>.
   * @alias module:model/AggregationVendorRequestCO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AggregationVendorRequestCO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregationVendorRequestCO} obj Optional instance to populate.
   * @return {module:model/AggregationVendorRequestCO} The populated <code>AggregationVendorRequestCO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('item_id'))
        obj.itemId = ApiClient.convertToType(data['item_id'], 'String');
      if (data.hasOwnProperty('member_id'))
        obj.memberId = ApiClient.convertToType(data['member_id'], 'String');
      if (data.hasOwnProperty('nucleus_account_id'))
        obj.nucleusAccountId = ApiClient.convertToType(data['nucleus_account_id'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} itemId
   */
  exports.prototype.itemId = undefined;

  /**
   * @member {String} memberId
   */
  exports.prototype.memberId = undefined;

  /**
   * @member {String} nucleusAccountId
   */
  exports.prototype.nucleusAccountId = undefined;


  return exports;

}));
