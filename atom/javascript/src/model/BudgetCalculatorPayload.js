/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8-SNAPSHOT
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
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.BudgetCalculatorPayload = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BudgetCalculatorPayload model module.
   * @module model/BudgetCalculatorPayload
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>BudgetCalculatorPayload</code>.
   * @alias module:model/BudgetCalculatorPayload
   * @class
   * @param budgetId {String} Identifier for a budget defined in Nucleus
   */
  var exports = function(budgetId) {
    var _this = this;

    _this['budget_id'] = budgetId;



  };

  /**
   * Constructs a <code>BudgetCalculatorPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BudgetCalculatorPayload} obj Optional instance to populate.
   * @return {module:model/BudgetCalculatorPayload} The populated <code>BudgetCalculatorPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('budget_id')) {
        obj['budget_id'] = ApiClient.convertToType(data['budget_id'], 'String');
      }
      if (data.hasOwnProperty('as_of_date')) {
        obj['as_of_date'] = ApiClient.convertToType(data['as_of_date'], 'Date');
      }
      if (data.hasOwnProperty('lookback_periods')) {
        obj['lookback_periods'] = ApiClient.convertToType(data['lookback_periods'], 'Number');
      }
      if (data.hasOwnProperty('relative_lookback')) {
        obj['relative_lookback'] = ApiClient.convertToType(data['relative_lookback'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Identifier for a budget defined in Nucleus
   * @member {String} budget_id
   */
  exports.prototype['budget_id'] = undefined;
  /**
   * Reference date of the analysis. Calculations will run through the earlier of this date and budget.end_date
   * @member {Date} as_of_date
   */
  exports.prototype['as_of_date'] = undefined;
  /**
   * Number of lookback periods to analyze. Each period length is defined by the combination of budget.frequency and budget.frequency_unit
   * @member {Number} lookback_periods
   */
  exports.prototype['lookback_periods'] = undefined;
  /**
   * If true, determine dates using a relative calendar basis
   * @member {Boolean} relative_lookback
   */
  exports.prototype['relative_lookback'] = undefined;



  return exports;
}));


