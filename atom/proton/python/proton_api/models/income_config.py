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


class IncomeConfig(object):
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
        'annual_net_take_home_pay': 'float',
        'percentage_of_income_covered': 'float',
        'income_benefit_duration': 'int'
    }

    attribute_map = {
        'annual_net_take_home_pay': 'annual_net_take_home_pay',
        'percentage_of_income_covered': 'percentage_of_income_covered',
        'income_benefit_duration': 'income_benefit_duration'
    }

    def __init__(self, annual_net_take_home_pay=None, percentage_of_income_covered=1.0, income_benefit_duration=10):  # noqa: E501
        """IncomeConfig - a model defined in Swagger"""  # noqa: E501

        self._annual_net_take_home_pay = None
        self._percentage_of_income_covered = None
        self._income_benefit_duration = None
        self.discriminator = None

        self.annual_net_take_home_pay = annual_net_take_home_pay
        if percentage_of_income_covered is not None:
            self.percentage_of_income_covered = percentage_of_income_covered
        if income_benefit_duration is not None:
            self.income_benefit_duration = income_benefit_duration

    @property
    def annual_net_take_home_pay(self):
        """Gets the annual_net_take_home_pay of this IncomeConfig.  # noqa: E501


        :return: The annual_net_take_home_pay of this IncomeConfig.  # noqa: E501
        :rtype: float
        """
        return self._annual_net_take_home_pay

    @annual_net_take_home_pay.setter
    def annual_net_take_home_pay(self, annual_net_take_home_pay):
        """Sets the annual_net_take_home_pay of this IncomeConfig.


        :param annual_net_take_home_pay: The annual_net_take_home_pay of this IncomeConfig.  # noqa: E501
        :type: float
        """
        if annual_net_take_home_pay is None:
            raise ValueError("Invalid value for `annual_net_take_home_pay`, must not be `None`")  # noqa: E501
        if annual_net_take_home_pay is not None and annual_net_take_home_pay < 0:  # noqa: E501
            raise ValueError("Invalid value for `annual_net_take_home_pay`, must be a value greater than or equal to `0`")  # noqa: E501

        self._annual_net_take_home_pay = annual_net_take_home_pay

    @property
    def percentage_of_income_covered(self):
        """Gets the percentage_of_income_covered of this IncomeConfig.  # noqa: E501


        :return: The percentage_of_income_covered of this IncomeConfig.  # noqa: E501
        :rtype: float
        """
        return self._percentage_of_income_covered

    @percentage_of_income_covered.setter
    def percentage_of_income_covered(self, percentage_of_income_covered):
        """Sets the percentage_of_income_covered of this IncomeConfig.


        :param percentage_of_income_covered: The percentage_of_income_covered of this IncomeConfig.  # noqa: E501
        :type: float
        """
        if percentage_of_income_covered is not None and percentage_of_income_covered > 1:  # noqa: E501
            raise ValueError("Invalid value for `percentage_of_income_covered`, must be a value less than or equal to `1`")  # noqa: E501
        if percentage_of_income_covered is not None and percentage_of_income_covered < 0:  # noqa: E501
            raise ValueError("Invalid value for `percentage_of_income_covered`, must be a value greater than or equal to `0`")  # noqa: E501

        self._percentage_of_income_covered = percentage_of_income_covered

    @property
    def income_benefit_duration(self):
        """Gets the income_benefit_duration of this IncomeConfig.  # noqa: E501


        :return: The income_benefit_duration of this IncomeConfig.  # noqa: E501
        :rtype: int
        """
        return self._income_benefit_duration

    @income_benefit_duration.setter
    def income_benefit_duration(self, income_benefit_duration):
        """Sets the income_benefit_duration of this IncomeConfig.


        :param income_benefit_duration: The income_benefit_duration of this IncomeConfig.  # noqa: E501
        :type: int
        """
        if income_benefit_duration is not None and income_benefit_duration < 1:  # noqa: E501
            raise ValueError("Invalid value for `income_benefit_duration`, must be a value greater than or equal to `1`")  # noqa: E501

        self._income_benefit_duration = income_benefit_duration

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
        if issubclass(IncomeConfig, dict):
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
        if not isinstance(other, IncomeConfig):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
