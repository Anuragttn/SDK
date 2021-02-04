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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.DiversificationScoreRequest = factory(root.HydrogenProtonApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DiversificationScoreRequest model module.
   * @module model/DiversificationScoreRequest
   * @version 1.8.0
   */

  /**
   * Constructs a new <code>DiversificationScoreRequest</code>.
   * @alias module:model/DiversificationScoreRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DiversificationScoreRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiversificationScoreRequest} obj Optional instance to populate.
   * @return {module:model/DiversificationScoreRequest} The populated <code>DiversificationScoreRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('portfolio_tickers'))
        obj.portfolioTickers = ApiClient.convertToType(data['portfolio_tickers'], ['String']);
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'Date');
      if (data.hasOwnProperty('portfolio_id'))
        obj.portfolioId = ApiClient.convertToType(data['portfolio_id'], 'String');
      if (data.hasOwnProperty('market_data_source'))
        obj.marketDataSource = ApiClient.convertToType(data['market_data_source'], 'String');
      if (data.hasOwnProperty('model_id'))
        obj.modelId = ApiClient.convertToType(data['model_id'], 'String');
      if (data.hasOwnProperty('create_log'))
        obj.createLog = ApiClient.convertToType(data['create_log'], 'Boolean');
      if (data.hasOwnProperty('allocation_id'))
        obj.allocationId = ApiClient.convertToType(data['allocation_id'], 'String');
      if (data.hasOwnProperty('use_proxy_data'))
        obj.useProxyData = ApiClient.convertToType(data['use_proxy_data'], 'Boolean');
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'Date');
      if (data.hasOwnProperty('account_id'))
        obj.accountId = ApiClient.convertToType(data['account_id'], 'String');
      if (data.hasOwnProperty('aggregation_account_id'))
        obj.aggregationAccountId = ApiClient.convertToType(data['aggregation_account_id'], 'String');
      if (data.hasOwnProperty('portfolio_weights'))
        obj.portfolioWeights = ApiClient.convertToType(data['portfolio_weights'], ['Number']);
    }
    return obj;
  }

  /**
   * @member {Array.<String>} portfolioTickers
   */
  exports.prototype.portfolioTickers = undefined;

  /**
   * @member {Date} endDate
   */
  exports.prototype.endDate = undefined;

  /**
   * @member {String} portfolioId
   */
  exports.prototype.portfolioId = undefined;

  /**
   * @member {module:model/DiversificationScoreRequest.MarketDataSourceEnum} marketDataSource
   * @default 'nucleus'
   */
  exports.prototype.marketDataSource = 'nucleus';

  /**
   * @member {String} modelId
   */
  exports.prototype.modelId = undefined;

  /**
   * @member {Boolean} createLog
   * @default false
   */
  exports.prototype.createLog = false;

  /**
   * @member {String} allocationId
   */
  exports.prototype.allocationId = undefined;

  /**
   * @member {Boolean} useProxyData
   * @default false
   */
  exports.prototype.useProxyData = false;

  /**
   * @member {Date} startDate
   */
  exports.prototype.startDate = undefined;

  /**
   * @member {String} accountId
   */
  exports.prototype.accountId = undefined;

  /**
   * @member {String} aggregationAccountId
   */
  exports.prototype.aggregationAccountId = undefined;

  /**
   * @member {Array.<Number>} portfolioWeights
   */
  exports.prototype.portfolioWeights = undefined;


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

  return exports;

}));
