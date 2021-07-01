# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.2
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class OverflowBankLinkMap(object):
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
        'amount': 'float',
        'bank_link_id': 'str',
        'max': 'float'
    }

    attribute_map = {
        'amount': 'amount',
        'bank_link_id': 'bank_link_id',
        'max': 'max'
    }

    def __init__(self, amount=None, bank_link_id=None, max=None, _configuration=None):  # noqa: E501
        """OverflowBankLinkMap - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._amount = None
        self._bank_link_id = None
        self._max = None
        self.discriminator = None

        self.amount = amount
        self.bank_link_id = bank_link_id
        if max is not None:
            self.max = max

    @property
    def amount(self):
        """Gets the amount of this OverflowBankLinkMap.  # noqa: E501

        amount  # noqa: E501

        :return: The amount of this OverflowBankLinkMap.  # noqa: E501
        :rtype: float
        """
        return self._amount

    @amount.setter
    def amount(self, amount):
        """Sets the amount of this OverflowBankLinkMap.

        amount  # noqa: E501

        :param amount: The amount of this OverflowBankLinkMap.  # noqa: E501
        :type: float
        """
        if self._configuration.client_side_validation and amount is None:
            raise ValueError("Invalid value for `amount`, must not be `None`")  # noqa: E501

        self._amount = amount

    @property
    def bank_link_id(self):
        """Gets the bank_link_id of this OverflowBankLinkMap.  # noqa: E501

        bankLinkId  # noqa: E501

        :return: The bank_link_id of this OverflowBankLinkMap.  # noqa: E501
        :rtype: str
        """
        return self._bank_link_id

    @bank_link_id.setter
    def bank_link_id(self, bank_link_id):
        """Sets the bank_link_id of this OverflowBankLinkMap.

        bankLinkId  # noqa: E501

        :param bank_link_id: The bank_link_id of this OverflowBankLinkMap.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and bank_link_id is None:
            raise ValueError("Invalid value for `bank_link_id`, must not be `None`")  # noqa: E501

        self._bank_link_id = bank_link_id

    @property
    def max(self):
        """Gets the max of this OverflowBankLinkMap.  # noqa: E501

        max  # noqa: E501

        :return: The max of this OverflowBankLinkMap.  # noqa: E501
        :rtype: float
        """
        return self._max

    @max.setter
    def max(self, max):
        """Sets the max of this OverflowBankLinkMap.

        max  # noqa: E501

        :param max: The max of this OverflowBankLinkMap.  # noqa: E501
        :type: float
        """

        self._max = max

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
        if issubclass(OverflowBankLinkMap, dict):
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
        if not isinstance(other, OverflowBankLinkMap):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, OverflowBankLinkMap):
            return True

        return self.to_dict() != other.to_dict()
