/**
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.SMS = factory(root.HydrogenIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SMS model module.
   * @module model/SMS
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>SMS</code>.
   * SMS Object
   * @alias module:model/SMS
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>SMS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SMS} obj Optional instance to populate.
   * @return {module:model/SMS} The populated <code>SMS</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('delivery_status')) {
        obj['delivery_status'] = ApiClient.convertToType(data['delivery_status'], 'String');
      }
      if (data.hasOwnProperty('delivery_status_timestamp')) {
        obj['delivery_status_timestamp'] = ApiClient.convertToType(data['delivery_status_timestamp'], 'Date');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('nucleus_business_id')) {
        obj['nucleus_business_id'] = ApiClient.convertToType(data['nucleus_business_id'], 'String');
      }
      if (data.hasOwnProperty('nucleus_client_id')) {
        obj['nucleus_client_id'] = ApiClient.convertToType(data['nucleus_client_id'], 'String');
      }
      if (data.hasOwnProperty('reply_message')) {
        obj['reply_message'] = ApiClient.convertToType(data['reply_message'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('sms_id')) {
        obj['sms_id'] = ApiClient.convertToType(data['sms_id'], 'String');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
      if (data.hasOwnProperty('vendor_account_id')) {
        obj['vendor_account_id'] = ApiClient.convertToType(data['vendor_account_id'], 'String');
      }
      if (data.hasOwnProperty('vendor_id')) {
        obj['vendor_id'] = ApiClient.convertToType(data['vendor_id'], 'String');
      }
      if (data.hasOwnProperty('vendor_name')) {
        obj['vendor_name'] = ApiClient.convertToType(data['vendor_name'], 'String');
      }
      if (data.hasOwnProperty('vendor_sms_id')) {
        obj['vendor_sms_id'] = ApiClient.convertToType(data['vendor_sms_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * deliveryStatus
   * @member {String} delivery_status
   */
  exports.prototype['delivery_status'] = undefined;
  /**
   * deliveryStatusTimestamp
   * @member {Date} delivery_status_timestamp
   */
  exports.prototype['delivery_status_timestamp'] = undefined;
  /**
   * from
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * nucleusBusinessId
   * @member {String} nucleus_business_id
   */
  exports.prototype['nucleus_business_id'] = undefined;
  /**
   * nucleusClientId
   * @member {String} nucleus_client_id
   */
  exports.prototype['nucleus_client_id'] = undefined;
  /**
   * replyMessage
   * @member {String} reply_message
   */
  exports.prototype['reply_message'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * @member {String} sms_id
   */
  exports.prototype['sms_id'] = undefined;
  /**
   * to
   * @member {String} to
   */
  exports.prototype['to'] = undefined;
  /**
   * type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;
  /**
   * @member {String} vendor_account_id
   */
  exports.prototype['vendor_account_id'] = undefined;
  /**
   * vendorId
   * @member {String} vendor_id
   */
  exports.prototype['vendor_id'] = undefined;
  /**
   * @member {String} vendor_name
   */
  exports.prototype['vendor_name'] = undefined;
  /**
   * @member {String} vendor_sms_id
   */
  exports.prototype['vendor_sms_id'] = undefined;



  return exports;
}));

