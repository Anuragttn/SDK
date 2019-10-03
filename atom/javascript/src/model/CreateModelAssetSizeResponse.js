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
    define(['ApiClient', 'model/ModelAssetSizePayload', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelAssetSizePayload'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.CreateModelAssetSizeResponse = factory(root.atom_api.ApiClient, root.atom_api.ModelAssetSizePayload, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, ModelAssetSizePayload, SecondaryId) {
  'use strict';




  /**
   * The CreateModelAssetSizeResponse model module.
   * @module model/CreateModelAssetSizeResponse
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>CreateModelAssetSizeResponse</code>.
   * @alias module:model/CreateModelAssetSizeResponse
   * @class
   * @implements module:model/ModelAssetSizePayload
   * @param _date {Date} Date for this asset size record
   * @param assetSize {Number} “Growth of a dollar” within the model on the particular date
   * @param isReconciled {Boolean} Indicates the asset size record is reconciled. true means it is reconciled
   * @param modelId {String} The ID of the model for the asset size record
   */
  var exports = function(_date, assetSize, isReconciled, modelId) {
    var _this = this;

    ModelAssetSizePayload.call(_this, _date, assetSize, isReconciled, modelId);


  };

  /**
   * Constructs a <code>CreateModelAssetSizeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateModelAssetSizeResponse} obj Optional instance to populate.
   * @return {module:model/CreateModelAssetSizeResponse} The populated <code>CreateModelAssetSizeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ModelAssetSizePayload.constructFromObject(data, obj);
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
   * ID of the model asset size
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Datetime the model asset size was created
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;

  // Implement ModelAssetSizePayload interface:
  /**
   * Date for this asset size record
   * @member {Date} date
   */
exports.prototype['date'] = undefined;

  /**
   * “Growth of a dollar” within the model on the particular date
   * @member {Number} asset_size
   */
exports.prototype['asset_size'] = undefined;

  /**
   * Indicates the asset size record is reconciled. true means it is reconciled
   * @member {Boolean} is_reconciled
   */
exports.prototype['is_reconciled'] = undefined;

  /**
   * The ID of the model for the asset size record
   * @member {String} model_id
   */
exports.prototype['model_id'] = undefined;

  /**
   * Alphabetic currency code for the base currency of the model, limited to 3 characters
   * @member {String} currency_code
   */
exports.prototype['currency_code'] = undefined;

  /**
   * @member {module:model/SecondaryId} secondary_id
   */
exports.prototype['secondary_id'] = undefined;



  return exports;
}));


