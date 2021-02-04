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
    define(['ApiClient', 'model/BusinessAddress', 'model/ClientAddress', 'model/Ownership'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BusinessAddress'), require('./ClientAddress'), require('./Ownership'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.KycVendorRequestDataVO = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.BusinessAddress, root.HydrogenIntegrationApi.ClientAddress, root.HydrogenIntegrationApi.Ownership);
  }
}(this, function(ApiClient, BusinessAddress, ClientAddress, Ownership) {
  'use strict';

  /**
   * The KycVendorRequestDataVO model module.
   * @module model/KycVendorRequestDataVO
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>KycVendorRequestDataVO</code>.
   * @alias module:model/KycVendorRequestDataVO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>KycVendorRequestDataVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KycVendorRequestDataVO} obj Optional instance to populate.
   * @return {module:model/KycVendorRequestDataVO} The populated <code>KycVendorRequestDataVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], [ClientAddress]);
      if (data.hasOwnProperty('business_addresses'))
        obj.businessAddresses = ApiClient.convertToType(data['business_addresses'], [BusinessAddress]);
      if (data.hasOwnProperty('country_of_residence'))
        obj.countryOfResidence = ApiClient.convertToType(data['country_of_residence'], 'String');
      if (data.hasOwnProperty('date_of_birth'))
        obj.dateOfBirth = ApiClient.convertToType(data['date_of_birth'], 'Date');
      if (data.hasOwnProperty('dba_name'))
        obj.dbaName = ApiClient.convertToType(data['dba_name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('gender'))
        obj.gender = ApiClient.convertToType(data['gender'], 'String');
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
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('legal_name'))
        obj.legalName = ApiClient.convertToType(data['legal_name'], 'String');
      if (data.hasOwnProperty('legal_structure'))
        obj.legalStructure = ApiClient.convertToType(data['legal_structure'], 'String');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], Object);
      if (data.hasOwnProperty('middle_name'))
        obj.middleName = ApiClient.convertToType(data['middle_name'], 'String');
      if (data.hasOwnProperty('nucleus_document_id'))
        obj.nucleusDocumentId = ApiClient.convertToType(data['nucleus_document_id'], 'String');
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
   * @member {Array.<module:model/ClientAddress>} address
   */
  exports.prototype.address = undefined;

  /**
   * @member {Array.<module:model/BusinessAddress>} businessAddresses
   */
  exports.prototype.businessAddresses = undefined;

  /**
   * @member {String} countryOfResidence
   */
  exports.prototype.countryOfResidence = undefined;

  /**
   * @member {Date} dateOfBirth
   */
  exports.prototype.dateOfBirth = undefined;

  /**
   * @member {String} dbaName
   */
  exports.prototype.dbaName = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} firstName
   */
  exports.prototype.firstName = undefined;

  /**
   * @member {String} gender
   */
  exports.prototype.gender = undefined;

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
   * @member {String} lastName
   */
  exports.prototype.lastName = undefined;

  /**
   * @member {String} legalName
   */
  exports.prototype.legalName = undefined;

  /**
   * @member {String} legalStructure
   */
  exports.prototype.legalStructure = undefined;

  /**
   * @member {Object} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {String} middleName
   */
  exports.prototype.middleName = undefined;

  /**
   * @member {String} nucleusDocumentId
   */
  exports.prototype.nucleusDocumentId = undefined;

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
