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
    /// SecuritiesComposition
    /// </summary>
    [DataContract]
    public partial class SecuritiesComposition :  IEquatable<SecuritiesComposition>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SecuritiesComposition" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected SecuritiesComposition() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="SecuritiesComposition" /> class.
        /// </summary>
        /// <param name="componentId">Securities Composition component Id (required).</param>
        /// <param name="endDate">Securities Composition End Date (required).</param>
        /// <param name="startDate">Securities Composition Start Date (required).</param>
        /// <param name="weight">Securities Composition weight (required).</param>
        public SecuritiesComposition(Guid? componentId = default(Guid?), DateTime? endDate = default(DateTime?), DateTime? startDate = default(DateTime?), double? weight = default(double?))
        {
            // to ensure "componentId" is required (not null)
            if (componentId == null)
            {
                throw new InvalidDataException("componentId is a required property for SecuritiesComposition and cannot be null");
            }
            else
            {
                this.ComponentId = componentId;
            }
            // to ensure "endDate" is required (not null)
            if (endDate == null)
            {
                throw new InvalidDataException("endDate is a required property for SecuritiesComposition and cannot be null");
            }
            else
            {
                this.EndDate = endDate;
            }
            // to ensure "startDate" is required (not null)
            if (startDate == null)
            {
                throw new InvalidDataException("startDate is a required property for SecuritiesComposition and cannot be null");
            }
            else
            {
                this.StartDate = startDate;
            }
            // to ensure "weight" is required (not null)
            if (weight == null)
            {
                throw new InvalidDataException("weight is a required property for SecuritiesComposition and cannot be null");
            }
            else
            {
                this.Weight = weight;
            }
        }
        
        /// <summary>
        /// Securities Composition component Id
        /// </summary>
        /// <value>Securities Composition component Id</value>
        [DataMember(Name="component_id", EmitDefaultValue=false)]
        public Guid? ComponentId { get; set; }

        /// <summary>
        /// Securities Composition End Date
        /// </summary>
        /// <value>Securities Composition End Date</value>
        [DataMember(Name="end_date", EmitDefaultValue=false)]
        [JsonConverter(typeof(SwaggerDateConverter))]
        public DateTime? EndDate { get; set; }

        /// <summary>
        /// Securities Composition Start Date
        /// </summary>
        /// <value>Securities Composition Start Date</value>
        [DataMember(Name="start_date", EmitDefaultValue=false)]
        [JsonConverter(typeof(SwaggerDateConverter))]
        public DateTime? StartDate { get; set; }

        /// <summary>
        /// Securities Composition weight
        /// </summary>
        /// <value>Securities Composition weight</value>
        [DataMember(Name="weight", EmitDefaultValue=false)]
        public double? Weight { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SecuritiesComposition {\n");
            sb.Append("  ComponentId: ").Append(ComponentId).Append("\n");
            sb.Append("  EndDate: ").Append(EndDate).Append("\n");
            sb.Append("  StartDate: ").Append(StartDate).Append("\n");
            sb.Append("  Weight: ").Append(Weight).Append("\n");
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
            return this.Equals(input as SecuritiesComposition);
        }

        /// <summary>
        /// Returns true if SecuritiesComposition instances are equal
        /// </summary>
        /// <param name="input">Instance of SecuritiesComposition to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SecuritiesComposition input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ComponentId == input.ComponentId ||
                    (this.ComponentId != null &&
                    this.ComponentId.Equals(input.ComponentId))
                ) && 
                (
                    this.EndDate == input.EndDate ||
                    (this.EndDate != null &&
                    this.EndDate.Equals(input.EndDate))
                ) && 
                (
                    this.StartDate == input.StartDate ||
                    (this.StartDate != null &&
                    this.StartDate.Equals(input.StartDate))
                ) && 
                (
                    this.Weight == input.Weight ||
                    (this.Weight != null &&
                    this.Weight.Equals(input.Weight))
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
                if (this.ComponentId != null)
                    hashCode = hashCode * 59 + this.ComponentId.GetHashCode();
                if (this.EndDate != null)
                    hashCode = hashCode * 59 + this.EndDate.GetHashCode();
                if (this.StartDate != null)
                    hashCode = hashCode * 59 + this.StartDate.GetHashCode();
                if (this.Weight != null)
                    hashCode = hashCode * 59 + this.Weight.GetHashCode();
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
