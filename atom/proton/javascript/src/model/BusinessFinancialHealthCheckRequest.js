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
    define(['ApiClient', 'model/RatioTargets1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RatioTargets1'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.BusinessFinancialHealthCheckRequest = factory(root.HydrogenProtonApi.ApiClient, root.HydrogenProtonApi.RatioTargets1);
  }
}(this, function(ApiClient, RatioTargets1) {
  'use strict';

  /**
   * The BusinessFinancialHealthCheckRequest model module.
   * @module model/BusinessFinancialHealthCheckRequest
   * @version 1.8.0
   */

  /**
   * Constructs a new <code>BusinessFinancialHealthCheckRequest</code>.
   * @alias module:model/BusinessFinancialHealthCheckRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BusinessFinancialHealthCheckRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinessFinancialHealthCheckRequest} obj Optional instance to populate.
   * @return {module:model/BusinessFinancialHealthCheckRequest} The populated <code>BusinessFinancialHealthCheckRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('period_length'))
        obj.periodLength = ApiClient.convertToType(data['period_length'], 'String');
      if (data.hasOwnProperty('net_income'))
        obj.netIncome = ApiClient.convertToType(data['net_income'], 'Number');
      if (data.hasOwnProperty('period_month'))
        obj.periodMonth = ApiClient.convertToType(data['period_month'], 'Number');
      if (data.hasOwnProperty('total_revenue'))
        obj.totalRevenue = ApiClient.convertToType(data['total_revenue'], 'Number');
      if (data.hasOwnProperty('total_assets'))
        obj.totalAssets = ApiClient.convertToType(data['total_assets'], 'Number');
      if (data.hasOwnProperty('client_id'))
        obj.clientId = ApiClient.convertToType(data['client_id'], 'String');
      if (data.hasOwnProperty('accounting_method'))
        obj.accountingMethod = ApiClient.convertToType(data['accounting_method'], 'String');
      if (data.hasOwnProperty('period_year'))
        obj.periodYear = ApiClient.convertToType(data['period_year'], 'Number');
      if (data.hasOwnProperty('currency_conversion'))
        obj.currencyConversion = ApiClient.convertToType(data['currency_conversion'], 'String');
      if (data.hasOwnProperty('total_liabilities'))
        obj.totalLiabilities = ApiClient.convertToType(data['total_liabilities'], 'Number');
      if (data.hasOwnProperty('period_type'))
        obj.periodType = ApiClient.convertToType(data['period_type'], 'String');
      if (data.hasOwnProperty('currency_code'))
        obj.currencyCode = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('ratio_targets'))
        obj.ratioTargets = RatioTargets1.constructFromObject(data['ratio_targets']);
      if (data.hasOwnProperty('total_equity'))
        obj.totalEquity = ApiClient.convertToType(data['total_equity'], 'Number');
      if (data.hasOwnProperty('period_quarter'))
        obj.periodQuarter = ApiClient.convertToType(data['period_quarter'], 'Number');
    }
    return obj;
  }

  /**
   * @member {module:model/BusinessFinancialHealthCheckRequest.PeriodLengthEnum} periodLength
   * @default 'quarterly'
   */
  exports.prototype.periodLength = 'quarterly';

  /**
   * @member {Number} netIncome
   */
  exports.prototype.netIncome = undefined;

  /**
   * @member {Number} periodMonth
   */
  exports.prototype.periodMonth = undefined;

  /**
   * @member {Number} totalRevenue
   */
  exports.prototype.totalRevenue = undefined;

  /**
   * @member {Number} totalAssets
   */
  exports.prototype.totalAssets = undefined;

  /**
   * @member {String} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * @member {module:model/BusinessFinancialHealthCheckRequest.AccountingMethodEnum} accountingMethod
   */
  exports.prototype.accountingMethod = undefined;

  /**
   * @member {Number} periodYear
   */
  exports.prototype.periodYear = undefined;

  /**
   * @member {String} currencyConversion
   */
  exports.prototype.currencyConversion = undefined;

  /**
   * @member {Number} totalLiabilities
   */
  exports.prototype.totalLiabilities = undefined;

  /**
   * @member {module:model/BusinessFinancialHealthCheckRequest.PeriodTypeEnum} periodType
   */
  exports.prototype.periodType = undefined;

  /**
   * @member {String} currencyCode
   */
  exports.prototype.currencyCode = undefined;

  /**
   * @member {module:model/RatioTargets1} ratioTargets
   */
  exports.prototype.ratioTargets = undefined;

  /**
   * @member {Number} totalEquity
   */
  exports.prototype.totalEquity = undefined;

  /**
   * @member {Number} periodQuarter
   */
  exports.prototype.periodQuarter = undefined;


  /**
   * Allowed values for the <code>periodLength</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PeriodLengthEnum = {
    /**
     * value: "annual"
     * @const
     */
    annual: "annual",

    /**
     * value: "quarterly"
     * @const
     */
    quarterly: "quarterly",

    /**
     * value: "monthly"
     * @const
     */
    monthly: "monthly",

    /**
     * value: "ytd"
     * @const
     */
    ytd: "ytd",

    /**
     * value: "qtd"
     * @const
     */
    qtd: "qtd",

    /**
     * value: "mtd"
     * @const
     */
    mtd: "mtd"
  };


  /**
   * Allowed values for the <code>accountingMethod</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccountingMethodEnum = {
    /**
     * value: "accrual"
     * @const
     */
    accrual: "accrual",

    /**
     * value: "cash"
     * @const
     */
    cash: "cash"
  };


  /**
   * Allowed values for the <code>periodType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PeriodTypeEnum = {
    /**
     * value: "calendar"
     * @const
     */
    calendar: "calendar",

    /**
     * value: "fiscal"
     * @const
     */
    fiscal: "fiscal"
  };

  return exports;

}));
