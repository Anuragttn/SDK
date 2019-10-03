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
    instance = new atom_api.BulkOrderFirmPayload();
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

  describe('BulkOrderFirmPayload', function() {
    it('should create an instance of BulkOrderFirmPayload', function() {
      // uncomment below and update the code to test BulkOrderFirmPayload
      //var instance = new atom_api.BulkOrderFirmPayload();
      //expect(instance).to.be.a(atom_api.BulkOrderFirmPayload);
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instance = new atom_api.BulkOrderFirmPayload();
      //expect(instance).to.be();
    });

    it('should have the property buyTransactionCodeId (base name: "buy_transaction_code_id")', function() {
      // uncomment below and update the code to test the property buyTransactionCodeId
      //var instance = new atom_api.BulkOrderFirmPayload();
      //expect(instance).to.be();
    });

    it('should have the property sellTransactionCodeId (base name: "sell_transaction_code_id")', function() {
      // uncomment below and update the code to test the property sellTransactionCodeId
      //var instance = new atom_api.BulkOrderFirmPayload();
      //expect(instance).to.be();
    });

  });

}));
