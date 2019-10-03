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

from atom_api.models.create_security_price_response import CreateSecurityPriceResponse  # noqa: F401,E501
from atom_api.models.secondary_id import SecondaryId  # noqa: F401,E501


class SpecificSecurityPriceResponse(object):
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
        'security_id': 'str',
        'price': 'float',
        '_date': 'str',
        'adjusted_price': 'float',
        'currency_code': 'str',
        'secondary_id': 'SecondaryId',
        'update_date': 'str'
    }

    attribute_map = {
        'id': 'id',
        'create_date': 'create_date',
        'security_id': 'security_id',
        'price': 'price',
        '_date': 'date',
        'adjusted_price': 'adjusted_price',
        'currency_code': 'currency_code',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, id=None, create_date=None, security_id=None, price=None, _date=None, adjusted_price=None, currency_code=None, secondary_id=None, update_date=None):  # noqa: E501
        """SpecificSecurityPriceResponse - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._create_date = None
        self._security_id = None
        self._price = None
        self.__date = None
        self._adjusted_price = None
        self._currency_code = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if create_date is not None:
            self.create_date = create_date
        self.security_id = security_id
        self.price = price
        self._date = _date
        if adjusted_price is not None:
            self.adjusted_price = adjusted_price
        if currency_code is not None:
            self.currency_code = currency_code
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def id(self):
        """Gets the id of this SpecificSecurityPriceResponse.  # noqa: E501

        ID of the security price  # noqa: E501

        :return: The id of this SpecificSecurityPriceResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SpecificSecurityPriceResponse.

        ID of the security price  # noqa: E501

        :param id: The id of this SpecificSecurityPriceResponse.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def create_date(self):
        """Gets the create_date of this SpecificSecurityPriceResponse.  # noqa: E501

        Datetime the security price was created  # noqa: E501

        :return: The create_date of this SpecificSecurityPriceResponse.  # noqa: E501
        :rtype: str
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this SpecificSecurityPriceResponse.

        Datetime the security price was created  # noqa: E501

        :param create_date: The create_date of this SpecificSecurityPriceResponse.  # noqa: E501
        :type: str
        """

        self._create_date = create_date

    @property
    def security_id(self):
        """Gets the security_id of this SpecificSecurityPriceResponse.  # noqa: E501

        The ID of the security  # noqa: E501

        :return: The security_id of this SpecificSecurityPriceResponse.  # noqa: E501
        :rtype: str
        """
        return self._security_id

    @security_id.setter
    def security_id(self, security_id):
        """Sets the security_id of this SpecificSecurityPriceResponse.

        The ID of the security  # noqa: E501

        :param security_id: The security_id of this SpecificSecurityPriceResponse.  # noqa: E501
        :type: str
        """
        if security_id is None:
            raise ValueError("Invalid value for `security_id`, must not be `None`")  # noqa: E501

        self._security_id = security_id

    @property
    def price(self):
        """Gets the price of this SpecificSecurityPriceResponse.  # noqa: E501

        Value for the price of the security  # noqa: E501

        :return: The price of this SpecificSecurityPriceResponse.  # noqa: E501
        :rtype: float
        """
        return self._price

    @price.setter
    def price(self, price):
        """Sets the price of this SpecificSecurityPriceResponse.

        Value for the price of the security  # noqa: E501

        :param price: The price of this SpecificSecurityPriceResponse.  # noqa: E501
        :type: float
        """
        if price is None:
            raise ValueError("Invalid value for `price`, must not be `None`")  # noqa: E501

        self._price = price

    @property
    def _date(self):
        """Gets the _date of this SpecificSecurityPriceResponse.  # noqa: E501

        Date and for when the particular price was applicable for this security  # noqa: E501

        :return: The _date of this SpecificSecurityPriceResponse.  # noqa: E501
        :rtype: str
        """
        return self.__date

    @_date.setter
    def _date(self, _date):
        """Sets the _date of this SpecificSecurityPriceResponse.

        Date and for when the particular price was applicable for this security  # noqa: E501

        :param _date: The _date of this SpecificSecurityPriceResponse.  # noqa: E501
        :type: str
        """
        if _date is None:
            raise ValueError("Invalid value for `_date`, must not be `None`")  # noqa: E501

        self.__date = _date

    @property
    def adjusted_price(self):
        """Gets the adjusted_price of this SpecificSecurityPriceResponse.  # noqa: E501

        Value for the adjusted price of the security  # noqa: E501

        :return: The adjusted_price of this SpecificSecurityPriceResponse.  # noqa: E501
        :rtype: float
        """
        return self._adjusted_price

    @adjusted_price.setter
    def adjusted_price(self, adjusted_price):
        """Sets the adjusted_price of this SpecificSecurityPriceResponse.

        Value for the adjusted price of the security  # noqa: E501

        :param adjusted_price: The adjusted_price of this SpecificSecurityPriceResponse.  # noqa: E501
        :type: float
        """

        self._adjusted_price = adjusted_price

    @property
    def currency_code(self):
        """Gets the currency_code of this SpecificSecurityPriceResponse.  # noqa: E501

        Alphabetic currency code for the base currency of the security, limited to 3 characters  # noqa: E501

        :return: The currency_code of this SpecificSecurityPriceResponse.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this SpecificSecurityPriceResponse.

        Alphabetic currency code for the base currency of the security, limited to 3 characters  # noqa: E501

        :param currency_code: The currency_code of this SpecificSecurityPriceResponse.  # noqa: E501
        :type: str
        """

        self._currency_code = currency_code

    @property
    def secondary_id(self):
        """Gets the secondary_id of this SpecificSecurityPriceResponse.  # noqa: E501


        :return: The secondary_id of this SpecificSecurityPriceResponse.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this SpecificSecurityPriceResponse.


        :param secondary_id: The secondary_id of this SpecificSecurityPriceResponse.  # noqa: E501
        :type: SecondaryId
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this SpecificSecurityPriceResponse.  # noqa: E501

        Datetime the security price was last updated  # noqa: E501

        :return: The update_date of this SpecificSecurityPriceResponse.  # noqa: E501
        :rtype: str
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this SpecificSecurityPriceResponse.

        Datetime the security price was last updated  # noqa: E501

        :param update_date: The update_date of this SpecificSecurityPriceResponse.  # noqa: E501
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
        if issubclass(SpecificSecurityPriceResponse, dict):
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
        if not isinstance(other, SpecificSecurityPriceResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
