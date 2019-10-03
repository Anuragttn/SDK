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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.atom_api);
  }
}(this, function(expect, atom_api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new atom_api.SimpleSavingsCalculator();
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

  describe('SimpleSavingsCalculator', function() {
    it('should create an instance of SimpleSavingsCalculator', function() {
      // uncomment below and update the code to test SimpleSavingsCalculator
      //var instance = new atom_api.SimpleSavingsCalculator();
      //expect(instance).to.be.a(atom_api.SimpleSavingsCalculator);
    });

    it('should have the property initialBalance (base name: "initial_balance")', function() {
      // uncomment below and update the code to test the property initialBalance
      //var instance = new atom_api.SimpleSavingsCalculator();
      //expect(instance).to.be();
    });

    it('should have the property horizon (base name: "horizon")', function() {
      // uncomment below and update the code to test the property horizon
      //var instance = new atom_api.SimpleSavingsCalculator();
      //expect(instance).to.be();
    });

    it('should have the property returnSchedule (base name: "return_schedule")', function() {
      // uncomment below and update the code to test the property returnSchedule
      //var instance = new atom_api.SimpleSavingsCalculator();
      //expect(instance).to.be();
    });

    it('should have the property horizonFrequencyInterval (base name: "horizon_frequency_interval")', function() {
      // uncomment below and update the code to test the property horizonFrequencyInterval
      //var instance = new atom_api.SimpleSavingsCalculator();
      //expect(instance).to.be();
    });

    it('should have the property depositSchedule (base name: "deposit_schedule")', function() {
      // uncomment below and update the code to test the property depositSchedule
      //var instance = new atom_api.SimpleSavingsCalculator();
      //expect(instance).to.be();
    });

    it('should have the property taxRate (base name: "tax_rate")', function() {
      // uncomment below and update the code to test the property taxRate
      //var instance = new atom_api.SimpleSavingsCalculator();
      //expect(instance).to.be();
    });

    it('should have the property inflationRate (base name: "inflation_rate")', function() {
      // uncomment below and update the code to test the property inflationRate
      //var instance = new atom_api.SimpleSavingsCalculator();
      //expect(instance).to.be();
    });

  });

}));
