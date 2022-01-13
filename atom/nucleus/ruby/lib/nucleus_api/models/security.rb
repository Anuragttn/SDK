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
  class Security
    # Security asset class
    attr_accessor :asset_class

    # brokers
    attr_accessor :brokers

    # Security category
    attr_accessor :category

    attr_accessor :create_date

    # currency_code
    attr_accessor :currency_code

    # cusip
    attr_accessor :cusip

    # description
    attr_accessor :description

    # Security exchange
    attr_accessor :exchange

    attr_accessor :id

    # image
    attr_accessor :image

    # Security industry
    attr_accessor :industry

    # Security is active
    attr_accessor :is_active

    # isin
    attr_accessor :isin

    # metadata
    attr_accessor :metadata

    # Security name
    attr_accessor :name

    # proxy_id
    attr_accessor :proxy_id

    attr_accessor :secondary_id

    # Security sector
    attr_accessor :sector

    # Security class
    attr_accessor :security_class

    attr_accessor :security_composition

    attr_accessor :security_country

    # Security ticker
    attr_accessor :ticker

    # total_expense_ratio
    attr_accessor :total_expense_ratio

    # Security type
    attr_accessor :type

    attr_accessor :update_date

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'asset_class' => :'asset_class',
        :'brokers' => :'brokers',
        :'category' => :'category',
        :'create_date' => :'create_date',
        :'currency_code' => :'currency_code',
        :'cusip' => :'cusip',
        :'description' => :'description',
        :'exchange' => :'exchange',
        :'id' => :'id',
        :'image' => :'image',
        :'industry' => :'industry',
        :'is_active' => :'is_active',
        :'isin' => :'isin',
        :'metadata' => :'metadata',
        :'name' => :'name',
        :'proxy_id' => :'proxy_id',
        :'secondary_id' => :'secondary_id',
        :'sector' => :'sector',
        :'security_class' => :'security_class',
        :'security_composition' => :'security_composition',
        :'security_country' => :'security_country',
        :'ticker' => :'ticker',
        :'total_expense_ratio' => :'total_expense_ratio',
        :'type' => :'type',
        :'update_date' => :'update_date'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'asset_class' => :'String',
        :'brokers' => :'Array<Brokers>',
        :'category' => :'String',
        :'create_date' => :'DateTime',
        :'currency_code' => :'String',
        :'cusip' => :'String',
        :'description' => :'String',
        :'exchange' => :'String',
        :'id' => :'String',
        :'image' => :'String',
        :'industry' => :'String',
        :'is_active' => :'BOOLEAN',
        :'isin' => :'String',
        :'metadata' => :'Hash<String, String>',
        :'name' => :'String',
        :'proxy_id' => :'String',
        :'secondary_id' => :'String',
        :'sector' => :'String',
        :'security_class' => :'String',
        :'security_composition' => :'Array<SecuritiesComposition>',
        :'security_country' => :'Array<SecuritiesCountry>',
        :'ticker' => :'String',
        :'total_expense_ratio' => :'Float',
        :'type' => :'String',
        :'update_date' => :'DateTime'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'asset_class')
        self.asset_class = attributes[:'asset_class']
      end

      if attributes.has_key?(:'brokers')
        if (value = attributes[:'brokers']).is_a?(Array)
          self.brokers = value
        end
      end

      if attributes.has_key?(:'category')
        self.category = attributes[:'category']
      end

      if attributes.has_key?(:'create_date')
        self.create_date = attributes[:'create_date']
      end

      if attributes.has_key?(:'currency_code')
        self.currency_code = attributes[:'currency_code']
      end

      if attributes.has_key?(:'cusip')
        self.cusip = attributes[:'cusip']
      end

      if attributes.has_key?(:'description')
        self.description = attributes[:'description']
      end

      if attributes.has_key?(:'exchange')
        self.exchange = attributes[:'exchange']
      end

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'image')
        self.image = attributes[:'image']
      end

      if attributes.has_key?(:'industry')
        self.industry = attributes[:'industry']
      end

      if attributes.has_key?(:'is_active')
        self.is_active = attributes[:'is_active']
      end

      if attributes.has_key?(:'isin')
        self.isin = attributes[:'isin']
      end

      if attributes.has_key?(:'metadata')
        if (value = attributes[:'metadata']).is_a?(Hash)
          self.metadata = value
        end
      end

      if attributes.has_key?(:'name')
        self.name = attributes[:'name']
      end

      if attributes.has_key?(:'proxy_id')
        self.proxy_id = attributes[:'proxy_id']
      end

      if attributes.has_key?(:'secondary_id')
        self.secondary_id = attributes[:'secondary_id']
      end

      if attributes.has_key?(:'sector')
        self.sector = attributes[:'sector']
      end

      if attributes.has_key?(:'security_class')
        self.security_class = attributes[:'security_class']
      end

      if attributes.has_key?(:'security_composition')
        if (value = attributes[:'security_composition']).is_a?(Array)
          self.security_composition = value
        end
      end

      if attributes.has_key?(:'security_country')
        if (value = attributes[:'security_country']).is_a?(Array)
          self.security_country = value
        end
      end

      if attributes.has_key?(:'ticker')
        self.ticker = attributes[:'ticker']
      end

      if attributes.has_key?(:'total_expense_ratio')
        self.total_expense_ratio = attributes[:'total_expense_ratio']
      end

      if attributes.has_key?(:'type')
        self.type = attributes[:'type']
      end

      if attributes.has_key?(:'update_date')
        self.update_date = attributes[:'update_date']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @name.nil?
        invalid_properties.push('invalid value for "name", name cannot be nil.')
      end

      if @ticker.nil?
        invalid_properties.push('invalid value for "ticker", ticker cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @name.nil?
      return false if @ticker.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          asset_class == o.asset_class &&
          brokers == o.brokers &&
          category == o.category &&
          create_date == o.create_date &&
          currency_code == o.currency_code &&
          cusip == o.cusip &&
          description == o.description &&
          exchange == o.exchange &&
          id == o.id &&
          image == o.image &&
          industry == o.industry &&
          is_active == o.is_active &&
          isin == o.isin &&
          metadata == o.metadata &&
          name == o.name &&
          proxy_id == o.proxy_id &&
          secondary_id == o.secondary_id &&
          sector == o.sector &&
          security_class == o.security_class &&
          security_composition == o.security_composition &&
          security_country == o.security_country &&
          ticker == o.ticker &&
          total_expense_ratio == o.total_expense_ratio &&
          type == o.type &&
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
      [asset_class, brokers, category, create_date, currency_code, cusip, description, exchange, id, image, industry, is_active, isin, metadata, name, proxy_id, secondary_id, sector, security_class, security_composition, security_country, ticker, total_expense_ratio, type, update_date].hash
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
