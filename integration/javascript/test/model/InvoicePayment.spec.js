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
    describe('InvoicePayment', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.InvoicePayment();
      });

      it('should create an instance of InvoicePayment', function() {
        // TODO: update the code to test InvoicePayment
        expect(instance).to.be.a(HydrogenIntegrationApi.InvoicePayment);
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

      it('should have the property invoiceId (base name: "invoice_id")', function() {
        // TODO: update the code to test the property invoiceId
        expect(instance).to.have.property('invoiceId');
        // expect(instance.invoiceId).to.be(expectedValueLiteral);
      });

      it('should have the property paymentAmount (base name: "payment_amount")', function() {
        // TODO: update the code to test the property paymentAmount
        expect(instance).to.have.property('paymentAmount');
        // expect(instance.paymentAmount).to.be(expectedValueLiteral);
      });

      it('should have the property paymentDate (base name: "payment_date")', function() {
        // TODO: update the code to test the property paymentDate
        expect(instance).to.have.property('paymentDate');
        // expect(instance.paymentDate).to.be(expectedValueLiteral);
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
