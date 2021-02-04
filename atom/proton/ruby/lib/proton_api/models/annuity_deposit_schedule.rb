=begin
#Hydrogen Proton API

#Financial engineering module of Hydrogen Atom

OpenAPI spec version: 1.8.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.17

=end

require 'date'

module ProtonApi
  class AnnuityDepositSchedule
    attr_accessor :adjust_deposit_for_inflation

    attr_accessor :deposit_frequency_interval

    attr_accessor :deposit_amount

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
        :'adjust_deposit_for_inflation' => :'adjust_deposit_for_inflation',
        :'deposit_frequency_interval' => :'deposit_frequency_interval',
        :'deposit_amount' => :'deposit_amount'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'adjust_deposit_for_inflation' => :'BOOLEAN',
        :'deposit_frequency_interval' => :'String',
        :'deposit_amount' => :'Float'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'adjust_deposit_for_inflation')
        self.adjust_deposit_for_inflation = attributes[:'adjust_deposit_for_inflation']
      else
        self.adjust_deposit_for_inflation = true
      end

      if attributes.has_key?(:'deposit_frequency_interval')
        self.deposit_frequency_interval = attributes[:'deposit_frequency_interval']
      else
        self.deposit_frequency_interval = 'year'
      end

      if attributes.has_key?(:'deposit_amount')
        self.deposit_amount = attributes[:'deposit_amount']
      else
        self.deposit_amount = 0.0
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if !@deposit_amount.nil? && @deposit_amount < 0
        invalid_properties.push('invalid value for "deposit_amount", must be greater than or equal to 0.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      deposit_frequency_interval_validator = EnumAttributeValidator.new('String', ['year', 'quarter', 'month', 'week', 'day'])
      return false unless deposit_frequency_interval_validator.valid?(@deposit_frequency_interval)
      return false if !@deposit_amount.nil? && @deposit_amount < 0
      true
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] deposit_frequency_interval Object to be assigned
    def deposit_frequency_interval=(deposit_frequency_interval)
      validator = EnumAttributeValidator.new('String', ['year', 'quarter', 'month', 'week', 'day'])
      unless validator.valid?(deposit_frequency_interval)
        fail ArgumentError, 'invalid value for "deposit_frequency_interval", must be one of #{validator.allowable_values}.'
      end
      @deposit_frequency_interval = deposit_frequency_interval
    end

    # Custom attribute writer method with validation
    # @param [Object] deposit_amount Value to be assigned
    def deposit_amount=(deposit_amount)
      if !deposit_amount.nil? && deposit_amount < 0
        fail ArgumentError, 'invalid value for "deposit_amount", must be greater than or equal to 0.'
      end

      @deposit_amount = deposit_amount
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          adjust_deposit_for_inflation == o.adjust_deposit_for_inflation &&
          deposit_frequency_interval == o.deposit_frequency_interval &&
          deposit_amount == o.deposit_amount
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [adjust_deposit_for_inflation, deposit_frequency_interval, deposit_amount].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
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
        DateTime.parse(value)
      when :Date
        Date.parse(value)
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
        temp_model = ProtonApi.const_get(type).new
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
        next if value.nil?
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
