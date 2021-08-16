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


class AsyncTransactionVO(object):
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
        'id': 'str',
        'response': 'object',
        'status': 'str'
    }

    attribute_map = {
        'id': 'id',
        'response': 'response',
        'status': 'status'
    }

    def __init__(self, id=None, response=None, status=None, _configuration=None):  # noqa: E501
        """AsyncTransactionVO - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._id = None
        self._response = None
        self._status = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if response is not None:
            self.response = response
        if status is not None:
            self.status = status

    @property
    def id(self):
        """Gets the id of this AsyncTransactionVO.  # noqa: E501


        :return: The id of this AsyncTransactionVO.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this AsyncTransactionVO.


        :param id: The id of this AsyncTransactionVO.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def response(self):
        """Gets the response of this AsyncTransactionVO.  # noqa: E501


        :return: The response of this AsyncTransactionVO.  # noqa: E501
        :rtype: object
        """
        return self._response

    @response.setter
    def response(self, response):
        """Sets the response of this AsyncTransactionVO.


        :param response: The response of this AsyncTransactionVO.  # noqa: E501
        :type: object
        """

        self._response = response

    @property
    def status(self):
        """Gets the status of this AsyncTransactionVO.  # noqa: E501


        :return: The status of this AsyncTransactionVO.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this AsyncTransactionVO.


        :param status: The status of this AsyncTransactionVO.  # noqa: E501
        :type: str
        """

        self._status = status

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
        if issubclass(AsyncTransactionVO, dict):
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
        if not isinstance(other, AsyncTransactionVO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, AsyncTransactionVO):
            return True

        return self.to_dict() != other.to_dict()
