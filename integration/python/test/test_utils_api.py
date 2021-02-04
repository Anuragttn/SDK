# coding: utf-8

"""
    Hydrogen Integration API

    The Hydrogen Integration API  # noqa: E501

    OpenAPI spec version: 1.2.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import integration_api
from integration_api.api.utils_api import UtilsApi  # noqa: E501
from integration_api.rest import ApiException


class TestUtilsApi(unittest.TestCase):
    """UtilsApi unit test stubs"""

    def setUp(self):
        self.api = integration_api.api.utils_api.UtilsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_token_exchange_using_post(self):
        """Test case for create_token_exchange_using_post

        Retrieve token based on certain vendor specific value  # noqa: E501
        """
        pass

    def test_create_user_using_post(self):
        """Test case for create_user_using_post

        Create user in vendor  # noqa: E501
        """
        pass

    def test_get_audit_log_all_using_get(self):
        """Test case for get_audit_log_all_using_get

        Gel all audit log  # noqa: E501
        """
        pass

    def test_get_widget_link_using_get(self):
        """Test case for get_widget_link_using_get

        Retrieve widget link  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
