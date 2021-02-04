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


class MortgageCalculatorDownPaymentRequest(object):
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
        'mortgage_term': 'int',
        'periodic_payment': 'float',
        'home_price': 'float',
        'interest_rate': 'float'
    }

    attribute_map = {
        'mortgage_term': 'mortgage_term',
        'periodic_payment': 'periodic_payment',
        'home_price': 'home_price',
        'interest_rate': 'interest_rate'
    }

    def __init__(self, mortgage_term=360, periodic_payment=None, home_price=None, interest_rate=0.04):  # noqa: E501
        """MortgageCalculatorDownPaymentRequest - a model defined in Swagger"""  # noqa: E501

        self._mortgage_term = None
        self._periodic_payment = None
        self._home_price = None
        self._interest_rate = None
        self.discriminator = None

        if mortgage_term is not None:
            self.mortgage_term = mortgage_term
        self.periodic_payment = periodic_payment
        self.home_price = home_price
        if interest_rate is not None:
            self.interest_rate = interest_rate

    @property
    def mortgage_term(self):
        """Gets the mortgage_term of this MortgageCalculatorDownPaymentRequest.  # noqa: E501


        :return: The mortgage_term of this MortgageCalculatorDownPaymentRequest.  # noqa: E501
        :rtype: int
        """
        return self._mortgage_term

    @mortgage_term.setter
    def mortgage_term(self, mortgage_term):
        """Sets the mortgage_term of this MortgageCalculatorDownPaymentRequest.


        :param mortgage_term: The mortgage_term of this MortgageCalculatorDownPaymentRequest.  # noqa: E501
        :type: int
        """
        if mortgage_term is not None and mortgage_term > 600:  # noqa: E501
            raise ValueError("Invalid value for `mortgage_term`, must be a value less than or equal to `600`")  # noqa: E501
        if mortgage_term is not None and mortgage_term < 0:  # noqa: E501
            raise ValueError("Invalid value for `mortgage_term`, must be a value greater than or equal to `0`")  # noqa: E501

        self._mortgage_term = mortgage_term

    @property
    def periodic_payment(self):
        """Gets the periodic_payment of this MortgageCalculatorDownPaymentRequest.  # noqa: E501


        :return: The periodic_payment of this MortgageCalculatorDownPaymentRequest.  # noqa: E501
        :rtype: float
        """
        return self._periodic_payment

    @periodic_payment.setter
    def periodic_payment(self, periodic_payment):
        """Sets the periodic_payment of this MortgageCalculatorDownPaymentRequest.


        :param periodic_payment: The periodic_payment of this MortgageCalculatorDownPaymentRequest.  # noqa: E501
        :type: float
        """
        if periodic_payment is None:
            raise ValueError("Invalid value for `periodic_payment`, must not be `None`")  # noqa: E501
        if periodic_payment is not None and periodic_payment < 0:  # noqa: E501
            raise ValueError("Invalid value for `periodic_payment`, must be a value greater than or equal to `0`")  # noqa: E501

        self._periodic_payment = periodic_payment

    @property
    def home_price(self):
        """Gets the home_price of this MortgageCalculatorDownPaymentRequest.  # noqa: E501


        :return: The home_price of this MortgageCalculatorDownPaymentRequest.  # noqa: E501
        :rtype: float
        """
        return self._home_price

    @home_price.setter
    def home_price(self, home_price):
        """Sets the home_price of this MortgageCalculatorDownPaymentRequest.


        :param home_price: The home_price of this MortgageCalculatorDownPaymentRequest.  # noqa: E501
        :type: float
        """
        if home_price is None:
            raise ValueError("Invalid value for `home_price`, must not be `None`")  # noqa: E501
        if home_price is not None and home_price < 0:  # noqa: E501
            raise ValueError("Invalid value for `home_price`, must be a value greater than or equal to `0`")  # noqa: E501

        self._home_price = home_price

    @property
    def interest_rate(self):
        """Gets the interest_rate of this MortgageCalculatorDownPaymentRequest.  # noqa: E501


        :return: The interest_rate of this MortgageCalculatorDownPaymentRequest.  # noqa: E501
        :rtype: float
        """
        return self._interest_rate

    @interest_rate.setter
    def interest_rate(self, interest_rate):
        """Sets the interest_rate of this MortgageCalculatorDownPaymentRequest.


        :param interest_rate: The interest_rate of this MortgageCalculatorDownPaymentRequest.  # noqa: E501
        :type: float
        """
        if interest_rate is not None and interest_rate < 0:  # noqa: E501
            raise ValueError("Invalid value for `interest_rate`, must be a value greater than or equal to `0`")  # noqa: E501

        self._interest_rate = interest_rate

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
        if issubclass(MortgageCalculatorDownPaymentRequest, dict):
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
        if not isinstance(other, MortgageCalculatorDownPaymentRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
