/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2-SNAPSHOT
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
    root.atom_api.FaqPayloadFaqKeywords = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FaqPayloadFaqKeywords model module.
   * @module model/FaqPayloadFaqKeywords
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>FaqPayloadFaqKeywords</code>.
   * @alias module:model/FaqPayloadFaqKeywords
   * @class
   * @param keyword {String} The content of the keyword that is referenced or searched by the user to identify the FAQ. Can be a single word or a phrase
   * @param priority {Number} The priority of the keyword in comparison to the other keywords, based on how closely it is related to the FAQ
   */
  var exports = function(keyword, priority) {
    var _this = this;

    _this['keyword'] = keyword;
    _this['priority'] = priority;
  };

  /**
   * Constructs a <code>FaqPayloadFaqKeywords</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FaqPayloadFaqKeywords} obj Optional instance to populate.
   * @return {module:model/FaqPayloadFaqKeywords} The populated <code>FaqPayloadFaqKeywords</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('keyword')) {
        obj['keyword'] = ApiClient.convertToType(data['keyword'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The content of the keyword that is referenced or searched by the user to identify the FAQ. Can be a single word or a phrase
   * @member {String} keyword
   */
  exports.prototype['keyword'] = undefined;
  /**
   * The priority of the keyword in comparison to the other keywords, based on how closely it is related to the FAQ
   * @member {Number} priority
   */
  exports.prototype['priority'] = undefined;



  return exports;
}));

