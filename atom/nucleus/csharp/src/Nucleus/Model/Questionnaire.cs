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
    /// Questionnaire Object
    /// </summary>
    [DataContract]
    public partial class Questionnaire :  IEquatable<Questionnaire>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Questionnaire" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Questionnaire() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Questionnaire" /> class.
        /// </summary>
        /// <param name="createDate">createDate.</param>
        /// <param name="decisionTreeId">decision_tree_id.</param>
        /// <param name="description">description.</param>
        /// <param name="id">id.</param>
        /// <param name="isActive">is_active.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="name">name (required).</param>
        /// <param name="questions">questions.</param>
        /// <param name="secondaryId">secondaryId.</param>
        /// <param name="type">type.</param>
        /// <param name="updateDate">updateDate.</param>
        public Questionnaire(DateTime? createDate = default(DateTime?), Guid? decisionTreeId = default(Guid?), string description = default(string), Guid? id = default(Guid?), bool? isActive = default(bool?), Dictionary<string, string> metadata = default(Dictionary<string, string>), string name = default(string), List<Question> questions = default(List<Question>), string secondaryId = default(string), string type = default(string), DateTime? updateDate = default(DateTime?))
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for Questionnaire and cannot be null");
            }
            else
            {
                this.Name = name;
            }
            this.CreateDate = createDate;
            this.DecisionTreeId = decisionTreeId;
            this.Description = description;
            this.Id = id;
            this.IsActive = isActive;
            this.Metadata = metadata;
            this.Questions = questions;
            this.SecondaryId = secondaryId;
            this.Type = type;
            this.UpdateDate = updateDate;
        }
        
        /// <summary>
        /// Gets or Sets CreateDate
        /// </summary>
        [DataMember(Name="create_date", EmitDefaultValue=false)]
        public DateTime? CreateDate { get; set; }

        /// <summary>
        /// decision_tree_id
        /// </summary>
        /// <value>decision_tree_id</value>
        [DataMember(Name="decision_tree_id", EmitDefaultValue=false)]
        public Guid? DecisionTreeId { get; set; }

        /// <summary>
        /// description
        /// </summary>
        /// <value>description</value>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public Guid? Id { get; set; }

        /// <summary>
        /// is_active
        /// </summary>
        /// <value>is_active</value>
        [DataMember(Name="is_active", EmitDefaultValue=false)]
        public bool? IsActive { get; set; }

        /// <summary>
        /// metadata
        /// </summary>
        /// <value>metadata</value>
        [DataMember(Name="metadata", EmitDefaultValue=false)]
        public Dictionary<string, string> Metadata { get; set; }

        /// <summary>
        /// name
        /// </summary>
        /// <value>name</value>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Questions
        /// </summary>
        [DataMember(Name="questions", EmitDefaultValue=false)]
        public List<Question> Questions { get; set; }

        /// <summary>
        /// Gets or Sets SecondaryId
        /// </summary>
        [DataMember(Name="secondary_id", EmitDefaultValue=false)]
        public string SecondaryId { get; set; }

        /// <summary>
        /// type
        /// </summary>
        /// <value>type</value>
        [DataMember(Name="type", EmitDefaultValue=false)]
        public string Type { get; set; }

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
            sb.Append("class Questionnaire {\n");
            sb.Append("  CreateDate: ").Append(CreateDate).Append("\n");
            sb.Append("  DecisionTreeId: ").Append(DecisionTreeId).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  IsActive: ").Append(IsActive).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Questions: ").Append(Questions).Append("\n");
            sb.Append("  SecondaryId: ").Append(SecondaryId).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
            return this.Equals(input as Questionnaire);
        }

        /// <summary>
        /// Returns true if Questionnaire instances are equal
        /// </summary>
        /// <param name="input">Instance of Questionnaire to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Questionnaire input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CreateDate == input.CreateDate ||
                    (this.CreateDate != null &&
                    this.CreateDate.Equals(input.CreateDate))
                ) && 
                (
                    this.DecisionTreeId == input.DecisionTreeId ||
                    (this.DecisionTreeId != null &&
                    this.DecisionTreeId.Equals(input.DecisionTreeId))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.IsActive == input.IsActive ||
                    (this.IsActive != null &&
                    this.IsActive.Equals(input.IsActive))
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    this.Metadata != null &&
                    this.Metadata.SequenceEqual(input.Metadata)
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Questions == input.Questions ||
                    this.Questions != null &&
                    this.Questions.SequenceEqual(input.Questions)
                ) && 
                (
                    this.SecondaryId == input.SecondaryId ||
                    (this.SecondaryId != null &&
                    this.SecondaryId.Equals(input.SecondaryId))
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
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
                if (this.CreateDate != null)
                    hashCode = hashCode * 59 + this.CreateDate.GetHashCode();
                if (this.DecisionTreeId != null)
                    hashCode = hashCode * 59 + this.DecisionTreeId.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.IsActive != null)
                    hashCode = hashCode * 59 + this.IsActive.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Questions != null)
                    hashCode = hashCode * 59 + this.Questions.GetHashCode();
                if (this.SecondaryId != null)
                    hashCode = hashCode * 59 + this.SecondaryId.GetHashCode();
                if (this.Type != null)
                    hashCode = hashCode * 59 + this.Type.GetHashCode();
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