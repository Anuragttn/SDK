# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.5
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import nucleus_api
from nucleus_api.api.securities_api import SecuritiesApi  # noqa: E501
from nucleus_api.rest import ApiException


class TestSecuritiesApi(unittest.TestCase):
    """SecuritiesApi unit test stubs"""

    def setUp(self):
        self.api = nucleus_api.api.securities_api.SecuritiesApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_security_exclusion_using_post(self):
        """Test case for create_security_exclusion_using_post

        Create a security exclusion  # noqa: E501
        """
        pass

    def test_create_security_price_using_post(self):
        """Test case for create_security_price_using_post

        Create a security price  # noqa: E501
        """
        pass

    def test_create_security_using_post(self):
        """Test case for create_security_using_post

        Create a security  # noqa: E501
        """
        pass

    def test_delete_security_exclusion_using_delete(self):
        """Test case for delete_security_exclusion_using_delete

        Delete a security exclusion  # noqa: E501
        """
        pass

    def test_delete_security_price_using_delete(self):
        """Test case for delete_security_price_using_delete

        Delete a security price  # noqa: E501
        """
        pass

    def test_delete_security_using_delete(self):
        """Test case for delete_security_using_delete

        Delete a security  # noqa: E501
        """
        pass

    def test_get_security_all_using_get(self):
        """Test case for get_security_all_using_get

        List all securities  # noqa: E501
        """
        pass

    def test_get_security_exclusion_all_using_get(self):
        """Test case for get_security_exclusion_all_using_get

        List all security exclusions  # noqa: E501
        """
        pass

    def test_get_security_exclusion_using_get(self):
        """Test case for get_security_exclusion_using_get

        Retrieve a security exclusion  # noqa: E501
        """
        pass

    def test_get_security_price_all_using_get(self):
        """Test case for get_security_price_all_using_get

        List all security prices  # noqa: E501
        """
        pass

    def test_get_security_price_using_get(self):
        """Test case for get_security_price_using_get

        Retrieve a security price  # noqa: E501
        """
        pass

    def test_get_security_using_get(self):
        """Test case for get_security_using_get

        Retrieve a security  # noqa: E501
        """
        pass

    def test_update_security_exclusion_using_put(self):
        """Test case for update_security_exclusion_using_put

        Update a security exclusion  # noqa: E501
        """
        pass

    def test_update_security_price_using_put(self):
        """Test case for update_security_price_using_put

        Update a security price  # noqa: E501
        """
        pass

    def test_update_security_using_put(self):
        """Test case for update_security_using_put

        Update a security  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
