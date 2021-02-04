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
    describe('BrokerageWithdrawalVO', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.BrokerageWithdrawalVO();
      });

      it('should create an instance of BrokerageWithdrawalVO', function() {
        // TODO: update the code to test BrokerageWithdrawalVO
        expect(instance).to.be.a(HydrogenIntegrationApi.BrokerageWithdrawalVO);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property nucleusFundingId (base name: "nucleus_funding_id")', function() {
        // TODO: update the code to test the property nucleusFundingId
        expect(instance).to.have.property('nucleusFundingId');
        // expect(instance.nucleusFundingId).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
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
