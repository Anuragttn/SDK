/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NodePayload', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodePayload'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.CreateNodeResponse = factory(root.atom_api.ApiClient, root.atom_api.NodePayload, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, NodePayload, SecondaryId) {
  'use strict';




  /**
   * The CreateNodeResponse model module.
   * @module model/CreateNodeResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateNodeResponse</code>.
   * @alias module:model/CreateNodeResponse
   * @class
   * @implements module:model/NodePayload
   * @param name {String} Name of the node
   * @param questionId {String} The ID of the question that corresponds to this node
   */
  var exports = function(name, questionId) {
    var _this = this;

    NodePayload.call(_this, name, questionId);


  };

  /**
   * Constructs a <code>CreateNodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateNodeResponse} obj Optional instance to populate.
   * @return {module:model/CreateNodeResponse} The populated <code>CreateNodeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      NodePayload.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the node
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Datetime the node was created
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;

  // Implement NodePayload interface:
  /**
   * Name of the node
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * The ID of the question that corresponds to this node
   * @member {String} question_id
   */
exports.prototype['question_id'] = undefined;

  /**
   * Indicates if this is the first node of the decision tree. Defaults to false meaning it is not the first node
   * @member {Boolean} is_first
   * @default false
   */
exports.prototype['is_first'] = false;

  /**
   * @member {module:model/SecondaryId} secondary_id
   */
exports.prototype['secondary_id'] = undefined;



  return exports;
}));

