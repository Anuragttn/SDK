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


class SpendingControl(object):
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
        'client_group': 'str',
        'client_id': 'str',
        'control_scope': 'str',
        'control_type': 'str',
        'control_values': 'list[str]',
        'create_date': 'datetime',
        'currency_code': 'str',
        'description': 'str',
        'frequency': 'int',
        'frequency_unit': 'str',
        'id': 'str',
        'is_active': 'bool',
        'limit_value': 'float',
        'metadata': 'dict(str, str)',
        'secondary_id': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'client_group': 'client_group',
        'client_id': 'client_id',
        'control_scope': 'control_scope',
        'control_type': 'control_type',
        'control_values': 'control_values',
        'create_date': 'create_date',
        'currency_code': 'currency_code',
        'description': 'description',
        'frequency': 'frequency',
        'frequency_unit': 'frequency_unit',
        'id': 'id',
        'is_active': 'is_active',
        'limit_value': 'limit_value',
        'metadata': 'metadata',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, client_group=None, client_id=None, control_scope=None, control_type=None, control_values=None, create_date=None, currency_code=None, description=None, frequency=None, frequency_unit=None, id=None, is_active=None, limit_value=None, metadata=None, secondary_id=None, update_date=None, _configuration=None):  # noqa: E501
        """SpendingControl - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._client_group = None
        self._client_id = None
        self._control_scope = None
        self._control_type = None
        self._control_values = None
        self._create_date = None
        self._currency_code = None
        self._description = None
        self._frequency = None
        self._frequency_unit = None
        self._id = None
        self._is_active = None
        self._limit_value = None
        self._metadata = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        if client_group is not None:
            self.client_group = client_group
        if client_id is not None:
            self.client_id = client_id
        self.control_scope = control_scope
        self.control_type = control_type
        if control_values is not None:
            self.control_values = control_values
        if create_date is not None:
            self.create_date = create_date
        self.currency_code = currency_code
        if description is not None:
            self.description = description
        if frequency is not None:
            self.frequency = frequency
        if frequency_unit is not None:
            self.frequency_unit = frequency_unit
        if id is not None:
            self.id = id
        if is_active is not None:
            self.is_active = is_active
        if limit_value is not None:
            self.limit_value = limit_value
        if metadata is not None:
            self.metadata = metadata
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def client_group(self):
        """Gets the client_group of this SpendingControl.  # noqa: E501

        client_group  # noqa: E501

        :return: The client_group of this SpendingControl.  # noqa: E501
        :rtype: str
        """
        return self._client_group

    @client_group.setter
    def client_group(self, client_group):
        """Sets the client_group of this SpendingControl.

        client_group  # noqa: E501

        :param client_group: The client_group of this SpendingControl.  # noqa: E501
        :type: str
        """

        self._client_group = client_group

    @property
    def client_id(self):
        """Gets the client_id of this SpendingControl.  # noqa: E501

        client_id  # noqa: E501

        :return: The client_id of this SpendingControl.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this SpendingControl.

        client_id  # noqa: E501

        :param client_id: The client_id of this SpendingControl.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def control_scope(self):
        """Gets the control_scope of this SpendingControl.  # noqa: E501

        controlScope  # noqa: E501

        :return: The control_scope of this SpendingControl.  # noqa: E501
        :rtype: str
        """
        return self._control_scope

    @control_scope.setter
    def control_scope(self, control_scope):
        """Sets the control_scope of this SpendingControl.

        controlScope  # noqa: E501

        :param control_scope: The control_scope of this SpendingControl.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and control_scope is None:
            raise ValueError("Invalid value for `control_scope`, must not be `None`")  # noqa: E501

        self._control_scope = control_scope

    @property
    def control_type(self):
        """Gets the control_type of this SpendingControl.  # noqa: E501

        controlType  # noqa: E501

        :return: The control_type of this SpendingControl.  # noqa: E501
        :rtype: str
        """
        return self._control_type

    @control_type.setter
    def control_type(self, control_type):
        """Sets the control_type of this SpendingControl.

        controlType  # noqa: E501

        :param control_type: The control_type of this SpendingControl.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and control_type is None:
            raise ValueError("Invalid value for `control_type`, must not be `None`")  # noqa: E501

        self._control_type = control_type

    @property
    def control_values(self):
        """Gets the control_values of this SpendingControl.  # noqa: E501

        control_values  # noqa: E501

        :return: The control_values of this SpendingControl.  # noqa: E501
        :rtype: list[str]
        """
        return self._control_values

    @control_values.setter
    def control_values(self, control_values):
        """Sets the control_values of this SpendingControl.

        control_values  # noqa: E501

        :param control_values: The control_values of this SpendingControl.  # noqa: E501
        :type: list[str]
        """

        self._control_values = control_values

    @property
    def create_date(self):
        """Gets the create_date of this SpendingControl.  # noqa: E501


        :return: The create_date of this SpendingControl.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this SpendingControl.


        :param create_date: The create_date of this SpendingControl.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def currency_code(self):
        """Gets the currency_code of this SpendingControl.  # noqa: E501

        currency_code  # noqa: E501

        :return: The currency_code of this SpendingControl.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this SpendingControl.

        currency_code  # noqa: E501

        :param currency_code: The currency_code of this SpendingControl.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and currency_code is None:
            raise ValueError("Invalid value for `currency_code`, must not be `None`")  # noqa: E501

        self._currency_code = currency_code

    @property
    def description(self):
        """Gets the description of this SpendingControl.  # noqa: E501

        description  # noqa: E501

        :return: The description of this SpendingControl.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this SpendingControl.

        description  # noqa: E501

        :param description: The description of this SpendingControl.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def frequency(self):
        """Gets the frequency of this SpendingControl.  # noqa: E501

        frequency  # noqa: E501

        :return: The frequency of this SpendingControl.  # noqa: E501
        :rtype: int
        """
        return self._frequency

    @frequency.setter
    def frequency(self, frequency):
        """Sets the frequency of this SpendingControl.

        frequency  # noqa: E501

        :param frequency: The frequency of this SpendingControl.  # noqa: E501
        :type: int
        """

        self._frequency = frequency

    @property
    def frequency_unit(self):
        """Gets the frequency_unit of this SpendingControl.  # noqa: E501

        frequency_unit  # noqa: E501

        :return: The frequency_unit of this SpendingControl.  # noqa: E501
        :rtype: str
        """
        return self._frequency_unit

    @frequency_unit.setter
    def frequency_unit(self, frequency_unit):
        """Sets the frequency_unit of this SpendingControl.

        frequency_unit  # noqa: E501

        :param frequency_unit: The frequency_unit of this SpendingControl.  # noqa: E501
        :type: str
        """

        self._frequency_unit = frequency_unit

    @property
    def id(self):
        """Gets the id of this SpendingControl.  # noqa: E501


        :return: The id of this SpendingControl.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SpendingControl.


        :param id: The id of this SpendingControl.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def is_active(self):
        """Gets the is_active of this SpendingControl.  # noqa: E501

        is_active  # noqa: E501

        :return: The is_active of this SpendingControl.  # noqa: E501
        :rtype: bool
        """
        return self._is_active

    @is_active.setter
    def is_active(self, is_active):
        """Sets the is_active of this SpendingControl.

        is_active  # noqa: E501

        :param is_active: The is_active of this SpendingControl.  # noqa: E501
        :type: bool
        """

        self._is_active = is_active

    @property
    def limit_value(self):
        """Gets the limit_value of this SpendingControl.  # noqa: E501

        limitValue  # noqa: E501

        :return: The limit_value of this SpendingControl.  # noqa: E501
        :rtype: float
        """
        return self._limit_value

    @limit_value.setter
    def limit_value(self, limit_value):
        """Sets the limit_value of this SpendingControl.

        limitValue  # noqa: E501

        :param limit_value: The limit_value of this SpendingControl.  # noqa: E501
        :type: float
        """

        self._limit_value = limit_value

    @property
    def metadata(self):
        """Gets the metadata of this SpendingControl.  # noqa: E501


        :return: The metadata of this SpendingControl.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this SpendingControl.


        :param metadata: The metadata of this SpendingControl.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def secondary_id(self):
        """Gets the secondary_id of this SpendingControl.  # noqa: E501


        :return: The secondary_id of this SpendingControl.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this SpendingControl.


        :param secondary_id: The secondary_id of this SpendingControl.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this SpendingControl.  # noqa: E501


        :return: The update_date of this SpendingControl.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this SpendingControl.


        :param update_date: The update_date of this SpendingControl.  # noqa: E501
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
        if issubclass(SpendingControl, dict):
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
        if not isinstance(other, SpendingControl):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, SpendingControl):
            return True

        return self.to_dict() != other.to_dict()
