/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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
    factory(root.expect, root.HydrogenProtonApi);
  }
}(this, function(expect, HydrogenProtonApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GuaranteedRateBenefit', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.GuaranteedRateBenefit();
      });

      it('should create an instance of GuaranteedRateBenefit', function() {
        // TODO: update the code to test GuaranteedRateBenefit
        expect(instance).to.be.a(HydrogenProtonApi.GuaranteedRateBenefit);
      });

      it('should have the property startPeriod (base name: "start_period")', function() {
        // TODO: update the code to test the property startPeriod
        expect(instance).to.have.property('startPeriod');
        // expect(instance.startPeriod).to.be(expectedValueLiteral);
      });

      it('should have the property endPeriod (base name: "end_period")', function() {
        // TODO: update the code to test the property endPeriod
        expect(instance).to.have.property('endPeriod');
        // expect(instance.endPeriod).to.be(expectedValueLiteral);
      });

      it('should have the property maxRate (base name: "max_rate")', function() {
        // TODO: update the code to test the property maxRate
        expect(instance).to.have.property('maxRate');
        // expect(instance.maxRate).to.be(expectedValueLiteral);
      });

      it('should have the property minRate (base name: "min_rate")', function() {
        // TODO: update the code to test the property minRate
        expect(instance).to.have.property('minRate');
        // expect(instance.minRate).to.be(expectedValueLiteral);
      });

    });
  });

}));
