/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.api;

import com.hydrogen.nucleus.ApiCallback;
import com.hydrogen.nucleus.ApiClient;
import com.hydrogen.nucleus.ApiException;
import com.hydrogen.nucleus.ApiResponse;
import com.hydrogen.nucleus.Configuration;
import com.hydrogen.nucleus.Pair;
import com.hydrogen.nucleus.ProgressRequestBody;
import com.hydrogen.nucleus.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import com.hydrogen.nucleus.model.FinancialStatement;
import com.hydrogen.nucleus.model.PageFinancialStatement;
import java.util.UUID;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FinancialStatementApi {
    private ApiClient apiClient;

    public FinancialStatementApi() {
        this(Configuration.getDefaultApiClient());
    }

    public FinancialStatementApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for createFinancialStatementUsingPost
     * @param financialStatement financialStatement (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call createFinancialStatementUsingPostCall(FinancialStatement financialStatement, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = financialStatement;

        // create path and map variables
        String localVarPath = "/financial_statement";

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
            "application/json"
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
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
    private com.squareup.okhttp.Call createFinancialStatementUsingPostValidateBeforeCall(FinancialStatement financialStatement, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'financialStatement' is set
        if (financialStatement == null) {
            throw new ApiException("Missing the required parameter 'financialStatement' when calling createFinancialStatementUsingPost(Async)");
        }
        

        com.squareup.okhttp.Call call = createFinancialStatementUsingPostCall(financialStatement, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Create an financialStatement
     * Store stats pulled from financialStatement vendors.
     * @param financialStatement financialStatement (required)
     * @return FinancialStatement
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public FinancialStatement createFinancialStatementUsingPost(FinancialStatement financialStatement) throws ApiException {
        ApiResponse<FinancialStatement> resp = createFinancialStatementUsingPostWithHttpInfo(financialStatement);
        return resp.getData();
    }

    /**
     * Create an financialStatement
     * Store stats pulled from financialStatement vendors.
     * @param financialStatement financialStatement (required)
     * @return ApiResponse&lt;FinancialStatement&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<FinancialStatement> createFinancialStatementUsingPostWithHttpInfo(FinancialStatement financialStatement) throws ApiException {
        com.squareup.okhttp.Call call = createFinancialStatementUsingPostValidateBeforeCall(financialStatement, null, null);
        Type localVarReturnType = new TypeToken<FinancialStatement>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Create an financialStatement (asynchronously)
     * Store stats pulled from financialStatement vendors.
     * @param financialStatement financialStatement (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call createFinancialStatementUsingPostAsync(FinancialStatement financialStatement, final ApiCallback<FinancialStatement> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = createFinancialStatementUsingPostValidateBeforeCall(financialStatement, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<FinancialStatement>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for deleteFinancialStatementUsingDelete
     * @param financialStatementId UUID financialStatement_id (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call deleteFinancialStatementUsingDeleteCall(UUID financialStatementId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/financial_statement/{financial_statement_id}"
            .replaceAll("\\{" + "financial_statement_id" + "\\}", apiClient.escapeString(financialStatementId.toString()));

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
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "oauth2" };
        return apiClient.buildCall(localVarPath, "DELETE", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call deleteFinancialStatementUsingDeleteValidateBeforeCall(UUID financialStatementId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'financialStatementId' is set
        if (financialStatementId == null) {
            throw new ApiException("Missing the required parameter 'financialStatementId' when calling deleteFinancialStatementUsingDelete(Async)");
        }
        

        com.squareup.okhttp.Call call = deleteFinancialStatementUsingDeleteCall(financialStatementId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Delete an financialStatement
     * Permanently delete an financialStatement.
     * @param financialStatementId UUID financialStatement_id (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public void deleteFinancialStatementUsingDelete(UUID financialStatementId) throws ApiException {
        deleteFinancialStatementUsingDeleteWithHttpInfo(financialStatementId);
    }

    /**
     * Delete an financialStatement
     * Permanently delete an financialStatement.
     * @param financialStatementId UUID financialStatement_id (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<Void> deleteFinancialStatementUsingDeleteWithHttpInfo(UUID financialStatementId) throws ApiException {
        com.squareup.okhttp.Call call = deleteFinancialStatementUsingDeleteValidateBeforeCall(financialStatementId, null, null);
        return apiClient.execute(call);
    }

    /**
     * Delete an financialStatement (asynchronously)
     * Permanently delete an financialStatement.
     * @param financialStatementId UUID financialStatement_id (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call deleteFinancialStatementUsingDeleteAsync(UUID financialStatementId, final ApiCallback<Void> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = deleteFinancialStatementUsingDeleteValidateBeforeCall(financialStatementId, progressListener, progressRequestListener);
        apiClient.executeAsync(call, callback);
        return call;
    }
    /**
     * Build call for getFinancialStatementAllUsingGet
     * @param ascending ascending (optional, default to false)
     * @param currencyConversion currency_conversion (optional)
     * @param filter filter (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param size size (optional, default to 25)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getFinancialStatementAllUsingGetCall(Boolean ascending, String currencyConversion, String filter, String orderBy, Integer page, Integer size, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/financial_statement";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (ascending != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("ascending", ascending));
        if (currencyConversion != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("currency_conversion", currencyConversion));
        if (filter != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("filter", filter));
        if (orderBy != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("order_by", orderBy));
        if (page != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("page", page));
        if (size != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("size", size));

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
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
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
    private com.squareup.okhttp.Call getFinancialStatementAllUsingGetValidateBeforeCall(Boolean ascending, String currencyConversion, String filter, String orderBy, Integer page, Integer size, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        

        com.squareup.okhttp.Call call = getFinancialStatementAllUsingGetCall(ascending, currencyConversion, filter, orderBy, page, size, progressListener, progressRequestListener);
        return call;

    }

    /**
     * List all financialStatement
     * Get information for all financialStatement for all clients defined for your firm.
     * @param ascending ascending (optional, default to false)
     * @param currencyConversion currency_conversion (optional)
     * @param filter filter (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param size size (optional, default to 25)
     * @return PageFinancialStatement
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public PageFinancialStatement getFinancialStatementAllUsingGet(Boolean ascending, String currencyConversion, String filter, String orderBy, Integer page, Integer size) throws ApiException {
        ApiResponse<PageFinancialStatement> resp = getFinancialStatementAllUsingGetWithHttpInfo(ascending, currencyConversion, filter, orderBy, page, size);
        return resp.getData();
    }

    /**
     * List all financialStatement
     * Get information for all financialStatement for all clients defined for your firm.
     * @param ascending ascending (optional, default to false)
     * @param currencyConversion currency_conversion (optional)
     * @param filter filter (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param size size (optional, default to 25)
     * @return ApiResponse&lt;PageFinancialStatement&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<PageFinancialStatement> getFinancialStatementAllUsingGetWithHttpInfo(Boolean ascending, String currencyConversion, String filter, String orderBy, Integer page, Integer size) throws ApiException {
        com.squareup.okhttp.Call call = getFinancialStatementAllUsingGetValidateBeforeCall(ascending, currencyConversion, filter, orderBy, page, size, null, null);
        Type localVarReturnType = new TypeToken<PageFinancialStatement>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * List all financialStatement (asynchronously)
     * Get information for all financialStatement for all clients defined for your firm.
     * @param ascending ascending (optional, default to false)
     * @param currencyConversion currency_conversion (optional)
     * @param filter filter (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param size size (optional, default to 25)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getFinancialStatementAllUsingGetAsync(Boolean ascending, String currencyConversion, String filter, String orderBy, Integer page, Integer size, final ApiCallback<PageFinancialStatement> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = getFinancialStatementAllUsingGetValidateBeforeCall(ascending, currencyConversion, filter, orderBy, page, size, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<PageFinancialStatement>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for getFinancialStatementUsingGet
     * @param financialStatementId UUID financial_statement_id (required)
     * @param currencyConversion USD (optional)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getFinancialStatementUsingGetCall(UUID financialStatementId, String currencyConversion, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/financial_statement/{financial_statement_id}"
            .replaceAll("\\{" + "financial_statement_id" + "\\}", apiClient.escapeString(financialStatementId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (currencyConversion != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("currency_conversion", currencyConversion));

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
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
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
    private com.squareup.okhttp.Call getFinancialStatementUsingGetValidateBeforeCall(UUID financialStatementId, String currencyConversion, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'financialStatementId' is set
        if (financialStatementId == null) {
            throw new ApiException("Missing the required parameter 'financialStatementId' when calling getFinancialStatementUsingGet(Async)");
        }
        

        com.squareup.okhttp.Call call = getFinancialStatementUsingGetCall(financialStatementId, currencyConversion, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Retrieve an financialStatement
     * Retrieve the information for a specific financialStatement associated with a client.
     * @param financialStatementId UUID financial_statement_id (required)
     * @param currencyConversion USD (optional)
     * @return FinancialStatement
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public FinancialStatement getFinancialStatementUsingGet(UUID financialStatementId, String currencyConversion) throws ApiException {
        ApiResponse<FinancialStatement> resp = getFinancialStatementUsingGetWithHttpInfo(financialStatementId, currencyConversion);
        return resp.getData();
    }

    /**
     * Retrieve an financialStatement
     * Retrieve the information for a specific financialStatement associated with a client.
     * @param financialStatementId UUID financial_statement_id (required)
     * @param currencyConversion USD (optional)
     * @return ApiResponse&lt;FinancialStatement&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<FinancialStatement> getFinancialStatementUsingGetWithHttpInfo(UUID financialStatementId, String currencyConversion) throws ApiException {
        com.squareup.okhttp.Call call = getFinancialStatementUsingGetValidateBeforeCall(financialStatementId, currencyConversion, null, null);
        Type localVarReturnType = new TypeToken<FinancialStatement>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Retrieve an financialStatement (asynchronously)
     * Retrieve the information for a specific financialStatement associated with a client.
     * @param financialStatementId UUID financial_statement_id (required)
     * @param currencyConversion USD (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getFinancialStatementUsingGetAsync(UUID financialStatementId, String currencyConversion, final ApiCallback<FinancialStatement> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = getFinancialStatementUsingGetValidateBeforeCall(financialStatementId, currencyConversion, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<FinancialStatement>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for updateFinancialStatementUsingPut
     * @param financialStatement financialStatement (required)
     * @param financialStatementId UUID financialStatement_id (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call updateFinancialStatementUsingPutCall(Object financialStatement, UUID financialStatementId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = financialStatement;

        // create path and map variables
        String localVarPath = "/financial_statement/{financial_statement_id}"
            .replaceAll("\\{" + "financial_statement_id" + "\\}", apiClient.escapeString(financialStatementId.toString()));

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
            "application/json"
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "oauth2" };
        return apiClient.buildCall(localVarPath, "PUT", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call updateFinancialStatementUsingPutValidateBeforeCall(Object financialStatement, UUID financialStatementId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'financialStatement' is set
        if (financialStatement == null) {
            throw new ApiException("Missing the required parameter 'financialStatement' when calling updateFinancialStatementUsingPut(Async)");
        }
        
        // verify the required parameter 'financialStatementId' is set
        if (financialStatementId == null) {
            throw new ApiException("Missing the required parameter 'financialStatementId' when calling updateFinancialStatementUsingPut(Async)");
        }
        

        com.squareup.okhttp.Call call = updateFinancialStatementUsingPutCall(financialStatement, financialStatementId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Update an financialStatement
     * Update the information for an financialStatement.
     * @param financialStatement financialStatement (required)
     * @param financialStatementId UUID financialStatement_id (required)
     * @return FinancialStatement
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public FinancialStatement updateFinancialStatementUsingPut(Object financialStatement, UUID financialStatementId) throws ApiException {
        ApiResponse<FinancialStatement> resp = updateFinancialStatementUsingPutWithHttpInfo(financialStatement, financialStatementId);
        return resp.getData();
    }

    /**
     * Update an financialStatement
     * Update the information for an financialStatement.
     * @param financialStatement financialStatement (required)
     * @param financialStatementId UUID financialStatement_id (required)
     * @return ApiResponse&lt;FinancialStatement&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<FinancialStatement> updateFinancialStatementUsingPutWithHttpInfo(Object financialStatement, UUID financialStatementId) throws ApiException {
        com.squareup.okhttp.Call call = updateFinancialStatementUsingPutValidateBeforeCall(financialStatement, financialStatementId, null, null);
        Type localVarReturnType = new TypeToken<FinancialStatement>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Update an financialStatement (asynchronously)
     * Update the information for an financialStatement.
     * @param financialStatement financialStatement (required)
     * @param financialStatementId UUID financialStatement_id (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call updateFinancialStatementUsingPutAsync(Object financialStatement, UUID financialStatementId, final ApiCallback<FinancialStatement> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = updateFinancialStatementUsingPutValidateBeforeCall(financialStatement, financialStatementId, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<FinancialStatement>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}
