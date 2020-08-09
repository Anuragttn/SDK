<?php
/**
 * RiskAllocationRequest
 *
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
 * OpenAPI spec version: 1.7.18
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.14
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace com\hydrogen\proton\Model;

use \ArrayAccess;
use \com\hydrogen\proton\ObjectSerializer;

/**
 * RiskAllocationRequest Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\proton
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class RiskAllocationRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'riskAllocationRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'allocations' => 'string[]',
        'use_proxy_data' => 'bool',
        'client_id' => 'string',
        'risk_score' => 'float',
        'opt_config' => 'object',
        'market_data_source' => 'string',
        'allocation_method' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'allocations' => 'uuid',
        'use_proxy_data' => null,
        'client_id' => 'uuid',
        'risk_score' => null,
        'opt_config' => null,
        'market_data_source' => null,
        'allocation_method' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'allocations' => 'allocations',
        'use_proxy_data' => 'use_proxy_data',
        'client_id' => 'client_id',
        'risk_score' => 'risk_score',
        'opt_config' => 'opt_config',
        'market_data_source' => 'market_data_source',
        'allocation_method' => 'allocation_method'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'allocations' => 'setAllocations',
        'use_proxy_data' => 'setUseProxyData',
        'client_id' => 'setClientId',
        'risk_score' => 'setRiskScore',
        'opt_config' => 'setOptConfig',
        'market_data_source' => 'setMarketDataSource',
        'allocation_method' => 'setAllocationMethod'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'allocations' => 'getAllocations',
        'use_proxy_data' => 'getUseProxyData',
        'client_id' => 'getClientId',
        'risk_score' => 'getRiskScore',
        'opt_config' => 'getOptConfig',
        'market_data_source' => 'getMarketDataSource',
        'allocation_method' => 'getAllocationMethod'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    const MARKET_DATA_SOURCE_NUCLEUS = 'nucleus';
    const MARKET_DATA_SOURCE_INTEGRATION = 'integration';
    const ALLOCATION_METHOD_SELECT = 'select';
    const ALLOCATION_METHOD_CREATE = 'create';
    

    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getMarketDataSourceAllowableValues()
    {
        return [
            self::MARKET_DATA_SOURCE_NUCLEUS,
            self::MARKET_DATA_SOURCE_INTEGRATION,
        ];
    }
    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getAllocationMethodAllowableValues()
    {
        return [
            self::ALLOCATION_METHOD_SELECT,
            self::ALLOCATION_METHOD_CREATE,
        ];
    }
    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['allocations'] = isset($data['allocations']) ? $data['allocations'] : null;
        $this->container['use_proxy_data'] = isset($data['use_proxy_data']) ? $data['use_proxy_data'] : false;
        $this->container['client_id'] = isset($data['client_id']) ? $data['client_id'] : null;
        $this->container['risk_score'] = isset($data['risk_score']) ? $data['risk_score'] : null;
        $this->container['opt_config'] = isset($data['opt_config']) ? $data['opt_config'] : null;
        $this->container['market_data_source'] = isset($data['market_data_source']) ? $data['market_data_source'] : 'nucleus';
        $this->container['allocation_method'] = isset($data['allocation_method']) ? $data['allocation_method'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['risk_score']) && ($this->container['risk_score'] > 100)) {
            $invalidProperties[] = "invalid value for 'risk_score', must be smaller than or equal to 100.";
        }

        if (!is_null($this->container['risk_score']) && ($this->container['risk_score'] < 0)) {
            $invalidProperties[] = "invalid value for 'risk_score', must be bigger than or equal to 0.";
        }

        $allowedValues = $this->getMarketDataSourceAllowableValues();
        if (!is_null($this->container['market_data_source'])
            && !in_array(strtolower($this->container['market_data_source']), $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'market_data_source', must be one of '%s'",
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['allocation_method'] === null) {
            $invalidProperties[] = "'allocation_method' can't be null";
        }
        $allowedValues = $this->getAllocationMethodAllowableValues();
        if (!is_null($this->container['allocation_method'])
            && !in_array(strtolower($this->container['allocation_method']), $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'allocation_method', must be one of '%s'",
                implode("', '", $allowedValues)
            );
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets allocations
     *
     * @return string[]
     */
    public function getAllocations()
    {
        return $this->container['allocations'];
    }

    /**
     * Sets allocations
     *
     * @param string[] $allocations allocations
     *
     * @return $this
     */
    public function setAllocations($allocations)
    {
        $this->container['allocations'] = $allocations;

        return $this;
    }

    /**
     * Gets use_proxy_data
     *
     * @return bool
     */
    public function getUseProxyData()
    {
        return $this->container['use_proxy_data'];
    }

    /**
     * Sets use_proxy_data
     *
     * @param bool $use_proxy_data use_proxy_data
     *
     * @return $this
     */
    public function setUseProxyData($use_proxy_data)
    {
        $this->container['use_proxy_data'] = $use_proxy_data;

        return $this;
    }

    /**
     * Gets client_id
     *
     * @return string
     */
    public function getClientId()
    {
        return $this->container['client_id'];
    }

    /**
     * Sets client_id
     *
     * @param string $client_id client_id
     *
     * @return $this
     */
    public function setClientId($client_id)
    {
        $this->container['client_id'] = $client_id;

        return $this;
    }

    /**
     * Gets risk_score
     *
     * @return float
     */
    public function getRiskScore()
    {
        return $this->container['risk_score'];
    }

    /**
     * Sets risk_score
     *
     * @param float $risk_score risk_score
     *
     * @return $this
     */
    public function setRiskScore($risk_score)
    {

        if (!is_null($risk_score) && ($risk_score > 100)) {
            throw new \InvalidArgumentException('invalid value for $risk_score when calling RiskAllocationRequest., must be smaller than or equal to 100.');
        }
        if (!is_null($risk_score) && ($risk_score < 0)) {
            throw new \InvalidArgumentException('invalid value for $risk_score when calling RiskAllocationRequest., must be bigger than or equal to 0.');
        }

        $this->container['risk_score'] = $risk_score;

        return $this;
    }

    /**
     * Gets opt_config
     *
     * @return object
     */
    public function getOptConfig()
    {
        return $this->container['opt_config'];
    }

    /**
     * Sets opt_config
     *
     * @param object $opt_config opt_config
     *
     * @return $this
     */
    public function setOptConfig($opt_config)
    {
        $this->container['opt_config'] = $opt_config;

        return $this;
    }

    /**
     * Gets market_data_source
     *
     * @return string
     */
    public function getMarketDataSource()
    {
        return $this->container['market_data_source'];
    }

    /**
     * Sets market_data_source
     *
     * @param string $market_data_source market_data_source
     *
     * @return $this
     */
    public function setMarketDataSource($market_data_source)
    {
        $allowedValues = $this->getMarketDataSourceAllowableValues();
        if (!is_null($market_data_source) && !in_array(strtolower($market_data_source), $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'market_data_source', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['market_data_source'] = $market_data_source;

        return $this;
    }

    /**
     * Gets allocation_method
     *
     * @return string
     */
    public function getAllocationMethod()
    {
        return $this->container['allocation_method'];
    }

    /**
     * Sets allocation_method
     *
     * @param string $allocation_method allocation_method
     *
     * @return $this
     */
    public function setAllocationMethod($allocation_method)
    {
        $allowedValues = $this->getAllocationMethodAllowableValues();
        if (!is_null($allocation_method) && !in_array(strtolower($allocation_method), $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'allocation_method', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['allocation_method'] = $allocation_method;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}

