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
    instance = new HydrogenIntegrationApi.GetCardStatementResponseVO();
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

  describe('GetCardStatementResponseVO', function() {
    it('should create an instance of GetCardStatementResponseVO', function() {
      // uncomment below and update the code to test GetCardStatementResponseVO
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be.a(HydrogenIntegrationApi.GetCardStatementResponseVO);
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be();
    });

    it('should have the property endingBalance (base name: "ending_balance")', function() {
      // uncomment below and update the code to test the property endingBalance
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be();
    });

    it('should have the property initialBalance (base name: "initial_balance")', function() {
      // uncomment below and update the code to test the property initialBalance
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be();
    });

    it('should have the property nucleusCardId (base name: "nucleus_card_id")', function() {
      // uncomment below and update the code to test the property nucleusCardId
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be();
    });

    it('should have the property periodFees (base name: "period_fees")', function() {
      // uncomment below and update the code to test the property periodFees
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be();
    });

    it('should have the property transactions (base name: "transactions")', function() {
      // uncomment below and update the code to test the property transactions
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be();
    });

    it('should have the property vendorName (base name: "vendor_name")', function() {
      // uncomment below and update the code to test the property vendorName
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be();
    });

    it('should have the property vendorResponse (base name: "vendor_response")', function() {
      // uncomment below and update the code to test the property vendorResponse
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be();
    });

    it('should have the property ytdFees (base name: "ytd_fees")', function() {
      // uncomment below and update the code to test the property ytdFees
      //var instane = new HydrogenIntegrationApi.GetCardStatementResponseVO();
      //expect(instance).to.be();
    });

  });

}));
