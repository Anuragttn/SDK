/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
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
    define(['ApiClient', 'model/FAQKeyword'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FAQKeyword'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.Faq = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.FAQKeyword);
  }
}(this, function(ApiClient, FAQKeyword) {
  'use strict';




  /**
   * The Faq model module.
   * @module model/Faq
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>Faq</code>.
   * Faq Object
   * @alias module:model/Faq
   * @class
   * @param answer {String} answer
   * @param question {String} question
   */
  var exports = function(answer, question) {
    var _this = this;

    _this['answer'] = answer;








    _this['question'] = question;




  };

  /**
   * Constructs a <code>Faq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Faq} obj Optional instance to populate.
   * @return {module:model/Faq} The populated <code>Faq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('answer')) {
        obj['answer'] = ApiClient.convertToType(data['answer'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('faq_keywords')) {
        obj['faq_keywords'] = ApiClient.convertToType(data['faq_keywords'], [FAQKeyword]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('is_featured')) {
        obj['is_featured'] = ApiClient.convertToType(data['is_featured'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Number');
      }
      if (data.hasOwnProperty('question')) {
        obj['question'] = ApiClient.convertToType(data['question'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('seo_name')) {
        obj['seo_name'] = ApiClient.convertToType(data['seo_name'], 'String');
      }
      if (data.hasOwnProperty('subcategory')) {
        obj['subcategory'] = ApiClient.convertToType(data['subcategory'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * answer
   * @member {String} answer
   */
  exports.prototype['answer'] = undefined;
  /**
   * category
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * @member {Array.<module:model/FAQKeyword>} faq_keywords
   */
  exports.prototype['faq_keywords'] = undefined;
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
   * isFeatured
   * @member {Boolean} is_featured
   */
  exports.prototype['is_featured'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * number
   * @member {Number} number
   */
  exports.prototype['number'] = undefined;
  /**
   * question
   * @member {String} question
   */
  exports.prototype['question'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * seoName
   * @member {String} seo_name
   */
  exports.prototype['seo_name'] = undefined;
  /**
   * subcategory
   * @member {String} subcategory
   */
  exports.prototype['subcategory'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));

