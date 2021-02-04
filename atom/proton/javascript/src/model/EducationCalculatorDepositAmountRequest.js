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
    define(['ApiClient', 'model/CalculatorDepositSchedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CalculatorDepositSchedule'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.EducationCalculatorDepositAmountRequest = factory(root.HydrogenProtonApi.ApiClient, root.HydrogenProtonApi.CalculatorDepositSchedule);
  }
}(this, function(ApiClient, CalculatorDepositSchedule) {
  'use strict';

  /**
   * The EducationCalculatorDepositAmountRequest model module.
   * @module model/EducationCalculatorDepositAmountRequest
   * @version 1.8.0
   */

  /**
   * Constructs a new <code>EducationCalculatorDepositAmountRequest</code>.
   * @alias module:model/EducationCalculatorDepositAmountRequest
   * @class
   * @param totalAnnualCost {Number} 
   * @param decumulationHorizon {Number} 
   * @param accumulationHorizon {Number} 
   * @param portfolioReturn {Number} 
   */
  var exports = function(totalAnnualCost, decumulationHorizon, accumulationHorizon, portfolioReturn) {
    this.totalAnnualCost = totalAnnualCost;
    this.decumulationHorizon = decumulationHorizon;
    this.accumulationHorizon = accumulationHorizon;
    this.portfolioReturn = portfolioReturn;
  };

  /**
   * Constructs a <code>EducationCalculatorDepositAmountRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EducationCalculatorDepositAmountRequest} obj Optional instance to populate.
   * @return {module:model/EducationCalculatorDepositAmountRequest} The populated <code>EducationCalculatorDepositAmountRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('aggregation_account_ids'))
        obj.aggregationAccountIds = ApiClient.convertToType(data['aggregation_account_ids'], ['String']);
      if (data.hasOwnProperty('total_annual_cost'))
        obj.totalAnnualCost = ApiClient.convertToType(data['total_annual_cost'], 'Number');
      if (data.hasOwnProperty('tax_rate'))
        obj.taxRate = ApiClient.convertToType(data['tax_rate'], 'Number');
      if (data.hasOwnProperty('account_ids'))
        obj.accountIds = ApiClient.convertToType(data['account_ids'], ['String']);
      if (data.hasOwnProperty('initial_balance'))
        obj.initialBalance = ApiClient.convertToType(data['initial_balance'], 'Number');
      if (data.hasOwnProperty('decumulation_horizon'))
        obj.decumulationHorizon = ApiClient.convertToType(data['decumulation_horizon'], 'Number');
      if (data.hasOwnProperty('percent_of_costs_covered'))
        obj.percentOfCostsCovered = ApiClient.convertToType(data['percent_of_costs_covered'], 'Number');
      if (data.hasOwnProperty('accumulation_horizon'))
        obj.accumulationHorizon = ApiClient.convertToType(data['accumulation_horizon'], 'Number');
      if (data.hasOwnProperty('education_inflation_rate'))
        obj.educationInflationRate = ApiClient.convertToType(data['education_inflation_rate'], 'Number');
      if (data.hasOwnProperty('portfolio_return'))
        obj.portfolioReturn = ApiClient.convertToType(data['portfolio_return'], 'Number');
      if (data.hasOwnProperty('deposit_schedule'))
        obj.depositSchedule = CalculatorDepositSchedule.constructFromObject(data['deposit_schedule']);
      if (data.hasOwnProperty('general_inflation_rate'))
        obj.generalInflationRate = ApiClient.convertToType(data['general_inflation_rate'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Array.<String>} aggregationAccountIds
   */
  exports.prototype.aggregationAccountIds = undefined;

  /**
   * @member {Number} totalAnnualCost
   */
  exports.prototype.totalAnnualCost = undefined;

  /**
   * @member {Number} taxRate
   * @default 0.0
   */
  exports.prototype.taxRate = 0.0;

  /**
   * @member {Array.<String>} accountIds
   */
  exports.prototype.accountIds = undefined;

  /**
   * @member {Number} initialBalance
   * @default 0.0
   */
  exports.prototype.initialBalance = 0.0;

  /**
   * @member {Number} decumulationHorizon
   */
  exports.prototype.decumulationHorizon = undefined;

  /**
   * @member {Number} percentOfCostsCovered
   * @default 1.0
   */
  exports.prototype.percentOfCostsCovered = 1.0;

  /**
   * @member {Number} accumulationHorizon
   */
  exports.prototype.accumulationHorizon = undefined;

  /**
   * @member {Number} educationInflationRate
   * @default 0.05
   */
  exports.prototype.educationInflationRate = 0.05;

  /**
   * @member {Number} portfolioReturn
   */
  exports.prototype.portfolioReturn = undefined;

  /**
   * @member {module:model/CalculatorDepositSchedule} depositSchedule
   */
  exports.prototype.depositSchedule = undefined;

  /**
   * @member {Number} generalInflationRate
   * @default 0.0
   */
  exports.prototype.generalInflationRate = 0.0;

  return exports;

}));
