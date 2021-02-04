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
  class ResponseEntity
    attr_accessor :body

    attr_accessor :status_code

    attr_accessor :status_code_value

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
        :'body' => :'body',
        :'status_code' => :'status_code',
        :'status_code_value' => :'status_code_value'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'body' => :'Object',
        :'status_code' => :'String',
        :'status_code_value' => :'Integer'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'body')
        self.body = attributes[:'body']
      end

      if attributes.has_key?(:'status_code')
        self.status_code = attributes[:'status_code']
      end

      if attributes.has_key?(:'status_code_value')
        self.status_code_value = attributes[:'status_code_value']
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
      status_code_validator = EnumAttributeValidator.new('String', ['100 CONTINUE', '101 SWITCHING_PROTOCOLS', '102 PROCESSING', '103 CHECKPOINT', '200 OK', '201 CREATED', '202 ACCEPTED', '203 NON_AUTHORITATIVE_INFORMATION', '204 NO_CONTENT', '205 RESET_CONTENT', '206 PARTIAL_CONTENT', '207 MULTI_STATUS', '208 ALREADY_REPORTED', '226 IM_USED', '300 MULTIPLE_CHOICES', '301 MOVED_PERMANENTLY', '302 FOUND', '302 MOVED_TEMPORARILY', '303 SEE_OTHER', '304 NOT_MODIFIED', '305 USE_PROXY', '307 TEMPORARY_REDIRECT', '308 PERMANENT_REDIRECT', '400 BAD_REQUEST', '401 UNAUTHORIZED', '402 PAYMENT_REQUIRED', '403 FORBIDDEN', '404 NOT_FOUND', '405 METHOD_NOT_ALLOWED', '406 NOT_ACCEPTABLE', '407 PROXY_AUTHENTICATION_REQUIRED', '408 REQUEST_TIMEOUT', '409 CONFLICT', '410 GONE', '411 LENGTH_REQUIRED', '412 PRECONDITION_FAILED', '413 PAYLOAD_TOO_LARGE', '413 REQUEST_ENTITY_TOO_LARGE', '414 URI_TOO_LONG', '414 REQUEST_URI_TOO_LONG', '415 UNSUPPORTED_MEDIA_TYPE', '416 REQUESTED_RANGE_NOT_SATISFIABLE', '417 EXPECTATION_FAILED', '418 I_AM_A_TEAPOT', '419 INSUFFICIENT_SPACE_ON_RESOURCE', '420 METHOD_FAILURE', '421 DESTINATION_LOCKED', '422 UNPROCESSABLE_ENTITY', '423 LOCKED', '424 FAILED_DEPENDENCY', '426 UPGRADE_REQUIRED', '428 PRECONDITION_REQUIRED', '429 TOO_MANY_REQUESTS', '431 REQUEST_HEADER_FIELDS_TOO_LARGE', '451 UNAVAILABLE_FOR_LEGAL_REASONS', '500 INTERNAL_SERVER_ERROR', '501 NOT_IMPLEMENTED', '502 BAD_GATEWAY', '503 SERVICE_UNAVAILABLE', '504 GATEWAY_TIMEOUT', '505 HTTP_VERSION_NOT_SUPPORTED', '506 VARIANT_ALSO_NEGOTIATES', '507 INSUFFICIENT_STORAGE', '508 LOOP_DETECTED', '509 BANDWIDTH_LIMIT_EXCEEDED', '510 NOT_EXTENDED', '511 NETWORK_AUTHENTICATION_REQUIRED'])
      return false unless status_code_validator.valid?(@status_code)
      true
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] status_code Object to be assigned
    def status_code=(status_code)
      validator = EnumAttributeValidator.new('String', ['100 CONTINUE', '101 SWITCHING_PROTOCOLS', '102 PROCESSING', '103 CHECKPOINT', '200 OK', '201 CREATED', '202 ACCEPTED', '203 NON_AUTHORITATIVE_INFORMATION', '204 NO_CONTENT', '205 RESET_CONTENT', '206 PARTIAL_CONTENT', '207 MULTI_STATUS', '208 ALREADY_REPORTED', '226 IM_USED', '300 MULTIPLE_CHOICES', '301 MOVED_PERMANENTLY', '302 FOUND', '302 MOVED_TEMPORARILY', '303 SEE_OTHER', '304 NOT_MODIFIED', '305 USE_PROXY', '307 TEMPORARY_REDIRECT', '308 PERMANENT_REDIRECT', '400 BAD_REQUEST', '401 UNAUTHORIZED', '402 PAYMENT_REQUIRED', '403 FORBIDDEN', '404 NOT_FOUND', '405 METHOD_NOT_ALLOWED', '406 NOT_ACCEPTABLE', '407 PROXY_AUTHENTICATION_REQUIRED', '408 REQUEST_TIMEOUT', '409 CONFLICT', '410 GONE', '411 LENGTH_REQUIRED', '412 PRECONDITION_FAILED', '413 PAYLOAD_TOO_LARGE', '413 REQUEST_ENTITY_TOO_LARGE', '414 URI_TOO_LONG', '414 REQUEST_URI_TOO_LONG', '415 UNSUPPORTED_MEDIA_TYPE', '416 REQUESTED_RANGE_NOT_SATISFIABLE', '417 EXPECTATION_FAILED', '418 I_AM_A_TEAPOT', '419 INSUFFICIENT_SPACE_ON_RESOURCE', '420 METHOD_FAILURE', '421 DESTINATION_LOCKED', '422 UNPROCESSABLE_ENTITY', '423 LOCKED', '424 FAILED_DEPENDENCY', '426 UPGRADE_REQUIRED', '428 PRECONDITION_REQUIRED', '429 TOO_MANY_REQUESTS', '431 REQUEST_HEADER_FIELDS_TOO_LARGE', '451 UNAVAILABLE_FOR_LEGAL_REASONS', '500 INTERNAL_SERVER_ERROR', '501 NOT_IMPLEMENTED', '502 BAD_GATEWAY', '503 SERVICE_UNAVAILABLE', '504 GATEWAY_TIMEOUT', '505 HTTP_VERSION_NOT_SUPPORTED', '506 VARIANT_ALSO_NEGOTIATES', '507 INSUFFICIENT_STORAGE', '508 LOOP_DETECTED', '509 BANDWIDTH_LIMIT_EXCEEDED', '510 NOT_EXTENDED', '511 NETWORK_AUTHENTICATION_REQUIRED'])
      unless validator.valid?(status_code)
        fail ArgumentError, 'invalid value for "status_code", must be one of #{validator.allowable_values}.'
      end
      @status_code = status_code
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          body == o.body &&
          status_code == o.status_code &&
          status_code_value == o.status_code_value
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [body, status_code, status_code_value].hash
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
