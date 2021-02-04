=begin
#Hydrogen Nucleus API

#The Hydrogen Nucleus API

OpenAPI spec version: 1.8.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.18

=end

require 'date'

module NucleusApi
  # AccountPortfolioRebalanceRequest Object
  class AccountPortfolioRebalanceRequest
    # buyThreshold
    attr_accessor :buy_threshold

    # buyTransactionCodeId
    attr_accessor :buy_transaction_code_id

    # cashPortfolioId
    attr_accessor :cash_portfolio_id

    # cashSecId
    attr_accessor :cash_sec_id

    # clientId
    attr_accessor :client_id

    # commitOrders
    attr_accessor :commit_orders

    # nonFractional
    attr_accessor :non_fractional

    # portThreshold
    attr_accessor :port_threshold

    # restrictionsOn
    attr_accessor :restrictions_on

    # sellThreshold
    attr_accessor :sell_threshold

    # sellTransactionCodeId
    attr_accessor :sell_transaction_code_id

    # tenantId
    attr_accessor :tenant_id

    # useCashAvailable
    attr_accessor :use_cash_available

    # useStrategic
    attr_accessor :use_strategic

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'buy_threshold' => :'buy_threshold',
        :'buy_transaction_code_id' => :'buy_transaction_code_id',
        :'cash_portfolio_id' => :'cash_portfolio_id',
        :'cash_sec_id' => :'cash_sec_id',
        :'client_id' => :'client_id',
        :'commit_orders' => :'commit_orders',
        :'non_fractional' => :'non_fractional',
        :'port_threshold' => :'port_threshold',
        :'restrictions_on' => :'restrictions_on',
        :'sell_threshold' => :'sell_threshold',
        :'sell_transaction_code_id' => :'sell_transaction_code_id',
        :'tenant_id' => :'tenant_id',
        :'use_cash_available' => :'use_cash_available',
        :'use_strategic' => :'use_strategic'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'buy_threshold' => :'Float',
        :'buy_transaction_code_id' => :'String',
        :'cash_portfolio_id' => :'String',
        :'cash_sec_id' => :'String',
        :'client_id' => :'String',
        :'commit_orders' => :'BOOLEAN',
        :'non_fractional' => :'BOOLEAN',
        :'port_threshold' => :'Float',
        :'restrictions_on' => :'BOOLEAN',
        :'sell_threshold' => :'Float',
        :'sell_transaction_code_id' => :'String',
        :'tenant_id' => :'String',
        :'use_cash_available' => :'BOOLEAN',
        :'use_strategic' => :'BOOLEAN'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'buy_threshold')
        self.buy_threshold = attributes[:'buy_threshold']
      end

      if attributes.has_key?(:'buy_transaction_code_id')
        self.buy_transaction_code_id = attributes[:'buy_transaction_code_id']
      end

      if attributes.has_key?(:'cash_portfolio_id')
        self.cash_portfolio_id = attributes[:'cash_portfolio_id']
      end

      if attributes.has_key?(:'cash_sec_id')
        self.cash_sec_id = attributes[:'cash_sec_id']
      end

      if attributes.has_key?(:'client_id')
        self.client_id = attributes[:'client_id']
      end

      if attributes.has_key?(:'commit_orders')
        self.commit_orders = attributes[:'commit_orders']
      end

      if attributes.has_key?(:'non_fractional')
        self.non_fractional = attributes[:'non_fractional']
      end

      if attributes.has_key?(:'port_threshold')
        self.port_threshold = attributes[:'port_threshold']
      end

      if attributes.has_key?(:'restrictions_on')
        self.restrictions_on = attributes[:'restrictions_on']
      end

      if attributes.has_key?(:'sell_threshold')
        self.sell_threshold = attributes[:'sell_threshold']
      end

      if attributes.has_key?(:'sell_transaction_code_id')
        self.sell_transaction_code_id = attributes[:'sell_transaction_code_id']
      end

      if attributes.has_key?(:'tenant_id')
        self.tenant_id = attributes[:'tenant_id']
      end

      if attributes.has_key?(:'use_cash_available')
        self.use_cash_available = attributes[:'use_cash_available']
      end

      if attributes.has_key?(:'use_strategic')
        self.use_strategic = attributes[:'use_strategic']
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
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          buy_threshold == o.buy_threshold &&
          buy_transaction_code_id == o.buy_transaction_code_id &&
          cash_portfolio_id == o.cash_portfolio_id &&
          cash_sec_id == o.cash_sec_id &&
          client_id == o.client_id &&
          commit_orders == o.commit_orders &&
          non_fractional == o.non_fractional &&
          port_threshold == o.port_threshold &&
          restrictions_on == o.restrictions_on &&
          sell_threshold == o.sell_threshold &&
          sell_transaction_code_id == o.sell_transaction_code_id &&
          tenant_id == o.tenant_id &&
          use_cash_available == o.use_cash_available &&
          use_strategic == o.use_strategic
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [buy_threshold, buy_transaction_code_id, cash_portfolio_id, cash_sec_id, client_id, commit_orders, non_fractional, port_threshold, restrictions_on, sell_threshold, sell_transaction_code_id, tenant_id, use_cash_available, use_strategic].hash
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
        value
      when :Date
        value
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
        temp_model = NucleusApi.const_get(type).new
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
