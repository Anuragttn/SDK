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


class Feature(object):
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
        'application_id': 'str',
        'category': 'str',
        'create_date': 'datetime',
        'feature_name': 'str',
        'id': 'str',
        'is_active': 'bool',
        'metadata': 'dict(str, str)',
        'page_name': 'str',
        'secondary_id': 'str',
        'subcategory': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'application_id': 'application_id',
        'category': 'category',
        'create_date': 'create_date',
        'feature_name': 'feature_name',
        'id': 'id',
        'is_active': 'is_active',
        'metadata': 'metadata',
        'page_name': 'page_name',
        'secondary_id': 'secondary_id',
        'subcategory': 'subcategory',
        'update_date': 'update_date'
    }

    def __init__(self, application_id=None, category=None, create_date=None, feature_name=None, id=None, is_active=None, metadata=None, page_name=None, secondary_id=None, subcategory=None, update_date=None, _configuration=None):  # noqa: E501
        """Feature - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._application_id = None
        self._category = None
        self._create_date = None
        self._feature_name = None
        self._id = None
        self._is_active = None
        self._metadata = None
        self._page_name = None
        self._secondary_id = None
        self._subcategory = None
        self._update_date = None
        self.discriminator = None

        if application_id is not None:
            self.application_id = application_id
        if category is not None:
            self.category = category
        if create_date is not None:
            self.create_date = create_date
        self.feature_name = feature_name
        if id is not None:
            self.id = id
        if is_active is not None:
            self.is_active = is_active
        if metadata is not None:
            self.metadata = metadata
        if page_name is not None:
            self.page_name = page_name
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if subcategory is not None:
            self.subcategory = subcategory
        if update_date is not None:
            self.update_date = update_date

    @property
    def application_id(self):
        """Gets the application_id of this Feature.  # noqa: E501

        application_id  # noqa: E501

        :return: The application_id of this Feature.  # noqa: E501
        :rtype: str
        """
        return self._application_id

    @application_id.setter
    def application_id(self, application_id):
        """Sets the application_id of this Feature.

        application_id  # noqa: E501

        :param application_id: The application_id of this Feature.  # noqa: E501
        :type: str
        """

        self._application_id = application_id

    @property
    def category(self):
        """Gets the category of this Feature.  # noqa: E501

        category  # noqa: E501

        :return: The category of this Feature.  # noqa: E501
        :rtype: str
        """
        return self._category

    @category.setter
    def category(self, category):
        """Sets the category of this Feature.

        category  # noqa: E501

        :param category: The category of this Feature.  # noqa: E501
        :type: str
        """

        self._category = category

    @property
    def create_date(self):
        """Gets the create_date of this Feature.  # noqa: E501


        :return: The create_date of this Feature.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this Feature.


        :param create_date: The create_date of this Feature.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def feature_name(self):
        """Gets the feature_name of this Feature.  # noqa: E501

        feature_name  # noqa: E501

        :return: The feature_name of this Feature.  # noqa: E501
        :rtype: str
        """
        return self._feature_name

    @feature_name.setter
    def feature_name(self, feature_name):
        """Sets the feature_name of this Feature.

        feature_name  # noqa: E501

        :param feature_name: The feature_name of this Feature.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and feature_name is None:
            raise ValueError("Invalid value for `feature_name`, must not be `None`")  # noqa: E501

        self._feature_name = feature_name

    @property
    def id(self):
        """Gets the id of this Feature.  # noqa: E501


        :return: The id of this Feature.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Feature.


        :param id: The id of this Feature.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def is_active(self):
        """Gets the is_active of this Feature.  # noqa: E501

        is_active  # noqa: E501

        :return: The is_active of this Feature.  # noqa: E501
        :rtype: bool
        """
        return self._is_active

    @is_active.setter
    def is_active(self, is_active):
        """Sets the is_active of this Feature.

        is_active  # noqa: E501

        :param is_active: The is_active of this Feature.  # noqa: E501
        :type: bool
        """

        self._is_active = is_active

    @property
    def metadata(self):
        """Gets the metadata of this Feature.  # noqa: E501

        metadata  # noqa: E501

        :return: The metadata of this Feature.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this Feature.

        metadata  # noqa: E501

        :param metadata: The metadata of this Feature.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def page_name(self):
        """Gets the page_name of this Feature.  # noqa: E501

        page_name  # noqa: E501

        :return: The page_name of this Feature.  # noqa: E501
        :rtype: str
        """
        return self._page_name

    @page_name.setter
    def page_name(self, page_name):
        """Sets the page_name of this Feature.

        page_name  # noqa: E501

        :param page_name: The page_name of this Feature.  # noqa: E501
        :type: str
        """

        self._page_name = page_name

    @property
    def secondary_id(self):
        """Gets the secondary_id of this Feature.  # noqa: E501


        :return: The secondary_id of this Feature.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this Feature.


        :param secondary_id: The secondary_id of this Feature.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def subcategory(self):
        """Gets the subcategory of this Feature.  # noqa: E501

        subcategory  # noqa: E501

        :return: The subcategory of this Feature.  # noqa: E501
        :rtype: str
        """
        return self._subcategory

    @subcategory.setter
    def subcategory(self, subcategory):
        """Sets the subcategory of this Feature.

        subcategory  # noqa: E501

        :param subcategory: The subcategory of this Feature.  # noqa: E501
        :type: str
        """

        self._subcategory = subcategory

    @property
    def update_date(self):
        """Gets the update_date of this Feature.  # noqa: E501


        :return: The update_date of this Feature.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this Feature.


        :param update_date: The update_date of this Feature.  # noqa: E501
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
        if issubclass(Feature, dict):
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
        if not isinstance(other, Feature):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Feature):
            return True

        return self.to_dict() != other.to_dict()
