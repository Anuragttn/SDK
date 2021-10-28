/* 
 * Hydrogen Proton API
 *
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.9.2
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using RestSharp;
using Proton.Client;
using Proton.ModelEntity;

namespace Proton.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ICardsApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Card Analysis
        /// </summary>
        /// <remarks>
        /// Analyze cardholder activity over time
        /// </remarks>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardAnalysisRequest">Request payload for Card Analysis</param>
        /// <returns>Dictionary&lt;string, Object&gt;</returns>
        Dictionary<string, Object> CardAnalysis (CardAnalysisRequest cardAnalysisRequest);

        /// <summary>
        /// Card Analysis
        /// </summary>
        /// <remarks>
        /// Analyze cardholder activity over time
        /// </remarks>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardAnalysisRequest">Request payload for Card Analysis</param>
        /// <returns>ApiResponse of Dictionary&lt;string, Object&gt;</returns>
        ApiResponse<Dictionary<string, Object>> CardAnalysisWithHttpInfo (CardAnalysisRequest cardAnalysisRequest);
        /// <summary>
        /// Card Limit Check
        /// </summary>
        /// <remarks>
        /// Evaluate card transaction history against spending controls
        /// </remarks>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardLimitCheckRequest">Request payload for Card Limit Check</param>
        /// <returns>Dictionary&lt;string, Object&gt;</returns>
        Dictionary<string, Object> CardLimitCheck (CardLimitCheckRequest cardLimitCheckRequest);

        /// <summary>
        /// Card Limit Check
        /// </summary>
        /// <remarks>
        /// Evaluate card transaction history against spending controls
        /// </remarks>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardLimitCheckRequest">Request payload for Card Limit Check</param>
        /// <returns>ApiResponse of Dictionary&lt;string, Object&gt;</returns>
        ApiResponse<Dictionary<string, Object>> CardLimitCheckWithHttpInfo (CardLimitCheckRequest cardLimitCheckRequest);
        /// <summary>
        /// Card Transaction Authorization
        /// </summary>
        /// <remarks>
        /// Approve or reject a card transaction based on applicable conditions
        /// </remarks>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardTransactionAuthorizationRequest">Request payload for Card Transaction Authorization</param>
        /// <returns>Dictionary&lt;string, Object&gt;</returns>
        Dictionary<string, Object> CardTransactionAuthorization (CardTransactionAuthorizationRequest cardTransactionAuthorizationRequest);

        /// <summary>
        /// Card Transaction Authorization
        /// </summary>
        /// <remarks>
        /// Approve or reject a card transaction based on applicable conditions
        /// </remarks>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardTransactionAuthorizationRequest">Request payload for Card Transaction Authorization</param>
        /// <returns>ApiResponse of Dictionary&lt;string, Object&gt;</returns>
        ApiResponse<Dictionary<string, Object>> CardTransactionAuthorizationWithHttpInfo (CardTransactionAuthorizationRequest cardTransactionAuthorizationRequest);
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// Card Analysis
        /// </summary>
        /// <remarks>
        /// Analyze cardholder activity over time
        /// </remarks>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardAnalysisRequest">Request payload for Card Analysis</param>
        /// <returns>Task of Dictionary&lt;string, Object&gt;</returns>
        System.Threading.Tasks.Task<Dictionary<string, Object>> CardAnalysisAsync (CardAnalysisRequest cardAnalysisRequest);

        /// <summary>
        /// Card Analysis
        /// </summary>
        /// <remarks>
        /// Analyze cardholder activity over time
        /// </remarks>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardAnalysisRequest">Request payload for Card Analysis</param>
        /// <returns>Task of ApiResponse (Dictionary&lt;string, Object&gt;)</returns>
        System.Threading.Tasks.Task<ApiResponse<Dictionary<string, Object>>> CardAnalysisAsyncWithHttpInfo (CardAnalysisRequest cardAnalysisRequest);
        /// <summary>
        /// Card Limit Check
        /// </summary>
        /// <remarks>
        /// Evaluate card transaction history against spending controls
        /// </remarks>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardLimitCheckRequest">Request payload for Card Limit Check</param>
        /// <returns>Task of Dictionary&lt;string, Object&gt;</returns>
        System.Threading.Tasks.Task<Dictionary<string, Object>> CardLimitCheckAsync (CardLimitCheckRequest cardLimitCheckRequest);

        /// <summary>
        /// Card Limit Check
        /// </summary>
        /// <remarks>
        /// Evaluate card transaction history against spending controls
        /// </remarks>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardLimitCheckRequest">Request payload for Card Limit Check</param>
        /// <returns>Task of ApiResponse (Dictionary&lt;string, Object&gt;)</returns>
        System.Threading.Tasks.Task<ApiResponse<Dictionary<string, Object>>> CardLimitCheckAsyncWithHttpInfo (CardLimitCheckRequest cardLimitCheckRequest);
        /// <summary>
        /// Card Transaction Authorization
        /// </summary>
        /// <remarks>
        /// Approve or reject a card transaction based on applicable conditions
        /// </remarks>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardTransactionAuthorizationRequest">Request payload for Card Transaction Authorization</param>
        /// <returns>Task of Dictionary&lt;string, Object&gt;</returns>
        System.Threading.Tasks.Task<Dictionary<string, Object>> CardTransactionAuthorizationAsync (CardTransactionAuthorizationRequest cardTransactionAuthorizationRequest);

        /// <summary>
        /// Card Transaction Authorization
        /// </summary>
        /// <remarks>
        /// Approve or reject a card transaction based on applicable conditions
        /// </remarks>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardTransactionAuthorizationRequest">Request payload for Card Transaction Authorization</param>
        /// <returns>Task of ApiResponse (Dictionary&lt;string, Object&gt;)</returns>
        System.Threading.Tasks.Task<ApiResponse<Dictionary<string, Object>>> CardTransactionAuthorizationAsyncWithHttpInfo (CardTransactionAuthorizationRequest cardTransactionAuthorizationRequest);
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class CardsApi : ICardsApi
    {
        private Proton.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="CardsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public CardsApi(String basePath)
        {
            this.Configuration = new Proton.Client.Configuration { BasePath = basePath };

            ExceptionFactory = Proton.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="CardsApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public CardsApi(Proton.Client.Configuration configuration = null)
        {
            if (configuration == null) // use the default one in Configuration
                this.Configuration = Proton.Client.Configuration.Default;
            else
                this.Configuration = configuration;

            ExceptionFactory = Proton.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public String GetBasePath()
        {
            return this.Configuration.ApiClient.RestClient.BaseUrl.ToString();
        }

        /// <summary>
        /// Sets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        [Obsolete("SetBasePath is deprecated, please do 'Configuration.ApiClient = new ApiClient(\"http://new-path\")' instead.")]
        public void SetBasePath(String basePath)
        {
            // do nothing
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public Proton.Client.Configuration Configuration {get; set;}

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public Proton.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Gets the default header.
        /// </summary>
        /// <returns>Dictionary of HTTP header</returns>
        [Obsolete("DefaultHeader is deprecated, please use Configuration.DefaultHeader instead.")]
        public IDictionary<String, String> DefaultHeader()
        {
            return new ReadOnlyDictionary<string, string>(this.Configuration.DefaultHeader);
        }

        /// <summary>
        /// Add default header.
        /// </summary>
        /// <param name="key">Header field name.</param>
        /// <param name="value">Header field value.</param>
        /// <returns></returns>
        [Obsolete("AddDefaultHeader is deprecated, please use Configuration.AddDefaultHeader instead.")]
        public void AddDefaultHeader(string key, string value)
        {
            this.Configuration.AddDefaultHeader(key, value);
        }

        /// <summary>
        /// Card Analysis Analyze cardholder activity over time
        /// </summary>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardAnalysisRequest">Request payload for Card Analysis</param>
        /// <returns>Dictionary&lt;string, Object&gt;</returns>
        public Dictionary<string, Object> CardAnalysis (CardAnalysisRequest cardAnalysisRequest)
        {
             ApiResponse<Dictionary<string, Object>> localVarResponse = CardAnalysisWithHttpInfo(cardAnalysisRequest);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Card Analysis Analyze cardholder activity over time
        /// </summary>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardAnalysisRequest">Request payload for Card Analysis</param>
        /// <returns>ApiResponse of Dictionary&lt;string, Object&gt;</returns>
        public ApiResponse< Dictionary<string, Object> > CardAnalysisWithHttpInfo (CardAnalysisRequest cardAnalysisRequest)
        {
            // verify the required parameter 'cardAnalysisRequest' is set
            if (cardAnalysisRequest == null)
                throw new ApiException(400, "Missing required parameter 'cardAnalysisRequest' when calling CardsApi->CardAnalysis");

            var localVarPath = "/card_analysis";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null) {
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);
                localVarHeaderParams.Add("Content-Type", localVarHttpHeaderAccept);
            }
            if (cardAnalysisRequest != null && cardAnalysisRequest.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(cardAnalysisRequest); // http body (model) parameter
            }
            else
            {
                localVarPostBody = cardAnalysisRequest; // byte array
            }

            // authentication (oauth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CardAnalysis", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Dictionary<string, Object>>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (Dictionary<string, Object>) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(Dictionary<string, Object>)));
        }

        /// <summary>
        /// Card Analysis Analyze cardholder activity over time
        /// </summary>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardAnalysisRequest">Request payload for Card Analysis</param>
        /// <returns>Task of Dictionary&lt;string, Object&gt;</returns>
        public async System.Threading.Tasks.Task<Dictionary<string, Object>> CardAnalysisAsync (CardAnalysisRequest cardAnalysisRequest)
        {
             ApiResponse<Dictionary<string, Object>> localVarResponse = await CardAnalysisAsyncWithHttpInfo(cardAnalysisRequest);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Card Analysis Analyze cardholder activity over time
        /// </summary>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardAnalysisRequest">Request payload for Card Analysis</param>
        /// <returns>Task of ApiResponse (Dictionary&lt;string, Object&gt;)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<Dictionary<string, Object>>> CardAnalysisAsyncWithHttpInfo (CardAnalysisRequest cardAnalysisRequest)
        {
            // verify the required parameter 'cardAnalysisRequest' is set
            if (cardAnalysisRequest == null)
                throw new ApiException(400, "Missing required parameter 'cardAnalysisRequest' when calling CardsApi->CardAnalysis");

            var localVarPath = "/card_analysis";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null) {
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);
                localVarHeaderParams.Add("Content-Type", localVarHttpHeaderAccept);
            }
            if (cardAnalysisRequest != null && cardAnalysisRequest.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(cardAnalysisRequest); // http body (model) parameter
            }
            else
            {
                localVarPostBody = cardAnalysisRequest; // byte array
            }

            // authentication (oauth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CardAnalysis", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Dictionary<string, Object>>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (Dictionary<string, Object>) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(Dictionary<string, Object>)));
        }

        /// <summary>
        /// Card Limit Check Evaluate card transaction history against spending controls
        /// </summary>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardLimitCheckRequest">Request payload for Card Limit Check</param>
        /// <returns>Dictionary&lt;string, Object&gt;</returns>
        public Dictionary<string, Object> CardLimitCheck (CardLimitCheckRequest cardLimitCheckRequest)
        {
             ApiResponse<Dictionary<string, Object>> localVarResponse = CardLimitCheckWithHttpInfo(cardLimitCheckRequest);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Card Limit Check Evaluate card transaction history against spending controls
        /// </summary>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardLimitCheckRequest">Request payload for Card Limit Check</param>
        /// <returns>ApiResponse of Dictionary&lt;string, Object&gt;</returns>
        public ApiResponse< Dictionary<string, Object> > CardLimitCheckWithHttpInfo (CardLimitCheckRequest cardLimitCheckRequest)
        {
            // verify the required parameter 'cardLimitCheckRequest' is set
            if (cardLimitCheckRequest == null)
                throw new ApiException(400, "Missing required parameter 'cardLimitCheckRequest' when calling CardsApi->CardLimitCheck");

            var localVarPath = "/card_limit_check";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null) {
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);
                localVarHeaderParams.Add("Content-Type", localVarHttpHeaderAccept);
            }
            if (cardLimitCheckRequest != null && cardLimitCheckRequest.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(cardLimitCheckRequest); // http body (model) parameter
            }
            else
            {
                localVarPostBody = cardLimitCheckRequest; // byte array
            }

            // authentication (oauth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CardLimitCheck", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Dictionary<string, Object>>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (Dictionary<string, Object>) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(Dictionary<string, Object>)));
        }

        /// <summary>
        /// Card Limit Check Evaluate card transaction history against spending controls
        /// </summary>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardLimitCheckRequest">Request payload for Card Limit Check</param>
        /// <returns>Task of Dictionary&lt;string, Object&gt;</returns>
        public async System.Threading.Tasks.Task<Dictionary<string, Object>> CardLimitCheckAsync (CardLimitCheckRequest cardLimitCheckRequest)
        {
             ApiResponse<Dictionary<string, Object>> localVarResponse = await CardLimitCheckAsyncWithHttpInfo(cardLimitCheckRequest);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Card Limit Check Evaluate card transaction history against spending controls
        /// </summary>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardLimitCheckRequest">Request payload for Card Limit Check</param>
        /// <returns>Task of ApiResponse (Dictionary&lt;string, Object&gt;)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<Dictionary<string, Object>>> CardLimitCheckAsyncWithHttpInfo (CardLimitCheckRequest cardLimitCheckRequest)
        {
            // verify the required parameter 'cardLimitCheckRequest' is set
            if (cardLimitCheckRequest == null)
                throw new ApiException(400, "Missing required parameter 'cardLimitCheckRequest' when calling CardsApi->CardLimitCheck");

            var localVarPath = "/card_limit_check";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null) {
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);
                localVarHeaderParams.Add("Content-Type", localVarHttpHeaderAccept);
            }
            if (cardLimitCheckRequest != null && cardLimitCheckRequest.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(cardLimitCheckRequest); // http body (model) parameter
            }
            else
            {
                localVarPostBody = cardLimitCheckRequest; // byte array
            }

            // authentication (oauth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CardLimitCheck", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Dictionary<string, Object>>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (Dictionary<string, Object>) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(Dictionary<string, Object>)));
        }

        /// <summary>
        /// Card Transaction Authorization Approve or reject a card transaction based on applicable conditions
        /// </summary>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardTransactionAuthorizationRequest">Request payload for Card Transaction Authorization</param>
        /// <returns>Dictionary&lt;string, Object&gt;</returns>
        public Dictionary<string, Object> CardTransactionAuthorization (CardTransactionAuthorizationRequest cardTransactionAuthorizationRequest)
        {
             ApiResponse<Dictionary<string, Object>> localVarResponse = CardTransactionAuthorizationWithHttpInfo(cardTransactionAuthorizationRequest);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Card Transaction Authorization Approve or reject a card transaction based on applicable conditions
        /// </summary>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardTransactionAuthorizationRequest">Request payload for Card Transaction Authorization</param>
        /// <returns>ApiResponse of Dictionary&lt;string, Object&gt;</returns>
        public ApiResponse< Dictionary<string, Object> > CardTransactionAuthorizationWithHttpInfo (CardTransactionAuthorizationRequest cardTransactionAuthorizationRequest)
        {
            // verify the required parameter 'cardTransactionAuthorizationRequest' is set
            if (cardTransactionAuthorizationRequest == null)
                throw new ApiException(400, "Missing required parameter 'cardTransactionAuthorizationRequest' when calling CardsApi->CardTransactionAuthorization");

            var localVarPath = "/card_authorization";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null) {
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);
                localVarHeaderParams.Add("Content-Type", localVarHttpHeaderAccept);
            }
            if (cardTransactionAuthorizationRequest != null && cardTransactionAuthorizationRequest.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(cardTransactionAuthorizationRequest); // http body (model) parameter
            }
            else
            {
                localVarPostBody = cardTransactionAuthorizationRequest; // byte array
            }

            // authentication (oauth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CardTransactionAuthorization", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Dictionary<string, Object>>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (Dictionary<string, Object>) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(Dictionary<string, Object>)));
        }

        /// <summary>
        /// Card Transaction Authorization Approve or reject a card transaction based on applicable conditions
        /// </summary>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardTransactionAuthorizationRequest">Request payload for Card Transaction Authorization</param>
        /// <returns>Task of Dictionary&lt;string, Object&gt;</returns>
        public async System.Threading.Tasks.Task<Dictionary<string, Object>> CardTransactionAuthorizationAsync (CardTransactionAuthorizationRequest cardTransactionAuthorizationRequest)
        {
             ApiResponse<Dictionary<string, Object>> localVarResponse = await CardTransactionAuthorizationAsyncWithHttpInfo(cardTransactionAuthorizationRequest);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Card Transaction Authorization Approve or reject a card transaction based on applicable conditions
        /// </summary>
        /// <exception cref="Proton.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cardTransactionAuthorizationRequest">Request payload for Card Transaction Authorization</param>
        /// <returns>Task of ApiResponse (Dictionary&lt;string, Object&gt;)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<Dictionary<string, Object>>> CardTransactionAuthorizationAsyncWithHttpInfo (CardTransactionAuthorizationRequest cardTransactionAuthorizationRequest)
        {
            // verify the required parameter 'cardTransactionAuthorizationRequest' is set
            if (cardTransactionAuthorizationRequest == null)
                throw new ApiException(400, "Missing required parameter 'cardTransactionAuthorizationRequest' when calling CardsApi->CardTransactionAuthorization");

            var localVarPath = "/card_authorization";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null) {
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);
                localVarHeaderParams.Add("Content-Type", localVarHttpHeaderAccept);
            }
            if (cardTransactionAuthorizationRequest != null && cardTransactionAuthorizationRequest.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(cardTransactionAuthorizationRequest); // http body (model) parameter
            }
            else
            {
                localVarPostBody = cardTransactionAuthorizationRequest; // byte array
            }

            // authentication (oauth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CardTransactionAuthorization", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<Dictionary<string, Object>>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (Dictionary<string, Object>) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(Dictionary<string, Object>)));
        }

    }
}
