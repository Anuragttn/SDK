/**
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
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
    factory(root.expect, root.HydrogenIntegrationApi);
  }
}(this, function(expect, HydrogenIntegrationApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenIntegrationApi.SMSVO();
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

  describe('SMSVO', function() {
    it('should create an instance of SMSVO', function() {
      // uncomment below and update the code to test SMSVO
      //var instane = new HydrogenIntegrationApi.SMSVO();
      //expect(instance).to.be.a(HydrogenIntegrationApi.SMSVO);
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instane = new HydrogenIntegrationApi.SMSVO();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new HydrogenIntegrationApi.SMSVO();
      //expect(instance).to.be();
    });

    it('should have the property nucleusBusinessId (base name: "nucleus_business_id")', function() {
      // uncomment below and update the code to test the property nucleusBusinessId
      //var instane = new HydrogenIntegrationApi.SMSVO();
      //expect(instance).to.be();
    });

    it('should have the property nucleusClientId (base name: "nucleus_client_id")', function() {
      // uncomment below and update the code to test the property nucleusClientId
      //var instane = new HydrogenIntegrationApi.SMSVO();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instane = new HydrogenIntegrationApi.SMSVO();
      //expect(instance).to.be();
    });

  });

}));
