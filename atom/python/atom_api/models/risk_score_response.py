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


class RiskScoreResponse(object):
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
        'risk_score': 'int'
    }

    attribute_map = {
        'risk_score': 'risk_score'
    }

    def __init__(self, risk_score=None):  # noqa: E501
        """RiskScoreResponse - a model defined in Swagger"""  # noqa: E501

        self._risk_score = None
        self.discriminator = None

        self.risk_score = risk_score

    @property
    def risk_score(self):
        """Gets the risk_score of this RiskScoreResponse.  # noqa: E501

        A risk score from 0 to 100.  # noqa: E501

        :return: The risk_score of this RiskScoreResponse.  # noqa: E501
        :rtype: int
        """
        return self._risk_score

    @risk_score.setter
    def risk_score(self, risk_score):
        """Sets the risk_score of this RiskScoreResponse.

        A risk score from 0 to 100.  # noqa: E501

        :param risk_score: The risk_score of this RiskScoreResponse.  # noqa: E501
        :type: int
        """
        if risk_score is None:
            raise ValueError("Invalid value for `risk_score`, must not be `None`")  # noqa: E501
        if risk_score is not None and risk_score > 100:  # noqa: E501
            raise ValueError("Invalid value for `risk_score`, must be a value less than or equal to `100`")  # noqa: E501
        if risk_score is not None and risk_score < 0:  # noqa: E501
            raise ValueError("Invalid value for `risk_score`, must be a value greater than or equal to `0`")  # noqa: E501

        self._risk_score = risk_score

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
        if issubclass(RiskScoreResponse, dict):
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
        if not isinstance(other, RiskScoreResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other