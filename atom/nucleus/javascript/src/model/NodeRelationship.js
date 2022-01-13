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
    root.HydrogenNucleusApi.NodeRelationship = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NodeRelationship model module.
   * @module model/NodeRelationship
   * @version 1.9.5
   */

  /**
   * Constructs a new <code>NodeRelationship</code>.
   * NodeRelationship Object
   * @alias module:model/NodeRelationship
   * @class
   * @param answerId {String} answer_id
   * @param decisionTreeId {String} decision_tree_id
   * @param nodeParentId {String} nodeParentId
   * @param value {String} value
   */
  var exports = function(answerId, decisionTreeId, nodeParentId, value) {
    var _this = this;

    _this['answer_id'] = answerId;

    _this['decision_tree_id'] = decisionTreeId;




    _this['node_parent_id'] = nodeParentId;


    _this['value'] = value;
  };

  /**
   * Constructs a <code>NodeRelationship</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeRelationship} obj Optional instance to populate.
   * @return {module:model/NodeRelationship} The populated <code>NodeRelationship</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('answer_id')) {
        obj['answer_id'] = ApiClient.convertToType(data['answer_id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('decision_tree_id')) {
        obj['decision_tree_id'] = ApiClient.convertToType(data['decision_tree_id'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_leaf')) {
        obj['is_leaf'] = ApiClient.convertToType(data['is_leaf'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('node_child_id')) {
        obj['node_child_id'] = ApiClient.convertToType(data['node_child_id'], 'String');
      }
      if (data.hasOwnProperty('node_parent_id')) {
        obj['node_parent_id'] = ApiClient.convertToType(data['node_parent_id'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * answer_id
   * @member {String} answer_id
   */
  exports.prototype['answer_id'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * decision_tree_id
   * @member {String} decision_tree_id
   */
  exports.prototype['decision_tree_id'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * is_leaf
   * @member {Boolean} is_leaf
   */
  exports.prototype['is_leaf'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * nodeChildId
   * @member {String} node_child_id
   */
  exports.prototype['node_child_id'] = undefined;
  /**
   * nodeParentId
   * @member {String} node_parent_id
   */
  exports.prototype['node_parent_id'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;
  /**
   * value
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


