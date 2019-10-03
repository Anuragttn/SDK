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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GoalHoldingsResponseInner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GoalHoldingsResponseInner'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.GoalHoldingsResponse = factory(root.atom_api.ApiClient, root.atom_api.GoalHoldingsResponseInner);
  }
}(this, function(ApiClient, GoalHoldingsResponseInner) {
  'use strict';




  /**
   * The GoalHoldingsResponse model module.
   * @module model/GoalHoldingsResponse
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>GoalHoldingsResponse</code>.
   * @alias module:model/GoalHoldingsResponse
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>GoalHoldingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalHoldingsResponse} obj Optional instance to populate.
   * @return {module:model/GoalHoldingsResponse} The populated <code>GoalHoldingsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'GoalHoldingsResponseInner');

    }
    return obj;
  }




  return exports;
}));


