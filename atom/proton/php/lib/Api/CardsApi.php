<?php
/**
 * CardsApi
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen\proton
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Hydrogen Proton API
 *
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.9.0
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.19
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace com\hydrogen\proton\Api;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use com\hydrogen\proton\ApiException;
use com\hydrogen\proton\Configuration;
use com\hydrogen\proton\HeaderSelector;
use com\hydrogen\proton\ObjectSerializer;

/**
 * CardsApi Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\proton
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class CardsApi
{
    /**
     * @var ClientInterface
     */
    protected $client;

    /**
     * @var Configuration
     */
    protected $config;

    /**
     * @var HeaderSelector
     */
    protected $headerSelector;

    /**
     * @param ClientInterface $client
     * @param Configuration   $config
     * @param HeaderSelector  $selector
     */
    public function __construct(
        ClientInterface $client = null,
        Configuration $config = null,
        HeaderSelector $selector = null
    ) {
        $this->client = $client ?: new Client();
        $this->config = $config ?: new Configuration();
        $this->headerSelector = $selector ?: new HeaderSelector();
    }

    /**
     * @return Configuration
     */
    public function getConfig()
    {
        return $this->config;
    }

    /**
     * Operation cardAnalysis
     *
     * Card Analysis
     *
     * @param  \com\hydrogen\proton\Model\CardAnalysisRequest $card_analysis_request Request payload for Card Analysis (required)
     *
     * @throws \com\hydrogen\proton\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return map[string,object]
     */
    public function cardAnalysis($card_analysis_request)
    {
        list($response) = $this->cardAnalysisWithHttpInfo($card_analysis_request);
        return $response;
    }

    /**
     * Operation cardAnalysisWithHttpInfo
     *
     * Card Analysis
     *
     * @param  \com\hydrogen\proton\Model\CardAnalysisRequest $card_analysis_request Request payload for Card Analysis (required)
     *
     * @throws \com\hydrogen\proton\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return array of map[string,object], HTTP status code, HTTP response headers (array of strings)
     */
    public function cardAnalysisWithHttpInfo($card_analysis_request)
    {
        $returnType = 'map[string,object]';
        $request = $this->cardAnalysisRequest($card_analysis_request);

        try {
            $options = $this->createHttpClientOption();
            try {
                $response = $this->client->send($request, $options);
            } catch (RequestException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    $e->getCode(),
                    $e->getResponse() ? $e->getResponse()->getHeaders() : null,
                    $e->getResponse() ? $e->getResponse()->getBody()->getContents() : null
                );
            }

            $statusCode = $response->getStatusCode();

            if ($statusCode < 200 || $statusCode > 299) {
                throw new ApiException(
                    sprintf(
                        '[%d] Error connecting to the API (%s)',
                        $statusCode,
                        $request->getUri()
                    ),
                    $statusCode,
                    $response->getHeaders(),
                    $response->getBody()
                );
            }

            $responseBody = $response->getBody();
            if ($returnType === '\SplFileObject') {
                $content = $responseBody; //stream goes to serializer
            } else {
                $content = $responseBody->getContents();
                if ($returnType !== 'string') {
                    $content = json_decode($content);
                }
            }

            return [
                ObjectSerializer::deserialize($content, $returnType, []),
                $response->getStatusCode(),
                $response->getHeaders()
            ];

        } catch (ApiException $e) {
            switch ($e->getCode()) {
                case 200:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        'map[string,object]',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation cardAnalysisAsync
     *
     * Card Analysis
     *
     * @param  \com\hydrogen\proton\Model\CardAnalysisRequest $card_analysis_request Request payload for Card Analysis (required)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function cardAnalysisAsync($card_analysis_request)
    {
        return $this->cardAnalysisAsyncWithHttpInfo($card_analysis_request)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation cardAnalysisAsyncWithHttpInfo
     *
     * Card Analysis
     *
     * @param  \com\hydrogen\proton\Model\CardAnalysisRequest $card_analysis_request Request payload for Card Analysis (required)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function cardAnalysisAsyncWithHttpInfo($card_analysis_request)
    {
        $returnType = 'map[string,object]';
        $request = $this->cardAnalysisRequest($card_analysis_request);

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) use ($returnType) {
                    $responseBody = $response->getBody();
                    if ($returnType === '\SplFileObject') {
                        $content = $responseBody; //stream goes to serializer
                    } else {
                        $content = $responseBody->getContents();
                        if ($returnType !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, $returnType, []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                },
                function ($exception) {
                    $response = $exception->getResponse();
                    $statusCode = $response->getStatusCode();
                    throw new ApiException(
                        sprintf(
                            '[%d] Error connecting to the API (%s)',
                            $statusCode,
                            $exception->getRequest()->getUri()
                        ),
                        $statusCode,
                        $response->getHeaders(),
                        $response->getBody()
                    );
                }
            );
    }

    /**
     * Create request for operation 'cardAnalysis'
     *
     * @param  \com\hydrogen\proton\Model\CardAnalysisRequest $card_analysis_request Request payload for Card Analysis (required)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    protected function cardAnalysisRequest($card_analysis_request)
    {
        // verify the required parameter 'card_analysis_request' is set
        if ($card_analysis_request === null || (is_array($card_analysis_request) && count($card_analysis_request) === 0)) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $card_analysis_request when calling cardAnalysis'
            );
        }

        $resourcePath = '/card_analysis';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;



        // body params
        $_tempBody = null;
        if (isset($card_analysis_request)) {
            $_tempBody = $card_analysis_request;
        }

        if ($multipart) {
            $headers = $this->headerSelector->selectHeadersForMultipart(
                ['application/json']
            );
        } else {
            $headers = $this->headerSelector->selectHeaders(
                ['application/json'],
                ['application/json']
            );
        }

        // for model (json/xml)
        if (isset($_tempBody)) {
            // $_tempBody is the method argument, if present
            $httpBody = $_tempBody;
            
            if($headers['Content-Type'] === 'application/json') {
                // \stdClass has no __toString(), so we should encode it manually
                if ($httpBody instanceof \stdClass) {
                    $httpBody = \GuzzleHttp\json_encode($httpBody);
                }
                // array has no __toString(), so we should encode it manually
                if(is_array($httpBody)) {
                    $httpBody = \GuzzleHttp\json_encode(ObjectSerializer::sanitizeForSerialization($httpBody));
                }
            }
        } elseif (count($formParams) > 0) {
            if ($multipart) {
                $multipartContents = [];
                foreach ($formParams as $formParamName => $formParamValue) {
                    $multipartContents[] = [
                        'name' => $formParamName,
                        'contents' => $formParamValue
                    ];
                }
                // for HTTP post (form)
                $httpBody = new MultipartStream($multipartContents);

            } elseif ($headers['Content-Type'] === 'application/json') {
                $httpBody = \GuzzleHttp\json_encode($formParams);

            } else {
                // for HTTP post (form)
                $httpBody = \GuzzleHttp\Psr7\build_query($formParams);
            }
        }

        // this endpoint requires OAuth (access token)
        if ($this->config->getAccessToken() !== null) {
            $headers['Authorization'] = 'Bearer ' . $this->config->getAccessToken();
        }

        $defaultHeaders = [];
        if ($this->config->getUserAgent()) {
            $defaultHeaders['User-Agent'] = $this->config->getUserAgent();
        }

        $headers = array_merge(
            $defaultHeaders,
            $headerParams,
            $headers
        );

        $query = \GuzzleHttp\Psr7\build_query($queryParams);
        return new Request(
            'POST',
            $this->config->getHost() . $resourcePath . ($query ? "?{$query}" : ''),
            $headers,
            $httpBody
        );
    }

    /**
     * Operation cardLimitCheck
     *
     * Card Limit Check
     *
     * @param  \com\hydrogen\proton\Model\CardLimitCheckRequest $card_limit_check_request Request payload for Card Limit Check (required)
     *
     * @throws \com\hydrogen\proton\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return map[string,object]
     */
    public function cardLimitCheck($card_limit_check_request)
    {
        list($response) = $this->cardLimitCheckWithHttpInfo($card_limit_check_request);
        return $response;
    }

    /**
     * Operation cardLimitCheckWithHttpInfo
     *
     * Card Limit Check
     *
     * @param  \com\hydrogen\proton\Model\CardLimitCheckRequest $card_limit_check_request Request payload for Card Limit Check (required)
     *
     * @throws \com\hydrogen\proton\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return array of map[string,object], HTTP status code, HTTP response headers (array of strings)
     */
    public function cardLimitCheckWithHttpInfo($card_limit_check_request)
    {
        $returnType = 'map[string,object]';
        $request = $this->cardLimitCheckRequest($card_limit_check_request);

        try {
            $options = $this->createHttpClientOption();
            try {
                $response = $this->client->send($request, $options);
            } catch (RequestException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    $e->getCode(),
                    $e->getResponse() ? $e->getResponse()->getHeaders() : null,
                    $e->getResponse() ? $e->getResponse()->getBody()->getContents() : null
                );
            }

            $statusCode = $response->getStatusCode();

            if ($statusCode < 200 || $statusCode > 299) {
                throw new ApiException(
                    sprintf(
                        '[%d] Error connecting to the API (%s)',
                        $statusCode,
                        $request->getUri()
                    ),
                    $statusCode,
                    $response->getHeaders(),
                    $response->getBody()
                );
            }

            $responseBody = $response->getBody();
            if ($returnType === '\SplFileObject') {
                $content = $responseBody; //stream goes to serializer
            } else {
                $content = $responseBody->getContents();
                if ($returnType !== 'string') {
                    $content = json_decode($content);
                }
            }

            return [
                ObjectSerializer::deserialize($content, $returnType, []),
                $response->getStatusCode(),
                $response->getHeaders()
            ];

        } catch (ApiException $e) {
            switch ($e->getCode()) {
                case 200:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        'map[string,object]',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation cardLimitCheckAsync
     *
     * Card Limit Check
     *
     * @param  \com\hydrogen\proton\Model\CardLimitCheckRequest $card_limit_check_request Request payload for Card Limit Check (required)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function cardLimitCheckAsync($card_limit_check_request)
    {
        return $this->cardLimitCheckAsyncWithHttpInfo($card_limit_check_request)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation cardLimitCheckAsyncWithHttpInfo
     *
     * Card Limit Check
     *
     * @param  \com\hydrogen\proton\Model\CardLimitCheckRequest $card_limit_check_request Request payload for Card Limit Check (required)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function cardLimitCheckAsyncWithHttpInfo($card_limit_check_request)
    {
        $returnType = 'map[string,object]';
        $request = $this->cardLimitCheckRequest($card_limit_check_request);

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) use ($returnType) {
                    $responseBody = $response->getBody();
                    if ($returnType === '\SplFileObject') {
                        $content = $responseBody; //stream goes to serializer
                    } else {
                        $content = $responseBody->getContents();
                        if ($returnType !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, $returnType, []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                },
                function ($exception) {
                    $response = $exception->getResponse();
                    $statusCode = $response->getStatusCode();
                    throw new ApiException(
                        sprintf(
                            '[%d] Error connecting to the API (%s)',
                            $statusCode,
                            $exception->getRequest()->getUri()
                        ),
                        $statusCode,
                        $response->getHeaders(),
                        $response->getBody()
                    );
                }
            );
    }

    /**
     * Create request for operation 'cardLimitCheck'
     *
     * @param  \com\hydrogen\proton\Model\CardLimitCheckRequest $card_limit_check_request Request payload for Card Limit Check (required)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    protected function cardLimitCheckRequest($card_limit_check_request)
    {
        // verify the required parameter 'card_limit_check_request' is set
        if ($card_limit_check_request === null || (is_array($card_limit_check_request) && count($card_limit_check_request) === 0)) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $card_limit_check_request when calling cardLimitCheck'
            );
        }

        $resourcePath = '/card_limit_check';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;



        // body params
        $_tempBody = null;
        if (isset($card_limit_check_request)) {
            $_tempBody = $card_limit_check_request;
        }

        if ($multipart) {
            $headers = $this->headerSelector->selectHeadersForMultipart(
                ['application/json']
            );
        } else {
            $headers = $this->headerSelector->selectHeaders(
                ['application/json'],
                ['application/json']
            );
        }

        // for model (json/xml)
        if (isset($_tempBody)) {
            // $_tempBody is the method argument, if present
            $httpBody = $_tempBody;
            
            if($headers['Content-Type'] === 'application/json') {
                // \stdClass has no __toString(), so we should encode it manually
                if ($httpBody instanceof \stdClass) {
                    $httpBody = \GuzzleHttp\json_encode($httpBody);
                }
                // array has no __toString(), so we should encode it manually
                if(is_array($httpBody)) {
                    $httpBody = \GuzzleHttp\json_encode(ObjectSerializer::sanitizeForSerialization($httpBody));
                }
            }
        } elseif (count($formParams) > 0) {
            if ($multipart) {
                $multipartContents = [];
                foreach ($formParams as $formParamName => $formParamValue) {
                    $multipartContents[] = [
                        'name' => $formParamName,
                        'contents' => $formParamValue
                    ];
                }
                // for HTTP post (form)
                $httpBody = new MultipartStream($multipartContents);

            } elseif ($headers['Content-Type'] === 'application/json') {
                $httpBody = \GuzzleHttp\json_encode($formParams);

            } else {
                // for HTTP post (form)
                $httpBody = \GuzzleHttp\Psr7\build_query($formParams);
            }
        }

        // this endpoint requires OAuth (access token)
        if ($this->config->getAccessToken() !== null) {
            $headers['Authorization'] = 'Bearer ' . $this->config->getAccessToken();
        }

        $defaultHeaders = [];
        if ($this->config->getUserAgent()) {
            $defaultHeaders['User-Agent'] = $this->config->getUserAgent();
        }

        $headers = array_merge(
            $defaultHeaders,
            $headerParams,
            $headers
        );

        $query = \GuzzleHttp\Psr7\build_query($queryParams);
        return new Request(
            'POST',
            $this->config->getHost() . $resourcePath . ($query ? "?{$query}" : ''),
            $headers,
            $httpBody
        );
    }

    /**
     * Operation cardTransactionAuthorization
     *
     * Card Transaction Authorization
     *
     * @param  \com\hydrogen\proton\Model\CardTransactionAuthorizationRequest $card_transaction_authorization_request Request payload for Card Transaction Authorization (required)
     *
     * @throws \com\hydrogen\proton\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return map[string,object]
     */
    public function cardTransactionAuthorization($card_transaction_authorization_request)
    {
        list($response) = $this->cardTransactionAuthorizationWithHttpInfo($card_transaction_authorization_request);
        return $response;
    }

    /**
     * Operation cardTransactionAuthorizationWithHttpInfo
     *
     * Card Transaction Authorization
     *
     * @param  \com\hydrogen\proton\Model\CardTransactionAuthorizationRequest $card_transaction_authorization_request Request payload for Card Transaction Authorization (required)
     *
     * @throws \com\hydrogen\proton\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return array of map[string,object], HTTP status code, HTTP response headers (array of strings)
     */
    public function cardTransactionAuthorizationWithHttpInfo($card_transaction_authorization_request)
    {
        $returnType = 'map[string,object]';
        $request = $this->cardTransactionAuthorizationRequest($card_transaction_authorization_request);

        try {
            $options = $this->createHttpClientOption();
            try {
                $response = $this->client->send($request, $options);
            } catch (RequestException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    $e->getCode(),
                    $e->getResponse() ? $e->getResponse()->getHeaders() : null,
                    $e->getResponse() ? $e->getResponse()->getBody()->getContents() : null
                );
            }

            $statusCode = $response->getStatusCode();

            if ($statusCode < 200 || $statusCode > 299) {
                throw new ApiException(
                    sprintf(
                        '[%d] Error connecting to the API (%s)',
                        $statusCode,
                        $request->getUri()
                    ),
                    $statusCode,
                    $response->getHeaders(),
                    $response->getBody()
                );
            }

            $responseBody = $response->getBody();
            if ($returnType === '\SplFileObject') {
                $content = $responseBody; //stream goes to serializer
            } else {
                $content = $responseBody->getContents();
                if ($returnType !== 'string') {
                    $content = json_decode($content);
                }
            }

            return [
                ObjectSerializer::deserialize($content, $returnType, []),
                $response->getStatusCode(),
                $response->getHeaders()
            ];

        } catch (ApiException $e) {
            switch ($e->getCode()) {
                case 200:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        'map[string,object]',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation cardTransactionAuthorizationAsync
     *
     * Card Transaction Authorization
     *
     * @param  \com\hydrogen\proton\Model\CardTransactionAuthorizationRequest $card_transaction_authorization_request Request payload for Card Transaction Authorization (required)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function cardTransactionAuthorizationAsync($card_transaction_authorization_request)
    {
        return $this->cardTransactionAuthorizationAsyncWithHttpInfo($card_transaction_authorization_request)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation cardTransactionAuthorizationAsyncWithHttpInfo
     *
     * Card Transaction Authorization
     *
     * @param  \com\hydrogen\proton\Model\CardTransactionAuthorizationRequest $card_transaction_authorization_request Request payload for Card Transaction Authorization (required)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function cardTransactionAuthorizationAsyncWithHttpInfo($card_transaction_authorization_request)
    {
        $returnType = 'map[string,object]';
        $request = $this->cardTransactionAuthorizationRequest($card_transaction_authorization_request);

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) use ($returnType) {
                    $responseBody = $response->getBody();
                    if ($returnType === '\SplFileObject') {
                        $content = $responseBody; //stream goes to serializer
                    } else {
                        $content = $responseBody->getContents();
                        if ($returnType !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, $returnType, []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                },
                function ($exception) {
                    $response = $exception->getResponse();
                    $statusCode = $response->getStatusCode();
                    throw new ApiException(
                        sprintf(
                            '[%d] Error connecting to the API (%s)',
                            $statusCode,
                            $exception->getRequest()->getUri()
                        ),
                        $statusCode,
                        $response->getHeaders(),
                        $response->getBody()
                    );
                }
            );
    }

    /**
     * Create request for operation 'cardTransactionAuthorization'
     *
     * @param  \com\hydrogen\proton\Model\CardTransactionAuthorizationRequest $card_transaction_authorization_request Request payload for Card Transaction Authorization (required)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    protected function cardTransactionAuthorizationRequest($card_transaction_authorization_request)
    {
        // verify the required parameter 'card_transaction_authorization_request' is set
        if ($card_transaction_authorization_request === null || (is_array($card_transaction_authorization_request) && count($card_transaction_authorization_request) === 0)) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $card_transaction_authorization_request when calling cardTransactionAuthorization'
            );
        }

        $resourcePath = '/card_authorization';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;



        // body params
        $_tempBody = null;
        if (isset($card_transaction_authorization_request)) {
            $_tempBody = $card_transaction_authorization_request;
        }

        if ($multipart) {
            $headers = $this->headerSelector->selectHeadersForMultipart(
                ['application/json']
            );
        } else {
            $headers = $this->headerSelector->selectHeaders(
                ['application/json'],
                ['application/json']
            );
        }

        // for model (json/xml)
        if (isset($_tempBody)) {
            // $_tempBody is the method argument, if present
            $httpBody = $_tempBody;
            
            if($headers['Content-Type'] === 'application/json') {
                // \stdClass has no __toString(), so we should encode it manually
                if ($httpBody instanceof \stdClass) {
                    $httpBody = \GuzzleHttp\json_encode($httpBody);
                }
                // array has no __toString(), so we should encode it manually
                if(is_array($httpBody)) {
                    $httpBody = \GuzzleHttp\json_encode(ObjectSerializer::sanitizeForSerialization($httpBody));
                }
            }
        } elseif (count($formParams) > 0) {
            if ($multipart) {
                $multipartContents = [];
                foreach ($formParams as $formParamName => $formParamValue) {
                    $multipartContents[] = [
                        'name' => $formParamName,
                        'contents' => $formParamValue
                    ];
                }
                // for HTTP post (form)
                $httpBody = new MultipartStream($multipartContents);

            } elseif ($headers['Content-Type'] === 'application/json') {
                $httpBody = \GuzzleHttp\json_encode($formParams);

            } else {
                // for HTTP post (form)
                $httpBody = \GuzzleHttp\Psr7\build_query($formParams);
            }
        }

        // this endpoint requires OAuth (access token)
        if ($this->config->getAccessToken() !== null) {
            $headers['Authorization'] = 'Bearer ' . $this->config->getAccessToken();
        }

        $defaultHeaders = [];
        if ($this->config->getUserAgent()) {
            $defaultHeaders['User-Agent'] = $this->config->getUserAgent();
        }

        $headers = array_merge(
            $defaultHeaders,
            $headerParams,
            $headers
        );

        $query = \GuzzleHttp\Psr7\build_query($queryParams);
        return new Request(
            'POST',
            $this->config->getHost() . $resourcePath . ($query ? "?{$query}" : ''),
            $headers,
            $httpBody
        );
    }

    /**
     * Create http client option
     *
     * @throws \RuntimeException on file opening failure
     * @return array of http client options
     */
    protected function createHttpClientOption()
    {
        $options = [];
        if ($this->config->getDebug()) {
            $options[RequestOptions::DEBUG] = fopen($this->config->getDebugFile(), 'a');
            if (!$options[RequestOptions::DEBUG]) {
                throw new \RuntimeException('Failed to open the debug file: ' . $this->config->getDebugFile());
            }
        }

        return $options;
    }
}