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
    describe('EmergencyFundCalculatorRequest', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.EmergencyFundCalculatorRequest();
      });

      it('should create an instance of EmergencyFundCalculatorRequest', function() {
        // TODO: update the code to test EmergencyFundCalculatorRequest
        expect(instance).to.be.a(HydrogenProtonApi.EmergencyFundCalculatorRequest);
      });

      it('should have the property frequencyUnit (base name: "frequency_unit")', function() {
        // TODO: update the code to test the property frequencyUnit
        expect(instance).to.have.property('frequencyUnit');
        // expect(instance.frequencyUnit).to.be(expectedValueLiteral);
      });

      it('should have the property aggregationAccountIds (base name: "aggregation_account_ids")', function() {
        // TODO: update the code to test the property aggregationAccountIds
        expect(instance).to.have.property('aggregationAccountIds');
        // expect(instance.aggregationAccountIds).to.be(expectedValueLiteral);
      });

      it('should have the property foodCosts (base name: "food_costs")', function() {
        // TODO: update the code to test the property foodCosts
        expect(instance).to.have.property('foodCosts');
        // expect(instance.foodCosts).to.be(expectedValueLiteral);
      });

      it('should have the property housingCost (base name: "housing_cost")', function() {
        // TODO: update the code to test the property housingCost
        expect(instance).to.have.property('housingCost');
        // expect(instance.housingCost).to.be(expectedValueLiteral);
      });

      it('should have the property debtPayments (base name: "debt_payments")', function() {
        // TODO: update the code to test the property debtPayments
        expect(instance).to.have.property('debtPayments');
        // expect(instance.debtPayments).to.be(expectedValueLiteral);
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

      it('should have the property utilityPayments (base name: "utility_payments")', function() {
        // TODO: update the code to test the property utilityPayments
        expect(instance).to.have.property('utilityPayments');
        // expect(instance.utilityPayments).to.be(expectedValueLiteral);
      });

      it('should have the property insurancePayments (base name: "insurance_payments")', function() {
        // TODO: update the code to test the property insurancePayments
        expect(instance).to.have.property('insurancePayments');
        // expect(instance.insurancePayments).to.be(expectedValueLiteral);
      });

      it('should have the property transportationCosts (base name: "transportation_costs")', function() {
        // TODO: update the code to test the property transportationCosts
        expect(instance).to.have.property('transportationCosts');
        // expect(instance.transportationCosts).to.be(expectedValueLiteral);
      });

      it('should have the property lookbackPeriods (base name: "lookback_periods")', function() {
        // TODO: update the code to test the property lookbackPeriods
        expect(instance).to.have.property('lookbackPeriods');
        // expect(instance.lookbackPeriods).to.be(expectedValueLiteral);
      });

      it('should have the property emergencyFundDuration (base name: "emergency_fund_duration")', function() {
        // TODO: update the code to test the property emergencyFundDuration
        expect(instance).to.have.property('emergencyFundDuration');
        // expect(instance.emergencyFundDuration).to.be(expectedValueLiteral);
      });

      it('should have the property interestRate (base name: "interest_rate")', function() {
        // TODO: update the code to test the property interestRate
        expect(instance).to.have.property('interestRate');
        // expect(instance.interestRate).to.be(expectedValueLiteral);
      });

      it('should have the property telecomPayments (base name: "telecom_payments")', function() {
        // TODO: update the code to test the property telecomPayments
        expect(instance).to.have.property('telecomPayments');
        // expect(instance.telecomPayments).to.be(expectedValueLiteral);
      });

      it('should have the property savingsHorizon (base name: "savings_horizon")', function() {
        // TODO: update the code to test the property savingsHorizon
        expect(instance).to.have.property('savingsHorizon');
        // expect(instance.savingsHorizon).to.be(expectedValueLiteral);
      });

      it('should have the property otherExpenses (base name: "other_expenses")', function() {
        // TODO: update the code to test the property otherExpenses
        expect(instance).to.have.property('otherExpenses');
        // expect(instance.otherExpenses).to.be(expectedValueLiteral);
      });

      it('should have the property currentEmergencyFundBalance (base name: "current_emergency_fund_balance")', function() {
        // TODO: update the code to test the property currentEmergencyFundBalance
        expect(instance).to.have.property('currentEmergencyFundBalance');
        // expect(instance.currentEmergencyFundBalance).to.be(expectedValueLiteral);
      });

    });
  });

}));
