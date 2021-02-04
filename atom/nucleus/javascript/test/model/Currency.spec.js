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
    instance = new HydrogenNucleusApi.Currency();
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

  describe('Currency', function() {
    it('should create an instance of Currency', function() {
      // uncomment below and update the code to test Currency
      //var instane = new HydrogenNucleusApi.Currency();
      //expect(instance).to.be.a(HydrogenNucleusApi.Currency);
    });

    it('should have the property alphabeticCode (base name: "alphabetic_code")', function() {
      // uncomment below and update the code to test the property alphabeticCode
      //var instane = new HydrogenNucleusApi.Currency();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new HydrogenNucleusApi.Currency();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HydrogenNucleusApi.Currency();
      //expect(instance).to.be();
    });

    it('should have the property numericCode (base name: "numeric_code")', function() {
      // uncomment below and update the code to test the property numericCode
      //var instane = new HydrogenNucleusApi.Currency();
      //expect(instance).to.be();
    });

  });

}));
