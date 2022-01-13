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
from nucleus_api.api.goal_api import GoalApi  # noqa: E501
from nucleus_api.rest import ApiException


class TestGoalApi(unittest.TestCase):
    """GoalApi unit test stubs"""

    def setUp(self):
        self.api = nucleus_api.api.goal_api.GoalApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_goal_track_using_post(self):
        """Test case for create_goal_track_using_post

        Create a goal track record  # noqa: E501
        """
        pass

    def test_create_goal_using_post(self):
        """Test case for create_goal_using_post

        Create a goal  # noqa: E501
        """
        pass

    def test_delete_goal_track_using_delete(self):
        """Test case for delete_goal_track_using_delete

        Delete a goal track record  # noqa: E501
        """
        pass

    def test_delete_goal_using_delete(self):
        """Test case for delete_goal_using_delete

        Delete a goal  # noqa: E501
        """
        pass

    def test_get_goal_all_using_get(self):
        """Test case for get_goal_all_using_get

        List all goals  # noqa: E501
        """
        pass

    def test_get_goal_asset_size_all_using_get(self):
        """Test case for get_goal_asset_size_all_using_get

        List goal asset sizes  # noqa: E501
        """
        pass

    def test_get_goal_holding_all_using_get(self):
        """Test case for get_goal_holding_all_using_get

        List goal holdings  # noqa: E501
        """
        pass

    def test_get_goal_track_all_using_get(self):
        """Test case for get_goal_track_all_using_get

        List all goal track records  # noqa: E501
        """
        pass

    def test_get_goal_track_using_get(self):
        """Test case for get_goal_track_using_get

        Retrieve a goal track record  # noqa: E501
        """
        pass

    def test_get_goal_transaction_all_using_get(self):
        """Test case for get_goal_transaction_all_using_get

        List goal transactions  # noqa: E501
        """
        pass

    def test_get_goal_using_get(self):
        """Test case for get_goal_using_get

        Retrieve a goal  # noqa: E501
        """
        pass

    def test_update_goal_track_using_put(self):
        """Test case for update_goal_track_using_put

        Update a goal track record  # noqa: E501
        """
        pass

    def test_update_goal_using_put(self):
        """Test case for update_goal_using_put

        Update a goal  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
