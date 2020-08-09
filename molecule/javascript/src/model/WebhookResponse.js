/*
 * Molecule API Documentation
 * The Hydrogen Molecule API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
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
    if (!root.MoleculeApiDocumentation) {
      root.MoleculeApiDocumentation = {};
    }
    root.MoleculeApiDocumentation.WebhookResponse = factory(root.MoleculeApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WebhookResponse model module.
   * @module model/WebhookResponse
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>WebhookResponse</code>.
   * @alias module:model/WebhookResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WebhookResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookResponse} obj Optional instance to populate.
   * @return {module:model/WebhookResponse} The populated <code>WebhookResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('molecule_service'))
        obj.moleculeService = ApiClient.convertToType(data['molecule_service'], ['String']);
      if (data.hasOwnProperty('is_active'))
        obj.isActive = ApiClient.convertToType(data['is_active'], 'Boolean');
      if (data.hasOwnProperty('secret'))
        obj.secret = ApiClient.convertToType(data['secret'], 'String');
      if (data.hasOwnProperty('record_status'))
        obj.recordStatus = ApiClient.convertToType(data['record_status'], 'String');
      if (data.hasOwnProperty('create_date'))
        obj.createDate = ApiClient.convertToType(data['create_date'], 'Date');
      if (data.hasOwnProperty('update_date'))
        obj.updateDate = ApiClient.convertToType(data['update_date'], 'Date');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * @member {Array.<module:model/WebhookResponse.MoleculeServiceEnum>} moleculeService
   */
  exports.prototype.moleculeService = undefined;

  /**
   * @member {Boolean} isActive
   */
  exports.prototype.isActive = undefined;

  /**
   * @member {String} secret
   */
  exports.prototype.secret = undefined;

  /**
   * @member {String} recordStatus
   */
  exports.prototype.recordStatus = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype.createDate = undefined;

  /**
   * @member {Date} updateDate
   */
  exports.prototype.updateDate = undefined;


  /**
   * Allowed values for the <code>moleculeService</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MoleculeServiceEnum = {
    /**
     * value: "whitelist_admin"
     * @const
     */
    whitelistAdmin: "whitelist_admin",

    /**
     * value: "whitelisted"
     * @const
     */
    whitelisted: "whitelisted",

    /**
     * value: "token_transfer"
     * @const
     */
    tokenTransfer: "token_transfer",

    /**
     * value: "token_balance"
     * @const
     */
    tokenBalance: "token_balance",

    /**
     * value: "token_supply_balance"
     * @const
     */
    tokenSupplyBalance: "token_supply_balance",

    /**
     * value: "currency_transfer"
     * @const
     */
    currencyTransfer: "currency_transfer",

    /**
     * value: "currency_balance"
     * @const
     */
    currencyBalance: "currency_balance",

    /**
     * value: "transaction"
     * @const
     */
    transaction: "transaction"
  };

  return exports;

}));