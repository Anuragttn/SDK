/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.integration.api;

import com.google.gson.reflect.TypeToken;
import com.hydrogen.integration.*;
import com.hydrogen.integration.model.Email;
import com.hydrogen.integration.model.SmtpResponseVO;
import com.hydrogen.integration.model.SmtpVO;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.*;

public class SmtpApi {
    private ApiClient apiClient;

    public SmtpApi() {
        this(Configuration.getDefaultApiClient());
    }

    public SmtpApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for getEmailDetails
     * @param emailId email_id (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getEmailDetailsCall(UUID emailId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/smtp/status/{email_id}"
            .replaceAll("\\{" + "email_id" + "\\}", apiClient.escapeString(emailId.toString()));

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

        if(progressListener != null) {
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

        String[] localVarAuthNames = new String[] { "oauth2" };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call getEmailDetailsValidateBeforeCall(UUID emailId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {

        // verify the required parameter 'emailId' is set
        if (emailId == null) {
            throw new ApiException("Missing the required parameter 'emailId' when calling getEmailDetails(Async)");
        }


        com.squareup.okhttp.Call call = getEmailDetailsCall(emailId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Fetch details for corresponding email_id
     * Fetch details for corresponding email_id
     * @param emailId email_id (required)
     * @return Email
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public Email getEmailDetails(UUID emailId) throws ApiException {
        ApiResponse<Email> resp = getEmailDetailsWithHttpInfo(emailId);
        return resp.getData();
    }

    /**
     * Fetch details for corresponding email_id
     * Fetch details for corresponding email_id
     * @param emailId email_id (required)
     * @return ApiResponse&lt;Email&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<Email> getEmailDetailsWithHttpInfo(UUID emailId) throws ApiException {
        com.squareup.okhttp.Call call = getEmailDetailsValidateBeforeCall(emailId, null, null);
        Type localVarReturnType = new TypeToken<Email>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Fetch details for corresponding email_id (asynchronously)
     * Fetch details for corresponding email_id
     * @param emailId email_id (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getEmailDetailsAsync(UUID emailId, final ApiCallback<Email> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = getEmailDetailsValidateBeforeCall(emailId, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<Email>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for sendMail1
     * @param smtpVO smtpVO (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call sendMail1Call(SmtpVO smtpVO, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = smtpVO;

        // create path and map variables
        String localVarPath = "/smtp";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
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

        String[] localVarAuthNames = new String[] { "oauth2" };
        return apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call sendMail1ValidateBeforeCall(SmtpVO smtpVO, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'smtpVO' is set
        if (smtpVO == null) {
            throw new ApiException("Missing the required parameter 'smtpVO' when calling sendMail1(Async)");
        }
        

        com.squareup.okhttp.Call call = sendMail1Call(smtpVO, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Send Mail to recipient
     * Send Mail to recipient
     * @param smtpVO smtpVO (required)
     * @return SmtpResponseVO
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public SmtpResponseVO sendMail1(SmtpVO smtpVO) throws ApiException {
        ApiResponse<SmtpResponseVO> resp = sendMail1WithHttpInfo(smtpVO);
        return resp.getData();
    }

    /**
     * Send Mail to recipient
     * Send Mail to recipient
     * @param smtpVO smtpVO (required)
     * @return ApiResponse&lt;SmtpResponseVO&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<SmtpResponseVO> sendMail1WithHttpInfo(SmtpVO smtpVO) throws ApiException {
        com.squareup.okhttp.Call call = sendMail1ValidateBeforeCall(smtpVO, null, null);
        Type localVarReturnType = new TypeToken<SmtpResponseVO>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Send Mail to recipient (asynchronously)
     * Send Mail to recipient
     * @param smtpVO smtpVO (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call sendMail1Async(SmtpVO smtpVO, final ApiCallback<SmtpResponseVO> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = sendMail1ValidateBeforeCall(smtpVO, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<SmtpResponseVO>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}
