/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.5
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
    factory(root.expect, root.HydrogenNucleusApi);
  }
}(this, function(expect, HydrogenNucleusApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenNucleusApi.WebhookApi();
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

  describe('WebhookApi', function() {
    describe('createWebhookUsingPost', function() {
      it('should call createWebhookUsingPost successfully', function(done) {
        //uncomment below and update the code to test createWebhookUsingPost
        //instance.createWebhookUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWebhookUsingDelete', function() {
      it('should call deleteWebhookUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteWebhookUsingDelete
        //instance.deleteWebhookUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhookAllUsingGet', function() {
      it('should call getWebhookAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getWebhookAllUsingGet
        //instance.getWebhookAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhookUsingGet', function() {
      it('should call getWebhookUsingGet successfully', function(done) {
        //uncomment below and update the code to test getWebhookUsingGet
        //instance.getWebhookUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWebhookUsingPut', function() {
      it('should call updateWebhookUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateWebhookUsingPut
        //instance.updateWebhookUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
