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


class BeneficiaryBequestConfig(object):
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
        'bequest_duration': 'int',
        'bequest_amount': 'float',
        'years_until_bequest': 'int'
    }

    attribute_map = {
        'bequest_duration': 'bequest_duration',
        'bequest_amount': 'bequest_amount',
        'years_until_bequest': 'years_until_bequest'
    }

    def __init__(self, bequest_duration=10, bequest_amount=None, years_until_bequest=0):  # noqa: E501
        """BeneficiaryBequestConfig - a model defined in Swagger"""  # noqa: E501

        self._bequest_duration = None
        self._bequest_amount = None
        self._years_until_bequest = None
        self.discriminator = None

        if bequest_duration is not None:
            self.bequest_duration = bequest_duration
        self.bequest_amount = bequest_amount
        if years_until_bequest is not None:
            self.years_until_bequest = years_until_bequest

    @property
    def bequest_duration(self):
        """Gets the bequest_duration of this BeneficiaryBequestConfig.  # noqa: E501


        :return: The bequest_duration of this BeneficiaryBequestConfig.  # noqa: E501
        :rtype: int
        """
        return self._bequest_duration

    @bequest_duration.setter
    def bequest_duration(self, bequest_duration):
        """Sets the bequest_duration of this BeneficiaryBequestConfig.


        :param bequest_duration: The bequest_duration of this BeneficiaryBequestConfig.  # noqa: E501
        :type: int
        """
        if bequest_duration is not None and bequest_duration < 1:  # noqa: E501
            raise ValueError("Invalid value for `bequest_duration`, must be a value greater than or equal to `1`")  # noqa: E501

        self._bequest_duration = bequest_duration

    @property
    def bequest_amount(self):
        """Gets the bequest_amount of this BeneficiaryBequestConfig.  # noqa: E501


        :return: The bequest_amount of this BeneficiaryBequestConfig.  # noqa: E501
        :rtype: float
        """
        return self._bequest_amount

    @bequest_amount.setter
    def bequest_amount(self, bequest_amount):
        """Sets the bequest_amount of this BeneficiaryBequestConfig.


        :param bequest_amount: The bequest_amount of this BeneficiaryBequestConfig.  # noqa: E501
        :type: float
        """
        if bequest_amount is None:
            raise ValueError("Invalid value for `bequest_amount`, must not be `None`")  # noqa: E501
        if bequest_amount is not None and bequest_amount < 0:  # noqa: E501
            raise ValueError("Invalid value for `bequest_amount`, must be a value greater than or equal to `0`")  # noqa: E501

        self._bequest_amount = bequest_amount

    @property
    def years_until_bequest(self):
        """Gets the years_until_bequest of this BeneficiaryBequestConfig.  # noqa: E501


        :return: The years_until_bequest of this BeneficiaryBequestConfig.  # noqa: E501
        :rtype: int
        """
        return self._years_until_bequest

    @years_until_bequest.setter
    def years_until_bequest(self, years_until_bequest):
        """Sets the years_until_bequest of this BeneficiaryBequestConfig.


        :param years_until_bequest: The years_until_bequest of this BeneficiaryBequestConfig.  # noqa: E501
        :type: int
        """
        if years_until_bequest is not None and years_until_bequest < 0:  # noqa: E501
            raise ValueError("Invalid value for `years_until_bequest`, must be a value greater than or equal to `0`")  # noqa: E501

        self._years_until_bequest = years_until_bequest

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
        if issubclass(BeneficiaryBequestConfig, dict):
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
        if not isinstance(other, BeneficiaryBequestConfig):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
