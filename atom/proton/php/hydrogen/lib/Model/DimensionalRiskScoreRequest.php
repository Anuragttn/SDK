<?php
/**
 * DimensionalRiskScoreRequest
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
 * DimensionalRiskScoreRequest Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\proton
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class DimensionalRiskScoreRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'dimensionalRiskScoreRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'dim_weights' => 'float[]',
        'answer_weights' => 'float[]',
        'client_id' => 'string',
        'dims' => 'string[]',
        'answer_dims' => 'string[][]',
        'answers' => 'float[]',
        'max_answers' => 'float[]',
        'questionnaire_id' => 'string',
        'post_score' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'dim_weights' => 'float',
        'answer_weights' => 'float',
        'client_id' => 'uuid',
        'dims' => null,
        'answer_dims' => null,
        'answers' => null,
        'max_answers' => null,
        'questionnaire_id' => 'uuid',
        'post_score' => null
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
        'dim_weights' => 'dim_weights',
        'answer_weights' => 'answer_weights',
        'client_id' => 'client_id',
        'dims' => 'dims',
        'answer_dims' => 'answer_dims',
        'answers' => 'answers',
        'max_answers' => 'max_answers',
        'questionnaire_id' => 'questionnaire_id',
        'post_score' => 'post_score'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'dim_weights' => 'setDimWeights',
        'answer_weights' => 'setAnswerWeights',
        'client_id' => 'setClientId',
        'dims' => 'setDims',
        'answer_dims' => 'setAnswerDims',
        'answers' => 'setAnswers',
        'max_answers' => 'setMaxAnswers',
        'questionnaire_id' => 'setQuestionnaireId',
        'post_score' => 'setPostScore'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'dim_weights' => 'getDimWeights',
        'answer_weights' => 'getAnswerWeights',
        'client_id' => 'getClientId',
        'dims' => 'getDims',
        'answer_dims' => 'getAnswerDims',
        'answers' => 'getAnswers',
        'max_answers' => 'getMaxAnswers',
        'questionnaire_id' => 'getQuestionnaireId',
        'post_score' => 'getPostScore'
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
        $this->container['dim_weights'] = isset($data['dim_weights']) ? $data['dim_weights'] : null;
        $this->container['answer_weights'] = isset($data['answer_weights']) ? $data['answer_weights'] : null;
        $this->container['client_id'] = isset($data['client_id']) ? $data['client_id'] : null;
        $this->container['dims'] = isset($data['dims']) ? $data['dims'] : null;
        $this->container['answer_dims'] = isset($data['answer_dims']) ? $data['answer_dims'] : null;
        $this->container['answers'] = isset($data['answers']) ? $data['answers'] : null;
        $this->container['max_answers'] = isset($data['max_answers']) ? $data['max_answers'] : null;
        $this->container['questionnaire_id'] = isset($data['questionnaire_id']) ? $data['questionnaire_id'] : null;
        $this->container['post_score'] = isset($data['post_score']) ? $data['post_score'] : false;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['dims'] === null) {
            $invalidProperties[] = "'dims' can't be null";
        }
        if ($this->container['answer_dims'] === null) {
            $invalidProperties[] = "'answer_dims' can't be null";
        }
        if ($this->container['max_answers'] === null) {
            $invalidProperties[] = "'max_answers' can't be null";
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
     * Gets dim_weights
     *
     * @return float[]
     */
    public function getDimWeights()
    {
        return $this->container['dim_weights'];
    }

    /**
     * Sets dim_weights
     *
     * @param float[] $dim_weights dim_weights
     *
     * @return $this
     */
    public function setDimWeights($dim_weights)
    {
        $this->container['dim_weights'] = $dim_weights;

        return $this;
    }

    /**
     * Gets answer_weights
     *
     * @return float[]
     */
    public function getAnswerWeights()
    {
        return $this->container['answer_weights'];
    }

    /**
     * Sets answer_weights
     *
     * @param float[] $answer_weights answer_weights
     *
     * @return $this
     */
    public function setAnswerWeights($answer_weights)
    {
        $this->container['answer_weights'] = $answer_weights;

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
     * Gets dims
     *
     * @return string[]
     */
    public function getDims()
    {
        return $this->container['dims'];
    }

    /**
     * Sets dims
     *
     * @param string[] $dims dims
     *
     * @return $this
     */
    public function setDims($dims)
    {
        $this->container['dims'] = $dims;

        return $this;
    }

    /**
     * Gets answer_dims
     *
     * @return string[][]
     */
    public function getAnswerDims()
    {
        return $this->container['answer_dims'];
    }

    /**
     * Sets answer_dims
     *
     * @param string[][] $answer_dims answer_dims
     *
     * @return $this
     */
    public function setAnswerDims($answer_dims)
    {
        $this->container['answer_dims'] = $answer_dims;

        return $this;
    }

    /**
     * Gets answers
     *
     * @return float[]
     */
    public function getAnswers()
    {
        return $this->container['answers'];
    }

    /**
     * Sets answers
     *
     * @param float[] $answers answers
     *
     * @return $this
     */
    public function setAnswers($answers)
    {
        $this->container['answers'] = $answers;

        return $this;
    }

    /**
     * Gets max_answers
     *
     * @return float[]
     */
    public function getMaxAnswers()
    {
        return $this->container['max_answers'];
    }

    /**
     * Sets max_answers
     *
     * @param float[] $max_answers max_answers
     *
     * @return $this
     */
    public function setMaxAnswers($max_answers)
    {
        $this->container['max_answers'] = $max_answers;

        return $this;
    }

    /**
     * Gets questionnaire_id
     *
     * @return string
     */
    public function getQuestionnaireId()
    {
        return $this->container['questionnaire_id'];
    }

    /**
     * Sets questionnaire_id
     *
     * @param string $questionnaire_id questionnaire_id
     *
     * @return $this
     */
    public function setQuestionnaireId($questionnaire_id)
    {
        $this->container['questionnaire_id'] = $questionnaire_id;

        return $this;
    }

    /**
     * Gets post_score
     *
     * @return bool
     */
    public function getPostScore()
    {
        return $this->container['post_score'];
    }

    /**
     * Sets post_score
     *
     * @param bool $post_score post_score
     *
     * @return $this
     */
    public function setPostScore($post_score)
    {
        $this->container['post_score'] = $post_score;

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

