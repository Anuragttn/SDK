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
    /// VPortfolioVO
    /// </summary>
    [DataContract]
    public partial class VPortfolioVO :  IEquatable<VPortfolioVO>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="VPortfolioVO" /> class.
        /// </summary>
        /// <param name="goalAssetSizeByPortfolio">goalAssetSizeByPortfolio.</param>
        /// <param name="goalAssetSizeByPortfolioDate">goalAssetSizeByPortfolioDate.</param>
        /// <param name="portfolioId">portfolioId.</param>
        /// <param name="portfolioName">portfolioName.</param>
        public VPortfolioVO(double? goalAssetSizeByPortfolio = default(double?), DateTime? goalAssetSizeByPortfolioDate = default(DateTime?), Guid? portfolioId = default(Guid?), string portfolioName = default(string))
        {
            this.GoalAssetSizeByPortfolio = goalAssetSizeByPortfolio;
            this.GoalAssetSizeByPortfolioDate = goalAssetSizeByPortfolioDate;
            this.PortfolioId = portfolioId;
            this.PortfolioName = portfolioName;
        }
        
        /// <summary>
        /// Gets or Sets GoalAssetSizeByPortfolio
        /// </summary>
        [DataMember(Name="goal_asset_size_by_portfolio", EmitDefaultValue=false)]
        public double? GoalAssetSizeByPortfolio { get; set; }

        /// <summary>
        /// Gets or Sets GoalAssetSizeByPortfolioDate
        /// </summary>
        [DataMember(Name="goal_asset_size_by_portfolio_date", EmitDefaultValue=false)]
        [JsonConverter(typeof(SwaggerDateConverter))]
        public DateTime? GoalAssetSizeByPortfolioDate { get; set; }

        /// <summary>
        /// Gets or Sets PortfolioId
        /// </summary>
        [DataMember(Name="portfolio_id", EmitDefaultValue=false)]
        public Guid? PortfolioId { get; set; }

        /// <summary>
        /// Gets or Sets PortfolioName
        /// </summary>
        [DataMember(Name="portfolio_name", EmitDefaultValue=false)]
        public string PortfolioName { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class VPortfolioVO {\n");
            sb.Append("  GoalAssetSizeByPortfolio: ").Append(GoalAssetSizeByPortfolio).Append("\n");
            sb.Append("  GoalAssetSizeByPortfolioDate: ").Append(GoalAssetSizeByPortfolioDate).Append("\n");
            sb.Append("  PortfolioId: ").Append(PortfolioId).Append("\n");
            sb.Append("  PortfolioName: ").Append(PortfolioName).Append("\n");
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
            return this.Equals(input as VPortfolioVO);
        }

        /// <summary>
        /// Returns true if VPortfolioVO instances are equal
        /// </summary>
        /// <param name="input">Instance of VPortfolioVO to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(VPortfolioVO input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.GoalAssetSizeByPortfolio == input.GoalAssetSizeByPortfolio ||
                    (this.GoalAssetSizeByPortfolio != null &&
                    this.GoalAssetSizeByPortfolio.Equals(input.GoalAssetSizeByPortfolio))
                ) && 
                (
                    this.GoalAssetSizeByPortfolioDate == input.GoalAssetSizeByPortfolioDate ||
                    (this.GoalAssetSizeByPortfolioDate != null &&
                    this.GoalAssetSizeByPortfolioDate.Equals(input.GoalAssetSizeByPortfolioDate))
                ) && 
                (
                    this.PortfolioId == input.PortfolioId ||
                    (this.PortfolioId != null &&
                    this.PortfolioId.Equals(input.PortfolioId))
                ) && 
                (
                    this.PortfolioName == input.PortfolioName ||
                    (this.PortfolioName != null &&
                    this.PortfolioName.Equals(input.PortfolioName))
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
                if (this.GoalAssetSizeByPortfolio != null)
                    hashCode = hashCode * 59 + this.GoalAssetSizeByPortfolio.GetHashCode();
                if (this.GoalAssetSizeByPortfolioDate != null)
                    hashCode = hashCode * 59 + this.GoalAssetSizeByPortfolioDate.GetHashCode();
                if (this.PortfolioId != null)
                    hashCode = hashCode * 59 + this.PortfolioId.GetHashCode();
                if (this.PortfolioName != null)
                    hashCode = hashCode * 59 + this.PortfolioName.GetHashCode();
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