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


class GoalAccumulationAllocationRequest(object):
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
        'thresh_type': 'str',
        'goal_id': 'str',
        'client_id': 'str',
        'conf_tgt': 'float',
        'risk_score': 'float',
        'remove_outliers': 'bool',
        'allocation_priority': 'str',
        'market_data_source': 'str',
        'compounding_rate': 'float',
        'adjust_for_compounding': 'bool',
        'opt_config': 'OptConfig',
        'deposit_config': 'list[AccumulationGoalDepositConfig]',
        'use_proxy_data': 'bool',
        'thresh': 'float',
        'horizon_frequency': 'str',
        'recommendation_config': 'RecommendationConfig',
        'create_log': 'bool',
        'withdrawal_tax': 'float',
        'goal_config': 'GoalConfig',
        'trading_days_per_year': 'int',
        'allocations': 'list[str]',
        'n': 'int',
        'horizon': 'int',
        'recommend_type': 'str',
        'curr_inv': 'float',
        'allocation_method': 'str'
    }

    attribute_map = {
        'thresh_type': 'thresh_type',
        'goal_id': 'goal_id',
        'client_id': 'client_id',
        'conf_tgt': 'conf_tgt',
        'risk_score': 'risk_score',
        'remove_outliers': 'remove_outliers',
        'allocation_priority': 'allocation_priority',
        'market_data_source': 'market_data_source',
        'compounding_rate': 'compounding_rate',
        'adjust_for_compounding': 'adjust_for_compounding',
        'opt_config': 'opt_config',
        'deposit_config': 'deposit_config',
        'use_proxy_data': 'use_proxy_data',
        'thresh': 'thresh',
        'horizon_frequency': 'horizon_frequency',
        'recommendation_config': 'recommendation_config',
        'create_log': 'create_log',
        'withdrawal_tax': 'withdrawal_tax',
        'goal_config': 'goal_config',
        'trading_days_per_year': 'trading_days_per_year',
        'allocations': 'allocations',
        'n': 'n',
        'horizon': 'horizon',
        'recommend_type': 'recommend_type',
        'curr_inv': 'curr_inv',
        'allocation_method': 'allocation_method'
    }

    def __init__(self, thresh_type='perc', goal_id=None, client_id=None, conf_tgt=0.9, risk_score=None, remove_outliers=True, allocation_priority=None, market_data_source='nucleus', compounding_rate=0.0, adjust_for_compounding=False, opt_config=None, deposit_config=None, use_proxy_data=False, thresh=None, horizon_frequency='year', recommendation_config=None, create_log=False, withdrawal_tax=0.0, goal_config=None, trading_days_per_year=252, allocations=None, n=1000, horizon=None, recommend_type='horizon', curr_inv=None, allocation_method=None):  # noqa: E501
        """GoalAccumulationAllocationRequest - a model defined in Swagger"""  # noqa: E501

        self._thresh_type = None
        self._goal_id = None
        self._client_id = None
        self._conf_tgt = None
        self._risk_score = None
        self._remove_outliers = None
        self._allocation_priority = None
        self._market_data_source = None
        self._compounding_rate = None
        self._adjust_for_compounding = None
        self._opt_config = None
        self._deposit_config = None
        self._use_proxy_data = None
        self._thresh = None
        self._horizon_frequency = None
        self._recommendation_config = None
        self._create_log = None
        self._withdrawal_tax = None
        self._goal_config = None
        self._trading_days_per_year = None
        self._allocations = None
        self._n = None
        self._horizon = None
        self._recommend_type = None
        self._curr_inv = None
        self._allocation_method = None
        self.discriminator = None

        if thresh_type is not None:
            self.thresh_type = thresh_type
        if goal_id is not None:
            self.goal_id = goal_id
        if client_id is not None:
            self.client_id = client_id
        if conf_tgt is not None:
            self.conf_tgt = conf_tgt
        if risk_score is not None:
            self.risk_score = risk_score
        if remove_outliers is not None:
            self.remove_outliers = remove_outliers
        self.allocation_priority = allocation_priority
        if market_data_source is not None:
            self.market_data_source = market_data_source
        if compounding_rate is not None:
            self.compounding_rate = compounding_rate
        if adjust_for_compounding is not None:
            self.adjust_for_compounding = adjust_for_compounding
        if opt_config is not None:
            self.opt_config = opt_config
        if deposit_config is not None:
            self.deposit_config = deposit_config
        if use_proxy_data is not None:
            self.use_proxy_data = use_proxy_data
        if thresh is not None:
            self.thresh = thresh
        if horizon_frequency is not None:
            self.horizon_frequency = horizon_frequency
        if recommendation_config is not None:
            self.recommendation_config = recommendation_config
        if create_log is not None:
            self.create_log = create_log
        if withdrawal_tax is not None:
            self.withdrawal_tax = withdrawal_tax
        if goal_config is not None:
            self.goal_config = goal_config
        if trading_days_per_year is not None:
            self.trading_days_per_year = trading_days_per_year
        if allocations is not None:
            self.allocations = allocations
        if n is not None:
            self.n = n
        if horizon is not None:
            self.horizon = horizon
        if recommend_type is not None:
            self.recommend_type = recommend_type
        if curr_inv is not None:
            self.curr_inv = curr_inv
        self.allocation_method = allocation_method

    @property
    def thresh_type(self):
        """Gets the thresh_type of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The thresh_type of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: str
        """
        return self._thresh_type

    @thresh_type.setter
    def thresh_type(self, thresh_type):
        """Sets the thresh_type of this GoalAccumulationAllocationRequest.


        :param thresh_type: The thresh_type of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: str
        """
        allowed_values = ["amnt", "perc"]  # noqa: E501
        if thresh_type not in allowed_values:
            raise ValueError(
                "Invalid value for `thresh_type` ({0}), must be one of {1}"  # noqa: E501
                .format(thresh_type, allowed_values)
            )

        self._thresh_type = thresh_type

    @property
    def goal_id(self):
        """Gets the goal_id of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The goal_id of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: str
        """
        return self._goal_id

    @goal_id.setter
    def goal_id(self, goal_id):
        """Sets the goal_id of this GoalAccumulationAllocationRequest.


        :param goal_id: The goal_id of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: str
        """

        self._goal_id = goal_id

    @property
    def client_id(self):
        """Gets the client_id of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The client_id of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this GoalAccumulationAllocationRequest.


        :param client_id: The client_id of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def conf_tgt(self):
        """Gets the conf_tgt of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The conf_tgt of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: float
        """
        return self._conf_tgt

    @conf_tgt.setter
    def conf_tgt(self, conf_tgt):
        """Sets the conf_tgt of this GoalAccumulationAllocationRequest.


        :param conf_tgt: The conf_tgt of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: float
        """
        if conf_tgt is not None and conf_tgt > 1:  # noqa: E501
            raise ValueError("Invalid value for `conf_tgt`, must be a value less than or equal to `1`")  # noqa: E501
        if conf_tgt is not None and conf_tgt < 0:  # noqa: E501
            raise ValueError("Invalid value for `conf_tgt`, must be a value greater than or equal to `0`")  # noqa: E501

        self._conf_tgt = conf_tgt

    @property
    def risk_score(self):
        """Gets the risk_score of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The risk_score of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: float
        """
        return self._risk_score

    @risk_score.setter
    def risk_score(self, risk_score):
        """Sets the risk_score of this GoalAccumulationAllocationRequest.


        :param risk_score: The risk_score of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: float
        """
        if risk_score is not None and risk_score > 100:  # noqa: E501
            raise ValueError("Invalid value for `risk_score`, must be a value less than or equal to `100`")  # noqa: E501
        if risk_score is not None and risk_score < 0:  # noqa: E501
            raise ValueError("Invalid value for `risk_score`, must be a value greater than or equal to `0`")  # noqa: E501

        self._risk_score = risk_score

    @property
    def remove_outliers(self):
        """Gets the remove_outliers of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The remove_outliers of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: bool
        """
        return self._remove_outliers

    @remove_outliers.setter
    def remove_outliers(self, remove_outliers):
        """Sets the remove_outliers of this GoalAccumulationAllocationRequest.


        :param remove_outliers: The remove_outliers of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: bool
        """

        self._remove_outliers = remove_outliers

    @property
    def allocation_priority(self):
        """Gets the allocation_priority of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The allocation_priority of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: str
        """
        return self._allocation_priority

    @allocation_priority.setter
    def allocation_priority(self, allocation_priority):
        """Sets the allocation_priority of this GoalAccumulationAllocationRequest.


        :param allocation_priority: The allocation_priority of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: str
        """
        if allocation_priority is None:
            raise ValueError("Invalid value for `allocation_priority`, must not be `None`")  # noqa: E501
        allowed_values = ["goal", "risk"]  # noqa: E501
        if allocation_priority not in allowed_values:
            raise ValueError(
                "Invalid value for `allocation_priority` ({0}), must be one of {1}"  # noqa: E501
                .format(allocation_priority, allowed_values)
            )

        self._allocation_priority = allocation_priority

    @property
    def market_data_source(self):
        """Gets the market_data_source of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The market_data_source of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: str
        """
        return self._market_data_source

    @market_data_source.setter
    def market_data_source(self, market_data_source):
        """Sets the market_data_source of this GoalAccumulationAllocationRequest.


        :param market_data_source: The market_data_source of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: str
        """
        allowed_values = ["nucleus", "integration"]  # noqa: E501
        if market_data_source not in allowed_values:
            raise ValueError(
                "Invalid value for `market_data_source` ({0}), must be one of {1}"  # noqa: E501
                .format(market_data_source, allowed_values)
            )

        self._market_data_source = market_data_source

    @property
    def compounding_rate(self):
        """Gets the compounding_rate of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The compounding_rate of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: float
        """
        return self._compounding_rate

    @compounding_rate.setter
    def compounding_rate(self, compounding_rate):
        """Sets the compounding_rate of this GoalAccumulationAllocationRequest.


        :param compounding_rate: The compounding_rate of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: float
        """
        if compounding_rate is not None and compounding_rate < -1:  # noqa: E501
            raise ValueError("Invalid value for `compounding_rate`, must be a value greater than or equal to `-1`")  # noqa: E501

        self._compounding_rate = compounding_rate

    @property
    def adjust_for_compounding(self):
        """Gets the adjust_for_compounding of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The adjust_for_compounding of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: bool
        """
        return self._adjust_for_compounding

    @adjust_for_compounding.setter
    def adjust_for_compounding(self, adjust_for_compounding):
        """Sets the adjust_for_compounding of this GoalAccumulationAllocationRequest.


        :param adjust_for_compounding: The adjust_for_compounding of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: bool
        """

        self._adjust_for_compounding = adjust_for_compounding

    @property
    def opt_config(self):
        """Gets the opt_config of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The opt_config of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: OptConfig
        """
        return self._opt_config

    @opt_config.setter
    def opt_config(self, opt_config):
        """Sets the opt_config of this GoalAccumulationAllocationRequest.


        :param opt_config: The opt_config of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: OptConfig
        """

        self._opt_config = opt_config

    @property
    def deposit_config(self):
        """Gets the deposit_config of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The deposit_config of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: list[AccumulationGoalDepositConfig]
        """
        return self._deposit_config

    @deposit_config.setter
    def deposit_config(self, deposit_config):
        """Sets the deposit_config of this GoalAccumulationAllocationRequest.


        :param deposit_config: The deposit_config of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: list[AccumulationGoalDepositConfig]
        """

        self._deposit_config = deposit_config

    @property
    def use_proxy_data(self):
        """Gets the use_proxy_data of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The use_proxy_data of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: bool
        """
        return self._use_proxy_data

    @use_proxy_data.setter
    def use_proxy_data(self, use_proxy_data):
        """Sets the use_proxy_data of this GoalAccumulationAllocationRequest.


        :param use_proxy_data: The use_proxy_data of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: bool
        """

        self._use_proxy_data = use_proxy_data

    @property
    def thresh(self):
        """Gets the thresh of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The thresh of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: float
        """
        return self._thresh

    @thresh.setter
    def thresh(self, thresh):
        """Sets the thresh of this GoalAccumulationAllocationRequest.


        :param thresh: The thresh of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: float
        """
        if thresh is not None and thresh < 0:  # noqa: E501
            raise ValueError("Invalid value for `thresh`, must be a value greater than or equal to `0`")  # noqa: E501

        self._thresh = thresh

    @property
    def horizon_frequency(self):
        """Gets the horizon_frequency of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The horizon_frequency of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: str
        """
        return self._horizon_frequency

    @horizon_frequency.setter
    def horizon_frequency(self, horizon_frequency):
        """Sets the horizon_frequency of this GoalAccumulationAllocationRequest.


        :param horizon_frequency: The horizon_frequency of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: str
        """
        allowed_values = ["year", "six_months", "quarter", "month", "two_weeks", "week", "day"]  # noqa: E501
        if horizon_frequency not in allowed_values:
            raise ValueError(
                "Invalid value for `horizon_frequency` ({0}), must be one of {1}"  # noqa: E501
                .format(horizon_frequency, allowed_values)
            )

        self._horizon_frequency = horizon_frequency

    @property
    def recommendation_config(self):
        """Gets the recommendation_config of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The recommendation_config of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: RecommendationConfig
        """
        return self._recommendation_config

    @recommendation_config.setter
    def recommendation_config(self, recommendation_config):
        """Sets the recommendation_config of this GoalAccumulationAllocationRequest.


        :param recommendation_config: The recommendation_config of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: RecommendationConfig
        """

        self._recommendation_config = recommendation_config

    @property
    def create_log(self):
        """Gets the create_log of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The create_log of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: bool
        """
        return self._create_log

    @create_log.setter
    def create_log(self, create_log):
        """Sets the create_log of this GoalAccumulationAllocationRequest.


        :param create_log: The create_log of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: bool
        """

        self._create_log = create_log

    @property
    def withdrawal_tax(self):
        """Gets the withdrawal_tax of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The withdrawal_tax of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: float
        """
        return self._withdrawal_tax

    @withdrawal_tax.setter
    def withdrawal_tax(self, withdrawal_tax):
        """Sets the withdrawal_tax of this GoalAccumulationAllocationRequest.


        :param withdrawal_tax: The withdrawal_tax of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: float
        """
        if withdrawal_tax is not None and withdrawal_tax > 1:  # noqa: E501
            raise ValueError("Invalid value for `withdrawal_tax`, must be a value less than or equal to `1`")  # noqa: E501
        if withdrawal_tax is not None and withdrawal_tax < 0:  # noqa: E501
            raise ValueError("Invalid value for `withdrawal_tax`, must be a value greater than or equal to `0`")  # noqa: E501

        self._withdrawal_tax = withdrawal_tax

    @property
    def goal_config(self):
        """Gets the goal_config of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The goal_config of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: GoalConfig
        """
        return self._goal_config

    @goal_config.setter
    def goal_config(self, goal_config):
        """Sets the goal_config of this GoalAccumulationAllocationRequest.


        :param goal_config: The goal_config of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: GoalConfig
        """

        self._goal_config = goal_config

    @property
    def trading_days_per_year(self):
        """Gets the trading_days_per_year of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The trading_days_per_year of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: int
        """
        return self._trading_days_per_year

    @trading_days_per_year.setter
    def trading_days_per_year(self, trading_days_per_year):
        """Sets the trading_days_per_year of this GoalAccumulationAllocationRequest.


        :param trading_days_per_year: The trading_days_per_year of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: int
        """
        if trading_days_per_year is not None and trading_days_per_year > 365:  # noqa: E501
            raise ValueError("Invalid value for `trading_days_per_year`, must be a value less than or equal to `365`")  # noqa: E501
        if trading_days_per_year is not None and trading_days_per_year < 1:  # noqa: E501
            raise ValueError("Invalid value for `trading_days_per_year`, must be a value greater than or equal to `1`")  # noqa: E501

        self._trading_days_per_year = trading_days_per_year

    @property
    def allocations(self):
        """Gets the allocations of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The allocations of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: list[str]
        """
        return self._allocations

    @allocations.setter
    def allocations(self, allocations):
        """Sets the allocations of this GoalAccumulationAllocationRequest.


        :param allocations: The allocations of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: list[str]
        """

        self._allocations = allocations

    @property
    def n(self):
        """Gets the n of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The n of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: int
        """
        return self._n

    @n.setter
    def n(self, n):
        """Sets the n of this GoalAccumulationAllocationRequest.


        :param n: The n of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: int
        """
        if n is not None and n > 10000:  # noqa: E501
            raise ValueError("Invalid value for `n`, must be a value less than or equal to `10000`")  # noqa: E501
        if n is not None and n < 1:  # noqa: E501
            raise ValueError("Invalid value for `n`, must be a value greater than or equal to `1`")  # noqa: E501

        self._n = n

    @property
    def horizon(self):
        """Gets the horizon of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The horizon of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: int
        """
        return self._horizon

    @horizon.setter
    def horizon(self, horizon):
        """Sets the horizon of this GoalAccumulationAllocationRequest.


        :param horizon: The horizon of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: int
        """
        if horizon is not None and horizon > 350:  # noqa: E501
            raise ValueError("Invalid value for `horizon`, must be a value less than or equal to `350`")  # noqa: E501
        if horizon is not None and horizon < 0:  # noqa: E501
            raise ValueError("Invalid value for `horizon`, must be a value greater than or equal to `0`")  # noqa: E501

        self._horizon = horizon

    @property
    def recommend_type(self):
        """Gets the recommend_type of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The recommend_type of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: str
        """
        return self._recommend_type

    @recommend_type.setter
    def recommend_type(self, recommend_type):
        """Sets the recommend_type of this GoalAccumulationAllocationRequest.


        :param recommend_type: The recommend_type of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: str
        """
        allowed_values = ["recurring", "one-time", "combo", "horizon"]  # noqa: E501
        if recommend_type not in allowed_values:
            raise ValueError(
                "Invalid value for `recommend_type` ({0}), must be one of {1}"  # noqa: E501
                .format(recommend_type, allowed_values)
            )

        self._recommend_type = recommend_type

    @property
    def curr_inv(self):
        """Gets the curr_inv of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The curr_inv of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: float
        """
        return self._curr_inv

    @curr_inv.setter
    def curr_inv(self, curr_inv):
        """Sets the curr_inv of this GoalAccumulationAllocationRequest.


        :param curr_inv: The curr_inv of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: float
        """
        if curr_inv is not None and curr_inv < 0:  # noqa: E501
            raise ValueError("Invalid value for `curr_inv`, must be a value greater than or equal to `0`")  # noqa: E501

        self._curr_inv = curr_inv

    @property
    def allocation_method(self):
        """Gets the allocation_method of this GoalAccumulationAllocationRequest.  # noqa: E501


        :return: The allocation_method of this GoalAccumulationAllocationRequest.  # noqa: E501
        :rtype: str
        """
        return self._allocation_method

    @allocation_method.setter
    def allocation_method(self, allocation_method):
        """Sets the allocation_method of this GoalAccumulationAllocationRequest.


        :param allocation_method: The allocation_method of this GoalAccumulationAllocationRequest.  # noqa: E501
        :type: str
        """
        if allocation_method is None:
            raise ValueError("Invalid value for `allocation_method`, must not be `None`")  # noqa: E501
        allowed_values = ["select", "create"]  # noqa: E501
        if allocation_method not in allowed_values:
            raise ValueError(
                "Invalid value for `allocation_method` ({0}), must be one of {1}"  # noqa: E501
                .format(allocation_method, allowed_values)
            )

        self._allocation_method = allocation_method

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
        if issubclass(GoalAccumulationAllocationRequest, dict):
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
        if not isinstance(other, GoalAccumulationAllocationRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
