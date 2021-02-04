/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
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
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.BrokerageHoldingVO = factory(root.HydrogenIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BrokerageHoldingVO model module.
   * @module model/BrokerageHoldingVO
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>BrokerageHoldingVO</code>.
   * @alias module:model/BrokerageHoldingVO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BrokerageHoldingVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerageHoldingVO} obj Optional instance to populate.
   * @return {module:model/BrokerageHoldingVO} The populated <code>BrokerageHoldingVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('nucleus_holdings_posted'))
        obj.nucleusHoldingsPosted = ApiClient.convertToType(data['nucleus_holdings_posted'], Object);
      if (data.hasOwnProperty('nucleus_portfolio_id'))
        obj.nucleusPortfolioId = ApiClient.convertToType(data['nucleus_portfolio_id'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('vendor_name'))
        obj.vendorName = ApiClient.convertToType(data['vendor_name'], 'String');
      if (data.hasOwnProperty('vendor_response'))
        obj.vendorResponse = ApiClient.convertToType(data['vendor_response'], Object);
    }
    return obj;
  }

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * @member {Object} nucleusHoldingsPosted
   */
  exports.prototype.nucleusHoldingsPosted = undefined;

  /**
   * @member {String} nucleusPortfolioId
   */
  exports.prototype.nucleusPortfolioId = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} vendorName
   */
  exports.prototype.vendorName = undefined;

  /**
   * @member {Object} vendorResponse
   */
  exports.prototype.vendorResponse = undefined;


  return exports;

}));
