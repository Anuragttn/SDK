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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.NotificationClient = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NotificationClient model module.
   * @module model/NotificationClient
   * @version 1.8.0
   */

  /**
   * Constructs a new <code>NotificationClient</code>.
   * Notification Client Object
   * @alias module:model/NotificationClient
   * @class
   * @param clientId {String} client_id
   * @param notificationContent {String} notification_content
   * @param notificationDate {Date} notification_date
   * @param notificationId {String} notification_id
   */
  var exports = function(clientId, notificationContent, notificationDate, notificationId) {
    var _this = this;

    _this['client_id'] = clientId;





    _this['notification_content'] = notificationContent;
    _this['notification_date'] = notificationDate;
    _this['notification_id'] = notificationId;



  };

  /**
   * Constructs a <code>NotificationClient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationClient} obj Optional instance to populate.
   * @return {module:model/NotificationClient} The populated <code>NotificationClient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_read')) {
        obj['is_read'] = ApiClient.convertToType(data['is_read'], 'Boolean');
      }
      if (data.hasOwnProperty('is_sent')) {
        obj['is_sent'] = ApiClient.convertToType(data['is_sent'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('notification_content')) {
        obj['notification_content'] = ApiClient.convertToType(data['notification_content'], 'String');
      }
      if (data.hasOwnProperty('notification_date')) {
        obj['notification_date'] = ApiClient.convertToType(data['notification_date'], 'Date');
      }
      if (data.hasOwnProperty('notification_id')) {
        obj['notification_id'] = ApiClient.convertToType(data['notification_id'], 'String');
      }
      if (data.hasOwnProperty('notification_image')) {
        obj['notification_image'] = ApiClient.convertToType(data['notification_image'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * client_id
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} is_read
   */
  exports.prototype['is_read'] = undefined;
  /**
   * @member {Boolean} is_sent
   */
  exports.prototype['is_sent'] = undefined;
  /**
   * metadata
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * notification_content
   * @member {String} notification_content
   */
  exports.prototype['notification_content'] = undefined;
  /**
   * notification_date
   * @member {Date} notification_date
   */
  exports.prototype['notification_date'] = undefined;
  /**
   * notification_id
   * @member {String} notification_id
   */
  exports.prototype['notification_id'] = undefined;
  /**
   * notification_image
   * @member {String} notification_image
   */
  exports.prototype['notification_image'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


