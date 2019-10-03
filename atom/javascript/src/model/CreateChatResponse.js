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
    define(['ApiClient', 'model/ChatPayload', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChatPayload'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.CreateChatResponse = factory(root.atom_api.ApiClient, root.atom_api.ChatPayload, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, ChatPayload, SecondaryId) {
  'use strict';




  /**
   * The CreateChatResponse model module.
   * @module model/CreateChatResponse
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>CreateChatResponse</code>.
   * @alias module:model/CreateChatResponse
   * @class
   * @implements module:model/ChatPayload
   * @param chatLog {String} Short description of the subject of the chat
   */
  var exports = function(chatLog) {
    var _this = this;

    ChatPayload.call(_this, chatLog);


  };

  /**
   * Constructs a <code>CreateChatResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateChatResponse} obj Optional instance to populate.
   * @return {module:model/CreateChatResponse} The populated <code>CreateChatResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ChatPayload.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of the chat log
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Datetime the chat log was created
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;

  // Implement ChatPayload interface:
  /**
   * Short description of the subject of the chat
   * @member {String} chat_log
   */
exports.prototype['chat_log'] = undefined;

  /**
   * The ID of the internal user to whom the chat is assigned
   * @member {String} assigned_to
   */
exports.prototype['assigned_to'] = undefined;

  /**
   * Additional information on the content of the chat
   * @member {String} comments
   */
exports.prototype['comments'] = undefined;

  /**
   * Indicates if there is a notification associated with the chat log. Defaults to true or that there is a notification
   * @member {Boolean} is_notification
   * @default true
   */
exports.prototype['is_notification'] = true;

  /**
   * Indicates if the chat is still open. Defaults to true which indicates that the chat is still open
   * @member {Boolean} is_open
   * @default true
   */
exports.prototype['is_open'] = true;

  /**
   * @member {module:model/SecondaryId} secondary_id
   */
exports.prototype['secondary_id'] = undefined;

  /**
   * Custom information associated with the chat in the format key:value
   * @member {Object} metadata
   */
exports.prototype['metadata'] = undefined;



  return exports;
}));


