/*
 * Hydrogen Admin API
 * The Hydrogen Admin API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.admin.api;

import com.google.gson.reflect.TypeToken;
import com.hydrogen.admin.*;
import com.hydrogen.admin.model.*;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.*;

public class AutoGenerateAppTokenApi {
    private ApiClient apiClient;
    private AppTokenConfig appTokenConfig;

    final private String template = "<tag app-token='##app_token##' ##attrib_map##></tag>";

    public AutoGenerateAppTokenApi(AppTokenConfig appTokenConfig) {
        this(Configuration.getDefaultApiClient());
        this.appTokenConfig = appTokenConfig;
    }

    private AutoGenerateAppTokenApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for getAppTokenUsingGET
     *
     * @param appName                 app_name (required)
     * @param progressListener        Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    private com.squareup.okhttp.Call getAppTokenUsingGETCall(List<String> appName, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/app_token";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (appName != null)
            localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("multi", "app_name", appName));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
                "*/*"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {

        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if (progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                            .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                            .build();
                }
            });
        }

        String[] localVarAuthNames = new String[]{"oauth2"};
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    private com.squareup.okhttp.Call getWhiteLabelUsingGETCall(final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/white_label/application?size=100000";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
                "*/*"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {

        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if (progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                            .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                            .build();
                }
            });
        }

        String[] localVarAuthNames = new String[]{"oauth2"};
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call getAppTokenUsingGETValidateBeforeCall(List<String> appName, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {

        // verify the required parameter 'appName' is set
        if (appName == null) {
            throw new ApiException("Missing the required parameter 'appName' when calling getAppTokenUsingGET(Async)");
        }


        com.squareup.okhttp.Call call = getAppTokenUsingGETCall(appName, progressListener, progressRequestListener);
        return call;

    }

    private com.squareup.okhttp.Call getWhiteLabelUsingGETValidateBeforeCall(final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        if (appTokenConfig.getAppNames().isEmpty()) {
            throw new ApiException("Missing the required parameter 'appName' when calling getAppTokenUsingGET(Async)");
        }
        com.squareup.okhttp.Call call = getWhiteLabelUsingGETCall(progressListener, progressRequestListener);
        return call;

    }

    /**
     * getAppToken
     *
     * @return List&lt;AppToken&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public List<Map<String, String>> getAppTokenUsingGET() throws ApiException {
        if(appTokenConfig.getBasePath() == null){
            throw new ApiException("Missing the required parameter 'basePath' when calling getAppTokenUsingGET");
        }
        apiClient.setBasePath(appTokenConfig.getBasePath());
        List<Map<String, String>> resp = getAppTokenUsingGETWithHttpInfo();
        return resp;
    }

    /**
     * getAppToken
     *
     * @return ApiResponse&lt;List&lt;AppToken&gt;&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    private List<Map<String, String>> getAppTokenUsingGETWithHttpInfo() throws ApiException {

        List<Map<String, String>> response = new ArrayList<>();

        AuthApiClient authApiClient = new AuthApiClient();
        String clientCredentialToken = authApiClient.createClientCredentialReturn(appTokenConfig.getClientId(), appTokenConfig.getClientSecret());
        apiClient.setAccessToken(clientCredentialToken);

        //get all whitelabel applications
        com.squareup.okhttp.Call whiteLabelCall = getWhiteLabelUsingGETValidateBeforeCall(null, null);
        Type whiteLabelReturnType = new TypeToken<WhiteLabelClient>() {
        }.getType();
        ApiResponse<WhiteLabelClient> execute = apiClient.execute(whiteLabelCall, whiteLabelReturnType);
        Map<String, String> authTypeMap = new HashMap<>();
        if (execute != null) {
            WhiteLabelClient data = execute.getData();
            List<WhiteLabel> content = data.getContent();
            for (WhiteLabel whiteLabel : content) {
                authTypeMap.put(whiteLabel.getName(), whiteLabel.getAuthType());
            }


            for (String app : appTokenConfig.getAppNames()) {

                String authType = authTypeMap.get(app);
                if (authType != null && authType.equalsIgnoreCase("client_credentials")) {
                    apiClient.setAccessToken(clientCredentialToken);
                } else if (authType != null && authType.equalsIgnoreCase("password_credentials")) {
                    apiClient.setAccessToken(appTokenConfig.getUserAccessToken());
                    if (appTokenConfig.getIsCredsPassed()) {
                        String passwordCredentialToken = authApiClient.createPasswordCredentialReturn(appTokenConfig.getClientId(), appTokenConfig.getClientSecret(), appTokenConfig.getUsername(), appTokenConfig.getPassword());
                        apiClient.setAccessToken(passwordCredentialToken);
                    }
                }

                com.squareup.okhttp.Call call = getAppTokenUsingGETValidateBeforeCall(Collections.singletonList(app), null, null);
                Type localVarReturnType = new TypeToken<List<AppToken>>() {
                }.getType();
                ApiResponse<List<AppToken>> appTokenExecute = apiClient.execute(call, localVarReturnType);
                if (appTokenExecute != null) {

                    List<AppToken> appTokens = appTokenExecute.getData();
                    String appTokenValue = appTokens != null && appTokens.size() > 0 ? appTokens.get(0).getAppToken() : "";
                    String tagValue = app.toLowerCase().replace("_", "-");
                    String fillTemplateValue = template.replace("tag", tagValue)
                            .replace("##app_token##", appTokenValue)
                            .replace("##attrib_map##", getAttribMapList(appTokenConfig) != null ? StringUtils.join(getAttribMapList(appTokenConfig), " ") : "");

                    Map<String, String> appMap = new HashMap<>();
                    appMap.put(app, appTokenValue);

                    if (appTokenConfig.getIsEmbed()) {
                        appMap.put(app, fillTemplateValue);
                    }
                    response.add(appMap);
                }
            }
        }
        return response;
    }

    private List<String> getAttribMapList(AppTokenConfig appTokenConfig) {

        List<TagAttributes> attributes = appTokenConfig.getAttributes();
        List<String> finalAttributes = new ArrayList<>();

        for (TagAttributes tagAttributes : attributes) {
            finalAttributes.add(tagAttributes.getName() + "='" + tagAttributes.getValue() + "'");
        }
        return finalAttributes;
    }

    /**
     * getAppToken (asynchronously)
     *
     * @param appName  app_name (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    private com.squareup.okhttp.Call getAppTokenUsingGETAsync(List<String> appName, final ApiCallback<List<AppToken>> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = getAppTokenUsingGETValidateBeforeCall(appName, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<List<AppToken>>() {
        }.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}