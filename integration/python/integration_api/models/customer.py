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


class Customer(object):
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
        'address': 'list[CustomerAddress]',
        'client_id': 'str',
        'company_name': 'str',
        'create_date': 'datetime',
        'description': 'str',
        'first_name': 'str',
        'id': 'str',
        'identification_number': 'str',
        'is_active': 'bool',
        'last_name': 'str',
        'metadata': 'dict(str, str)',
        'secondary_id': 'str',
        'status': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'address': 'address',
        'client_id': 'client_id',
        'company_name': 'company_name',
        'create_date': 'create_date',
        'description': 'description',
        'first_name': 'first_name',
        'id': 'id',
        'identification_number': 'identification_number',
        'is_active': 'is_active',
        'last_name': 'last_name',
        'metadata': 'metadata',
        'secondary_id': 'secondary_id',
        'status': 'status',
        'update_date': 'update_date'
    }

    def __init__(self, address=None, client_id=None, company_name=None, create_date=None, description=None, first_name=None, id=None, identification_number=None, is_active=None, last_name=None, metadata=None, secondary_id=None, status=None, update_date=None):  # noqa: E501
        """Customer - a model defined in Swagger"""  # noqa: E501

        self._address = None
        self._client_id = None
        self._company_name = None
        self._create_date = None
        self._description = None
        self._first_name = None
        self._id = None
        self._identification_number = None
        self._is_active = None
        self._last_name = None
        self._metadata = None
        self._secondary_id = None
        self._status = None
        self._update_date = None
        self.discriminator = None

        if address is not None:
            self.address = address
        if client_id is not None:
            self.client_id = client_id
        self.company_name = company_name
        if create_date is not None:
            self.create_date = create_date
        if description is not None:
            self.description = description
        if first_name is not None:
            self.first_name = first_name
        if id is not None:
            self.id = id
        if identification_number is not None:
            self.identification_number = identification_number
        if is_active is not None:
            self.is_active = is_active
        if last_name is not None:
            self.last_name = last_name
        if metadata is not None:
            self.metadata = metadata
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if status is not None:
            self.status = status
        if update_date is not None:
            self.update_date = update_date

    @property
    def address(self):
        """Gets the address of this Customer.  # noqa: E501


        :return: The address of this Customer.  # noqa: E501
        :rtype: list[CustomerAddress]
        """
        return self._address

    @address.setter
    def address(self, address):
        """Sets the address of this Customer.


        :param address: The address of this Customer.  # noqa: E501
        :type: list[CustomerAddress]
        """

        self._address = address

    @property
    def client_id(self):
        """Gets the client_id of this Customer.  # noqa: E501

        clientId  # noqa: E501

        :return: The client_id of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this Customer.

        clientId  # noqa: E501

        :param client_id: The client_id of this Customer.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def company_name(self):
        """Gets the company_name of this Customer.  # noqa: E501

        companyName  # noqa: E501

        :return: The company_name of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._company_name

    @company_name.setter
    def company_name(self, company_name):
        """Sets the company_name of this Customer.

        companyName  # noqa: E501

        :param company_name: The company_name of this Customer.  # noqa: E501
        :type: str
        """
        if company_name is None:
            raise ValueError("Invalid value for `company_name`, must not be `None`")  # noqa: E501

        self._company_name = company_name

    @property
    def create_date(self):
        """Gets the create_date of this Customer.  # noqa: E501


        :return: The create_date of this Customer.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this Customer.


        :param create_date: The create_date of this Customer.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def description(self):
        """Gets the description of this Customer.  # noqa: E501

        description  # noqa: E501

        :return: The description of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this Customer.

        description  # noqa: E501

        :param description: The description of this Customer.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def first_name(self):
        """Gets the first_name of this Customer.  # noqa: E501

        firstName  # noqa: E501

        :return: The first_name of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name):
        """Sets the first_name of this Customer.

        firstName  # noqa: E501

        :param first_name: The first_name of this Customer.  # noqa: E501
        :type: str
        """

        self._first_name = first_name

    @property
    def id(self):
        """Gets the id of this Customer.  # noqa: E501


        :return: The id of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Customer.


        :param id: The id of this Customer.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def identification_number(self):
        """Gets the identification_number of this Customer.  # noqa: E501

        identificationNumber  # noqa: E501

        :return: The identification_number of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._identification_number

    @identification_number.setter
    def identification_number(self, identification_number):
        """Sets the identification_number of this Customer.

        identificationNumber  # noqa: E501

        :param identification_number: The identification_number of this Customer.  # noqa: E501
        :type: str
        """

        self._identification_number = identification_number

    @property
    def is_active(self):
        """Gets the is_active of this Customer.  # noqa: E501

        isActive  # noqa: E501

        :return: The is_active of this Customer.  # noqa: E501
        :rtype: bool
        """
        return self._is_active

    @is_active.setter
    def is_active(self, is_active):
        """Sets the is_active of this Customer.

        isActive  # noqa: E501

        :param is_active: The is_active of this Customer.  # noqa: E501
        :type: bool
        """

        self._is_active = is_active

    @property
    def last_name(self):
        """Gets the last_name of this Customer.  # noqa: E501

        lastName  # noqa: E501

        :return: The last_name of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name):
        """Sets the last_name of this Customer.

        lastName  # noqa: E501

        :param last_name: The last_name of this Customer.  # noqa: E501
        :type: str
        """

        self._last_name = last_name

    @property
    def metadata(self):
        """Gets the metadata of this Customer.  # noqa: E501

        metadata  # noqa: E501

        :return: The metadata of this Customer.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this Customer.

        metadata  # noqa: E501

        :param metadata: The metadata of this Customer.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def secondary_id(self):
        """Gets the secondary_id of this Customer.  # noqa: E501


        :return: The secondary_id of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this Customer.


        :param secondary_id: The secondary_id of this Customer.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def status(self):
        """Gets the status of this Customer.  # noqa: E501

        status  # noqa: E501

        :return: The status of this Customer.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this Customer.

        status  # noqa: E501

        :param status: The status of this Customer.  # noqa: E501
        :type: str
        """

        self._status = status

    @property
    def update_date(self):
        """Gets the update_date of this Customer.  # noqa: E501


        :return: The update_date of this Customer.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this Customer.


        :param update_date: The update_date of this Customer.  # noqa: E501
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
        if issubclass(Customer, dict):
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
        if not isinstance(other, Customer):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other