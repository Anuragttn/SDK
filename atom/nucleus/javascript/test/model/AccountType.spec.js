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
    instance = new HydrogenNucleusApi.AccountType();
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

  describe('AccountType', function() {
    it('should create an instance of AccountType', function() {
      // uncomment below and update the code to test AccountType
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be.a(HydrogenNucleusApi.AccountType);
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property isAsset (base name: "is_asset")', function() {
      // uncomment below and update the code to test the property isAsset
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property isBusiness (base name: "is_business")', function() {
      // uncomment below and update the code to test the property isBusiness
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property isCash (base name: "is_cash")', function() {
      // uncomment below and update the code to test the property isCash
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property isInvestment (base name: "is_investment")', function() {
      // uncomment below and update the code to test the property isInvestment
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property isTaxable (base name: "is_taxable")', function() {
      // uncomment below and update the code to test the property isTaxable
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "short_name")', function() {
      // uncomment below and update the code to test the property shortName
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property subcategory (base name: "subcategory")', function() {
      // uncomment below and update the code to test the property subcategory
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "update_date")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new HydrogenNucleusApi.AccountType();
      //expect(instance).to.be();
    });

  });

}));
