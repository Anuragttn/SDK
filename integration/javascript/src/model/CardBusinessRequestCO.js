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
    root.HydrogenIntegrationApi.CardBusinessRequestCO = factory(root.HydrogenIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CardBusinessRequestCO model module.
   * @module model/CardBusinessRequestCO
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>CardBusinessRequestCO</code>.
   * @alias module:model/CardBusinessRequestCO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CardBusinessRequestCO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CardBusinessRequestCO} obj Optional instance to populate.
   * @return {module:model/CardBusinessRequestCO} The populated <code>CardBusinessRequestCO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('nucleus_business_id'))
        obj.nucleusBusinessId = ApiClient.convertToType(data['nucleus_business_id'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} nucleusBusinessId
   */
  exports.prototype.nucleusBusinessId = undefined;


  return exports;

}));
