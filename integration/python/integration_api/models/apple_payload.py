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


class ApplePayload(object):
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
        'activation_data': 'str',
        'encrypted_pass_data': 'str',
        'ephemeral_public_key': 'str'
    }

    attribute_map = {
        'activation_data': 'activation_data',
        'encrypted_pass_data': 'encrypted_pass_data',
        'ephemeral_public_key': 'ephemeral_public_key'
    }

    def __init__(self, activation_data=None, encrypted_pass_data=None, ephemeral_public_key=None, _configuration=None):  # noqa: E501
        """ApplePayload - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._activation_data = None
        self._encrypted_pass_data = None
        self._ephemeral_public_key = None
        self.discriminator = None

        if activation_data is not None:
            self.activation_data = activation_data
        if encrypted_pass_data is not None:
            self.encrypted_pass_data = encrypted_pass_data
        if ephemeral_public_key is not None:
            self.ephemeral_public_key = ephemeral_public_key

    @property
    def activation_data(self):
        """Gets the activation_data of this ApplePayload.  # noqa: E501


        :return: The activation_data of this ApplePayload.  # noqa: E501
        :rtype: str
        """
        return self._activation_data

    @activation_data.setter
    def activation_data(self, activation_data):
        """Sets the activation_data of this ApplePayload.


        :param activation_data: The activation_data of this ApplePayload.  # noqa: E501
        :type: str
        """

        self._activation_data = activation_data

    @property
    def encrypted_pass_data(self):
        """Gets the encrypted_pass_data of this ApplePayload.  # noqa: E501


        :return: The encrypted_pass_data of this ApplePayload.  # noqa: E501
        :rtype: str
        """
        return self._encrypted_pass_data

    @encrypted_pass_data.setter
    def encrypted_pass_data(self, encrypted_pass_data):
        """Sets the encrypted_pass_data of this ApplePayload.


        :param encrypted_pass_data: The encrypted_pass_data of this ApplePayload.  # noqa: E501
        :type: str
        """

        self._encrypted_pass_data = encrypted_pass_data

    @property
    def ephemeral_public_key(self):
        """Gets the ephemeral_public_key of this ApplePayload.  # noqa: E501


        :return: The ephemeral_public_key of this ApplePayload.  # noqa: E501
        :rtype: str
        """
        return self._ephemeral_public_key

    @ephemeral_public_key.setter
    def ephemeral_public_key(self, ephemeral_public_key):
        """Sets the ephemeral_public_key of this ApplePayload.


        :param ephemeral_public_key: The ephemeral_public_key of this ApplePayload.  # noqa: E501
        :type: str
        """

        self._ephemeral_public_key = ephemeral_public_key

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
        if issubclass(ApplePayload, dict):
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
        if not isinstance(other, ApplePayload):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ApplePayload):
            return True

        return self.to_dict() != other.to_dict()
