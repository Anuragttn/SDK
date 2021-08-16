/**
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.1
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
    factory(root.expect, root.HydrogenIntegrationApi);
  }
}(this, function(expect, HydrogenIntegrationApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenIntegrationApi.Email();
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

  describe('Email', function() {
    it('should create an instance of Email', function() {
      // uncomment below and update the code to test Email
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be.a(HydrogenIntegrationApi.Email);
    });

    it('should have the property click (base name: "click")', function() {
      // uncomment below and update the code to test the property click
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property deliveryStatus (base name: "delivery_status")', function() {
      // uncomment below and update the code to test the property deliveryStatus
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property deliveryStatusTimestamp (base name: "delivery_status_timestamp")', function() {
      // uncomment below and update the code to test the property deliveryStatusTimestamp
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property emailId (base name: "email_id")', function() {
      // uncomment below and update the code to test the property emailId
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property nucleusBusinessId (base name: "nucleus_business_id")', function() {
      // uncomment below and update the code to test the property nucleusBusinessId
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property nucleusClientId (base name: "nucleus_client_id")', function() {
      // uncomment below and update the code to test the property nucleusClientId
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property open (base name: "open")', function() {
      // uncomment below and update the code to test the property open
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property spam (base name: "spam")', function() {
      // uncomment below and update the code to test the property spam
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribe (base name: "unsubscribe")', function() {
      // uncomment below and update the code to test the property unsubscribe
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "update_date")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property vendorId (base name: "vendor_id")', function() {
      // uncomment below and update the code to test the property vendorId
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

    it('should have the property vendorName (base name: "vendor_name")', function() {
      // uncomment below and update the code to test the property vendorName
      //var instane = new HydrogenIntegrationApi.Email();
      //expect(instance).to.be();
    });

  });

}));
