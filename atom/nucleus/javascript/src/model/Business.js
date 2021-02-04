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
    define(['ApiClient', 'model/BusinessAddress', 'model/Ownership'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BusinessAddress'), require('./Ownership'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.Business = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.BusinessAddress, root.HydrogenNucleusApi.Ownership);
  }
}(this, function(ApiClient, BusinessAddress, Ownership) {
  'use strict';




  /**
   * The Business model module.
   * @module model/Business
   * @version 1.8.0
   */

  /**
   * Constructs a new <code>Business</code>.
   * Business Object
   * @alias module:model/Business
   * @class
   * @param incorporationDate {Date} incorporationDate
   * @param legalName {String} legalName
   */
  var exports = function(legalName) {
    var _this = this;





    _this['legal_name'] = legalName;










  };

  /**
   * Constructs a <code>Business</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Business} obj Optional instance to populate.
   * @return {module:model/Business} The populated <code>Business</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], [BusinessAddress]);
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('dba_name')) {
        obj['dba_name'] = ApiClient.convertToType(data['dba_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('identification_number')) {
        obj['identification_number'] = ApiClient.convertToType(data['identification_number'], 'String');
      }
      if (data.hasOwnProperty('identification_number_type')) {
        obj['identification_number_type'] = ApiClient.convertToType(data['identification_number_type'], 'String');
      }
      if (data.hasOwnProperty('incorporation_country')) {
        obj['incorporation_country'] = ApiClient.convertToType(data['incorporation_country'], 'String');
      }
      if (data.hasOwnProperty('incorporation_date')) {
        obj['incorporation_date'] = ApiClient.convertToType(data['incorporation_date'], 'Date');
      }
      if (data.hasOwnProperty('incorporation_state')) {
        obj['incorporation_state'] = ApiClient.convertToType(data['incorporation_state'], 'String');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('is_public')) {
        obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
      }
      if (data.hasOwnProperty('is_verified')) {
        obj['is_verified'] = ApiClient.convertToType(data['is_verified'], 'Boolean');
      }
      if (data.hasOwnProperty('legal_name')) {
        obj['legal_name'] = ApiClient.convertToType(data['legal_name'], 'String');
      }
      if (data.hasOwnProperty('legal_structure')) {
        obj['legal_structure'] = ApiClient.convertToType(data['legal_structure'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('ownership')) {
        obj['ownership'] = ApiClient.convertToType(data['ownership'], [Ownership]);
      }
      if (data.hasOwnProperty('phone_number')) {
        obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('subcategory')) {
        obj['subcategory'] = ApiClient.convertToType(data['subcategory'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BusinessAddress>} address
   */
  exports.prototype['address'] = undefined;
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
   * dbaName
   * @member {String} dba_name
   */
  exports.prototype['dba_name'] = undefined;
  /**
   * email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * identificationNumber
   * @member {String} identification_number
   */
  exports.prototype['identification_number'] = undefined;
  /**
   * identificationNumberType
   * @member {String} identification_number_type
   */
  exports.prototype['identification_number_type'] = undefined;
  /**
   * incorporationCountry
   * @member {String} incorporation_country
   */
  exports.prototype['incorporation_country'] = undefined;
  /**
   * incorporationDate
   * @member {Date} incorporation_date
   */
  exports.prototype['incorporation_date'] = undefined;
  /**
   * incorporationState
   * @member {String} incorporation_state
   */
  exports.prototype['incorporation_state'] = undefined;
  /**
   * is_active
   * @member {Boolean} is_active
   */
  exports.prototype['is_active'] = undefined;
  /**
   * is_public
   * @member {Boolean} is_public
   */
  exports.prototype['is_public'] = undefined;
  /**
   * is_verified
   * @member {Boolean} is_verified
   */
  exports.prototype['is_verified'] = undefined;
  /**
   * legalName
   * @member {String} legal_name
   */
  exports.prototype['legal_name'] = undefined;
  /**
   * legalStructure
   * @member {String} legal_structure
   */
  exports.prototype['legal_structure'] = undefined;
  /**
   * metadata
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * ownership
   * @member {Array.<module:model/Ownership>} ownership
   */
  exports.prototype['ownership'] = undefined;
  /**
   * phoneNumber
   * @member {String} phone_number
   */
  exports.prototype['phone_number'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * status
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * subcategory
   * @member {String} subcategory
   */
  exports.prototype['subcategory'] = undefined;
  /**
   * ticker
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;
  /**
   * website
   * @member {String} website
   */
  exports.prototype['website'] = undefined;



  return exports;
}));


