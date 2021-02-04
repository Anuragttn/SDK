<?php
/**
 * RoundupCO
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
 * RoundupCO Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class RoundupCO implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'RoundupCO';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'funding_start_date' => '\DateTime',
        'roundup_setting_id' => 'string',
        'transaction_end_date' => '\DateTime',
        'transaction_start_date' => '\DateTime',
        'update_transactions' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'funding_start_date' => 'date',
        'roundup_setting_id' => 'uuid',
        'transaction_end_date' => 'date-time',
        'transaction_start_date' => 'date-time',
        'update_transactions' => null
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
        'funding_start_date' => 'funding_start_date',
        'roundup_setting_id' => 'roundup_setting_id',
        'transaction_end_date' => 'transaction_end_date',
        'transaction_start_date' => 'transaction_start_date',
        'update_transactions' => 'update_transactions'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'funding_start_date' => 'setFundingStartDate',
        'roundup_setting_id' => 'setRoundupSettingId',
        'transaction_end_date' => 'setTransactionEndDate',
        'transaction_start_date' => 'setTransactionStartDate',
        'update_transactions' => 'setUpdateTransactions'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'funding_start_date' => 'getFundingStartDate',
        'roundup_setting_id' => 'getRoundupSettingId',
        'transaction_end_date' => 'getTransactionEndDate',
        'transaction_start_date' => 'getTransactionStartDate',
        'update_transactions' => 'getUpdateTransactions'
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
        $this->container['funding_start_date'] = isset($data['funding_start_date']) ? $data['funding_start_date'] : null;
        $this->container['roundup_setting_id'] = isset($data['roundup_setting_id']) ? $data['roundup_setting_id'] : null;
        $this->container['transaction_end_date'] = isset($data['transaction_end_date']) ? $data['transaction_end_date'] : null;
        $this->container['transaction_start_date'] = isset($data['transaction_start_date']) ? $data['transaction_start_date'] : null;
        $this->container['update_transactions'] = isset($data['update_transactions']) ? $data['update_transactions'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['funding_start_date'] === null) {
            $invalidProperties[] = "'funding_start_date' can't be null";
        }
        if ($this->container['roundup_setting_id'] === null) {
            $invalidProperties[] = "'roundup_setting_id' can't be null";
        }
        if ($this->container['transaction_start_date'] === null) {
            $invalidProperties[] = "'transaction_start_date' can't be null";
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
     * Gets funding_start_date
     *
     * @return \DateTime
     */
    public function getFundingStartDate()
    {
        return $this->container['funding_start_date'];
    }

    /**
     * Sets funding_start_date
     *
     * @param \DateTime $funding_start_date funding_start_date
     *
     * @return $this
     */
    public function setFundingStartDate($funding_start_date)
    {
        $this->container['funding_start_date'] = $funding_start_date;

        return $this;
    }

    /**
     * Gets roundup_setting_id
     *
     * @return string
     */
    public function getRoundupSettingId()
    {
        return $this->container['roundup_setting_id'];
    }

    /**
     * Sets roundup_setting_id
     *
     * @param string $roundup_setting_id roundup_setting_id
     *
     * @return $this
     */
    public function setRoundupSettingId($roundup_setting_id)
    {
        $this->container['roundup_setting_id'] = $roundup_setting_id;

        return $this;
    }

    /**
     * Gets transaction_end_date
     *
     * @return \DateTime
     */
    public function getTransactionEndDate()
    {
        return $this->container['transaction_end_date'];
    }

    /**
     * Sets transaction_end_date
     *
     * @param \DateTime $transaction_end_date transaction_end_date
     *
     * @return $this
     */
    public function setTransactionEndDate($transaction_end_date)
    {
        $this->container['transaction_end_date'] = $transaction_end_date;

        return $this;
    }

    /**
     * Gets transaction_start_date
     *
     * @return \DateTime
     */
    public function getTransactionStartDate()
    {
        return $this->container['transaction_start_date'];
    }

    /**
     * Sets transaction_start_date
     *
     * @param \DateTime $transaction_start_date transaction_start_date
     *
     * @return $this
     */
    public function setTransactionStartDate($transaction_start_date)
    {
        $this->container['transaction_start_date'] = $transaction_start_date;

        return $this;
    }

    /**
     * Gets update_transactions
     *
     * @return bool
     */
    public function getUpdateTransactions()
    {
        return $this->container['update_transactions'];
    }

    /**
     * Sets update_transactions
     *
     * @param bool $update_transactions update_transactions
     *
     * @return $this
     */
    public function setUpdateTransactions($update_transactions)
    {
        $this->container['update_transactions'] = $update_transactions;

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


