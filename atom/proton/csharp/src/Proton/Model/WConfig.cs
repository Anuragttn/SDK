/* 
 * Hydrogen Proton API
 *
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.9.2
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
using SwaggerDateConverter = Proton.Client.SwaggerDateConverter;

namespace Proton.ModelEntity
{
    /// <summary>
    /// WConfig
    /// </summary>
    [DataContract]
    public partial class WConfig :  IEquatable<WConfig>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="WConfig" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected WConfig() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="WConfig" /> class.
        /// </summary>
        /// <param name="wMinMinor">wMinMinor (required).</param>
        /// <param name="wMinMajor">wMinMajor (required).</param>
        /// <param name="cashAmount">cashAmount (required).</param>
        /// <param name="wMaxMajor">wMaxMajor (required).</param>
        /// <param name="wMaxMinor">wMaxMinor (required).</param>
        public WConfig(float? wMinMinor = default(float?), float? wMinMajor = default(float?), float? cashAmount = default(float?), float? wMaxMajor = default(float?), float? wMaxMinor = default(float?))
        {
            // to ensure "wMinMinor" is required (not null)
            if (wMinMinor == null)
            {
                throw new InvalidDataException("wMinMinor is a required property for WConfig and cannot be null");
            }
            else
            {
                this.WMinMinor = wMinMinor;
            }
            // to ensure "wMinMajor" is required (not null)
            if (wMinMajor == null)
            {
                throw new InvalidDataException("wMinMajor is a required property for WConfig and cannot be null");
            }
            else
            {
                this.WMinMajor = wMinMajor;
            }
            // to ensure "cashAmount" is required (not null)
            if (cashAmount == null)
            {
                throw new InvalidDataException("cashAmount is a required property for WConfig and cannot be null");
            }
            else
            {
                this.CashAmount = cashAmount;
            }
            // to ensure "wMaxMajor" is required (not null)
            if (wMaxMajor == null)
            {
                throw new InvalidDataException("wMaxMajor is a required property for WConfig and cannot be null");
            }
            else
            {
                this.WMaxMajor = wMaxMajor;
            }
            // to ensure "wMaxMinor" is required (not null)
            if (wMaxMinor == null)
            {
                throw new InvalidDataException("wMaxMinor is a required property for WConfig and cannot be null");
            }
            else
            {
                this.WMaxMinor = wMaxMinor;
            }
        }
        
        /// <summary>
        /// Gets or Sets WMinMinor
        /// </summary>
        [DataMember(Name="w_min_minor", EmitDefaultValue=false)]
        public float? WMinMinor { get; set; }

        /// <summary>
        /// Gets or Sets WMinMajor
        /// </summary>
        [DataMember(Name="w_min_major", EmitDefaultValue=false)]
        public float? WMinMajor { get; set; }

        /// <summary>
        /// Gets or Sets CashAmount
        /// </summary>
        [DataMember(Name="cash_amount", EmitDefaultValue=false)]
        public float? CashAmount { get; set; }

        /// <summary>
        /// Gets or Sets WMaxMajor
        /// </summary>
        [DataMember(Name="w_max_major", EmitDefaultValue=false)]
        public float? WMaxMajor { get; set; }

        /// <summary>
        /// Gets or Sets WMaxMinor
        /// </summary>
        [DataMember(Name="w_max_minor", EmitDefaultValue=false)]
        public float? WMaxMinor { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class WConfig {\n");
            sb.Append("  WMinMinor: ").Append(WMinMinor).Append("\n");
            sb.Append("  WMinMajor: ").Append(WMinMajor).Append("\n");
            sb.Append("  CashAmount: ").Append(CashAmount).Append("\n");
            sb.Append("  WMaxMajor: ").Append(WMaxMajor).Append("\n");
            sb.Append("  WMaxMinor: ").Append(WMaxMinor).Append("\n");
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
            return this.Equals(input as WConfig);
        }

        /// <summary>
        /// Returns true if WConfig instances are equal
        /// </summary>
        /// <param name="input">Instance of WConfig to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(WConfig input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.WMinMinor == input.WMinMinor ||
                    (this.WMinMinor != null &&
                    this.WMinMinor.Equals(input.WMinMinor))
                ) && 
                (
                    this.WMinMajor == input.WMinMajor ||
                    (this.WMinMajor != null &&
                    this.WMinMajor.Equals(input.WMinMajor))
                ) && 
                (
                    this.CashAmount == input.CashAmount ||
                    (this.CashAmount != null &&
                    this.CashAmount.Equals(input.CashAmount))
                ) && 
                (
                    this.WMaxMajor == input.WMaxMajor ||
                    (this.WMaxMajor != null &&
                    this.WMaxMajor.Equals(input.WMaxMajor))
                ) && 
                (
                    this.WMaxMinor == input.WMaxMinor ||
                    (this.WMaxMinor != null &&
                    this.WMaxMinor.Equals(input.WMaxMinor))
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
                if (this.WMinMinor != null)
                    hashCode = hashCode * 59 + this.WMinMinor.GetHashCode();
                if (this.WMinMajor != null)
                    hashCode = hashCode * 59 + this.WMinMajor.GetHashCode();
                if (this.CashAmount != null)
                    hashCode = hashCode * 59 + this.CashAmount.GetHashCode();
                if (this.WMaxMajor != null)
                    hashCode = hashCode * 59 + this.WMaxMajor.GetHashCode();
                if (this.WMaxMinor != null)
                    hashCode = hashCode * 59 + this.WMaxMinor.GetHashCode();
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
            // WMinMinor (float?) maximum
            if(this.WMinMinor > (float?)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for WMinMinor, must be a value less than or equal to 1.", new [] { "WMinMinor" });
            }

            // WMinMinor (float?) minimum
            if(this.WMinMinor < (float?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for WMinMinor, must be a value greater than or equal to 0.", new [] { "WMinMinor" });
            }

            // WMinMajor (float?) maximum
            if(this.WMinMajor > (float?)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for WMinMajor, must be a value less than or equal to 1.", new [] { "WMinMajor" });
            }

            // WMinMajor (float?) minimum
            if(this.WMinMajor < (float?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for WMinMajor, must be a value greater than or equal to 0.", new [] { "WMinMajor" });
            }

            // CashAmount (float?) maximum
            if(this.CashAmount > (float?)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for CashAmount, must be a value less than or equal to 1.", new [] { "CashAmount" });
            }

            // CashAmount (float?) minimum
            if(this.CashAmount < (float?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for CashAmount, must be a value greater than or equal to 0.", new [] { "CashAmount" });
            }

            // WMaxMajor (float?) maximum
            if(this.WMaxMajor > (float?)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for WMaxMajor, must be a value less than or equal to 1.", new [] { "WMaxMajor" });
            }

            // WMaxMajor (float?) minimum
            if(this.WMaxMajor < (float?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for WMaxMajor, must be a value greater than or equal to 0.", new [] { "WMaxMajor" });
            }

            // WMaxMinor (float?) maximum
            if(this.WMaxMinor > (float?)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for WMaxMinor, must be a value less than or equal to 1.", new [] { "WMaxMinor" });
            }

            // WMaxMinor (float?) minimum
            if(this.WMaxMinor < (float?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for WMaxMinor, must be a value greater than or equal to 0.", new [] { "WMaxMinor" });
            }

            yield break;
        }
    }

}
