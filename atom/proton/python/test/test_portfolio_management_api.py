# coding: utf-8

"""
    Hydrogen Proton API

    Financial engineering module of Hydrogen Atom  # noqa: E501

    OpenAPI spec version: 1.7.18
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import proton_api
from proton_api.api.portfolio_management_api import PortfolioManagementApi  # noqa: E501
from proton_api.rest import ApiException


class TestPortfolioManagementApi(unittest.TestCase):
    """PortfolioManagementApi unit test stubs"""

    def setUp(self):
        self.api = proton_api.api.portfolio_management_api.PortfolioManagementApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_rebalancing_signal(self):
        """Test case for rebalancing_signal

        Rebalancing Signal  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()