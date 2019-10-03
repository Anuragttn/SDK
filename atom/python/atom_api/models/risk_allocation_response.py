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


class RiskAllocationResponse(object):
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
        'securities': 'list[str]',
        'weights': 'list[float]',
        'ret': 'float',
        'risk': 'float'
    }

    attribute_map = {
        'securities': 'securities',
        'weights': 'weights',
        'ret': 'ret',
        'risk': 'risk'
    }

    def __init__(self, securities=None, weights=None, ret=None, risk=None):  # noqa: E501
        """RiskAllocationResponse - a model defined in Swagger"""  # noqa: E501

        self._securities = None
        self._weights = None
        self._ret = None
        self._risk = None
        self.discriminator = None

        self.securities = securities
        self.weights = weights
        self.ret = ret
        self.risk = risk

    @property
    def securities(self):
        """Gets the securities of this RiskAllocationResponse.  # noqa: E501

        If allocation_method = create, the tickers of the securities that should be included in the allocation created.  # noqa: E501

        :return: The securities of this RiskAllocationResponse.  # noqa: E501
        :rtype: list[str]
        """
        return self._securities

    @securities.setter
    def securities(self, securities):
        """Sets the securities of this RiskAllocationResponse.

        If allocation_method = create, the tickers of the securities that should be included in the allocation created.  # noqa: E501

        :param securities: The securities of this RiskAllocationResponse.  # noqa: E501
        :type: list[str]
        """
        if securities is None:
            raise ValueError("Invalid value for `securities`, must not be `None`")  # noqa: E501

        self._securities = securities

    @property
    def weights(self):
        """Gets the weights of this RiskAllocationResponse.  # noqa: E501

        If allocation_method = create, the weights of each security that should be included in the allocation created.  # noqa: E501

        :return: The weights of this RiskAllocationResponse.  # noqa: E501
        :rtype: list[float]
        """
        return self._weights

    @weights.setter
    def weights(self, weights):
        """Sets the weights of this RiskAllocationResponse.

        If allocation_method = create, the weights of each security that should be included in the allocation created.  # noqa: E501

        :param weights: The weights of this RiskAllocationResponse.  # noqa: E501
        :type: list[float]
        """
        if weights is None:
            raise ValueError("Invalid value for `weights`, must not be `None`")  # noqa: E501

        self._weights = weights

    @property
    def ret(self):
        """Gets the ret of this RiskAllocationResponse.  # noqa: E501

        The annualized return of the portfolio.  # noqa: E501

        :return: The ret of this RiskAllocationResponse.  # noqa: E501
        :rtype: float
        """
        return self._ret

    @ret.setter
    def ret(self, ret):
        """Sets the ret of this RiskAllocationResponse.

        The annualized return of the portfolio.  # noqa: E501

        :param ret: The ret of this RiskAllocationResponse.  # noqa: E501
        :type: float
        """
        if ret is None:
            raise ValueError("Invalid value for `ret`, must not be `None`")  # noqa: E501

        self._ret = ret

    @property
    def risk(self):
        """Gets the risk of this RiskAllocationResponse.  # noqa: E501

        The annualized standard deviation of the portfolio.  # noqa: E501

        :return: The risk of this RiskAllocationResponse.  # noqa: E501
        :rtype: float
        """
        return self._risk

    @risk.setter
    def risk(self, risk):
        """Sets the risk of this RiskAllocationResponse.

        The annualized standard deviation of the portfolio.  # noqa: E501

        :param risk: The risk of this RiskAllocationResponse.  # noqa: E501
        :type: float
        """
        if risk is None:
            raise ValueError("Invalid value for `risk`, must not be `None`")  # noqa: E501
        if risk is not None and risk < 0:  # noqa: E501
            raise ValueError("Invalid value for `risk`, must be a value greater than or equal to `0`")  # noqa: E501

        self._risk = risk

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
        if issubclass(RiskAllocationResponse, dict):
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
        if not isinstance(other, RiskAllocationResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
