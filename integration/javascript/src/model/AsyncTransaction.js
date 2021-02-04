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
    root.HydrogenIntegrationApi.AsyncTransaction = factory(root.HydrogenIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AsyncTransaction model module.
   * @module model/AsyncTransaction
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>AsyncTransaction</code>.
   * @alias module:model/AsyncTransaction
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AsyncTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AsyncTransaction} obj Optional instance to populate.
   * @return {module:model/AsyncTransaction} The populated <code>AsyncTransaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('create_date'))
        obj.createDate = ApiClient.convertToType(data['create_date'], 'Date');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('response'))
        obj.response = ApiClient.convertToType(data['response'], Object);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('update_date'))
        obj.updateDate = ApiClient.convertToType(data['update_date'], 'Date');
    }
    return obj;
  }

  /**
   * @member {Date} createDate
   */
  exports.prototype.createDate = undefined;

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Object} response
   */
  exports.prototype.response = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Date} updateDate
   */
  exports.prototype.updateDate = undefined;


  return exports;

}));
