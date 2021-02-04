/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BudgetAggregationAccount', 'model/BudgetComponent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BudgetAggregationAccount'), require('./BudgetComponent'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.BudgetDetails = factory(root.HydrogenProtonApi.ApiClient, root.HydrogenProtonApi.BudgetAggregationAccount, root.HydrogenProtonApi.BudgetComponent);
  }
}(this, function(ApiClient, BudgetAggregationAccount, BudgetComponent) {
  'use strict';

  /**
   * The BudgetDetails model module.
   * @module model/BudgetDetails
   * @version 1.8.0
   */

  /**
   * Constructs a new <code>BudgetDetails</code>.
   * @alias module:model/BudgetDetails
   * @class
   * @param frequencyUnit {module:model/BudgetDetails.FrequencyUnitEnum} 
   */
  var exports = function(frequencyUnit) {
    this.frequencyUnit = frequencyUnit;
  };

  /**
   * Constructs a <code>BudgetDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BudgetDetails} obj Optional instance to populate.
   * @return {module:model/BudgetDetails} The populated <code>BudgetDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('frequency_unit'))
        obj.frequencyUnit = ApiClient.convertToType(data['frequency_unit'], 'String');
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'Date');
      if (data.hasOwnProperty('client_id'))
        obj.clientId = ApiClient.convertToType(data['client_id'], 'String');
      if (data.hasOwnProperty('budget'))
        obj.budget = ApiClient.convertToType(data['budget'], [BudgetComponent]);
      if (data.hasOwnProperty('total_value'))
        obj.totalValue = ApiClient.convertToType(data['total_value'], 'Number');
      if (data.hasOwnProperty('account_id'))
        obj.accountId = ApiClient.convertToType(data['account_id'], 'String');
      if (data.hasOwnProperty('aggregation_accounts'))
        obj.aggregationAccounts = ApiClient.convertToType(data['aggregation_accounts'], [BudgetAggregationAccount]);
      if (data.hasOwnProperty('currency_code'))
        obj.currencyCode = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('frequency'))
        obj.frequency = ApiClient.convertToType(data['frequency'], 'Number');
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'Date');
    }
    return obj;
  }

  /**
   * @member {module:model/BudgetDetails.FrequencyUnitEnum} frequencyUnit
   */
  exports.prototype.frequencyUnit = undefined;

  /**
   * @member {Date} endDate
   */
  exports.prototype.endDate = undefined;

  /**
   * @member {String} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * @member {Array.<module:model/BudgetComponent>} budget
   */
  exports.prototype.budget = undefined;

  /**
   * @member {Number} totalValue
   */
  exports.prototype.totalValue = undefined;

  /**
   * @member {String} accountId
   */
  exports.prototype.accountId = undefined;

  /**
   * @member {Array.<module:model/BudgetAggregationAccount>} aggregationAccounts
   */
  exports.prototype.aggregationAccounts = undefined;

  /**
   * @member {String} currencyCode
   */
  exports.prototype.currencyCode = undefined;

  /**
   * @member {Number} frequency
   * @default 1
   */
  exports.prototype.frequency = 1;

  /**
   * @member {Date} startDate
   */
  exports.prototype.startDate = undefined;


  /**
   * Allowed values for the <code>frequencyUnit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FrequencyUnitEnum = {
    /**
     * value: "daily"
     * @const
     */
    daily: "daily",

    /**
     * value: "weekly"
     * @const
     */
    weekly: "weekly",

    /**
     * value: "bi-weekly"
     * @const
     */
    biWeekly: "bi-weekly",

    /**
     * value: "monthly"
     * @const
     */
    monthly: "monthly",

    /**
     * value: "quarterly"
     * @const
     */
    quarterly: "quarterly",

    /**
     * value: "annually"
     * @const
     */
    annually: "annually"
  };

  return exports;

}));
