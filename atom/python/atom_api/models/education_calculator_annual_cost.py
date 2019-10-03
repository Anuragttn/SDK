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

from atom_api.models.education_calculator_deposit_schedule_dep_amt import EducationCalculatorDepositScheduleDepAmt  # noqa: F401,E501


class EducationCalculatorAnnualCost(object):
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
        'initial_balance': 'float',
        'accumulation_horizon': 'int',
        'decumulation_horizon': 'int',
        'portfolio_return': 'float',
        'percent_of_costs_covered': 'float',
        'education_inflation_rate': 'float',
        'general_inflation_rate': 'float',
        'tax_rate': 'float',
        'deposit_schedule': 'EducationCalculatorDepositScheduleDepAmt'
    }

    attribute_map = {
        'initial_balance': 'initial_balance',
        'accumulation_horizon': 'accumulation_horizon',
        'decumulation_horizon': 'decumulation_horizon',
        'portfolio_return': 'portfolio_return',
        'percent_of_costs_covered': 'percent_of_costs_covered',
        'education_inflation_rate': 'education_inflation_rate',
        'general_inflation_rate': 'general_inflation_rate',
        'tax_rate': 'tax_rate',
        'deposit_schedule': 'deposit_schedule'
    }

    def __init__(self, initial_balance=None, accumulation_horizon=None, decumulation_horizon=None, portfolio_return=None, percent_of_costs_covered=None, education_inflation_rate=None, general_inflation_rate=None, tax_rate=None, deposit_schedule=None):  # noqa: E501
        """EducationCalculatorAnnualCost - a model defined in Swagger"""  # noqa: E501

        self._initial_balance = None
        self._accumulation_horizon = None
        self._decumulation_horizon = None
        self._portfolio_return = None
        self._percent_of_costs_covered = None
        self._education_inflation_rate = None
        self._general_inflation_rate = None
        self._tax_rate = None
        self._deposit_schedule = None
        self.discriminator = None

        self.initial_balance = initial_balance
        self.accumulation_horizon = accumulation_horizon
        self.decumulation_horizon = decumulation_horizon
        self.portfolio_return = portfolio_return
        if percent_of_costs_covered is not None:
            self.percent_of_costs_covered = percent_of_costs_covered
        if education_inflation_rate is not None:
            self.education_inflation_rate = education_inflation_rate
        if general_inflation_rate is not None:
            self.general_inflation_rate = general_inflation_rate
        if tax_rate is not None:
            self.tax_rate = tax_rate
        if deposit_schedule is not None:
            self.deposit_schedule = deposit_schedule

    @property
    def initial_balance(self):
        """Gets the initial_balance of this EducationCalculatorAnnualCost.  # noqa: E501

        The amount currently saved for the goal  # noqa: E501

        :return: The initial_balance of this EducationCalculatorAnnualCost.  # noqa: E501
        :rtype: float
        """
        return self._initial_balance

    @initial_balance.setter
    def initial_balance(self, initial_balance):
        """Sets the initial_balance of this EducationCalculatorAnnualCost.

        The amount currently saved for the goal  # noqa: E501

        :param initial_balance: The initial_balance of this EducationCalculatorAnnualCost.  # noqa: E501
        :type: float
        """
        if initial_balance is None:
            raise ValueError("Invalid value for `initial_balance`, must not be `None`")  # noqa: E501
        if initial_balance is not None and initial_balance < 0:  # noqa: E501
            raise ValueError("Invalid value for `initial_balance`, must be a value greater than or equal to `0`")  # noqa: E501

        self._initial_balance = initial_balance

    @property
    def accumulation_horizon(self):
        """Gets the accumulation_horizon of this EducationCalculatorAnnualCost.  # noqa: E501

        The amount of years until funds are needed  # noqa: E501

        :return: The accumulation_horizon of this EducationCalculatorAnnualCost.  # noqa: E501
        :rtype: int
        """
        return self._accumulation_horizon

    @accumulation_horizon.setter
    def accumulation_horizon(self, accumulation_horizon):
        """Sets the accumulation_horizon of this EducationCalculatorAnnualCost.

        The amount of years until funds are needed  # noqa: E501

        :param accumulation_horizon: The accumulation_horizon of this EducationCalculatorAnnualCost.  # noqa: E501
        :type: int
        """
        if accumulation_horizon is None:
            raise ValueError("Invalid value for `accumulation_horizon`, must not be `None`")  # noqa: E501
        if accumulation_horizon is not None and accumulation_horizon <= 0:  # noqa: E501
            raise ValueError("Invalid value for `accumulation_horizon`, must be a value greater than `0`")  # noqa: E501

        self._accumulation_horizon = accumulation_horizon

    @property
    def decumulation_horizon(self):
        """Gets the decumulation_horizon of this EducationCalculatorAnnualCost.  # noqa: E501

        The amount of years funds will be used  # noqa: E501

        :return: The decumulation_horizon of this EducationCalculatorAnnualCost.  # noqa: E501
        :rtype: int
        """
        return self._decumulation_horizon

    @decumulation_horizon.setter
    def decumulation_horizon(self, decumulation_horizon):
        """Sets the decumulation_horizon of this EducationCalculatorAnnualCost.

        The amount of years funds will be used  # noqa: E501

        :param decumulation_horizon: The decumulation_horizon of this EducationCalculatorAnnualCost.  # noqa: E501
        :type: int
        """
        if decumulation_horizon is None:
            raise ValueError("Invalid value for `decumulation_horizon`, must not be `None`")  # noqa: E501
        if decumulation_horizon is not None and decumulation_horizon <= 0:  # noqa: E501
            raise ValueError("Invalid value for `decumulation_horizon`, must be a value greater than `0`")  # noqa: E501

        self._decumulation_horizon = decumulation_horizon

    @property
    def portfolio_return(self):
        """Gets the portfolio_return of this EducationCalculatorAnnualCost.  # noqa: E501

        The annualized portfolio return  # noqa: E501

        :return: The portfolio_return of this EducationCalculatorAnnualCost.  # noqa: E501
        :rtype: float
        """
        return self._portfolio_return

    @portfolio_return.setter
    def portfolio_return(self, portfolio_return):
        """Sets the portfolio_return of this EducationCalculatorAnnualCost.

        The annualized portfolio return  # noqa: E501

        :param portfolio_return: The portfolio_return of this EducationCalculatorAnnualCost.  # noqa: E501
        :type: float
        """
        if portfolio_return is None:
            raise ValueError("Invalid value for `portfolio_return`, must not be `None`")  # noqa: E501
        if portfolio_return is not None and portfolio_return <= -1:  # noqa: E501
            raise ValueError("Invalid value for `portfolio_return`, must be a value greater than `-1`")  # noqa: E501

        self._portfolio_return = portfolio_return

    @property
    def percent_of_costs_covered(self):
        """Gets the percent_of_costs_covered of this EducationCalculatorAnnualCost.  # noqa: E501

        The desired percent of education costs covered  # noqa: E501

        :return: The percent_of_costs_covered of this EducationCalculatorAnnualCost.  # noqa: E501
        :rtype: float
        """
        return self._percent_of_costs_covered

    @percent_of_costs_covered.setter
    def percent_of_costs_covered(self, percent_of_costs_covered):
        """Sets the percent_of_costs_covered of this EducationCalculatorAnnualCost.

        The desired percent of education costs covered  # noqa: E501

        :param percent_of_costs_covered: The percent_of_costs_covered of this EducationCalculatorAnnualCost.  # noqa: E501
        :type: float
        """
        if percent_of_costs_covered is not None and percent_of_costs_covered > 1:  # noqa: E501
            raise ValueError("Invalid value for `percent_of_costs_covered`, must be a value less than or equal to `1`")  # noqa: E501
        if percent_of_costs_covered is not None and percent_of_costs_covered <= 0:  # noqa: E501
            raise ValueError("Invalid value for `percent_of_costs_covered`, must be a value greater than `0`")  # noqa: E501

        self._percent_of_costs_covered = percent_of_costs_covered

    @property
    def education_inflation_rate(self):
        """Gets the education_inflation_rate of this EducationCalculatorAnnualCost.  # noqa: E501

        The inflation rate for education prices  # noqa: E501

        :return: The education_inflation_rate of this EducationCalculatorAnnualCost.  # noqa: E501
        :rtype: float
        """
        return self._education_inflation_rate

    @education_inflation_rate.setter
    def education_inflation_rate(self, education_inflation_rate):
        """Sets the education_inflation_rate of this EducationCalculatorAnnualCost.

        The inflation rate for education prices  # noqa: E501

        :param education_inflation_rate: The education_inflation_rate of this EducationCalculatorAnnualCost.  # noqa: E501
        :type: float
        """
        if education_inflation_rate is not None and education_inflation_rate >= 20:  # noqa: E501
            raise ValueError("Invalid value for `education_inflation_rate`, must be a value less than `20`")  # noqa: E501
        if education_inflation_rate is not None and education_inflation_rate <= -1:  # noqa: E501
            raise ValueError("Invalid value for `education_inflation_rate`, must be a value greater than `-1`")  # noqa: E501

        self._education_inflation_rate = education_inflation_rate

    @property
    def general_inflation_rate(self):
        """Gets the general_inflation_rate of this EducationCalculatorAnnualCost.  # noqa: E501

        The annualized general inflation rate  # noqa: E501

        :return: The general_inflation_rate of this EducationCalculatorAnnualCost.  # noqa: E501
        :rtype: float
        """
        return self._general_inflation_rate

    @general_inflation_rate.setter
    def general_inflation_rate(self, general_inflation_rate):
        """Sets the general_inflation_rate of this EducationCalculatorAnnualCost.

        The annualized general inflation rate  # noqa: E501

        :param general_inflation_rate: The general_inflation_rate of this EducationCalculatorAnnualCost.  # noqa: E501
        :type: float
        """
        if general_inflation_rate is not None and general_inflation_rate >= 20:  # noqa: E501
            raise ValueError("Invalid value for `general_inflation_rate`, must be a value less than `20`")  # noqa: E501
        if general_inflation_rate is not None and general_inflation_rate <= -1:  # noqa: E501
            raise ValueError("Invalid value for `general_inflation_rate`, must be a value greater than `-1`")  # noqa: E501

        self._general_inflation_rate = general_inflation_rate

    @property
    def tax_rate(self):
        """Gets the tax_rate of this EducationCalculatorAnnualCost.  # noqa: E501

        The tax rate for withdrawals from the account  # noqa: E501

        :return: The tax_rate of this EducationCalculatorAnnualCost.  # noqa: E501
        :rtype: float
        """
        return self._tax_rate

    @tax_rate.setter
    def tax_rate(self, tax_rate):
        """Sets the tax_rate of this EducationCalculatorAnnualCost.

        The tax rate for withdrawals from the account  # noqa: E501

        :param tax_rate: The tax_rate of this EducationCalculatorAnnualCost.  # noqa: E501
        :type: float
        """
        if tax_rate is not None and tax_rate >= 1:  # noqa: E501
            raise ValueError("Invalid value for `tax_rate`, must be a value less than `1`")  # noqa: E501
        if tax_rate is not None and tax_rate < 0:  # noqa: E501
            raise ValueError("Invalid value for `tax_rate`, must be a value greater than or equal to `0`")  # noqa: E501

        self._tax_rate = tax_rate

    @property
    def deposit_schedule(self):
        """Gets the deposit_schedule of this EducationCalculatorAnnualCost.  # noqa: E501


        :return: The deposit_schedule of this EducationCalculatorAnnualCost.  # noqa: E501
        :rtype: EducationCalculatorDepositScheduleDepAmt
        """
        return self._deposit_schedule

    @deposit_schedule.setter
    def deposit_schedule(self, deposit_schedule):
        """Sets the deposit_schedule of this EducationCalculatorAnnualCost.


        :param deposit_schedule: The deposit_schedule of this EducationCalculatorAnnualCost.  # noqa: E501
        :type: EducationCalculatorDepositScheduleDepAmt
        """

        self._deposit_schedule = deposit_schedule

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
        if issubclass(EducationCalculatorAnnualCost, dict):
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
        if not isinstance(other, EducationCalculatorAnnualCost):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
