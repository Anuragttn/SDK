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
  class FinancialStatementAnalysisRequest
    attr_accessor :period_length

    attr_accessor :period_month

    attr_accessor :end_date

    attr_accessor :client_id

    attr_accessor :accounting_method

    attr_accessor :period_year

    attr_accessor :currency_conversion

    attr_accessor :history_frequency_interval

    attr_accessor :start_date

    attr_accessor :period_type

    attr_accessor :currency_code

    attr_accessor :show_history

    attr_accessor :stat_names

    attr_accessor :period_quarter

    attr_accessor :statement_type

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
        :'period_length' => :'period_length',
        :'period_month' => :'period_month',
        :'end_date' => :'end_date',
        :'client_id' => :'client_id',
        :'accounting_method' => :'accounting_method',
        :'period_year' => :'period_year',
        :'currency_conversion' => :'currency_conversion',
        :'history_frequency_interval' => :'history_frequency_interval',
        :'start_date' => :'start_date',
        :'period_type' => :'period_type',
        :'currency_code' => :'currency_code',
        :'show_history' => :'show_history',
        :'stat_names' => :'stat_names',
        :'period_quarter' => :'period_quarter',
        :'statement_type' => :'statement_type'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'period_length' => :'String',
        :'period_month' => :'Integer',
        :'end_date' => :'Date',
        :'client_id' => :'String',
        :'accounting_method' => :'String',
        :'period_year' => :'Integer',
        :'currency_conversion' => :'String',
        :'history_frequency_interval' => :'String',
        :'start_date' => :'Date',
        :'period_type' => :'String',
        :'currency_code' => :'String',
        :'show_history' => :'BOOLEAN',
        :'stat_names' => :'Array<String>',
        :'period_quarter' => :'Integer',
        :'statement_type' => :'String'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'period_length')
        self.period_length = attributes[:'period_length']
      else
        self.period_length = 'quarterly'
      end

      if attributes.has_key?(:'period_month')
        self.period_month = attributes[:'period_month']
      end

      if attributes.has_key?(:'end_date')
        self.end_date = attributes[:'end_date']
      end

      if attributes.has_key?(:'client_id')
        self.client_id = attributes[:'client_id']
      end

      if attributes.has_key?(:'accounting_method')
        self.accounting_method = attributes[:'accounting_method']
      end

      if attributes.has_key?(:'period_year')
        self.period_year = attributes[:'period_year']
      end

      if attributes.has_key?(:'currency_conversion')
        self.currency_conversion = attributes[:'currency_conversion']
      end

      if attributes.has_key?(:'history_frequency_interval')
        self.history_frequency_interval = attributes[:'history_frequency_interval']
      else
        self.history_frequency_interval = 'month'
      end

      if attributes.has_key?(:'start_date')
        self.start_date = attributes[:'start_date']
      end

      if attributes.has_key?(:'period_type')
        self.period_type = attributes[:'period_type']
      end

      if attributes.has_key?(:'currency_code')
        self.currency_code = attributes[:'currency_code']
      end

      if attributes.has_key?(:'show_history')
        self.show_history = attributes[:'show_history']
      else
        self.show_history = false
      end

      if attributes.has_key?(:'stat_names')
        if (value = attributes[:'stat_names']).is_a?(Array)
          self.stat_names = value
        end
      end

      if attributes.has_key?(:'period_quarter')
        self.period_quarter = attributes[:'period_quarter']
      end

      if attributes.has_key?(:'statement_type')
        self.statement_type = attributes[:'statement_type']
      else
        self.statement_type = 'all'
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if !@period_month.nil? && @period_month > 12
        invalid_properties.push('invalid value for "period_month", must be smaller than or equal to 12.')
      end

      if !@period_month.nil? && @period_month < 1
        invalid_properties.push('invalid value for "period_month", must be greater than or equal to 1.')
      end

      if @accounting_method.nil?
        invalid_properties.push('invalid value for "accounting_method", accounting_method cannot be nil.')
      end

      if !@period_quarter.nil? && @period_quarter > 4
        invalid_properties.push('invalid value for "period_quarter", must be smaller than or equal to 4.')
      end

      if !@period_quarter.nil? && @period_quarter < 1
        invalid_properties.push('invalid value for "period_quarter", must be greater than or equal to 1.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      period_length_validator = EnumAttributeValidator.new('String', ['annual', 'quarterly', 'monthly', 'ytd', 'qtd', 'mtd'])
      return false unless period_length_validator.valid?(@period_length)
      return false if !@period_month.nil? && @period_month > 12
      return false if !@period_month.nil? && @period_month < 1
      return false if @accounting_method.nil?
      accounting_method_validator = EnumAttributeValidator.new('String', ['accrual', 'cash'])
      return false unless accounting_method_validator.valid?(@accounting_method)
      history_frequency_interval_validator = EnumAttributeValidator.new('String', ['day', 'week', 'month', 'quarter', 'year'])
      return false unless history_frequency_interval_validator.valid?(@history_frequency_interval)
      period_type_validator = EnumAttributeValidator.new('String', ['calendar', 'fiscal'])
      return false unless period_type_validator.valid?(@period_type)
      return false if !@period_quarter.nil? && @period_quarter > 4
      return false if !@period_quarter.nil? && @period_quarter < 1
      statement_type_validator = EnumAttributeValidator.new('String', ['income_statement', 'balance_sheet', 'all'])
      return false unless statement_type_validator.valid?(@statement_type)
      true
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] period_length Object to be assigned
    def period_length=(period_length)
      validator = EnumAttributeValidator.new('String', ['annual', 'quarterly', 'monthly', 'ytd', 'qtd', 'mtd'])
      unless validator.valid?(period_length)
        fail ArgumentError, 'invalid value for "period_length", must be one of #{validator.allowable_values}.'
      end
      @period_length = period_length
    end

    # Custom attribute writer method with validation
    # @param [Object] period_month Value to be assigned
    def period_month=(period_month)
      if !period_month.nil? && period_month > 12
        fail ArgumentError, 'invalid value for "period_month", must be smaller than or equal to 12.'
      end

      if !period_month.nil? && period_month < 1
        fail ArgumentError, 'invalid value for "period_month", must be greater than or equal to 1.'
      end

      @period_month = period_month
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] accounting_method Object to be assigned
    def accounting_method=(accounting_method)
      validator = EnumAttributeValidator.new('String', ['accrual', 'cash'])
      unless validator.valid?(accounting_method)
        fail ArgumentError, 'invalid value for "accounting_method", must be one of #{validator.allowable_values}.'
      end
      @accounting_method = accounting_method
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] history_frequency_interval Object to be assigned
    def history_frequency_interval=(history_frequency_interval)
      validator = EnumAttributeValidator.new('String', ['day', 'week', 'month', 'quarter', 'year'])
      unless validator.valid?(history_frequency_interval)
        fail ArgumentError, 'invalid value for "history_frequency_interval", must be one of #{validator.allowable_values}.'
      end
      @history_frequency_interval = history_frequency_interval
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] period_type Object to be assigned
    def period_type=(period_type)
      validator = EnumAttributeValidator.new('String', ['calendar', 'fiscal'])
      unless validator.valid?(period_type)
        fail ArgumentError, 'invalid value for "period_type", must be one of #{validator.allowable_values}.'
      end
      @period_type = period_type
    end

    # Custom attribute writer method with validation
    # @param [Object] period_quarter Value to be assigned
    def period_quarter=(period_quarter)
      if !period_quarter.nil? && period_quarter > 4
        fail ArgumentError, 'invalid value for "period_quarter", must be smaller than or equal to 4.'
      end

      if !period_quarter.nil? && period_quarter < 1
        fail ArgumentError, 'invalid value for "period_quarter", must be greater than or equal to 1.'
      end

      @period_quarter = period_quarter
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] statement_type Object to be assigned
    def statement_type=(statement_type)
      validator = EnumAttributeValidator.new('String', ['income_statement', 'balance_sheet', 'all'])
      unless validator.valid?(statement_type)
        fail ArgumentError, 'invalid value for "statement_type", must be one of #{validator.allowable_values}.'
      end
      @statement_type = statement_type
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          period_length == o.period_length &&
          period_month == o.period_month &&
          end_date == o.end_date &&
          client_id == o.client_id &&
          accounting_method == o.accounting_method &&
          period_year == o.period_year &&
          currency_conversion == o.currency_conversion &&
          history_frequency_interval == o.history_frequency_interval &&
          start_date == o.start_date &&
          period_type == o.period_type &&
          currency_code == o.currency_code &&
          show_history == o.show_history &&
          stat_names == o.stat_names &&
          period_quarter == o.period_quarter &&
          statement_type == o.statement_type
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [period_length, period_month, end_date, client_id, accounting_method, period_year, currency_conversion, history_frequency_interval, start_date, period_type, currency_code, show_history, stat_names, period_quarter, statement_type].hash
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
