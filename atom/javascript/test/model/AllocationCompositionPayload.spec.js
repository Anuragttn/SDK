/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2-SNAPSHOT
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
    instance = new atom_api.AllocationCompositionPayload();
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

  describe('AllocationCompositionPayload', function() {
    it('should create an instance of AllocationCompositionPayload', function() {
      // uncomment below and update the code to test AllocationCompositionPayload
      //var instance = new atom_api.AllocationCompositionPayload();
      //expect(instance).to.be.a(atom_api.AllocationCompositionPayload);
    });

    it('should have the property allocationId (base name: "allocation_id")', function() {
      // uncomment below and update the code to test the property allocationId
      //var instance = new atom_api.AllocationCompositionPayload();
      //expect(instance).to.be();
    });

    it('should have the property modelId (base name: "model_id")', function() {
      // uncomment below and update the code to test the property modelId
      //var instance = new atom_api.AllocationCompositionPayload();
      //expect(instance).to.be();
    });

    it('should have the property currentWeight (base name: "current_weight")', function() {
      // uncomment below and update the code to test the property currentWeight
      //var instance = new atom_api.AllocationCompositionPayload();
      //expect(instance).to.be();
    });

    it('should have the property strategicWeight (base name: "strategic_weight")', function() {
      // uncomment below and update the code to test the property strategicWeight
      //var instance = new atom_api.AllocationCompositionPayload();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instance = new atom_api.AllocationCompositionPayload();
      //expect(instance).to.be();
    });

    it('should have the property core (base name: "core")', function() {
      // uncomment below and update the code to test the property core
      //var instance = new atom_api.AllocationCompositionPayload();
      //expect(instance).to.be();
    });

  });

}));