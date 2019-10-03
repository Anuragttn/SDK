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
    instance = new atom_api.DimensionalRiskScore();
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

  describe('DimensionalRiskScore', function() {
    it('should create an instance of DimensionalRiskScore', function() {
      // uncomment below and update the code to test DimensionalRiskScore
      //var instance = new atom_api.DimensionalRiskScore();
      //expect(instance).to.be.a(atom_api.DimensionalRiskScore);
    });

    it('should have the property answers (base name: "answers")', function() {
      // uncomment below and update the code to test the property answers
      //var instance = new atom_api.DimensionalRiskScore();
      //expect(instance).to.be();
    });

    it('should have the property maxAnswers (base name: "max_answers")', function() {
      // uncomment below and update the code to test the property maxAnswers
      //var instance = new atom_api.DimensionalRiskScore();
      //expect(instance).to.be();
    });

    it('should have the property answerDims (base name: "answer_dims")', function() {
      // uncomment below and update the code to test the property answerDims
      //var instance = new atom_api.DimensionalRiskScore();
      //expect(instance).to.be();
    });

    it('should have the property dims (base name: "dims")', function() {
      // uncomment below and update the code to test the property dims
      //var instance = new atom_api.DimensionalRiskScore();
      //expect(instance).to.be();
    });

    it('should have the property dimWeights (base name: "dim_weights")', function() {
      // uncomment below and update the code to test the property dimWeights
      //var instance = new atom_api.DimensionalRiskScore();
      //expect(instance).to.be();
    });

    it('should have the property answerWeights (base name: "answer_weights")', function() {
      // uncomment below and update the code to test the property answerWeights
      //var instance = new atom_api.DimensionalRiskScore();
      //expect(instance).to.be();
    });

  });

}));
