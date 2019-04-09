# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.0.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class GoalAssetWeightConfig(object):
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
        'us_equities': 'float',
        'fixed_income': 'float',
        'intl_equities': 'float',
        'em_equities': 'float',
        'commodities': 'float'
    }

    attribute_map = {
        'us_equities': 'US_Equities',
        'fixed_income': 'Fixed_Income',
        'intl_equities': 'Intl_Equities',
        'em_equities': 'EM_Equities',
        'commodities': 'Commodities'
    }

    def __init__(self, us_equities=None, fixed_income=None, intl_equities=None, em_equities=None, commodities=None):  # noqa: E501
        """GoalAssetWeightConfig - a model defined in Swagger"""  # noqa: E501

        self._us_equities = None
        self._fixed_income = None
        self._intl_equities = None
        self._em_equities = None
        self._commodities = None
        self.discriminator = None

        if us_equities is not None:
            self.us_equities = us_equities
        if fixed_income is not None:
            self.fixed_income = fixed_income
        if intl_equities is not None:
            self.intl_equities = intl_equities
        if em_equities is not None:
            self.em_equities = em_equities
        if commodities is not None:
            self.commodities = commodities

    @property
    def us_equities(self):
        """Gets the us_equities of this GoalAssetWeightConfig.  # noqa: E501

        Weight of US equities  # noqa: E501

        :return: The us_equities of this GoalAssetWeightConfig.  # noqa: E501
        :rtype: float
        """
        return self._us_equities

    @us_equities.setter
    def us_equities(self, us_equities):
        """Sets the us_equities of this GoalAssetWeightConfig.

        Weight of US equities  # noqa: E501

        :param us_equities: The us_equities of this GoalAssetWeightConfig.  # noqa: E501
        :type: float
        """
        if us_equities is not None and us_equities > 1:  # noqa: E501
            raise ValueError("Invalid value for `us_equities`, must be a value less than or equal to `1`")  # noqa: E501
        if us_equities is not None and us_equities < 0:  # noqa: E501
            raise ValueError("Invalid value for `us_equities`, must be a value greater than or equal to `0`")  # noqa: E501

        self._us_equities = us_equities

    @property
    def fixed_income(self):
        """Gets the fixed_income of this GoalAssetWeightConfig.  # noqa: E501

        Weight of fixed income  # noqa: E501

        :return: The fixed_income of this GoalAssetWeightConfig.  # noqa: E501
        :rtype: float
        """
        return self._fixed_income

    @fixed_income.setter
    def fixed_income(self, fixed_income):
        """Sets the fixed_income of this GoalAssetWeightConfig.

        Weight of fixed income  # noqa: E501

        :param fixed_income: The fixed_income of this GoalAssetWeightConfig.  # noqa: E501
        :type: float
        """
        if fixed_income is not None and fixed_income > 1:  # noqa: E501
            raise ValueError("Invalid value for `fixed_income`, must be a value less than or equal to `1`")  # noqa: E501
        if fixed_income is not None and fixed_income < 0:  # noqa: E501
            raise ValueError("Invalid value for `fixed_income`, must be a value greater than or equal to `0`")  # noqa: E501

        self._fixed_income = fixed_income

    @property
    def intl_equities(self):
        """Gets the intl_equities of this GoalAssetWeightConfig.  # noqa: E501

        Weight of international equities  # noqa: E501

        :return: The intl_equities of this GoalAssetWeightConfig.  # noqa: E501
        :rtype: float
        """
        return self._intl_equities

    @intl_equities.setter
    def intl_equities(self, intl_equities):
        """Sets the intl_equities of this GoalAssetWeightConfig.

        Weight of international equities  # noqa: E501

        :param intl_equities: The intl_equities of this GoalAssetWeightConfig.  # noqa: E501
        :type: float
        """
        if intl_equities is not None and intl_equities > 1:  # noqa: E501
            raise ValueError("Invalid value for `intl_equities`, must be a value less than or equal to `1`")  # noqa: E501
        if intl_equities is not None and intl_equities < 0:  # noqa: E501
            raise ValueError("Invalid value for `intl_equities`, must be a value greater than or equal to `0`")  # noqa: E501

        self._intl_equities = intl_equities

    @property
    def em_equities(self):
        """Gets the em_equities of this GoalAssetWeightConfig.  # noqa: E501

        Weight of emerging market equities  # noqa: E501

        :return: The em_equities of this GoalAssetWeightConfig.  # noqa: E501
        :rtype: float
        """
        return self._em_equities

    @em_equities.setter
    def em_equities(self, em_equities):
        """Sets the em_equities of this GoalAssetWeightConfig.

        Weight of emerging market equities  # noqa: E501

        :param em_equities: The em_equities of this GoalAssetWeightConfig.  # noqa: E501
        :type: float
        """
        if em_equities is not None and em_equities > 1:  # noqa: E501
            raise ValueError("Invalid value for `em_equities`, must be a value less than or equal to `1`")  # noqa: E501
        if em_equities is not None and em_equities < 0:  # noqa: E501
            raise ValueError("Invalid value for `em_equities`, must be a value greater than or equal to `0`")  # noqa: E501

        self._em_equities = em_equities

    @property
    def commodities(self):
        """Gets the commodities of this GoalAssetWeightConfig.  # noqa: E501

        Weight of commodities  # noqa: E501

        :return: The commodities of this GoalAssetWeightConfig.  # noqa: E501
        :rtype: float
        """
        return self._commodities

    @commodities.setter
    def commodities(self, commodities):
        """Sets the commodities of this GoalAssetWeightConfig.

        Weight of commodities  # noqa: E501

        :param commodities: The commodities of this GoalAssetWeightConfig.  # noqa: E501
        :type: float
        """
        if commodities is not None and commodities > 1:  # noqa: E501
            raise ValueError("Invalid value for `commodities`, must be a value less than or equal to `1`")  # noqa: E501
        if commodities is not None and commodities < 0:  # noqa: E501
            raise ValueError("Invalid value for `commodities`, must be a value greater than or equal to `0`")  # noqa: E501

        self._commodities = commodities

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
        if issubclass(GoalAssetWeightConfig, dict):
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
        if not isinstance(other, GoalAssetWeightConfig):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other