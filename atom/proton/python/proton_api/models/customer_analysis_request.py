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


class CustomerAnalysisRequest(object):
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
        'end_date': 'date',
        'benchmark_end_date': 'date',
        'customer_ids': 'list[str]',
        'client_id': 'str',
        'response_limit': 'int',
        'currency_conversion': 'str',
        'start_date': 'date',
        'currency_code': 'str',
        'only_active_customers': 'bool',
        'benchmark_start_date': 'date'
    }

    attribute_map = {
        'end_date': 'end_date',
        'benchmark_end_date': 'benchmark_end_date',
        'customer_ids': 'customer_ids',
        'client_id': 'client_id',
        'response_limit': 'response_limit',
        'currency_conversion': 'currency_conversion',
        'start_date': 'start_date',
        'currency_code': 'currency_code',
        'only_active_customers': 'only_active_customers',
        'benchmark_start_date': 'benchmark_start_date'
    }

    def __init__(self, end_date=None, benchmark_end_date=None, customer_ids=None, client_id=None, response_limit=10, currency_conversion=None, start_date=None, currency_code=None, only_active_customers=False, benchmark_start_date=None):  # noqa: E501
        """CustomerAnalysisRequest - a model defined in Swagger"""  # noqa: E501

        self._end_date = None
        self._benchmark_end_date = None
        self._customer_ids = None
        self._client_id = None
        self._response_limit = None
        self._currency_conversion = None
        self._start_date = None
        self._currency_code = None
        self._only_active_customers = None
        self._benchmark_start_date = None
        self.discriminator = None

        if end_date is not None:
            self.end_date = end_date
        if benchmark_end_date is not None:
            self.benchmark_end_date = benchmark_end_date
        if customer_ids is not None:
            self.customer_ids = customer_ids
        if client_id is not None:
            self.client_id = client_id
        if response_limit is not None:
            self.response_limit = response_limit
        if currency_conversion is not None:
            self.currency_conversion = currency_conversion
        if start_date is not None:
            self.start_date = start_date
        if currency_code is not None:
            self.currency_code = currency_code
        if only_active_customers is not None:
            self.only_active_customers = only_active_customers
        if benchmark_start_date is not None:
            self.benchmark_start_date = benchmark_start_date

    @property
    def end_date(self):
        """Gets the end_date of this CustomerAnalysisRequest.  # noqa: E501


        :return: The end_date of this CustomerAnalysisRequest.  # noqa: E501
        :rtype: date
        """
        return self._end_date

    @end_date.setter
    def end_date(self, end_date):
        """Sets the end_date of this CustomerAnalysisRequest.


        :param end_date: The end_date of this CustomerAnalysisRequest.  # noqa: E501
        :type: date
        """

        self._end_date = end_date

    @property
    def benchmark_end_date(self):
        """Gets the benchmark_end_date of this CustomerAnalysisRequest.  # noqa: E501


        :return: The benchmark_end_date of this CustomerAnalysisRequest.  # noqa: E501
        :rtype: date
        """
        return self._benchmark_end_date

    @benchmark_end_date.setter
    def benchmark_end_date(self, benchmark_end_date):
        """Sets the benchmark_end_date of this CustomerAnalysisRequest.


        :param benchmark_end_date: The benchmark_end_date of this CustomerAnalysisRequest.  # noqa: E501
        :type: date
        """

        self._benchmark_end_date = benchmark_end_date

    @property
    def customer_ids(self):
        """Gets the customer_ids of this CustomerAnalysisRequest.  # noqa: E501


        :return: The customer_ids of this CustomerAnalysisRequest.  # noqa: E501
        :rtype: list[str]
        """
        return self._customer_ids

    @customer_ids.setter
    def customer_ids(self, customer_ids):
        """Sets the customer_ids of this CustomerAnalysisRequest.


        :param customer_ids: The customer_ids of this CustomerAnalysisRequest.  # noqa: E501
        :type: list[str]
        """

        self._customer_ids = customer_ids

    @property
    def client_id(self):
        """Gets the client_id of this CustomerAnalysisRequest.  # noqa: E501


        :return: The client_id of this CustomerAnalysisRequest.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this CustomerAnalysisRequest.


        :param client_id: The client_id of this CustomerAnalysisRequest.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def response_limit(self):
        """Gets the response_limit of this CustomerAnalysisRequest.  # noqa: E501


        :return: The response_limit of this CustomerAnalysisRequest.  # noqa: E501
        :rtype: int
        """
        return self._response_limit

    @response_limit.setter
    def response_limit(self, response_limit):
        """Sets the response_limit of this CustomerAnalysisRequest.


        :param response_limit: The response_limit of this CustomerAnalysisRequest.  # noqa: E501
        :type: int
        """
        if response_limit is not None and response_limit < 1:  # noqa: E501
            raise ValueError("Invalid value for `response_limit`, must be a value greater than or equal to `1`")  # noqa: E501

        self._response_limit = response_limit

    @property
    def currency_conversion(self):
        """Gets the currency_conversion of this CustomerAnalysisRequest.  # noqa: E501


        :return: The currency_conversion of this CustomerAnalysisRequest.  # noqa: E501
        :rtype: str
        """
        return self._currency_conversion

    @currency_conversion.setter
    def currency_conversion(self, currency_conversion):
        """Sets the currency_conversion of this CustomerAnalysisRequest.


        :param currency_conversion: The currency_conversion of this CustomerAnalysisRequest.  # noqa: E501
        :type: str
        """

        self._currency_conversion = currency_conversion

    @property
    def start_date(self):
        """Gets the start_date of this CustomerAnalysisRequest.  # noqa: E501


        :return: The start_date of this CustomerAnalysisRequest.  # noqa: E501
        :rtype: date
        """
        return self._start_date

    @start_date.setter
    def start_date(self, start_date):
        """Sets the start_date of this CustomerAnalysisRequest.


        :param start_date: The start_date of this CustomerAnalysisRequest.  # noqa: E501
        :type: date
        """

        self._start_date = start_date

    @property
    def currency_code(self):
        """Gets the currency_code of this CustomerAnalysisRequest.  # noqa: E501


        :return: The currency_code of this CustomerAnalysisRequest.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this CustomerAnalysisRequest.


        :param currency_code: The currency_code of this CustomerAnalysisRequest.  # noqa: E501
        :type: str
        """

        self._currency_code = currency_code

    @property
    def only_active_customers(self):
        """Gets the only_active_customers of this CustomerAnalysisRequest.  # noqa: E501


        :return: The only_active_customers of this CustomerAnalysisRequest.  # noqa: E501
        :rtype: bool
        """
        return self._only_active_customers

    @only_active_customers.setter
    def only_active_customers(self, only_active_customers):
        """Sets the only_active_customers of this CustomerAnalysisRequest.


        :param only_active_customers: The only_active_customers of this CustomerAnalysisRequest.  # noqa: E501
        :type: bool
        """

        self._only_active_customers = only_active_customers

    @property
    def benchmark_start_date(self):
        """Gets the benchmark_start_date of this CustomerAnalysisRequest.  # noqa: E501


        :return: The benchmark_start_date of this CustomerAnalysisRequest.  # noqa: E501
        :rtype: date
        """
        return self._benchmark_start_date

    @benchmark_start_date.setter
    def benchmark_start_date(self, benchmark_start_date):
        """Sets the benchmark_start_date of this CustomerAnalysisRequest.


        :param benchmark_start_date: The benchmark_start_date of this CustomerAnalysisRequest.  # noqa: E501
        :type: date
        """

        self._benchmark_start_date = benchmark_start_date

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
        if issubclass(CustomerAnalysisRequest, dict):
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
        if not isinstance(other, CustomerAnalysisRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
