/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
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
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.BusinessVendorRequestDataVO = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.BusinessAddress, root.HydrogenIntegrationApi.Ownership);
  }
}(this, function(ApiClient, BusinessAddress, Ownership) {
  'use strict';

  /**
   * The BusinessVendorRequestDataVO model module.
   * @module model/BusinessVendorRequestDataVO
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>BusinessVendorRequestDataVO</code>.
   * @alias module:model/BusinessVendorRequestDataVO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BusinessVendorRequestDataVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinessVendorRequestDataVO} obj Optional instance to populate.
   * @return {module:model/BusinessVendorRequestDataVO} The populated <code>BusinessVendorRequestDataVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('business_addresses'))
        obj.businessAddresses = ApiClient.convertToType(data['business_addresses'], [BusinessAddress]);
      if (data.hasOwnProperty('dba_name'))
        obj.dbaName = ApiClient.convertToType(data['dba_name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('identification_number'))
        obj.identificationNumber = ApiClient.convertToType(data['identification_number'], 'String');
      if (data.hasOwnProperty('identification_number_type'))
        obj.identificationNumberType = ApiClient.convertToType(data['identification_number_type'], 'String');
      if (data.hasOwnProperty('incorporation_date'))
        obj.incorporationDate = ApiClient.convertToType(data['incorporation_date'], 'Date');
      if (data.hasOwnProperty('incorporation_state'))
        obj.incorporationState = ApiClient.convertToType(data['incorporation_state'], 'String');
      if (data.hasOwnProperty('is_public'))
        obj.isPublic = ApiClient.convertToType(data['is_public'], 'Boolean');
      if (data.hasOwnProperty('legal_name'))
        obj.legalName = ApiClient.convertToType(data['legal_name'], 'String');
      if (data.hasOwnProperty('legal_structure'))
        obj.legalStructure = ApiClient.convertToType(data['legal_structure'], 'String');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      if (data.hasOwnProperty('owners'))
        obj.owners = ApiClient.convertToType(data['owners'], [Ownership]);
      if (data.hasOwnProperty('phone_number'))
        obj.phoneNumber = ApiClient.convertToType(data['phone_number'], 'String');
      if (data.hasOwnProperty('ticker'))
        obj.ticker = ApiClient.convertToType(data['ticker'], 'String');
      if (data.hasOwnProperty('website'))
        obj.website = ApiClient.convertToType(data['website'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/BusinessAddress>} businessAddresses
   */
  exports.prototype.businessAddresses = undefined;

  /**
   * @member {String} dbaName
   */
  exports.prototype.dbaName = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} identificationNumber
   */
  exports.prototype.identificationNumber = undefined;

  /**
   * @member {String} identificationNumberType
   */
  exports.prototype.identificationNumberType = undefined;

  /**
   * @member {Date} incorporationDate
   */
  exports.prototype.incorporationDate = undefined;

  /**
   * @member {String} incorporationState
   */
  exports.prototype.incorporationState = undefined;

  /**
   * @member {Boolean} isPublic
   */
  exports.prototype.isPublic = undefined;

  /**
   * @member {String} legalName
   */
  exports.prototype.legalName = undefined;

  /**
   * @member {String} legalStructure
   */
  exports.prototype.legalStructure = undefined;

  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {Array.<module:model/Ownership>} owners
   */
  exports.prototype.owners = undefined;

  /**
   * @member {String} phoneNumber
   */
  exports.prototype.phoneNumber = undefined;

  /**
   * @member {String} ticker
   */
  exports.prototype.ticker = undefined;

  /**
   * @member {String} website
   */
  exports.prototype.website = undefined;


  return exports;

}));