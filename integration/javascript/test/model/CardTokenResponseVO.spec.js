/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
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

  describe('(package)', function() {
    describe('CardTokenResponseVO', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.CardTokenResponseVO();
      });

      it('should create an instance of CardTokenResponseVO', function() {
        // TODO: update the code to test CardTokenResponseVO
        expect(instance).to.be.a(HydrogenIntegrationApi.CardTokenResponseVO);
      });

      it('should have the property applePayload (base name: "apple_payload")', function() {
        // TODO: update the code to test the property applePayload
        expect(instance).to.have.property('applePayload');
        // expect(instance.applePayload).to.be(expectedValueLiteral);
      });

      it('should have the property googlePayload (base name: "google_payload")', function() {
        // TODO: update the code to test the property googlePayload
        expect(instance).to.have.property('googlePayload');
        // expect(instance.googlePayload).to.be(expectedValueLiteral);
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

      it('should have the property samsungPayload (base name: "samsung_payload")', function() {
        // TODO: update the code to test the property samsungPayload
        expect(instance).to.have.property('samsungPayload');
        // expect(instance.samsungPayload).to.be(expectedValueLiteral);
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

      it('should have the property wallet (base name: "wallet")', function() {
        // TODO: update the code to test the property wallet
        expect(instance).to.have.property('wallet');
        // expect(instance.wallet).to.be(expectedValueLiteral);
      });

    });
  });

}));
