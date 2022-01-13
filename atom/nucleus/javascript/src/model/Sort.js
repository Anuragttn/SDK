/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.5
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.Sort = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Sort model module.
   * @module model/Sort
   * @version 1.9.5
   */

  /**
   * Constructs a new <code>Sort</code>.
   * Sort Object
   * @alias module:model/Sort
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Sort</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Sort} obj Optional instance to populate.
   * @return {module:model/Sort} The populated <code>Sort</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ascending')) {
        obj['ascending'] = ApiClient.convertToType(data['ascending'], 'Boolean');
      }
      if (data.hasOwnProperty('descending')) {
        obj['descending'] = ApiClient.convertToType(data['descending'], 'Boolean');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('ignore_case')) {
        obj['ignore_case'] = ApiClient.convertToType(data['ignore_case'], 'Boolean');
      }
      if (data.hasOwnProperty('null_handling')) {
        obj['null_handling'] = ApiClient.convertToType(data['null_handling'], 'String');
      }
      if (data.hasOwnProperty('property')) {
        obj['property'] = ApiClient.convertToType(data['property'], 'String');
      }
    }
    return obj;
  }

  /**
   * ascending
   * @member {Boolean} ascending
   */
  exports.prototype['ascending'] = undefined;
  /**
   * descending
   * @member {Boolean} descending
   */
  exports.prototype['descending'] = undefined;
  /**
   * direction
   * @member {String} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * ignoreCase
   * @member {Boolean} ignore_case
   */
  exports.prototype['ignore_case'] = undefined;
  /**
   * nullHandling
   * @member {String} null_handling
   */
  exports.prototype['null_handling'] = undefined;
  /**
   * property
   * @member {String} property
   */
  exports.prototype['property'] = undefined;



  return exports;
}));


