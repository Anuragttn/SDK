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
    define(['ApiClient', 'model/ClientVendorRequestDataVO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientVendorRequestDataVO'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.Ownership = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.ClientVendorRequestDataVO);
  }
}(this, function(ApiClient, ClientVendorRequestDataVO) {
  'use strict';

  /**
   * The Ownership model module.
   * @module model/Ownership
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>Ownership</code>.
   * @alias module:model/Ownership
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Ownership</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ownership} obj Optional instance to populate.
   * @return {module:model/Ownership} The populated <code>Ownership</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('client'))
        obj.client = ClientVendorRequestDataVO.constructFromObject(data['client']);
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/ClientVendorRequestDataVO} client
   */
  exports.prototype.client = undefined;

  /**
   * @member {String} role
   */
  exports.prototype.role = undefined;


  return exports;

}));
