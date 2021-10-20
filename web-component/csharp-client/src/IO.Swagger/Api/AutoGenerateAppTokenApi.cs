/* 
 * Hydrogen Admin API
 *
 * The Hydrogen Admin API
 *
 * OpenAPI spec version: 1.4.0
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using RestSharp;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace IO.Swagger.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IAutoGenerateAppTokenApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// getAppToken
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
         List<Dictionary<String, String>> GetAppTokenUsingGET ();

        // /// <summary>
        // /// getAppToken
        // /// </summary>
        // /// <remarks>
        // /// 
        // /// </remarks>
        // /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        // /// <param name="appName">app_name</param>
        // /// <param name="tenantName">tenant-name (optional)</param>
        // /// <returns>ApiResponse of List&lt;AppToken&gt;</returns>
        // ApiResponse<List<AppToken>> GetAppTokenUsingGETWithHttpInfo (List<string> appName, string tenantName = null);
         #endregion Synchronous Operations
        // #region Asynchronous Operations
        // /// <summary>
        // /// getAppToken
        // /// </summary>
        // /// <remarks>
        // /// 
        // /// </remarks>
        // /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        // /// <param name="appName">app_name</param>
        // /// <param name="tenantName">tenant-name (optional)</param>
        // /// <returns>Task of List&lt;AppToken&gt;</returns>
        // //System.Threading.Tasks.Task<List<AppToken>> GetAppTokenUsingGETAsync (List<string> appName, string tenantName = null);

        // /// <summary>
        // /// getAppToken
        // /// </summary>
        // /// <remarks>
        // /// 
        // /// </remarks>
        // /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        // /// <param name="appName">app_name</param>
        // /// <param name="tenantName">tenant-name (optional)</param>
        // /// <returns>Task of ApiResponse (List&lt;AppToken&gt;)</returns>
        // System.Threading.Tasks.Task<ApiResponse<List<AppToken>>> GetAppTokenUsingGETAsyncWithHttpInfo ();
        //#endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class AutoGenerateAppTokenApi : IAutoGenerateAppTokenApi
    {
        private IO.Swagger.Client.ExceptionFactory _exceptionFactory = (name, response) => null;
        private AppTokenConfig appTokenConfig;
        private String template = "<tag app-token='##app_token##' ##attrib_map##></tag>";
        /// <summary>
        /// Initializes a new instance of the <see cref="AutoGenerateAppTokenApi"/> class.
        /// </summary>
        /// <returns></returns>
        // public AutoGenerateAppTokenApi(String basePath)
        // {
        //     this.Configuration = new IO.Swagger.Client.Configuration { BasePath = basePath };
        //     ExceptionFactory = IO.Swagger.Client.Configuration.DefaultExceptionFactory;
        // }

        public AutoGenerateAppTokenApi(AppTokenConfig appTokenConfig)
        {
            this.Configuration = new IO.Swagger.Client.Configuration { BasePath = appTokenConfig.basePath };
            this.appTokenConfig = appTokenConfig;
            ExceptionFactory = IO.Swagger.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="AutoGenerateAppTokenApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public AutoGenerateAppTokenApi(IO.Swagger.Client.Configuration configuration = null)
        {
            if (configuration == null) // use the default one in Configuration
                this.Configuration = IO.Swagger.Client.Configuration.Default;
            else
                this.Configuration = configuration;

            ExceptionFactory = IO.Swagger.Client.Configuration.DefaultExceptionFactory;
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
        public IO.Swagger.Client.Configuration Configuration {get; set;}

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public IO.Swagger.Client.ExceptionFactory ExceptionFactory
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
        /// getAppToken 
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        public List<Dictionary<String, String>> GetAppTokenUsingGET ()
        {
             List<Dictionary<String, String>> localVarResponse = GetAppTokenUsingGETAsyncWithHttpInfo();
             return localVarResponse;
        }

        /// <summary>
        /// getAppToken 
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="appName">app_name</param>
        /// <param name="tenantName">tenant-name (optional)</param>
        /// <returns>ApiResponse of List&lt;AppToken&gt;</returns>
        public ApiResponse<List<AppToken> > GetAppTokenUsingGETWithHttpInfo (List<string> appName, string tenantName = null)
        {
            // verify the required parameter 'appName' is set
            if (appName == null)
                throw new ApiException(400, "Missing required parameter 'appName' when calling AppTokenApi->GetAppTokenUsingGET");

            var localVarPath = "/app_token";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "*/*"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (appName != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("multi", "app_name", appName)); // query parameter
            if (tenantName != null) localVarHeaderParams.Add("tenant-name", this.Configuration.ApiClient.ParameterToString(tenantName)); // header parameter

            // authentication (oauth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("GetAppTokenUsingGET", localVarResponse);
                if (exception != null) throw exception;
            }
            return new ApiResponse<List<AppToken>>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (List<AppToken>) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(List<AppToken>)));
        }

        
        /// <summary>
        /// getAppToken 
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="appName">app_name</param>
        /// <param name="tenantName">tenant-name (optional)</param>
        /// <returns>Task of ApiResponse (List&lt;AppToken&gt;)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<List<AppToken>>> GetAppTokenUsingGETAsyncWithHttpInfo (List<string> appName, string tenantName = null)
        {
            // verify the required parameter 'appName' is set
            if (appName == null)
                throw new ApiException(400, "Missing required parameter 'appName' when calling AppTokenApi->GetAppTokenUsingGET");

            var localVarPath = "/app_token";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "*/*"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (appName != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("multi", "app_name", appName)); // query parameter
            if (tenantName != null) localVarHeaderParams.Add("tenant-name", this.Configuration.ApiClient.ParameterToString(tenantName)); // header parameter

            // authentication (oauth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("GetAppTokenUsingGET", localVarResponse);
                if (exception != null) throw exception;
            }
            
            return new ApiResponse<List<AppToken>>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (List<AppToken>) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(List<AppToken>)));
        }

         public List<Dictionary<String, String>> GetAppTokenUsingGETAsyncWithHttpInfo ()
        {
            List<Dictionary<String, String>> response = new List<Dictionary<String, String>>();

            AuthApiClient authApiClient = new AuthApiClient(this.Configuration);
            String clientCredentialToken = authApiClient.createClientCredential(appTokenConfig.clientId, appTokenConfig.clientSecret);
            // apiClient.setAccessToken(clientCredentialToken);
            this.Configuration.AccessToken = clientCredentialToken;

                foreach (AppConfig app in appTokenConfig.appNames) {
                    if (app.authType != null && app.authType.ToLower()=="client_credentials") {
                        // apiClient.setAccessToken(clientCredentialToken);
                        this.Configuration.AccessToken = clientCredentialToken;
                    } else if (app.authType != null && app.authType.ToLower() == "password_credentials") {
                        // apiClient.setAccessToken(appTokenConfig.getUserAccessToken());
                        this.Configuration.AccessToken = appTokenConfig.userAccessToken;
                        if (appTokenConfig.isCredsPassed) {
                            String passwordCredentialToken = authApiClient.createPasswordCredential(appTokenConfig.clientId, appTokenConfig.clientSecret, appTokenConfig.username, appTokenConfig.password);
                            // apiClient.setAccessToken(passwordCredentialToken);
                            this.Configuration.AccessToken = passwordCredentialToken;
                        }
                    }

                    ApiResponse<List<AppToken>> appTokenExecute = GetAppTokenUsingGETWithHttpInfo(new List<String> {app.appName}, null);
                    // Type localVarReturnType = new TypeToken<List<AppToken>>() {
                    // }.getType();
                    // ApiResponse<List<AppToken>> appTokenExecute = apiClient.execute(call, localVarReturnType);
                    if (appTokenExecute != null) {

                        List<AppToken> appTokens = appTokenExecute.Data;
                        String appTokenValue = appTokens != null && appTokens.Count > 0 ? appTokens[0]._AppToken : "";
                        String tagValue = app.appName.ToLower().Replace("_", "-");
                        String fillTemplateValue = template.Replace("tag", tagValue)
                                .Replace("##app_token##", appTokenValue)
                                .Replace("##attrib_map##", getAttribMapList(appTokenConfig) != null ? string.Join(" ", getAttribMapList(appTokenConfig)) : "");

                        Dictionary<String, String> appMap = new Dictionary<String, String>();
                        

                        if (appTokenConfig.isEmbed) {
                            appMap.Add(app.appName, fillTemplateValue);
                        }else{
                            appMap.Add(app.appName, appTokenValue);
                        }
                        response.Add(appMap);
                    }
                }
            return response;
        }
        private List<String> getAttribMapList(AppTokenConfig appTokenConfig) {
        List<TagAttributes> attributes = appTokenConfig.attributes;
        List<String> finalAttributes = new List<String>();

        foreach (TagAttributes tagAttributes in attributes?? new List<TagAttributes>()) {
            finalAttributes.Add(tagAttributes.name + "='" + tagAttributes.value + "'");
        }
        return finalAttributes;
    }

    }
}
