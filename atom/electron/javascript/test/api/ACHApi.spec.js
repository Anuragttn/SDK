/*
 * Hydrogen Electron API
 * The Hydrogen Electron API
 *
 * OpenAPI spec version: 1.3.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.24
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
    factory(root.expect, root.HydrogenElectronApi);
  }
}(this, function(expect, HydrogenElectronApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenElectronApi.ACHApi();
  });

  describe('(package)', function() {
    describe('ACHApi', function() {
      describe('fundCardUsingPost', function() {
        it('should call fundCardUsingPost successfully', function(done) {
          // TODO: uncomment, update parameter values for fundCardUsingPost call and complete the assertions
          /*
          var achCardRequestCO = new HydrogenElectronApi.AchCardRequestCO();
          achCardRequestCO.nucleusFundingId = """00000000-0000-0000-0000-000000000000";

          instance.fundCardUsingPost(achCardRequestCO, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(HydrogenElectronApi.AchCardResponseVO);
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.nucleusFundingId).to.be.a('string');
            expect(data.nucleusFundingId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.vendorName).to.be.a('string');
            expect(data.vendorName).to.be("");
            expect(data.vendorResponse).to.be.a(Object);
            expect(data.vendorResponse).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
