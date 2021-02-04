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
    describe('RecommendationConfig', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.RecommendationConfig();
      });

      it('should create an instance of RecommendationConfig', function() {
        // TODO: update the code to test RecommendationConfig
        expect(instance).to.be.a(HydrogenProtonApi.RecommendationConfig);
      });

      it('should have the property recommendedInflation (base name: "recommended_inflation")', function() {
        // TODO: update the code to test the property recommendedInflation
        expect(instance).to.have.property('recommendedInflation');
        // expect(instance.recommendedInflation).to.be(expectedValueLiteral);
      });

      it('should have the property recommend (base name: "recommend")', function() {
        // TODO: update the code to test the property recommend
        expect(instance).to.have.property('recommend');
        // expect(instance.recommend).to.be(expectedValueLiteral);
      });

      it('should have the property invMax (base name: "inv_max")', function() {
        // TODO: update the code to test the property invMax
        expect(instance).to.have.property('invMax');
        // expect(instance.invMax).to.be(expectedValueLiteral);
      });

      it('should have the property horizonMin (base name: "horizon_min")', function() {
        // TODO: update the code to test the property horizonMin
        expect(instance).to.have.property('horizonMin');
        // expect(instance.horizonMin).to.be(expectedValueLiteral);
      });

      it('should have the property horizonMax (base name: "horizon_max")', function() {
        // TODO: update the code to test the property horizonMax
        expect(instance).to.have.property('horizonMax');
        // expect(instance.horizonMax).to.be(expectedValueLiteral);
      });

      it('should have the property depMax (base name: "dep_max")', function() {
        // TODO: update the code to test the property depMax
        expect(instance).to.have.property('depMax');
        // expect(instance.depMax).to.be(expectedValueLiteral);
      });

      it('should have the property invMin (base name: "inv_min")', function() {
        // TODO: update the code to test the property invMin
        expect(instance).to.have.property('invMin');
        // expect(instance.invMin).to.be(expectedValueLiteral);
      });

      it('should have the property depMin (base name: "dep_min")', function() {
        // TODO: update the code to test the property depMin
        expect(instance).to.have.property('depMin');
        // expect(instance.depMin).to.be(expectedValueLiteral);
      });

    });
  });

}));
