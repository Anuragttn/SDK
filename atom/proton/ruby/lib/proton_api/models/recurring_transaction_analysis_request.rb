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
  class RecurringTransactionAnalysisRequest
    attr_accessor :aggregation_account_ids

    attr_accessor :end_date

    attr_accessor :client_id

    attr_accessor :account_ids

    attr_accessor :interval_deviation_threshold

    attr_accessor :analyze_transactions

    attr_accessor :currency_conversion

    attr_accessor :start_date

    attr_accessor :currency_code

    attr_accessor :show_recurring_details

    attr_accessor :scope

    attr_accessor :amount_deviation_threshold

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
        :'aggregation_account_ids' => :'aggregation_account_ids',
        :'end_date' => :'end_date',
        :'client_id' => :'client_id',
        :'account_ids' => :'account_ids',
        :'interval_deviation_threshold' => :'interval_deviation_threshold',
        :'analyze_transactions' => :'analyze_transactions',
        :'currency_conversion' => :'currency_conversion',
        :'start_date' => :'start_date',
        :'currency_code' => :'currency_code',
        :'show_recurring_details' => :'show_recurring_details',
        :'scope' => :'scope',
        :'amount_deviation_threshold' => :'amount_deviation_threshold'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'aggregation_account_ids' => :'Array<String>',
        :'end_date' => :'Date',
        :'client_id' => :'String',
        :'account_ids' => :'Array<String>',
        :'interval_deviation_threshold' => :'Integer',
        :'analyze_transactions' => :'BOOLEAN',
        :'currency_conversion' => :'String',
        :'start_date' => :'Date',
        :'currency_code' => :'String',
        :'show_recurring_details' => :'BOOLEAN',
        :'scope' => :'String',
        :'amount_deviation_threshold' => :'Float'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'aggregation_account_ids')
        if (value = attributes[:'aggregation_account_ids']).is_a?(Array)
          self.aggregation_account_ids = value
        end
      end

      if attributes.has_key?(:'end_date')
        self.end_date = attributes[:'end_date']
      end

      if attributes.has_key?(:'client_id')
        self.client_id = attributes[:'client_id']
      end

      if attributes.has_key?(:'account_ids')
        if (value = attributes[:'account_ids']).is_a?(Array)
          self.account_ids = value
        end
      end

      if attributes.has_key?(:'interval_deviation_threshold')
        self.interval_deviation_threshold = attributes[:'interval_deviation_threshold']
      else
        self.interval_deviation_threshold = 3
      end

      if attributes.has_key?(:'analyze_transactions')
        self.analyze_transactions = attributes[:'analyze_transactions']
      else
        self.analyze_transactions = true
      end

      if attributes.has_key?(:'currency_conversion')
        self.currency_conversion = attributes[:'currency_conversion']
      end

      if attributes.has_key?(:'start_date')
        self.start_date = attributes[:'start_date']
      end

      if attributes.has_key?(:'currency_code')
        self.currency_code = attributes[:'currency_code']
      end

      if attributes.has_key?(:'show_recurring_details')
        self.show_recurring_details = attributes[:'show_recurring_details']
      else
        self.show_recurring_details = false
      end

      if attributes.has_key?(:'scope')
        self.scope = attributes[:'scope']
      else
        self.scope = 'all'
      end

      if attributes.has_key?(:'amount_deviation_threshold')
        self.amount_deviation_threshold = attributes[:'amount_deviation_threshold']
      else
        self.amount_deviation_threshold = 0.05
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if !@interval_deviation_threshold.nil? && @interval_deviation_threshold < 0
        invalid_properties.push('invalid value for "interval_deviation_threshold", must be greater than or equal to 0.')
      end

      if !@amount_deviation_threshold.nil? && @amount_deviation_threshold > 1
        invalid_properties.push('invalid value for "amount_deviation_threshold", must be smaller than or equal to 1.')
      end

      if !@amount_deviation_threshold.nil? && @amount_deviation_threshold < 0
        invalid_properties.push('invalid value for "amount_deviation_threshold", must be greater than or equal to 0.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if !@interval_deviation_threshold.nil? && @interval_deviation_threshold < 0
      scope_validator = EnumAttributeValidator.new('String', ['all', 'external', 'internal'])
      return false unless scope_validator.valid?(@scope)
      return false if !@amount_deviation_threshold.nil? && @amount_deviation_threshold > 1
      return false if !@amount_deviation_threshold.nil? && @amount_deviation_threshold < 0
      true
    end

    # Custom attribute writer method with validation
    # @param [Object] interval_deviation_threshold Value to be assigned
    def interval_deviation_threshold=(interval_deviation_threshold)
      if !interval_deviation_threshold.nil? && interval_deviation_threshold < 0
        fail ArgumentError, 'invalid value for "interval_deviation_threshold", must be greater than or equal to 0.'
      end

      @interval_deviation_threshold = interval_deviation_threshold
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] scope Object to be assigned
    def scope=(scope)
      validator = EnumAttributeValidator.new('String', ['all', 'external', 'internal'])
      unless validator.valid?(scope)
        fail ArgumentError, 'invalid value for "scope", must be one of #{validator.allowable_values}.'
      end
      @scope = scope
    end

    # Custom attribute writer method with validation
    # @param [Object] amount_deviation_threshold Value to be assigned
    def amount_deviation_threshold=(amount_deviation_threshold)
      if !amount_deviation_threshold.nil? && amount_deviation_threshold > 1
        fail ArgumentError, 'invalid value for "amount_deviation_threshold", must be smaller than or equal to 1.'
      end

      if !amount_deviation_threshold.nil? && amount_deviation_threshold < 0
        fail ArgumentError, 'invalid value for "amount_deviation_threshold", must be greater than or equal to 0.'
      end

      @amount_deviation_threshold = amount_deviation_threshold
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          aggregation_account_ids == o.aggregation_account_ids &&
          end_date == o.end_date &&
          client_id == o.client_id &&
          account_ids == o.account_ids &&
          interval_deviation_threshold == o.interval_deviation_threshold &&
          analyze_transactions == o.analyze_transactions &&
          currency_conversion == o.currency_conversion &&
          start_date == o.start_date &&
          currency_code == o.currency_code &&
          show_recurring_details == o.show_recurring_details &&
          scope == o.scope &&
          amount_deviation_threshold == o.amount_deviation_threshold
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [aggregation_account_ids, end_date, client_id, account_ids, interval_deviation_threshold, analyze_transactions, currency_conversion, start_date, currency_code, show_recurring_details, scope, amount_deviation_threshold].hash
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
