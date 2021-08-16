# coding: utf-8

"""
    Hydrogen Integration API

    The Hydrogen Integration API  # noqa: E501

    OpenAPI spec version: 1.3.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from integration_api.configuration import Configuration


class CardTokenResponseVO(object):
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
        'apple_payload': 'ApplePayload',
        'google_payload': 'GooglePayload',
        'message': 'str',
        'nucleus_card_id': 'str',
        'samsung_payload': 'SamsungPayload',
        'vendor_name': 'str',
        'vendor_response': 'object',
        'wallet': 'str'
    }

    attribute_map = {
        'apple_payload': 'apple_payload',
        'google_payload': 'google_payload',
        'message': 'message',
        'nucleus_card_id': 'nucleus_card_id',
        'samsung_payload': 'samsung_payload',
        'vendor_name': 'vendor_name',
        'vendor_response': 'vendor_response',
        'wallet': 'wallet'
    }

    def __init__(self, apple_payload=None, google_payload=None, message=None, nucleus_card_id=None, samsung_payload=None, vendor_name=None, vendor_response=None, wallet=None, _configuration=None):  # noqa: E501
        """CardTokenResponseVO - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._apple_payload = None
        self._google_payload = None
        self._message = None
        self._nucleus_card_id = None
        self._samsung_payload = None
        self._vendor_name = None
        self._vendor_response = None
        self._wallet = None
        self.discriminator = None

        if apple_payload is not None:
            self.apple_payload = apple_payload
        if google_payload is not None:
            self.google_payload = google_payload
        if message is not None:
            self.message = message
        if nucleus_card_id is not None:
            self.nucleus_card_id = nucleus_card_id
        if samsung_payload is not None:
            self.samsung_payload = samsung_payload
        if vendor_name is not None:
            self.vendor_name = vendor_name
        if vendor_response is not None:
            self.vendor_response = vendor_response
        if wallet is not None:
            self.wallet = wallet

    @property
    def apple_payload(self):
        """Gets the apple_payload of this CardTokenResponseVO.  # noqa: E501


        :return: The apple_payload of this CardTokenResponseVO.  # noqa: E501
        :rtype: ApplePayload
        """
        return self._apple_payload

    @apple_payload.setter
    def apple_payload(self, apple_payload):
        """Sets the apple_payload of this CardTokenResponseVO.


        :param apple_payload: The apple_payload of this CardTokenResponseVO.  # noqa: E501
        :type: ApplePayload
        """

        self._apple_payload = apple_payload

    @property
    def google_payload(self):
        """Gets the google_payload of this CardTokenResponseVO.  # noqa: E501


        :return: The google_payload of this CardTokenResponseVO.  # noqa: E501
        :rtype: GooglePayload
        """
        return self._google_payload

    @google_payload.setter
    def google_payload(self, google_payload):
        """Sets the google_payload of this CardTokenResponseVO.


        :param google_payload: The google_payload of this CardTokenResponseVO.  # noqa: E501
        :type: GooglePayload
        """

        self._google_payload = google_payload

    @property
    def message(self):
        """Gets the message of this CardTokenResponseVO.  # noqa: E501


        :return: The message of this CardTokenResponseVO.  # noqa: E501
        :rtype: str
        """
        return self._message

    @message.setter
    def message(self, message):
        """Sets the message of this CardTokenResponseVO.


        :param message: The message of this CardTokenResponseVO.  # noqa: E501
        :type: str
        """

        self._message = message

    @property
    def nucleus_card_id(self):
        """Gets the nucleus_card_id of this CardTokenResponseVO.  # noqa: E501


        :return: The nucleus_card_id of this CardTokenResponseVO.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_card_id

    @nucleus_card_id.setter
    def nucleus_card_id(self, nucleus_card_id):
        """Sets the nucleus_card_id of this CardTokenResponseVO.


        :param nucleus_card_id: The nucleus_card_id of this CardTokenResponseVO.  # noqa: E501
        :type: str
        """

        self._nucleus_card_id = nucleus_card_id

    @property
    def samsung_payload(self):
        """Gets the samsung_payload of this CardTokenResponseVO.  # noqa: E501


        :return: The samsung_payload of this CardTokenResponseVO.  # noqa: E501
        :rtype: SamsungPayload
        """
        return self._samsung_payload

    @samsung_payload.setter
    def samsung_payload(self, samsung_payload):
        """Sets the samsung_payload of this CardTokenResponseVO.


        :param samsung_payload: The samsung_payload of this CardTokenResponseVO.  # noqa: E501
        :type: SamsungPayload
        """

        self._samsung_payload = samsung_payload

    @property
    def vendor_name(self):
        """Gets the vendor_name of this CardTokenResponseVO.  # noqa: E501


        :return: The vendor_name of this CardTokenResponseVO.  # noqa: E501
        :rtype: str
        """
        return self._vendor_name

    @vendor_name.setter
    def vendor_name(self, vendor_name):
        """Sets the vendor_name of this CardTokenResponseVO.


        :param vendor_name: The vendor_name of this CardTokenResponseVO.  # noqa: E501
        :type: str
        """

        self._vendor_name = vendor_name

    @property
    def vendor_response(self):
        """Gets the vendor_response of this CardTokenResponseVO.  # noqa: E501


        :return: The vendor_response of this CardTokenResponseVO.  # noqa: E501
        :rtype: object
        """
        return self._vendor_response

    @vendor_response.setter
    def vendor_response(self, vendor_response):
        """Sets the vendor_response of this CardTokenResponseVO.


        :param vendor_response: The vendor_response of this CardTokenResponseVO.  # noqa: E501
        :type: object
        """

        self._vendor_response = vendor_response

    @property
    def wallet(self):
        """Gets the wallet of this CardTokenResponseVO.  # noqa: E501


        :return: The wallet of this CardTokenResponseVO.  # noqa: E501
        :rtype: str
        """
        return self._wallet

    @wallet.setter
    def wallet(self, wallet):
        """Sets the wallet of this CardTokenResponseVO.


        :param wallet: The wallet of this CardTokenResponseVO.  # noqa: E501
        :type: str
        """
        allowed_values = ["google", "apple", "samsung", "other"]  # noqa: E501
        if (self._configuration.client_side_validation and
                wallet not in allowed_values):
            raise ValueError(
                "Invalid value for `wallet` ({0}), must be one of {1}"  # noqa: E501
                .format(wallet, allowed_values)
            )

        self._wallet = wallet

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
        if issubclass(CardTokenResponseVO, dict):
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
        if not isinstance(other, CardTokenResponseVO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CardTokenResponseVO):
            return True

        return self.to_dict() != other.to_dict()
