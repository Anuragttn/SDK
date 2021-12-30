/*
 * Hydrogen Electron API
 * The Hydrogen Electron API
 *
 * OpenAPI spec version: 1.3.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.24
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
    factory(root.expect, root.HydrogenElectronApi);
  }
}(this, function(expect, HydrogenElectronApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CardBaseRequestCO', function() {
      beforeEach(function() {
        instance = new HydrogenElectronApi.CardBaseRequestCO();
      });

      it('should create an instance of CardBaseRequestCO', function() {
        // TODO: update the code to test CardBaseRequestCO
        expect(instance).to.be.a(HydrogenElectronApi.CardBaseRequestCO);
      });

      it('should have the property nucleusCardId (base name: "nucleus_card_id")', function() {
        // TODO: update the code to test the property nucleusCardId
        expect(instance).to.have.property('nucleusCardId');
        // expect(instance.nucleusCardId).to.be(expectedValueLiteral);
      });

      it('should have the property reason (base name: "reason")', function() {
        // TODO: update the code to test the property reason
        expect(instance).to.have.property('reason');
        // expect(instance.reason).to.be(expectedValueLiteral);
      });

      it('should have the property vendorRequest (base name: "vendor_request")', function() {
        // TODO: update the code to test the property vendorRequest
        expect(instance).to.have.property('vendorRequest');
        // expect(instance.vendorRequest).to.be(expectedValueLiteral);
      });

    });
  });

}));
