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
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/VAccountVO', 'model/VPortfolioVO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VAccountVO'), require('./VPortfolioVO'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.ClientViewGoalData = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.VAccountVO, root.HydrogenNucleusApi.VPortfolioVO);
  }
}(this, function(ApiClient, VAccountVO, VPortfolioVO) {
  'use strict';




  /**
   * The ClientViewGoalData model module.
   * @module model/ClientViewGoalData
   * @version 1.8.0
   */

  /**
   * Constructs a new <code>ClientViewGoalData</code>.
   * @alias module:model/ClientViewGoalData
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>ClientViewGoalData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientViewGoalData} obj Optional instance to populate.
   * @return {module:model/ClientViewGoalData} The populated <code>ClientViewGoalData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accounts')) {
        obj['accounts'] = ApiClient.convertToType(data['accounts'], [VAccountVO]);
      }
      if (data.hasOwnProperty('accumulation_horizon')) {
        obj['accumulation_horizon'] = ApiClient.convertToType(data['accumulation_horizon'], 'Number');
      }
      if (data.hasOwnProperty('decumulation_horizon')) {
        obj['decumulation_horizon'] = ApiClient.convertToType(data['decumulation_horizon'], 'Number');
      }
      if (data.hasOwnProperty('goal_amount')) {
        obj['goal_amount'] = ApiClient.convertToType(data['goal_amount'], 'Number');
      }
      if (data.hasOwnProperty('goal_asset_size_by_goal')) {
        obj['goal_asset_size_by_goal'] = ApiClient.convertToType(data['goal_asset_size_by_goal'], 'Number');
      }
      if (data.hasOwnProperty('goal_asset_size_by_goal_date')) {
        obj['goal_asset_size_by_goal_date'] = ApiClient.convertToType(data['goal_asset_size_by_goal_date'], 'Date');
      }
      if (data.hasOwnProperty('goal_category')) {
        obj['goal_category'] = ApiClient.convertToType(data['goal_category'], 'String');
      }
      if (data.hasOwnProperty('goal_create_date')) {
        obj['goal_create_date'] = ApiClient.convertToType(data['goal_create_date'], 'Date');
      }
      if (data.hasOwnProperty('goal_id')) {
        obj['goal_id'] = ApiClient.convertToType(data['goal_id'], 'String');
      }
      if (data.hasOwnProperty('goal_name')) {
        obj['goal_name'] = ApiClient.convertToType(data['goal_name'], 'String');
      }
      if (data.hasOwnProperty('goal_type')) {
        obj['goal_type'] = ApiClient.convertToType(data['goal_type'], 'String');
      }
      if (data.hasOwnProperty('goal_update_date')) {
        obj['goal_update_date'] = ApiClient.convertToType(data['goal_update_date'], 'Date');
      }
      if (data.hasOwnProperty('is_decumulation')) {
        obj['is_decumulation'] = ApiClient.convertToType(data['is_decumulation'], 'Boolean');
      }
      if (data.hasOwnProperty('portfolios')) {
        obj['portfolios'] = ApiClient.convertToType(data['portfolios'], [VPortfolioVO]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/VAccountVO>} accounts
   */
  exports.prototype['accounts'] = undefined;
  /**
   * @member {Number} accumulation_horizon
   */
  exports.prototype['accumulation_horizon'] = undefined;
  /**
   * @member {Number} decumulation_horizon
   */
  exports.prototype['decumulation_horizon'] = undefined;
  /**
   * @member {Number} goal_amount
   */
  exports.prototype['goal_amount'] = undefined;
  /**
   * @member {Number} goal_asset_size_by_goal
   */
  exports.prototype['goal_asset_size_by_goal'] = undefined;
  /**
   * @member {Date} goal_asset_size_by_goal_date
   */
  exports.prototype['goal_asset_size_by_goal_date'] = undefined;
  /**
   * @member {String} goal_category
   */
  exports.prototype['goal_category'] = undefined;
  /**
   * @member {Date} goal_create_date
   */
  exports.prototype['goal_create_date'] = undefined;
  /**
   * @member {String} goal_id
   */
  exports.prototype['goal_id'] = undefined;
  /**
   * @member {String} goal_name
   */
  exports.prototype['goal_name'] = undefined;
  /**
   * @member {String} goal_type
   */
  exports.prototype['goal_type'] = undefined;
  /**
   * @member {Date} goal_update_date
   */
  exports.prototype['goal_update_date'] = undefined;
  /**
   * @member {Boolean} is_decumulation
   */
  exports.prototype['is_decumulation'] = undefined;
  /**
   * @member {Array.<module:model/VPortfolioVO>} portfolios
   */
  exports.prototype['portfolios'] = undefined;



  return exports;
}));


