<?php
/**
 * Business
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
 * Business Class Doc Comment
 *
 * @category Class
 * @description Business Object
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class Business implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'Business';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'address' => '\com\hydrogen\nucleus\Model\BusinessAddress[]',
        'category' => 'string',
        'create_date' => '\DateTime',
        'dba_name' => 'string',
        'email' => 'string',
        'id' => 'string',
        'identification_number' => 'string',
        'identification_number_type' => 'string',
        'incorporation_country' => 'string',
        'incorporation_date' => '\DateTime',
        'incorporation_state' => 'string',
        'is_active' => 'bool',
        'is_public' => 'bool',
        'is_verified' => 'bool',
        'legal_name' => 'string',
        'legal_structure' => 'string',
        'metadata' => 'map[string,string]',
        'ownership' => '\com\hydrogen\nucleus\Model\Ownership[]',
        'phone_number' => 'string',
        'secondary_id' => 'string',
        'status' => 'string',
        'subcategory' => 'string',
        'ticker' => 'string',
        'update_date' => '\DateTime',
        'website' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'address' => null,
        'category' => null,
        'create_date' => 'date-time',
        'dba_name' => null,
        'email' => null,
        'id' => 'uuid',
        'identification_number' => null,
        'identification_number_type' => null,
        'incorporation_country' => null,
        'incorporation_date' => 'date',
        'incorporation_state' => null,
        'is_active' => null,
        'is_public' => null,
        'is_verified' => null,
        'legal_name' => null,
        'legal_structure' => null,
        'metadata' => null,
        'ownership' => null,
        'phone_number' => null,
        'secondary_id' => null,
        'status' => null,
        'subcategory' => null,
        'ticker' => null,
        'update_date' => 'date-time',
        'website' => null
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
        'address' => 'address',
        'category' => 'category',
        'create_date' => 'create_date',
        'dba_name' => 'dba_name',
        'email' => 'email',
        'id' => 'id',
        'identification_number' => 'identification_number',
        'identification_number_type' => 'identification_number_type',
        'incorporation_country' => 'incorporation_country',
        'incorporation_date' => 'incorporation_date',
        'incorporation_state' => 'incorporation_state',
        'is_active' => 'is_active',
        'is_public' => 'is_public',
        'is_verified' => 'is_verified',
        'legal_name' => 'legal_name',
        'legal_structure' => 'legal_structure',
        'metadata' => 'metadata',
        'ownership' => 'ownership',
        'phone_number' => 'phone_number',
        'secondary_id' => 'secondary_id',
        'status' => 'status',
        'subcategory' => 'subcategory',
        'ticker' => 'ticker',
        'update_date' => 'update_date',
        'website' => 'website'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'address' => 'setAddress',
        'category' => 'setCategory',
        'create_date' => 'setCreateDate',
        'dba_name' => 'setDbaName',
        'email' => 'setEmail',
        'id' => 'setId',
        'identification_number' => 'setIdentificationNumber',
        'identification_number_type' => 'setIdentificationNumberType',
        'incorporation_country' => 'setIncorporationCountry',
        'incorporation_date' => 'setIncorporationDate',
        'incorporation_state' => 'setIncorporationState',
        'is_active' => 'setIsActive',
        'is_public' => 'setIsPublic',
        'is_verified' => 'setIsVerified',
        'legal_name' => 'setLegalName',
        'legal_structure' => 'setLegalStructure',
        'metadata' => 'setMetadata',
        'ownership' => 'setOwnership',
        'phone_number' => 'setPhoneNumber',
        'secondary_id' => 'setSecondaryId',
        'status' => 'setStatus',
        'subcategory' => 'setSubcategory',
        'ticker' => 'setTicker',
        'update_date' => 'setUpdateDate',
        'website' => 'setWebsite'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'address' => 'getAddress',
        'category' => 'getCategory',
        'create_date' => 'getCreateDate',
        'dba_name' => 'getDbaName',
        'email' => 'getEmail',
        'id' => 'getId',
        'identification_number' => 'getIdentificationNumber',
        'identification_number_type' => 'getIdentificationNumberType',
        'incorporation_country' => 'getIncorporationCountry',
        'incorporation_date' => 'getIncorporationDate',
        'incorporation_state' => 'getIncorporationState',
        'is_active' => 'getIsActive',
        'is_public' => 'getIsPublic',
        'is_verified' => 'getIsVerified',
        'legal_name' => 'getLegalName',
        'legal_structure' => 'getLegalStructure',
        'metadata' => 'getMetadata',
        'ownership' => 'getOwnership',
        'phone_number' => 'getPhoneNumber',
        'secondary_id' => 'getSecondaryId',
        'status' => 'getStatus',
        'subcategory' => 'getSubcategory',
        'ticker' => 'getTicker',
        'update_date' => 'getUpdateDate',
        'website' => 'getWebsite'
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
        $this->container['address'] = isset($data['address']) ? $data['address'] : null;
        $this->container['category'] = isset($data['category']) ? $data['category'] : null;
        $this->container['create_date'] = isset($data['create_date']) ? $data['create_date'] : null;
        $this->container['dba_name'] = isset($data['dba_name']) ? $data['dba_name'] : null;
        $this->container['email'] = isset($data['email']) ? $data['email'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['identification_number'] = isset($data['identification_number']) ? $data['identification_number'] : null;
        $this->container['identification_number_type'] = isset($data['identification_number_type']) ? $data['identification_number_type'] : null;
        $this->container['incorporation_country'] = isset($data['incorporation_country']) ? $data['incorporation_country'] : null;
        $this->container['incorporation_date'] = isset($data['incorporation_date']) ? $data['incorporation_date'] : null;
        $this->container['incorporation_state'] = isset($data['incorporation_state']) ? $data['incorporation_state'] : null;
        $this->container['is_active'] = isset($data['is_active']) ? $data['is_active'] : null;
        $this->container['is_public'] = isset($data['is_public']) ? $data['is_public'] : null;
        $this->container['is_verified'] = isset($data['is_verified']) ? $data['is_verified'] : null;
        $this->container['legal_name'] = isset($data['legal_name']) ? $data['legal_name'] : null;
        $this->container['legal_structure'] = isset($data['legal_structure']) ? $data['legal_structure'] : null;
        $this->container['metadata'] = isset($data['metadata']) ? $data['metadata'] : null;
        $this->container['ownership'] = isset($data['ownership']) ? $data['ownership'] : null;
        $this->container['phone_number'] = isset($data['phone_number']) ? $data['phone_number'] : null;
        $this->container['secondary_id'] = isset($data['secondary_id']) ? $data['secondary_id'] : null;
        $this->container['status'] = isset($data['status']) ? $data['status'] : null;
        $this->container['subcategory'] = isset($data['subcategory']) ? $data['subcategory'] : null;
        $this->container['ticker'] = isset($data['ticker']) ? $data['ticker'] : null;
        $this->container['update_date'] = isset($data['update_date']) ? $data['update_date'] : null;
        $this->container['website'] = isset($data['website']) ? $data['website'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['legal_name'] === null) {
            $invalidProperties[] = "'legal_name' can't be null";
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
     * Gets address
     *
     * @return \com\hydrogen\nucleus\Model\BusinessAddress[]
     */
    public function getAddress()
    {
        return $this->container['address'];
    }

    /**
     * Sets address
     *
     * @param \com\hydrogen\nucleus\Model\BusinessAddress[] $address address
     *
     * @return $this
     */
    public function setAddress($address)
    {
        $this->container['address'] = $address;

        return $this;
    }

    /**
     * Gets category
     *
     * @return string
     */
    public function getCategory()
    {
        return $this->container['category'];
    }

    /**
     * Sets category
     *
     * @param string $category category
     *
     * @return $this
     */
    public function setCategory($category)
    {
        $this->container['category'] = $category;

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
     * Gets dba_name
     *
     * @return string
     */
    public function getDbaName()
    {
        return $this->container['dba_name'];
    }

    /**
     * Sets dba_name
     *
     * @param string $dba_name dbaName
     *
     * @return $this
     */
    public function setDbaName($dba_name)
    {
        $this->container['dba_name'] = $dba_name;

        return $this;
    }

    /**
     * Gets email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->container['email'];
    }

    /**
     * Sets email
     *
     * @param string $email email
     *
     * @return $this
     */
    public function setEmail($email)
    {
        $this->container['email'] = $email;

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
     * Gets identification_number
     *
     * @return string
     */
    public function getIdentificationNumber()
    {
        return $this->container['identification_number'];
    }

    /**
     * Sets identification_number
     *
     * @param string $identification_number identificationNumber
     *
     * @return $this
     */
    public function setIdentificationNumber($identification_number)
    {
        $this->container['identification_number'] = $identification_number;

        return $this;
    }

    /**
     * Gets identification_number_type
     *
     * @return string
     */
    public function getIdentificationNumberType()
    {
        return $this->container['identification_number_type'];
    }

    /**
     * Sets identification_number_type
     *
     * @param string $identification_number_type identificationNumberType
     *
     * @return $this
     */
    public function setIdentificationNumberType($identification_number_type)
    {
        $this->container['identification_number_type'] = $identification_number_type;

        return $this;
    }

    /**
     * Gets incorporation_country
     *
     * @return string
     */
    public function getIncorporationCountry()
    {
        return $this->container['incorporation_country'];
    }

    /**
     * Sets incorporation_country
     *
     * @param string $incorporation_country incorporationCountry
     *
     * @return $this
     */
    public function setIncorporationCountry($incorporation_country)
    {
        $this->container['incorporation_country'] = $incorporation_country;

        return $this;
    }

    /**
     * Gets incorporation_date
     *
     * @return \DateTime
     */
    public function getIncorporationDate()
    {
        return $this->container['incorporation_date'];
    }

    /**
     * Sets incorporation_date
     *
     * @param \DateTime $incorporation_date incorporationDate
     *
     * @return $this
     */
    public function setIncorporationDate($incorporation_date)
    {
        $this->container['incorporation_date'] = $incorporation_date;

        return $this;
    }

    /**
     * Gets incorporation_state
     *
     * @return string
     */
    public function getIncorporationState()
    {
        return $this->container['incorporation_state'];
    }

    /**
     * Sets incorporation_state
     *
     * @param string $incorporation_state incorporationState
     *
     * @return $this
     */
    public function setIncorporationState($incorporation_state)
    {
        $this->container['incorporation_state'] = $incorporation_state;

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
     * @param bool $is_active is_active
     *
     * @return $this
     */
    public function setIsActive($is_active)
    {
        $this->container['is_active'] = $is_active;

        return $this;
    }

    /**
     * Gets is_public
     *
     * @return bool
     */
    public function getIsPublic()
    {
        return $this->container['is_public'];
    }

    /**
     * Sets is_public
     *
     * @param bool $is_public is_public
     *
     * @return $this
     */
    public function setIsPublic($is_public)
    {
        $this->container['is_public'] = $is_public;

        return $this;
    }

    /**
     * Gets is_verified
     *
     * @return bool
     */
    public function getIsVerified()
    {
        return $this->container['is_verified'];
    }

    /**
     * Sets is_verified
     *
     * @param bool $is_verified is_verified
     *
     * @return $this
     */
    public function setIsVerified($is_verified)
    {
        $this->container['is_verified'] = $is_verified;

        return $this;
    }

    /**
     * Gets legal_name
     *
     * @return string
     */
    public function getLegalName()
    {
        return $this->container['legal_name'];
    }

    /**
     * Sets legal_name
     *
     * @param string $legal_name legalName
     *
     * @return $this
     */
    public function setLegalName($legal_name)
    {
        $this->container['legal_name'] = $legal_name;

        return $this;
    }

    /**
     * Gets legal_structure
     *
     * @return string
     */
    public function getLegalStructure()
    {
        return $this->container['legal_structure'];
    }

    /**
     * Sets legal_structure
     *
     * @param string $legal_structure legalStructure
     *
     * @return $this
     */
    public function setLegalStructure($legal_structure)
    {
        $this->container['legal_structure'] = $legal_structure;

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
     * Gets ownership
     *
     * @return \com\hydrogen\nucleus\Model\Ownership[]
     */
    public function getOwnership()
    {
        return $this->container['ownership'];
    }

    /**
     * Sets ownership
     *
     * @param \com\hydrogen\nucleus\Model\Ownership[] $ownership ownership
     *
     * @return $this
     */
    public function setOwnership($ownership)
    {
        $this->container['ownership'] = $ownership;

        return $this;
    }

    /**
     * Gets phone_number
     *
     * @return string
     */
    public function getPhoneNumber()
    {
        return $this->container['phone_number'];
    }

    /**
     * Sets phone_number
     *
     * @param string $phone_number phoneNumber
     *
     * @return $this
     */
    public function setPhoneNumber($phone_number)
    {
        $this->container['phone_number'] = $phone_number;

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
     * Gets subcategory
     *
     * @return string
     */
    public function getSubcategory()
    {
        return $this->container['subcategory'];
    }

    /**
     * Sets subcategory
     *
     * @param string $subcategory subcategory
     *
     * @return $this
     */
    public function setSubcategory($subcategory)
    {
        $this->container['subcategory'] = $subcategory;

        return $this;
    }

    /**
     * Gets ticker
     *
     * @return string
     */
    public function getTicker()
    {
        return $this->container['ticker'];
    }

    /**
     * Sets ticker
     *
     * @param string $ticker ticker
     *
     * @return $this
     */
    public function setTicker($ticker)
    {
        $this->container['ticker'] = $ticker;

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
     * Gets website
     *
     * @return string
     */
    public function getWebsite()
    {
        return $this->container['website'];
    }

    /**
     * Sets website
     *
     * @param string $website website
     *
     * @return $this
     */
    public function setWebsite($website)
    {
        $this->container['website'] = $website;

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


