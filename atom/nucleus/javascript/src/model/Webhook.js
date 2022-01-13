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
    root.HydrogenNucleusApi.Webhook = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Webhook model module.
   * @module model/Webhook
   * @version 1.9.5
   */

  /**
   * Constructs a new <code>Webhook</code>.
   * Webhook Object
   * @alias module:model/Webhook
   * @class
   * @param url {String} url
   */
  var exports = function(url) {
    var _this = this;








    _this['url'] = url;
  };

  /**
   * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Webhook} obj Optional instance to populate.
   * @return {module:model/Webhook} The populated <code>Webhook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('atom_service')) {
        obj['atom_service'] = ApiClient.convertToType(data['atom_service'], ['String']);
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('secret')) {
        obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * atom_service
   * @member {Array.<module:model/Webhook.AtomServiceEnum>} atom_service
   */
  exports.prototype['atom_service'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * isActive
   * @member {Boolean} is_active
   */
  exports.prototype['is_active'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * @member {String} secret
   */
  exports.prototype['secret'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;
  /**
   * url
   * @member {String} url
   */
  exports.prototype['url'] = undefined;


  /**
   * Allowed values for the <code>atomService</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AtomServiceEnum = {
    /**
     * value: "client"
     * @const
     */
    "client": "client",
    /**
     * value: "client_status"
     * @const
     */
    "client_status": "client_status",
    /**
     * value: "account_status"
     * @const
     */
    "account_status": "account_status",
    /**
     * value: "account"
     * @const
     */
    "account": "account",
    /**
     * value: "card"
     * @const
     */
    "card": "card",
    /**
     * value: "card_status"
     * @const
     */
    "card_status": "card_status",
    /**
     * value: "portfolio_asset_size"
     * @const
     */
    "portfolio_asset_size": "portfolio_asset_size",
    /**
     * value: "portfolio_transaction"
     * @const
     */
    "portfolio_transaction": "portfolio_transaction",
    /**
     * value: "portfolio_transaction_status"
     * @const
     */
    "portfolio_transaction_status": "portfolio_transaction_status",
    /**
     * value: "portfolio_holding"
     * @const
     */
    "portfolio_holding": "portfolio_holding",
    /**
     * value: "aggregation_account"
     * @const
     */
    "aggregation_account": "aggregation_account",
    /**
     * value: "aggregation_account_status"
     * @const
     */
    "aggregation_account_status": "aggregation_account_status",
    /**
     * value: "notification_client"
     * @const
     */
    "notification_client": "notification_client",
    /**
     * value: "aggregation_account_balance"
     * @const
     */
    "aggregation_account_balance": "aggregation_account_balance",
    /**
     * value: "audit_log"
     * @const
     */
    "audit_log": "audit_log",
    /**
     * value: "support_ticket"
     * @const
     */
    "support_ticket": "support_ticket",
    /**
     * value: "feature_track"
     * @const
     */
    "feature_track": "feature_track",
    /**
     * value: "aggregation_account_transaction"
     * @const
     */
    "aggregation_account_transaction": "aggregation_account_transaction",
    /**
     * value: "aggregation_account_transaction_status"
     * @const
     */
    "aggregation_account_transaction_status": "aggregation_account_transaction_status",
    /**
     * value: "aggregation_account_holding"
     * @const
     */
    "aggregation_account_holding": "aggregation_account_holding",
    /**
     * value: "order_track"
     * @const
     */
    "order_track": "order_track",
    /**
     * value: "funding"
     * @const
     */
    "funding": "funding",
    /**
     * value: "funding_status"
     * @const
     */
    "funding_status": "funding_status",
    /**
     * value: "budget"
     * @const
     */
    "budget": "budget",
    /**
     * value: "document"
     * @const
     */
    "document": "document",
    /**
     * value: "client_response"
     * @const
     */
    "client_response": "client_response",
    /**
     * value: "client_verified"
     * @const
     */
    "client_verified": "client_verified",
    /**
     * value: "document_verified"
     * @const
     */
    "document_verified": "document_verified",
    /**
     * value: "bank_link_verified"
     * @const
     */
    "bank_link_verified": "bank_link_verified"  };


  return exports;
}));


