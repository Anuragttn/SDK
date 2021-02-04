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
    define(['ApiClient', 'model/Sort'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Sort'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.Pageobject = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.Sort);
  }
}(this, function(ApiClient, Sort) {
  'use strict';

  /**
   * The Pageobject model module.
   * @module model/Pageobject
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>Pageobject</code>.
   * Page Object
   * @alias module:model/Pageobject
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Pageobject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pageobject} obj Optional instance to populate.
   * @return {module:model/Pageobject} The populated <code>Pageobject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], [Object]);
      if (data.hasOwnProperty('first'))
        obj.first = ApiClient.convertToType(data['first'], 'Boolean');
      if (data.hasOwnProperty('last'))
        obj.last = ApiClient.convertToType(data['last'], 'Boolean');
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'Number');
      if (data.hasOwnProperty('number_of_elements'))
        obj.numberOfElements = ApiClient.convertToType(data['number_of_elements'], 'Number');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('sort'))
        obj.sort = ApiClient.convertToType(data['sort'], [Sort]);
      if (data.hasOwnProperty('total_elements'))
        obj.totalElements = ApiClient.convertToType(data['total_elements'], 'Number');
      if (data.hasOwnProperty('total_pages'))
        obj.totalPages = ApiClient.convertToType(data['total_pages'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Array.<Object>} content
   */
  exports.prototype.content = undefined;

  /**
   * @member {Boolean} first
   */
  exports.prototype.first = undefined;

  /**
   * @member {Boolean} last
   */
  exports.prototype.last = undefined;

  /**
   * @member {Number} _number
   */
  exports.prototype._number = undefined;

  /**
   * @member {Number} numberOfElements
   */
  exports.prototype.numberOfElements = undefined;

  /**
   * @member {Number} size
   */
  exports.prototype.size = undefined;

  /**
   * @member {Array.<module:model/Sort>} sort
   */
  exports.prototype.sort = undefined;

  /**
   * @member {Number} totalElements
   */
  exports.prototype.totalElements = undefined;

  /**
   * @member {Number} totalPages
   */
  exports.prototype.totalPages = undefined;


  return exports;

}));
