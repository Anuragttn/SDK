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
    root.atom_api.SubscribeAccountResponseInner = factory(root.atom_api.ApiClient, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, SecondaryId) {
  'use strict';




  /**
   * The SubscribeAccountResponseInner model module.
   * @module model/SubscribeAccountResponseInner
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>SubscribeAccountResponseInner</code>.
   * @alias module:model/SubscribeAccountResponseInner
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>SubscribeAccountResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscribeAccountResponseInner} obj Optional instance to populate.
   * @return {module:model/SubscribeAccountResponseInner} The populated <code>SubscribeAccountResponseInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('model_id')) {
        obj['model_id'] = ApiClient.convertToType(data['model_id'], 'String');
      }
      if (data.hasOwnProperty('percentage')) {
        obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = SecondaryId.constructFromObject(data['secondary_id']);
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of the portfolio
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name of the portfolio such as “Stock”
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The ID of the account to which the portfolio belongs
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * The ID of the model to which the portfolio subscribes
   * @member {String} model_id
   */
  exports.prototype['model_id'] = undefined;
  /**
   * Weight of the portfolio as a percentage of an account based on the weight of the portfolio’s model within the account’s allocation; ex. 20 representing 20%. If the account only has one portfolio input 100
   * @member {Number} percentage
   */
  exports.prototype['percentage'] = undefined;
  /**
   * Description for the portfolio such as “Stock Portfolio”
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Custom information associated with the portfolio in the format key:value
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {module:model/SecondaryId} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * Timestamp for the date and time that the record was created
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * Timestamp for the date and time that the record was last updated
   * @member {String} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


