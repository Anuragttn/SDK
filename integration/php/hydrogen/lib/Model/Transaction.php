<?php
/**
 * Transaction
 *
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen\integration
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Hydrogen Integration API
 *
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.18
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace com\hydrogen\integration\Model;

use \ArrayAccess;
use \com\hydrogen\integration\ObjectSerializer;

/**
 * Transaction Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\integration
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class Transaction implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'Transaction';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'account_amount' => 'double',
        'account_balance' => 'double',
        'account_type' => 'string',
        'comment' => 'string',
        'dividend' => '\com\hydrogen\integration\Model\Dividend',
        'dividend_tax' => '\com\hydrogen\integration\Model\DividendTax',
        'dnb' => 'bool',
        'fee_base' => 'double',
        'fee_exchange' => 'double',
        'fee_sec' => 'double',
        'fee_taf' => 'double',
        'fee_xtra_shares' => 'double',
        'fill_px' => 'double',
        'fill_qty' => 'double',
        'fin_tran_id' => 'string',
        'fin_tran_type_id' => 'string',
        'instrument' => '\com\hydrogen\integration\Model\Instrument',
        'merger_acquisition' => '\com\hydrogen\integration\Model\MergerAcquisition',
        'order_id' => 'string',
        'position_delta' => 'double',
        'system_amount' => 'double',
        'tran_when' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'account_amount' => 'double',
        'account_balance' => 'double',
        'account_type' => null,
        'comment' => null,
        'dividend' => null,
        'dividend_tax' => null,
        'dnb' => null,
        'fee_base' => 'double',
        'fee_exchange' => 'double',
        'fee_sec' => 'double',
        'fee_taf' => 'double',
        'fee_xtra_shares' => 'double',
        'fill_px' => 'double',
        'fill_qty' => 'double',
        'fin_tran_id' => null,
        'fin_tran_type_id' => null,
        'instrument' => null,
        'merger_acquisition' => null,
        'order_id' => null,
        'position_delta' => 'double',
        'system_amount' => 'double',
        'tran_when' => 'date-time'
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
        'account_amount' => 'account_amount',
        'account_balance' => 'account_balance',
        'account_type' => 'account_type',
        'comment' => 'comment',
        'dividend' => 'dividend',
        'dividend_tax' => 'dividend_tax',
        'dnb' => 'dnb',
        'fee_base' => 'fee_base',
        'fee_exchange' => 'fee_exchange',
        'fee_sec' => 'fee_sec',
        'fee_taf' => 'fee_taf',
        'fee_xtra_shares' => 'fee_xtra_shares',
        'fill_px' => 'fill_px',
        'fill_qty' => 'fill_qty',
        'fin_tran_id' => 'fin_tran_id',
        'fin_tran_type_id' => 'fin_tran_type_id',
        'instrument' => 'instrument',
        'merger_acquisition' => 'merger_acquisition',
        'order_id' => 'order_id',
        'position_delta' => 'position_delta',
        'system_amount' => 'system_amount',
        'tran_when' => 'tran_when'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'account_amount' => 'setAccountAmount',
        'account_balance' => 'setAccountBalance',
        'account_type' => 'setAccountType',
        'comment' => 'setComment',
        'dividend' => 'setDividend',
        'dividend_tax' => 'setDividendTax',
        'dnb' => 'setDnb',
        'fee_base' => 'setFeeBase',
        'fee_exchange' => 'setFeeExchange',
        'fee_sec' => 'setFeeSec',
        'fee_taf' => 'setFeeTaf',
        'fee_xtra_shares' => 'setFeeXtraShares',
        'fill_px' => 'setFillPx',
        'fill_qty' => 'setFillQty',
        'fin_tran_id' => 'setFinTranId',
        'fin_tran_type_id' => 'setFinTranTypeId',
        'instrument' => 'setInstrument',
        'merger_acquisition' => 'setMergerAcquisition',
        'order_id' => 'setOrderId',
        'position_delta' => 'setPositionDelta',
        'system_amount' => 'setSystemAmount',
        'tran_when' => 'setTranWhen'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'account_amount' => 'getAccountAmount',
        'account_balance' => 'getAccountBalance',
        'account_type' => 'getAccountType',
        'comment' => 'getComment',
        'dividend' => 'getDividend',
        'dividend_tax' => 'getDividendTax',
        'dnb' => 'getDnb',
        'fee_base' => 'getFeeBase',
        'fee_exchange' => 'getFeeExchange',
        'fee_sec' => 'getFeeSec',
        'fee_taf' => 'getFeeTaf',
        'fee_xtra_shares' => 'getFeeXtraShares',
        'fill_px' => 'getFillPx',
        'fill_qty' => 'getFillQty',
        'fin_tran_id' => 'getFinTranId',
        'fin_tran_type_id' => 'getFinTranTypeId',
        'instrument' => 'getInstrument',
        'merger_acquisition' => 'getMergerAcquisition',
        'order_id' => 'getOrderId',
        'position_delta' => 'getPositionDelta',
        'system_amount' => 'getSystemAmount',
        'tran_when' => 'getTranWhen'
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
        $this->container['account_amount'] = isset($data['account_amount']) ? $data['account_amount'] : null;
        $this->container['account_balance'] = isset($data['account_balance']) ? $data['account_balance'] : null;
        $this->container['account_type'] = isset($data['account_type']) ? $data['account_type'] : null;
        $this->container['comment'] = isset($data['comment']) ? $data['comment'] : null;
        $this->container['dividend'] = isset($data['dividend']) ? $data['dividend'] : null;
        $this->container['dividend_tax'] = isset($data['dividend_tax']) ? $data['dividend_tax'] : null;
        $this->container['dnb'] = isset($data['dnb']) ? $data['dnb'] : null;
        $this->container['fee_base'] = isset($data['fee_base']) ? $data['fee_base'] : null;
        $this->container['fee_exchange'] = isset($data['fee_exchange']) ? $data['fee_exchange'] : null;
        $this->container['fee_sec'] = isset($data['fee_sec']) ? $data['fee_sec'] : null;
        $this->container['fee_taf'] = isset($data['fee_taf']) ? $data['fee_taf'] : null;
        $this->container['fee_xtra_shares'] = isset($data['fee_xtra_shares']) ? $data['fee_xtra_shares'] : null;
        $this->container['fill_px'] = isset($data['fill_px']) ? $data['fill_px'] : null;
        $this->container['fill_qty'] = isset($data['fill_qty']) ? $data['fill_qty'] : null;
        $this->container['fin_tran_id'] = isset($data['fin_tran_id']) ? $data['fin_tran_id'] : null;
        $this->container['fin_tran_type_id'] = isset($data['fin_tran_type_id']) ? $data['fin_tran_type_id'] : null;
        $this->container['instrument'] = isset($data['instrument']) ? $data['instrument'] : null;
        $this->container['merger_acquisition'] = isset($data['merger_acquisition']) ? $data['merger_acquisition'] : null;
        $this->container['order_id'] = isset($data['order_id']) ? $data['order_id'] : null;
        $this->container['position_delta'] = isset($data['position_delta']) ? $data['position_delta'] : null;
        $this->container['system_amount'] = isset($data['system_amount']) ? $data['system_amount'] : null;
        $this->container['tran_when'] = isset($data['tran_when']) ? $data['tran_when'] : null;
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
     * Gets account_amount
     *
     * @return double
     */
    public function getAccountAmount()
    {
        return $this->container['account_amount'];
    }

    /**
     * Sets account_amount
     *
     * @param double $account_amount account_amount
     *
     * @return $this
     */
    public function setAccountAmount($account_amount)
    {
        $this->container['account_amount'] = $account_amount;

        return $this;
    }

    /**
     * Gets account_balance
     *
     * @return double
     */
    public function getAccountBalance()
    {
        return $this->container['account_balance'];
    }

    /**
     * Sets account_balance
     *
     * @param double $account_balance account_balance
     *
     * @return $this
     */
    public function setAccountBalance($account_balance)
    {
        $this->container['account_balance'] = $account_balance;

        return $this;
    }

    /**
     * Gets account_type
     *
     * @return string
     */
    public function getAccountType()
    {
        return $this->container['account_type'];
    }

    /**
     * Sets account_type
     *
     * @param string $account_type account_type
     *
     * @return $this
     */
    public function setAccountType($account_type)
    {
        $this->container['account_type'] = $account_type;

        return $this;
    }

    /**
     * Gets comment
     *
     * @return string
     */
    public function getComment()
    {
        return $this->container['comment'];
    }

    /**
     * Sets comment
     *
     * @param string $comment comment
     *
     * @return $this
     */
    public function setComment($comment)
    {
        $this->container['comment'] = $comment;

        return $this;
    }

    /**
     * Gets dividend
     *
     * @return \com\hydrogen\integration\Model\Dividend
     */
    public function getDividend()
    {
        return $this->container['dividend'];
    }

    /**
     * Sets dividend
     *
     * @param \com\hydrogen\integration\Model\Dividend $dividend dividend
     *
     * @return $this
     */
    public function setDividend($dividend)
    {
        $this->container['dividend'] = $dividend;

        return $this;
    }

    /**
     * Gets dividend_tax
     *
     * @return \com\hydrogen\integration\Model\DividendTax
     */
    public function getDividendTax()
    {
        return $this->container['dividend_tax'];
    }

    /**
     * Sets dividend_tax
     *
     * @param \com\hydrogen\integration\Model\DividendTax $dividend_tax dividend_tax
     *
     * @return $this
     */
    public function setDividendTax($dividend_tax)
    {
        $this->container['dividend_tax'] = $dividend_tax;

        return $this;
    }

    /**
     * Gets dnb
     *
     * @return bool
     */
    public function getDnb()
    {
        return $this->container['dnb'];
    }

    /**
     * Sets dnb
     *
     * @param bool $dnb dnb
     *
     * @return $this
     */
    public function setDnb($dnb)
    {
        $this->container['dnb'] = $dnb;

        return $this;
    }

    /**
     * Gets fee_base
     *
     * @return double
     */
    public function getFeeBase()
    {
        return $this->container['fee_base'];
    }

    /**
     * Sets fee_base
     *
     * @param double $fee_base fee_base
     *
     * @return $this
     */
    public function setFeeBase($fee_base)
    {
        $this->container['fee_base'] = $fee_base;

        return $this;
    }

    /**
     * Gets fee_exchange
     *
     * @return double
     */
    public function getFeeExchange()
    {
        return $this->container['fee_exchange'];
    }

    /**
     * Sets fee_exchange
     *
     * @param double $fee_exchange fee_exchange
     *
     * @return $this
     */
    public function setFeeExchange($fee_exchange)
    {
        $this->container['fee_exchange'] = $fee_exchange;

        return $this;
    }

    /**
     * Gets fee_sec
     *
     * @return double
     */
    public function getFeeSec()
    {
        return $this->container['fee_sec'];
    }

    /**
     * Sets fee_sec
     *
     * @param double $fee_sec fee_sec
     *
     * @return $this
     */
    public function setFeeSec($fee_sec)
    {
        $this->container['fee_sec'] = $fee_sec;

        return $this;
    }

    /**
     * Gets fee_taf
     *
     * @return double
     */
    public function getFeeTaf()
    {
        return $this->container['fee_taf'];
    }

    /**
     * Sets fee_taf
     *
     * @param double $fee_taf fee_taf
     *
     * @return $this
     */
    public function setFeeTaf($fee_taf)
    {
        $this->container['fee_taf'] = $fee_taf;

        return $this;
    }

    /**
     * Gets fee_xtra_shares
     *
     * @return double
     */
    public function getFeeXtraShares()
    {
        return $this->container['fee_xtra_shares'];
    }

    /**
     * Sets fee_xtra_shares
     *
     * @param double $fee_xtra_shares fee_xtra_shares
     *
     * @return $this
     */
    public function setFeeXtraShares($fee_xtra_shares)
    {
        $this->container['fee_xtra_shares'] = $fee_xtra_shares;

        return $this;
    }

    /**
     * Gets fill_px
     *
     * @return double
     */
    public function getFillPx()
    {
        return $this->container['fill_px'];
    }

    /**
     * Sets fill_px
     *
     * @param double $fill_px fill_px
     *
     * @return $this
     */
    public function setFillPx($fill_px)
    {
        $this->container['fill_px'] = $fill_px;

        return $this;
    }

    /**
     * Gets fill_qty
     *
     * @return double
     */
    public function getFillQty()
    {
        return $this->container['fill_qty'];
    }

    /**
     * Sets fill_qty
     *
     * @param double $fill_qty fill_qty
     *
     * @return $this
     */
    public function setFillQty($fill_qty)
    {
        $this->container['fill_qty'] = $fill_qty;

        return $this;
    }

    /**
     * Gets fin_tran_id
     *
     * @return string
     */
    public function getFinTranId()
    {
        return $this->container['fin_tran_id'];
    }

    /**
     * Sets fin_tran_id
     *
     * @param string $fin_tran_id fin_tran_id
     *
     * @return $this
     */
    public function setFinTranId($fin_tran_id)
    {
        $this->container['fin_tran_id'] = $fin_tran_id;

        return $this;
    }

    /**
     * Gets fin_tran_type_id
     *
     * @return string
     */
    public function getFinTranTypeId()
    {
        return $this->container['fin_tran_type_id'];
    }

    /**
     * Sets fin_tran_type_id
     *
     * @param string $fin_tran_type_id fin_tran_type_id
     *
     * @return $this
     */
    public function setFinTranTypeId($fin_tran_type_id)
    {
        $this->container['fin_tran_type_id'] = $fin_tran_type_id;

        return $this;
    }

    /**
     * Gets instrument
     *
     * @return \com\hydrogen\integration\Model\Instrument
     */
    public function getInstrument()
    {
        return $this->container['instrument'];
    }

    /**
     * Sets instrument
     *
     * @param \com\hydrogen\integration\Model\Instrument $instrument instrument
     *
     * @return $this
     */
    public function setInstrument($instrument)
    {
        $this->container['instrument'] = $instrument;

        return $this;
    }

    /**
     * Gets merger_acquisition
     *
     * @return \com\hydrogen\integration\Model\MergerAcquisition
     */
    public function getMergerAcquisition()
    {
        return $this->container['merger_acquisition'];
    }

    /**
     * Sets merger_acquisition
     *
     * @param \com\hydrogen\integration\Model\MergerAcquisition $merger_acquisition merger_acquisition
     *
     * @return $this
     */
    public function setMergerAcquisition($merger_acquisition)
    {
        $this->container['merger_acquisition'] = $merger_acquisition;

        return $this;
    }

    /**
     * Gets order_id
     *
     * @return string
     */
    public function getOrderId()
    {
        return $this->container['order_id'];
    }

    /**
     * Sets order_id
     *
     * @param string $order_id order_id
     *
     * @return $this
     */
    public function setOrderId($order_id)
    {
        $this->container['order_id'] = $order_id;

        return $this;
    }

    /**
     * Gets position_delta
     *
     * @return double
     */
    public function getPositionDelta()
    {
        return $this->container['position_delta'];
    }

    /**
     * Sets position_delta
     *
     * @param double $position_delta position_delta
     *
     * @return $this
     */
    public function setPositionDelta($position_delta)
    {
        $this->container['position_delta'] = $position_delta;

        return $this;
    }

    /**
     * Gets system_amount
     *
     * @return double
     */
    public function getSystemAmount()
    {
        return $this->container['system_amount'];
    }

    /**
     * Sets system_amount
     *
     * @param double $system_amount system_amount
     *
     * @return $this
     */
    public function setSystemAmount($system_amount)
    {
        $this->container['system_amount'] = $system_amount;

        return $this;
    }

    /**
     * Gets tran_when
     *
     * @return \DateTime
     */
    public function getTranWhen()
    {
        return $this->container['tran_when'];
    }

    /**
     * Sets tran_when
     *
     * @param \DateTime $tran_when tran_when
     *
     * @return $this
     */
    public function setTranWhen($tran_when)
    {
        $this->container['tran_when'] = $tran_when;

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


