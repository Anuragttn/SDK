/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.ModelPayload = factory(root.atom_api.ApiClient, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, SecondaryId) {
  'use strict';




  /**
   * The ModelPayload model module.
   * @module model/ModelPayload
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>ModelPayload</code>.
   * @alias module:model/ModelPayload
   * @class
   * @param name {String} Name of the model usually used to indicate what is included in the model
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;








  };

  /**
   * Constructs a <code>ModelPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelPayload} obj Optional instance to populate.
   * @return {module:model/ModelPayload} The populated <code>ModelPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('node_map')) {
        obj['node_map'] = ApiClient.convertToType(data['node_map'], ['String']);
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = SecondaryId.constructFromObject(data['secondary_id']);
      }
    }
    return obj;
  }

  /**
   * Name of the model usually used to indicate what is included in the model
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Category that the model falls under such as “Tech”
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * Description of what types of investments are represented in the model
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * If the model is to be used by a specific client such as an advisor, the ID of the client
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Array.<String>} node_map
   */
  exports.prototype['node_map'] = undefined;
  /**
   * Alphabetic currency code for the base currency of the model, limited to 3 characters
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * Indicates for whether or not the model is active. Defaults to true which indicates that it is currently active
   * @member {Boolean} is_active
   * @default true
   */
  exports.prototype['is_active'] = true;
  /**
   * Custom information associated with the model in the format key:value.
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {module:model/SecondaryId} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;



  return exports;
}));


