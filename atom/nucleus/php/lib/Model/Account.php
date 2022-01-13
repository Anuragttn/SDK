<?php
/**
 * Account
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
 * OpenAPI spec version: 1.9.5
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.19
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
 * Account Class Doc Comment
 *
 * @category Class
 * @description Account Object
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class Account implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'Account';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'account_number' => 'string',
        'account_type_id' => 'string',
        'clients' => '\com\hydrogen\nucleus\Model\ClientAccountMapping[]',
        'create_date' => '\DateTime',
        'currency_code' => 'string',
        'discretionary' => 'bool',
        'goals' => '\com\hydrogen\nucleus\Model\GoalAccountMapping[]',
        'id' => 'string',
        'is_active' => 'bool',
        'managed' => 'bool',
        'metadata' => 'map[string,string]',
        'name' => 'string',
        'secondary_id' => 'string',
        'status' => 'string',
        'update_date' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'account_number' => null,
        'account_type_id' => 'uuid',
        'clients' => null,
        'create_date' => 'date-time',
        'currency_code' => null,
        'discretionary' => null,
        'goals' => null,
        'id' => 'uuid',
        'is_active' => null,
        'managed' => null,
        'metadata' => null,
        'name' => null,
        'secondary_id' => null,
        'status' => null,
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
        'account_number' => 'account_number',
        'account_type_id' => 'account_type_id',
        'clients' => 'clients',
        'create_date' => 'create_date',
        'currency_code' => 'currency_code',
        'discretionary' => 'discretionary',
        'goals' => 'goals',
        'id' => 'id',
        'is_active' => 'is_active',
        'managed' => 'managed',
        'metadata' => 'metadata',
        'name' => 'name',
        'secondary_id' => 'secondary_id',
        'status' => 'status',
        'update_date' => 'update_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'account_number' => 'setAccountNumber',
        'account_type_id' => 'setAccountTypeId',
        'clients' => 'setClients',
        'create_date' => 'setCreateDate',
        'currency_code' => 'setCurrencyCode',
        'discretionary' => 'setDiscretionary',
        'goals' => 'setGoals',
        'id' => 'setId',
        'is_active' => 'setIsActive',
        'managed' => 'setManaged',
        'metadata' => 'setMetadata',
        'name' => 'setName',
        'secondary_id' => 'setSecondaryId',
        'status' => 'setStatus',
        'update_date' => 'setUpdateDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'account_number' => 'getAccountNumber',
        'account_type_id' => 'getAccountTypeId',
        'clients' => 'getClients',
        'create_date' => 'getCreateDate',
        'currency_code' => 'getCurrencyCode',
        'discretionary' => 'getDiscretionary',
        'goals' => 'getGoals',
        'id' => 'getId',
        'is_active' => 'getIsActive',
        'managed' => 'getManaged',
        'metadata' => 'getMetadata',
        'name' => 'getName',
        'secondary_id' => 'getSecondaryId',
        'status' => 'getStatus',
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
        $this->container['account_number'] = isset($data['account_number']) ? $data['account_number'] : null;
        $this->container['account_type_id'] = isset($data['account_type_id']) ? $data['account_type_id'] : null;
        $this->container['clients'] = isset($data['clients']) ? $data['clients'] : null;
        $this->container['create_date'] = isset($data['create_date']) ? $data['create_date'] : null;
        $this->container['currency_code'] = isset($data['currency_code']) ? $data['currency_code'] : null;
        $this->container['discretionary'] = isset($data['discretionary']) ? $data['discretionary'] : null;
        $this->container['goals'] = isset($data['goals']) ? $data['goals'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['is_active'] = isset($data['is_active']) ? $data['is_active'] : null;
        $this->container['managed'] = isset($data['managed']) ? $data['managed'] : null;
        $this->container['metadata'] = isset($data['metadata']) ? $data['metadata'] : null;
        $this->container['name'] = isset($data['name']) ? $data['name'] : null;
        $this->container['secondary_id'] = isset($data['secondary_id']) ? $data['secondary_id'] : null;
        $this->container['status'] = isset($data['status']) ? $data['status'] : null;
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

        if ($this->container['account_type_id'] === null) {
            $invalidProperties[] = "'account_type_id' can't be null";
        }
        if ($this->container['name'] === null) {
            $invalidProperties[] = "'name' can't be null";
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
     * Gets account_number
     *
     * @return string
     */
    public function getAccountNumber()
    {
        return $this->container['account_number'];
    }

    /**
     * Sets account_number
     *
     * @param string $account_number accountNumber
     *
     * @return $this
     */
    public function setAccountNumber($account_number)
    {
        $this->container['account_number'] = $account_number;

        return $this;
    }

    /**
     * Gets account_type_id
     *
     * @return string
     */
    public function getAccountTypeId()
    {
        return $this->container['account_type_id'];
    }

    /**
     * Sets account_type_id
     *
     * @param string $account_type_id accountTypeId
     *
     * @return $this
     */
    public function setAccountTypeId($account_type_id)
    {
        $this->container['account_type_id'] = $account_type_id;

        return $this;
    }

    /**
     * Gets clients
     *
     * @return \com\hydrogen\nucleus\Model\ClientAccountMapping[]
     */
    public function getClients()
    {
        return $this->container['clients'];
    }

    /**
     * Sets clients
     *
     * @param \com\hydrogen\nucleus\Model\ClientAccountMapping[] $clients clients
     *
     * @return $this
     */
    public function setClients($clients)
    {
        $this->container['clients'] = $clients;

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
     * Gets discretionary
     *
     * @return bool
     */
    public function getDiscretionary()
    {
        return $this->container['discretionary'];
    }

    /**
     * Sets discretionary
     *
     * @param bool $discretionary discretionary
     *
     * @return $this
     */
    public function setDiscretionary($discretionary)
    {
        $this->container['discretionary'] = $discretionary;

        return $this;
    }

    /**
     * Gets goals
     *
     * @return \com\hydrogen\nucleus\Model\GoalAccountMapping[]
     */
    public function getGoals()
    {
        return $this->container['goals'];
    }

    /**
     * Sets goals
     *
     * @param \com\hydrogen\nucleus\Model\GoalAccountMapping[] $goals goals
     *
     * @return $this
     */
    public function setGoals($goals)
    {
        $this->container['goals'] = $goals;

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
     * Gets managed
     *
     * @return bool
     */
    public function getManaged()
    {
        return $this->container['managed'];
    }

    /**
     * Sets managed
     *
     * @param bool $managed managed
     *
     * @return $this
     */
    public function setManaged($managed)
    {
        $this->container['managed'] = $managed;

        return $this;
    }

    /**
     * Gets metadata
     *
     * @return map[string,string]
     */
    public function getMetadata()
    {
        return $this->container['metadata'];
    }

    /**
     * Sets metadata
     *
     * @param map[string,string] $metadata metadata
     *
     * @return $this
     */
    public function setMetadata($metadata)
    {
        $this->container['metadata'] = $metadata;

        return $this;
    }

    /**
     * Gets name
     *
     * @return string
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string $name name
     *
     * @return $this
     */
    public function setName($name)
    {
        $this->container['name'] = $name;

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
     * Gets status
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param string $status status
     *
     * @return $this
     */
    public function setStatus($status)
    {
        $this->container['status'] = $status;

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


