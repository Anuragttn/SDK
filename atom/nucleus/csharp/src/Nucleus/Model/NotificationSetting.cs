/* 
 * Hydrogen Nucleus API
 *
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.4
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
using SwaggerDateConverter = Nucleus.Client.SwaggerDateConverter;

namespace Nucleus.ModelEntity
{
    /// <summary>
    /// Notification Setting Object
    /// </summary>
    [DataContract]
    public partial class NotificationSetting :  IEquatable<NotificationSetting>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NotificationSetting" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected NotificationSetting() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="NotificationSetting" /> class.
        /// </summary>
        /// <param name="clientId">client_id (required).</param>
        /// <param name="createDate">createDate.</param>
        /// <param name="frequency">frequency.</param>
        /// <param name="frequencyUnit">frequency_unit.</param>
        /// <param name="id">id.</param>
        /// <param name="isReceive">is_receive.</param>
        /// <param name="lastRunDate">last_run_date.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="notificationId">notification_id (required).</param>
        /// <param name="secondaryId">secondaryId.</param>
        /// <param name="thresholdValue">thresholdValue.</param>
        /// <param name="updateDate">updateDate.</param>
        public NotificationSetting(Guid? clientId = default(Guid?), DateTime? createDate = default(DateTime?), int? frequency = default(int?), string frequencyUnit = default(string), Guid? id = default(Guid?), bool? isReceive = default(bool?), DateTime? lastRunDate = default(DateTime?), Dictionary<string, string> metadata = default(Dictionary<string, string>), Guid? notificationId = default(Guid?), string secondaryId = default(string), double? thresholdValue = default(double?), DateTime? updateDate = default(DateTime?))
        {
            // to ensure "clientId" is required (not null)
            if (clientId == null)
            {
                throw new InvalidDataException("clientId is a required property for NotificationSetting and cannot be null");
            }
            else
            {
                this.ClientId = clientId;
            }
            // to ensure "notificationId" is required (not null)
            if (notificationId == null)
            {
                throw new InvalidDataException("notificationId is a required property for NotificationSetting and cannot be null");
            }
            else
            {
                this.NotificationId = notificationId;
            }
            this.CreateDate = createDate;
            this.Frequency = frequency;
            this.FrequencyUnit = frequencyUnit;
            this.Id = id;
            this.IsReceive = isReceive;
            this.LastRunDate = lastRunDate;
            this.Metadata = metadata;
            this.SecondaryId = secondaryId;
            this.ThresholdValue = thresholdValue;
            this.UpdateDate = updateDate;
        }
        
        /// <summary>
        /// client_id
        /// </summary>
        /// <value>client_id</value>
        [DataMember(Name="client_id", EmitDefaultValue=false)]
        public Guid? ClientId { get; set; }

        /// <summary>
        /// Gets or Sets CreateDate
        /// </summary>
        [DataMember(Name="create_date", EmitDefaultValue=false)]
        public DateTime? CreateDate { get; set; }

        /// <summary>
        /// frequency
        /// </summary>
        /// <value>frequency</value>
        [DataMember(Name="frequency", EmitDefaultValue=false)]
        public int? Frequency { get; set; }

        /// <summary>
        /// frequency_unit
        /// </summary>
        /// <value>frequency_unit</value>
        [DataMember(Name="frequency_unit", EmitDefaultValue=false)]
        public string FrequencyUnit { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public Guid? Id { get; set; }

        /// <summary>
        /// is_receive
        /// </summary>
        /// <value>is_receive</value>
        [DataMember(Name="is_receive", EmitDefaultValue=false)]
        public bool? IsReceive { get; set; }

        /// <summary>
        /// last_run_date
        /// </summary>
        /// <value>last_run_date</value>
        [DataMember(Name="last_run_date", EmitDefaultValue=false)]
        public DateTime? LastRunDate { get; set; }

        /// <summary>
        /// metadata
        /// </summary>
        /// <value>metadata</value>
        [DataMember(Name="metadata", EmitDefaultValue=false)]
        public Dictionary<string, string> Metadata { get; set; }

        /// <summary>
        /// notification_id
        /// </summary>
        /// <value>notification_id</value>
        [DataMember(Name="notification_id", EmitDefaultValue=false)]
        public Guid? NotificationId { get; set; }

        /// <summary>
        /// Gets or Sets SecondaryId
        /// </summary>
        [DataMember(Name="secondary_id", EmitDefaultValue=false)]
        public string SecondaryId { get; set; }

        /// <summary>
        /// Gets or Sets ThresholdValue
        /// </summary>
        [DataMember(Name="threshold_value", EmitDefaultValue=false)]
        public double? ThresholdValue { get; set; }

        /// <summary>
        /// Gets or Sets UpdateDate
        /// </summary>
        [DataMember(Name="update_date", EmitDefaultValue=false)]
        public DateTime? UpdateDate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class NotificationSetting {\n");
            sb.Append("  ClientId: ").Append(ClientId).Append("\n");
            sb.Append("  CreateDate: ").Append(CreateDate).Append("\n");
            sb.Append("  Frequency: ").Append(Frequency).Append("\n");
            sb.Append("  FrequencyUnit: ").Append(FrequencyUnit).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  IsReceive: ").Append(IsReceive).Append("\n");
            sb.Append("  LastRunDate: ").Append(LastRunDate).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  NotificationId: ").Append(NotificationId).Append("\n");
            sb.Append("  SecondaryId: ").Append(SecondaryId).Append("\n");
            sb.Append("  ThresholdValue: ").Append(ThresholdValue).Append("\n");
            sb.Append("  UpdateDate: ").Append(UpdateDate).Append("\n");
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
            return this.Equals(input as NotificationSetting);
        }

        /// <summary>
        /// Returns true if NotificationSetting instances are equal
        /// </summary>
        /// <param name="input">Instance of NotificationSetting to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NotificationSetting input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ClientId == input.ClientId ||
                    (this.ClientId != null &&
                    this.ClientId.Equals(input.ClientId))
                ) && 
                (
                    this.CreateDate == input.CreateDate ||
                    (this.CreateDate != null &&
                    this.CreateDate.Equals(input.CreateDate))
                ) && 
                (
                    this.Frequency == input.Frequency ||
                    (this.Frequency != null &&
                    this.Frequency.Equals(input.Frequency))
                ) && 
                (
                    this.FrequencyUnit == input.FrequencyUnit ||
                    (this.FrequencyUnit != null &&
                    this.FrequencyUnit.Equals(input.FrequencyUnit))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.IsReceive == input.IsReceive ||
                    (this.IsReceive != null &&
                    this.IsReceive.Equals(input.IsReceive))
                ) && 
                (
                    this.LastRunDate == input.LastRunDate ||
                    (this.LastRunDate != null &&
                    this.LastRunDate.Equals(input.LastRunDate))
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    this.Metadata != null &&
                    this.Metadata.SequenceEqual(input.Metadata)
                ) && 
                (
                    this.NotificationId == input.NotificationId ||
                    (this.NotificationId != null &&
                    this.NotificationId.Equals(input.NotificationId))
                ) && 
                (
                    this.SecondaryId == input.SecondaryId ||
                    (this.SecondaryId != null &&
                    this.SecondaryId.Equals(input.SecondaryId))
                ) && 
                (
                    this.ThresholdValue == input.ThresholdValue ||
                    (this.ThresholdValue != null &&
                    this.ThresholdValue.Equals(input.ThresholdValue))
                ) && 
                (
                    this.UpdateDate == input.UpdateDate ||
                    (this.UpdateDate != null &&
                    this.UpdateDate.Equals(input.UpdateDate))
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
                if (this.ClientId != null)
                    hashCode = hashCode * 59 + this.ClientId.GetHashCode();
                if (this.CreateDate != null)
                    hashCode = hashCode * 59 + this.CreateDate.GetHashCode();
                if (this.Frequency != null)
                    hashCode = hashCode * 59 + this.Frequency.GetHashCode();
                if (this.FrequencyUnit != null)
                    hashCode = hashCode * 59 + this.FrequencyUnit.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.IsReceive != null)
                    hashCode = hashCode * 59 + this.IsReceive.GetHashCode();
                if (this.LastRunDate != null)
                    hashCode = hashCode * 59 + this.LastRunDate.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.NotificationId != null)
                    hashCode = hashCode * 59 + this.NotificationId.GetHashCode();
                if (this.SecondaryId != null)
                    hashCode = hashCode * 59 + this.SecondaryId.GetHashCode();
                if (this.ThresholdValue != null)
                    hashCode = hashCode * 59 + this.ThresholdValue.GetHashCode();
                if (this.UpdateDate != null)
                    hashCode = hashCode * 59 + this.UpdateDate.GetHashCode();
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