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


class NucleusTransferFieldsCO(object):
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
        'nucleus_account_type_id': 'str',
        'nucleus_transfer_all_cash': 'bool'
    }

    attribute_map = {
        'nucleus_account_type_id': 'nucleus_account_type_id',
        'nucleus_transfer_all_cash': 'nucleus_transfer_all_cash'
    }

    def __init__(self, nucleus_account_type_id=None, nucleus_transfer_all_cash=None, _configuration=None):  # noqa: E501
        """NucleusTransferFieldsCO - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._nucleus_account_type_id = None
        self._nucleus_transfer_all_cash = None
        self.discriminator = None

        if nucleus_account_type_id is not None:
            self.nucleus_account_type_id = nucleus_account_type_id
        if nucleus_transfer_all_cash is not None:
            self.nucleus_transfer_all_cash = nucleus_transfer_all_cash

    @property
    def nucleus_account_type_id(self):
        """Gets the nucleus_account_type_id of this NucleusTransferFieldsCO.  # noqa: E501


        :return: The nucleus_account_type_id of this NucleusTransferFieldsCO.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_account_type_id

    @nucleus_account_type_id.setter
    def nucleus_account_type_id(self, nucleus_account_type_id):
        """Sets the nucleus_account_type_id of this NucleusTransferFieldsCO.


        :param nucleus_account_type_id: The nucleus_account_type_id of this NucleusTransferFieldsCO.  # noqa: E501
        :type: str
        """

        self._nucleus_account_type_id = nucleus_account_type_id

    @property
    def nucleus_transfer_all_cash(self):
        """Gets the nucleus_transfer_all_cash of this NucleusTransferFieldsCO.  # noqa: E501


        :return: The nucleus_transfer_all_cash of this NucleusTransferFieldsCO.  # noqa: E501
        :rtype: bool
        """
        return self._nucleus_transfer_all_cash

    @nucleus_transfer_all_cash.setter
    def nucleus_transfer_all_cash(self, nucleus_transfer_all_cash):
        """Sets the nucleus_transfer_all_cash of this NucleusTransferFieldsCO.


        :param nucleus_transfer_all_cash: The nucleus_transfer_all_cash of this NucleusTransferFieldsCO.  # noqa: E501
        :type: bool
        """

        self._nucleus_transfer_all_cash = nucleus_transfer_all_cash

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
        if issubclass(NucleusTransferFieldsCO, dict):
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
        if not isinstance(other, NucleusTransferFieldsCO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, NucleusTransferFieldsCO):
            return True

        return self.to_dict() != other.to_dict()
