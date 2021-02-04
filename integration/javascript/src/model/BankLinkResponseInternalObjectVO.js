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
    define(['ApiClient', 'model/BankLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BankLink'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.BankLinkResponseInternalObjectVO = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.BankLink);
  }
}(this, function(ApiClient, BankLink) {
  'use strict';

  /**
   * The BankLinkResponseInternalObjectVO model module.
   * @module model/BankLinkResponseInternalObjectVO
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>BankLinkResponseInternalObjectVO</code>.
   * @alias module:model/BankLinkResponseInternalObjectVO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BankLinkResponseInternalObjectVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BankLinkResponseInternalObjectVO} obj Optional instance to populate.
   * @return {module:model/BankLinkResponseInternalObjectVO} The populated <code>BankLinkResponseInternalObjectVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('nucleus_bank_link'))
        obj.nucleusBankLink = BankLink.constructFromObject(data['nucleus_bank_link']);
      if (data.hasOwnProperty('status_code'))
        obj.statusCode = ApiClient.convertToType(data['status_code'], 'Number');
    }
    return obj;
  }

  /**
   * @member {module:model/BankLink} nucleusBankLink
   */
  exports.prototype.nucleusBankLink = undefined;

  /**
   * @member {Number} statusCode
   */
  exports.prototype.statusCode = undefined;


  return exports;

}));
