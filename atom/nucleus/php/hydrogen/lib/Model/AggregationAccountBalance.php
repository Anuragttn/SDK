<?php
/**
 * AggregationAccountBalance
 *
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Hydrogen Nucleus API
 *
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.18
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace com\hydrogen\nucleus\Model;

use \ArrayAccess;
use \com\hydrogen\nucleus\ObjectSerializer;

/**
 * AggregationAccountBalance Class Doc Comment
 *
 * @category Class
 * @description Aggregation Account Balance Object
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class AggregationAccountBalance implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'AggregationAccountBalance';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'aggregation_account_id' => 'string',
        'available_balance' => 'double',
        'available_credit' => 'double',
        'balance' => 'double',
        'balance_time_stamp' => '\DateTime',
        'create_date' => '\DateTime',
        'currency_code' => 'string',
        'id' => 'string',
        'is_active' => 'bool',
        'secondary_id' => 'string',
        'update_date' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'aggregation_account_id' => 'uuid',
        'available_balance' => 'double',
        'available_credit' => 'double',
        'balance' => 'double',
        'balance_time_stamp' => 'date-time',
        'create_date' => 'date-time',
        'currency_code' => null,
        'id' => 'uuid',
        'is_active' => null,
        'secondary_id' => null,
        'update_date' => 'date-time'
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
        'aggregation_account_id' => 'aggregation_account_id',
        'available_balance' => 'available_balance',
        'available_credit' => 'available_credit',
        'balance' => 'balance',
        'balance_time_stamp' => 'balance_time_stamp',
        'create_date' => 'create_date',
        'currency_code' => 'currency_code',
        'id' => 'id',
        'is_active' => 'is_active',
        'secondary_id' => 'secondary_id',
        'update_date' => 'update_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'aggregation_account_id' => 'setAggregationAccountId',
        'available_balance' => 'setAvailableBalance',
        'available_credit' => 'setAvailableCredit',
        'balance' => 'setBalance',
        'balance_time_stamp' => 'setBalanceTimeStamp',
        'create_date' => 'setCreateDate',
        'currency_code' => 'setCurrencyCode',
        'id' => 'setId',
        'is_active' => 'setIsActive',
        'secondary_id' => 'setSecondaryId',
        'update_date' => 'setUpdateDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'aggregation_account_id' => 'getAggregationAccountId',
        'available_balance' => 'getAvailableBalance',
        'available_credit' => 'getAvailableCredit',
        'balance' => 'getBalance',
        'balance_time_stamp' => 'getBalanceTimeStamp',
        'create_date' => 'getCreateDate',
        'currency_code' => 'getCurrencyCode',
        'id' => 'getId',
        'is_active' => 'getIsActive',
        'secondary_id' => 'getSecondaryId',
        'update_date' => 'getUpdateDate'
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
        $this->container['aggregation_account_id'] = isset($data['aggregation_account_id']) ? $data['aggregation_account_id'] : null;
        $this->container['available_balance'] = isset($data['available_balance']) ? $data['available_balance'] : null;
        $this->container['available_credit'] = isset($data['available_credit']) ? $data['available_credit'] : null;
        $this->container['balance'] = isset($data['balance']) ? $data['balance'] : null;
        $this->container['balance_time_stamp'] = isset($data['balance_time_stamp']) ? $data['balance_time_stamp'] : null;
        $this->container['create_date'] = isset($data['create_date']) ? $data['create_date'] : null;
        $this->container['currency_code'] = isset($data['currency_code']) ? $data['currency_code'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['is_active'] = isset($data['is_active']) ? $data['is_active'] : null;
        $this->container['secondary_id'] = isset($data['secondary_id']) ? $data['secondary_id'] : null;
        $this->container['update_date'] = isset($data['update_date']) ? $data['update_date'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['currency_code'] === null) {
            $invalidProperties[] = "'currency_code' can't be null";
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
     * Gets aggregation_account_id
     *
     * @return string
     */
    public function getAggregationAccountId()
    {
        return $this->container['aggregation_account_id'];
    }

    /**
     * Sets aggregation_account_id
     *
     * @param string $aggregation_account_id aggregationAccountId
     *
     * @return $this
     */
    public function setAggregationAccountId($aggregation_account_id)
    {
        $this->container['aggregation_account_id'] = $aggregation_account_id;

        return $this;
    }

    /**
     * Gets available_balance
     *
     * @return double
     */
    public function getAvailableBalance()
    {
        return $this->container['available_balance'];
    }

    /**
     * Sets available_balance
     *
     * @param double $available_balance availableBalance
     *
     * @return $this
     */
    public function setAvailableBalance($available_balance)
    {
        $this->container['available_balance'] = $available_balance;

        return $this;
    }

    /**
     * Gets available_credit
     *
     * @return double
     */
    public function getAvailableCredit()
    {
        return $this->container['available_credit'];
    }

    /**
     * Sets available_credit
     *
     * @param double $available_credit availableCredit
     *
     * @return $this
     */
    public function setAvailableCredit($available_credit)
    {
        $this->container['available_credit'] = $available_credit;

        return $this;
    }

    /**
     * Gets balance
     *
     * @return double
     */
    public function getBalance()
    {
        return $this->container['balance'];
    }

    /**
     * Sets balance
     *
     * @param double $balance balance
     *
     * @return $this
     */
    public function setBalance($balance)
    {
        $this->container['balance'] = $balance;

        return $this;
    }

    /**
     * Gets balance_time_stamp
     *
     * @return \DateTime
     */
    public function getBalanceTimeStamp()
    {
        return $this->container['balance_time_stamp'];
    }

    /**
     * Sets balance_time_stamp
     *
     * @param \DateTime $balance_time_stamp balanceTimeStamp
     *
     * @return $this
     */
    public function setBalanceTimeStamp($balance_time_stamp)
    {
        $this->container['balance_time_stamp'] = $balance_time_stamp;

        return $this;
    }

    /**
     * Gets create_date
     *
     * @return \DateTime
     */
    public function getCreateDate()
    {
        return $this->container['create_date'];
    }

    /**
     * Sets create_date
     *
     * @param \DateTime $create_date create_date
     *
     * @return $this
     */
    public function setCreateDate($create_date)
    {
        $this->container['create_date'] = $create_date;

        return $this;
    }

    /**
     * Gets currency_code
     *
     * @return string
     */
    public function getCurrencyCode()
    {
        return $this->container['currency_code'];
    }

    /**
     * Sets currency_code
     *
     * @param string $currency_code currencyCode
     *
     * @return $this
     */
    public function setCurrencyCode($currency_code)
    {
        $this->container['currency_code'] = $currency_code;

        return $this;
    }

    /**
     * Gets id
     *
     * @return string
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param string $id id
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets is_active
     *
     * @return bool
     */
    public function getIsActive()
    {
        return $this->container['is_active'];
    }

    /**
     * Sets is_active
     *
     * @param bool $is_active isActive
     *
     * @return $this
     */
    public function setIsActive($is_active)
    {
        $this->container['is_active'] = $is_active;

        return $this;
    }

    /**
     * Gets secondary_id
     *
     * @return string
     */
    public function getSecondaryId()
    {
        return $this->container['secondary_id'];
    }

    /**
     * Sets secondary_id
     *
     * @param string $secondary_id secondary_id
     *
     * @return $this
     */
    public function setSecondaryId($secondary_id)
    {
        $this->container['secondary_id'] = $secondary_id;

        return $this;
    }

    /**
     * Gets update_date
     *
     * @return \DateTime
     */
    public function getUpdateDate()
    {
        return $this->container['update_date'];
    }

    /**
     * Sets update_date
     *
     * @param \DateTime $update_date update_date
     *
     * @return $this
     */
    public function setUpdateDate($update_date)
    {
        $this->container['update_date'] = $update_date;

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


