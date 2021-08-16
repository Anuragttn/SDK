# coding: utf-8

"""
    Hydrogen Integration API

    The Hydrogen Integration API  # noqa: E501

    OpenAPI spec version: 1.3.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from integration_api.configuration import Configuration


class Email(object):
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
        'click': 'list[EmailClick]',
        'create_date': 'datetime',
        'delivery_status': 'str',
        'delivery_status_timestamp': 'datetime',
        'email_id': 'str',
        '_from': 'str',
        'id': 'str',
        'nucleus_business_id': 'str',
        'nucleus_client_id': 'str',
        'open': 'list[EmailOpen]',
        'reason': 'str',
        'secondary_id': 'str',
        'spam': 'bool',
        'subject': 'str',
        'to': 'str',
        'unsubscribe': 'bool',
        'update_date': 'datetime',
        'vendor_id': 'str',
        'vendor_name': 'str'
    }

    attribute_map = {
        'click': 'click',
        'create_date': 'create_date',
        'delivery_status': 'delivery_status',
        'delivery_status_timestamp': 'delivery_status_timestamp',
        'email_id': 'email_id',
        '_from': 'from',
        'id': 'id',
        'nucleus_business_id': 'nucleus_business_id',
        'nucleus_client_id': 'nucleus_client_id',
        'open': 'open',
        'reason': 'reason',
        'secondary_id': 'secondary_id',
        'spam': 'spam',
        'subject': 'subject',
        'to': 'to',
        'unsubscribe': 'unsubscribe',
        'update_date': 'update_date',
        'vendor_id': 'vendor_id',
        'vendor_name': 'vendor_name'
    }

    def __init__(self, click=None, create_date=None, delivery_status=None, delivery_status_timestamp=None, email_id=None, _from=None, id=None, nucleus_business_id=None, nucleus_client_id=None, open=None, reason=None, secondary_id=None, spam=None, subject=None, to=None, unsubscribe=None, update_date=None, vendor_id=None, vendor_name=None, _configuration=None):  # noqa: E501
        """Email - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._click = None
        self._create_date = None
        self._delivery_status = None
        self._delivery_status_timestamp = None
        self._email_id = None
        self.__from = None
        self._id = None
        self._nucleus_business_id = None
        self._nucleus_client_id = None
        self._open = None
        self._reason = None
        self._secondary_id = None
        self._spam = None
        self._subject = None
        self._to = None
        self._unsubscribe = None
        self._update_date = None
        self._vendor_id = None
        self._vendor_name = None
        self.discriminator = None

        if click is not None:
            self.click = click
        if create_date is not None:
            self.create_date = create_date
        if delivery_status is not None:
            self.delivery_status = delivery_status
        if delivery_status_timestamp is not None:
            self.delivery_status_timestamp = delivery_status_timestamp
        if email_id is not None:
            self.email_id = email_id
        if _from is not None:
            self._from = _from
        if id is not None:
            self.id = id
        if nucleus_business_id is not None:
            self.nucleus_business_id = nucleus_business_id
        if nucleus_client_id is not None:
            self.nucleus_client_id = nucleus_client_id
        if open is not None:
            self.open = open
        if reason is not None:
            self.reason = reason
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if spam is not None:
            self.spam = spam
        if subject is not None:
            self.subject = subject
        if to is not None:
            self.to = to
        if unsubscribe is not None:
            self.unsubscribe = unsubscribe
        if update_date is not None:
            self.update_date = update_date
        if vendor_id is not None:
            self.vendor_id = vendor_id
        if vendor_name is not None:
            self.vendor_name = vendor_name

    @property
    def click(self):
        """Gets the click of this Email.  # noqa: E501


        :return: The click of this Email.  # noqa: E501
        :rtype: list[EmailClick]
        """
        return self._click

    @click.setter
    def click(self, click):
        """Sets the click of this Email.


        :param click: The click of this Email.  # noqa: E501
        :type: list[EmailClick]
        """

        self._click = click

    @property
    def create_date(self):
        """Gets the create_date of this Email.  # noqa: E501


        :return: The create_date of this Email.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this Email.


        :param create_date: The create_date of this Email.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def delivery_status(self):
        """Gets the delivery_status of this Email.  # noqa: E501

        deliveryStatus  # noqa: E501

        :return: The delivery_status of this Email.  # noqa: E501
        :rtype: str
        """
        return self._delivery_status

    @delivery_status.setter
    def delivery_status(self, delivery_status):
        """Sets the delivery_status of this Email.

        deliveryStatus  # noqa: E501

        :param delivery_status: The delivery_status of this Email.  # noqa: E501
        :type: str
        """

        self._delivery_status = delivery_status

    @property
    def delivery_status_timestamp(self):
        """Gets the delivery_status_timestamp of this Email.  # noqa: E501

        deliveryStatusTimestamp  # noqa: E501

        :return: The delivery_status_timestamp of this Email.  # noqa: E501
        :rtype: datetime
        """
        return self._delivery_status_timestamp

    @delivery_status_timestamp.setter
    def delivery_status_timestamp(self, delivery_status_timestamp):
        """Sets the delivery_status_timestamp of this Email.

        deliveryStatusTimestamp  # noqa: E501

        :param delivery_status_timestamp: The delivery_status_timestamp of this Email.  # noqa: E501
        :type: datetime
        """

        self._delivery_status_timestamp = delivery_status_timestamp

    @property
    def email_id(self):
        """Gets the email_id of this Email.  # noqa: E501


        :return: The email_id of this Email.  # noqa: E501
        :rtype: str
        """
        return self._email_id

    @email_id.setter
    def email_id(self, email_id):
        """Sets the email_id of this Email.


        :param email_id: The email_id of this Email.  # noqa: E501
        :type: str
        """

        self._email_id = email_id

    @property
    def _from(self):
        """Gets the _from of this Email.  # noqa: E501

        from  # noqa: E501

        :return: The _from of this Email.  # noqa: E501
        :rtype: str
        """
        return self.__from

    @_from.setter
    def _from(self, _from):
        """Sets the _from of this Email.

        from  # noqa: E501

        :param _from: The _from of this Email.  # noqa: E501
        :type: str
        """

        self.__from = _from

    @property
    def id(self):
        """Gets the id of this Email.  # noqa: E501


        :return: The id of this Email.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Email.


        :param id: The id of this Email.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def nucleus_business_id(self):
        """Gets the nucleus_business_id of this Email.  # noqa: E501

        nucleusBusinessId  # noqa: E501

        :return: The nucleus_business_id of this Email.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_business_id

    @nucleus_business_id.setter
    def nucleus_business_id(self, nucleus_business_id):
        """Sets the nucleus_business_id of this Email.

        nucleusBusinessId  # noqa: E501

        :param nucleus_business_id: The nucleus_business_id of this Email.  # noqa: E501
        :type: str
        """

        self._nucleus_business_id = nucleus_business_id

    @property
    def nucleus_client_id(self):
        """Gets the nucleus_client_id of this Email.  # noqa: E501

        nucleusClientId  # noqa: E501

        :return: The nucleus_client_id of this Email.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_client_id

    @nucleus_client_id.setter
    def nucleus_client_id(self, nucleus_client_id):
        """Sets the nucleus_client_id of this Email.

        nucleusClientId  # noqa: E501

        :param nucleus_client_id: The nucleus_client_id of this Email.  # noqa: E501
        :type: str
        """

        self._nucleus_client_id = nucleus_client_id

    @property
    def open(self):
        """Gets the open of this Email.  # noqa: E501


        :return: The open of this Email.  # noqa: E501
        :rtype: list[EmailOpen]
        """
        return self._open

    @open.setter
    def open(self, open):
        """Sets the open of this Email.


        :param open: The open of this Email.  # noqa: E501
        :type: list[EmailOpen]
        """

        self._open = open

    @property
    def reason(self):
        """Gets the reason of this Email.  # noqa: E501

        reason  # noqa: E501

        :return: The reason of this Email.  # noqa: E501
        :rtype: str
        """
        return self._reason

    @reason.setter
    def reason(self, reason):
        """Sets the reason of this Email.

        reason  # noqa: E501

        :param reason: The reason of this Email.  # noqa: E501
        :type: str
        """

        self._reason = reason

    @property
    def secondary_id(self):
        """Gets the secondary_id of this Email.  # noqa: E501


        :return: The secondary_id of this Email.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this Email.


        :param secondary_id: The secondary_id of this Email.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def spam(self):
        """Gets the spam of this Email.  # noqa: E501

        spam  # noqa: E501

        :return: The spam of this Email.  # noqa: E501
        :rtype: bool
        """
        return self._spam

    @spam.setter
    def spam(self, spam):
        """Sets the spam of this Email.

        spam  # noqa: E501

        :param spam: The spam of this Email.  # noqa: E501
        :type: bool
        """

        self._spam = spam

    @property
    def subject(self):
        """Gets the subject of this Email.  # noqa: E501

        subject  # noqa: E501

        :return: The subject of this Email.  # noqa: E501
        :rtype: str
        """
        return self._subject

    @subject.setter
    def subject(self, subject):
        """Sets the subject of this Email.

        subject  # noqa: E501

        :param subject: The subject of this Email.  # noqa: E501
        :type: str
        """

        self._subject = subject

    @property
    def to(self):
        """Gets the to of this Email.  # noqa: E501

        to  # noqa: E501

        :return: The to of this Email.  # noqa: E501
        :rtype: str
        """
        return self._to

    @to.setter
    def to(self, to):
        """Sets the to of this Email.

        to  # noqa: E501

        :param to: The to of this Email.  # noqa: E501
        :type: str
        """

        self._to = to

    @property
    def unsubscribe(self):
        """Gets the unsubscribe of this Email.  # noqa: E501

        unsubscribe  # noqa: E501

        :return: The unsubscribe of this Email.  # noqa: E501
        :rtype: bool
        """
        return self._unsubscribe

    @unsubscribe.setter
    def unsubscribe(self, unsubscribe):
        """Sets the unsubscribe of this Email.

        unsubscribe  # noqa: E501

        :param unsubscribe: The unsubscribe of this Email.  # noqa: E501
        :type: bool
        """

        self._unsubscribe = unsubscribe

    @property
    def update_date(self):
        """Gets the update_date of this Email.  # noqa: E501


        :return: The update_date of this Email.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this Email.


        :param update_date: The update_date of this Email.  # noqa: E501
        :type: datetime
        """

        self._update_date = update_date

    @property
    def vendor_id(self):
        """Gets the vendor_id of this Email.  # noqa: E501

        vendorId  # noqa: E501

        :return: The vendor_id of this Email.  # noqa: E501
        :rtype: str
        """
        return self._vendor_id

    @vendor_id.setter
    def vendor_id(self, vendor_id):
        """Sets the vendor_id of this Email.

        vendorId  # noqa: E501

        :param vendor_id: The vendor_id of this Email.  # noqa: E501
        :type: str
        """

        self._vendor_id = vendor_id

    @property
    def vendor_name(self):
        """Gets the vendor_name of this Email.  # noqa: E501


        :return: The vendor_name of this Email.  # noqa: E501
        :rtype: str
        """
        return self._vendor_name

    @vendor_name.setter
    def vendor_name(self, vendor_name):
        """Sets the vendor_name of this Email.


        :param vendor_name: The vendor_name of this Email.  # noqa: E501
        :type: str
        """

        self._vendor_name = vendor_name

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
        if issubclass(Email, dict):
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
        if not isinstance(other, Email):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Email):
            return True

        return self.to_dict() != other.to_dict()
