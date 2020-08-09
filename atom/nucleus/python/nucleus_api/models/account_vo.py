# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.7.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class AccountVO(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'account_asset_size': 'float',
        'account_asset_size_date': 'datetime',
        'account_created_date': 'datetime',
        'account_id': 'str',
        'account_name': 'str',
        'account_secondary_id': 'str',
        'account_type': 'str',
        'account_updated_date': 'datetime'
    }

    attribute_map = {
        'account_asset_size': 'account_asset_size',
        'account_asset_size_date': 'account_asset_size_date',
        'account_created_date': 'account_created_date',
        'account_id': 'account_id',
        'account_name': 'account_name',
        'account_secondary_id': 'account_secondary_id',
        'account_type': 'account_type',
        'account_updated_date': 'account_updated_date'
    }

    def __init__(self, account_asset_size=None, account_asset_size_date=None, account_created_date=None, account_id=None, account_name=None, account_secondary_id=None, account_type=None, account_updated_date=None):  # noqa: E501
        """AccountVO - a model defined in Swagger"""  # noqa: E501

        self._account_asset_size = None
        self._account_asset_size_date = None
        self._account_created_date = None
        self._account_id = None
        self._account_name = None
        self._account_secondary_id = None
        self._account_type = None
        self._account_updated_date = None
        self.discriminator = None

        if account_asset_size is not None:
            self.account_asset_size = account_asset_size
        if account_asset_size_date is not None:
            self.account_asset_size_date = account_asset_size_date
        if account_created_date is not None:
            self.account_created_date = account_created_date
        if account_id is not None:
            self.account_id = account_id
        if account_name is not None:
            self.account_name = account_name
        if account_secondary_id is not None:
            self.account_secondary_id = account_secondary_id
        if account_type is not None:
            self.account_type = account_type
        if account_updated_date is not None:
            self.account_updated_date = account_updated_date

    @property
    def account_asset_size(self):
        """Gets the account_asset_size of this AccountVO.  # noqa: E501


        :return: The account_asset_size of this AccountVO.  # noqa: E501
        :rtype: float
        """
        return self._account_asset_size

    @account_asset_size.setter
    def account_asset_size(self, account_asset_size):
        """Sets the account_asset_size of this AccountVO.


        :param account_asset_size: The account_asset_size of this AccountVO.  # noqa: E501
        :type: float
        """

        self._account_asset_size = account_asset_size

    @property
    def account_asset_size_date(self):
        """Gets the account_asset_size_date of this AccountVO.  # noqa: E501


        :return: The account_asset_size_date of this AccountVO.  # noqa: E501
        :rtype: datetime
        """
        return self._account_asset_size_date

    @account_asset_size_date.setter
    def account_asset_size_date(self, account_asset_size_date):
        """Sets the account_asset_size_date of this AccountVO.


        :param account_asset_size_date: The account_asset_size_date of this AccountVO.  # noqa: E501
        :type: datetime
        """

        self._account_asset_size_date = account_asset_size_date

    @property
    def account_created_date(self):
        """Gets the account_created_date of this AccountVO.  # noqa: E501


        :return: The account_created_date of this AccountVO.  # noqa: E501
        :rtype: datetime
        """
        return self._account_created_date

    @account_created_date.setter
    def account_created_date(self, account_created_date):
        """Sets the account_created_date of this AccountVO.


        :param account_created_date: The account_created_date of this AccountVO.  # noqa: E501
        :type: datetime
        """

        self._account_created_date = account_created_date

    @property
    def account_id(self):
        """Gets the account_id of this AccountVO.  # noqa: E501


        :return: The account_id of this AccountVO.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this AccountVO.


        :param account_id: The account_id of this AccountVO.  # noqa: E501
        :type: str
        """

        self._account_id = account_id

    @property
    def account_name(self):
        """Gets the account_name of this AccountVO.  # noqa: E501


        :return: The account_name of this AccountVO.  # noqa: E501
        :rtype: str
        """
        return self._account_name

    @account_name.setter
    def account_name(self, account_name):
        """Sets the account_name of this AccountVO.


        :param account_name: The account_name of this AccountVO.  # noqa: E501
        :type: str
        """

        self._account_name = account_name

    @property
    def account_secondary_id(self):
        """Gets the account_secondary_id of this AccountVO.  # noqa: E501


        :return: The account_secondary_id of this AccountVO.  # noqa: E501
        :rtype: str
        """
        return self._account_secondary_id

    @account_secondary_id.setter
    def account_secondary_id(self, account_secondary_id):
        """Sets the account_secondary_id of this AccountVO.


        :param account_secondary_id: The account_secondary_id of this AccountVO.  # noqa: E501
        :type: str
        """

        self._account_secondary_id = account_secondary_id

    @property
    def account_type(self):
        """Gets the account_type of this AccountVO.  # noqa: E501


        :return: The account_type of this AccountVO.  # noqa: E501
        :rtype: str
        """
        return self._account_type

    @account_type.setter
    def account_type(self, account_type):
        """Sets the account_type of this AccountVO.


        :param account_type: The account_type of this AccountVO.  # noqa: E501
        :type: str
        """

        self._account_type = account_type

    @property
    def account_updated_date(self):
        """Gets the account_updated_date of this AccountVO.  # noqa: E501


        :return: The account_updated_date of this AccountVO.  # noqa: E501
        :rtype: datetime
        """
        return self._account_updated_date

    @account_updated_date.setter
    def account_updated_date(self, account_updated_date):
        """Sets the account_updated_date of this AccountVO.


        :param account_updated_date: The account_updated_date of this AccountVO.  # noqa: E501
        :type: datetime
        """

        self._account_updated_date = account_updated_date

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(AccountVO, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, AccountVO):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other