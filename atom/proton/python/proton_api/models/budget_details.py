# coding: utf-8

"""
    Hydrogen Proton API

    Financial engineering module of Hydrogen Atom  # noqa: E501

    OpenAPI spec version: 1.8.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class BudgetDetails(object):
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
        'frequency_unit': 'str',
        'end_date': 'date',
        'client_id': 'str',
        'budget': 'list[BudgetComponent]',
        'total_value': 'float',
        'account_id': 'str',
        'aggregation_accounts': 'list[BudgetAggregationAccount]',
        'currency_code': 'str',
        'frequency': 'int',
        'start_date': 'date'
    }

    attribute_map = {
        'frequency_unit': 'frequency_unit',
        'end_date': 'end_date',
        'client_id': 'client_id',
        'budget': 'budget',
        'total_value': 'total_value',
        'account_id': 'account_id',
        'aggregation_accounts': 'aggregation_accounts',
        'currency_code': 'currency_code',
        'frequency': 'frequency',
        'start_date': 'start_date'
    }

    def __init__(self, frequency_unit=None, end_date=None, client_id=None, budget=None, total_value=None, account_id=None, aggregation_accounts=None, currency_code=None, frequency=1, start_date=None):  # noqa: E501
        """BudgetDetails - a model defined in Swagger"""  # noqa: E501

        self._frequency_unit = None
        self._end_date = None
        self._client_id = None
        self._budget = None
        self._total_value = None
        self._account_id = None
        self._aggregation_accounts = None
        self._currency_code = None
        self._frequency = None
        self._start_date = None
        self.discriminator = None

        self.frequency_unit = frequency_unit
        if end_date is not None:
            self.end_date = end_date
        if client_id is not None:
            self.client_id = client_id
        if budget is not None:
            self.budget = budget
        if total_value is not None:
            self.total_value = total_value
        if account_id is not None:
            self.account_id = account_id
        if aggregation_accounts is not None:
            self.aggregation_accounts = aggregation_accounts
        if currency_code is not None:
            self.currency_code = currency_code
        if frequency is not None:
            self.frequency = frequency
        if start_date is not None:
            self.start_date = start_date

    @property
    def frequency_unit(self):
        """Gets the frequency_unit of this BudgetDetails.  # noqa: E501


        :return: The frequency_unit of this BudgetDetails.  # noqa: E501
        :rtype: str
        """
        return self._frequency_unit

    @frequency_unit.setter
    def frequency_unit(self, frequency_unit):
        """Sets the frequency_unit of this BudgetDetails.


        :param frequency_unit: The frequency_unit of this BudgetDetails.  # noqa: E501
        :type: str
        """
        if frequency_unit is None:
            raise ValueError("Invalid value for `frequency_unit`, must not be `None`")  # noqa: E501
        allowed_values = ["daily", "weekly", "bi-weekly", "monthly", "quarterly", "annually"]  # noqa: E501
        if frequency_unit not in allowed_values:
            raise ValueError(
                "Invalid value for `frequency_unit` ({0}), must be one of {1}"  # noqa: E501
                .format(frequency_unit, allowed_values)
            )

        self._frequency_unit = frequency_unit

    @property
    def end_date(self):
        """Gets the end_date of this BudgetDetails.  # noqa: E501


        :return: The end_date of this BudgetDetails.  # noqa: E501
        :rtype: date
        """
        return self._end_date

    @end_date.setter
    def end_date(self, end_date):
        """Sets the end_date of this BudgetDetails.


        :param end_date: The end_date of this BudgetDetails.  # noqa: E501
        :type: date
        """

        self._end_date = end_date

    @property
    def client_id(self):
        """Gets the client_id of this BudgetDetails.  # noqa: E501


        :return: The client_id of this BudgetDetails.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this BudgetDetails.


        :param client_id: The client_id of this BudgetDetails.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def budget(self):
        """Gets the budget of this BudgetDetails.  # noqa: E501


        :return: The budget of this BudgetDetails.  # noqa: E501
        :rtype: list[BudgetComponent]
        """
        return self._budget

    @budget.setter
    def budget(self, budget):
        """Sets the budget of this BudgetDetails.


        :param budget: The budget of this BudgetDetails.  # noqa: E501
        :type: list[BudgetComponent]
        """

        self._budget = budget

    @property
    def total_value(self):
        """Gets the total_value of this BudgetDetails.  # noqa: E501


        :return: The total_value of this BudgetDetails.  # noqa: E501
        :rtype: float
        """
        return self._total_value

    @total_value.setter
    def total_value(self, total_value):
        """Sets the total_value of this BudgetDetails.


        :param total_value: The total_value of this BudgetDetails.  # noqa: E501
        :type: float
        """
        if total_value is not None and total_value < 0:  # noqa: E501
            raise ValueError("Invalid value for `total_value`, must be a value greater than or equal to `0`")  # noqa: E501

        self._total_value = total_value

    @property
    def account_id(self):
        """Gets the account_id of this BudgetDetails.  # noqa: E501


        :return: The account_id of this BudgetDetails.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this BudgetDetails.


        :param account_id: The account_id of this BudgetDetails.  # noqa: E501
        :type: str
        """

        self._account_id = account_id

    @property
    def aggregation_accounts(self):
        """Gets the aggregation_accounts of this BudgetDetails.  # noqa: E501


        :return: The aggregation_accounts of this BudgetDetails.  # noqa: E501
        :rtype: list[BudgetAggregationAccount]
        """
        return self._aggregation_accounts

    @aggregation_accounts.setter
    def aggregation_accounts(self, aggregation_accounts):
        """Sets the aggregation_accounts of this BudgetDetails.


        :param aggregation_accounts: The aggregation_accounts of this BudgetDetails.  # noqa: E501
        :type: list[BudgetAggregationAccount]
        """

        self._aggregation_accounts = aggregation_accounts

    @property
    def currency_code(self):
        """Gets the currency_code of this BudgetDetails.  # noqa: E501


        :return: The currency_code of this BudgetDetails.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this BudgetDetails.


        :param currency_code: The currency_code of this BudgetDetails.  # noqa: E501
        :type: str
        """

        self._currency_code = currency_code

    @property
    def frequency(self):
        """Gets the frequency of this BudgetDetails.  # noqa: E501


        :return: The frequency of this BudgetDetails.  # noqa: E501
        :rtype: int
        """
        return self._frequency

    @frequency.setter
    def frequency(self, frequency):
        """Sets the frequency of this BudgetDetails.


        :param frequency: The frequency of this BudgetDetails.  # noqa: E501
        :type: int
        """
        if frequency is not None and frequency < 1:  # noqa: E501
            raise ValueError("Invalid value for `frequency`, must be a value greater than or equal to `1`")  # noqa: E501

        self._frequency = frequency

    @property
    def start_date(self):
        """Gets the start_date of this BudgetDetails.  # noqa: E501


        :return: The start_date of this BudgetDetails.  # noqa: E501
        :rtype: date
        """
        return self._start_date

    @start_date.setter
    def start_date(self, start_date):
        """Sets the start_date of this BudgetDetails.


        :param start_date: The start_date of this BudgetDetails.  # noqa: E501
        :type: date
        """

        self._start_date = start_date

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
        if issubclass(BudgetDetails, dict):
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
        if not isinstance(other, BudgetDetails):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
