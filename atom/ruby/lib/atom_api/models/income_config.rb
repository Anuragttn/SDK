=begin
#Hydrogen Atom API

#The Hydrogen Atom API

OpenAPI spec version: 1.0.1
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.8-SNAPSHOT

=end

require 'date'

module AtomApi
  class IncomeConfig
    # The annual net take-home pay
    attr_accessor :annual_net_take_home_pay

    # The percentage of income covered
    attr_accessor :percentage_of_income_covered

    # The income benefit duration
    attr_accessor :income_benefit_duration

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'annual_net_take_home_pay' => :'annual_net_take_home_pay',
        :'percentage_of_income_covered' => :'percentage_of_income_covered',
        :'income_benefit_duration' => :'income_benefit_duration'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'annual_net_take_home_pay' => :'Float',
        :'percentage_of_income_covered' => :'Float',
        :'income_benefit_duration' => :'Float'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'annual_net_take_home_pay')
        self.annual_net_take_home_pay = attributes[:'annual_net_take_home_pay']
      end

      if attributes.has_key?(:'percentage_of_income_covered')
        self.percentage_of_income_covered = attributes[:'percentage_of_income_covered']
      end

      if attributes.has_key?(:'income_benefit_duration')
        self.income_benefit_duration = attributes[:'income_benefit_duration']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @annual_net_take_home_pay.nil?
        invalid_properties.push('invalid value for "annual_net_take_home_pay", annual_net_take_home_pay cannot be nil.')
      end

      if @annual_net_take_home_pay < 0
        invalid_properties.push('invalid value for "annual_net_take_home_pay", must be greater than or equal to 0.')
      end

      if !@percentage_of_income_covered.nil? && @percentage_of_income_covered > 1
        invalid_properties.push('invalid value for "percentage_of_income_covered", must be smaller than or equal to 1.')
      end

      if !@percentage_of_income_covered.nil? && @percentage_of_income_covered <= 0
        invalid_properties.push('invalid value for "percentage_of_income_covered", must be greater than 0.')
      end

      if !@income_benefit_duration.nil? && @income_benefit_duration <= 0
        invalid_properties.push('invalid value for "income_benefit_duration", must be greater than 0.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @annual_net_take_home_pay.nil?
      return false if @annual_net_take_home_pay < 0
      return false if !@percentage_of_income_covered.nil? && @percentage_of_income_covered > 1
      return false if !@percentage_of_income_covered.nil? && @percentage_of_income_covered <= 0
      return false if !@income_benefit_duration.nil? && @income_benefit_duration <= 0
      true
    end

    # Custom attribute writer method with validation
    # @param [Object] annual_net_take_home_pay Value to be assigned
    def annual_net_take_home_pay=(annual_net_take_home_pay)
      if annual_net_take_home_pay.nil?
        fail ArgumentError, 'annual_net_take_home_pay cannot be nil'
      end

      if annual_net_take_home_pay < 0
        fail ArgumentError, 'invalid value for "annual_net_take_home_pay", must be greater than or equal to 0.'
      end

      @annual_net_take_home_pay = annual_net_take_home_pay
    end

    # Custom attribute writer method with validation
    # @param [Object] percentage_of_income_covered Value to be assigned
    def percentage_of_income_covered=(percentage_of_income_covered)
      if !percentage_of_income_covered.nil? && percentage_of_income_covered > 1
        fail ArgumentError, 'invalid value for "percentage_of_income_covered", must be smaller than or equal to 1.'
      end

      if !percentage_of_income_covered.nil? && percentage_of_income_covered <= 0
        fail ArgumentError, 'invalid value for "percentage_of_income_covered", must be greater than 0.'
      end

      @percentage_of_income_covered = percentage_of_income_covered
    end

    # Custom attribute writer method with validation
    # @param [Object] income_benefit_duration Value to be assigned
    def income_benefit_duration=(income_benefit_duration)
      if !income_benefit_duration.nil? && income_benefit_duration <= 0
        fail ArgumentError, 'invalid value for "income_benefit_duration", must be greater than 0.'
      end

      @income_benefit_duration = income_benefit_duration
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          annual_net_take_home_pay == o.annual_net_take_home_pay &&
          percentage_of_income_covered == o.percentage_of_income_covered &&
          income_benefit_duration == o.income_benefit_duration
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [annual_net_take_home_pay, percentage_of_income_covered, income_benefit_duration].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      self.class.swagger_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the the attribute
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
        temp_model = AtomApi.const_get(type).new
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
