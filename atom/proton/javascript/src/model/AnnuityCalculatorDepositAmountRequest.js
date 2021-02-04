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
    define(['ApiClient', 'model/AnnuityDepositSchedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnnuityDepositSchedule'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.AnnuityCalculatorDepositAmountRequest = factory(root.HydrogenProtonApi.ApiClient, root.HydrogenProtonApi.AnnuityDepositSchedule);
  }
}(this, function(ApiClient, AnnuityDepositSchedule) {
  'use strict';

  /**
   * The AnnuityCalculatorDepositAmountRequest model module.
   * @module model/AnnuityCalculatorDepositAmountRequest
   * @version 1.8.0
   */

  /**
   * Constructs a new <code>AnnuityCalculatorDepositAmountRequest</code>.
   * @alias module:model/AnnuityCalculatorDepositAmountRequest
   * @class
   * @param annuityAmount {Number} 
   * @param decumulationHorizon {Number} 
   * @param accumulationHorizon {Number} 
   * @param portfolioReturn {Number} 
   */
  var exports = function(annuityAmount, decumulationHorizon, accumulationHorizon, portfolioReturn) {
    this.annuityAmount = annuityAmount;
    this.decumulationHorizon = decumulationHorizon;
    this.accumulationHorizon = accumulationHorizon;
    this.portfolioReturn = portfolioReturn;
  };

  /**
   * Constructs a <code>AnnuityCalculatorDepositAmountRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnnuityCalculatorDepositAmountRequest} obj Optional instance to populate.
   * @return {module:model/AnnuityCalculatorDepositAmountRequest} The populated <code>AnnuityCalculatorDepositAmountRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('annuity_amount'))
        obj.annuityAmount = ApiClient.convertToType(data['annuity_amount'], 'Number');
      if (data.hasOwnProperty('aggregation_account_ids'))
        obj.aggregationAccountIds = ApiClient.convertToType(data['aggregation_account_ids'], ['String']);
      if (data.hasOwnProperty('tax_rate'))
        obj.taxRate = ApiClient.convertToType(data['tax_rate'], 'Number');
      if (data.hasOwnProperty('account_ids'))
        obj.accountIds = ApiClient.convertToType(data['account_ids'], ['String']);
      if (data.hasOwnProperty('initial_balance'))
        obj.initialBalance = ApiClient.convertToType(data['initial_balance'], 'Number');
      if (data.hasOwnProperty('create_log'))
        obj.createLog = ApiClient.convertToType(data['create_log'], 'Boolean');
      if (data.hasOwnProperty('inflation_rate'))
        obj.inflationRate = ApiClient.convertToType(data['inflation_rate'], 'Number');
      if (data.hasOwnProperty('decumulation_horizon'))
        obj.decumulationHorizon = ApiClient.convertToType(data['decumulation_horizon'], 'Number');
      if (data.hasOwnProperty('accumulation_horizon'))
        obj.accumulationHorizon = ApiClient.convertToType(data['accumulation_horizon'], 'Number');
      if (data.hasOwnProperty('annuity_frequency_interval'))
        obj.annuityFrequencyInterval = ApiClient.convertToType(data['annuity_frequency_interval'], 'String');
      if (data.hasOwnProperty('portfolio_return'))
        obj.portfolioReturn = ApiClient.convertToType(data['portfolio_return'], 'Number');
      if (data.hasOwnProperty('deposit_schedule'))
        obj.depositSchedule = AnnuityDepositSchedule.constructFromObject(data['deposit_schedule']);
    }
    return obj;
  }

  /**
   * @member {Number} annuityAmount
   */
  exports.prototype.annuityAmount = undefined;

  /**
   * @member {Array.<String>} aggregationAccountIds
   */
  exports.prototype.aggregationAccountIds = undefined;

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
   * @member {Boolean} createLog
   * @default false
   */
  exports.prototype.createLog = false;

  /**
   * @member {Number} inflationRate
   * @default 0.0
   */
  exports.prototype.inflationRate = 0.0;

  /**
   * @member {Number} decumulationHorizon
   */
  exports.prototype.decumulationHorizon = undefined;

  /**
   * @member {Number} accumulationHorizon
   */
  exports.prototype.accumulationHorizon = undefined;

  /**
   * @member {module:model/AnnuityCalculatorDepositAmountRequest.AnnuityFrequencyIntervalEnum} annuityFrequencyInterval
   * @default 'year'
   */
  exports.prototype.annuityFrequencyInterval = 'year';

  /**
   * @member {Number} portfolioReturn
   */
  exports.prototype.portfolioReturn = undefined;

  /**
   * @member {module:model/AnnuityDepositSchedule} depositSchedule
   */
  exports.prototype.depositSchedule = undefined;


  /**
   * Allowed values for the <code>annuityFrequencyInterval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AnnuityFrequencyIntervalEnum = {
    /**
     * value: "year"
     * @const
     */
    year: "year",

    /**
     * value: "quarter"
     * @const
     */
    quarter: "quarter",

    /**
     * value: "month"
     * @const
     */
    month: "month",

    /**
     * value: "week"
     * @const
     */
    week: "week",

    /**
     * value: "day"
     * @const
     */
    day: "day"
  };

  return exports;

}));
