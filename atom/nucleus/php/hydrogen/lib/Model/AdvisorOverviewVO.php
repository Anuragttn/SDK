<?php
/**
 * AdvisorOverviewVO
 *
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Hydrogen Atom API
 *
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.14
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
 * AdvisorOverviewVO Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class AdvisorOverviewVO implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'AdvisorOverviewVO';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'account_list' => '\com\hydrogen\nucleus\Model\AccountAdvisorVO[]',
        'client_list' => '\com\hydrogen\nucleus\Model\ClientAdvisorOverviewVO[]',
        'total_accounts_managed' => 'int',
        'total_assets_managed' => 'double',
        'total_clients_managed' => 'int'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'account_list' => null,
        'client_list' => null,
        'total_accounts_managed' => 'int32',
        'total_assets_managed' => 'double',
        'total_clients_managed' => 'int32'
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
        'account_list' => 'account_list',
        'client_list' => 'client_list',
        'total_accounts_managed' => 'total_accounts_managed',
        'total_assets_managed' => 'total_assets_managed',
        'total_clients_managed' => 'total_clients_managed'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'account_list' => 'setAccountList',
        'client_list' => 'setClientList',
        'total_accounts_managed' => 'setTotalAccountsManaged',
        'total_assets_managed' => 'setTotalAssetsManaged',
        'total_clients_managed' => 'setTotalClientsManaged'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'account_list' => 'getAccountList',
        'client_list' => 'getClientList',
        'total_accounts_managed' => 'getTotalAccountsManaged',
        'total_assets_managed' => 'getTotalAssetsManaged',
        'total_clients_managed' => 'getTotalClientsManaged'
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
        $this->container['account_list'] = isset($data['account_list']) ? $data['account_list'] : null;
        $this->container['client_list'] = isset($data['client_list']) ? $data['client_list'] : null;
        $this->container['total_accounts_managed'] = isset($data['total_accounts_managed']) ? $data['total_accounts_managed'] : null;
        $this->container['total_assets_managed'] = isset($data['total_assets_managed']) ? $data['total_assets_managed'] : null;
        $this->container['total_clients_managed'] = isset($data['total_clients_managed']) ? $data['total_clients_managed'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

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
     * Gets account_list
     *
     * @return \com\hydrogen\nucleus\Model\AccountAdvisorVO[]
     */
    public function getAccountList()
    {
        return $this->container['account_list'];
    }

    /**
     * Sets account_list
     *
     * @param \com\hydrogen\nucleus\Model\AccountAdvisorVO[] $account_list account_list
     *
     * @return $this
     */
    public function setAccountList($account_list)
    {
        $this->container['account_list'] = $account_list;

        return $this;
    }

    /**
     * Gets client_list
     *
     * @return \com\hydrogen\nucleus\Model\ClientAdvisorOverviewVO[]
     */
    public function getClientList()
    {
        return $this->container['client_list'];
    }

    /**
     * Sets client_list
     *
     * @param \com\hydrogen\nucleus\Model\ClientAdvisorOverviewVO[] $client_list client_list
     *
     * @return $this
     */
    public function setClientList($client_list)
    {
        $this->container['client_list'] = $client_list;

        return $this;
    }

    /**
     * Gets total_accounts_managed
     *
     * @return int
     */
    public function getTotalAccountsManaged()
    {
        return $this->container['total_accounts_managed'];
    }

    /**
     * Sets total_accounts_managed
     *
     * @param int $total_accounts_managed total_accounts_managed
     *
     * @return $this
     */
    public function setTotalAccountsManaged($total_accounts_managed)
    {
        $this->container['total_accounts_managed'] = $total_accounts_managed;

        return $this;
    }

    /**
     * Gets total_assets_managed
     *
     * @return double
     */
    public function getTotalAssetsManaged()
    {
        return $this->container['total_assets_managed'];
    }

    /**
     * Sets total_assets_managed
     *
     * @param double $total_assets_managed total_assets_managed
     *
     * @return $this
     */
    public function setTotalAssetsManaged($total_assets_managed)
    {
        $this->container['total_assets_managed'] = $total_assets_managed;

        return $this;
    }

    /**
     * Gets total_clients_managed
     *
     * @return int
     */
    public function getTotalClientsManaged()
    {
        return $this->container['total_clients_managed'];
    }

    /**
     * Sets total_clients_managed
     *
     * @param int $total_clients_managed total_clients_managed
     *
     * @return $this
     */
    public function setTotalClientsManaged($total_clients_managed)
    {
        $this->container['total_clients_managed'] = $total_clients_managed;

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

