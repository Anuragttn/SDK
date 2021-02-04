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
    describe('VariableAnnuityRequest', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.VariableAnnuityRequest();
      });

      it('should create an instance of VariableAnnuityRequest', function() {
        // TODO: update the code to test VariableAnnuityRequest
        expect(instance).to.be.a(HydrogenProtonApi.VariableAnnuityRequest);
      });

      it('should have the property portfolioId (base name: "portfolio_id")', function() {
        // TODO: update the code to test the property portfolioId
        expect(instance).to.have.property('portfolioId');
        // expect(instance.portfolioId).to.be(expectedValueLiteral);
      });

      it('should have the property resultType (base name: "result_type")', function() {
        // TODO: update the code to test the property resultType
        expect(instance).to.have.property('resultType');
        // expect(instance.resultType).to.be(expectedValueLiteral);
      });

      it('should have the property inflationRate (base name: "inflation_rate")', function() {
        // TODO: update the code to test the property inflationRate
        expect(instance).to.have.property('inflationRate');
        // expect(instance.inflationRate).to.be(expectedValueLiteral);
      });

      it('should have the property removeOutliers (base name: "remove_outliers")', function() {
        // TODO: update the code to test the property removeOutliers
        expect(instance).to.have.property('removeOutliers');
        // expect(instance.removeOutliers).to.be(expectedValueLiteral);
      });

      it('should have the property depositSchedule (base name: "deposit_schedule")', function() {
        // TODO: update the code to test the property depositSchedule
        expect(instance).to.have.property('depositSchedule');
        // expect(instance.depositSchedule).to.be(expectedValueLiteral);
      });

      it('should have the property annuitizationRate (base name: "annuitization_rate")', function() {
        // TODO: update the code to test the property annuitizationRate
        expect(instance).to.have.property('annuitizationRate');
        // expect(instance.annuitizationRate).to.be(expectedValueLiteral);
      });

      it('should have the property endDate (base name: "end_date")', function() {
        // TODO: update the code to test the property endDate
        expect(instance).to.have.property('endDate');
        // expect(instance.endDate).to.be(expectedValueLiteral);
      });

      it('should have the property marketDataSource (base name: "market_data_source")', function() {
        // TODO: update the code to test the property marketDataSource
        expect(instance).to.have.property('marketDataSource');
        // expect(instance.marketDataSource).to.be(expectedValueLiteral);
      });

      it('should have the property taxRate (base name: "tax_rate")', function() {
        // TODO: update the code to test the property taxRate
        expect(instance).to.have.property('taxRate');
        // expect(instance.taxRate).to.be(expectedValueLiteral);
      });

      it('should have the property p (base name: "p")', function() {
        // TODO: update the code to test the property p
        expect(instance).to.have.property('p');
        // expect(instance.p).to.be(expectedValueLiteral);
      });

      it('should have the property allocationId (base name: "allocation_id")', function() {
        // TODO: update the code to test the property allocationId
        expect(instance).to.have.property('allocationId');
        // expect(instance.allocationId).to.be(expectedValueLiteral);
      });

      it('should have the property useProxyData (base name: "use_proxy_data")', function() {
        // TODO: update the code to test the property useProxyData
        expect(instance).to.have.property('useProxyData');
        // expect(instance.useProxyData).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "start_date")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property aggregationAccountId (base name: "aggregation_account_id")', function() {
        // TODO: update the code to test the property aggregationAccountId
        expect(instance).to.have.property('aggregationAccountId');
        // expect(instance.aggregationAccountId).to.be(expectedValueLiteral);
      });

      it('should have the property initialBalance (base name: "initial_balance")', function() {
        // TODO: update the code to test the property initialBalance
        expect(instance).to.have.property('initialBalance');
        // expect(instance.initialBalance).to.be(expectedValueLiteral);
      });

      it('should have the property createLog (base name: "create_log")', function() {
        // TODO: update the code to test the property createLog
        expect(instance).to.have.property('createLog');
        // expect(instance.createLog).to.be(expectedValueLiteral);
      });

      it('should have the property decumulationHorizon (base name: "decumulation_horizon")', function() {
        // TODO: update the code to test the property decumulationHorizon
        expect(instance).to.have.property('decumulationHorizon');
        // expect(instance.decumulationHorizon).to.be(expectedValueLiteral);
      });

      it('should have the property accountId (base name: "account_id")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

      it('should have the property accumulationHorizon (base name: "accumulation_horizon")', function() {
        // TODO: update the code to test the property accumulationHorizon
        expect(instance).to.have.property('accumulationHorizon');
        // expect(instance.accumulationHorizon).to.be(expectedValueLiteral);
      });

      it('should have the property tradingDaysPerYear (base name: "trading_days_per_year")', function() {
        // TODO: update the code to test the property tradingDaysPerYear
        expect(instance).to.have.property('tradingDaysPerYear');
        // expect(instance.tradingDaysPerYear).to.be(expectedValueLiteral);
      });

      it('should have the property portfolioWeights (base name: "portfolio_weights")', function() {
        // TODO: update the code to test the property portfolioWeights
        expect(instance).to.have.property('portfolioWeights');
        // expect(instance.portfolioWeights).to.be(expectedValueLiteral);
      });

      it('should have the property guaranteedAccumulationBenefit (base name: "guaranteed_accumulation_benefit")', function() {
        // TODO: update the code to test the property guaranteedAccumulationBenefit
        expect(instance).to.have.property('guaranteedAccumulationBenefit');
        // expect(instance.guaranteedAccumulationBenefit).to.be(expectedValueLiteral);
      });

      it('should have the property portfolioTickers (base name: "portfolio_tickers")', function() {
        // TODO: update the code to test the property portfolioTickers
        expect(instance).to.have.property('portfolioTickers');
        // expect(instance.portfolioTickers).to.be(expectedValueLiteral);
      });

      it('should have the property guaranteedRateBenefit (base name: "guaranteed_rate_benefit")', function() {
        // TODO: update the code to test the property guaranteedRateBenefit
        expect(instance).to.have.property('guaranteedRateBenefit');
        // expect(instance.guaranteedRateBenefit).to.be(expectedValueLiteral);
      });

      it('should have the property modelId (base name: "model_id")', function() {
        // TODO: update the code to test the property modelId
        expect(instance).to.have.property('modelId');
        // expect(instance.modelId).to.be(expectedValueLiteral);
      });

      it('should have the property n (base name: "n")', function() {
        // TODO: update the code to test the property n
        expect(instance).to.have.property('n');
        // expect(instance.n).to.be(expectedValueLiteral);
      });

      it('should have the property frequencyInterval (base name: "frequency_interval")', function() {
        // TODO: update the code to test the property frequencyInterval
        expect(instance).to.have.property('frequencyInterval');
        // expect(instance.frequencyInterval).to.be(expectedValueLiteral);
      });

    });
  });

}));
