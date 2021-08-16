/**
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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

  beforeEach(function() {
    instance = new HydrogenIntegrationApi.AccountingApi();
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

  describe('AccountingApi', function() {
    describe('createOrUpdateAccountingBillPayment', function() {
      it('should call createOrUpdateAccountingBillPayment successfully', function(done) {
        //uncomment below and update the code to test createOrUpdateAccountingBillPayment
        //instance.createOrUpdateAccountingBillPayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrUpdateAccountingBills', function() {
      it('should call createOrUpdateAccountingBills successfully', function(done) {
        //uncomment below and update the code to test createOrUpdateAccountingBills
        //instance.createOrUpdateAccountingBills(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrUpdateAccountingCustomer', function() {
      it('should call createOrUpdateAccountingCustomer successfully', function(done) {
        //uncomment below and update the code to test createOrUpdateAccountingCustomer
        //instance.createOrUpdateAccountingCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrUpdateAccountingCustomerRevenue', function() {
      it('should call createOrUpdateAccountingCustomerRevenue successfully', function(done) {
        //uncomment below and update the code to test createOrUpdateAccountingCustomerRevenue
        //instance.createOrUpdateAccountingCustomerRevenue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrUpdateAccountingInvoice', function() {
      it('should call createOrUpdateAccountingInvoice successfully', function(done) {
        //uncomment below and update the code to test createOrUpdateAccountingInvoice
        //instance.createOrUpdateAccountingInvoice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrUpdateAccountingInvoicePayment', function() {
      it('should call createOrUpdateAccountingInvoicePayment successfully', function(done) {
        //uncomment below and update the code to test createOrUpdateAccountingInvoicePayment
        //instance.createOrUpdateAccountingInvoicePayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrUpdateAccountingSupplier', function() {
      it('should call createOrUpdateAccountingSupplier successfully', function(done) {
        //uncomment below and update the code to test createOrUpdateAccountingSupplier
        //instance.createOrUpdateAccountingSupplier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAccountingVendorAccessConfigIsActiveById', function() {
      it('should call deleteAccountingVendorAccessConfigIsActiveById successfully', function(done) {
        //uncomment below and update the code to test deleteAccountingVendorAccessConfigIsActiveById
        //instance.deleteAccountingVendorAccessConfigIsActiveById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountingStats', function() {
      it('should call getAccountingStats successfully', function(done) {
        //uncomment below and update the code to test getAccountingStats
        //instance.getAccountingStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountingVendorInfoUsingClientId', function() {
      it('should call getAccountingVendorInfoUsingClientId successfully', function(done) {
        //uncomment below and update the code to test getAccountingVendorInfoUsingClientId
        //instance.getAccountingVendorInfoUsingClientId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccountingBill', function() {
      it('should call updateAccountingBill successfully', function(done) {
        //uncomment below and update the code to test updateAccountingBill
        //instance.updateAccountingBill(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccountingCustomer', function() {
      it('should call updateAccountingCustomer successfully', function(done) {
        //uncomment below and update the code to test updateAccountingCustomer
        //instance.updateAccountingCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccountingInvoice', function() {
      it('should call updateAccountingInvoice successfully', function(done) {
        //uncomment below and update the code to test updateAccountingInvoice
        //instance.updateAccountingInvoice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccountingSupplier', function() {
      it('should call updateAccountingSupplier successfully', function(done) {
        //uncomment below and update the code to test updateAccountingSupplier
        //instance.updateAccountingSupplier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccountingVendorAccessConfigIsActiveById', function() {
      it('should call updateAccountingVendorAccessConfigIsActiveById successfully', function(done) {
        //uncomment below and update the code to test updateAccountingVendorAccessConfigIsActiveById
        //instance.updateAccountingVendorAccessConfigIsActiveById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
