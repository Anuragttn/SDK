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
    root.HydrogenIntegrationApi.AggregationAccountBalance = factory(root.HydrogenIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AggregationAccountBalance model module.
   * @module model/AggregationAccountBalance
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>AggregationAccountBalance</code>.
   * Aggregation Account Balance Object
   * @alias module:model/AggregationAccountBalance
   * @class
   * @param balanceTimeStamp {Date} balanceTimeStamp
   * @param currencyCode {String} currencyCode
   */
  var exports = function(balanceTimeStamp, currencyCode) {
    this.balanceTimeStamp = balanceTimeStamp;
    this.currencyCode = currencyCode;
  };

  /**
   * Constructs a <code>AggregationAccountBalance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregationAccountBalance} obj Optional instance to populate.
   * @return {module:model/AggregationAccountBalance} The populated <code>AggregationAccountBalance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('aggregation_account_id'))
        obj.aggregationAccountId = ApiClient.convertToType(data['aggregation_account_id'], 'String');
      if (data.hasOwnProperty('available_balance'))
        obj.availableBalance = ApiClient.convertToType(data['available_balance'], 'Number');
      if (data.hasOwnProperty('available_credit'))
        obj.availableCredit = ApiClient.convertToType(data['available_credit'], 'Number');
      if (data.hasOwnProperty('balance'))
        obj.balance = ApiClient.convertToType(data['balance'], 'Number');
      if (data.hasOwnProperty('balance_time_stamp'))
        obj.balanceTimeStamp = ApiClient.convertToType(data['balance_time_stamp'], 'Date');
      if (data.hasOwnProperty('create_date'))
        obj.createDate = ApiClient.convertToType(data['create_date'], 'Date');
      if (data.hasOwnProperty('currency_code'))
        obj.currencyCode = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('is_active'))
        obj.isActive = ApiClient.convertToType(data['is_active'], 'Boolean');
      if (data.hasOwnProperty('secondary_id'))
        obj.secondaryId = ApiClient.convertToType(data['secondary_id'], 'String');
      if (data.hasOwnProperty('update_date'))
        obj.updateDate = ApiClient.convertToType(data['update_date'], 'Date');
    }
    return obj;
  }

  /**
   * aggregationAccountId
   * @member {String} aggregationAccountId
   */
  exports.prototype.aggregationAccountId = undefined;

  /**
   * availableBalance
   * @member {Number} availableBalance
   */
  exports.prototype.availableBalance = undefined;

  /**
   * availableCredit
   * @member {Number} availableCredit
   */
  exports.prototype.availableCredit = undefined;

  /**
   * balance
   * @member {Number} balance
   */
  exports.prototype.balance = undefined;

  /**
   * balanceTimeStamp
   * @member {Date} balanceTimeStamp
   */
  exports.prototype.balanceTimeStamp = undefined;

  /**
   * createDate
   * @member {Date} createDate
   */
  exports.prototype.createDate = undefined;

  /**
   * currencyCode
   * @member {String} currencyCode
   */
  exports.prototype.currencyCode = undefined;

  /**
   * id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * isActive
   * @member {Boolean} isActive
   */
  exports.prototype.isActive = undefined;

  /**
   * @member {String} secondaryId
   */
  exports.prototype.secondaryId = undefined;

  /**
   * updateDate
   * @member {Date} updateDate
   */
  exports.prototype.updateDate = undefined;


  return exports;

}));
