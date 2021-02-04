=begin
#Hydrogen Nucleus API

#The Hydrogen Nucleus API

OpenAPI spec version: 1.8.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.18

=end

require 'uri'

module NucleusApi
  class NotificationApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Create a Notification Client
    # Create a new Notification Client. 
    # @param notification_client notificationClient
    # @param [Hash] opts the optional parameters
    # @return [NotificationClient]
    def create_notification_client_using_post(notification_client, opts = {})
      data, _status_code, _headers = create_notification_client_using_post_with_http_info(notification_client, opts)
      data
    end

    # Create a Notification Client
    # Create a new Notification Client. 
    # @param notification_client notificationClient
    # @param [Hash] opts the optional parameters
    # @return [Array<(NotificationClient, Fixnum, Hash)>] NotificationClient data, response status code and response headers
    def create_notification_client_using_post_with_http_info(notification_client, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.create_notification_client_using_post ...'
      end
      # verify the required parameter 'notification_client' is set
      if @api_client.config.client_side_validation && notification_client.nil?
        fail ArgumentError, "Missing the required parameter 'notification_client' when calling NotificationApi.create_notification_client_using_post"
      end
      # resource path
      local_var_path = '/notification_client'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(notification_client)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'NotificationClient')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#create_notification_client_using_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Create a Notification Setting
    # Create a new Notification Setting. 
    # @param notification_setting notificationSetting
    # @param [Hash] opts the optional parameters
    # @return [NotificationSetting]
    def create_notification_setting_using_post(notification_setting, opts = {})
      data, _status_code, _headers = create_notification_setting_using_post_with_http_info(notification_setting, opts)
      data
    end

    # Create a Notification Setting
    # Create a new Notification Setting. 
    # @param notification_setting notificationSetting
    # @param [Hash] opts the optional parameters
    # @return [Array<(NotificationSetting, Fixnum, Hash)>] NotificationSetting data, response status code and response headers
    def create_notification_setting_using_post_with_http_info(notification_setting, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.create_notification_setting_using_post ...'
      end
      # verify the required parameter 'notification_setting' is set
      if @api_client.config.client_side_validation && notification_setting.nil?
        fail ArgumentError, "Missing the required parameter 'notification_setting' when calling NotificationApi.create_notification_setting_using_post"
      end
      # resource path
      local_var_path = '/notification_setting'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(notification_setting)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'NotificationSetting')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#create_notification_setting_using_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Create a Notification
    # Create a new Notification. 
    # @param notification notification
    # @param [Hash] opts the optional parameters
    # @return [Notification]
    def create_notification_using_post(notification, opts = {})
      data, _status_code, _headers = create_notification_using_post_with_http_info(notification, opts)
      data
    end

    # Create a Notification
    # Create a new Notification. 
    # @param notification notification
    # @param [Hash] opts the optional parameters
    # @return [Array<(Notification, Fixnum, Hash)>] Notification data, response status code and response headers
    def create_notification_using_post_with_http_info(notification, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.create_notification_using_post ...'
      end
      # verify the required parameter 'notification' is set
      if @api_client.config.client_side_validation && notification.nil?
        fail ArgumentError, "Missing the required parameter 'notification' when calling NotificationApi.create_notification_using_post"
      end
      # resource path
      local_var_path = '/notification'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(notification)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Notification')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#create_notification_using_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Delete a Notification Client
    # Permanently Delete Notification Client.
    # @param notification_client_id notification_client_id
    # @param [Hash] opts the optional parameters
    # @return [nil]
    def delete_notification_client_using_delete(notification_client_id, opts = {})
      delete_notification_client_using_delete_with_http_info(notification_client_id, opts)
      nil
    end

    # Delete a Notification Client
    # Permanently Delete Notification Client.
    # @param notification_client_id notification_client_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(nil, Fixnum, Hash)>] nil, response status code and response headers
    def delete_notification_client_using_delete_with_http_info(notification_client_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.delete_notification_client_using_delete ...'
      end
      # verify the required parameter 'notification_client_id' is set
      if @api_client.config.client_side_validation && notification_client_id.nil?
        fail ArgumentError, "Missing the required parameter 'notification_client_id' when calling NotificationApi.delete_notification_client_using_delete"
      end
      # resource path
      local_var_path = '/notification_client/{notification_client_id}'.sub('{' + 'notification_client_id' + '}', notification_client_id.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#delete_notification_client_using_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Delete a Notification Setting
    # Permanently Delete Notification Setting. 
    # @param notification_setting_id notification_setting_id
    # @param [Hash] opts the optional parameters
    # @return [nil]
    def delete_notification_setting_using_delete(notification_setting_id, opts = {})
      delete_notification_setting_using_delete_with_http_info(notification_setting_id, opts)
      nil
    end

    # Delete a Notification Setting
    # Permanently Delete Notification Setting. 
    # @param notification_setting_id notification_setting_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(nil, Fixnum, Hash)>] nil, response status code and response headers
    def delete_notification_setting_using_delete_with_http_info(notification_setting_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.delete_notification_setting_using_delete ...'
      end
      # verify the required parameter 'notification_setting_id' is set
      if @api_client.config.client_side_validation && notification_setting_id.nil?
        fail ArgumentError, "Missing the required parameter 'notification_setting_id' when calling NotificationApi.delete_notification_setting_using_delete"
      end
      # resource path
      local_var_path = '/notification_setting/{notification_setting_id}'.sub('{' + 'notification_setting_id' + '}', notification_setting_id.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#delete_notification_setting_using_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Delete a Notification
    # Permanently Delete a Notification. 
    # @param notification_id UUID notification_id
    # @param [Hash] opts the optional parameters
    # @return [nil]
    def delete_notification_using_delete(notification_id, opts = {})
      delete_notification_using_delete_with_http_info(notification_id, opts)
      nil
    end

    # Delete a Notification
    # Permanently Delete a Notification. 
    # @param notification_id UUID notification_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(nil, Fixnum, Hash)>] nil, response status code and response headers
    def delete_notification_using_delete_with_http_info(notification_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.delete_notification_using_delete ...'
      end
      # verify the required parameter 'notification_id' is set
      if @api_client.config.client_side_validation && notification_id.nil?
        fail ArgumentError, "Missing the required parameter 'notification_id' when calling NotificationApi.delete_notification_using_delete"
      end
      # resource path
      local_var_path = '/notification/{notification_id}'.sub('{' + 'notification_id' + '}', notification_id.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#delete_notification_using_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Get All Notifications
    # Get All Notification. 
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending (default to false)
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by (default to update_date)
    # @option opts [Integer] :page page (default to 0)
    # @option opts [Integer] :size size (default to 25)
    # @return [PageNotification]
    def get_notification_all_using_get(opts = {})
      data, _status_code, _headers = get_notification_all_using_get_with_http_info(opts)
      data
    end

    # Get All Notifications
    # Get All Notification. 
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by
    # @option opts [Integer] :page page
    # @option opts [Integer] :size size
    # @return [Array<(PageNotification, Fixnum, Hash)>] PageNotification data, response status code and response headers
    def get_notification_all_using_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.get_notification_all_using_get ...'
      end
      # resource path
      local_var_path = '/notification'

      # query parameters
      query_params = {}
      query_params[:'ascending'] = opts[:'ascending'] if !opts[:'ascending'].nil?
      query_params[:'filter'] = opts[:'filter'] if !opts[:'filter'].nil?
      query_params[:'order_by'] = opts[:'order_by'] if !opts[:'order_by'].nil?
      query_params[:'page'] = opts[:'page'] if !opts[:'page'].nil?
      query_params[:'size'] = opts[:'size'] if !opts[:'size'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'PageNotification')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#get_notification_all_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # List all Notification Client
    # List all Notification Client. 
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending (default to false)
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by (default to update_date)
    # @option opts [Integer] :page page (default to 0)
    # @option opts [Integer] :size size (default to 25)
    # @return [PageNotificationClient]
    def get_notification_client_all_using_get(opts = {})
      data, _status_code, _headers = get_notification_client_all_using_get_with_http_info(opts)
      data
    end

    # List all Notification Client
    # List all Notification Client. 
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by
    # @option opts [Integer] :page page
    # @option opts [Integer] :size size
    # @return [Array<(PageNotificationClient, Fixnum, Hash)>] PageNotificationClient data, response status code and response headers
    def get_notification_client_all_using_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.get_notification_client_all_using_get ...'
      end
      # resource path
      local_var_path = '/notification_client'

      # query parameters
      query_params = {}
      query_params[:'ascending'] = opts[:'ascending'] if !opts[:'ascending'].nil?
      query_params[:'filter'] = opts[:'filter'] if !opts[:'filter'].nil?
      query_params[:'order_by'] = opts[:'order_by'] if !opts[:'order_by'].nil?
      query_params[:'page'] = opts[:'page'] if !opts[:'page'].nil?
      query_params[:'size'] = opts[:'size'] if !opts[:'size'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'PageNotificationClient')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#get_notification_client_all_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Retrieve a Notification Client
    # Retrieve a  Notification Client. 
    # @param notification_client_id notification_client_id
    # @param [Hash] opts the optional parameters
    # @return [NotificationClient]
    def get_notification_client_using_get(notification_client_id, opts = {})
      data, _status_code, _headers = get_notification_client_using_get_with_http_info(notification_client_id, opts)
      data
    end

    # Retrieve a Notification Client
    # Retrieve a  Notification Client. 
    # @param notification_client_id notification_client_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(NotificationClient, Fixnum, Hash)>] NotificationClient data, response status code and response headers
    def get_notification_client_using_get_with_http_info(notification_client_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.get_notification_client_using_get ...'
      end
      # verify the required parameter 'notification_client_id' is set
      if @api_client.config.client_side_validation && notification_client_id.nil?
        fail ArgumentError, "Missing the required parameter 'notification_client_id' when calling NotificationApi.get_notification_client_using_get"
      end
      # resource path
      local_var_path = '/notification_client/{notification_client_id}'.sub('{' + 'notification_client_id' + '}', notification_client_id.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'NotificationClient')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#get_notification_client_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # List all Notification Setting
    # List all Notification Setting. 
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending (default to false)
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by (default to update_date)
    # @option opts [Integer] :page page (default to 0)
    # @option opts [Integer] :size size (default to 25)
    # @return [PageNotificationSetting]
    def get_notification_setting_all_using_get(opts = {})
      data, _status_code, _headers = get_notification_setting_all_using_get_with_http_info(opts)
      data
    end

    # List all Notification Setting
    # List all Notification Setting. 
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by
    # @option opts [Integer] :page page
    # @option opts [Integer] :size size
    # @return [Array<(PageNotificationSetting, Fixnum, Hash)>] PageNotificationSetting data, response status code and response headers
    def get_notification_setting_all_using_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.get_notification_setting_all_using_get ...'
      end
      # resource path
      local_var_path = '/notification_setting'

      # query parameters
      query_params = {}
      query_params[:'ascending'] = opts[:'ascending'] if !opts[:'ascending'].nil?
      query_params[:'filter'] = opts[:'filter'] if !opts[:'filter'].nil?
      query_params[:'order_by'] = opts[:'order_by'] if !opts[:'order_by'].nil?
      query_params[:'page'] = opts[:'page'] if !opts[:'page'].nil?
      query_params[:'size'] = opts[:'size'] if !opts[:'size'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'PageNotificationSetting')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#get_notification_setting_all_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Retrieve a Notification Setting
    # Retrieve a  Notification Setting. 
    # @param notification_setting_id notification_setting_id
    # @param [Hash] opts the optional parameters
    # @return [NotificationSetting]
    def get_notification_setting_using_get(notification_setting_id, opts = {})
      data, _status_code, _headers = get_notification_setting_using_get_with_http_info(notification_setting_id, opts)
      data
    end

    # Retrieve a Notification Setting
    # Retrieve a  Notification Setting. 
    # @param notification_setting_id notification_setting_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(NotificationSetting, Fixnum, Hash)>] NotificationSetting data, response status code and response headers
    def get_notification_setting_using_get_with_http_info(notification_setting_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.get_notification_setting_using_get ...'
      end
      # verify the required parameter 'notification_setting_id' is set
      if @api_client.config.client_side_validation && notification_setting_id.nil?
        fail ArgumentError, "Missing the required parameter 'notification_setting_id' when calling NotificationApi.get_notification_setting_using_get"
      end
      # resource path
      local_var_path = '/notification_setting/{notification_setting_id}'.sub('{' + 'notification_setting_id' + '}', notification_setting_id.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'NotificationSetting')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#get_notification_setting_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Get a Notification
    # Get a Notification. 
    # @param notification_id notification_id
    # @param [Hash] opts the optional parameters
    # @return [Notification]
    def get_notification_using_get(notification_id, opts = {})
      data, _status_code, _headers = get_notification_using_get_with_http_info(notification_id, opts)
      data
    end

    # Get a Notification
    # Get a Notification. 
    # @param notification_id notification_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(Notification, Fixnum, Hash)>] Notification data, response status code and response headers
    def get_notification_using_get_with_http_info(notification_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.get_notification_using_get ...'
      end
      # verify the required parameter 'notification_id' is set
      if @api_client.config.client_side_validation && notification_id.nil?
        fail ArgumentError, "Missing the required parameter 'notification_id' when calling NotificationApi.get_notification_using_get"
      end
      # resource path
      local_var_path = '/notification/{notification_id}'.sub('{' + 'notification_id' + '}', notification_id.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Notification')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#get_notification_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Update a Notification Client
    # Update a  Notification Client. 
    # @param notification_client notification_client
    # @param notification_client_id UUID notification_client_id
    # @param [Hash] opts the optional parameters
    # @return [NotificationClient]
    def update_notification_client_using_put(notification_client, notification_client_id, opts = {})
      data, _status_code, _headers = update_notification_client_using_put_with_http_info(notification_client, notification_client_id, opts)
      data
    end

    # Update a Notification Client
    # Update a  Notification Client. 
    # @param notification_client notification_client
    # @param notification_client_id UUID notification_client_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(NotificationClient, Fixnum, Hash)>] NotificationClient data, response status code and response headers
    def update_notification_client_using_put_with_http_info(notification_client, notification_client_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.update_notification_client_using_put ...'
      end
      # verify the required parameter 'notification_client' is set
      if @api_client.config.client_side_validation && notification_client.nil?
        fail ArgumentError, "Missing the required parameter 'notification_client' when calling NotificationApi.update_notification_client_using_put"
      end
      # verify the required parameter 'notification_client_id' is set
      if @api_client.config.client_side_validation && notification_client_id.nil?
        fail ArgumentError, "Missing the required parameter 'notification_client_id' when calling NotificationApi.update_notification_client_using_put"
      end
      # resource path
      local_var_path = '/notification_client/{notification_client_id}'.sub('{' + 'notification_client_id' + '}', notification_client_id.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(notification_client)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'NotificationClient')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#update_notification_client_using_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Update a Notification Setting
    # Update a  Notification Setting. 
    # @param notification_setting notification_setting
    # @param notification_setting_id UUID notification_setting_id
    # @param [Hash] opts the optional parameters
    # @return [NotificationSetting]
    def update_notification_setting_using_put(notification_setting, notification_setting_id, opts = {})
      data, _status_code, _headers = update_notification_setting_using_put_with_http_info(notification_setting, notification_setting_id, opts)
      data
    end

    # Update a Notification Setting
    # Update a  Notification Setting. 
    # @param notification_setting notification_setting
    # @param notification_setting_id UUID notification_setting_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(NotificationSetting, Fixnum, Hash)>] NotificationSetting data, response status code and response headers
    def update_notification_setting_using_put_with_http_info(notification_setting, notification_setting_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.update_notification_setting_using_put ...'
      end
      # verify the required parameter 'notification_setting' is set
      if @api_client.config.client_side_validation && notification_setting.nil?
        fail ArgumentError, "Missing the required parameter 'notification_setting' when calling NotificationApi.update_notification_setting_using_put"
      end
      # verify the required parameter 'notification_setting_id' is set
      if @api_client.config.client_side_validation && notification_setting_id.nil?
        fail ArgumentError, "Missing the required parameter 'notification_setting_id' when calling NotificationApi.update_notification_setting_using_put"
      end
      # resource path
      local_var_path = '/notification_setting/{notification_setting_id}'.sub('{' + 'notification_setting_id' + '}', notification_setting_id.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(notification_setting)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'NotificationSetting')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#update_notification_setting_using_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Update a Notification
    # Update a Notification. 
    # @param notification notification
    # @param notification_id UUID notification_id
    # @param [Hash] opts the optional parameters
    # @return [Notification]
    def update_notification_using_put(notification, notification_id, opts = {})
      data, _status_code, _headers = update_notification_using_put_with_http_info(notification, notification_id, opts)
      data
    end

    # Update a Notification
    # Update a Notification. 
    # @param notification notification
    # @param notification_id UUID notification_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(Notification, Fixnum, Hash)>] Notification data, response status code and response headers
    def update_notification_using_put_with_http_info(notification, notification_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: NotificationApi.update_notification_using_put ...'
      end
      # verify the required parameter 'notification' is set
      if @api_client.config.client_side_validation && notification.nil?
        fail ArgumentError, "Missing the required parameter 'notification' when calling NotificationApi.update_notification_using_put"
      end
      # verify the required parameter 'notification_id' is set
      if @api_client.config.client_side_validation && notification_id.nil?
        fail ArgumentError, "Missing the required parameter 'notification_id' when calling NotificationApi.update_notification_using_put"
      end
      # resource path
      local_var_path = '/notification/{notification_id}'.sub('{' + 'notification_id' + '}', notification_id.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(notification)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Notification')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: NotificationApi#update_notification_using_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
