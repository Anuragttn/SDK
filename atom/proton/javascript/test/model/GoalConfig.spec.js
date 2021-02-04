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
    describe('GoalConfig', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.GoalConfig();
      });

      it('should create an instance of GoalConfig', function() {
        // TODO: update the code to test GoalConfig
        expect(instance).to.be.a(HydrogenProtonApi.GoalConfig);
      });

      it('should have the property goalInflation (base name: "goal_inflation")', function() {
        // TODO: update the code to test the property goalInflation
        expect(instance).to.have.property('goalInflation');
        // expect(instance.goalInflation).to.be(expectedValueLiteral);
      });

      it('should have the property goalAmount (base name: "goal_amount")', function() {
        // TODO: update the code to test the property goalAmount
        expect(instance).to.have.property('goalAmount');
        // expect(instance.goalAmount).to.be(expectedValueLiteral);
      });

    });
  });

}));
