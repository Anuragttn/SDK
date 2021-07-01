# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.2
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class ClientResponse(object):
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
        'account_id': 'str',
        'answer_id': 'str',
        'answer_value': 'str',
        'application_id': 'str',
        'client_id': 'str',
        'create_date': 'datetime',
        'id': 'str',
        'metadata': 'dict(str, str)',
        'secondary_id': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'account_id': 'account_id',
        'answer_id': 'answer_id',
        'answer_value': 'answer_value',
        'application_id': 'application_id',
        'client_id': 'client_id',
        'create_date': 'create_date',
        'id': 'id',
        'metadata': 'metadata',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, account_id=None, answer_id=None, answer_value=None, application_id=None, client_id=None, create_date=None, id=None, metadata=None, secondary_id=None, update_date=None, _configuration=None):  # noqa: E501
        """ClientResponse - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._account_id = None
        self._answer_id = None
        self._answer_value = None
        self._application_id = None
        self._client_id = None
        self._create_date = None
        self._id = None
        self._metadata = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        if account_id is not None:
            self.account_id = account_id
        self.answer_id = answer_id
        self.answer_value = answer_value
        if application_id is not None:
            self.application_id = application_id
        if client_id is not None:
            self.client_id = client_id
        if create_date is not None:
            self.create_date = create_date
        if id is not None:
            self.id = id
        if metadata is not None:
            self.metadata = metadata
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def account_id(self):
        """Gets the account_id of this ClientResponse.  # noqa: E501

        account_id  # noqa: E501

        :return: The account_id of this ClientResponse.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this ClientResponse.

        account_id  # noqa: E501

        :param account_id: The account_id of this ClientResponse.  # noqa: E501
        :type: str
        """

        self._account_id = account_id

    @property
    def answer_id(self):
        """Gets the answer_id of this ClientResponse.  # noqa: E501

        answerId  # noqa: E501

        :return: The answer_id of this ClientResponse.  # noqa: E501
        :rtype: str
        """
        return self._answer_id

    @answer_id.setter
    def answer_id(self, answer_id):
        """Sets the answer_id of this ClientResponse.

        answerId  # noqa: E501

        :param answer_id: The answer_id of this ClientResponse.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and answer_id is None:
            raise ValueError("Invalid value for `answer_id`, must not be `None`")  # noqa: E501

        self._answer_id = answer_id

    @property
    def answer_value(self):
        """Gets the answer_value of this ClientResponse.  # noqa: E501

        answerValue  # noqa: E501

        :return: The answer_value of this ClientResponse.  # noqa: E501
        :rtype: str
        """
        return self._answer_value

    @answer_value.setter
    def answer_value(self, answer_value):
        """Sets the answer_value of this ClientResponse.

        answerValue  # noqa: E501

        :param answer_value: The answer_value of this ClientResponse.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and answer_value is None:
            raise ValueError("Invalid value for `answer_value`, must not be `None`")  # noqa: E501

        self._answer_value = answer_value

    @property
    def application_id(self):
        """Gets the application_id of this ClientResponse.  # noqa: E501

        application_id  # noqa: E501

        :return: The application_id of this ClientResponse.  # noqa: E501
        :rtype: str
        """
        return self._application_id

    @application_id.setter
    def application_id(self, application_id):
        """Sets the application_id of this ClientResponse.

        application_id  # noqa: E501

        :param application_id: The application_id of this ClientResponse.  # noqa: E501
        :type: str
        """

        self._application_id = application_id

    @property
    def client_id(self):
        """Gets the client_id of this ClientResponse.  # noqa: E501

        client_id  # noqa: E501

        :return: The client_id of this ClientResponse.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this ClientResponse.

        client_id  # noqa: E501

        :param client_id: The client_id of this ClientResponse.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def create_date(self):
        """Gets the create_date of this ClientResponse.  # noqa: E501


        :return: The create_date of this ClientResponse.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this ClientResponse.


        :param create_date: The create_date of this ClientResponse.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def id(self):
        """Gets the id of this ClientResponse.  # noqa: E501


        :return: The id of this ClientResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this ClientResponse.


        :param id: The id of this ClientResponse.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def metadata(self):
        """Gets the metadata of this ClientResponse.  # noqa: E501


        :return: The metadata of this ClientResponse.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this ClientResponse.


        :param metadata: The metadata of this ClientResponse.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def secondary_id(self):
        """Gets the secondary_id of this ClientResponse.  # noqa: E501


        :return: The secondary_id of this ClientResponse.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this ClientResponse.


        :param secondary_id: The secondary_id of this ClientResponse.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this ClientResponse.  # noqa: E501


        :return: The update_date of this ClientResponse.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this ClientResponse.


        :param update_date: The update_date of this ClientResponse.  # noqa: E501
        :type: datetime
        """

        self._update_date = update_date

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
        if issubclass(ClientResponse, dict):
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
        if not isinstance(other, ClientResponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ClientResponse):
            return True

        return self.to_dict() != other.to_dict()
