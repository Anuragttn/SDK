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
    describe('CashFlowAnalysisRequest', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.CashFlowAnalysisRequest();
      });

      it('should create an instance of CashFlowAnalysisRequest', function() {
        // TODO: update the code to test CashFlowAnalysisRequest
        expect(instance).to.be.a(HydrogenProtonApi.CashFlowAnalysisRequest);
      });

      it('should have the property aggregationAccountIds (base name: "aggregation_account_ids")', function() {
        // TODO: update the code to test the property aggregationAccountIds
        expect(instance).to.have.property('aggregationAccountIds');
        // expect(instance.aggregationAccountIds).to.be(expectedValueLiteral);
      });

      it('should have the property endDate (base name: "end_date")', function() {
        // TODO: update the code to test the property endDate
        expect(instance).to.have.property('endDate');
        // expect(instance.endDate).to.be(expectedValueLiteral);
      });

      it('should have the property benchmarkEndDate (base name: "benchmark_end_date")', function() {
        // TODO: update the code to test the property benchmarkEndDate
        expect(instance).to.have.property('benchmarkEndDate');
        // expect(instance.benchmarkEndDate).to.be(expectedValueLiteral);
      });

      it('should have the property clientId (base name: "client_id")', function() {
        // TODO: update the code to test the property clientId
        expect(instance).to.have.property('clientId');
        // expect(instance.clientId).to.be(expectedValueLiteral);
      });

      it('should have the property accountIds (base name: "account_ids")', function() {
        // TODO: update the code to test the property accountIds
        expect(instance).to.have.property('accountIds');
        // expect(instance.accountIds).to.be(expectedValueLiteral);
      });

      it('should have the property showIncomeDetails (base name: "show_income_details")', function() {
        // TODO: update the code to test the property showIncomeDetails
        expect(instance).to.have.property('showIncomeDetails');
        // expect(instance.showIncomeDetails).to.be(expectedValueLiteral);
      });

      it('should have the property showHistory (base name: "show_history")', function() {
        // TODO: update the code to test the property showHistory
        expect(instance).to.have.property('showHistory');
        // expect(instance.showHistory).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "start_date")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property currencyConversion (base name: "currency_conversion")', function() {
        // TODO: update the code to test the property currencyConversion
        expect(instance).to.have.property('currencyConversion');
        // expect(instance.currencyConversion).to.be(expectedValueLiteral);
      });

      it('should have the property currencyCode (base name: "currency_code")', function() {
        // TODO: update the code to test the property currencyCode
        expect(instance).to.have.property('currencyCode');
        // expect(instance.currencyCode).to.be(expectedValueLiteral);
      });

      it('should have the property benchmarkStartDate (base name: "benchmark_start_date")', function() {
        // TODO: update the code to test the property benchmarkStartDate
        expect(instance).to.have.property('benchmarkStartDate');
        // expect(instance.benchmarkStartDate).to.be(expectedValueLiteral);
      });

      it('should have the property showSpendingDetails (base name: "show_spending_details")', function() {
        // TODO: update the code to test the property showSpendingDetails
        expect(instance).to.have.property('showSpendingDetails');
        // expect(instance.showSpendingDetails).to.be(expectedValueLiteral);
      });

      it('should have the property scope (base name: "scope")', function() {
        // TODO: update the code to test the property scope
        expect(instance).to.have.property('scope');
        // expect(instance.scope).to.be(expectedValueLiteral);
      });

    });
  });

}));
