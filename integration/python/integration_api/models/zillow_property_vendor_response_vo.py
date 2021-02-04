# coding: utf-8

"""
    Hydrogen Integration API

    The Hydrogen Integration API  # noqa: E501

    OpenAPI spec version: 1.2.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class ZillowPropertyVendorResponseVO(object):
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
        'currency': 'str',
        'link': 'str',
        'text': 'str',
        'zestimate': 'str',
        'zpid': 'str'
    }

    attribute_map = {
        'currency': 'currency',
        'link': 'link',
        'text': 'text',
        'zestimate': 'zestimate',
        'zpid': 'zpid'
    }

    def __init__(self, currency=None, link=None, text=None, zestimate=None, zpid=None):  # noqa: E501
        """ZillowPropertyVendorResponseVO - a model defined in Swagger"""  # noqa: E501

        self._currency = None
        self._link = None
        self._text = None
        self._zestimate = None
        self._zpid = None
        self.discriminator = None

        if currency is not None:
            self.currency = currency
        if link is not None:
            self.link = link
        if text is not None:
            self.text = text
        if zestimate is not None:
            self.zestimate = zestimate
        if zpid is not None:
            self.zpid = zpid

    @property
    def currency(self):
        """Gets the currency of this ZillowPropertyVendorResponseVO.  # noqa: E501


        :return: The currency of this ZillowPropertyVendorResponseVO.  # noqa: E501
        :rtype: str
        """
        return self._currency

    @currency.setter
    def currency(self, currency):
        """Sets the currency of this ZillowPropertyVendorResponseVO.


        :param currency: The currency of this ZillowPropertyVendorResponseVO.  # noqa: E501
        :type: str
        """

        self._currency = currency

    @property
    def link(self):
        """Gets the link of this ZillowPropertyVendorResponseVO.  # noqa: E501


        :return: The link of this ZillowPropertyVendorResponseVO.  # noqa: E501
        :rtype: str
        """
        return self._link

    @link.setter
    def link(self, link):
        """Sets the link of this ZillowPropertyVendorResponseVO.


        :param link: The link of this ZillowPropertyVendorResponseVO.  # noqa: E501
        :type: str
        """

        self._link = link

    @property
    def text(self):
        """Gets the text of this ZillowPropertyVendorResponseVO.  # noqa: E501


        :return: The text of this ZillowPropertyVendorResponseVO.  # noqa: E501
        :rtype: str
        """
        return self._text

    @text.setter
    def text(self, text):
        """Sets the text of this ZillowPropertyVendorResponseVO.


        :param text: The text of this ZillowPropertyVendorResponseVO.  # noqa: E501
        :type: str
        """

        self._text = text

    @property
    def zestimate(self):
        """Gets the zestimate of this ZillowPropertyVendorResponseVO.  # noqa: E501


        :return: The zestimate of this ZillowPropertyVendorResponseVO.  # noqa: E501
        :rtype: str
        """
        return self._zestimate

    @zestimate.setter
    def zestimate(self, zestimate):
        """Sets the zestimate of this ZillowPropertyVendorResponseVO.


        :param zestimate: The zestimate of this ZillowPropertyVendorResponseVO.  # noqa: E501
        :type: str
        """

        self._zestimate = zestimate

    @property
    def zpid(self):
        """Gets the zpid of this ZillowPropertyVendorResponseVO.  # noqa: E501


        :return: The zpid of this ZillowPropertyVendorResponseVO.  # noqa: E501
        :rtype: str
        """
        return self._zpid

    @zpid.setter
    def zpid(self, zpid):
        """Sets the zpid of this ZillowPropertyVendorResponseVO.


        :param zpid: The zpid of this ZillowPropertyVendorResponseVO.  # noqa: E501
        :type: str
        """

        self._zpid = zpid

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
        if issubclass(ZillowPropertyVendorResponseVO, dict):
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
        if not isinstance(other, ZillowPropertyVendorResponseVO):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
