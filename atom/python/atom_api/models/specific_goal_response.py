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

from atom_api.models.create_goal_response import CreateGoalResponse  # noqa: F401,E501
from atom_api.models.secondary_id import SecondaryId  # noqa: F401,E501


class SpecificGoalResponse(object):
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
        'parent_goal_id': 'str',
        'questionnaire_id': 'str',
        'is_decumulation': 'bool',
        'type': 'str',
        'category': 'str',
        'client_id': 'str',
        'goal_amount': 'float',
        'accumulation_horizon': 'float',
        'decumulation_horizon': 'float',
        'is_active': 'bool',
        'metadata': 'object',
        'secondary_id': 'SecondaryId',
        'update_date': 'str'
    }

    attribute_map = {
        'id': 'id',
        'create_date': 'create_date',
        'name': 'name',
        'parent_goal_id': 'parent_goal_id',
        'questionnaire_id': 'questionnaire_id',
        'is_decumulation': 'is_decumulation',
        'type': 'type',
        'category': 'category',
        'client_id': 'client_id',
        'goal_amount': 'goal_amount',
        'accumulation_horizon': 'accumulation_horizon',
        'decumulation_horizon': 'decumulation_horizon',
        'is_active': 'is_active',
        'metadata': 'metadata',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, id=None, create_date=None, name=None, parent_goal_id=None, questionnaire_id=None, is_decumulation=False, type=None, category=None, client_id=None, goal_amount=None, accumulation_horizon=None, decumulation_horizon=None, is_active=True, metadata=None, secondary_id=None, update_date=None):  # noqa: E501
        """SpecificGoalResponse - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._create_date = None
        self._name = None
        self._parent_goal_id = None
        self._questionnaire_id = None
        self._is_decumulation = None
        self._type = None
        self._category = None
        self._client_id = None
        self._goal_amount = None
        self._accumulation_horizon = None
        self._decumulation_horizon = None
        self._is_active = None
        self._metadata = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if create_date is not None:
            self.create_date = create_date
        self.name = name
        if parent_goal_id is not None:
            self.parent_goal_id = parent_goal_id
        if questionnaire_id is not None:
            self.questionnaire_id = questionnaire_id
        if is_decumulation is not None:
            self.is_decumulation = is_decumulation
        if type is not None:
            self.type = type
        if category is not None:
            self.category = category
        if client_id is not None:
            self.client_id = client_id
        if goal_amount is not None:
            self.goal_amount = goal_amount
        if accumulation_horizon is not None:
            self.accumulation_horizon = accumulation_horizon
        if decumulation_horizon is not None:
            self.decumulation_horizon = decumulation_horizon
        if is_active is not None:
            self.is_active = is_active
        if metadata is not None:
            self.metadata = metadata
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def id(self):
        """Gets the id of this SpecificGoalResponse.  # noqa: E501

        ID of the goal  # noqa: E501

        :return: The id of this SpecificGoalResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SpecificGoalResponse.

        ID of the goal  # noqa: E501

        :param id: The id of this SpecificGoalResponse.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def create_date(self):
        """Gets the create_date of this SpecificGoalResponse.  # noqa: E501

        Datetime the goal was created  # noqa: E501

        :return: The create_date of this SpecificGoalResponse.  # noqa: E501
        :rtype: str
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this SpecificGoalResponse.

        Datetime the goal was created  # noqa: E501

        :param create_date: The create_date of this SpecificGoalResponse.  # noqa: E501
        :type: str
        """

        self._create_date = create_date

    @property
    def name(self):
        """Gets the name of this SpecificGoalResponse.  # noqa: E501

        Name of the goal  # noqa: E501

        :return: The name of this SpecificGoalResponse.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this SpecificGoalResponse.

        Name of the goal  # noqa: E501

        :param name: The name of this SpecificGoalResponse.  # noqa: E501
        :type: str
        """
        if name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def parent_goal_id(self):
        """Gets the parent_goal_id of this SpecificGoalResponse.  # noqa: E501

        In the case that a goal is related to a broader goal, the ID of the broader goal  # noqa: E501

        :return: The parent_goal_id of this SpecificGoalResponse.  # noqa: E501
        :rtype: str
        """
        return self._parent_goal_id

    @parent_goal_id.setter
    def parent_goal_id(self, parent_goal_id):
        """Sets the parent_goal_id of this SpecificGoalResponse.

        In the case that a goal is related to a broader goal, the ID of the broader goal  # noqa: E501

        :param parent_goal_id: The parent_goal_id of this SpecificGoalResponse.  # noqa: E501
        :type: str
        """

        self._parent_goal_id = parent_goal_id

    @property
    def questionnaire_id(self):
        """Gets the questionnaire_id of this SpecificGoalResponse.  # noqa: E501

        The ID of the group of questions that are used to customize a goal for a client  # noqa: E501

        :return: The questionnaire_id of this SpecificGoalResponse.  # noqa: E501
        :rtype: str
        """
        return self._questionnaire_id

    @questionnaire_id.setter
    def questionnaire_id(self, questionnaire_id):
        """Sets the questionnaire_id of this SpecificGoalResponse.

        The ID of the group of questions that are used to customize a goal for a client  # noqa: E501

        :param questionnaire_id: The questionnaire_id of this SpecificGoalResponse.  # noqa: E501
        :type: str
        """

        self._questionnaire_id = questionnaire_id

    @property
    def is_decumulation(self):
        """Gets the is_decumulation of this SpecificGoalResponse.  # noqa: E501

        Indicator if the goal is a decumulation goal such as saving for retirement. Default is false, indicating that the goal is an accumulation goal. May be used in conjunction with the Proton API  # noqa: E501

        :return: The is_decumulation of this SpecificGoalResponse.  # noqa: E501
        :rtype: bool
        """
        return self._is_decumulation

    @is_decumulation.setter
    def is_decumulation(self, is_decumulation):
        """Sets the is_decumulation of this SpecificGoalResponse.

        Indicator if the goal is a decumulation goal such as saving for retirement. Default is false, indicating that the goal is an accumulation goal. May be used in conjunction with the Proton API  # noqa: E501

        :param is_decumulation: The is_decumulation of this SpecificGoalResponse.  # noqa: E501
        :type: bool
        """

        self._is_decumulation = is_decumulation

    @property
    def type(self):
        """Gets the type of this SpecificGoalResponse.  # noqa: E501

        Type of goal used to identify similar goals. Can be used to differentiate between goal templates and client-specific goals  # noqa: E501

        :return: The type of this SpecificGoalResponse.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this SpecificGoalResponse.

        Type of goal used to identify similar goals. Can be used to differentiate between goal templates and client-specific goals  # noqa: E501

        :param type: The type of this SpecificGoalResponse.  # noqa: E501
        :type: str
        """

        self._type = type

    @property
    def category(self):
        """Gets the category of this SpecificGoalResponse.  # noqa: E501

        Category of the goal used to group goals together. For example, different large purchase goals could have a type of ‘Major Purchase’  # noqa: E501

        :return: The category of this SpecificGoalResponse.  # noqa: E501
        :rtype: str
        """
        return self._category

    @category.setter
    def category(self, category):
        """Sets the category of this SpecificGoalResponse.

        Category of the goal used to group goals together. For example, different large purchase goals could have a type of ‘Major Purchase’  # noqa: E501

        :param category: The category of this SpecificGoalResponse.  # noqa: E501
        :type: str
        """

        self._category = category

    @property
    def client_id(self):
        """Gets the client_id of this SpecificGoalResponse.  # noqa: E501

        If the goal is client-specific (not used by any other client), the ID of the client to which it belongs  # noqa: E501

        :return: The client_id of this SpecificGoalResponse.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this SpecificGoalResponse.

        If the goal is client-specific (not used by any other client), the ID of the client to which it belongs  # noqa: E501

        :param client_id: The client_id of this SpecificGoalResponse.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def goal_amount(self):
        """Gets the goal_amount of this SpecificGoalResponse.  # noqa: E501

        If the goal is client-specific, the target monetary amount to be reached within the goal horizon. May be used in conjunction with the Proton API. If the goal is not client-specific, please store under the account entity  # noqa: E501

        :return: The goal_amount of this SpecificGoalResponse.  # noqa: E501
        :rtype: float
        """
        return self._goal_amount

    @goal_amount.setter
    def goal_amount(self, goal_amount):
        """Sets the goal_amount of this SpecificGoalResponse.

        If the goal is client-specific, the target monetary amount to be reached within the goal horizon. May be used in conjunction with the Proton API. If the goal is not client-specific, please store under the account entity  # noqa: E501

        :param goal_amount: The goal_amount of this SpecificGoalResponse.  # noqa: E501
        :type: float
        """

        self._goal_amount = goal_amount

    @property
    def accumulation_horizon(self):
        """Gets the accumulation_horizon of this SpecificGoalResponse.  # noqa: E501

        If the goal is client-specific, the time horizon of the goal during the accumulation phase, in years. May be used in conjunction with the Proton API. If the goal is not client-specific, please store under the account entity  # noqa: E501

        :return: The accumulation_horizon of this SpecificGoalResponse.  # noqa: E501
        :rtype: float
        """
        return self._accumulation_horizon

    @accumulation_horizon.setter
    def accumulation_horizon(self, accumulation_horizon):
        """Sets the accumulation_horizon of this SpecificGoalResponse.

        If the goal is client-specific, the time horizon of the goal during the accumulation phase, in years. May be used in conjunction with the Proton API. If the goal is not client-specific, please store under the account entity  # noqa: E501

        :param accumulation_horizon: The accumulation_horizon of this SpecificGoalResponse.  # noqa: E501
        :type: float
        """

        self._accumulation_horizon = accumulation_horizon

    @property
    def decumulation_horizon(self):
        """Gets the decumulation_horizon of this SpecificGoalResponse.  # noqa: E501

        If the goal is client-specific, the time horizon of the goal during the decumulation phase, in years. If the goal is an accumulation goal, then this can be 0 or omitted entirely. May be used in conjunction with the Proton API. If the goal is not client-specific, please store under the account entity  # noqa: E501

        :return: The decumulation_horizon of this SpecificGoalResponse.  # noqa: E501
        :rtype: float
        """
        return self._decumulation_horizon

    @decumulation_horizon.setter
    def decumulation_horizon(self, decumulation_horizon):
        """Sets the decumulation_horizon of this SpecificGoalResponse.

        If the goal is client-specific, the time horizon of the goal during the decumulation phase, in years. If the goal is an accumulation goal, then this can be 0 or omitted entirely. May be used in conjunction with the Proton API. If the goal is not client-specific, please store under the account entity  # noqa: E501

        :param decumulation_horizon: The decumulation_horizon of this SpecificGoalResponse.  # noqa: E501
        :type: float
        """

        self._decumulation_horizon = decumulation_horizon

    @property
    def is_active(self):
        """Gets the is_active of this SpecificGoalResponse.  # noqa: E501

        Indicates if the goal is active. Defaults to true which indicates it is active  # noqa: E501

        :return: The is_active of this SpecificGoalResponse.  # noqa: E501
        :rtype: bool
        """
        return self._is_active

    @is_active.setter
    def is_active(self, is_active):
        """Sets the is_active of this SpecificGoalResponse.

        Indicates if the goal is active. Defaults to true which indicates it is active  # noqa: E501

        :param is_active: The is_active of this SpecificGoalResponse.  # noqa: E501
        :type: bool
        """

        self._is_active = is_active

    @property
    def metadata(self):
        """Gets the metadata of this SpecificGoalResponse.  # noqa: E501

        Custom information associated with the goal in the format key:value  # noqa: E501

        :return: The metadata of this SpecificGoalResponse.  # noqa: E501
        :rtype: object
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this SpecificGoalResponse.

        Custom information associated with the goal in the format key:value  # noqa: E501

        :param metadata: The metadata of this SpecificGoalResponse.  # noqa: E501
        :type: object
        """

        self._metadata = metadata

    @property
    def secondary_id(self):
        """Gets the secondary_id of this SpecificGoalResponse.  # noqa: E501


        :return: The secondary_id of this SpecificGoalResponse.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this SpecificGoalResponse.


        :param secondary_id: The secondary_id of this SpecificGoalResponse.  # noqa: E501
        :type: SecondaryId
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this SpecificGoalResponse.  # noqa: E501

        Datetime the goal was last updated  # noqa: E501

        :return: The update_date of this SpecificGoalResponse.  # noqa: E501
        :rtype: str
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this SpecificGoalResponse.

        Datetime the goal was last updated  # noqa: E501

        :param update_date: The update_date of this SpecificGoalResponse.  # noqa: E501
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
        if issubclass(SpecificGoalResponse, dict):
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
        if not isinstance(other, SpecificGoalResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
