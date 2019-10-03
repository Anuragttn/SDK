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
    define(['ApiClient', 'model/CreatePortfolioResponse', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreatePortfolioResponse'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.SpecificPortfolioResponse = factory(root.atom_api.ApiClient, root.atom_api.CreatePortfolioResponse, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, CreatePortfolioResponse, SecondaryId) {
  'use strict';




  /**
   * The SpecificPortfolioResponse model module.
   * @module model/SpecificPortfolioResponse
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>SpecificPortfolioResponse</code>.
   * @alias module:model/SpecificPortfolioResponse
   * @class
   * @implements module:model/CreatePortfolioResponse
   * @param name {String} Name of the portfolio such as “Stock”
   * @param accountId {String} The ID of the account to which the portfolio belongs
   * @param modelId {String} The ID of the model to which the portfolio subscribes
   * @param percentage {Number} Weight of the portfolio as a percentage of an account based on the weight of the portfolio’s model within the account’s allocation; ex. 20 representing 20%. If the account only has one portfolio input 100
   */
  var exports = function(name, accountId, modelId, percentage) {
    var _this = this;

    CreatePortfolioResponse.call(_this, name, accountId, modelId, percentage);

  };

  /**
   * Constructs a <code>SpecificPortfolioResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpecificPortfolioResponse} obj Optional instance to populate.
   * @return {module:model/SpecificPortfolioResponse} The populated <code>SpecificPortfolioResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      CreatePortfolioResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'String');
      }
    }
    return obj;
  }

  /**
   * Datetime the portfolio was last updated
   * @member {String} update_date
   */
  exports.prototype['update_date'] = undefined;

  // Implement CreatePortfolioResponse interface:
  /**
   * Name of the portfolio such as “Stock”
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * The ID of the account to which the portfolio belongs
   * @member {String} account_id
   */
exports.prototype['account_id'] = undefined;

  /**
   * The ID of the model to which the portfolio subscribes
   * @member {String} model_id
   */
exports.prototype['model_id'] = undefined;

  /**
   * Weight of the portfolio as a percentage of an account based on the weight of the portfolio’s model within the account’s allocation; ex. 20 representing 20%. If the account only has one portfolio input 100
   * @member {Number} percentage
   */
exports.prototype['percentage'] = undefined;

  /**
   * Description for the portfolio such as “Stock Portfolio”
   * @member {String} description
   */
exports.prototype['description'] = undefined;

  /**
   * Alphabetic currency code for the base currency of the portfolio, limited to 3 characters
   * @member {String} currency_code
   */
exports.prototype['currency_code'] = undefined;

  /**
   * Custom information associated with the portfolio in the format key:value
   * @member {Object} metadata
   */
exports.prototype['metadata'] = undefined;

  /**
   * @member {module:model/SecondaryId} secondary_id
   */
exports.prototype['secondary_id'] = undefined;

  /**
   * ID of the portfolio
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * Datetime the portfolio was created
   * @member {String} create_date
   */
exports.prototype['create_date'] = undefined;



  return exports;
}));


