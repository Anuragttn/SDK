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
    describe('MergerAcquisition', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.MergerAcquisition();
      });

      it('should create an instance of MergerAcquisition', function() {
        // TODO: update the code to test MergerAcquisition
        expect(instance).to.be.a(HydrogenIntegrationApi.MergerAcquisition);
      });

      it('should have the property acquiree (base name: "acquiree")', function() {
        // TODO: update the code to test the property acquiree
        expect(instance).to.have.property('acquiree');
        // expect(instance.acquiree).to.be(expectedValueLiteral);
      });

      it('should have the property acquirer (base name: "acquirer")', function() {
        // TODO: update the code to test the property acquirer
        expect(instance).to.have.property('acquirer');
        // expect(instance.acquirer).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
