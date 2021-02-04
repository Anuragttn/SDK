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
    describe('BrokerageOrderCO', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.BrokerageOrderCO();
      });

      it('should create an instance of BrokerageOrderCO', function() {
        // TODO: update the code to test BrokerageOrderCO
        expect(instance).to.be.a(HydrogenIntegrationApi.BrokerageOrderCO);
      });

      it('should have the property nucleusOrderId (base name: "nucleus_order_id")', function() {
        // TODO: update the code to test the property nucleusOrderId
        expect(instance).to.have.property('nucleusOrderId');
        // expect(instance.nucleusOrderId).to.be(expectedValueLiteral);
      });

    });
  });

}));
