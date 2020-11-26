/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
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
    root.HydrogenNucleusApi.OverflowVO = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OverflowVO model module.
   * @module model/OverflowVO
   * @version 1.8.0
   */

  /**
   * Constructs a new <code>OverflowVO</code>.
   * Overflow Object
   * @alias module:model/OverflowVO
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>OverflowVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OverflowVO} obj Optional instance to populate.
   * @return {module:model/OverflowVO} The populated <code>OverflowVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('funding_start_date')) {
        obj['funding_start_date'] = ApiClient.convertToType(data['funding_start_date'], 'Date');
      }
      if (data.hasOwnProperty('overflow_setting_id')) {
        obj['overflow_setting_id'] = ApiClient.convertToType(data['overflow_setting_id'], 'String');
      }
      if (data.hasOwnProperty('update_balances')) {
        obj['update_balances'] = ApiClient.convertToType(data['update_balances'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * fundingStartDate
   * @member {Date} funding_start_date
   */
  exports.prototype['funding_start_date'] = undefined;
  /**
   * overflowSettingId
   * @member {String} overflow_setting_id
   */
  exports.prototype['overflow_setting_id'] = undefined;
  /**
   * updateBalances
   * @member {Boolean} update_balances
   */
  exports.prototype['update_balances'] = undefined;



  return exports;
}));

