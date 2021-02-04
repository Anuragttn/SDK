# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.8.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class CategoryInternalResponseVO(object):
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
        'category': 'str',
        'subcategories': 'list[str]',
        'tenant_name': 'str'
    }

    attribute_map = {
        'category': 'category',
        'subcategories': 'subcategories',
        'tenant_name': 'tenant_name'
    }

    def __init__(self, category=None, subcategories=None, tenant_name=None):  # noqa: E501
        """CategoryInternalResponseVO - a model defined in Swagger"""  # noqa: E501

        self._category = None
        self._subcategories = None
        self._tenant_name = None
        self.discriminator = None

        if category is not None:
            self.category = category
        if subcategories is not None:
            self.subcategories = subcategories
        if tenant_name is not None:
            self.tenant_name = tenant_name

    @property
    def category(self):
        """Gets the category of this CategoryInternalResponseVO.  # noqa: E501


        :return: The category of this CategoryInternalResponseVO.  # noqa: E501
        :rtype: str
        """
        return self._category

    @category.setter
    def category(self, category):
        """Sets the category of this CategoryInternalResponseVO.


        :param category: The category of this CategoryInternalResponseVO.  # noqa: E501
        :type: str
        """

        self._category = category

    @property
    def subcategories(self):
        """Gets the subcategories of this CategoryInternalResponseVO.  # noqa: E501


        :return: The subcategories of this CategoryInternalResponseVO.  # noqa: E501
        :rtype: list[str]
        """
        return self._subcategories

    @subcategories.setter
    def subcategories(self, subcategories):
        """Sets the subcategories of this CategoryInternalResponseVO.


        :param subcategories: The subcategories of this CategoryInternalResponseVO.  # noqa: E501
        :type: list[str]
        """

        self._subcategories = subcategories

    @property
    def tenant_name(self):
        """Gets the tenant_name of this CategoryInternalResponseVO.  # noqa: E501


        :return: The tenant_name of this CategoryInternalResponseVO.  # noqa: E501
        :rtype: str
        """
        return self._tenant_name

    @tenant_name.setter
    def tenant_name(self, tenant_name):
        """Sets the tenant_name of this CategoryInternalResponseVO.


        :param tenant_name: The tenant_name of this CategoryInternalResponseVO.  # noqa: E501
        :type: str
        """

        self._tenant_name = tenant_name

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
        if issubclass(CategoryInternalResponseVO, dict):
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
        if not isinstance(other, CategoryInternalResponseVO):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
