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

from atom_api.models.create_sales_response import CreateSalesResponse  # noqa: F401,E501
from atom_api.models.secondary_id import SecondaryId  # noqa: F401,E501


class SpecificSalesResponse(object):
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
        'questions': 'str',
        'subject': 'str',
        'assigned': 'str',
        'open_time': 'date',
        'close_time': 'date',
        'closed_by': 'str',
        'comments': 'str',
        'contacted': 'bool',
        'email': 'str',
        'firm_name': 'str',
        'first_name': 'str',
        'last_name': 'str',
        'ip': 'str',
        'method': 'str',
        'phone': 'str',
        'title': 'str',
        'solution': 'str',
        'referral_source': 'str',
        'notification': 'bool',
        'metadata': 'object',
        'secondary_id': 'SecondaryId',
        'update_date': 'str'
    }

    attribute_map = {
        'id': 'id',
        'create_date': 'create_date',
        'questions': 'questions',
        'subject': 'subject',
        'assigned': 'assigned',
        'open_time': 'open_time',
        'close_time': 'close_time',
        'closed_by': 'closed_by',
        'comments': 'comments',
        'contacted': 'contacted',
        'email': 'email',
        'firm_name': 'firm_name',
        'first_name': 'first_name',
        'last_name': 'last_name',
        'ip': 'ip',
        'method': 'method',
        'phone': 'phone',
        'title': 'title',
        'solution': 'solution',
        'referral_source': 'referral_source',
        'notification': 'notification',
        'metadata': 'metadata',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, id=None, create_date=None, questions=None, subject=None, assigned=None, open_time=None, close_time=None, closed_by=None, comments=None, contacted=False, email=None, firm_name=None, first_name=None, last_name=None, ip=None, method=None, phone=None, title=None, solution=None, referral_source=None, notification=True, metadata=None, secondary_id=None, update_date=None):  # noqa: E501
        """SpecificSalesResponse - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._create_date = None
        self._questions = None
        self._subject = None
        self._assigned = None
        self._open_time = None
        self._close_time = None
        self._closed_by = None
        self._comments = None
        self._contacted = None
        self._email = None
        self._firm_name = None
        self._first_name = None
        self._last_name = None
        self._ip = None
        self._method = None
        self._phone = None
        self._title = None
        self._solution = None
        self._referral_source = None
        self._notification = None
        self._metadata = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if create_date is not None:
            self.create_date = create_date
        self.questions = questions
        if subject is not None:
            self.subject = subject
        if assigned is not None:
            self.assigned = assigned
        if open_time is not None:
            self.open_time = open_time
        if close_time is not None:
            self.close_time = close_time
        if closed_by is not None:
            self.closed_by = closed_by
        if comments is not None:
            self.comments = comments
        if contacted is not None:
            self.contacted = contacted
        if email is not None:
            self.email = email
        if firm_name is not None:
            self.firm_name = firm_name
        if first_name is not None:
            self.first_name = first_name
        if last_name is not None:
            self.last_name = last_name
        if ip is not None:
            self.ip = ip
        if method is not None:
            self.method = method
        if phone is not None:
            self.phone = phone
        if title is not None:
            self.title = title
        if solution is not None:
            self.solution = solution
        if referral_source is not None:
            self.referral_source = referral_source
        if notification is not None:
            self.notification = notification
        if metadata is not None:
            self.metadata = metadata
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def id(self):
        """Gets the id of this SpecificSalesResponse.  # noqa: E501

        The ID of the sales inquiry  # noqa: E501

        :return: The id of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SpecificSalesResponse.

        The ID of the sales inquiry  # noqa: E501

        :param id: The id of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def create_date(self):
        """Gets the create_date of this SpecificSalesResponse.  # noqa: E501

        Datetime the sales inquiry was created  # noqa: E501

        :return: The create_date of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this SpecificSalesResponse.

        Datetime the sales inquiry was created  # noqa: E501

        :param create_date: The create_date of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._create_date = create_date

    @property
    def questions(self):
        """Gets the questions of this SpecificSalesResponse.  # noqa: E501

        Details on the questions received within the inquiry  # noqa: E501

        :return: The questions of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._questions

    @questions.setter
    def questions(self, questions):
        """Sets the questions of this SpecificSalesResponse.

        Details on the questions received within the inquiry  # noqa: E501

        :param questions: The questions of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """
        if questions is None:
            raise ValueError("Invalid value for `questions`, must not be `None`")  # noqa: E501

        self._questions = questions

    @property
    def subject(self):
        """Gets the subject of this SpecificSalesResponse.  # noqa: E501

        Short title for the subject of the inquiry  # noqa: E501

        :return: The subject of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._subject

    @subject.setter
    def subject(self, subject):
        """Sets the subject of this SpecificSalesResponse.

        Short title for the subject of the inquiry  # noqa: E501

        :param subject: The subject of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._subject = subject

    @property
    def assigned(self):
        """Gets the assigned of this SpecificSalesResponse.  # noqa: E501

        The ID of the internal user assigned to the sales inquiry  # noqa: E501

        :return: The assigned of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._assigned

    @assigned.setter
    def assigned(self, assigned):
        """Sets the assigned of this SpecificSalesResponse.

        The ID of the internal user assigned to the sales inquiry  # noqa: E501

        :param assigned: The assigned of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._assigned = assigned

    @property
    def open_time(self):
        """Gets the open_time of this SpecificSalesResponse.  # noqa: E501

        Date that the inquiry was opened  # noqa: E501

        :return: The open_time of this SpecificSalesResponse.  # noqa: E501
        :rtype: date
        """
        return self._open_time

    @open_time.setter
    def open_time(self, open_time):
        """Sets the open_time of this SpecificSalesResponse.

        Date that the inquiry was opened  # noqa: E501

        :param open_time: The open_time of this SpecificSalesResponse.  # noqa: E501
        :type: date
        """

        self._open_time = open_time

    @property
    def close_time(self):
        """Gets the close_time of this SpecificSalesResponse.  # noqa: E501

        Date that the inquiry was closed  # noqa: E501

        :return: The close_time of this SpecificSalesResponse.  # noqa: E501
        :rtype: date
        """
        return self._close_time

    @close_time.setter
    def close_time(self, close_time):
        """Sets the close_time of this SpecificSalesResponse.

        Date that the inquiry was closed  # noqa: E501

        :param close_time: The close_time of this SpecificSalesResponse.  # noqa: E501
        :type: date
        """

        self._close_time = close_time

    @property
    def closed_by(self):
        """Gets the closed_by of this SpecificSalesResponse.  # noqa: E501

        The ID for the internal user that closed the inquiry  # noqa: E501

        :return: The closed_by of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._closed_by

    @closed_by.setter
    def closed_by(self, closed_by):
        """Sets the closed_by of this SpecificSalesResponse.

        The ID for the internal user that closed the inquiry  # noqa: E501

        :param closed_by: The closed_by of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._closed_by = closed_by

    @property
    def comments(self):
        """Gets the comments of this SpecificSalesResponse.  # noqa: E501

        Any comments associated with the sales inquiry for background  # noqa: E501

        :return: The comments of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._comments

    @comments.setter
    def comments(self, comments):
        """Sets the comments of this SpecificSalesResponse.

        Any comments associated with the sales inquiry for background  # noqa: E501

        :param comments: The comments of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._comments = comments

    @property
    def contacted(self):
        """Gets the contacted of this SpecificSalesResponse.  # noqa: E501

        Indicates if the individual associated with the inquiry was contacted. Defaults to false which indicates that he/she was not contacted  # noqa: E501

        :return: The contacted of this SpecificSalesResponse.  # noqa: E501
        :rtype: bool
        """
        return self._contacted

    @contacted.setter
    def contacted(self, contacted):
        """Sets the contacted of this SpecificSalesResponse.

        Indicates if the individual associated with the inquiry was contacted. Defaults to false which indicates that he/she was not contacted  # noqa: E501

        :param contacted: The contacted of this SpecificSalesResponse.  # noqa: E501
        :type: bool
        """

        self._contacted = contacted

    @property
    def email(self):
        """Gets the email of this SpecificSalesResponse.  # noqa: E501

        Contact email for the individual associated with the inquiry such as sample@example.com  # noqa: E501

        :return: The email of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this SpecificSalesResponse.

        Contact email for the individual associated with the inquiry such as sample@example.com  # noqa: E501

        :param email: The email of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._email = email

    @property
    def firm_name(self):
        """Gets the firm_name of this SpecificSalesResponse.  # noqa: E501

        Name of the firm associated with the inquiry  # noqa: E501

        :return: The firm_name of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._firm_name

    @firm_name.setter
    def firm_name(self, firm_name):
        """Sets the firm_name of this SpecificSalesResponse.

        Name of the firm associated with the inquiry  # noqa: E501

        :param firm_name: The firm_name of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._firm_name = firm_name

    @property
    def first_name(self):
        """Gets the first_name of this SpecificSalesResponse.  # noqa: E501

        First name of the individual associated with the inquiry  # noqa: E501

        :return: The first_name of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name):
        """Sets the first_name of this SpecificSalesResponse.

        First name of the individual associated with the inquiry  # noqa: E501

        :param first_name: The first_name of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._first_name = first_name

    @property
    def last_name(self):
        """Gets the last_name of this SpecificSalesResponse.  # noqa: E501

        Last name of the individual associated with the inquiry  # noqa: E501

        :return: The last_name of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name):
        """Sets the last_name of this SpecificSalesResponse.

        Last name of the individual associated with the inquiry  # noqa: E501

        :param last_name: The last_name of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._last_name = last_name

    @property
    def ip(self):
        """Gets the ip of this SpecificSalesResponse.  # noqa: E501

        IP address for the individual associated with the inquiry  # noqa: E501

        :return: The ip of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._ip

    @ip.setter
    def ip(self, ip):
        """Sets the ip of this SpecificSalesResponse.

        IP address for the individual associated with the inquiry  # noqa: E501

        :param ip: The ip of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._ip = ip

    @property
    def method(self):
        """Gets the method of this SpecificSalesResponse.  # noqa: E501

        Method with which the inquiry was received such as “email” or “phone”  # noqa: E501

        :return: The method of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._method

    @method.setter
    def method(self, method):
        """Sets the method of this SpecificSalesResponse.

        Method with which the inquiry was received such as “email” or “phone”  # noqa: E501

        :param method: The method of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._method = method

    @property
    def phone(self):
        """Gets the phone of this SpecificSalesResponse.  # noqa: E501

        Phone number for the individual associated with the inquiry  # noqa: E501

        :return: The phone of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._phone

    @phone.setter
    def phone(self, phone):
        """Sets the phone of this SpecificSalesResponse.

        Phone number for the individual associated with the inquiry  # noqa: E501

        :param phone: The phone of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._phone = phone

    @property
    def title(self):
        """Gets the title of this SpecificSalesResponse.  # noqa: E501

        Title of the individual associated with the inquiry  # noqa: E501

        :return: The title of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this SpecificSalesResponse.

        Title of the individual associated with the inquiry  # noqa: E501

        :param title: The title of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._title = title

    @property
    def solution(self):
        """Gets the solution of this SpecificSalesResponse.  # noqa: E501

        Details on the resolution of the inquiry  # noqa: E501

        :return: The solution of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._solution

    @solution.setter
    def solution(self, solution):
        """Sets the solution of this SpecificSalesResponse.

        Details on the resolution of the inquiry  # noqa: E501

        :param solution: The solution of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._solution = solution

    @property
    def referral_source(self):
        """Gets the referral_source of this SpecificSalesResponse.  # noqa: E501

        Details on how the individual associated with the inquiry was referred  # noqa: E501

        :return: The referral_source of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._referral_source

    @referral_source.setter
    def referral_source(self, referral_source):
        """Sets the referral_source of this SpecificSalesResponse.

        Details on how the individual associated with the inquiry was referred  # noqa: E501

        :param referral_source: The referral_source of this SpecificSalesResponse.  # noqa: E501
        :type: str
        """

        self._referral_source = referral_source

    @property
    def notification(self):
        """Gets the notification of this SpecificSalesResponse.  # noqa: E501

        Indicates if a notification is issued for inquiry. Defaults to true which indicates that there is a notification  # noqa: E501

        :return: The notification of this SpecificSalesResponse.  # noqa: E501
        :rtype: bool
        """
        return self._notification

    @notification.setter
    def notification(self, notification):
        """Sets the notification of this SpecificSalesResponse.

        Indicates if a notification is issued for inquiry. Defaults to true which indicates that there is a notification  # noqa: E501

        :param notification: The notification of this SpecificSalesResponse.  # noqa: E501
        :type: bool
        """

        self._notification = notification

    @property
    def metadata(self):
        """Gets the metadata of this SpecificSalesResponse.  # noqa: E501

        Custom information associated with the sales inquiry in the format key:value. See Metadata  # noqa: E501

        :return: The metadata of this SpecificSalesResponse.  # noqa: E501
        :rtype: object
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this SpecificSalesResponse.

        Custom information associated with the sales inquiry in the format key:value. See Metadata  # noqa: E501

        :param metadata: The metadata of this SpecificSalesResponse.  # noqa: E501
        :type: object
        """

        self._metadata = metadata

    @property
    def secondary_id(self):
        """Gets the secondary_id of this SpecificSalesResponse.  # noqa: E501


        :return: The secondary_id of this SpecificSalesResponse.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this SpecificSalesResponse.


        :param secondary_id: The secondary_id of this SpecificSalesResponse.  # noqa: E501
        :type: SecondaryId
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this SpecificSalesResponse.  # noqa: E501

        Datetime the sales inquiry was last updated  # noqa: E501

        :return: The update_date of this SpecificSalesResponse.  # noqa: E501
        :rtype: str
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this SpecificSalesResponse.

        Datetime the sales inquiry was last updated  # noqa: E501

        :param update_date: The update_date of this SpecificSalesResponse.  # noqa: E501
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
        if issubclass(SpecificSalesResponse, dict):
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
        if not isinstance(other, SpecificSalesResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
