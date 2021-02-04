=begin
#Hydrogen Integration API

#The Hydrogen Integration API

OpenAPI spec version: 1.2.1
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.18

=end

require 'date'

module IntegrationApi
  class JsonNode
    attr_accessor :array

    attr_accessor :big_decimal

    attr_accessor :big_integer

    attr_accessor :binary

    attr_accessor :boolean

    attr_accessor :container_node

    attr_accessor :double

    attr_accessor :float

    attr_accessor :floating_point_number

    attr_accessor :int

    attr_accessor :integral_number

    attr_accessor :long

    attr_accessor :missing_node

    attr_accessor :node_type

    attr_accessor :null

    attr_accessor :number

    attr_accessor :object

    attr_accessor :pojo

    attr_accessor :short

    attr_accessor :textual

    attr_accessor :value_node

    class EnumAttributeValidator
      attr_reader :datatype
      attr_reader :allowable_values

      def initialize(datatype, allowable_values)
        @allowable_values = allowable_values.map do |value|
          case datatype.to_s
          when /Integer/i
            value.to_i
          when /Float/i
            value.to_f
          else
            value
          end
        end
      end

      def valid?(value)
        !value || allowable_values.include?(value)
      end
    end

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'array' => :'array',
        :'big_decimal' => :'big_decimal',
        :'big_integer' => :'big_integer',
        :'binary' => :'binary',
        :'boolean' => :'boolean',
        :'container_node' => :'container_node',
        :'double' => :'double',
        :'float' => :'float',
        :'floating_point_number' => :'floating_point_number',
        :'int' => :'int',
        :'integral_number' => :'integral_number',
        :'long' => :'long',
        :'missing_node' => :'missing_node',
        :'node_type' => :'node_type',
        :'null' => :'null',
        :'number' => :'number',
        :'object' => :'object',
        :'pojo' => :'pojo',
        :'short' => :'short',
        :'textual' => :'textual',
        :'value_node' => :'value_node'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'array' => :'BOOLEAN',
        :'big_decimal' => :'BOOLEAN',
        :'big_integer' => :'BOOLEAN',
        :'binary' => :'BOOLEAN',
        :'boolean' => :'BOOLEAN',
        :'container_node' => :'BOOLEAN',
        :'double' => :'BOOLEAN',
        :'float' => :'BOOLEAN',
        :'floating_point_number' => :'BOOLEAN',
        :'int' => :'BOOLEAN',
        :'integral_number' => :'BOOLEAN',
        :'long' => :'BOOLEAN',
        :'missing_node' => :'BOOLEAN',
        :'node_type' => :'String',
        :'null' => :'BOOLEAN',
        :'number' => :'BOOLEAN',
        :'object' => :'BOOLEAN',
        :'pojo' => :'BOOLEAN',
        :'short' => :'BOOLEAN',
        :'textual' => :'BOOLEAN',
        :'value_node' => :'BOOLEAN'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'array')
        self.array = attributes[:'array']
      end

      if attributes.has_key?(:'big_decimal')
        self.big_decimal = attributes[:'big_decimal']
      end

      if attributes.has_key?(:'big_integer')
        self.big_integer = attributes[:'big_integer']
      end

      if attributes.has_key?(:'binary')
        self.binary = attributes[:'binary']
      end

      if attributes.has_key?(:'boolean')
        self.boolean = attributes[:'boolean']
      end

      if attributes.has_key?(:'container_node')
        self.container_node = attributes[:'container_node']
      end

      if attributes.has_key?(:'double')
        self.double = attributes[:'double']
      end

      if attributes.has_key?(:'float')
        self.float = attributes[:'float']
      end

      if attributes.has_key?(:'floating_point_number')
        self.floating_point_number = attributes[:'floating_point_number']
      end

      if attributes.has_key?(:'int')
        self.int = attributes[:'int']
      end

      if attributes.has_key?(:'integral_number')
        self.integral_number = attributes[:'integral_number']
      end

      if attributes.has_key?(:'long')
        self.long = attributes[:'long']
      end

      if attributes.has_key?(:'missing_node')
        self.missing_node = attributes[:'missing_node']
      end

      if attributes.has_key?(:'node_type')
        self.node_type = attributes[:'node_type']
      end

      if attributes.has_key?(:'null')
        self.null = attributes[:'null']
      end

      if attributes.has_key?(:'number')
        self.number = attributes[:'number']
      end

      if attributes.has_key?(:'object')
        self.object = attributes[:'object']
      end

      if attributes.has_key?(:'pojo')
        self.pojo = attributes[:'pojo']
      end

      if attributes.has_key?(:'short')
        self.short = attributes[:'short']
      end

      if attributes.has_key?(:'textual')
        self.textual = attributes[:'textual']
      end

      if attributes.has_key?(:'value_node')
        self.value_node = attributes[:'value_node']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      node_type_validator = EnumAttributeValidator.new('String', ['ARRAY', 'BINARY', 'BOOLEAN', 'MISSING', 'NULL', 'NUMBER', 'OBJECT', 'POJO', 'STRING'])
      return false unless node_type_validator.valid?(@node_type)
      true
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] node_type Object to be assigned
    def node_type=(node_type)
      validator = EnumAttributeValidator.new('String', ['ARRAY', 'BINARY', 'BOOLEAN', 'MISSING', 'NULL', 'NUMBER', 'OBJECT', 'POJO', 'STRING'])
      unless validator.valid?(node_type)
        fail ArgumentError, 'invalid value for "node_type", must be one of #{validator.allowable_values}.'
      end
      @node_type = node_type
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          array == o.array &&
          big_decimal == o.big_decimal &&
          big_integer == o.big_integer &&
          binary == o.binary &&
          boolean == o.boolean &&
          container_node == o.container_node &&
          double == o.double &&
          float == o.float &&
          floating_point_number == o.floating_point_number &&
          int == o.int &&
          integral_number == o.integral_number &&
          long == o.long &&
          missing_node == o.missing_node &&
          node_type == o.node_type &&
          null == o.null &&
          number == o.number &&
          object == o.object &&
          pojo == o.pojo &&
          short == o.short &&
          textual == o.textual &&
          value_node == o.value_node
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [array, big_decimal, big_integer, binary, boolean, container_node, double, float, floating_point_number, int, integral_number, long, missing_node, node_type, null, number, object, pojo, short, textual, value_node].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      self.class.swagger_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end # or else data not found in attributes(hash), not an issue as the data can be optional
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :DateTime
        (value)
      when :Date
        (value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :BOOLEAN
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        temp_model = IntegrationApi.const_get(type).new
        temp_model.build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end

  end
end
