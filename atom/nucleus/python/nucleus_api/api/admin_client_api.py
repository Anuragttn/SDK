# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.2
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from nucleus_api.api_client import ApiClient


class AdminClientApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def create_admin_client_using_post(self, client, **kwargs):  # noqa: E501
        """create  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_admin_client_using_post(client, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param AdminClient client: client (required)
        :return: AdminClient
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.create_admin_client_using_post_with_http_info(client, **kwargs)  # noqa: E501
        else:
            (data) = self.create_admin_client_using_post_with_http_info(client, **kwargs)  # noqa: E501
            return data

    def create_admin_client_using_post_with_http_info(self, client, **kwargs):  # noqa: E501
        """create  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_admin_client_using_post_with_http_info(client, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param AdminClient client: client (required)
        :return: AdminClient
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['client']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method create_admin_client_using_post" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'client' is set
        if self.api_client.client_side_validation and ('client' not in params or
                                                       params['client'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `client` when calling `create_admin_client_using_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'client' in params:
            body_params = params['client']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['*/*'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/admin/v1/client', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='AdminClient',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def delete_admin_client_using_delete(self, client_id, **kwargs):  # noqa: E501
        """delete  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.delete_admin_client_using_delete(client_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param int client_id: client_id (required)
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.delete_admin_client_using_delete_with_http_info(client_id, **kwargs)  # noqa: E501
        else:
            (data) = self.delete_admin_client_using_delete_with_http_info(client_id, **kwargs)  # noqa: E501
            return data

    def delete_admin_client_using_delete_with_http_info(self, client_id, **kwargs):  # noqa: E501
        """delete  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.delete_admin_client_using_delete_with_http_info(client_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param int client_id: client_id (required)
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['client_id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method delete_admin_client_using_delete" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'client_id' is set
        if self.api_client.client_side_validation and ('client_id' not in params or
                                                       params['client_id'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `client_id` when calling `delete_admin_client_using_delete`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'client_id' in params:
            path_params['client_id'] = params['client_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['*/*'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/admin/v1/client/{client_id}', 'DELETE',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=None,  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_admin_client_using_get(self, client_id, **kwargs):  # noqa: E501
        """get  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_admin_client_using_get(client_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param int client_id: client_id (required)
        :return: AdminClient
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_admin_client_using_get_with_http_info(client_id, **kwargs)  # noqa: E501
        else:
            (data) = self.get_admin_client_using_get_with_http_info(client_id, **kwargs)  # noqa: E501
            return data

    def get_admin_client_using_get_with_http_info(self, client_id, **kwargs):  # noqa: E501
        """get  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_admin_client_using_get_with_http_info(client_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param int client_id: client_id (required)
        :return: AdminClient
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['client_id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_admin_client_using_get" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'client_id' is set
        if self.api_client.client_side_validation and ('client_id' not in params or
                                                       params['client_id'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `client_id` when calling `get_admin_client_using_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'client_id' in params:
            path_params['client_id'] = params['client_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['*/*'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/admin/v1/client/{client_id}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='AdminClient',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_all_admin_client_using_get(self, **kwargs):  # noqa: E501
        """getAllAdminClient  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_all_admin_client_using_get(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param bool ascending: ascending
        :param str filter: filter
        :param str order_by: order_by
        :param int page: page
        :param int size: size
        :return: PageAdminClient
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_all_admin_client_using_get_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.get_all_admin_client_using_get_with_http_info(**kwargs)  # noqa: E501
            return data

    def get_all_admin_client_using_get_with_http_info(self, **kwargs):  # noqa: E501
        """getAllAdminClient  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_all_admin_client_using_get_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param bool ascending: ascending
        :param str filter: filter
        :param str order_by: order_by
        :param int page: page
        :param int size: size
        :return: PageAdminClient
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['ascending', 'filter', 'order_by', 'page', 'size']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_all_admin_client_using_get" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'ascending' in params:
            query_params.append(('ascending', params['ascending']))  # noqa: E501
        if 'filter' in params:
            query_params.append(('filter', params['filter']))  # noqa: E501
        if 'order_by' in params:
            query_params.append(('order_by', params['order_by']))  # noqa: E501
        if 'page' in params:
            query_params.append(('page', params['page']))  # noqa: E501
        if 'size' in params:
            query_params.append(('size', params['size']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['*/*'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/admin/v1/client', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='PageAdminClient',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def update_admin_client_using_put(self, client, client_id, **kwargs):  # noqa: E501
        """update  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_admin_client_using_put(client, client_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param object client: client (required)
        :param int client_id: client_id (required)
        :return: AdminClient
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.update_admin_client_using_put_with_http_info(client, client_id, **kwargs)  # noqa: E501
        else:
            (data) = self.update_admin_client_using_put_with_http_info(client, client_id, **kwargs)  # noqa: E501
            return data

    def update_admin_client_using_put_with_http_info(self, client, client_id, **kwargs):  # noqa: E501
        """update  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_admin_client_using_put_with_http_info(client, client_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param object client: client (required)
        :param int client_id: client_id (required)
        :return: AdminClient
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['client', 'client_id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method update_admin_client_using_put" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'client' is set
        if self.api_client.client_side_validation and ('client' not in params or
                                                       params['client'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `client` when calling `update_admin_client_using_put`")  # noqa: E501
        # verify the required parameter 'client_id' is set
        if self.api_client.client_side_validation and ('client_id' not in params or
                                                       params['client_id'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `client_id` when calling `update_admin_client_using_put`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'client_id' in params:
            path_params['client_id'] = params['client_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'client' in params:
            body_params = params['client']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['*/*'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/admin/v1/client/{client_id}', 'PUT',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='AdminClient',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def update_client_credentials_using_post(self, client_credentials, **kwargs):  # noqa: E501
        """updateClientCredentials  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_client_credentials_using_post(client_credentials, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param ClientCredentials client_credentials: clientCredentials (required)
        :param str tenant_name: tenant-name
        :return: AdminClient
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.update_client_credentials_using_post_with_http_info(client_credentials, **kwargs)  # noqa: E501
        else:
            (data) = self.update_client_credentials_using_post_with_http_info(client_credentials, **kwargs)  # noqa: E501
            return data

    def update_client_credentials_using_post_with_http_info(self, client_credentials, **kwargs):  # noqa: E501
        """updateClientCredentials  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_client_credentials_using_post_with_http_info(client_credentials, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param ClientCredentials client_credentials: clientCredentials (required)
        :param str tenant_name: tenant-name
        :return: AdminClient
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['client_credentials', 'tenant_name']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method update_client_credentials_using_post" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'client_credentials' is set
        if self.api_client.client_side_validation and ('client_credentials' not in params or
                                                       params['client_credentials'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `client_credentials` when calling `update_client_credentials_using_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}
        if 'tenant_name' in params:
            header_params['tenant-name'] = params['tenant_name']  # noqa: E501

        form_params = []
        local_var_files = {}

        body_params = None
        if 'client_credentials' in params:
            body_params = params['client_credentials']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['*/*'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/admin/v1/client_credentials', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='AdminClient',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
