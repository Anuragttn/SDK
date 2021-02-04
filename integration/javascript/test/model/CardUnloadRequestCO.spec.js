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
    describe('CardUnloadRequestCO', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.CardUnloadRequestCO();
      });

      it('should create an instance of CardUnloadRequestCO', function() {
        // TODO: update the code to test CardUnloadRequestCO
        expect(instance).to.be.a(HydrogenIntegrationApi.CardUnloadRequestCO);
      });

      it('should have the property nucleusFundingId (base name: "nucleus_funding_id")', function() {
        // TODO: update the code to test the property nucleusFundingId
        expect(instance).to.have.property('nucleusFundingId');
        // expect(instance.nucleusFundingId).to.be(expectedValueLiteral);
      });

      it('should have the property reason (base name: "reason")', function() {
        // TODO: update the code to test the property reason
        expect(instance).to.have.property('reason');
        // expect(instance.reason).to.be(expectedValueLiteral);
      });

    });
  });

}));
