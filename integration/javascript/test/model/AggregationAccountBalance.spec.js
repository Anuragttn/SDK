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
    describe('AggregationAccountBalance', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.AggregationAccountBalance();
      });

      it('should create an instance of AggregationAccountBalance', function() {
        // TODO: update the code to test AggregationAccountBalance
        expect(instance).to.be.a(HydrogenIntegrationApi.AggregationAccountBalance);
      });

      it('should have the property aggregationAccountId (base name: "aggregation_account_id")', function() {
        // TODO: update the code to test the property aggregationAccountId
        expect(instance).to.have.property('aggregationAccountId');
        // expect(instance.aggregationAccountId).to.be(expectedValueLiteral);
      });

      it('should have the property availableBalance (base name: "available_balance")', function() {
        // TODO: update the code to test the property availableBalance
        expect(instance).to.have.property('availableBalance');
        // expect(instance.availableBalance).to.be(expectedValueLiteral);
      });

      it('should have the property availableCredit (base name: "available_credit")', function() {
        // TODO: update the code to test the property availableCredit
        expect(instance).to.have.property('availableCredit');
        // expect(instance.availableCredit).to.be(expectedValueLiteral);
      });

      it('should have the property balance (base name: "balance")', function() {
        // TODO: update the code to test the property balance
        expect(instance).to.have.property('balance');
        // expect(instance.balance).to.be(expectedValueLiteral);
      });

      it('should have the property balanceTimeStamp (base name: "balance_time_stamp")', function() {
        // TODO: update the code to test the property balanceTimeStamp
        expect(instance).to.have.property('balanceTimeStamp');
        // expect(instance.balanceTimeStamp).to.be(expectedValueLiteral);
      });

      it('should have the property createDate (base name: "create_date")', function() {
        // TODO: update the code to test the property createDate
        expect(instance).to.have.property('createDate');
        // expect(instance.createDate).to.be(expectedValueLiteral);
      });

      it('should have the property currencyCode (base name: "currency_code")', function() {
        // TODO: update the code to test the property currencyCode
        expect(instance).to.have.property('currencyCode');
        // expect(instance.currencyCode).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property isActive (base name: "is_active")', function() {
        // TODO: update the code to test the property isActive
        expect(instance).to.have.property('isActive');
        // expect(instance.isActive).to.be(expectedValueLiteral);
      });

      it('should have the property secondaryId (base name: "secondary_id")', function() {
        // TODO: update the code to test the property secondaryId
        expect(instance).to.have.property('secondaryId');
        // expect(instance.secondaryId).to.be(expectedValueLiteral);
      });

      it('should have the property updateDate (base name: "update_date")', function() {
        // TODO: update the code to test the property updateDate
        expect(instance).to.have.property('updateDate');
        // expect(instance.updateDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
