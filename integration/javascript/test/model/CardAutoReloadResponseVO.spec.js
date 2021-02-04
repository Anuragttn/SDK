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
    describe('CardAutoReloadResponseVO', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.CardAutoReloadResponseVO();
      });

      it('should create an instance of CardAutoReloadResponseVO', function() {
        // TODO: update the code to test CardAutoReloadResponseVO
        expect(instance).to.be.a(HydrogenIntegrationApi.CardAutoReloadResponseVO);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property nucleusClientId (base name: "nucleus_client_id")', function() {
        // TODO: update the code to test the property nucleusClientId
        expect(instance).to.have.property('nucleusClientId');
        // expect(instance.nucleusClientId).to.be(expectedValueLiteral);
      });

      it('should have the property reloadAmount (base name: "reload_amount")', function() {
        // TODO: update the code to test the property reloadAmount
        expect(instance).to.have.property('reloadAmount');
        // expect(instance.reloadAmount).to.be(expectedValueLiteral);
      });

      it('should have the property thresholdAmount (base name: "threshold_amount")', function() {
        // TODO: update the code to test the property thresholdAmount
        expect(instance).to.have.property('thresholdAmount');
        // expect(instance.thresholdAmount).to.be(expectedValueLiteral);
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
