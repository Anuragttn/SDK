/*
 * Hydrogen Admin API
 * The Hydrogen Admin API
 *
 * OpenAPI spec version: 1.0.0
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Card', 'model/PageCard', 'AuthApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Card'),
        require('../model/PageCard'), require('./AuthApi'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenAdminApi) {
      root.HydrogenAdminApi = {};
    }
    root.HydrogenAdminApi.CardApi =
        factory(root.HydrogenAdminApi.ApiClient, root.HydrogenAdminApi.Card,
            root.HydrogenAdminApi.PageCard, root.HydrogenAdminApi.AuthApi);
  }
}(this, function(ApiClient, Card, PageCard, AuthApi) {
  'use strict';

  /**
   * Card service.
   * @module api/CardApi
   * @version 1.3.1
   */

  /**
   * Constructs a new CardApi. 
   * @alias module:api/CardApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient, authApi) {
    this.apiClient = apiClient || ApiClient.instance;

    /**
     * Callback function to receive the result of the createCardUsingPost operation.
     * @callback module:api/CardApi~createCardUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Card} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a card request
     * Create a new card request.
     * @param {module:model/Card} cardRequest cardRequest
     * @param {module:api/CardApi~createCardUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Card}
     */
    this.createCardUsingPost = function(cardRequest, appTokenConfig, callback) {
      var postBody = cardRequest;

      // verify the required parameter 'cardRequest' is set
      if (cardRequest === undefined || cardRequest === null) {
        throw new Error("Missing the required parameter 'cardRequest' when calling createCardUsingPost");
      }

      if (appTokenConfig.basePath === undefined || appTokenConfig.basePath === null) {
        throw new Error("Missing the required parameter 'basePath'");
      }
      if (appTokenConfig.authType === undefined || appTokenConfig.authType === null) {
        throw new Error("Missing the required parameter 'authType'");
      }

      this.apiClient.basePath = appTokenConfig.basePath;
      this.authApi = authApi || new AuthApi();

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };
      var oauth2 = this.apiClient.authentications['oauth2'];

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Card;
      async function createUsingPostClientCredentials (apiClient, authApi) {
        // Token Generation for grant_type = client_credentials
        const req = authApi.createUsingPostClientCredentials({
          'grant_type': 'client_credentials',
          'client_id': appTokenConfig.clientId,
          'client_secret': appTokenConfig.clientSecret
        }, null);

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }

      async function createUsingPostPassword (apiClient, authApi) {
        // Token Generation for grant_type = password
        const req = authApi.createUsingPostPassword({
          'grant_type': 'password',
          'client_id': appTokenConfig.clientId,
          'client_secret': appTokenConfig.clientSecret,
          'username': appTokenConfig.username,
          'password': appTokenConfig.password
        }, null);

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }

      async function createUsingPostUserToken (apiClient, authApi) {
        // Token Generation for grant_type = password
        const req = authApi.createUsingPostClientTokenCredentials({
          'grant_type': 'password',
          'client_id': appTokenConfig.clientId,
          'client_secret': appTokenConfig.clientSecret,
          'Client-Token': appTokenConfig.ClientToken
        }, null);

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }

      async function createCard (apiClient) {
        const req = apiClient.callApi(
            '/nucleus/v1/card', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, Card, null
        );

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }



      try {
        (async () => {
          if (appTokenConfig.authType && appTokenConfig.authType.toLowerCase() === "client_credentials") {
            const tokenData = await createUsingPostClientCredentials(this.apiClient, this.authApi).catch(e=>{
              callback(e, null, null)
            });
            oauth2.accessToken = tokenData.access_token;
          } else if (appTokenConfig.authType && appTokenConfig.authType.toLowerCase() === "password_credentials") {
            const tokenData = await createUsingPostPassword(this.apiClient, this.authApi).catch(e=>{
              callback(e, null, null)
            });
            oauth2.accessToken = tokenData.access_token;
          } else if (appTokenConfig.authType && appTokenConfig.authType.toLowerCase() === "client_token_credentials") {
            const tokenData = await createUsingPostUserToken(this.apiClient, this.authApi).catch(e=>{
              callback(e, null, null)
            });
            oauth2.accessToken = tokenData.access_token;
          }

          const response = await createCard(this.apiClient).catch(e=>{
            callback(e, null, null)
          });
          callback(null, response, response) ;
        })();
      }
        catch(e){
          callback(e, null, null);
        }
    }

    /**
     * Callback function to receive the result of the getCardAllUsingGet operation.
     * @callback module:api/CardApi~getCardAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all card requests
     * Get the information for all card requests.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/CardApi~getCardAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageCard}
     */
    this.getCardAllUsingGet = function(opts, appTokenConfig, callback) {
      opts = opts || {};
      var postBody = null;

      if (appTokenConfig.basePath === undefined || appTokenConfig.basePath === null) {
        throw new Error("Missing the required parameter 'basePath'");
      }
      if (appTokenConfig.authType === undefined || appTokenConfig.authType === null) {
        throw new Error("Missing the required parameter 'authType'");
      }
      this.apiClient.basePath = appTokenConfig.basePath;
      this.authApi = authApi || new AuthApi();

      var pathParams = {
      };
      var queryParams = {
        'ascending': opts['ascending'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page': opts['page'],
        'size': opts['size'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };
      var oauth2 = this.apiClient.authentications['oauth2'];

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = PageCard;
      async function createUsingPostClientCredentials (apiClient, authApi) {
        // Token Generation for grant_type = client_credentials
        const req = authApi.createUsingPostClientCredentials({
          'grant_type': 'client_credentials',
          'client_id': appTokenConfig.clientId,
          'client_secret': appTokenConfig.clientSecret
        }, null);

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }

      async function createUsingPostPassword (apiClient, authApi) {
        // Token Generation for grant_type = password
        const req = authApi.createUsingPostPassword({
          'grant_type': 'password',
          'client_id': appTokenConfig.clientId,
          'client_secret': appTokenConfig.clientSecret,
          'username': appTokenConfig.username,
          'password': appTokenConfig.password
        }, null);

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }

      async function createUsingPostUserToken (apiClient, authApi) {
        // Token Generation for grant_type = password
        const req = authApi.createUsingPostClientTokenCredentials({
          'grant_type': 'password',
          'client_id': appTokenConfig.clientId,
          'client_secret': appTokenConfig.clientSecret,
          'Client-Token': appTokenConfig.ClientToken
        }, null);

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }
      async function getAllCard (apiClient) {
        const req = apiClient.callApi(
            '/nucleus/v1/card', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, PageCard, null
        );

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }
      try {
        (async () => {
          if (appTokenConfig.authType && appTokenConfig.authType.toLowerCase() === "client_credentials") {
            const tokenData = await createUsingPostClientCredentials(this.apiClient, this.authApi).catch(e=>{
              callback(e, null, null)
            });
            oauth2.accessToken = tokenData.access_token;
          } else if (appTokenConfig.authType && appTokenConfig.authType.toLowerCase() === "password_credentials") {
            const tokenData = await createUsingPostPassword(this.apiClient, this.authApi).catch(e=>{
              callback(e, null, null)
            });
            oauth2.accessToken = tokenData.access_token;
          } else if (appTokenConfig.authType && appTokenConfig.authType.toLowerCase() === "client_token_credentials") {
            const tokenData = await createUsingPostUserToken(this.apiClient, this.authApi).catch(e=>{
              callback(e, null, null)
            });
            oauth2.accessToken = tokenData.access_token;
          }

          const response = await getAllCard(this.apiClient).catch(e=>{
            callback(e, null, null)
          });
          callback(null, response, response) ;
        })();
      }
      catch(e){
        callback(e, null, null);
      }
    }

    /**
     * Callback function to receive the result of the getCardUsingGet operation.
     * @callback module:api/CardApi~getCardUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Card} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a card request
     * Retrieve the information for a card request.
     * @param {String} cardId UUID card_id
     * @param {module:api/CardApi~getCardUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Card}
     */
    this.getCardUsingGet = function(cardId, appTokenConfig, callback) {
      var postBody = null;

      // verify the required parameter 'cardId' is set
      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling getCardUsingGet");
      }

      if (appTokenConfig.basePath === undefined || appTokenConfig.basePath === null) {
        throw new Error("Missing the required parameter 'basePath'");
      }
      if (appTokenConfig.authType === undefined || appTokenConfig.authType === null) {
        throw new Error("Missing the required parameter 'authType'");
      }
      this.apiClient.basePath = appTokenConfig.basePath;
      this.authApi = authApi || new AuthApi();

      var pathParams = {
        'card_id': cardId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = Card;
      var oauth2 = this.apiClient.authentications['oauth2'];

      async function createUsingPostClientCredentials (apiClient, authApi) {
        // Token Generation for grant_type = client_credentials
        const req = authApi.createUsingPostClientCredentials({
          'grant_type': 'client_credentials',
          'client_id': appTokenConfig.clientId,
          'client_secret': appTokenConfig.clientSecret
        }, null);

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }

      async function createUsingPostPassword (apiClient, authApi) {
        // Token Generation for grant_type = password
        const req = authApi.createUsingPostPassword({
          'grant_type': 'password',
          'client_id': appTokenConfig.clientId,
          'client_secret': appTokenConfig.clientSecret,
          'username': appTokenConfig.username,
          'password': appTokenConfig.password
        }, null);

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }

      async function createUsingPostUserToken (apiClient, authApi) {
        // Token Generation for grant_type = password
        const req = authApi.createUsingPostClientTokenCredentials({
          'grant_type': 'password',
          'client_id': appTokenConfig.clientId,
          'client_secret': appTokenConfig.clientSecret,
          'Client-Token': appTokenConfig.ClientToken
        }, null);

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }
      async function getCard (apiClient) {
        const req = apiClient.callApi(
            '/nucleus/v1/card/{card_id}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, Card, null
        );

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }
      try {
        (async () => {
          if (appTokenConfig.authType && appTokenConfig.authType.toLowerCase() === "client_credentials") {
            const tokenData = await createUsingPostClientCredentials(this.apiClient, this.authApi).catch(e=>{
              callback(e, null, null)
            });
            oauth2.accessToken = tokenData.access_token;
          } else if (appTokenConfig.authType && appTokenConfig.authType.toLowerCase() === "password_credentials") {
            const tokenData = await createUsingPostPassword(this.apiClient, this.authApi).catch(e=>{
              callback(e, null, null)
            });
            oauth2.accessToken = tokenData.access_token;
          } else if (appTokenConfig.authType && appTokenConfig.authType.toLowerCase() === "client_token_credentials") {
            const tokenData = await createUsingPostUserToken(this.apiClient, this.authApi).catch(e=>{
              callback(e, null, null)
            });
            oauth2.accessToken = tokenData.access_token;
          }

          const response = await getCard(this.apiClient).catch(e=>{
            callback(e, null, null)
          });
          callback(null, response, response) ;
        })();
      }
      catch(e){
        callback(e, null, null);
      }

    }

    /**
     * Callback function to receive the result of the updateCardUsingPut operation.
     * @callback module:api/CardApi~updateCardUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Card} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a card request
     * Update the information for a card request.
     * @param {Object} card card
     * @param {String} cardId UUID card_id
     * @param {module:api/CardApi~updateCardUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Card}
     */
    this.updateCardUsingPut = function(card, cardId, callback) {
      var postBody = card;

      // verify the required parameter 'card' is set
      if (card === undefined || card === null) {
        throw new Error("Missing the required parameter 'card' when calling updateCardUsingPut");
      }

      // verify the required parameter 'cardId' is set
      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling updateCardUsingPut");
      }

      if (appTokenConfig.basePath === undefined || appTokenConfig.basePath === null) {
        throw new Error("Missing the required parameter 'basePath'");
      }
      if (appTokenConfig.authType === undefined || appTokenConfig.authType === null) {
        throw new Error("Missing the required parameter 'authType'");
      }
      this.apiClient.basePath = appTokenConfig.basePath;
      this.authApi = authApi || new AuthApi();

      var pathParams = {
        'card_id': cardId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Card;
      var oauth2 = this.apiClient.authentications['oauth2'];


      async function createUsingPostClientCredentials (apiClient, authApi) {
        // Token Generation for grant_type = client_credentials
        const req = authApi.createUsingPostClientCredentials({
          'grant_type': 'client_credentials',
          'client_id': appTokenConfig.clientId,
          'client_secret': appTokenConfig.clientSecret
        }, null);

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }

      async function createUsingPostPassword (apiClient, authApi) {
        // Token Generation for grant_type = password
        const req = authApi.createUsingPostPassword({
          'grant_type': 'password',
          'client_id': appTokenConfig.clientId,
          'client_secret': appTokenConfig.clientSecret,
          'username': appTokenConfig.username,
          'password': appTokenConfig.password
        }, null);

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }

      async function createUsingPostUserToken (apiClient, authApi) {
        // Token Generation for grant_type = password
        const req = authApi.createUsingPostClientTokenCredentials({
          'grant_type': 'password',
          'client_id': appTokenConfig.clientId,
          'client_secret': appTokenConfig.clientSecret,
          'Client-Token': appTokenConfig.ClientToken
        }, null);

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }
      async function updateCard (apiClient) {
        const req = apiClient.callApi(
            '/nucleus/v1/card/{card_id}', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, Card, null
        );

        return new Promise(function(resolve, reject) {
          req
              .then(response => {
                let data = null;
                try {
                  data = apiClient.deserialize(response, Object);
                  if (apiClient.enableCookies && typeof window === 'undefined') {
                    apiClient.agent.saveCookies(response);
                  }
                } catch (err) {
                  console.log(err);
                  reject(err);
                }

                resolve(data)
              })
              .catch(err => {
                console.error(err);
                reject(err);
              });
        });
      }
      try {
        (async () => {
          if (appTokenConfig.authType && appTokenConfig.authType.toLowerCase() === "client_credentials") {
            const tokenData = await createUsingPostClientCredentials(this.apiClient, this.authApi).catch(e=>{
              callback(e, null, null)
            });
            oauth2.accessToken = tokenData.access_token;
          } else if (appTokenConfig.authType && appTokenConfig.authType.toLowerCase() === "password_credentials") {
            const tokenData = await createUsingPostPassword(this.apiClient, this.authApi).catch(e=>{
              callback(e, null, null)
            });
            oauth2.accessToken = tokenData.access_token;
          } else if (appTokenConfig.authType && appTokenConfig.authType.toLowerCase() === "client_token_credentials") {
            const tokenData = await createUsingPostUserToken(this.apiClient, this.authApi).catch(e=>{
              callback(e, null, null)
            });
            oauth2.accessToken = tokenData.access_token;
          }

          const response = await updateCard(this.apiClient).catch(e=>{
            callback(e, null, null)
          });
          callback(null, response, response) ;
        })();
      }
      catch(e){
        callback(e, null, null);
      }
    }
  };

  return exports;
}));
