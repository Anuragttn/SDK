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


class BrokerageBankLinkVO(object):
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
        'message': 'str',
        'nucleus_bank_link_id': 'str',
        'status': 'str',
        'vendor_name': 'str',
        'vendor_request_data': 'object',
        'vendor_response': 'object'
    }

    attribute_map = {
        'message': 'message',
        'nucleus_bank_link_id': 'nucleus_bank_link_id',
        'status': 'status',
        'vendor_name': 'vendor_name',
        'vendor_request_data': 'vendor_request_data',
        'vendor_response': 'vendor_response'
    }

    def __init__(self, message=None, nucleus_bank_link_id=None, status=None, vendor_name=None, vendor_request_data=None, vendor_response=None):  # noqa: E501
        """BrokerageBankLinkVO - a model defined in Swagger"""  # noqa: E501

        self._message = None
        self._nucleus_bank_link_id = None
        self._status = None
        self._vendor_name = None
        self._vendor_request_data = None
        self._vendor_response = None
        self.discriminator = None

        if message is not None:
            self.message = message
        if nucleus_bank_link_id is not None:
            self.nucleus_bank_link_id = nucleus_bank_link_id
        if status is not None:
            self.status = status
        if vendor_name is not None:
            self.vendor_name = vendor_name
        if vendor_request_data is not None:
            self.vendor_request_data = vendor_request_data
        if vendor_response is not None:
            self.vendor_response = vendor_response

    @property
    def message(self):
        """Gets the message of this BrokerageBankLinkVO.  # noqa: E501


        :return: The message of this BrokerageBankLinkVO.  # noqa: E501
        :rtype: str
        """
        return self._message

    @message.setter
    def message(self, message):
        """Sets the message of this BrokerageBankLinkVO.


        :param message: The message of this BrokerageBankLinkVO.  # noqa: E501
        :type: str
        """

        self._message = message

    @property
    def nucleus_bank_link_id(self):
        """Gets the nucleus_bank_link_id of this BrokerageBankLinkVO.  # noqa: E501


        :return: The nucleus_bank_link_id of this BrokerageBankLinkVO.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_bank_link_id

    @nucleus_bank_link_id.setter
    def nucleus_bank_link_id(self, nucleus_bank_link_id):
        """Sets the nucleus_bank_link_id of this BrokerageBankLinkVO.


        :param nucleus_bank_link_id: The nucleus_bank_link_id of this BrokerageBankLinkVO.  # noqa: E501
        :type: str
        """

        self._nucleus_bank_link_id = nucleus_bank_link_id

    @property
    def status(self):
        """Gets the status of this BrokerageBankLinkVO.  # noqa: E501


        :return: The status of this BrokerageBankLinkVO.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this BrokerageBankLinkVO.


        :param status: The status of this BrokerageBankLinkVO.  # noqa: E501
        :type: str
        """

        self._status = status

    @property
    def vendor_name(self):
        """Gets the vendor_name of this BrokerageBankLinkVO.  # noqa: E501


        :return: The vendor_name of this BrokerageBankLinkVO.  # noqa: E501
        :rtype: str
        """
        return self._vendor_name

    @vendor_name.setter
    def vendor_name(self, vendor_name):
        """Sets the vendor_name of this BrokerageBankLinkVO.


        :param vendor_name: The vendor_name of this BrokerageBankLinkVO.  # noqa: E501
        :type: str
        """

        self._vendor_name = vendor_name

    @property
    def vendor_request_data(self):
        """Gets the vendor_request_data of this BrokerageBankLinkVO.  # noqa: E501


        :return: The vendor_request_data of this BrokerageBankLinkVO.  # noqa: E501
        :rtype: object
        """
        return self._vendor_request_data

    @vendor_request_data.setter
    def vendor_request_data(self, vendor_request_data):
        """Sets the vendor_request_data of this BrokerageBankLinkVO.


        :param vendor_request_data: The vendor_request_data of this BrokerageBankLinkVO.  # noqa: E501
        :type: object
        """

        self._vendor_request_data = vendor_request_data

    @property
    def vendor_response(self):
        """Gets the vendor_response of this BrokerageBankLinkVO.  # noqa: E501


        :return: The vendor_response of this BrokerageBankLinkVO.  # noqa: E501
        :rtype: object
        """
        return self._vendor_response

    @vendor_response.setter
    def vendor_response(self, vendor_response):
        """Sets the vendor_response of this BrokerageBankLinkVO.


        :param vendor_response: The vendor_response of this BrokerageBankLinkVO.  # noqa: E501
        :type: object
        """

        self._vendor_response = vendor_response

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
        if issubclass(BrokerageBankLinkVO, dict):
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
        if not isinstance(other, BrokerageBankLinkVO):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
