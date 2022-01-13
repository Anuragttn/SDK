/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.5
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
    instance = new HydrogenNucleusApi.SecurityCompositionVO();
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

  describe('SecurityCompositionVO', function() {
    it('should create an instance of SecurityCompositionVO', function() {
      // uncomment below and update the code to test SecurityCompositionVO
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be.a(HydrogenNucleusApi.SecurityCompositionVO);
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property securityAssetClass (base name: "security_asset_class")', function() {
      // uncomment below and update the code to test the property securityAssetClass
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property securityCountries (base name: "security_countries")', function() {
      // uncomment below and update the code to test the property securityCountries
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property securityCreateDate (base name: "security_create_date")', function() {
      // uncomment below and update the code to test the property securityCreateDate
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property securityId (base name: "security_id")', function() {
      // uncomment below and update the code to test the property securityId
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property securityIndustry (base name: "security_industry")', function() {
      // uncomment below and update the code to test the property securityIndustry
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property securityName (base name: "security_name")', function() {
      // uncomment below and update the code to test the property securityName
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property securitySecondaryId (base name: "security_secondary_id")', function() {
      // uncomment below and update the code to test the property securitySecondaryId
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property securitySector (base name: "security_sector")', function() {
      // uncomment below and update the code to test the property securitySector
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property securitySecurityClass (base name: "security_security_class")', function() {
      // uncomment below and update the code to test the property securitySecurityClass
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property securityTicker (base name: "security_ticker")', function() {
      // uncomment below and update the code to test the property securityTicker
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property securityUpdateDate (base name: "security_update_date")', function() {
      // uncomment below and update the code to test the property securityUpdateDate
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property securityWeight (base name: "security_weight")', function() {
      // uncomment below and update the code to test the property securityWeight
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new HydrogenNucleusApi.SecurityCompositionVO();
      //expect(instance).to.be();
    });

  });

}));
