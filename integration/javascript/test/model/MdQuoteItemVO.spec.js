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
 * Swagger Codegen version: 2.4.14
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
    describe('MdQuoteItemVO', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.MdQuoteItemVO();
      });

      it('should create an instance of MdQuoteItemVO', function() {
        // TODO: update the code to test MdQuoteItemVO
        expect(instance).to.be.a(HydrogenIntegrationApi.MdQuoteItemVO);
      });

      it('should have the property ask (base name: "ask")', function() {
        // TODO: update the code to test the property ask
        expect(instance).to.have.property('ask');
        // expect(instance.ask).to.be(expectedValueLiteral);
      });

      it('should have the property bid (base name: "bid")', function() {
        // TODO: update the code to test the property bid
        expect(instance).to.have.property('bid');
        // expect(instance.bid).to.be(expectedValueLiteral);
      });

      it('should have the property change (base name: "change")', function() {
        // TODO: update the code to test the property change
        expect(instance).to.have.property('change');
        // expect(instance.change).to.be(expectedValueLiteral);
      });

      it('should have the property close (base name: "close")', function() {
        // TODO: update the code to test the property close
        expect(instance).to.have.property('close');
        // expect(instance.close).to.be(expectedValueLiteral);
      });

      it('should have the property currencyCode (base name: "currency_code")', function() {
        // TODO: update the code to test the property currencyCode
        expect(instance).to.have.property('currencyCode');
        // expect(instance.currencyCode).to.be(expectedValueLiteral);
      });

      it('should have the property dayRange (base name: "day_range")', function() {
        // TODO: update the code to test the property dayRange
        expect(instance).to.have.property('dayRange');
        // expect(instance.dayRange).to.be(expectedValueLiteral);
      });

      it('should have the property exchange (base name: "exchange")', function() {
        // TODO: update the code to test the property exchange
        expect(instance).to.have.property('exchange');
        // expect(instance.exchange).to.be(expectedValueLiteral);
      });

      it('should have the property high (base name: "high")', function() {
        // TODO: update the code to test the property high
        expect(instance).to.have.property('high');
        // expect(instance.high).to.be(expectedValueLiteral);
      });

      it('should have the property lastTrade (base name: "last_trade")', function() {
        // TODO: update the code to test the property lastTrade
        expect(instance).to.have.property('lastTrade');
        // expect(instance.lastTrade).to.be(expectedValueLiteral);
      });

      it('should have the property lastTradeTimeStamp (base name: "last_trade_time_stamp")', function() {
        // TODO: update the code to test the property lastTradeTimeStamp
        expect(instance).to.have.property('lastTradeTimeStamp');
        // expect(instance.lastTradeTimeStamp).to.be(expectedValueLiteral);
      });

      it('should have the property low (base name: "low")', function() {
        // TODO: update the code to test the property low
        expect(instance).to.have.property('low');
        // expect(instance.low).to.be(expectedValueLiteral);
      });

      it('should have the property marketCap (base name: "market_cap")', function() {
        // TODO: update the code to test the property marketCap
        expect(instance).to.have.property('marketCap');
        // expect(instance.marketCap).to.be(expectedValueLiteral);
      });

      it('should have the property nucleusSecurityId (base name: "nucleus_security_id")', function() {
        // TODO: update the code to test the property nucleusSecurityId
        expect(instance).to.have.property('nucleusSecurityId');
        // expect(instance.nucleusSecurityId).to.be(expectedValueLiteral);
      });

      it('should have the property open (base name: "open")', function() {
        // TODO: update the code to test the property open
        expect(instance).to.have.property('open');
        // expect(instance.open).to.be(expectedValueLiteral);
      });

      it('should have the property prevClose (base name: "prev_close")', function() {
        // TODO: update the code to test the property prevClose
        expect(instance).to.have.property('prevClose');
        // expect(instance.prevClose).to.be(expectedValueLiteral);
      });

      it('should have the property ticker (base name: "ticker")', function() {
        // TODO: update the code to test the property ticker
        expect(instance).to.have.property('ticker');
        // expect(instance.ticker).to.be(expectedValueLiteral);
      });

      it('should have the property volume (base name: "volume")', function() {
        // TODO: update the code to test the property volume
        expect(instance).to.have.property('volume');
        // expect(instance.volume).to.be(expectedValueLiteral);
      });

      it('should have the property yearRange (base name: "year_range")', function() {
        // TODO: update the code to test the property yearRange
        expect(instance).to.have.property('yearRange');
        // expect(instance.yearRange).to.be(expectedValueLiteral);
      });

    });
  });

}));