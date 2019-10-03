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
    instance = new atom_api.SupportTicketCommentPayloadSupportTicketDocument();
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

  describe('SupportTicketCommentPayloadSupportTicketDocument', function() {
    it('should create an instance of SupportTicketCommentPayloadSupportTicketDocument', function() {
      // uncomment below and update the code to test SupportTicketCommentPayloadSupportTicketDocument
      //var instance = new atom_api.SupportTicketCommentPayloadSupportTicketDocument();
      //expect(instance).to.be.a(atom_api.SupportTicketCommentPayloadSupportTicketDocument);
    });

    it('should have the property docName (base name: "doc_name")', function() {
      // uncomment below and update the code to test the property docName
      //var instance = new atom_api.SupportTicketCommentPayloadSupportTicketDocument();
      //expect(instance).to.be();
    });

    it('should have the property docSize (base name: "doc_size")', function() {
      // uncomment below and update the code to test the property docSize
      //var instance = new atom_api.SupportTicketCommentPayloadSupportTicketDocument();
      //expect(instance).to.be();
    });

    it('should have the property docType (base name: "doc_type")', function() {
      // uncomment below and update the code to test the property docType
      //var instance = new atom_api.SupportTicketCommentPayloadSupportTicketDocument();
      //expect(instance).to.be();
    });

    it('should have the property docFile (base name: "doc_file")', function() {
      // uncomment below and update the code to test the property docFile
      //var instance = new atom_api.SupportTicketCommentPayloadSupportTicketDocument();
      //expect(instance).to.be();
    });

    it('should have the property urlPath (base name: "url_path")', function() {
      // uncomment below and update the code to test the property urlPath
      //var instance = new atom_api.SupportTicketCommentPayloadSupportTicketDocument();
      //expect(instance).to.be();
    });

  });

}));
