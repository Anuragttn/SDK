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
    describe('CardLoadUnloadResponseVO', function() {
      beforeEach(function() {
        instance = new HydrogenElectronApi.CardLoadUnloadResponseVO();
      });

      it('should create an instance of CardLoadUnloadResponseVO', function() {
        // TODO: update the code to test CardLoadUnloadResponseVO
        expect(instance).to.be.a(HydrogenElectronApi.CardLoadUnloadResponseVO);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property cardStatus (base name: "card_status")', function() {
        // TODO: update the code to test the property cardStatus
        expect(instance).to.have.property('cardStatus');
        // expect(instance.cardStatus).to.be(expectedValueLiteral);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property nucleusCardId (base name: "nucleus_card_id")', function() {
        // TODO: update the code to test the property nucleusCardId
        expect(instance).to.have.property('nucleusCardId');
        // expect(instance.nucleusCardId).to.be(expectedValueLiteral);
      });

      it('should have the property nucleusFundingId (base name: "nucleus_funding_id")', function() {
        // TODO: update the code to test the property nucleusFundingId
        expect(instance).to.have.property('nucleusFundingId');
        // expect(instance.nucleusFundingId).to.be(expectedValueLiteral);
      });

      it('should have the property vendorName (base name: "vendor_name")', function() {
        // TODO: update the code to test the property vendorName
        expect(instance).to.have.property('vendorName');
        // expect(instance.vendorName).to.be(expectedValueLiteral);
      });

      it('should have the property vendorResponse (base name: "vendor_response")', function() {
        // TODO: update the code to test the property vendorResponse
        expect(instance).to.have.property('vendorResponse');
        // expect(instance.vendorResponse).to.be(expectedValueLiteral);
      });

    });
  });

}));
