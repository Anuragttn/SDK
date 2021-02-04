/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.RiskScoreRequest = factory(root.HydrogenProtonApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RiskScoreRequest model module.
   * @module model/RiskScoreRequest
   * @version 1.8.0
   */

  /**
   * Constructs a new <code>RiskScoreRequest</code>.
   * @alias module:model/RiskScoreRequest
   * @class
   * @param maxAnswers {Array.<Number>} 
   */
  var exports = function(maxAnswers) {
    this.maxAnswers = maxAnswers;
  };

  /**
   * Constructs a <code>RiskScoreRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskScoreRequest} obj Optional instance to populate.
   * @return {module:model/RiskScoreRequest} The populated <code>RiskScoreRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('post_score'))
        obj.postScore = ApiClient.convertToType(data['post_score'], 'Boolean');
      if (data.hasOwnProperty('weights'))
        obj.weights = ApiClient.convertToType(data['weights'], ['Number']);
      if (data.hasOwnProperty('max_answers'))
        obj.maxAnswers = ApiClient.convertToType(data['max_answers'], ['Number']);
      if (data.hasOwnProperty('client_id'))
        obj.clientId = ApiClient.convertToType(data['client_id'], 'String');
      if (data.hasOwnProperty('answers'))
        obj.answers = ApiClient.convertToType(data['answers'], ['Number']);
      if (data.hasOwnProperty('questionnaire_id'))
        obj.questionnaireId = ApiClient.convertToType(data['questionnaire_id'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} postScore
   * @default false
   */
  exports.prototype.postScore = false;

  /**
   * @member {Array.<Number>} weights
   */
  exports.prototype.weights = undefined;

  /**
   * @member {Array.<Number>} maxAnswers
   */
  exports.prototype.maxAnswers = undefined;

  /**
   * @member {String} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * @member {Array.<Number>} answers
   */
  exports.prototype.answers = undefined;

  /**
   * @member {String} questionnaireId
   */
  exports.prototype.questionnaireId = undefined;

  return exports;

}));
