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


class WhatIfPortfolio(object):
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
        'current_portfolio_tickers': 'list[str]',
        'current_portfolio_weights': 'list[float]',
        'altered_portfolio_tickers': 'list[str]',
        'altered_portfolio_weights': 'list[float]',
        'start_date': 'date',
        'end_date': 'date',
        'use_proxy_data': 'bool'
    }

    attribute_map = {
        'current_portfolio_tickers': 'current_portfolio_tickers',
        'current_portfolio_weights': 'current_portfolio_weights',
        'altered_portfolio_tickers': 'altered_portfolio_tickers',
        'altered_portfolio_weights': 'altered_portfolio_weights',
        'start_date': 'start_date',
        'end_date': 'end_date',
        'use_proxy_data': 'use_proxy_data'
    }

    def __init__(self, current_portfolio_tickers=None, current_portfolio_weights=None, altered_portfolio_tickers=None, altered_portfolio_weights=None, start_date=None, end_date=None, use_proxy_data=False):  # noqa: E501
        """WhatIfPortfolio - a model defined in Swagger"""  # noqa: E501

        self._current_portfolio_tickers = None
        self._current_portfolio_weights = None
        self._altered_portfolio_tickers = None
        self._altered_portfolio_weights = None
        self._start_date = None
        self._end_date = None
        self._use_proxy_data = None
        self.discriminator = None

        self.current_portfolio_tickers = current_portfolio_tickers
        self.current_portfolio_weights = current_portfolio_weights
        if altered_portfolio_tickers is not None:
            self.altered_portfolio_tickers = altered_portfolio_tickers
        self.altered_portfolio_weights = altered_portfolio_weights
        if start_date is not None:
            self.start_date = start_date
        if end_date is not None:
            self.end_date = end_date
        if use_proxy_data is not None:
            self.use_proxy_data = use_proxy_data

    @property
    def current_portfolio_tickers(self):
        """Gets the current_portfolio_tickers of this WhatIfPortfolio.  # noqa: E501

        Tickers of current portfolio holdings  # noqa: E501

        :return: The current_portfolio_tickers of this WhatIfPortfolio.  # noqa: E501
        :rtype: list[str]
        """
        return self._current_portfolio_tickers

    @current_portfolio_tickers.setter
    def current_portfolio_tickers(self, current_portfolio_tickers):
        """Sets the current_portfolio_tickers of this WhatIfPortfolio.

        Tickers of current portfolio holdings  # noqa: E501

        :param current_portfolio_tickers: The current_portfolio_tickers of this WhatIfPortfolio.  # noqa: E501
        :type: list[str]
        """
        if current_portfolio_tickers is None:
            raise ValueError("Invalid value for `current_portfolio_tickers`, must not be `None`")  # noqa: E501

        self._current_portfolio_tickers = current_portfolio_tickers

    @property
    def current_portfolio_weights(self):
        """Gets the current_portfolio_weights of this WhatIfPortfolio.  # noqa: E501

        Weights of current portfolio holdings  # noqa: E501

        :return: The current_portfolio_weights of this WhatIfPortfolio.  # noqa: E501
        :rtype: list[float]
        """
        return self._current_portfolio_weights

    @current_portfolio_weights.setter
    def current_portfolio_weights(self, current_portfolio_weights):
        """Sets the current_portfolio_weights of this WhatIfPortfolio.

        Weights of current portfolio holdings  # noqa: E501

        :param current_portfolio_weights: The current_portfolio_weights of this WhatIfPortfolio.  # noqa: E501
        :type: list[float]
        """
        if current_portfolio_weights is None:
            raise ValueError("Invalid value for `current_portfolio_weights`, must not be `None`")  # noqa: E501

        self._current_portfolio_weights = current_portfolio_weights

    @property
    def altered_portfolio_tickers(self):
        """Gets the altered_portfolio_tickers of this WhatIfPortfolio.  # noqa: E501

        Tickers of altered portfolio holdings  # noqa: E501

        :return: The altered_portfolio_tickers of this WhatIfPortfolio.  # noqa: E501
        :rtype: list[str]
        """
        return self._altered_portfolio_tickers

    @altered_portfolio_tickers.setter
    def altered_portfolio_tickers(self, altered_portfolio_tickers):
        """Sets the altered_portfolio_tickers of this WhatIfPortfolio.

        Tickers of altered portfolio holdings  # noqa: E501

        :param altered_portfolio_tickers: The altered_portfolio_tickers of this WhatIfPortfolio.  # noqa: E501
        :type: list[str]
        """

        self._altered_portfolio_tickers = altered_portfolio_tickers

    @property
    def altered_portfolio_weights(self):
        """Gets the altered_portfolio_weights of this WhatIfPortfolio.  # noqa: E501

        Weights of altered portfolio holdings  # noqa: E501

        :return: The altered_portfolio_weights of this WhatIfPortfolio.  # noqa: E501
        :rtype: list[float]
        """
        return self._altered_portfolio_weights

    @altered_portfolio_weights.setter
    def altered_portfolio_weights(self, altered_portfolio_weights):
        """Sets the altered_portfolio_weights of this WhatIfPortfolio.

        Weights of altered portfolio holdings  # noqa: E501

        :param altered_portfolio_weights: The altered_portfolio_weights of this WhatIfPortfolio.  # noqa: E501
        :type: list[float]
        """
        if altered_portfolio_weights is None:
            raise ValueError("Invalid value for `altered_portfolio_weights`, must not be `None`")  # noqa: E501

        self._altered_portfolio_weights = altered_portfolio_weights

    @property
    def start_date(self):
        """Gets the start_date of this WhatIfPortfolio.  # noqa: E501

        Start date of portfolio returns for the comparison  # noqa: E501

        :return: The start_date of this WhatIfPortfolio.  # noqa: E501
        :rtype: date
        """
        return self._start_date

    @start_date.setter
    def start_date(self, start_date):
        """Sets the start_date of this WhatIfPortfolio.

        Start date of portfolio returns for the comparison  # noqa: E501

        :param start_date: The start_date of this WhatIfPortfolio.  # noqa: E501
        :type: date
        """

        self._start_date = start_date

    @property
    def end_date(self):
        """Gets the end_date of this WhatIfPortfolio.  # noqa: E501

        End date of portfolio returns for the comparison  # noqa: E501

        :return: The end_date of this WhatIfPortfolio.  # noqa: E501
        :rtype: date
        """
        return self._end_date

    @end_date.setter
    def end_date(self, end_date):
        """Sets the end_date of this WhatIfPortfolio.

        End date of portfolio returns for the comparison  # noqa: E501

        :param end_date: The end_date of this WhatIfPortfolio.  # noqa: E501
        :type: date
        """

        self._end_date = end_date

    @property
    def use_proxy_data(self):
        """Gets the use_proxy_data of this WhatIfPortfolio.  # noqa: E501

        If true, incorporate proxy price data as defined at the Security level in the Nucleus API. Proxy data is merged with base security data to form a continuous price history. Defaults to false.  # noqa: E501

        :return: The use_proxy_data of this WhatIfPortfolio.  # noqa: E501
        :rtype: bool
        """
        return self._use_proxy_data

    @use_proxy_data.setter
    def use_proxy_data(self, use_proxy_data):
        """Sets the use_proxy_data of this WhatIfPortfolio.

        If true, incorporate proxy price data as defined at the Security level in the Nucleus API. Proxy data is merged with base security data to form a continuous price history. Defaults to false.  # noqa: E501

        :param use_proxy_data: The use_proxy_data of this WhatIfPortfolio.  # noqa: E501
        :type: bool
        """

        self._use_proxy_data = use_proxy_data

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
        if issubclass(WhatIfPortfolio, dict):
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
        if not isinstance(other, WhatIfPortfolio):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
