/* 
 * Hydrogen Nucleus API
 *
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.5
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
    /// AclClientPermissionVO
    /// </summary>
    [DataContract]
    public partial class AclClientPermissionVO :  IEquatable<AclClientPermissionVO>, IValidatableObject
    {
        /// <summary>
        /// permissionType
        /// </summary>
        /// <value>permissionType</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum PermissionTypeEnum
        {
            
            /// <summary>
            /// Enum INQUIRYACCESS for value: INQUIRY_ACCESS
            /// </summary>
            [EnumMember(Value = "INQUIRY_ACCESS")]
            INQUIRYACCESS = 1,
            
            /// <summary>
            /// Enum LIMITEDAUTHORITY for value: LIMITED_AUTHORITY
            /// </summary>
            [EnumMember(Value = "LIMITED_AUTHORITY")]
            LIMITEDAUTHORITY = 2,
            
            /// <summary>
            /// Enum FULLAUTHORITY for value: FULL_AUTHORITY
            /// </summary>
            [EnumMember(Value = "FULL_AUTHORITY")]
            FULLAUTHORITY = 3,
            
            /// <summary>
            /// Enum POWEROFATTORNEY for value: POWER_OF_ATTORNEY
            /// </summary>
            [EnumMember(Value = "POWER_OF_ATTORNEY")]
            POWEROFATTORNEY = 4
        }

        /// <summary>
        /// permissionType
        /// </summary>
        /// <value>permissionType</value>
        [DataMember(Name="permission_type", EmitDefaultValue=false)]
        public PermissionTypeEnum? PermissionType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="AclClientPermissionVO" /> class.
        /// </summary>
        /// <param name="accountId">accountId.</param>
        /// <param name="clientId">clientId.</param>
        /// <param name="permissionType">permissionType.</param>
        public AclClientPermissionVO(Guid? accountId = default(Guid?), Guid? clientId = default(Guid?), PermissionTypeEnum? permissionType = default(PermissionTypeEnum?))
        {
            this.AccountId = accountId;
            this.ClientId = clientId;
            this.PermissionType = permissionType;
        }
        
        /// <summary>
        /// accountId
        /// </summary>
        /// <value>accountId</value>
        [DataMember(Name="account_id", EmitDefaultValue=false)]
        public Guid? AccountId { get; set; }

        /// <summary>
        /// clientId
        /// </summary>
        /// <value>clientId</value>
        [DataMember(Name="client_id", EmitDefaultValue=false)]
        public Guid? ClientId { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class AclClientPermissionVO {\n");
            sb.Append("  AccountId: ").Append(AccountId).Append("\n");
            sb.Append("  ClientId: ").Append(ClientId).Append("\n");
            sb.Append("  PermissionType: ").Append(PermissionType).Append("\n");
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
            return this.Equals(input as AclClientPermissionVO);
        }

        /// <summary>
        /// Returns true if AclClientPermissionVO instances are equal
        /// </summary>
        /// <param name="input">Instance of AclClientPermissionVO to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(AclClientPermissionVO input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.AccountId == input.AccountId ||
                    (this.AccountId != null &&
                    this.AccountId.Equals(input.AccountId))
                ) && 
                (
                    this.ClientId == input.ClientId ||
                    (this.ClientId != null &&
                    this.ClientId.Equals(input.ClientId))
                ) && 
                (
                    this.PermissionType == input.PermissionType ||
                    (this.PermissionType != null &&
                    this.PermissionType.Equals(input.PermissionType))
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
                if (this.AccountId != null)
                    hashCode = hashCode * 59 + this.AccountId.GetHashCode();
                if (this.ClientId != null)
                    hashCode = hashCode * 59 + this.ClientId.GetHashCode();
                if (this.PermissionType != null)
                    hashCode = hashCode * 59 + this.PermissionType.GetHashCode();
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
