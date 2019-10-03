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

from atom_api.models.aggregation_account_transaction_payload_bank_credit import AggregationAccountTransactionPayloadBankCredit  # noqa: F401,E501
from atom_api.models.aggregation_account_transaction_payload_investment import AggregationAccountTransactionPayloadInvestment  # noqa: F401,E501
from atom_api.models.create_aggregation_account_transaction_response import CreateAggregationAccountTransactionResponse  # noqa: F401,E501
from atom_api.models.secondary_id import SecondaryId  # noqa: F401,E501


class SpecificAggregationAccountTransactionResponse(object):
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
        'aggregation_account_id': 'str',
        'currency_code': 'str',
        'transaction_date': 'str',
        'bank_credit': 'AggregationAccountTransactionPayloadBankCredit',
        'investment': 'AggregationAccountTransactionPayloadInvestment',
        'is_excluded_analysis': 'bool',
        'secondary_id': 'SecondaryId',
        'metadata': 'object',
        'update_date': 'str'
    }

    attribute_map = {
        'id': 'id',
        'create_date': 'create_date',
        'aggregation_account_id': 'aggregation_account_id',
        'currency_code': 'currency_code',
        'transaction_date': 'transaction_date',
        'bank_credit': 'bank_credit',
        'investment': 'investment',
        'is_excluded_analysis': 'is_excluded_analysis',
        'secondary_id': 'secondary_id',
        'metadata': 'metadata',
        'update_date': 'update_date'
    }

    def __init__(self, id=None, create_date=None, aggregation_account_id=None, currency_code=None, transaction_date=None, bank_credit=None, investment=None, is_excluded_analysis=None, secondary_id=None, metadata=None, update_date=None):  # noqa: E501
        """SpecificAggregationAccountTransactionResponse - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._create_date = None
        self._aggregation_account_id = None
        self._currency_code = None
        self._transaction_date = None
        self._bank_credit = None
        self._investment = None
        self._is_excluded_analysis = None
        self._secondary_id = None
        self._metadata = None
        self._update_date = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if create_date is not None:
            self.create_date = create_date
        self.aggregation_account_id = aggregation_account_id
        self.currency_code = currency_code
        self.transaction_date = transaction_date
        if bank_credit is not None:
            self.bank_credit = bank_credit
        if investment is not None:
            self.investment = investment
        if is_excluded_analysis is not None:
            self.is_excluded_analysis = is_excluded_analysis
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if metadata is not None:
            self.metadata = metadata
        if update_date is not None:
            self.update_date = update_date

    @property
    def id(self):
        """Gets the id of this SpecificAggregationAccountTransactionResponse.  # noqa: E501

        ID of the aggregation account transaction  # noqa: E501

        :return: The id of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SpecificAggregationAccountTransactionResponse.

        ID of the aggregation account transaction  # noqa: E501

        :param id: The id of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def create_date(self):
        """Gets the create_date of this SpecificAggregationAccountTransactionResponse.  # noqa: E501

        Datetime the aggregation account transaction was created  # noqa: E501

        :return: The create_date of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :rtype: str
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this SpecificAggregationAccountTransactionResponse.

        Datetime the aggregation account transaction was created  # noqa: E501

        :param create_date: The create_date of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :type: str
        """

        self._create_date = create_date

    @property
    def aggregation_account_id(self):
        """Gets the aggregation_account_id of this SpecificAggregationAccountTransactionResponse.  # noqa: E501

        The ID of the aggregation account to which the transaction record belongs  # noqa: E501

        :return: The aggregation_account_id of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :rtype: str
        """
        return self._aggregation_account_id

    @aggregation_account_id.setter
    def aggregation_account_id(self, aggregation_account_id):
        """Sets the aggregation_account_id of this SpecificAggregationAccountTransactionResponse.

        The ID of the aggregation account to which the transaction record belongs  # noqa: E501

        :param aggregation_account_id: The aggregation_account_id of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :type: str
        """
        if aggregation_account_id is None:
            raise ValueError("Invalid value for `aggregation_account_id`, must not be `None`")  # noqa: E501

        self._aggregation_account_id = aggregation_account_id

    @property
    def currency_code(self):
        """Gets the currency_code of this SpecificAggregationAccountTransactionResponse.  # noqa: E501

        Alphabetic currency code for the currency of the transaction, limited to 3 characters  # noqa: E501

        :return: The currency_code of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this SpecificAggregationAccountTransactionResponse.

        Alphabetic currency code for the currency of the transaction, limited to 3 characters  # noqa: E501

        :param currency_code: The currency_code of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :type: str
        """
        if currency_code is None:
            raise ValueError("Invalid value for `currency_code`, must not be `None`")  # noqa: E501

        self._currency_code = currency_code

    @property
    def transaction_date(self):
        """Gets the transaction_date of this SpecificAggregationAccountTransactionResponse.  # noqa: E501

        The date the transaction took place  # noqa: E501

        :return: The transaction_date of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :rtype: str
        """
        return self._transaction_date

    @transaction_date.setter
    def transaction_date(self, transaction_date):
        """Sets the transaction_date of this SpecificAggregationAccountTransactionResponse.

        The date the transaction took place  # noqa: E501

        :param transaction_date: The transaction_date of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :type: str
        """
        if transaction_date is None:
            raise ValueError("Invalid value for `transaction_date`, must not be `None`")  # noqa: E501

        self._transaction_date = transaction_date

    @property
    def bank_credit(self):
        """Gets the bank_credit of this SpecificAggregationAccountTransactionResponse.  # noqa: E501


        :return: The bank_credit of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :rtype: AggregationAccountTransactionPayloadBankCredit
        """
        return self._bank_credit

    @bank_credit.setter
    def bank_credit(self, bank_credit):
        """Sets the bank_credit of this SpecificAggregationAccountTransactionResponse.


        :param bank_credit: The bank_credit of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :type: AggregationAccountTransactionPayloadBankCredit
        """

        self._bank_credit = bank_credit

    @property
    def investment(self):
        """Gets the investment of this SpecificAggregationAccountTransactionResponse.  # noqa: E501


        :return: The investment of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :rtype: AggregationAccountTransactionPayloadInvestment
        """
        return self._investment

    @investment.setter
    def investment(self, investment):
        """Sets the investment of this SpecificAggregationAccountTransactionResponse.


        :param investment: The investment of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :type: AggregationAccountTransactionPayloadInvestment
        """

        self._investment = investment

    @property
    def is_excluded_analysis(self):
        """Gets the is_excluded_analysis of this SpecificAggregationAccountTransactionResponse.  # noqa: E501

        Indicates if this transaction will be excluded from any spending or income analysis done in Proton tools. Defaults to “false” which indicates it will not be excluded from Proton analyses  # noqa: E501

        :return: The is_excluded_analysis of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :rtype: bool
        """
        return self._is_excluded_analysis

    @is_excluded_analysis.setter
    def is_excluded_analysis(self, is_excluded_analysis):
        """Sets the is_excluded_analysis of this SpecificAggregationAccountTransactionResponse.

        Indicates if this transaction will be excluded from any spending or income analysis done in Proton tools. Defaults to “false” which indicates it will not be excluded from Proton analyses  # noqa: E501

        :param is_excluded_analysis: The is_excluded_analysis of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :type: bool
        """

        self._is_excluded_analysis = is_excluded_analysis

    @property
    def secondary_id(self):
        """Gets the secondary_id of this SpecificAggregationAccountTransactionResponse.  # noqa: E501


        :return: The secondary_id of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this SpecificAggregationAccountTransactionResponse.


        :param secondary_id: The secondary_id of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :type: SecondaryId
        """

        self._secondary_id = secondary_id

    @property
    def metadata(self):
        """Gets the metadata of this SpecificAggregationAccountTransactionResponse.  # noqa: E501

        Custom information associated with the aggregation account transaction in the format key:value  # noqa: E501

        :return: The metadata of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :rtype: object
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this SpecificAggregationAccountTransactionResponse.

        Custom information associated with the aggregation account transaction in the format key:value  # noqa: E501

        :param metadata: The metadata of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :type: object
        """

        self._metadata = metadata

    @property
    def update_date(self):
        """Gets the update_date of this SpecificAggregationAccountTransactionResponse.  # noqa: E501

        Datetime the aggregation account transaction was last updated  # noqa: E501

        :return: The update_date of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
        :rtype: str
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this SpecificAggregationAccountTransactionResponse.

        Datetime the aggregation account transaction was last updated  # noqa: E501

        :param update_date: The update_date of this SpecificAggregationAccountTransactionResponse.  # noqa: E501
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
        if issubclass(SpecificAggregationAccountTransactionResponse, dict):
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
        if not isinstance(other, SpecificAggregationAccountTransactionResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
