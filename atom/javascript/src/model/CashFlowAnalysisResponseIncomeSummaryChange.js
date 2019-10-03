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
    root.atom_api.CashFlowAnalysisResponseIncomeSummaryChange = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CashFlowAnalysisResponseIncomeSummaryChange model module.
   * @module model/CashFlowAnalysisResponseIncomeSummaryChange
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>CashFlowAnalysisResponseIncomeSummaryChange</code>.
   * @alias module:model/CashFlowAnalysisResponseIncomeSummaryChange
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CashFlowAnalysisResponseIncomeSummaryChange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CashFlowAnalysisResponseIncomeSummaryChange} obj Optional instance to populate.
   * @return {module:model/CashFlowAnalysisResponseIncomeSummaryChange} The populated <code>CashFlowAnalysisResponseIncomeSummaryChange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('percentage')) {
        obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Absolute difference in total income between the base time period and the benchmark time period
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Percentage difference in total income between the base time period and the benchmark time period
   * @member {Number} percentage
   */
  exports.prototype['percentage'] = undefined;



  return exports;
}));


