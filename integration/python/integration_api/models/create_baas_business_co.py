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


class CreateBaasBusinessCO(object):
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
        'nucleus_business_id': 'str',
        'nucleus_document_ids': 'list[str]'
    }

    attribute_map = {
        'nucleus_business_id': 'nucleus_business_id',
        'nucleus_document_ids': 'nucleus_document_ids'
    }

    def __init__(self, nucleus_business_id=None, nucleus_document_ids=None, _configuration=None):  # noqa: E501
        """CreateBaasBusinessCO - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._nucleus_business_id = None
        self._nucleus_document_ids = None
        self.discriminator = None

        if nucleus_business_id is not None:
            self.nucleus_business_id = nucleus_business_id
        if nucleus_document_ids is not None:
            self.nucleus_document_ids = nucleus_document_ids

    @property
    def nucleus_business_id(self):
        """Gets the nucleus_business_id of this CreateBaasBusinessCO.  # noqa: E501


        :return: The nucleus_business_id of this CreateBaasBusinessCO.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_business_id

    @nucleus_business_id.setter
    def nucleus_business_id(self, nucleus_business_id):
        """Sets the nucleus_business_id of this CreateBaasBusinessCO.


        :param nucleus_business_id: The nucleus_business_id of this CreateBaasBusinessCO.  # noqa: E501
        :type: str
        """

        self._nucleus_business_id = nucleus_business_id

    @property
    def nucleus_document_ids(self):
        """Gets the nucleus_document_ids of this CreateBaasBusinessCO.  # noqa: E501


        :return: The nucleus_document_ids of this CreateBaasBusinessCO.  # noqa: E501
        :rtype: list[str]
        """
        return self._nucleus_document_ids

    @nucleus_document_ids.setter
    def nucleus_document_ids(self, nucleus_document_ids):
        """Sets the nucleus_document_ids of this CreateBaasBusinessCO.


        :param nucleus_document_ids: The nucleus_document_ids of this CreateBaasBusinessCO.  # noqa: E501
        :type: list[str]
        """

        self._nucleus_document_ids = nucleus_document_ids

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
        if issubclass(CreateBaasBusinessCO, dict):
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
        if not isinstance(other, CreateBaasBusinessCO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CreateBaasBusinessCO):
            return True

        return self.to_dict() != other.to_dict()
