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
  class SimulationsApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Backtest
    # Run a historical analysis for a group of investments
    # @param backtest_request Request payload for Backtest
    # @param [Hash] opts the optional parameters
    # @return [Hash<String, Object>]
    def backtest(backtest_request, opts = {})
      data, _status_code, _headers = backtest_with_http_info(backtest_request, opts)
      data
    end

    # Backtest
    # Run a historical analysis for a group of investments
    # @param backtest_request Request payload for Backtest
    # @param [Hash] opts the optional parameters
    # @return [Array<(Hash<String, Object>, Fixnum, Hash)>] Hash<String, Object> data, response status code and response headers
    def backtest_with_http_info(backtest_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: SimulationsApi.backtest ...'
      end
      # verify the required parameter 'backtest_request' is set
      if @api_client.config.client_side_validation && backtest_request.nil?
        fail ArgumentError, "Missing the required parameter 'backtest_request' when calling SimulationsApi.backtest"
      end
      # resource path
      local_var_path = '/backtest'

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
      post_body = @api_client.object_to_http_body(backtest_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Hash<String, Object>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: SimulationsApi#backtest\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Event Study
    # Analyze a group of investments against key historical events
    # @param event_study_request Request payload for Event Study
    # @param [Hash] opts the optional parameters
    # @return [Hash<String, Object>]
    def event_study(event_study_request, opts = {})
      data, _status_code, _headers = event_study_with_http_info(event_study_request, opts)
      data
    end

    # Event Study
    # Analyze a group of investments against key historical events
    # @param event_study_request Request payload for Event Study
    # @param [Hash] opts the optional parameters
    # @return [Array<(Hash<String, Object>, Fixnum, Hash)>] Hash<String, Object> data, response status code and response headers
    def event_study_with_http_info(event_study_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: SimulationsApi.event_study ...'
      end
      # verify the required parameter 'event_study_request' is set
      if @api_client.config.client_side_validation && event_study_request.nil?
        fail ArgumentError, "Missing the required parameter 'event_study_request' when calling SimulationsApi.event_study"
      end
      # resource path
      local_var_path = '/event_study'

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
      post_body = @api_client.object_to_http_body(event_study_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Hash<String, Object>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: SimulationsApi#event_study\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Monte Carlo
    # Simulate the future growth of a group of investments
    # @param monte_carlo_request Request payload for Monte Carlo
    # @param [Hash] opts the optional parameters
    # @return [Hash<String, Object>]
    def monte_carlo(monte_carlo_request, opts = {})
      data, _status_code, _headers = monte_carlo_with_http_info(monte_carlo_request, opts)
      data
    end

    # Monte Carlo
    # Simulate the future growth of a group of investments
    # @param monte_carlo_request Request payload for Monte Carlo
    # @param [Hash] opts the optional parameters
    # @return [Array<(Hash<String, Object>, Fixnum, Hash)>] Hash<String, Object> data, response status code and response headers
    def monte_carlo_with_http_info(monte_carlo_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: SimulationsApi.monte_carlo ...'
      end
      # verify the required parameter 'monte_carlo_request' is set
      if @api_client.config.client_side_validation && monte_carlo_request.nil?
        fail ArgumentError, "Missing the required parameter 'monte_carlo_request' when calling SimulationsApi.monte_carlo"
      end
      # resource path
      local_var_path = '/monte_carlo'

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
      post_body = @api_client.object_to_http_body(monte_carlo_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Hash<String, Object>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: SimulationsApi#monte_carlo\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Porfolio What-If
    # Simulate the impact of adding, removing, reducing, or increasing various positions in a group of investments
    # @param portfolio_what_if_request Request payload for Portfolio What-If
    # @param [Hash] opts the optional parameters
    # @return [Hash<String, Object>]
    def portfolio_what_if(portfolio_what_if_request, opts = {})
      data, _status_code, _headers = portfolio_what_if_with_http_info(portfolio_what_if_request, opts)
      data
    end

    # Porfolio What-If
    # Simulate the impact of adding, removing, reducing, or increasing various positions in a group of investments
    # @param portfolio_what_if_request Request payload for Portfolio What-If
    # @param [Hash] opts the optional parameters
    # @return [Array<(Hash<String, Object>, Fixnum, Hash)>] Hash<String, Object> data, response status code and response headers
    def portfolio_what_if_with_http_info(portfolio_what_if_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: SimulationsApi.portfolio_what_if ...'
      end
      # verify the required parameter 'portfolio_what_if_request' is set
      if @api_client.config.client_side_validation && portfolio_what_if_request.nil?
        fail ArgumentError, "Missing the required parameter 'portfolio_what_if_request' when calling SimulationsApi.portfolio_what_if"
      end
      # resource path
      local_var_path = '/portfolio_what_if'

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
      post_body = @api_client.object_to_http_body(portfolio_what_if_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Hash<String, Object>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: SimulationsApi#portfolio_what_if\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Savings Calculator
    # Simulate the future growth of a simple savings account
    # @param savings_calculator_request Request payload for Savings Calculator
    # @param [Hash] opts the optional parameters
    # @return [Hash<String, Object>]
    def savings_calculator(savings_calculator_request, opts = {})
      data, _status_code, _headers = savings_calculator_with_http_info(savings_calculator_request, opts)
      data
    end

    # Savings Calculator
    # Simulate the future growth of a simple savings account
    # @param savings_calculator_request Request payload for Savings Calculator
    # @param [Hash] opts the optional parameters
    # @return [Array<(Hash<String, Object>, Fixnum, Hash)>] Hash<String, Object> data, response status code and response headers
    def savings_calculator_with_http_info(savings_calculator_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: SimulationsApi.savings_calculator ...'
      end
      # verify the required parameter 'savings_calculator_request' is set
      if @api_client.config.client_side_validation && savings_calculator_request.nil?
        fail ArgumentError, "Missing the required parameter 'savings_calculator_request' when calling SimulationsApi.savings_calculator"
      end
      # resource path
      local_var_path = '/savings_calculator'

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
      post_body = @api_client.object_to_http_body(savings_calculator_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Hash<String, Object>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: SimulationsApi#savings_calculator\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Scenario Analysis
    # Analyze a group of investments against a series of external economic factors
    # @param scneario_analysis_request Request payload for Scenario Analysis
    # @param [Hash] opts the optional parameters
    # @return [Hash<String, Object>]
    def scenario_analysis(scneario_analysis_request, opts = {})
      data, _status_code, _headers = scenario_analysis_with_http_info(scneario_analysis_request, opts)
      data
    end

    # Scenario Analysis
    # Analyze a group of investments against a series of external economic factors
    # @param scneario_analysis_request Request payload for Scenario Analysis
    # @param [Hash] opts the optional parameters
    # @return [Array<(Hash<String, Object>, Fixnum, Hash)>] Hash<String, Object> data, response status code and response headers
    def scenario_analysis_with_http_info(scneario_analysis_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: SimulationsApi.scenario_analysis ...'
      end
      # verify the required parameter 'scneario_analysis_request' is set
      if @api_client.config.client_side_validation && scneario_analysis_request.nil?
        fail ArgumentError, "Missing the required parameter 'scneario_analysis_request' when calling SimulationsApi.scenario_analysis"
      end
      # resource path
      local_var_path = '/scenario_analysis'

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
      post_body = @api_client.object_to_http_body(scneario_analysis_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Hash<String, Object>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: SimulationsApi#scenario_analysis\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Sensitivity Analysis
    # Analyze a group of investments against an external economic factor
    # @param sensitivity_analysis_request Request payload for Sensitivity Analysis
    # @param [Hash] opts the optional parameters
    # @return [Hash<String, Object>]
    def sensitivity_analysis(sensitivity_analysis_request, opts = {})
      data, _status_code, _headers = sensitivity_analysis_with_http_info(sensitivity_analysis_request, opts)
      data
    end

    # Sensitivity Analysis
    # Analyze a group of investments against an external economic factor
    # @param sensitivity_analysis_request Request payload for Sensitivity Analysis
    # @param [Hash] opts the optional parameters
    # @return [Array<(Hash<String, Object>, Fixnum, Hash)>] Hash<String, Object> data, response status code and response headers
    def sensitivity_analysis_with_http_info(sensitivity_analysis_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: SimulationsApi.sensitivity_analysis ...'
      end
      # verify the required parameter 'sensitivity_analysis_request' is set
      if @api_client.config.client_side_validation && sensitivity_analysis_request.nil?
        fail ArgumentError, "Missing the required parameter 'sensitivity_analysis_request' when calling SimulationsApi.sensitivity_analysis"
      end
      # resource path
      local_var_path = '/sensitivity_analysis'

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
      post_body = @api_client.object_to_http_body(sensitivity_analysis_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Hash<String, Object>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: SimulationsApi#sensitivity_analysis\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
