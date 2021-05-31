<?php
/**
 * Funding
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

namespace com\hydrogen\nucleus\Model;

use \ArrayAccess;
use \com\hydrogen\nucleus\ObjectSerializer;

/**
 * Funding Class Doc Comment
 *
 * @category Class
 * @description Funding Object
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class Funding implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'Funding';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'account_id' => 'string',
        'amount' => 'double',
        'bank_link_id' => 'string',
        'card_id' => 'string',
        'create_date' => '\DateTime',
        'currency_code' => 'string',
        'description' => 'string',
        'end_date' => '\DateTime',
        'frequency' => 'int',
        'frequency_unit' => 'string',
        'funding_status' => 'string',
        'funding_type' => 'string',
        'id' => 'string',
        'is_active' => 'bool',
        'is_deposit' => 'bool',
        'last_request_date' => '\DateTime',
        'metadata' => 'map[string,string]',
        'next_request_date' => '\DateTime',
        'portfolio_id' => 'string',
        'receiving_account_id' => 'string',
        'receiving_bank_link_id' => 'string',
        'receiving_portfolio_id' => 'string',
        'secondary_id' => 'string',
        'start_date' => '\DateTime',
        'support_ticket_id' => 'string',
        'threshold_amount' => 'double',
        'transfer_id' => 'string',
        'transfer_speed' => 'string',
        'transfer_type' => 'string',
        'update_date' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'account_id' => 'uuid',
        'amount' => 'double',
        'bank_link_id' => 'uuid',
        'card_id' => 'uuid',
        'create_date' => 'date-time',
        'currency_code' => null,
        'description' => null,
        'end_date' => 'date',
        'frequency' => 'int32',
        'frequency_unit' => null,
        'funding_status' => null,
        'funding_type' => null,
        'id' => 'uuid',
        'is_active' => null,
        'is_deposit' => null,
        'last_request_date' => 'date',
        'metadata' => null,
        'next_request_date' => 'date',
        'portfolio_id' => 'uuid',
        'receiving_account_id' => 'uuid',
        'receiving_bank_link_id' => 'uuid',
        'receiving_portfolio_id' => 'uuid',
        'secondary_id' => null,
        'start_date' => 'date',
        'support_ticket_id' => 'uuid',
        'threshold_amount' => 'double',
        'transfer_id' => 'uuid',
        'transfer_speed' => null,
        'transfer_type' => null,
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
        'account_id' => 'account_id',
        'amount' => 'amount',
        'bank_link_id' => 'bank_link_id',
        'card_id' => 'card_id',
        'create_date' => 'create_date',
        'currency_code' => 'currency_code',
        'description' => 'description',
        'end_date' => 'end_date',
        'frequency' => 'frequency',
        'frequency_unit' => 'frequency_unit',
        'funding_status' => 'funding_status',
        'funding_type' => 'funding_type',
        'id' => 'id',
        'is_active' => 'is_active',
        'is_deposit' => 'is_deposit',
        'last_request_date' => 'last_request_date',
        'metadata' => 'metadata',
        'next_request_date' => 'next_request_date',
        'portfolio_id' => 'portfolio_id',
        'receiving_account_id' => 'receiving_account_id',
        'receiving_bank_link_id' => 'receiving_bank_link_id',
        'receiving_portfolio_id' => 'receiving_portfolio_id',
        'secondary_id' => 'secondary_id',
        'start_date' => 'start_date',
        'support_ticket_id' => 'support_ticket_id',
        'threshold_amount' => 'threshold_amount',
        'transfer_id' => 'transfer_id',
        'transfer_speed' => 'transfer_speed',
        'transfer_type' => 'transfer_type',
        'update_date' => 'update_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'account_id' => 'setAccountId',
        'amount' => 'setAmount',
        'bank_link_id' => 'setBankLinkId',
        'card_id' => 'setCardId',
        'create_date' => 'setCreateDate',
        'currency_code' => 'setCurrencyCode',
        'description' => 'setDescription',
        'end_date' => 'setEndDate',
        'frequency' => 'setFrequency',
        'frequency_unit' => 'setFrequencyUnit',
        'funding_status' => 'setFundingStatus',
        'funding_type' => 'setFundingType',
        'id' => 'setId',
        'is_active' => 'setIsActive',
        'is_deposit' => 'setIsDeposit',
        'last_request_date' => 'setLastRequestDate',
        'metadata' => 'setMetadata',
        'next_request_date' => 'setNextRequestDate',
        'portfolio_id' => 'setPortfolioId',
        'receiving_account_id' => 'setReceivingAccountId',
        'receiving_bank_link_id' => 'setReceivingBankLinkId',
        'receiving_portfolio_id' => 'setReceivingPortfolioId',
        'secondary_id' => 'setSecondaryId',
        'start_date' => 'setStartDate',
        'support_ticket_id' => 'setSupportTicketId',
        'threshold_amount' => 'setThresholdAmount',
        'transfer_id' => 'setTransferId',
        'transfer_speed' => 'setTransferSpeed',
        'transfer_type' => 'setTransferType',
        'update_date' => 'setUpdateDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'account_id' => 'getAccountId',
        'amount' => 'getAmount',
        'bank_link_id' => 'getBankLinkId',
        'card_id' => 'getCardId',
        'create_date' => 'getCreateDate',
        'currency_code' => 'getCurrencyCode',
        'description' => 'getDescription',
        'end_date' => 'getEndDate',
        'frequency' => 'getFrequency',
        'frequency_unit' => 'getFrequencyUnit',
        'funding_status' => 'getFundingStatus',
        'funding_type' => 'getFundingType',
        'id' => 'getId',
        'is_active' => 'getIsActive',
        'is_deposit' => 'getIsDeposit',
        'last_request_date' => 'getLastRequestDate',
        'metadata' => 'getMetadata',
        'next_request_date' => 'getNextRequestDate',
        'portfolio_id' => 'getPortfolioId',
        'receiving_account_id' => 'getReceivingAccountId',
        'receiving_bank_link_id' => 'getReceivingBankLinkId',
        'receiving_portfolio_id' => 'getReceivingPortfolioId',
        'secondary_id' => 'getSecondaryId',
        'start_date' => 'getStartDate',
        'support_ticket_id' => 'getSupportTicketId',
        'threshold_amount' => 'getThresholdAmount',
        'transfer_id' => 'getTransferId',
        'transfer_speed' => 'getTransferSpeed',
        'transfer_type' => 'getTransferType',
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
        $this->container['account_id'] = isset($data['account_id']) ? $data['account_id'] : null;
        $this->container['amount'] = isset($data['amount']) ? $data['amount'] : null;
        $this->container['bank_link_id'] = isset($data['bank_link_id']) ? $data['bank_link_id'] : null;
        $this->container['card_id'] = isset($data['card_id']) ? $data['card_id'] : null;
        $this->container['create_date'] = isset($data['create_date']) ? $data['create_date'] : null;
        $this->container['currency_code'] = isset($data['currency_code']) ? $data['currency_code'] : null;
        $this->container['description'] = isset($data['description']) ? $data['description'] : null;
        $this->container['end_date'] = isset($data['end_date']) ? $data['end_date'] : null;
        $this->container['frequency'] = isset($data['frequency']) ? $data['frequency'] : null;
        $this->container['frequency_unit'] = isset($data['frequency_unit']) ? $data['frequency_unit'] : null;
        $this->container['funding_status'] = isset($data['funding_status']) ? $data['funding_status'] : null;
        $this->container['funding_type'] = isset($data['funding_type']) ? $data['funding_type'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['is_active'] = isset($data['is_active']) ? $data['is_active'] : null;
        $this->container['is_deposit'] = isset($data['is_deposit']) ? $data['is_deposit'] : null;
        $this->container['last_request_date'] = isset($data['last_request_date']) ? $data['last_request_date'] : null;
        $this->container['metadata'] = isset($data['metadata']) ? $data['metadata'] : null;
        $this->container['next_request_date'] = isset($data['next_request_date']) ? $data['next_request_date'] : null;
        $this->container['portfolio_id'] = isset($data['portfolio_id']) ? $data['portfolio_id'] : null;
        $this->container['receiving_account_id'] = isset($data['receiving_account_id']) ? $data['receiving_account_id'] : null;
        $this->container['receiving_bank_link_id'] = isset($data['receiving_bank_link_id']) ? $data['receiving_bank_link_id'] : null;
        $this->container['receiving_portfolio_id'] = isset($data['receiving_portfolio_id']) ? $data['receiving_portfolio_id'] : null;
        $this->container['secondary_id'] = isset($data['secondary_id']) ? $data['secondary_id'] : null;
        $this->container['start_date'] = isset($data['start_date']) ? $data['start_date'] : null;
        $this->container['support_ticket_id'] = isset($data['support_ticket_id']) ? $data['support_ticket_id'] : null;
        $this->container['threshold_amount'] = isset($data['threshold_amount']) ? $data['threshold_amount'] : null;
        $this->container['transfer_id'] = isset($data['transfer_id']) ? $data['transfer_id'] : null;
        $this->container['transfer_speed'] = isset($data['transfer_speed']) ? $data['transfer_speed'] : null;
        $this->container['transfer_type'] = isset($data['transfer_type']) ? $data['transfer_type'] : null;
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

        if ($this->container['frequency_unit'] === null) {
            $invalidProperties[] = "'frequency_unit' can't be null";
        }
        if ($this->container['funding_status'] === null) {
            $invalidProperties[] = "'funding_status' can't be null";
        }
        if ($this->container['funding_type'] === null) {
            $invalidProperties[] = "'funding_type' can't be null";
        }
        if ($this->container['is_deposit'] === null) {
            $invalidProperties[] = "'is_deposit' can't be null";
        }
        if ($this->container['start_date'] === null) {
            $invalidProperties[] = "'start_date' can't be null";
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
     * Gets account_id
     *
     * @return string
     */
    public function getAccountId()
    {
        return $this->container['account_id'];
    }

    /**
     * Sets account_id
     *
     * @param string $account_id accountId
     *
     * @return $this
     */
    public function setAccountId($account_id)
    {
        $this->container['account_id'] = $account_id;

        return $this;
    }

    /**
     * Gets amount
     *
     * @return double
     */
    public function getAmount()
    {
        return $this->container['amount'];
    }

    /**
     * Sets amount
     *
     * @param double $amount amount
     *
     * @return $this
     */
    public function setAmount($amount)
    {
        $this->container['amount'] = $amount;

        return $this;
    }

    /**
     * Gets bank_link_id
     *
     * @return string
     */
    public function getBankLinkId()
    {
        return $this->container['bank_link_id'];
    }

    /**
     * Sets bank_link_id
     *
     * @param string $bank_link_id bankLinkId
     *
     * @return $this
     */
    public function setBankLinkId($bank_link_id)
    {
        $this->container['bank_link_id'] = $bank_link_id;

        return $this;
    }

    /**
     * Gets card_id
     *
     * @return string
     */
    public function getCardId()
    {
        return $this->container['card_id'];
    }

    /**
     * Sets card_id
     *
     * @param string $card_id cardId
     *
     * @return $this
     */
    public function setCardId($card_id)
    {
        $this->container['card_id'] = $card_id;

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
     * Gets description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string $description description
     *
     * @return $this
     */
    public function setDescription($description)
    {
        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets end_date
     *
     * @return \DateTime
     */
    public function getEndDate()
    {
        return $this->container['end_date'];
    }

    /**
     * Sets end_date
     *
     * @param \DateTime $end_date endDate
     *
     * @return $this
     */
    public function setEndDate($end_date)
    {
        $this->container['end_date'] = $end_date;

        return $this;
    }

    /**
     * Gets frequency
     *
     * @return int
     */
    public function getFrequency()
    {
        return $this->container['frequency'];
    }

    /**
     * Sets frequency
     *
     * @param int $frequency frequency
     *
     * @return $this
     */
    public function setFrequency($frequency)
    {
        $this->container['frequency'] = $frequency;

        return $this;
    }

    /**
     * Gets frequency_unit
     *
     * @return string
     */
    public function getFrequencyUnit()
    {
        return $this->container['frequency_unit'];
    }

    /**
     * Sets frequency_unit
     *
     * @param string $frequency_unit frequencyUnit
     *
     * @return $this
     */
    public function setFrequencyUnit($frequency_unit)
    {
        $this->container['frequency_unit'] = $frequency_unit;

        return $this;
    }

    /**
     * Gets funding_status
     *
     * @return string
     */
    public function getFundingStatus()
    {
        return $this->container['funding_status'];
    }

    /**
     * Sets funding_status
     *
     * @param string $funding_status fundingStatus
     *
     * @return $this
     */
    public function setFundingStatus($funding_status)
    {
        $this->container['funding_status'] = $funding_status;

        return $this;
    }

    /**
     * Gets funding_type
     *
     * @return string
     */
    public function getFundingType()
    {
        return $this->container['funding_type'];
    }

    /**
     * Sets funding_type
     *
     * @param string $funding_type fundingType
     *
     * @return $this
     */
    public function setFundingType($funding_type)
    {
        $this->container['funding_type'] = $funding_type;

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
     * Gets is_deposit
     *
     * @return bool
     */
    public function getIsDeposit()
    {
        return $this->container['is_deposit'];
    }

    /**
     * Sets is_deposit
     *
     * @param bool $is_deposit isDeposit
     *
     * @return $this
     */
    public function setIsDeposit($is_deposit)
    {
        $this->container['is_deposit'] = $is_deposit;

        return $this;
    }

    /**
     * Gets last_request_date
     *
     * @return \DateTime
     */
    public function getLastRequestDate()
    {
        return $this->container['last_request_date'];
    }

    /**
     * Sets last_request_date
     *
     * @param \DateTime $last_request_date lastRequestDate
     *
     * @return $this
     */
    public function setLastRequestDate($last_request_date)
    {
        $this->container['last_request_date'] = $last_request_date;

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
     * Gets next_request_date
     *
     * @return \DateTime
     */
    public function getNextRequestDate()
    {
        return $this->container['next_request_date'];
    }

    /**
     * Sets next_request_date
     *
     * @param \DateTime $next_request_date nextRequestDate
     *
     * @return $this
     */
    public function setNextRequestDate($next_request_date)
    {
        $this->container['next_request_date'] = $next_request_date;

        return $this;
    }

    /**
     * Gets portfolio_id
     *
     * @return string
     */
    public function getPortfolioId()
    {
        return $this->container['portfolio_id'];
    }

    /**
     * Sets portfolio_id
     *
     * @param string $portfolio_id portfolioId
     *
     * @return $this
     */
    public function setPortfolioId($portfolio_id)
    {
        $this->container['portfolio_id'] = $portfolio_id;

        return $this;
    }

    /**
     * Gets receiving_account_id
     *
     * @return string
     */
    public function getReceivingAccountId()
    {
        return $this->container['receiving_account_id'];
    }

    /**
     * Sets receiving_account_id
     *
     * @param string $receiving_account_id receivingAccountId
     *
     * @return $this
     */
    public function setReceivingAccountId($receiving_account_id)
    {
        $this->container['receiving_account_id'] = $receiving_account_id;

        return $this;
    }

    /**
     * Gets receiving_bank_link_id
     *
     * @return string
     */
    public function getReceivingBankLinkId()
    {
        return $this->container['receiving_bank_link_id'];
    }

    /**
     * Sets receiving_bank_link_id
     *
     * @param string $receiving_bank_link_id receivingBankLinkId
     *
     * @return $this
     */
    public function setReceivingBankLinkId($receiving_bank_link_id)
    {
        $this->container['receiving_bank_link_id'] = $receiving_bank_link_id;

        return $this;
    }

    /**
     * Gets receiving_portfolio_id
     *
     * @return string
     */
    public function getReceivingPortfolioId()
    {
        return $this->container['receiving_portfolio_id'];
    }

    /**
     * Sets receiving_portfolio_id
     *
     * @param string $receiving_portfolio_id receivingPortfolioId
     *
     * @return $this
     */
    public function setReceivingPortfolioId($receiving_portfolio_id)
    {
        $this->container['receiving_portfolio_id'] = $receiving_portfolio_id;

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
     * Gets start_date
     *
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->container['start_date'];
    }

    /**
     * Sets start_date
     *
     * @param \DateTime $start_date startDate
     *
     * @return $this
     */
    public function setStartDate($start_date)
    {
        $this->container['start_date'] = $start_date;

        return $this;
    }

    /**
     * Gets support_ticket_id
     *
     * @return string
     */
    public function getSupportTicketId()
    {
        return $this->container['support_ticket_id'];
    }

    /**
     * Sets support_ticket_id
     *
     * @param string $support_ticket_id supportTicketId
     *
     * @return $this
     */
    public function setSupportTicketId($support_ticket_id)
    {
        $this->container['support_ticket_id'] = $support_ticket_id;

        return $this;
    }

    /**
     * Gets threshold_amount
     *
     * @return double
     */
    public function getThresholdAmount()
    {
        return $this->container['threshold_amount'];
    }

    /**
     * Sets threshold_amount
     *
     * @param double $threshold_amount thresholdAmount
     *
     * @return $this
     */
    public function setThresholdAmount($threshold_amount)
    {
        $this->container['threshold_amount'] = $threshold_amount;

        return $this;
    }

    /**
     * Gets transfer_id
     *
     * @return string
     */
    public function getTransferId()
    {
        return $this->container['transfer_id'];
    }

    /**
     * Sets transfer_id
     *
     * @param string $transfer_id transferId
     *
     * @return $this
     */
    public function setTransferId($transfer_id)
    {
        $this->container['transfer_id'] = $transfer_id;

        return $this;
    }

    /**
     * Gets transfer_speed
     *
     * @return string
     */
    public function getTransferSpeed()
    {
        return $this->container['transfer_speed'];
    }

    /**
     * Sets transfer_speed
     *
     * @param string $transfer_speed transferSpeed
     *
     * @return $this
     */
    public function setTransferSpeed($transfer_speed)
    {
        $this->container['transfer_speed'] = $transfer_speed;

        return $this;
    }

    /**
     * Gets transfer_type
     *
     * @return string
     */
    public function getTransferType()
    {
        return $this->container['transfer_type'];
    }

    /**
     * Sets transfer_type
     *
     * @param string $transfer_type transferType
     *
     * @return $this
     */
    public function setTransferType($transfer_type)
    {
        $this->container['transfer_type'] = $transfer_type;

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

