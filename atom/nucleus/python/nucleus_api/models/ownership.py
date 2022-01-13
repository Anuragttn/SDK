# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.5
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class Ownership(object):
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
        'client_id': 'str',
        'is_beneficial': 'bool',
        'is_primary': 'bool',
        'percent_ownership': 'float',
        'role': 'str'
    }

    attribute_map = {
        'client_id': 'client_id',
        'is_beneficial': 'is_beneficial',
        'is_primary': 'is_primary',
        'percent_ownership': 'percent_ownership',
        'role': 'role'
    }

    def __init__(self, client_id=None, is_beneficial=None, is_primary=None, percent_ownership=None, role=None, _configuration=None):  # noqa: E501
        """Ownership - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._client_id = None
        self._is_beneficial = None
        self._is_primary = None
        self._percent_ownership = None
        self._role = None
        self.discriminator = None

        self.client_id = client_id
        if is_beneficial is not None:
            self.is_beneficial = is_beneficial
        if is_primary is not None:
            self.is_primary = is_primary
        if percent_ownership is not None:
            self.percent_ownership = percent_ownership
        self.role = role

    @property
    def client_id(self):
        """Gets the client_id of this Ownership.  # noqa: E501

        client_id  # noqa: E501

        :return: The client_id of this Ownership.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this Ownership.

        client_id  # noqa: E501

        :param client_id: The client_id of this Ownership.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and client_id is None:
            raise ValueError("Invalid value for `client_id`, must not be `None`")  # noqa: E501

        self._client_id = client_id

    @property
    def is_beneficial(self):
        """Gets the is_beneficial of this Ownership.  # noqa: E501

        is_beneficial  # noqa: E501

        :return: The is_beneficial of this Ownership.  # noqa: E501
        :rtype: bool
        """
        return self._is_beneficial

    @is_beneficial.setter
    def is_beneficial(self, is_beneficial):
        """Sets the is_beneficial of this Ownership.

        is_beneficial  # noqa: E501

        :param is_beneficial: The is_beneficial of this Ownership.  # noqa: E501
        :type: bool
        """

        self._is_beneficial = is_beneficial

    @property
    def is_primary(self):
        """Gets the is_primary of this Ownership.  # noqa: E501

        is_primary  # noqa: E501

        :return: The is_primary of this Ownership.  # noqa: E501
        :rtype: bool
        """
        return self._is_primary

    @is_primary.setter
    def is_primary(self, is_primary):
        """Sets the is_primary of this Ownership.

        is_primary  # noqa: E501

        :param is_primary: The is_primary of this Ownership.  # noqa: E501
        :type: bool
        """

        self._is_primary = is_primary

    @property
    def percent_ownership(self):
        """Gets the percent_ownership of this Ownership.  # noqa: E501

        percent_ownership  # noqa: E501

        :return: The percent_ownership of this Ownership.  # noqa: E501
        :rtype: float
        """
        return self._percent_ownership

    @percent_ownership.setter
    def percent_ownership(self, percent_ownership):
        """Sets the percent_ownership of this Ownership.

        percent_ownership  # noqa: E501

        :param percent_ownership: The percent_ownership of this Ownership.  # noqa: E501
        :type: float
        """

        self._percent_ownership = percent_ownership

    @property
    def role(self):
        """Gets the role of this Ownership.  # noqa: E501

        role  # noqa: E501

        :return: The role of this Ownership.  # noqa: E501
        :rtype: str
        """
        return self._role

    @role.setter
    def role(self, role):
        """Sets the role of this Ownership.

        role  # noqa: E501

        :param role: The role of this Ownership.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and role is None:
            raise ValueError("Invalid value for `role`, must not be `None`")  # noqa: E501

        self._role = role

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
        if issubclass(Ownership, dict):
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
        if not isinstance(other, Ownership):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Ownership):
            return True

        return self.to_dict() != other.to_dict()
