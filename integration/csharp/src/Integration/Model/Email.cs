/* 
 * Hydrogen Integration API
 *
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.1
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = Integration.Client.SwaggerDateConverter;

namespace Integration.ModelEntity
{
    /// <summary>
    /// Email Object
    /// </summary>
    [DataContract]
    public partial class Email :  IEquatable<Email>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Email" /> class.
        /// </summary>
        /// <param name="click">click.</param>
        /// <param name="createDate">createDate.</param>
        /// <param name="deliveryStatus">deliveryStatus.</param>
        /// <param name="deliveryStatusTimestamp">deliveryStatusTimestamp.</param>
        /// <param name="emailId">emailId.</param>
        /// <param name="from">from.</param>
        /// <param name="id">id.</param>
        /// <param name="nucleusBusinessId">nucleusBusinessId.</param>
        /// <param name="nucleusClientId">nucleusClientId.</param>
        /// <param name="open">open.</param>
        /// <param name="reason">reason.</param>
        /// <param name="secondaryId">secondaryId.</param>
        /// <param name="spam">spam.</param>
        /// <param name="subject">subject.</param>
        /// <param name="to">to.</param>
        /// <param name="unsubscribe">unsubscribe.</param>
        /// <param name="updateDate">updateDate.</param>
        /// <param name="vendorId">vendorId.</param>
        /// <param name="vendorName">vendorName.</param>
        public Email(List<EmailClick> click = default(List<EmailClick>), DateTime? createDate = default(DateTime?), string deliveryStatus = default(string), DateTime? deliveryStatusTimestamp = default(DateTime?), Guid? emailId = default(Guid?), string from = default(string), Guid? id = default(Guid?), Guid? nucleusBusinessId = default(Guid?), Guid? nucleusClientId = default(Guid?), List<EmailOpen> open = default(List<EmailOpen>), string reason = default(string), string secondaryId = default(string), bool? spam = default(bool?), string subject = default(string), string to = default(string), bool? unsubscribe = default(bool?), DateTime? updateDate = default(DateTime?), Guid? vendorId = default(Guid?), string vendorName = default(string))
        {
            this.Click = click;
            this.CreateDate = createDate;
            this.DeliveryStatus = deliveryStatus;
            this.DeliveryStatusTimestamp = deliveryStatusTimestamp;
            this.EmailId = emailId;
            this.From = from;
            this.Id = id;
            this.NucleusBusinessId = nucleusBusinessId;
            this.NucleusClientId = nucleusClientId;
            this.Open = open;
            this.Reason = reason;
            this.SecondaryId = secondaryId;
            this.Spam = spam;
            this.Subject = subject;
            this.To = to;
            this.Unsubscribe = unsubscribe;
            this.UpdateDate = updateDate;
            this.VendorId = vendorId;
            this.VendorName = vendorName;
        }
        
        /// <summary>
        /// Gets or Sets Click
        /// </summary>
        [DataMember(Name="click", EmitDefaultValue=false)]
        public List<EmailClick> Click { get; set; }

        /// <summary>
        /// Gets or Sets CreateDate
        /// </summary>
        [DataMember(Name="create_date", EmitDefaultValue=false)]
        public DateTime? CreateDate { get; set; }

        /// <summary>
        /// deliveryStatus
        /// </summary>
        /// <value>deliveryStatus</value>
        [DataMember(Name="delivery_status", EmitDefaultValue=false)]
        public string DeliveryStatus { get; set; }

        /// <summary>
        /// deliveryStatusTimestamp
        /// </summary>
        /// <value>deliveryStatusTimestamp</value>
        [DataMember(Name="delivery_status_timestamp", EmitDefaultValue=false)]
        public DateTime? DeliveryStatusTimestamp { get; set; }

        /// <summary>
        /// Gets or Sets EmailId
        /// </summary>
        [DataMember(Name="email_id", EmitDefaultValue=false)]
        public Guid? EmailId { get; set; }

        /// <summary>
        /// from
        /// </summary>
        /// <value>from</value>
        [DataMember(Name="from", EmitDefaultValue=false)]
        public string From { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public Guid? Id { get; set; }

        /// <summary>
        /// nucleusBusinessId
        /// </summary>
        /// <value>nucleusBusinessId</value>
        [DataMember(Name="nucleus_business_id", EmitDefaultValue=false)]
        public Guid? NucleusBusinessId { get; set; }

        /// <summary>
        /// nucleusClientId
        /// </summary>
        /// <value>nucleusClientId</value>
        [DataMember(Name="nucleus_client_id", EmitDefaultValue=false)]
        public Guid? NucleusClientId { get; set; }

        /// <summary>
        /// Gets or Sets Open
        /// </summary>
        [DataMember(Name="open", EmitDefaultValue=false)]
        public List<EmailOpen> Open { get; set; }

        /// <summary>
        /// reason
        /// </summary>
        /// <value>reason</value>
        [DataMember(Name="reason", EmitDefaultValue=false)]
        public string Reason { get; set; }

        /// <summary>
        /// Gets or Sets SecondaryId
        /// </summary>
        [DataMember(Name="secondary_id", EmitDefaultValue=false)]
        public string SecondaryId { get; set; }

        /// <summary>
        /// spam
        /// </summary>
        /// <value>spam</value>
        [DataMember(Name="spam", EmitDefaultValue=false)]
        public bool? Spam { get; set; }

        /// <summary>
        /// subject
        /// </summary>
        /// <value>subject</value>
        [DataMember(Name="subject", EmitDefaultValue=false)]
        public string Subject { get; set; }

        /// <summary>
        /// to
        /// </summary>
        /// <value>to</value>
        [DataMember(Name="to", EmitDefaultValue=false)]
        public string To { get; set; }

        /// <summary>
        /// unsubscribe
        /// </summary>
        /// <value>unsubscribe</value>
        [DataMember(Name="unsubscribe", EmitDefaultValue=false)]
        public bool? Unsubscribe { get; set; }

        /// <summary>
        /// Gets or Sets UpdateDate
        /// </summary>
        [DataMember(Name="update_date", EmitDefaultValue=false)]
        public DateTime? UpdateDate { get; set; }

        /// <summary>
        /// vendorId
        /// </summary>
        /// <value>vendorId</value>
        [DataMember(Name="vendor_id", EmitDefaultValue=false)]
        public Guid? VendorId { get; set; }

        /// <summary>
        /// Gets or Sets VendorName
        /// </summary>
        [DataMember(Name="vendor_name", EmitDefaultValue=false)]
        public string VendorName { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Email {\n");
            sb.Append("  Click: ").Append(Click).Append("\n");
            sb.Append("  CreateDate: ").Append(CreateDate).Append("\n");
            sb.Append("  DeliveryStatus: ").Append(DeliveryStatus).Append("\n");
            sb.Append("  DeliveryStatusTimestamp: ").Append(DeliveryStatusTimestamp).Append("\n");
            sb.Append("  EmailId: ").Append(EmailId).Append("\n");
            sb.Append("  From: ").Append(From).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  NucleusBusinessId: ").Append(NucleusBusinessId).Append("\n");
            sb.Append("  NucleusClientId: ").Append(NucleusClientId).Append("\n");
            sb.Append("  Open: ").Append(Open).Append("\n");
            sb.Append("  Reason: ").Append(Reason).Append("\n");
            sb.Append("  SecondaryId: ").Append(SecondaryId).Append("\n");
            sb.Append("  Spam: ").Append(Spam).Append("\n");
            sb.Append("  Subject: ").Append(Subject).Append("\n");
            sb.Append("  To: ").Append(To).Append("\n");
            sb.Append("  Unsubscribe: ").Append(Unsubscribe).Append("\n");
            sb.Append("  UpdateDate: ").Append(UpdateDate).Append("\n");
            sb.Append("  VendorId: ").Append(VendorId).Append("\n");
            sb.Append("  VendorName: ").Append(VendorName).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as Email);
        }

        /// <summary>
        /// Returns true if Email instances are equal
        /// </summary>
        /// <param name="input">Instance of Email to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Email input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Click == input.Click ||
                    this.Click != null &&
                    this.Click.SequenceEqual(input.Click)
                ) && 
                (
                    this.CreateDate == input.CreateDate ||
                    (this.CreateDate != null &&
                    this.CreateDate.Equals(input.CreateDate))
                ) && 
                (
                    this.DeliveryStatus == input.DeliveryStatus ||
                    (this.DeliveryStatus != null &&
                    this.DeliveryStatus.Equals(input.DeliveryStatus))
                ) && 
                (
                    this.DeliveryStatusTimestamp == input.DeliveryStatusTimestamp ||
                    (this.DeliveryStatusTimestamp != null &&
                    this.DeliveryStatusTimestamp.Equals(input.DeliveryStatusTimestamp))
                ) && 
                (
                    this.EmailId == input.EmailId ||
                    (this.EmailId != null &&
                    this.EmailId.Equals(input.EmailId))
                ) && 
                (
                    this.From == input.From ||
                    (this.From != null &&
                    this.From.Equals(input.From))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.NucleusBusinessId == input.NucleusBusinessId ||
                    (this.NucleusBusinessId != null &&
                    this.NucleusBusinessId.Equals(input.NucleusBusinessId))
                ) && 
                (
                    this.NucleusClientId == input.NucleusClientId ||
                    (this.NucleusClientId != null &&
                    this.NucleusClientId.Equals(input.NucleusClientId))
                ) && 
                (
                    this.Open == input.Open ||
                    this.Open != null &&
                    this.Open.SequenceEqual(input.Open)
                ) && 
                (
                    this.Reason == input.Reason ||
                    (this.Reason != null &&
                    this.Reason.Equals(input.Reason))
                ) && 
                (
                    this.SecondaryId == input.SecondaryId ||
                    (this.SecondaryId != null &&
                    this.SecondaryId.Equals(input.SecondaryId))
                ) && 
                (
                    this.Spam == input.Spam ||
                    (this.Spam != null &&
                    this.Spam.Equals(input.Spam))
                ) && 
                (
                    this.Subject == input.Subject ||
                    (this.Subject != null &&
                    this.Subject.Equals(input.Subject))
                ) && 
                (
                    this.To == input.To ||
                    (this.To != null &&
                    this.To.Equals(input.To))
                ) && 
                (
                    this.Unsubscribe == input.Unsubscribe ||
                    (this.Unsubscribe != null &&
                    this.Unsubscribe.Equals(input.Unsubscribe))
                ) && 
                (
                    this.UpdateDate == input.UpdateDate ||
                    (this.UpdateDate != null &&
                    this.UpdateDate.Equals(input.UpdateDate))
                ) && 
                (
                    this.VendorId == input.VendorId ||
                    (this.VendorId != null &&
                    this.VendorId.Equals(input.VendorId))
                ) && 
                (
                    this.VendorName == input.VendorName ||
                    (this.VendorName != null &&
                    this.VendorName.Equals(input.VendorName))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Click != null)
                    hashCode = hashCode * 59 + this.Click.GetHashCode();
                if (this.CreateDate != null)
                    hashCode = hashCode * 59 + this.CreateDate.GetHashCode();
                if (this.DeliveryStatus != null)
                    hashCode = hashCode * 59 + this.DeliveryStatus.GetHashCode();
                if (this.DeliveryStatusTimestamp != null)
                    hashCode = hashCode * 59 + this.DeliveryStatusTimestamp.GetHashCode();
                if (this.EmailId != null)
                    hashCode = hashCode * 59 + this.EmailId.GetHashCode();
                if (this.From != null)
                    hashCode = hashCode * 59 + this.From.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.NucleusBusinessId != null)
                    hashCode = hashCode * 59 + this.NucleusBusinessId.GetHashCode();
                if (this.NucleusClientId != null)
                    hashCode = hashCode * 59 + this.NucleusClientId.GetHashCode();
                if (this.Open != null)
                    hashCode = hashCode * 59 + this.Open.GetHashCode();
                if (this.Reason != null)
                    hashCode = hashCode * 59 + this.Reason.GetHashCode();
                if (this.SecondaryId != null)
                    hashCode = hashCode * 59 + this.SecondaryId.GetHashCode();
                if (this.Spam != null)
                    hashCode = hashCode * 59 + this.Spam.GetHashCode();
                if (this.Subject != null)
                    hashCode = hashCode * 59 + this.Subject.GetHashCode();
                if (this.To != null)
                    hashCode = hashCode * 59 + this.To.GetHashCode();
                if (this.Unsubscribe != null)
                    hashCode = hashCode * 59 + this.Unsubscribe.GetHashCode();
                if (this.UpdateDate != null)
                    hashCode = hashCode * 59 + this.UpdateDate.GetHashCode();
                if (this.VendorId != null)
                    hashCode = hashCode * 59 + this.VendorId.GetHashCode();
                if (this.VendorName != null)
                    hashCode = hashCode * 59 + this.VendorName.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}