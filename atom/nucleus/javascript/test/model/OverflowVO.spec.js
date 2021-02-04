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
    instance = new HydrogenNucleusApi.OverflowVO();
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

  describe('OverflowVO', function() {
    it('should create an instance of OverflowVO', function() {
      // uncomment below and update the code to test OverflowVO
      //var instane = new HydrogenNucleusApi.OverflowVO();
      //expect(instance).to.be.a(HydrogenNucleusApi.OverflowVO);
    });

    it('should have the property fundingStartDate (base name: "funding_start_date")', function() {
      // uncomment below and update the code to test the property fundingStartDate
      //var instane = new HydrogenNucleusApi.OverflowVO();
      //expect(instance).to.be();
    });

    it('should have the property overflowSettingId (base name: "overflow_setting_id")', function() {
      // uncomment below and update the code to test the property overflowSettingId
      //var instane = new HydrogenNucleusApi.OverflowVO();
      //expect(instance).to.be();
    });

    it('should have the property updateBalances (base name: "update_balances")', function() {
      // uncomment below and update the code to test the property updateBalances
      //var instane = new HydrogenNucleusApi.OverflowVO();
      //expect(instance).to.be();
    });

  });

}));
