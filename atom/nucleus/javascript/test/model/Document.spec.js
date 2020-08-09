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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HydrogenNucleusApi);
  }
}(this, function(expect, HydrogenNucleusApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenNucleusApi.Document();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Document', function() {
    it('should create an instance of Document', function() {
      // uncomment below and update the code to test Document
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be.a(HydrogenNucleusApi.Document);
    });

    it('should have the property accountId (base name: "account_id")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property countryOfIssue (base name: "country_of_issue")', function() {
      // uncomment below and update the code to test the property countryOfIssue
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property docFile (base name: "doc_file")', function() {
      // uncomment below and update the code to test the property docFile
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property docImageBack (base name: "doc_image_back")', function() {
      // uncomment below and update the code to test the property docImageBack
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property docImageFront (base name: "doc_image_front")', function() {
      // uncomment below and update the code to test the property docImageFront
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property docName (base name: "doc_name")', function() {
      // uncomment below and update the code to test the property docName
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property docNumber (base name: "doc_number")', function() {
      // uncomment below and update the code to test the property docNumber
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property docSize (base name: "doc_size")', function() {
      // uncomment below and update the code to test the property docSize
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property docType (base name: "doc_type")', function() {
      // uncomment below and update the code to test the property docType
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property expiryDate (base name: "expiry_date")', function() {
      // uncomment below and update the code to test the property expiryDate
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property isVerified (base name: "is_verified")', function() {
      // uncomment below and update the code to test the property isVerified
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property issueDate (base name: "issue_date")', function() {
      // uncomment below and update the code to test the property issueDate
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property stateOfIssue (base name: "state_of_issue")', function() {
      // uncomment below and update the code to test the property stateOfIssue
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "update_date")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property urlPath (base name: "url_path")', function() {
      // uncomment below and update the code to test the property urlPath
      //var instane = new HydrogenNucleusApi.Document();
      //expect(instance).to.be();
    });

  });

}));