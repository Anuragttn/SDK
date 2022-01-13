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
    /// Institution Object
    /// </summary>
    [DataContract]
    public partial class Institution :  IEquatable<Institution>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Institution" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Institution() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Institution" /> class.
        /// </summary>
        /// <param name="code">code.</param>
        /// <param name="createDate">createDate.</param>
        /// <param name="id">id.</param>
        /// <param name="logoUrlMedium">logo_url_medium.</param>
        /// <param name="logoUrlSmall">logo_url_small.</param>
        /// <param name="name">name (required).</param>
        /// <param name="updateDate">updateDate.</param>
        /// <param name="websiteUrl">website_url.</param>
        public Institution(string code = default(string), DateTime? createDate = default(DateTime?), Guid? id = default(Guid?), string logoUrlMedium = default(string), string logoUrlSmall = default(string), string name = default(string), DateTime? updateDate = default(DateTime?), string websiteUrl = default(string))
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for Institution and cannot be null");
            }
            else
            {
                this.Name = name;
            }
            this.Code = code;
            this.CreateDate = createDate;
            this.Id = id;
            this.LogoUrlMedium = logoUrlMedium;
            this.LogoUrlSmall = logoUrlSmall;
            this.UpdateDate = updateDate;
            this.WebsiteUrl = websiteUrl;
        }
        
        /// <summary>
        /// code
        /// </summary>
        /// <value>code</value>
        [DataMember(Name="code", EmitDefaultValue=false)]
        public string Code { get; set; }

        /// <summary>
        /// Gets or Sets CreateDate
        /// </summary>
        [DataMember(Name="create_date", EmitDefaultValue=false)]
        public DateTime? CreateDate { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public Guid? Id { get; set; }

        /// <summary>
        /// logo_url_medium
        /// </summary>
        /// <value>logo_url_medium</value>
        [DataMember(Name="logo_url_medium", EmitDefaultValue=false)]
        public string LogoUrlMedium { get; set; }

        /// <summary>
        /// logo_url_small
        /// </summary>
        /// <value>logo_url_small</value>
        [DataMember(Name="logo_url_small", EmitDefaultValue=false)]
        public string LogoUrlSmall { get; set; }

        /// <summary>
        /// name
        /// </summary>
        /// <value>name</value>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets UpdateDate
        /// </summary>
        [DataMember(Name="update_date", EmitDefaultValue=false)]
        public DateTime? UpdateDate { get; set; }

        /// <summary>
        /// website_url
        /// </summary>
        /// <value>website_url</value>
        [DataMember(Name="website_url", EmitDefaultValue=false)]
        public string WebsiteUrl { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Institution {\n");
            sb.Append("  Code: ").Append(Code).Append("\n");
            sb.Append("  CreateDate: ").Append(CreateDate).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  LogoUrlMedium: ").Append(LogoUrlMedium).Append("\n");
            sb.Append("  LogoUrlSmall: ").Append(LogoUrlSmall).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  UpdateDate: ").Append(UpdateDate).Append("\n");
            sb.Append("  WebsiteUrl: ").Append(WebsiteUrl).Append("\n");
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
            return this.Equals(input as Institution);
        }

        /// <summary>
        /// Returns true if Institution instances are equal
        /// </summary>
        /// <param name="input">Instance of Institution to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Institution input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Code == input.Code ||
                    (this.Code != null &&
                    this.Code.Equals(input.Code))
                ) && 
                (
                    this.CreateDate == input.CreateDate ||
                    (this.CreateDate != null &&
                    this.CreateDate.Equals(input.CreateDate))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.LogoUrlMedium == input.LogoUrlMedium ||
                    (this.LogoUrlMedium != null &&
                    this.LogoUrlMedium.Equals(input.LogoUrlMedium))
                ) && 
                (
                    this.LogoUrlSmall == input.LogoUrlSmall ||
                    (this.LogoUrlSmall != null &&
                    this.LogoUrlSmall.Equals(input.LogoUrlSmall))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.UpdateDate == input.UpdateDate ||
                    (this.UpdateDate != null &&
                    this.UpdateDate.Equals(input.UpdateDate))
                ) && 
                (
                    this.WebsiteUrl == input.WebsiteUrl ||
                    (this.WebsiteUrl != null &&
                    this.WebsiteUrl.Equals(input.WebsiteUrl))
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
                if (this.Code != null)
                    hashCode = hashCode * 59 + this.Code.GetHashCode();
                if (this.CreateDate != null)
                    hashCode = hashCode * 59 + this.CreateDate.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.LogoUrlMedium != null)
                    hashCode = hashCode * 59 + this.LogoUrlMedium.GetHashCode();
                if (this.LogoUrlSmall != null)
                    hashCode = hashCode * 59 + this.LogoUrlSmall.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.UpdateDate != null)
                    hashCode = hashCode * 59 + this.UpdateDate.GetHashCode();
                if (this.WebsiteUrl != null)
                    hashCode = hashCode * 59 + this.WebsiteUrl.GetHashCode();
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
