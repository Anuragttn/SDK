/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8-SNAPSHOT
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
    factory(root.expect, root.atom_api);
  }
}(this, function(expect, atom_api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new atom_api.FinancialOfferPayload();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FinancialOfferPayload', function() {
    it('should create an instance of FinancialOfferPayload', function() {
      // uncomment below and update the code to test FinancialOfferPayload
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be.a(atom_api.FinancialOfferPayload);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property institutionName (base name: "institution_name")', function() {
      // uncomment below and update the code to test the property institutionName
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property offerLink (base name: "offer_link")', function() {
      // uncomment below and update the code to test the property offerLink
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property subcategory (base name: "subcategory")', function() {
      // uncomment below and update the code to test the property subcategory
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property financialRate (base name: "financial_rate")', function() {
      // uncomment below and update the code to test the property financialRate
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property financialRateType (base name: "financial_rate_type")', function() {
      // uncomment below and update the code to test the property financialRateType
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property financialRateTerm (base name: "financial_rate_term")', function() {
      // uncomment below and update the code to test the property financialRateTerm
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property financialRateTermUnit (base name: "financial_rate_term_unit")', function() {
      // uncomment below and update the code to test the property financialRateTermUnit
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property feeAmount (base name: "fee_amount")', function() {
      // uncomment below and update the code to test the property feeAmount
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property feeType (base name: "fee_type")', function() {
      // uncomment below and update the code to test the property feeType
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property offerTerm (base name: "offer_term")', function() {
      // uncomment below and update the code to test the property offerTerm
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property offerTermUnit (base name: "offer_term_unit")', function() {
      // uncomment below and update the code to test the property offerTermUnit
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property minimumContribution (base name: "minimum_contribution")', function() {
      // uncomment below and update the code to test the property minimumContribution
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property minimumContributionTerm (base name: "minimum_contribution_term")', function() {
      // uncomment below and update the code to test the property minimumContributionTerm
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property minimumContributionTermUnit (base name: "minimum_contribution_term_unit")', function() {
      // uncomment below and update the code to test the property minimumContributionTermUnit
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property prerequisite (base name: "prerequisite")', function() {
      // uncomment below and update the code to test the property prerequisite
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property prerequisiteType (base name: "prerequisite_type")', function() {
      // uncomment below and update the code to test the property prerequisiteType
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property affiliateRate (base name: "affiliate_rate")', function() {
      // uncomment below and update the code to test the property affiliateRate
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property clientReview (base name: "client_review")', function() {
      // uncomment below and update the code to test the property clientReview
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property rating (base name: "rating")', function() {
      // uncomment below and update the code to test the property rating
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property documentId (base name: "document_id")', function() {
      // uncomment below and update the code to test the property documentId
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property campaignId (base name: "campaign_id")', function() {
      // uncomment below and update the code to test the property campaignId
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instance = new atom_api.FinancialOfferPayload();
      //expect(instance).to.be();
    });

  });

}));
