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

from atom_api.models.secondary_id import SecondaryId  # noqa: F401,E501


class AccountStagePayload(object):
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
        'name': 'str',
        'description': 'str',
        'order_index': 'int',
        'secondary_id': 'SecondaryId'
    }

    attribute_map = {
        'name': 'name',
        'description': 'description',
        'order_index': 'order_index',
        'secondary_id': 'secondary_id'
    }

    def __init__(self, name=None, description=None, order_index=None, secondary_id=None):  # noqa: E501
        """AccountStagePayload - a model defined in Swagger"""  # noqa: E501

        self._name = None
        self._description = None
        self._order_index = None
        self._secondary_id = None
        self.discriminator = None

        self.name = name
        if description is not None:
            self.description = description
        if order_index is not None:
            self.order_index = order_index
        if secondary_id is not None:
            self.secondary_id = secondary_id

    @property
    def name(self):
        """Gets the name of this AccountStagePayload.  # noqa: E501

        Name or label of the account stage such as “Pending Funding” or “Fully Funded”  # noqa: E501

        :return: The name of this AccountStagePayload.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this AccountStagePayload.

        Name or label of the account stage such as “Pending Funding” or “Fully Funded”  # noqa: E501

        :param name: The name of this AccountStagePayload.  # noqa: E501
        :type: str
        """
        if name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def description(self):
        """Gets the description of this AccountStagePayload.  # noqa: E501

        Description of what the step along the registration process that the account stage represents  # noqa: E501

        :return: The description of this AccountStagePayload.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this AccountStagePayload.

        Description of what the step along the registration process that the account stage represents  # noqa: E501

        :param description: The description of this AccountStagePayload.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def order_index(self):
        """Gets the order_index of this AccountStagePayload.  # noqa: E501

        Indicator for where along the process the account stage falls. Generally, the higher the order index, the further along the process  # noqa: E501

        :return: The order_index of this AccountStagePayload.  # noqa: E501
        :rtype: int
        """
        return self._order_index

    @order_index.setter
    def order_index(self, order_index):
        """Sets the order_index of this AccountStagePayload.

        Indicator for where along the process the account stage falls. Generally, the higher the order index, the further along the process  # noqa: E501

        :param order_index: The order_index of this AccountStagePayload.  # noqa: E501
        :type: int
        """

        self._order_index = order_index

    @property
    def secondary_id(self):
        """Gets the secondary_id of this AccountStagePayload.  # noqa: E501


        :return: The secondary_id of this AccountStagePayload.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this AccountStagePayload.


        :param secondary_id: The secondary_id of this AccountStagePayload.  # noqa: E501
        :type: SecondaryId
        """

        self._secondary_id = secondary_id

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
        if issubclass(AccountStagePayload, dict):
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
        if not isinstance(other, AccountStagePayload):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other