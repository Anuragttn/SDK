# coding: utf-8

"""
    Hydrogen Proton API

    Financial engineering module of Hydrogen Atom  # noqa: E501

    OpenAPI spec version: 1.8.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class SavingsDepositSchedule(object):
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
        'adjust_deposit_for_inflation': 'bool',
        'deposit_frequency_interval': 'str',
        'deposit_amount': 'float',
        'deposit_duration': 'int'
    }

    attribute_map = {
        'adjust_deposit_for_inflation': 'adjust_deposit_for_inflation',
        'deposit_frequency_interval': 'deposit_frequency_interval',
        'deposit_amount': 'deposit_amount',
        'deposit_duration': 'deposit_duration'
    }

    def __init__(self, adjust_deposit_for_inflation=True, deposit_frequency_interval='year', deposit_amount=None, deposit_duration=None):  # noqa: E501
        """SavingsDepositSchedule - a model defined in Swagger"""  # noqa: E501

        self._adjust_deposit_for_inflation = None
        self._deposit_frequency_interval = None
        self._deposit_amount = None
        self._deposit_duration = None
        self.discriminator = None

        if adjust_deposit_for_inflation is not None:
            self.adjust_deposit_for_inflation = adjust_deposit_for_inflation
        if deposit_frequency_interval is not None:
            self.deposit_frequency_interval = deposit_frequency_interval
        if deposit_amount is not None:
            self.deposit_amount = deposit_amount
        if deposit_duration is not None:
            self.deposit_duration = deposit_duration

    @property
    def adjust_deposit_for_inflation(self):
        """Gets the adjust_deposit_for_inflation of this SavingsDepositSchedule.  # noqa: E501


        :return: The adjust_deposit_for_inflation of this SavingsDepositSchedule.  # noqa: E501
        :rtype: bool
        """
        return self._adjust_deposit_for_inflation

    @adjust_deposit_for_inflation.setter
    def adjust_deposit_for_inflation(self, adjust_deposit_for_inflation):
        """Sets the adjust_deposit_for_inflation of this SavingsDepositSchedule.


        :param adjust_deposit_for_inflation: The adjust_deposit_for_inflation of this SavingsDepositSchedule.  # noqa: E501
        :type: bool
        """

        self._adjust_deposit_for_inflation = adjust_deposit_for_inflation

    @property
    def deposit_frequency_interval(self):
        """Gets the deposit_frequency_interval of this SavingsDepositSchedule.  # noqa: E501


        :return: The deposit_frequency_interval of this SavingsDepositSchedule.  # noqa: E501
        :rtype: str
        """
        return self._deposit_frequency_interval

    @deposit_frequency_interval.setter
    def deposit_frequency_interval(self, deposit_frequency_interval):
        """Sets the deposit_frequency_interval of this SavingsDepositSchedule.


        :param deposit_frequency_interval: The deposit_frequency_interval of this SavingsDepositSchedule.  # noqa: E501
        :type: str
        """
        allowed_values = ["year", "quarter", "month", "week", "day"]  # noqa: E501
        if deposit_frequency_interval not in allowed_values:
            raise ValueError(
                "Invalid value for `deposit_frequency_interval` ({0}), must be one of {1}"  # noqa: E501
                .format(deposit_frequency_interval, allowed_values)
            )

        self._deposit_frequency_interval = deposit_frequency_interval

    @property
    def deposit_amount(self):
        """Gets the deposit_amount of this SavingsDepositSchedule.  # noqa: E501


        :return: The deposit_amount of this SavingsDepositSchedule.  # noqa: E501
        :rtype: float
        """
        return self._deposit_amount

    @deposit_amount.setter
    def deposit_amount(self, deposit_amount):
        """Sets the deposit_amount of this SavingsDepositSchedule.


        :param deposit_amount: The deposit_amount of this SavingsDepositSchedule.  # noqa: E501
        :type: float
        """
        if deposit_amount is not None and deposit_amount < 0:  # noqa: E501
            raise ValueError("Invalid value for `deposit_amount`, must be a value greater than or equal to `0`")  # noqa: E501

        self._deposit_amount = deposit_amount

    @property
    def deposit_duration(self):
        """Gets the deposit_duration of this SavingsDepositSchedule.  # noqa: E501


        :return: The deposit_duration of this SavingsDepositSchedule.  # noqa: E501
        :rtype: int
        """
        return self._deposit_duration

    @deposit_duration.setter
    def deposit_duration(self, deposit_duration):
        """Sets the deposit_duration of this SavingsDepositSchedule.


        :param deposit_duration: The deposit_duration of this SavingsDepositSchedule.  # noqa: E501
        :type: int
        """
        if deposit_duration is not None and deposit_duration < 1:  # noqa: E501
            raise ValueError("Invalid value for `deposit_duration`, must be a value greater than or equal to `1`")  # noqa: E501

        self._deposit_duration = deposit_duration

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
        if issubclass(SavingsDepositSchedule, dict):
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
        if not isinstance(other, SavingsDepositSchedule):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
