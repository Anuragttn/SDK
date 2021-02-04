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
    define(['ApiClient', 'model/DecumulationGoalDepositConfig', 'model/GoalWithdrawalConfig', 'model/OptConfig', 'model/RecommendationConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DecumulationGoalDepositConfig'), require('./GoalWithdrawalConfig'), require('./OptConfig'), require('./RecommendationConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.GoalDecumulationAllocationRequest = factory(root.HydrogenProtonApi.ApiClient, root.HydrogenProtonApi.DecumulationGoalDepositConfig, root.HydrogenProtonApi.GoalWithdrawalConfig, root.HydrogenProtonApi.OptConfig, root.HydrogenProtonApi.RecommendationConfig);
  }
}(this, function(ApiClient, DecumulationGoalDepositConfig, GoalWithdrawalConfig, OptConfig, RecommendationConfig) {
  'use strict';

  /**
   * The GoalDecumulationAllocationRequest model module.
   * @module model/GoalDecumulationAllocationRequest
   * @version 1.8.0
   */

  /**
   * Constructs a new <code>GoalDecumulationAllocationRequest</code>.
   * @alias module:model/GoalDecumulationAllocationRequest
   * @class
   * @param allocationPriority {module:model/GoalDecumulationAllocationRequest.AllocationPriorityEnum} 
   * @param allocationMethod {module:model/GoalDecumulationAllocationRequest.AllocationMethodEnum} 
   */
  var exports = function(allocationPriority, allocationMethod) {
    this.allocationPriority = allocationPriority;
    this.allocationMethod = allocationMethod;
  };

  /**
   * Constructs a <code>GoalDecumulationAllocationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalDecumulationAllocationRequest} obj Optional instance to populate.
   * @return {module:model/GoalDecumulationAllocationRequest} The populated <code>GoalDecumulationAllocationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('thresh_type'))
        obj.threshType = ApiClient.convertToType(data['thresh_type'], 'String');
      if (data.hasOwnProperty('goal_id'))
        obj.goalId = ApiClient.convertToType(data['goal_id'], 'String');
      if (data.hasOwnProperty('client_id'))
        obj.clientId = ApiClient.convertToType(data['client_id'], 'String');
      if (data.hasOwnProperty('conf_tgt'))
        obj.confTgt = ApiClient.convertToType(data['conf_tgt'], 'Number');
      if (data.hasOwnProperty('risk_score'))
        obj.riskScore = ApiClient.convertToType(data['risk_score'], 'Number');
      if (data.hasOwnProperty('remove_outliers'))
        obj.removeOutliers = ApiClient.convertToType(data['remove_outliers'], 'Boolean');
      if (data.hasOwnProperty('allocation_priority'))
        obj.allocationPriority = ApiClient.convertToType(data['allocation_priority'], 'String');
      if (data.hasOwnProperty('a_horizon'))
        obj.aHorizon = ApiClient.convertToType(data['a_horizon'], 'Number');
      if (data.hasOwnProperty('withdrawal_config'))
        obj.withdrawalConfig = ApiClient.convertToType(data['withdrawal_config'], [GoalWithdrawalConfig]);
      if (data.hasOwnProperty('market_data_source'))
        obj.marketDataSource = ApiClient.convertToType(data['market_data_source'], 'String');
      if (data.hasOwnProperty('compounding_rate'))
        obj.compoundingRate = ApiClient.convertToType(data['compounding_rate'], 'Number');
      if (data.hasOwnProperty('adjust_for_compounding'))
        obj.adjustForCompounding = ApiClient.convertToType(data['adjust_for_compounding'], 'Boolean');
      if (data.hasOwnProperty('opt_config'))
        obj.optConfig = OptConfig.constructFromObject(data['opt_config']);
      if (data.hasOwnProperty('deposit_config'))
        obj.depositConfig = ApiClient.convertToType(data['deposit_config'], [DecumulationGoalDepositConfig]);
      if (data.hasOwnProperty('use_proxy_data'))
        obj.useProxyData = ApiClient.convertToType(data['use_proxy_data'], 'Boolean');
      if (data.hasOwnProperty('thresh'))
        obj.thresh = ApiClient.convertToType(data['thresh'], 'Number');
      if (data.hasOwnProperty('horizon_frequency'))
        obj.horizonFrequency = ApiClient.convertToType(data['horizon_frequency'], 'String');
      if (data.hasOwnProperty('recommendation_config'))
        obj.recommendationConfig = RecommendationConfig.constructFromObject(data['recommendation_config']);
      if (data.hasOwnProperty('create_log'))
        obj.createLog = ApiClient.convertToType(data['create_log'], 'Boolean');
      if (data.hasOwnProperty('withdrawal_tax'))
        obj.withdrawalTax = ApiClient.convertToType(data['withdrawal_tax'], 'Number');
      if (data.hasOwnProperty('trading_days_per_year'))
        obj.tradingDaysPerYear = ApiClient.convertToType(data['trading_days_per_year'], 'Number');
      if (data.hasOwnProperty('allocations'))
        obj.allocations = ApiClient.convertToType(data['allocations'], ['String']);
      if (data.hasOwnProperty('n'))
        obj.n = ApiClient.convertToType(data['n'], 'Number');
      if (data.hasOwnProperty('d_horizon'))
        obj.dHorizon = ApiClient.convertToType(data['d_horizon'], 'Number');
      if (data.hasOwnProperty('curr_inv'))
        obj.currInv = ApiClient.convertToType(data['curr_inv'], 'Number');
      if (data.hasOwnProperty('recommend_type'))
        obj.recommendType = ApiClient.convertToType(data['recommend_type'], 'String');
      if (data.hasOwnProperty('allocation_method'))
        obj.allocationMethod = ApiClient.convertToType(data['allocation_method'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/GoalDecumulationAllocationRequest.ThreshTypeEnum} threshType
   * @default 'perc'
   */
  exports.prototype.threshType = 'perc';

  /**
   * @member {String} goalId
   */
  exports.prototype.goalId = undefined;

  /**
   * @member {String} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * @member {Number} confTgt
   * @default 0.9
   */
  exports.prototype.confTgt = 0.9;

  /**
   * @member {Number} riskScore
   */
  exports.prototype.riskScore = undefined;

  /**
   * @member {Boolean} removeOutliers
   * @default true
   */
  exports.prototype.removeOutliers = true;

  /**
   * @member {module:model/GoalDecumulationAllocationRequest.AllocationPriorityEnum} allocationPriority
   */
  exports.prototype.allocationPriority = undefined;

  /**
   * @member {Number} aHorizon
   */
  exports.prototype.aHorizon = undefined;

  /**
   * @member {Array.<module:model/GoalWithdrawalConfig>} withdrawalConfig
   */
  exports.prototype.withdrawalConfig = undefined;

  /**
   * @member {module:model/GoalDecumulationAllocationRequest.MarketDataSourceEnum} marketDataSource
   * @default 'nucleus'
   */
  exports.prototype.marketDataSource = 'nucleus';

  /**
   * @member {Number} compoundingRate
   * @default 0.0
   */
  exports.prototype.compoundingRate = 0.0;

  /**
   * @member {Boolean} adjustForCompounding
   * @default false
   */
  exports.prototype.adjustForCompounding = false;

  /**
   * @member {module:model/OptConfig} optConfig
   */
  exports.prototype.optConfig = undefined;

  /**
   * @member {Array.<module:model/DecumulationGoalDepositConfig>} depositConfig
   */
  exports.prototype.depositConfig = undefined;

  /**
   * @member {Boolean} useProxyData
   * @default false
   */
  exports.prototype.useProxyData = false;

  /**
   * @member {Number} thresh
   */
  exports.prototype.thresh = undefined;

  /**
   * @member {module:model/GoalDecumulationAllocationRequest.HorizonFrequencyEnum} horizonFrequency
   * @default 'year'
   */
  exports.prototype.horizonFrequency = 'year';

  /**
   * @member {module:model/RecommendationConfig} recommendationConfig
   */
  exports.prototype.recommendationConfig = undefined;

  /**
   * @member {Boolean} createLog
   * @default false
   */
  exports.prototype.createLog = false;

  /**
   * @member {Number} withdrawalTax
   * @default 0.0
   */
  exports.prototype.withdrawalTax = 0.0;

  /**
   * @member {Number} tradingDaysPerYear
   * @default 252
   */
  exports.prototype.tradingDaysPerYear = 252;

  /**
   * @member {Array.<String>} allocations
   */
  exports.prototype.allocations = undefined;

  /**
   * @member {Number} n
   * @default 1000
   */
  exports.prototype.n = 1000;

  /**
   * @member {Number} dHorizon
   */
  exports.prototype.dHorizon = undefined;

  /**
   * @member {Number} currInv
   */
  exports.prototype.currInv = undefined;

  /**
   * @member {module:model/GoalDecumulationAllocationRequest.RecommendTypeEnum} recommendType
   * @default 'horizon'
   */
  exports.prototype.recommendType = 'horizon';

  /**
   * @member {module:model/GoalDecumulationAllocationRequest.AllocationMethodEnum} allocationMethod
   */
  exports.prototype.allocationMethod = undefined;


  /**
   * Allowed values for the <code>threshType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ThreshTypeEnum = {
    /**
     * value: "amnt"
     * @const
     */
    amnt: "amnt",

    /**
     * value: "perc"
     * @const
     */
    perc: "perc"
  };


  /**
   * Allowed values for the <code>allocationPriority</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AllocationPriorityEnum = {
    /**
     * value: "goal"
     * @const
     */
    goal: "goal",

    /**
     * value: "risk"
     * @const
     */
    risk: "risk"
  };


  /**
   * Allowed values for the <code>marketDataSource</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MarketDataSourceEnum = {
    /**
     * value: "nucleus"
     * @const
     */
    nucleus: "nucleus",

    /**
     * value: "integration"
     * @const
     */
    integration: "integration"
  };


  /**
   * Allowed values for the <code>horizonFrequency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HorizonFrequencyEnum = {
    /**
     * value: "year"
     * @const
     */
    year: "year",

    /**
     * value: "six_months"
     * @const
     */
    sixMonths: "six_months",

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
     * value: "two_weeks"
     * @const
     */
    twoWeeks: "two_weeks",

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


  /**
   * Allowed values for the <code>recommendType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RecommendTypeEnum = {
    /**
     * value: "recurring"
     * @const
     */
    recurring: "recurring",

    /**
     * value: "one-time"
     * @const
     */
    oneTime: "one-time",

    /**
     * value: "combo"
     * @const
     */
    combo: "combo",

    /**
     * value: "horizon"
     * @const
     */
    horizon: "horizon"
  };


  /**
   * Allowed values for the <code>allocationMethod</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AllocationMethodEnum = {
    /**
     * value: "select"
     * @const
     */
    select: "select",

    /**
     * value: "create"
     * @const
     */
    create: "create"
  };

  return exports;

}));
