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
    define(['ApiClient', 'model/DocumentPayload', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentPayload'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.CreateDocumentResponse = factory(root.atom_api.ApiClient, root.atom_api.DocumentPayload, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, DocumentPayload, SecondaryId) {
  'use strict';




  /**
   * The CreateDocumentResponse model module.
   * @module model/CreateDocumentResponse
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>CreateDocumentResponse</code>.
   * @alias module:model/CreateDocumentResponse
   * @class
   * @implements module:model/DocumentPayload
   * @param docSize {Number} Size of the document. Must be a whole number
   */
  var exports = function(docSize) {
    var _this = this;

    DocumentPayload.call(_this, docSize);


  };

  /**
   * Constructs a <code>CreateDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateDocumentResponse} obj Optional instance to populate.
   * @return {module:model/CreateDocumentResponse} The populated <code>CreateDocumentResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      DocumentPayload.constructFromObject(data, obj);
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
   * ID of the document
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Datetime the document was created
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;

  // Implement DocumentPayload interface:
  /**
   * Size of the document. Must be a whole number
   * @member {Number} doc_size
   */
exports.prototype['doc_size'] = undefined;

  /**
   * Name or title of the document
   * @member {String} doc_name
   */
exports.prototype['doc_name'] = undefined;

  /**
   * Type of document such as “Compliance” or “Registration”
   * @member {String} doc_type
   */
exports.prototype['doc_type'] = undefined;

  /**
   * File path or content for the document
   * @member {String} doc_file
   */
exports.prototype['doc_file'] = undefined;

  /**
   * URL path for the document such as http://domain.com/sample.pdf
   * @member {String} url_path
   */
exports.prototype['url_path'] = undefined;

  /**
   * In the case that the document relates to a specific Client, the ID of the client
   * @member {String} client_id
   */
exports.prototype['client_id'] = undefined;

  /**
   * In the case that the document relates to a specific Account, the ID of the account
   * @member {String} account_id
   */
exports.prototype['account_id'] = undefined;

  /**
   * Custom information associated with the document in the format key:value
   * @member {Object} metadata
   */
exports.prototype['metadata'] = undefined;

  /**
   * @member {module:model/SecondaryId} secondary_id
   */
exports.prototype['secondary_id'] = undefined;



  return exports;
}));


