=begin
#Hydrogen Atom API

#The Hydrogen Atom API

OpenAPI spec version: 1.7.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.14

=end

require 'date'

module NucleusApi
  # Question Object
  class Question
    attr_accessor :answers

    # category
    attr_accessor :category

    # description
    attr_accessor :description

    # document
    attr_accessor :document

    attr_accessor :id

    # image
    attr_accessor :image

    # is_account
    attr_accessor :is_account

    # metadata
    attr_accessor :metadata

    # order_index
    attr_accessor :order_index

    # question_type
    attr_accessor :question_type

    attr_accessor :questionnaire

    # questionnaireId
    attr_accessor :questionnaire_id

    # subcategory
    attr_accessor :subcategory

    # title
    attr_accessor :title

    # tooltip
    attr_accessor :tooltip

    # weight
    attr_accessor :weight

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'answers' => :'answers',
        :'category' => :'category',
        :'description' => :'description',
        :'document' => :'document',
        :'id' => :'id',
        :'image' => :'image',
        :'is_account' => :'is_account',
        :'metadata' => :'metadata',
        :'order_index' => :'order_index',
        :'question_type' => :'question_type',
        :'questionnaire' => :'questionnaire',
        :'questionnaire_id' => :'questionnaire_id',
        :'subcategory' => :'subcategory',
        :'title' => :'title',
        :'tooltip' => :'tooltip',
        :'weight' => :'weight'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'answers' => :'Array<Answer>',
        :'category' => :'String',
        :'description' => :'String',
        :'document' => :'String',
        :'id' => :'String',
        :'image' => :'String',
        :'is_account' => :'BOOLEAN',
        :'metadata' => :'Hash<String, String>',
        :'order_index' => :'String',
        :'question_type' => :'String',
        :'questionnaire' => :'Questionnaire',
        :'questionnaire_id' => :'String',
        :'subcategory' => :'String',
        :'title' => :'String',
        :'tooltip' => :'String',
        :'weight' => :'Float'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'answers')
        if (value = attributes[:'answers']).is_a?(Array)
          self.answers = value
        end
      end

      if attributes.has_key?(:'category')
        self.category = attributes[:'category']
      end

      if attributes.has_key?(:'description')
        self.description = attributes[:'description']
      end

      if attributes.has_key?(:'document')
        self.document = attributes[:'document']
      end

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'image')
        self.image = attributes[:'image']
      end

      if attributes.has_key?(:'is_account')
        self.is_account = attributes[:'is_account']
      end

      if attributes.has_key?(:'metadata')
        if (value = attributes[:'metadata']).is_a?(Hash)
          self.metadata = value
        end
      end

      if attributes.has_key?(:'order_index')
        self.order_index = attributes[:'order_index']
      end

      if attributes.has_key?(:'question_type')
        self.question_type = attributes[:'question_type']
      end

      if attributes.has_key?(:'questionnaire')
        self.questionnaire = attributes[:'questionnaire']
      end

      if attributes.has_key?(:'questionnaire_id')
        self.questionnaire_id = attributes[:'questionnaire_id']
      end

      if attributes.has_key?(:'subcategory')
        self.subcategory = attributes[:'subcategory']
      end

      if attributes.has_key?(:'title')
        self.title = attributes[:'title']
      end

      if attributes.has_key?(:'tooltip')
        self.tooltip = attributes[:'tooltip']
      end

      if attributes.has_key?(:'weight')
        self.weight = attributes[:'weight']
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
          answers == o.answers &&
          category == o.category &&
          description == o.description &&
          document == o.document &&
          id == o.id &&
          image == o.image &&
          is_account == o.is_account &&
          metadata == o.metadata &&
          order_index == o.order_index &&
          question_type == o.question_type &&
          questionnaire == o.questionnaire &&
          questionnaire_id == o.questionnaire_id &&
          subcategory == o.subcategory &&
          title == o.title &&
          tooltip == o.tooltip &&
          weight == o.weight
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [answers, category, description, document, id, image, is_account, metadata, order_index, question_type, questionnaire, questionnaire_id, subcategory, title, tooltip, weight].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
        def build_from_hash(attributes)
      self.class.swagger_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        elsif attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", attributes[self.class.attribute_map[key]])
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
end# Returns the string representation of the object
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