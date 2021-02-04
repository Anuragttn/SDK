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
    describe('BrokerageHoldingVO', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.BrokerageHoldingVO();
      });

      it('should create an instance of BrokerageHoldingVO', function() {
        // TODO: update the code to test BrokerageHoldingVO
        expect(instance).to.be.a(HydrogenIntegrationApi.BrokerageHoldingVO);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property nucleusHoldingsPosted (base name: "nucleus_holdings_posted")', function() {
        // TODO: update the code to test the property nucleusHoldingsPosted
        expect(instance).to.have.property('nucleusHoldingsPosted');
        // expect(instance.nucleusHoldingsPosted).to.be(expectedValueLiteral);
      });

      it('should have the property nucleusPortfolioId (base name: "nucleus_portfolio_id")', function() {
        // TODO: update the code to test the property nucleusPortfolioId
        expect(instance).to.have.property('nucleusPortfolioId');
        // expect(instance.nucleusPortfolioId).to.be(expectedValueLiteral);
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
