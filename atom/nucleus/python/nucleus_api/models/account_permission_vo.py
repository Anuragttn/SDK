# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.5
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class AccountPermissionVO(object):
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
        'account_id': 'str',
        'clients': 'list[PermissionVO]'
    }

    attribute_map = {
        'account_id': 'account_id',
        'clients': 'clients'
    }

    def __init__(self, account_id=None, clients=None, _configuration=None):  # noqa: E501
        """AccountPermissionVO - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._account_id = None
        self._clients = None
        self.discriminator = None

        if account_id is not None:
            self.account_id = account_id
        if clients is not None:
            self.clients = clients

    @property
    def account_id(self):
        """Gets the account_id of this AccountPermissionVO.  # noqa: E501

        accountId  # noqa: E501

        :return: The account_id of this AccountPermissionVO.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this AccountPermissionVO.

        accountId  # noqa: E501

        :param account_id: The account_id of this AccountPermissionVO.  # noqa: E501
        :type: str
        """

        self._account_id = account_id

    @property
    def clients(self):
        """Gets the clients of this AccountPermissionVO.  # noqa: E501

        PermissionVO  # noqa: E501

        :return: The clients of this AccountPermissionVO.  # noqa: E501
        :rtype: list[PermissionVO]
        """
        return self._clients

    @clients.setter
    def clients(self, clients):
        """Sets the clients of this AccountPermissionVO.

        PermissionVO  # noqa: E501

        :param clients: The clients of this AccountPermissionVO.  # noqa: E501
        :type: list[PermissionVO]
        """

        self._clients = clients

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
        if issubclass(AccountPermissionVO, dict):
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
        if not isinstance(other, AccountPermissionVO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, AccountPermissionVO):
            return True

        return self.to_dict() != other.to_dict()
