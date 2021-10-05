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
    /// CardBalanceResponseVO
    /// </summary>
    [DataContract]
    public partial class CardBalanceResponseVO :  IEquatable<CardBalanceResponseVO>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CardBalanceResponseVO" /> class.
        /// </summary>
        /// <param name="message">message.</param>
        /// <param name="nucleusAssetSizesPosted">nucleusAssetSizesPosted.</param>
        /// <param name="nucleusAssetSizesUpdated">nucleusAssetSizesUpdated.</param>
        /// <param name="nucleusCardId">nucleusCardId.</param>
        /// <param name="vendorName">vendorName.</param>
        /// <param name="vendorResponse">vendorResponse.</param>
        public CardBalanceResponseVO(string message = default(string), List<PortfolioAssetSizeLog> nucleusAssetSizesPosted = default(List<PortfolioAssetSizeLog>), List<PortfolioAssetSizeLog> nucleusAssetSizesUpdated = default(List<PortfolioAssetSizeLog>), Guid? nucleusCardId = default(Guid?), string vendorName = default(string), Object vendorResponse = default(Object))
        {
            this.Message = message;
            this.NucleusAssetSizesPosted = nucleusAssetSizesPosted;
            this.NucleusAssetSizesUpdated = nucleusAssetSizesUpdated;
            this.NucleusCardId = nucleusCardId;
            this.VendorName = vendorName;
            this.VendorResponse = vendorResponse;
        }
        
        /// <summary>
        /// Gets or Sets Message
        /// </summary>
        [DataMember(Name="message", EmitDefaultValue=false)]
        public string Message { get; set; }

        /// <summary>
        /// Gets or Sets NucleusAssetSizesPosted
        /// </summary>
        [DataMember(Name="nucleus_asset_sizes_posted", EmitDefaultValue=false)]
        public List<PortfolioAssetSizeLog> NucleusAssetSizesPosted { get; set; }

        /// <summary>
        /// Gets or Sets NucleusAssetSizesUpdated
        /// </summary>
        [DataMember(Name="nucleus_asset_sizes_updated", EmitDefaultValue=false)]
        public List<PortfolioAssetSizeLog> NucleusAssetSizesUpdated { get; set; }

        /// <summary>
        /// Gets or Sets NucleusCardId
        /// </summary>
        [DataMember(Name="nucleus_card_id", EmitDefaultValue=false)]
        public Guid? NucleusCardId { get; set; }

        /// <summary>
        /// Gets or Sets VendorName
        /// </summary>
        [DataMember(Name="vendor_name", EmitDefaultValue=false)]
        public string VendorName { get; set; }

        /// <summary>
        /// Gets or Sets VendorResponse
        /// </summary>
        [DataMember(Name="vendor_response", EmitDefaultValue=false)]
        public Object VendorResponse { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CardBalanceResponseVO {\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("  NucleusAssetSizesPosted: ").Append(NucleusAssetSizesPosted).Append("\n");
            sb.Append("  NucleusAssetSizesUpdated: ").Append(NucleusAssetSizesUpdated).Append("\n");
            sb.Append("  NucleusCardId: ").Append(NucleusCardId).Append("\n");
            sb.Append("  VendorName: ").Append(VendorName).Append("\n");
            sb.Append("  VendorResponse: ").Append(VendorResponse).Append("\n");
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
            return this.Equals(input as CardBalanceResponseVO);
        }

        /// <summary>
        /// Returns true if CardBalanceResponseVO instances are equal
        /// </summary>
        /// <param name="input">Instance of CardBalanceResponseVO to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CardBalanceResponseVO input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Message == input.Message ||
                    (this.Message != null &&
                    this.Message.Equals(input.Message))
                ) && 
                (
                    this.NucleusAssetSizesPosted == input.NucleusAssetSizesPosted ||
                    this.NucleusAssetSizesPosted != null &&
                    this.NucleusAssetSizesPosted.SequenceEqual(input.NucleusAssetSizesPosted)
                ) && 
                (
                    this.NucleusAssetSizesUpdated == input.NucleusAssetSizesUpdated ||
                    this.NucleusAssetSizesUpdated != null &&
                    this.NucleusAssetSizesUpdated.SequenceEqual(input.NucleusAssetSizesUpdated)
                ) && 
                (
                    this.NucleusCardId == input.NucleusCardId ||
                    (this.NucleusCardId != null &&
                    this.NucleusCardId.Equals(input.NucleusCardId))
                ) && 
                (
                    this.VendorName == input.VendorName ||
                    (this.VendorName != null &&
                    this.VendorName.Equals(input.VendorName))
                ) && 
                (
                    this.VendorResponse == input.VendorResponse ||
                    (this.VendorResponse != null &&
                    this.VendorResponse.Equals(input.VendorResponse))
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
                if (this.Message != null)
                    hashCode = hashCode * 59 + this.Message.GetHashCode();
                if (this.NucleusAssetSizesPosted != null)
                    hashCode = hashCode * 59 + this.NucleusAssetSizesPosted.GetHashCode();
                if (this.NucleusAssetSizesUpdated != null)
                    hashCode = hashCode * 59 + this.NucleusAssetSizesUpdated.GetHashCode();
                if (this.NucleusCardId != null)
                    hashCode = hashCode * 59 + this.NucleusCardId.GetHashCode();
                if (this.VendorName != null)
                    hashCode = hashCode * 59 + this.VendorName.GetHashCode();
                if (this.VendorResponse != null)
                    hashCode = hashCode * 59 + this.VendorResponse.GetHashCode();
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