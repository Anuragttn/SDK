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
    define(['ApiClient', 'model/BudgetAggregationAccount', 'model/BudgetObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BudgetAggregationAccount'), require('./BudgetObject'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.Budget = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.BudgetAggregationAccount, root.HydrogenNucleusApi.BudgetObject);
  }
}(this, function(ApiClient, BudgetAggregationAccount, BudgetObject) {
  'use strict';




  /**
   * The Budget model module.
   * @module model/Budget
   * @version 1.9.5
   */

  /**
   * Constructs a new <code>Budget</code>.
   * Budget Object
   * @alias module:model/Budget
   * @class
   * @param clientId {String} clientId
   * @param currencyCode {String} currencyCode
   * @param frequencyUnit {String} frequencyUnit
   * @param name {String} name
   */
  var exports = function(clientId, currencyCode, frequencyUnit, name) {
    var _this = this;





    _this['client_id'] = clientId;

    _this['currency_code'] = currencyCode;


    _this['frequency_unit'] = frequencyUnit;




    _this['name'] = name;




  };

  /**
   * Constructs a <code>Budget</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Budget} obj Optional instance to populate.
   * @return {module:model/Budget} The populated <code>Budget</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('aggregation_accounts')) {
        obj['aggregation_accounts'] = ApiClient.convertToType(data['aggregation_accounts'], [BudgetAggregationAccount]);
      }
      if (data.hasOwnProperty('budget')) {
        obj['budget'] = ApiClient.convertToType(data['budget'], [BudgetObject]);
      }
      if (data.hasOwnProperty('card_id')) {
        obj['card_id'] = ApiClient.convertToType(data['card_id'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('frequency')) {
        obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Number');
      }
      if (data.hasOwnProperty('frequency_unit')) {
        obj['frequency_unit'] = ApiClient.convertToType(data['frequency_unit'], 'String');
      }
      if (data.hasOwnProperty('goal_id')) {
        obj['goal_id'] = ApiClient.convertToType(data['goal_id'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('total_value')) {
        obj['total_value'] = ApiClient.convertToType(data['total_value'], 'Number');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * accountId
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {Array.<module:model/BudgetAggregationAccount>} aggregation_accounts
   */
  exports.prototype['aggregation_accounts'] = undefined;
  /**
   * @member {Array.<module:model/BudgetObject>} budget
   */
  exports.prototype['budget'] = undefined;
  /**
   * cardId
   * @member {String} card_id
   */
  exports.prototype['card_id'] = undefined;
  /**
   * clientId
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * currencyCode
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * endDate
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * frequency
   * @member {Number} frequency
   */
  exports.prototype['frequency'] = undefined;
  /**
   * frequencyUnit
   * @member {String} frequency_unit
   */
  exports.prototype['frequency_unit'] = undefined;
  /**
   * goalId
   * @member {String} goal_id
   */
  exports.prototype['goal_id'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * is_active
   * @member {Boolean} is_active
   */
  exports.prototype['is_active'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * startDate
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * totalValue
   * @member {Number} total_value
   */
  exports.prototype['total_value'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


