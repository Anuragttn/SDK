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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.ClientHoldingsResponseInner = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClientHoldingsResponseInner model module.
   * @module model/ClientHoldingsResponseInner
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>ClientHoldingsResponseInner</code>.
   * @alias module:model/ClientHoldingsResponseInner
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ClientHoldingsResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientHoldingsResponseInner} obj Optional instance to populate.
   * @return {module:model/ClientHoldingsResponseInner} The populated <code>ClientHoldingsResponseInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('security_id')) {
        obj['security_id'] = ApiClient.convertToType(data['security_id'], 'String');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('shares')) {
        obj['shares'] = ApiClient.convertToType(data['shares'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Date for the security holding
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The ID for the security included in the holding record
   * @member {String} security_id
   */
  exports.prototype['security_id'] = undefined;
  /**
   * The weight of the security as a percentage of the client’s total monetary value; ex. 20 representing 20%
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;
  /**
   * Monetary value of the shares in the holding record
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Number of shares in the holding record
   * @member {Number} shares
   */
  exports.prototype['shares'] = undefined;



  return exports;
}));


