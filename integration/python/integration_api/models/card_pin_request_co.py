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


class CardPinRequestCO(object):
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
        'nucleus_card_id': 'str',
        'pin': 'str',
        'reason': 'str',
        'vendor_request': 'object'
    }

    attribute_map = {
        'nucleus_card_id': 'nucleus_card_id',
        'pin': 'pin',
        'reason': 'reason',
        'vendor_request': 'vendor_request'
    }

    def __init__(self, nucleus_card_id=None, pin=None, reason=None, vendor_request=None):  # noqa: E501
        """CardPinRequestCO - a model defined in Swagger"""  # noqa: E501

        self._nucleus_card_id = None
        self._pin = None
        self._reason = None
        self._vendor_request = None
        self.discriminator = None

        if nucleus_card_id is not None:
            self.nucleus_card_id = nucleus_card_id
        if pin is not None:
            self.pin = pin
        if reason is not None:
            self.reason = reason
        if vendor_request is not None:
            self.vendor_request = vendor_request

    @property
    def nucleus_card_id(self):
        """Gets the nucleus_card_id of this CardPinRequestCO.  # noqa: E501


        :return: The nucleus_card_id of this CardPinRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_card_id

    @nucleus_card_id.setter
    def nucleus_card_id(self, nucleus_card_id):
        """Sets the nucleus_card_id of this CardPinRequestCO.


        :param nucleus_card_id: The nucleus_card_id of this CardPinRequestCO.  # noqa: E501
        :type: str
        """

        self._nucleus_card_id = nucleus_card_id

    @property
    def pin(self):
        """Gets the pin of this CardPinRequestCO.  # noqa: E501


        :return: The pin of this CardPinRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._pin

    @pin.setter
    def pin(self, pin):
        """Sets the pin of this CardPinRequestCO.


        :param pin: The pin of this CardPinRequestCO.  # noqa: E501
        :type: str
        """

        self._pin = pin

    @property
    def reason(self):
        """Gets the reason of this CardPinRequestCO.  # noqa: E501


        :return: The reason of this CardPinRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._reason

    @reason.setter
    def reason(self, reason):
        """Sets the reason of this CardPinRequestCO.


        :param reason: The reason of this CardPinRequestCO.  # noqa: E501
        :type: str
        """

        self._reason = reason

    @property
    def vendor_request(self):
        """Gets the vendor_request of this CardPinRequestCO.  # noqa: E501


        :return: The vendor_request of this CardPinRequestCO.  # noqa: E501
        :rtype: object
        """
        return self._vendor_request

    @vendor_request.setter
    def vendor_request(self, vendor_request):
        """Sets the vendor_request of this CardPinRequestCO.


        :param vendor_request: The vendor_request of this CardPinRequestCO.  # noqa: E501
        :type: object
        """

        self._vendor_request = vendor_request

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
        if issubclass(CardPinRequestCO, dict):
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
        if not isinstance(other, CardPinRequestCO):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
