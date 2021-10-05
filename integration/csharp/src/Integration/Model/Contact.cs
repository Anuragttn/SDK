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
    /// Contact Object
    /// </summary>
    [DataContract]
    public partial class Contact :  IEquatable<Contact>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Contact" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Contact() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Contact" /> class.
        /// </summary>
        /// <param name="address">address.</param>
        /// <param name="balances">balances.</param>
        /// <param name="businessId">businessId.</param>
        /// <param name="clientId">clientId.</param>
        /// <param name="companyName">companyName (required).</param>
        /// <param name="createDate">createDate.</param>
        /// <param name="description">description.</param>
        /// <param name="firstName">firstName.</param>
        /// <param name="id">id.</param>
        /// <param name="identificationNumber">identificationNumber.</param>
        /// <param name="isActive">isActive.</param>
        /// <param name="isCustomer">isCustomer.</param>
        /// <param name="isSupplier">isSupplier.</param>
        /// <param name="lastName">lastName.</param>
        /// <param name="secondaryId">secondaryId.</param>
        /// <param name="status">status.</param>
        /// <param name="updateDate">updateDate.</param>
        public Contact(List<ContactAddress> address = default(List<ContactAddress>), Balances balances = default(Balances), Guid? businessId = default(Guid?), Guid? clientId = default(Guid?), string companyName = default(string), DateTime? createDate = default(DateTime?), string description = default(string), string firstName = default(string), Guid? id = default(Guid?), string identificationNumber = default(string), bool? isActive = default(bool?), bool? isCustomer = default(bool?), bool? isSupplier = default(bool?), string lastName = default(string), string secondaryId = default(string), string status = default(string), DateTime? updateDate = default(DateTime?))
        {
            // to ensure "companyName" is required (not null)
            if (companyName == null)
            {
                throw new InvalidDataException("companyName is a required property for Contact and cannot be null");
            }
            else
            {
                this.CompanyName = companyName;
            }
            this.Address = address;
            this.Balances = balances;
            this.BusinessId = businessId;
            this.ClientId = clientId;
            this.CreateDate = createDate;
            this.Description = description;
            this.FirstName = firstName;
            this.Id = id;
            this.IdentificationNumber = identificationNumber;
            this.IsActive = isActive;
            this.IsCustomer = isCustomer;
            this.IsSupplier = isSupplier;
            this.LastName = lastName;
            this.SecondaryId = secondaryId;
            this.Status = status;
            this.UpdateDate = updateDate;
        }
        
        /// <summary>
        /// Gets or Sets Address
        /// </summary>
        [DataMember(Name="address", EmitDefaultValue=false)]
        public List<ContactAddress> Address { get; set; }

        /// <summary>
        /// Gets or Sets Balances
        /// </summary>
        [DataMember(Name="balances", EmitDefaultValue=false)]
        public Balances Balances { get; set; }

        /// <summary>
        /// businessId
        /// </summary>
        /// <value>businessId</value>
        [DataMember(Name="business_id", EmitDefaultValue=false)]
        public Guid? BusinessId { get; set; }

        /// <summary>
        /// clientId
        /// </summary>
        /// <value>clientId</value>
        [DataMember(Name="client_id", EmitDefaultValue=false)]
        public Guid? ClientId { get; set; }

        /// <summary>
        /// companyName
        /// </summary>
        /// <value>companyName</value>
        [DataMember(Name="company_name", EmitDefaultValue=false)]
        public string CompanyName { get; set; }

        /// <summary>
        /// Gets or Sets CreateDate
        /// </summary>
        [DataMember(Name="create_date", EmitDefaultValue=false)]
        public DateTime? CreateDate { get; set; }

        /// <summary>
        /// description
        /// </summary>
        /// <value>description</value>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// firstName
        /// </summary>
        /// <value>firstName</value>
        [DataMember(Name="first_name", EmitDefaultValue=false)]
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public Guid? Id { get; set; }

        /// <summary>
        /// identificationNumber
        /// </summary>
        /// <value>identificationNumber</value>
        [DataMember(Name="identification_number", EmitDefaultValue=false)]
        public string IdentificationNumber { get; set; }

        /// <summary>
        /// isActive
        /// </summary>
        /// <value>isActive</value>
        [DataMember(Name="is_active", EmitDefaultValue=false)]
        public bool? IsActive { get; set; }

        /// <summary>
        /// isCustomer
        /// </summary>
        /// <value>isCustomer</value>
        [DataMember(Name="is_customer", EmitDefaultValue=false)]
        public bool? IsCustomer { get; set; }

        /// <summary>
        /// isSupplier
        /// </summary>
        /// <value>isSupplier</value>
        [DataMember(Name="is_supplier", EmitDefaultValue=false)]
        public bool? IsSupplier { get; set; }

        /// <summary>
        /// lastName
        /// </summary>
        /// <value>lastName</value>
        [DataMember(Name="last_name", EmitDefaultValue=false)]
        public string LastName { get; set; }

        /// <summary>
        /// metadata
        /// </summary>
        /// <value>metadata</value>
        [DataMember(Name="metadata", EmitDefaultValue=false)]
        public Dictionary<string, string> Metadata { get; private set; }

        /// <summary>
        /// Gets or Sets SecondaryId
        /// </summary>
        [DataMember(Name="secondary_id", EmitDefaultValue=false)]
        public string SecondaryId { get; set; }

        /// <summary>
        /// status
        /// </summary>
        /// <value>status</value>
        [DataMember(Name="status", EmitDefaultValue=false)]
        public string Status { get; set; }

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
            sb.Append("class Contact {\n");
            sb.Append("  Address: ").Append(Address).Append("\n");
            sb.Append("  Balances: ").Append(Balances).Append("\n");
            sb.Append("  BusinessId: ").Append(BusinessId).Append("\n");
            sb.Append("  ClientId: ").Append(ClientId).Append("\n");
            sb.Append("  CompanyName: ").Append(CompanyName).Append("\n");
            sb.Append("  CreateDate: ").Append(CreateDate).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  FirstName: ").Append(FirstName).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  IdentificationNumber: ").Append(IdentificationNumber).Append("\n");
            sb.Append("  IsActive: ").Append(IsActive).Append("\n");
            sb.Append("  IsCustomer: ").Append(IsCustomer).Append("\n");
            sb.Append("  IsSupplier: ").Append(IsSupplier).Append("\n");
            sb.Append("  LastName: ").Append(LastName).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  SecondaryId: ").Append(SecondaryId).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
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
            return this.Equals(input as Contact);
        }

        /// <summary>
        /// Returns true if Contact instances are equal
        /// </summary>
        /// <param name="input">Instance of Contact to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Contact input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Address == input.Address ||
                    this.Address != null &&
                    this.Address.SequenceEqual(input.Address)
                ) && 
                (
                    this.Balances == input.Balances ||
                    (this.Balances != null &&
                    this.Balances.Equals(input.Balances))
                ) && 
                (
                    this.BusinessId == input.BusinessId ||
                    (this.BusinessId != null &&
                    this.BusinessId.Equals(input.BusinessId))
                ) && 
                (
                    this.ClientId == input.ClientId ||
                    (this.ClientId != null &&
                    this.ClientId.Equals(input.ClientId))
                ) && 
                (
                    this.CompanyName == input.CompanyName ||
                    (this.CompanyName != null &&
                    this.CompanyName.Equals(input.CompanyName))
                ) && 
                (
                    this.CreateDate == input.CreateDate ||
                    (this.CreateDate != null &&
                    this.CreateDate.Equals(input.CreateDate))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.FirstName == input.FirstName ||
                    (this.FirstName != null &&
                    this.FirstName.Equals(input.FirstName))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.IdentificationNumber == input.IdentificationNumber ||
                    (this.IdentificationNumber != null &&
                    this.IdentificationNumber.Equals(input.IdentificationNumber))
                ) && 
                (
                    this.IsActive == input.IsActive ||
                    (this.IsActive != null &&
                    this.IsActive.Equals(input.IsActive))
                ) && 
                (
                    this.IsCustomer == input.IsCustomer ||
                    (this.IsCustomer != null &&
                    this.IsCustomer.Equals(input.IsCustomer))
                ) && 
                (
                    this.IsSupplier == input.IsSupplier ||
                    (this.IsSupplier != null &&
                    this.IsSupplier.Equals(input.IsSupplier))
                ) && 
                (
                    this.LastName == input.LastName ||
                    (this.LastName != null &&
                    this.LastName.Equals(input.LastName))
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    this.Metadata != null &&
                    this.Metadata.SequenceEqual(input.Metadata)
                ) && 
                (
                    this.SecondaryId == input.SecondaryId ||
                    (this.SecondaryId != null &&
                    this.SecondaryId.Equals(input.SecondaryId))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
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
                if (this.Address != null)
                    hashCode = hashCode * 59 + this.Address.GetHashCode();
                if (this.Balances != null)
                    hashCode = hashCode * 59 + this.Balances.GetHashCode();
                if (this.BusinessId != null)
                    hashCode = hashCode * 59 + this.BusinessId.GetHashCode();
                if (this.ClientId != null)
                    hashCode = hashCode * 59 + this.ClientId.GetHashCode();
                if (this.CompanyName != null)
                    hashCode = hashCode * 59 + this.CompanyName.GetHashCode();
                if (this.CreateDate != null)
                    hashCode = hashCode * 59 + this.CreateDate.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.FirstName != null)
                    hashCode = hashCode * 59 + this.FirstName.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.IdentificationNumber != null)
                    hashCode = hashCode * 59 + this.IdentificationNumber.GetHashCode();
                if (this.IsActive != null)
                    hashCode = hashCode * 59 + this.IsActive.GetHashCode();
                if (this.IsCustomer != null)
                    hashCode = hashCode * 59 + this.IsCustomer.GetHashCode();
                if (this.IsSupplier != null)
                    hashCode = hashCode * 59 + this.IsSupplier.GetHashCode();
                if (this.LastName != null)
                    hashCode = hashCode * 59 + this.LastName.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.SecondaryId != null)
                    hashCode = hashCode * 59 + this.SecondaryId.GetHashCode();
                if (this.Status != null)
                    hashCode = hashCode * 59 + this.Status.GetHashCode();
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