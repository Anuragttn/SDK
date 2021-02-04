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
    describe('BrokerageDocumentCO', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.BrokerageDocumentCO();
      });

      it('should create an instance of BrokerageDocumentCO', function() {
        // TODO: update the code to test BrokerageDocumentCO
        expect(instance).to.be.a(HydrogenIntegrationApi.BrokerageDocumentCO);
      });

      it('should have the property nucleusClientId (base name: "nucleus_client_id")', function() {
        // TODO: update the code to test the property nucleusClientId
        expect(instance).to.have.property('nucleusClientId');
        // expect(instance.nucleusClientId).to.be(expectedValueLiteral);
      });

      it('should have the property nucleusDocumentId (base name: "nucleus_document_id")', function() {
        // TODO: update the code to test the property nucleusDocumentId
        expect(instance).to.have.property('nucleusDocumentId');
        // expect(instance.nucleusDocumentId).to.be(expectedValueLiteral);
      });

    });
  });

}));
