=begin
#Hydrogen Proton API

#Financial engineering module of Hydrogen Atom

OpenAPI spec version: 1.8.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.17

=end

require 'uri'

module ProtonApi
  class PortfolioManagementApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Rebalancing Signal
    # Generate rebalancing signals for a group of investments
    # @param rebalancing_signal_request Request payload for Rebalancing Signal
    # @param [Hash] opts the optional parameters
    # @return [Hash<String, Object>]
    def rebalancing_signal(rebalancing_signal_request, opts = {})
      data, _status_code, _headers = rebalancing_signal_with_http_info(rebalancing_signal_request, opts)
      data
    end

    # Rebalancing Signal
    # Generate rebalancing signals for a group of investments
    # @param rebalancing_signal_request Request payload for Rebalancing Signal
    # @param [Hash] opts the optional parameters
    # @return [Array<(Hash<String, Object>, Fixnum, Hash)>] Hash<String, Object> data, response status code and response headers
    def rebalancing_signal_with_http_info(rebalancing_signal_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PortfolioManagementApi.rebalancing_signal ...'
      end
      # verify the required parameter 'rebalancing_signal_request' is set
      if @api_client.config.client_side_validation && rebalancing_signal_request.nil?
        fail ArgumentError, "Missing the required parameter 'rebalancing_signal_request' when calling PortfolioManagementApi.rebalancing_signal"
      end
      # resource path
      local_var_path = '/rebalancing_signal'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(rebalancing_signal_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Hash<String, Object>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PortfolioManagementApi#rebalancing_signal\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
