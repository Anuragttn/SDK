# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.0.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from atom_api.models.create_portfolio_response import CreatePortfolioResponse  # noqa: F401,E501
from atom_api.models.secondary_id import SecondaryId  # noqa: F401,E501


class SpecificPortfolioResponse(object):
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
        'create_date': 'str',
        'name': 'str',
        'account_id': 'str',
        'model_id': 'str',
        'percentage': 'float',
        'description': 'str',
        'currency_code': 'str',
        'metadata': 'object',
        'secondary_id': 'SecondaryId',
        'update_date': 'str'
    }

    attribute_map = {
        'id': 'id',
        'create_date': 'create_date',
        'name': 'name',
        'account_id': 'account_id',
        'model_id': 'model_id',
        'percentage': 'percentage',
        'description': 'description',
        'currency_code': 'currency_code',
        'metadata': 'metadata',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, id=None, create_date=None, name=None, account_id=None, model_id=None, percentage=None, description=None, currency_code=None, metadata=None, secondary_id=None, update_date=None):  # noqa: E501
        """SpecificPortfolioResponse - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._create_date = None
        self._name = None
        self._account_id = None
        self._model_id = None
        self._percentage = None
        self._description = None
        self._currency_code = None
        self._metadata = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if create_date is not None:
            self.create_date = create_date
        self.name = name
        self.account_id = account_id
        self.model_id = model_id
        self.percentage = percentage
        if description is not None:
            self.description = description
        if currency_code is not None:
            self.currency_code = currency_code
        if metadata is not None:
            self.metadata = metadata
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def id(self):
        """Gets the id of this SpecificPortfolioResponse.  # noqa: E501

        ID of the portfolio  # noqa: E501

        :return: The id of this SpecificPortfolioResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SpecificPortfolioResponse.

        ID of the portfolio  # noqa: E501

        :param id: The id of this SpecificPortfolioResponse.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def create_date(self):
        """Gets the create_date of this SpecificPortfolioResponse.  # noqa: E501

        Datetime the portfolio was created  # noqa: E501

        :return: The create_date of this SpecificPortfolioResponse.  # noqa: E501
        :rtype: str
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this SpecificPortfolioResponse.

        Datetime the portfolio was created  # noqa: E501

        :param create_date: The create_date of this SpecificPortfolioResponse.  # noqa: E501
        :type: str
        """

        self._create_date = create_date

    @property
    def name(self):
        """Gets the name of this SpecificPortfolioResponse.  # noqa: E501

        Name of the portfolio such as “Stock”  # noqa: E501

        :return: The name of this SpecificPortfolioResponse.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this SpecificPortfolioResponse.

        Name of the portfolio such as “Stock”  # noqa: E501

        :param name: The name of this SpecificPortfolioResponse.  # noqa: E501
        :type: str
        """
        if name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def account_id(self):
        """Gets the account_id of this SpecificPortfolioResponse.  # noqa: E501

        The ID of the account to which the portfolio belongs  # noqa: E501

        :return: The account_id of this SpecificPortfolioResponse.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this SpecificPortfolioResponse.

        The ID of the account to which the portfolio belongs  # noqa: E501

        :param account_id: The account_id of this SpecificPortfolioResponse.  # noqa: E501
        :type: str
        """
        if account_id is None:
            raise ValueError("Invalid value for `account_id`, must not be `None`")  # noqa: E501

        self._account_id = account_id

    @property
    def model_id(self):
        """Gets the model_id of this SpecificPortfolioResponse.  # noqa: E501

        The ID of the model to which the portfolio subscribes  # noqa: E501

        :return: The model_id of this SpecificPortfolioResponse.  # noqa: E501
        :rtype: str
        """
        return self._model_id

    @model_id.setter
    def model_id(self, model_id):
        """Sets the model_id of this SpecificPortfolioResponse.

        The ID of the model to which the portfolio subscribes  # noqa: E501

        :param model_id: The model_id of this SpecificPortfolioResponse.  # noqa: E501
        :type: str
        """
        if model_id is None:
            raise ValueError("Invalid value for `model_id`, must not be `None`")  # noqa: E501

        self._model_id = model_id

    @property
    def percentage(self):
        """Gets the percentage of this SpecificPortfolioResponse.  # noqa: E501

        Weight of the portfolio as a percentage of an account based on the weight of the portfolio’s model within the account’s allocation; ex. 20 representing 20%. If the account only has one portfolio input 100  # noqa: E501

        :return: The percentage of this SpecificPortfolioResponse.  # noqa: E501
        :rtype: float
        """
        return self._percentage

    @percentage.setter
    def percentage(self, percentage):
        """Sets the percentage of this SpecificPortfolioResponse.

        Weight of the portfolio as a percentage of an account based on the weight of the portfolio’s model within the account’s allocation; ex. 20 representing 20%. If the account only has one portfolio input 100  # noqa: E501

        :param percentage: The percentage of this SpecificPortfolioResponse.  # noqa: E501
        :type: float
        """
        if percentage is None:
            raise ValueError("Invalid value for `percentage`, must not be `None`")  # noqa: E501

        self._percentage = percentage

    @property
    def description(self):
        """Gets the description of this SpecificPortfolioResponse.  # noqa: E501

        Description for the portfolio such as “Stock Portfolio”  # noqa: E501

        :return: The description of this SpecificPortfolioResponse.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this SpecificPortfolioResponse.

        Description for the portfolio such as “Stock Portfolio”  # noqa: E501

        :param description: The description of this SpecificPortfolioResponse.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def currency_code(self):
        """Gets the currency_code of this SpecificPortfolioResponse.  # noqa: E501

        Alphabetic currency code for the base currency of the portfolio, limited to 3 characters  # noqa: E501

        :return: The currency_code of this SpecificPortfolioResponse.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this SpecificPortfolioResponse.

        Alphabetic currency code for the base currency of the portfolio, limited to 3 characters  # noqa: E501

        :param currency_code: The currency_code of this SpecificPortfolioResponse.  # noqa: E501
        :type: str
        """

        self._currency_code = currency_code

    @property
    def metadata(self):
        """Gets the metadata of this SpecificPortfolioResponse.  # noqa: E501

        Custom information associated with the portfolio in the format key:value  # noqa: E501

        :return: The metadata of this SpecificPortfolioResponse.  # noqa: E501
        :rtype: object
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this SpecificPortfolioResponse.

        Custom information associated with the portfolio in the format key:value  # noqa: E501

        :param metadata: The metadata of this SpecificPortfolioResponse.  # noqa: E501
        :type: object
        """

        self._metadata = metadata

    @property
    def secondary_id(self):
        """Gets the secondary_id of this SpecificPortfolioResponse.  # noqa: E501


        :return: The secondary_id of this SpecificPortfolioResponse.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this SpecificPortfolioResponse.


        :param secondary_id: The secondary_id of this SpecificPortfolioResponse.  # noqa: E501
        :type: SecondaryId
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this SpecificPortfolioResponse.  # noqa: E501

        Datetime the portfolio was last updated  # noqa: E501

        :return: The update_date of this SpecificPortfolioResponse.  # noqa: E501
        :rtype: str
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this SpecificPortfolioResponse.

        Datetime the portfolio was last updated  # noqa: E501

        :param update_date: The update_date of this SpecificPortfolioResponse.  # noqa: E501
        :type: str
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
        if issubclass(SpecificPortfolioResponse, dict):
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
        if not isinstance(other, SpecificPortfolioResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
