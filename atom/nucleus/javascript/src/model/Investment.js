/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.5
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.Investment = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Investment model module.
   * @module model/Investment
   * @version 1.9.5
   */

  /**
   * Constructs a new <code>Investment</code>.
   * Investment Object
   * @alias module:model/Investment
   * @class
   * @param price {Number} price
   * @param quantity {Number} quantity
   * @param tradeSignal {String} tradeSignal
   */
  var exports = function(price, quantity, tradeSignal) {
    var _this = this;



    _this['price'] = price;
    _this['quantity'] = quantity;



    _this['trade_signal'] = tradeSignal;

  };

  /**
   * Constructs a <code>Investment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Investment} obj Optional instance to populate.
   * @return {module:model/Investment} The populated <code>Investment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fee')) {
        obj['fee'] = ApiClient.convertToType(data['fee'], 'Number');
      }
      if (data.hasOwnProperty('investment_type')) {
        obj['investment_type'] = ApiClient.convertToType(data['investment_type'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('settle_date')) {
        obj['settle_date'] = ApiClient.convertToType(data['settle_date'], 'Date');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('ticker_name')) {
        obj['ticker_name'] = ApiClient.convertToType(data['ticker_name'], 'String');
      }
      if (data.hasOwnProperty('trade_signal')) {
        obj['trade_signal'] = ApiClient.convertToType(data['trade_signal'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
    }
    return obj;
  }

  /**
   * fee
   * @member {Number} fee
   */
  exports.prototype['fee'] = undefined;
  /**
   * investmentType
   * @member {String} investment_type
   */
  exports.prototype['investment_type'] = undefined;
  /**
   * price
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * quantity
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * settleDate
   * @member {Date} settle_date
   */
  exports.prototype['settle_date'] = undefined;
  /**
   * ticker
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * tickerName
   * @member {String} ticker_name
   */
  exports.prototype['ticker_name'] = undefined;
  /**
   * tradeSignal
   * @member {String} trade_signal
   */
  exports.prototype['trade_signal'] = undefined;
  /**
   * value
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


