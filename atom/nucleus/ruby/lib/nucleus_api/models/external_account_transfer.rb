=begin
#Hydrogen Nucleus API

#The Hydrogen Nucleus API

OpenAPI spec version: 1.9.5
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.19

=end

require 'date'

module NucleusApi
  class ExternalAccountTransfer
    # External Account Transfer accountHolder
    attr_accessor :account_holder

    # External Account Transfer account id
    attr_accessor :account_id

    # External Account Transfer account number
    attr_accessor :account_number

    # External Account Transfer account type id
    attr_accessor :account_type_id

    # External Account Transfer amount
    attr_accessor :amount

    # External Account Transfer comment
    attr_accessor :comment

    attr_accessor :create_date

    # currencyCode
    attr_accessor :currency_code

    # External Account Transfer dtcNumber
    attr_accessor :dtc_number

    # External Account Transfer firm name
    attr_accessor :firm_name

    attr_accessor :id

    attr_accessor :metadata

    attr_accessor :received_date

    # External Account Transfer roth five year
    attr_accessor :roth_five_year

    attr_accessor :secondary_id

    # External Account Transfer status
    attr_accessor :status

    attr_accessor :status_time_stamp

    # External Account Transfer transfer all cash
    attr_accessor :transfer_all_cash

    # External Account Transfer account transfer date
    attr_accessor :transfer_date

    # External Account Transfer transfer type
    attr_accessor :transfer_type

    attr_accessor :update_date

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'account_holder' => :'account_holder',
        :'account_id' => :'account_id',
        :'account_number' => :'account_number',
        :'account_type_id' => :'account_type_id',
        :'amount' => :'amount',
        :'comment' => :'comment',
        :'create_date' => :'create_date',
        :'currency_code' => :'currency_code',
        :'dtc_number' => :'dtc_number',
        :'firm_name' => :'firm_name',
        :'id' => :'id',
        :'metadata' => :'metadata',
        :'received_date' => :'received_date',
        :'roth_five_year' => :'roth_five_year',
        :'secondary_id' => :'secondary_id',
        :'status' => :'status',
        :'status_time_stamp' => :'status_time_stamp',
        :'transfer_all_cash' => :'transfer_all_cash',
        :'transfer_date' => :'transfer_date',
        :'transfer_type' => :'transfer_type',
        :'update_date' => :'update_date'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'account_holder' => :'String',
        :'account_id' => :'String',
        :'account_number' => :'String',
        :'account_type_id' => :'String',
        :'amount' => :'Float',
        :'comment' => :'String',
        :'create_date' => :'DateTime',
        :'currency_code' => :'String',
        :'dtc_number' => :'String',
        :'firm_name' => :'String',
        :'id' => :'String',
        :'metadata' => :'Hash<String, String>',
        :'received_date' => :'DateTime',
        :'roth_five_year' => :'Integer',
        :'secondary_id' => :'String',
        :'status' => :'String',
        :'status_time_stamp' => :'DateTime',
        :'transfer_all_cash' => :'BOOLEAN',
        :'transfer_date' => :'Date',
        :'transfer_type' => :'String',
        :'update_date' => :'DateTime'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'account_holder')
        self.account_holder = attributes[:'account_holder']
      end

      if attributes.has_key?(:'account_id')
        self.account_id = attributes[:'account_id']
      end

      if attributes.has_key?(:'account_number')
        self.account_number = attributes[:'account_number']
      end

      if attributes.has_key?(:'account_type_id')
        self.account_type_id = attributes[:'account_type_id']
      end

      if attributes.has_key?(:'amount')
        self.amount = attributes[:'amount']
      end

      if attributes.has_key?(:'comment')
        self.comment = attributes[:'comment']
      end

      if attributes.has_key?(:'create_date')
        self.create_date = attributes[:'create_date']
      end

      if attributes.has_key?(:'currency_code')
        self.currency_code = attributes[:'currency_code']
      end

      if attributes.has_key?(:'dtc_number')
        self.dtc_number = attributes[:'dtc_number']
      end

      if attributes.has_key?(:'firm_name')
        self.firm_name = attributes[:'firm_name']
      end

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'metadata')
        if (value = attributes[:'metadata']).is_a?(Hash)
          self.metadata = value
        end
      end

      if attributes.has_key?(:'received_date')
        self.received_date = attributes[:'received_date']
      end

      if attributes.has_key?(:'roth_five_year')
        self.roth_five_year = attributes[:'roth_five_year']
      end

      if attributes.has_key?(:'secondary_id')
        self.secondary_id = attributes[:'secondary_id']
      end

      if attributes.has_key?(:'status')
        self.status = attributes[:'status']
      end

      if attributes.has_key?(:'status_time_stamp')
        self.status_time_stamp = attributes[:'status_time_stamp']
      end

      if attributes.has_key?(:'transfer_all_cash')
        self.transfer_all_cash = attributes[:'transfer_all_cash']
      end

      if attributes.has_key?(:'transfer_date')
        self.transfer_date = attributes[:'transfer_date']
      end

      if attributes.has_key?(:'transfer_type')
        self.transfer_type = attributes[:'transfer_type']
      end

      if attributes.has_key?(:'update_date')
        self.update_date = attributes[:'update_date']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @account_holder.nil?
        invalid_properties.push('invalid value for "account_holder", account_holder cannot be nil.')
      end

      if @account_id.nil?
        invalid_properties.push('invalid value for "account_id", account_id cannot be nil.')
      end

      if @account_number.nil?
        invalid_properties.push('invalid value for "account_number", account_number cannot be nil.')
      end

      if @account_type_id.nil?
        invalid_properties.push('invalid value for "account_type_id", account_type_id cannot be nil.')
      end

      if @firm_name.nil?
        invalid_properties.push('invalid value for "firm_name", firm_name cannot be nil.')
      end

      if @transfer_all_cash.nil?
        invalid_properties.push('invalid value for "transfer_all_cash", transfer_all_cash cannot be nil.')
      end

      if @transfer_date.nil?
        invalid_properties.push('invalid value for "transfer_date", transfer_date cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @account_holder.nil?
      return false if @account_id.nil?
      return false if @account_number.nil?
      return false if @account_type_id.nil?
      return false if @firm_name.nil?
      return false if @transfer_all_cash.nil?
      return false if @transfer_date.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          account_holder == o.account_holder &&
          account_id == o.account_id &&
          account_number == o.account_number &&
          account_type_id == o.account_type_id &&
          amount == o.amount &&
          comment == o.comment &&
          create_date == o.create_date &&
          currency_code == o.currency_code &&
          dtc_number == o.dtc_number &&
          firm_name == o.firm_name &&
          id == o.id &&
          metadata == o.metadata &&
          received_date == o.received_date &&
          roth_five_year == o.roth_five_year &&
          secondary_id == o.secondary_id &&
          status == o.status &&
          status_time_stamp == o.status_time_stamp &&
          transfer_all_cash == o.transfer_all_cash &&
          transfer_date == o.transfer_date &&
          transfer_type == o.transfer_type &&
          update_date == o.update_date
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [account_holder, account_id, account_number, account_type_id, amount, comment, create_date, currency_code, dtc_number, firm_name, id, metadata, received_date, roth_five_year, secondary_id, status, status_time_stamp, transfer_all_cash, transfer_date, transfer_type, update_date].hash
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
