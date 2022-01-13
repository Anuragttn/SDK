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
    /// CardAddress Object
    /// </summary>
    [DataContract]
    public partial class CardAddress :  IEquatable<CardAddress>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CardAddress" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CardAddress() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CardAddress" /> class.
        /// </summary>
        /// <param name="addressLine1">addressLine1 (required).</param>
        /// <param name="addressLine2">addressLine2.</param>
        /// <param name="city">city (required).</param>
        /// <param name="country">country (required).</param>
        /// <param name="postalcode">postalcode.</param>
        /// <param name="state">state (required).</param>
        /// <param name="type">type (required).</param>
        public CardAddress(string addressLine1 = default(string), string addressLine2 = default(string), string city = default(string), string country = default(string), string postalcode = default(string), string state = default(string), string type = default(string))
        {
            // to ensure "addressLine1" is required (not null)
            if (addressLine1 == null)
            {
                throw new InvalidDataException("addressLine1 is a required property for CardAddress and cannot be null");
            }
            else
            {
                this.AddressLine1 = addressLine1;
            }
            // to ensure "city" is required (not null)
            if (city == null)
            {
                throw new InvalidDataException("city is a required property for CardAddress and cannot be null");
            }
            else
            {
                this.City = city;
            }
            // to ensure "country" is required (not null)
            if (country == null)
            {
                throw new InvalidDataException("country is a required property for CardAddress and cannot be null");
            }
            else
            {
                this.Country = country;
            }
            // to ensure "state" is required (not null)
            if (state == null)
            {
                throw new InvalidDataException("state is a required property for CardAddress and cannot be null");
            }
            else
            {
                this.State = state;
            }
            // to ensure "type" is required (not null)
            if (type == null)
            {
                throw new InvalidDataException("type is a required property for CardAddress and cannot be null");
            }
            else
            {
                this.Type = type;
            }
            this.AddressLine2 = addressLine2;
            this.Postalcode = postalcode;
        }
        
        /// <summary>
        /// addressLine1
        /// </summary>
        /// <value>addressLine1</value>
        [DataMember(Name="address_line1", EmitDefaultValue=false)]
        public string AddressLine1 { get; set; }

        /// <summary>
        /// addressLine2
        /// </summary>
        /// <value>addressLine2</value>
        [DataMember(Name="address_line2", EmitDefaultValue=false)]
        public string AddressLine2 { get; set; }

        /// <summary>
        /// city
        /// </summary>
        /// <value>city</value>
        [DataMember(Name="city", EmitDefaultValue=false)]
        public string City { get; set; }

        /// <summary>
        /// country
        /// </summary>
        /// <value>country</value>
        [DataMember(Name="country", EmitDefaultValue=false)]
        public string Country { get; set; }

        /// <summary>
        /// postalcode
        /// </summary>
        /// <value>postalcode</value>
        [DataMember(Name="postalcode", EmitDefaultValue=false)]
        public string Postalcode { get; set; }

        /// <summary>
        /// state
        /// </summary>
        /// <value>state</value>
        [DataMember(Name="state", EmitDefaultValue=false)]
        public string State { get; set; }

        /// <summary>
        /// type
        /// </summary>
        /// <value>type</value>
        [DataMember(Name="type", EmitDefaultValue=false)]
        public string Type { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CardAddress {\n");
            sb.Append("  AddressLine1: ").Append(AddressLine1).Append("\n");
            sb.Append("  AddressLine2: ").Append(AddressLine2).Append("\n");
            sb.Append("  City: ").Append(City).Append("\n");
            sb.Append("  Country: ").Append(Country).Append("\n");
            sb.Append("  Postalcode: ").Append(Postalcode).Append("\n");
            sb.Append("  State: ").Append(State).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
            return this.Equals(input as CardAddress);
        }

        /// <summary>
        /// Returns true if CardAddress instances are equal
        /// </summary>
        /// <param name="input">Instance of CardAddress to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CardAddress input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.AddressLine1 == input.AddressLine1 ||
                    (this.AddressLine1 != null &&
                    this.AddressLine1.Equals(input.AddressLine1))
                ) && 
                (
                    this.AddressLine2 == input.AddressLine2 ||
                    (this.AddressLine2 != null &&
                    this.AddressLine2.Equals(input.AddressLine2))
                ) && 
                (
                    this.City == input.City ||
                    (this.City != null &&
                    this.City.Equals(input.City))
                ) && 
                (
                    this.Country == input.Country ||
                    (this.Country != null &&
                    this.Country.Equals(input.Country))
                ) && 
                (
                    this.Postalcode == input.Postalcode ||
                    (this.Postalcode != null &&
                    this.Postalcode.Equals(input.Postalcode))
                ) && 
                (
                    this.State == input.State ||
                    (this.State != null &&
                    this.State.Equals(input.State))
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
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
                if (this.AddressLine1 != null)
                    hashCode = hashCode * 59 + this.AddressLine1.GetHashCode();
                if (this.AddressLine2 != null)
                    hashCode = hashCode * 59 + this.AddressLine2.GetHashCode();
                if (this.City != null)
                    hashCode = hashCode * 59 + this.City.GetHashCode();
                if (this.Country != null)
                    hashCode = hashCode * 59 + this.Country.GetHashCode();
                if (this.Postalcode != null)
                    hashCode = hashCode * 59 + this.Postalcode.GetHashCode();
                if (this.State != null)
                    hashCode = hashCode * 59 + this.State.GetHashCode();
                if (this.Type != null)
                    hashCode = hashCode * 59 + this.Type.GetHashCode();
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
