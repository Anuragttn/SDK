/* 
 * Hydrogen Admin API
 *
 * The Hydrogen Admin API
 *
 * OpenAPI spec version: 1.0.0
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
using SwaggerDateConverter = IO.Swagger.Client.SwaggerDateConverter;

namespace IO.Swagger.Model
{
    /// <summary>
    /// Employment Object
    /// </summary>
    [DataContract]
    public partial class Employment :  IEquatable<Employment>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Employment" /> class.
        /// </summary>
        /// <param name="employer">employer.</param>
        /// <param name="employmentStatus">employmentStatus.</param>
        /// <param name="jobTitle">jobTitle.</param>
        /// <param name="occupation">occupation.</param>
        public Employment(string employer = default(string), string employmentStatus = default(string), string jobTitle = default(string), string occupation = default(string))
        {
            this.Employer = employer;
            this.EmploymentStatus = employmentStatus;
            this.JobTitle = jobTitle;
            this.Occupation = occupation;
        }
        
        /// <summary>
        /// employer
        /// </summary>
        /// <value>employer</value>
        [DataMember(Name="employer", EmitDefaultValue=false)]
        public string Employer { get; set; }

        /// <summary>
        /// employmentStatus
        /// </summary>
        /// <value>employmentStatus</value>
        [DataMember(Name="employment_status", EmitDefaultValue=false)]
        public string EmploymentStatus { get; set; }

        /// <summary>
        /// jobTitle
        /// </summary>
        /// <value>jobTitle</value>
        [DataMember(Name="job_title", EmitDefaultValue=false)]
        public string JobTitle { get; set; }

        /// <summary>
        /// occupation
        /// </summary>
        /// <value>occupation</value>
        [DataMember(Name="occupation", EmitDefaultValue=false)]
        public string Occupation { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Employment {\n");
            sb.Append("  Employer: ").Append(Employer).Append("\n");
            sb.Append("  EmploymentStatus: ").Append(EmploymentStatus).Append("\n");
            sb.Append("  JobTitle: ").Append(JobTitle).Append("\n");
            sb.Append("  Occupation: ").Append(Occupation).Append("\n");
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
            return this.Equals(input as Employment);
        }

        /// <summary>
        /// Returns true if Employment instances are equal
        /// </summary>
        /// <param name="input">Instance of Employment to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Employment input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Employer == input.Employer ||
                    (this.Employer != null &&
                    this.Employer.Equals(input.Employer))
                ) && 
                (
                    this.EmploymentStatus == input.EmploymentStatus ||
                    (this.EmploymentStatus != null &&
                    this.EmploymentStatus.Equals(input.EmploymentStatus))
                ) && 
                (
                    this.JobTitle == input.JobTitle ||
                    (this.JobTitle != null &&
                    this.JobTitle.Equals(input.JobTitle))
                ) && 
                (
                    this.Occupation == input.Occupation ||
                    (this.Occupation != null &&
                    this.Occupation.Equals(input.Occupation))
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
                if (this.Employer != null)
                    hashCode = hashCode * 59 + this.Employer.GetHashCode();
                if (this.EmploymentStatus != null)
                    hashCode = hashCode * 59 + this.EmploymentStatus.GetHashCode();
                if (this.JobTitle != null)
                    hashCode = hashCode * 59 + this.JobTitle.GetHashCode();
                if (this.Occupation != null)
                    hashCode = hashCode * 59 + this.Occupation.GetHashCode();
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
