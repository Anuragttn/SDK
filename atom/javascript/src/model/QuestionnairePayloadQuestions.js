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
    define(['ApiClient', 'model/QuestionnairePayloadAnswers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./QuestionnairePayloadAnswers'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.QuestionnairePayloadQuestions = factory(root.atom_api.ApiClient, root.atom_api.QuestionnairePayloadAnswers);
  }
}(this, function(ApiClient, QuestionnairePayloadAnswers) {
  'use strict';




  /**
   * The QuestionnairePayloadQuestions model module.
   * @module model/QuestionnairePayloadQuestions
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>QuestionnairePayloadQuestions</code>.
   * @alias module:model/QuestionnairePayloadQuestions
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>QuestionnairePayloadQuestions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuestionnairePayloadQuestions} obj Optional instance to populate.
   * @return {module:model/QuestionnairePayloadQuestions} The populated <code>QuestionnairePayloadQuestions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('subcategory')) {
        obj['subcategory'] = ApiClient.convertToType(data['subcategory'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('question_type')) {
        obj['question_type'] = ApiClient.convertToType(data['question_type'], 'String');
      }
      if (data.hasOwnProperty('order_index')) {
        obj['order_index'] = ApiClient.convertToType(data['order_index'], 'String');
      }
      if (data.hasOwnProperty('document')) {
        obj['document'] = ApiClient.convertToType(data['document'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
      if (data.hasOwnProperty('is_account')) {
        obj['is_account'] = ApiClient.convertToType(data['is_account'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('answers')) {
        obj['answers'] = ApiClient.convertToType(data['answers'], [QuestionnairePayloadAnswers]);
      }
    }
    return obj;
  }

  /**
   * A category for the question such as “Onboarding” or “Risk Profile”
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * A subcategory for the question such as “Income-related”
   * @member {String} subcategory
   */
  exports.prototype['subcategory'] = undefined;
  /**
   * Title for the question such as the body of the question or a header. Pairs with the description field
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Description for the question such as additioonal question content. Pairs with the title field
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The type of question structure such as “multiple_choice” or “free_form”
   * @member {String} question_type
   */
  exports.prototype['question_type'] = undefined;
  /**
   * The order of the question within the questionnaire or category such as “1”, “2”, “3”
   * @member {String} order_index
   */
  exports.prototype['order_index'] = undefined;
  /**
   * A reference link to a document related to the question
   * @member {String} document
   */
  exports.prototype['document'] = undefined;
  /**
   * A reference link to an image associated with the question
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * The weight of the question as a percentage of the total questionnaire if each question does not contribute equally when calculating the final “score”; ex. 20 representing 20%. Weights of all the questions must add up to 100
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;
  /**
   * Indicates if the question is answered at an account-level
   * @member {Boolean} is_account
   */
  exports.prototype['is_account'] = undefined;
  /**
   * Custom information associated with the question in the format key:value
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Array.<module:model/QuestionnairePayloadAnswers>} answers
   */
  exports.prototype['answers'] = undefined;



  return exports;
}));


