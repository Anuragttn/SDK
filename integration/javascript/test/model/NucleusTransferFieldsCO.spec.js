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
    describe('NucleusTransferFieldsCO', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.NucleusTransferFieldsCO();
      });

      it('should create an instance of NucleusTransferFieldsCO', function() {
        // TODO: update the code to test NucleusTransferFieldsCO
        expect(instance).to.be.a(HydrogenIntegrationApi.NucleusTransferFieldsCO);
      });

      it('should have the property nucleusAccountTypeId (base name: "nucleus_account_type_id")', function() {
        // TODO: update the code to test the property nucleusAccountTypeId
        expect(instance).to.have.property('nucleusAccountTypeId');
        // expect(instance.nucleusAccountTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property nucleusTransferAllCash (base name: "nucleus_transfer_all_cash")', function() {
        // TODO: update the code to test the property nucleusTransferAllCash
        expect(instance).to.have.property('nucleusTransferAllCash');
        // expect(instance.nucleusTransferAllCash).to.be(expectedValueLiteral);
      });

    });
  });

}));
