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

from atom_api.models.client_hydro_payload import ClientHydroPayload  # noqa: F401,E501
from atom_api.models.secondary_id import SecondaryId  # noqa: F401,E501


class CreateClientHydroResponse(object):
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
        'client_id': 'str',
        'hydro_id': 'str',
        'is_hydro_id_verified': 'bool',
        'is_client_raindrop_linked': 'bool',
        'is_client_raindrop_enabled': 'bool',
        'metadata': 'object',
        'secondary_id': 'SecondaryId',
        'id': 'str',
        'create_date': 'str'
    }

    attribute_map = {
        'client_id': 'client_id',
        'hydro_id': 'hydro_id',
        'is_hydro_id_verified': 'is_hydro_id_verified',
        'is_client_raindrop_linked': 'is_client_raindrop_linked',
        'is_client_raindrop_enabled': 'is_client_raindrop_enabled',
        'metadata': 'metadata',
        'secondary_id': 'secondary_id',
        'id': 'id',
        'create_date': 'create_date'
    }

    def __init__(self, client_id=None, hydro_id=None, is_hydro_id_verified=False, is_client_raindrop_linked=False, is_client_raindrop_enabled=False, metadata=None, secondary_id=None, id=None, create_date=None):  # noqa: E501
        """CreateClientHydroResponse - a model defined in Swagger"""  # noqa: E501

        self._client_id = None
        self._hydro_id = None
        self._is_hydro_id_verified = None
        self._is_client_raindrop_linked = None
        self._is_client_raindrop_enabled = None
        self._metadata = None
        self._secondary_id = None
        self._id = None
        self._create_date = None
        self.discriminator = None

        self.client_id = client_id
        self.hydro_id = hydro_id
        if is_hydro_id_verified is not None:
            self.is_hydro_id_verified = is_hydro_id_verified
        if is_client_raindrop_linked is not None:
            self.is_client_raindrop_linked = is_client_raindrop_linked
        if is_client_raindrop_enabled is not None:
            self.is_client_raindrop_enabled = is_client_raindrop_enabled
        if metadata is not None:
            self.metadata = metadata
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if id is not None:
            self.id = id
        if create_date is not None:
            self.create_date = create_date

    @property
    def client_id(self):
        """Gets the client_id of this CreateClientHydroResponse.  # noqa: E501

        The ID of the client to whom the Hydro ID belongs  # noqa: E501

        :return: The client_id of this CreateClientHydroResponse.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this CreateClientHydroResponse.

        The ID of the client to whom the Hydro ID belongs  # noqa: E501

        :param client_id: The client_id of this CreateClientHydroResponse.  # noqa: E501
        :type: str
        """
        if client_id is None:
            raise ValueError("Invalid value for `client_id`, must not be `None`")  # noqa: E501

        self._client_id = client_id

    @property
    def hydro_id(self):
        """Gets the hydro_id of this CreateClientHydroResponse.  # noqa: E501

        The hydro ID for the client. Also found under the client object  # noqa: E501

        :return: The hydro_id of this CreateClientHydroResponse.  # noqa: E501
        :rtype: str
        """
        return self._hydro_id

    @hydro_id.setter
    def hydro_id(self, hydro_id):
        """Sets the hydro_id of this CreateClientHydroResponse.

        The hydro ID for the client. Also found under the client object  # noqa: E501

        :param hydro_id: The hydro_id of this CreateClientHydroResponse.  # noqa: E501
        :type: str
        """
        if hydro_id is None:
            raise ValueError("Invalid value for `hydro_id`, must not be `None`")  # noqa: E501

        self._hydro_id = hydro_id

    @property
    def is_hydro_id_verified(self):
        """Gets the is_hydro_id_verified of this CreateClientHydroResponse.  # noqa: E501

        Indicator if the client has verified ownership of the Hydro ID provided. Defaults to false which means ownership has not been verified  # noqa: E501

        :return: The is_hydro_id_verified of this CreateClientHydroResponse.  # noqa: E501
        :rtype: bool
        """
        return self._is_hydro_id_verified

    @is_hydro_id_verified.setter
    def is_hydro_id_verified(self, is_hydro_id_verified):
        """Sets the is_hydro_id_verified of this CreateClientHydroResponse.

        Indicator if the client has verified ownership of the Hydro ID provided. Defaults to false which means ownership has not been verified  # noqa: E501

        :param is_hydro_id_verified: The is_hydro_id_verified of this CreateClientHydroResponse.  # noqa: E501
        :type: bool
        """

        self._is_hydro_id_verified = is_hydro_id_verified

    @property
    def is_client_raindrop_linked(self):
        """Gets the is_client_raindrop_linked of this CreateClientHydroResponse.  # noqa: E501

        Indicator for whether or not the client has successfully linked their Hydro ID to your Client-side Raindrop application. Defaults to false which indicates it has not been linked  # noqa: E501

        :return: The is_client_raindrop_linked of this CreateClientHydroResponse.  # noqa: E501
        :rtype: bool
        """
        return self._is_client_raindrop_linked

    @is_client_raindrop_linked.setter
    def is_client_raindrop_linked(self, is_client_raindrop_linked):
        """Sets the is_client_raindrop_linked of this CreateClientHydroResponse.

        Indicator for whether or not the client has successfully linked their Hydro ID to your Client-side Raindrop application. Defaults to false which indicates it has not been linked  # noqa: E501

        :param is_client_raindrop_linked: The is_client_raindrop_linked of this CreateClientHydroResponse.  # noqa: E501
        :type: bool
        """

        self._is_client_raindrop_linked = is_client_raindrop_linked

    @property
    def is_client_raindrop_enabled(self):
        """Gets the is_client_raindrop_enabled of this CreateClientHydroResponse.  # noqa: E501

        Indicator for whether or not the client has chosen to enable the Hydro Client-side Raindrop service on your application. Defaults to false which indicates the service is not enabled  # noqa: E501

        :return: The is_client_raindrop_enabled of this CreateClientHydroResponse.  # noqa: E501
        :rtype: bool
        """
        return self._is_client_raindrop_enabled

    @is_client_raindrop_enabled.setter
    def is_client_raindrop_enabled(self, is_client_raindrop_enabled):
        """Sets the is_client_raindrop_enabled of this CreateClientHydroResponse.

        Indicator for whether or not the client has chosen to enable the Hydro Client-side Raindrop service on your application. Defaults to false which indicates the service is not enabled  # noqa: E501

        :param is_client_raindrop_enabled: The is_client_raindrop_enabled of this CreateClientHydroResponse.  # noqa: E501
        :type: bool
        """

        self._is_client_raindrop_enabled = is_client_raindrop_enabled

    @property
    def metadata(self):
        """Gets the metadata of this CreateClientHydroResponse.  # noqa: E501

        Custom information associated with the client-hydro relationship in the format key:value  # noqa: E501

        :return: The metadata of this CreateClientHydroResponse.  # noqa: E501
        :rtype: object
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this CreateClientHydroResponse.

        Custom information associated with the client-hydro relationship in the format key:value  # noqa: E501

        :param metadata: The metadata of this CreateClientHydroResponse.  # noqa: E501
        :type: object
        """

        self._metadata = metadata

    @property
    def secondary_id(self):
        """Gets the secondary_id of this CreateClientHydroResponse.  # noqa: E501


        :return: The secondary_id of this CreateClientHydroResponse.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this CreateClientHydroResponse.


        :param secondary_id: The secondary_id of this CreateClientHydroResponse.  # noqa: E501
        :type: SecondaryId
        """

        self._secondary_id = secondary_id

    @property
    def id(self):
        """Gets the id of this CreateClientHydroResponse.  # noqa: E501

        ID of the client-hydro relationship  # noqa: E501

        :return: The id of this CreateClientHydroResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this CreateClientHydroResponse.

        ID of the client-hydro relationship  # noqa: E501

        :param id: The id of this CreateClientHydroResponse.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def create_date(self):
        """Gets the create_date of this CreateClientHydroResponse.  # noqa: E501

        Datetime when the client-hydro relationship was created  # noqa: E501

        :return: The create_date of this CreateClientHydroResponse.  # noqa: E501
        :rtype: str
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this CreateClientHydroResponse.

        Datetime when the client-hydro relationship was created  # noqa: E501

        :param create_date: The create_date of this CreateClientHydroResponse.  # noqa: E501
        :type: str
        """

        self._create_date = create_date

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
        if issubclass(CreateClientHydroResponse, dict):
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
        if not isinstance(other, CreateClientHydroResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
