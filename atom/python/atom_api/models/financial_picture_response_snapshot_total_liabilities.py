# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.0.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class FinancialPictureResponseSnapshotTotalLiabilities(object):
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
        'balance': 'float',
        'latest_balance_time_stamp': 'str'
    }

    attribute_map = {
        'balance': 'balance',
        'latest_balance_time_stamp': 'latest_balance_time_stamp'
    }

    def __init__(self, balance=None, latest_balance_time_stamp=None):  # noqa: E501
        """FinancialPictureResponseSnapshotTotalLiabilities - a model defined in Swagger"""  # noqa: E501

        self._balance = None
        self._latest_balance_time_stamp = None
        self.discriminator = None

        if balance is not None:
            self.balance = balance
        if latest_balance_time_stamp is not None:
            self.latest_balance_time_stamp = latest_balance_time_stamp

    @property
    def balance(self):
        """Gets the balance of this FinancialPictureResponseSnapshotTotalLiabilities.  # noqa: E501

        Value of the total liabilities  # noqa: E501

        :return: The balance of this FinancialPictureResponseSnapshotTotalLiabilities.  # noqa: E501
        :rtype: float
        """
        return self._balance

    @balance.setter
    def balance(self, balance):
        """Sets the balance of this FinancialPictureResponseSnapshotTotalLiabilities.

        Value of the total liabilities  # noqa: E501

        :param balance: The balance of this FinancialPictureResponseSnapshotTotalLiabilities.  # noqa: E501
        :type: float
        """

        self._balance = balance

    @property
    def latest_balance_time_stamp(self):
        """Gets the latest_balance_time_stamp of this FinancialPictureResponseSnapshotTotalLiabilities.  # noqa: E501

        Date and time of the total liabilities record  # noqa: E501

        :return: The latest_balance_time_stamp of this FinancialPictureResponseSnapshotTotalLiabilities.  # noqa: E501
        :rtype: str
        """
        return self._latest_balance_time_stamp

    @latest_balance_time_stamp.setter
    def latest_balance_time_stamp(self, latest_balance_time_stamp):
        """Sets the latest_balance_time_stamp of this FinancialPictureResponseSnapshotTotalLiabilities.

        Date and time of the total liabilities record  # noqa: E501

        :param latest_balance_time_stamp: The latest_balance_time_stamp of this FinancialPictureResponseSnapshotTotalLiabilities.  # noqa: E501
        :type: str
        """

        self._latest_balance_time_stamp = latest_balance_time_stamp

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
        if issubclass(FinancialPictureResponseSnapshotTotalLiabilities, dict):
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
        if not isinstance(other, FinancialPictureResponseSnapshotTotalLiabilities):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
