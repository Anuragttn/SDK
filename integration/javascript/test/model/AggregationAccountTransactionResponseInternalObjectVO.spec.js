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
    describe('AggregationAccountTransactionResponseInternalObjectVO', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.AggregationAccountTransactionResponseInternalObjectVO();
      });

      it('should create an instance of AggregationAccountTransactionResponseInternalObjectVO', function() {
        // TODO: update the code to test AggregationAccountTransactionResponseInternalObjectVO
        expect(instance).to.be.a(HydrogenIntegrationApi.AggregationAccountTransactionResponseInternalObjectVO);
      });

      it('should have the property body (base name: "body")', function() {
        // TODO: update the code to test the property body
        expect(instance).to.have.property('body');
        // expect(instance.body).to.be(expectedValueLiteral);
      });

      it('should have the property statusCode (base name: "status_code")', function() {
        // TODO: update the code to test the property statusCode
        expect(instance).to.have.property('statusCode');
        // expect(instance.statusCode).to.be(expectedValueLiteral);
      });

    });
  });

}));
