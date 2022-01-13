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
    /// OrderReconcileRequest Object
    /// </summary>
    [DataContract]
    public partial class OrderReconcileRequest :  IEquatable<OrderReconcileRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OrderReconcileRequest" /> class.
        /// </summary>
        /// <param name="accountId">accountId.</param>
        /// <param name="nonFractional">nonFractional.</param>
        /// <param name="orderTrackIds">orderTrackIds.</param>
        /// <param name="portfolioId">portfolioId.</param>
        /// <param name="tenantId">tenantId.</param>
        public OrderReconcileRequest(Guid? accountId = default(Guid?), bool? nonFractional = default(bool?), List<Guid?> orderTrackIds = default(List<Guid?>), Guid? portfolioId = default(Guid?), Guid? tenantId = default(Guid?))
        {
            this.AccountId = accountId;
            this.NonFractional = nonFractional;
            this.OrderTrackIds = orderTrackIds;
            this.PortfolioId = portfolioId;
            this.TenantId = tenantId;
        }
        
        /// <summary>
        /// Gets or Sets AccountId
        /// </summary>
        [DataMember(Name="account_id", EmitDefaultValue=false)]
        public Guid? AccountId { get; set; }

        /// <summary>
        /// Gets or Sets NonFractional
        /// </summary>
        [DataMember(Name="non_fractional", EmitDefaultValue=false)]
        public bool? NonFractional { get; set; }

        /// <summary>
        /// Gets or Sets OrderTrackIds
        /// </summary>
        [DataMember(Name="order_track_ids", EmitDefaultValue=false)]
        public List<Guid?> OrderTrackIds { get; set; }

        /// <summary>
        /// Gets or Sets PortfolioId
        /// </summary>
        [DataMember(Name="portfolio_id", EmitDefaultValue=false)]
        public Guid? PortfolioId { get; set; }

        /// <summary>
        /// Gets or Sets TenantId
        /// </summary>
        [DataMember(Name="tenant_id", EmitDefaultValue=false)]
        public Guid? TenantId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class OrderReconcileRequest {\n");
            sb.Append("  AccountId: ").Append(AccountId).Append("\n");
            sb.Append("  NonFractional: ").Append(NonFractional).Append("\n");
            sb.Append("  OrderTrackIds: ").Append(OrderTrackIds).Append("\n");
            sb.Append("  PortfolioId: ").Append(PortfolioId).Append("\n");
            sb.Append("  TenantId: ").Append(TenantId).Append("\n");
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
            return this.Equals(input as OrderReconcileRequest);
        }

        /// <summary>
        /// Returns true if OrderReconcileRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of OrderReconcileRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(OrderReconcileRequest input)
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
                    this.NonFractional == input.NonFractional ||
                    (this.NonFractional != null &&
                    this.NonFractional.Equals(input.NonFractional))
                ) && 
                (
                    this.OrderTrackIds == input.OrderTrackIds ||
                    this.OrderTrackIds != null &&
                    this.OrderTrackIds.SequenceEqual(input.OrderTrackIds)
                ) && 
                (
                    this.PortfolioId == input.PortfolioId ||
                    (this.PortfolioId != null &&
                    this.PortfolioId.Equals(input.PortfolioId))
                ) && 
                (
                    this.TenantId == input.TenantId ||
                    (this.TenantId != null &&
                    this.TenantId.Equals(input.TenantId))
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
                if (this.NonFractional != null)
                    hashCode = hashCode * 59 + this.NonFractional.GetHashCode();
                if (this.OrderTrackIds != null)
                    hashCode = hashCode * 59 + this.OrderTrackIds.GetHashCode();
                if (this.PortfolioId != null)
                    hashCode = hashCode * 59 + this.PortfolioId.GetHashCode();
                if (this.TenantId != null)
                    hashCode = hashCode * 59 + this.TenantId.GetHashCode();
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
