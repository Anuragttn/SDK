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
    /// LifeInsuranceNeedsCalculatorRequest
    /// </summary>
    [DataContract]
    public partial class LifeInsuranceNeedsCalculatorRequest :  IEquatable<LifeInsuranceNeedsCalculatorRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LifeInsuranceNeedsCalculatorRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected LifeInsuranceNeedsCalculatorRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="LifeInsuranceNeedsCalculatorRequest" /> class.
        /// </summary>
        /// <param name="clientId">clientId.</param>
        /// <param name="beneficiaryBequestConfig">beneficiaryBequestConfig.</param>
        /// <param name="educationInflationRate">educationInflationRate (default to 0.0F).</param>
        /// <param name="marginOfError">marginOfError (default to 0.0F).</param>
        /// <param name="liquidAssets">liquidAssets.</param>
        /// <param name="taxRate">taxRate (default to 0.0F).</param>
        /// <param name="otherDebt">otherDebt.</param>
        /// <param name="endOfLifeExpenses">endOfLifeExpenses.</param>
        /// <param name="existingLifeInsurance">existingLifeInsurance.</param>
        /// <param name="incomeConfig">incomeConfig.</param>
        /// <param name="mortgageBalance">mortgageBalance.</param>
        /// <param name="benefitAmountRounding">benefitAmountRounding (default to 0).</param>
        /// <param name="interestRate">interestRate (required).</param>
        /// <param name="childrenEducationConfig">childrenEducationConfig.</param>
        /// <param name="generalInflationRate">generalInflationRate (default to 0.0F).</param>
        public LifeInsuranceNeedsCalculatorRequest(Guid? clientId = default(Guid?), List<BeneficiaryBequestConfig> beneficiaryBequestConfig = default(List<BeneficiaryBequestConfig>), float? educationInflationRate = 0.0F, float? marginOfError = 0.0F, decimal? liquidAssets = default(decimal?), float? taxRate = 0.0F, decimal? otherDebt = default(decimal?), decimal? endOfLifeExpenses = default(decimal?), decimal? existingLifeInsurance = default(decimal?), List<IncomeConfig> incomeConfig = default(List<IncomeConfig>), decimal? mortgageBalance = default(decimal?), int? benefitAmountRounding = 0, float? interestRate = default(float?), List<ChildrenEducationConfig> childrenEducationConfig = default(List<ChildrenEducationConfig>), float? generalInflationRate = 0.0F)
        {
            // to ensure "interestRate" is required (not null)
            if (interestRate == null)
            {
                throw new InvalidDataException("interestRate is a required property for LifeInsuranceNeedsCalculatorRequest and cannot be null");
            }
            else
            {
                this.InterestRate = interestRate;
            }
            this.ClientId = clientId;
            this.BeneficiaryBequestConfig = beneficiaryBequestConfig;
            // use default value if no "educationInflationRate" provided
            if (educationInflationRate == null)
            {
                this.EducationInflationRate = 0.0F;
            }
            else
            {
                this.EducationInflationRate = educationInflationRate;
            }
            // use default value if no "marginOfError" provided
            if (marginOfError == null)
            {
                this.MarginOfError = 0.0F;
            }
            else
            {
                this.MarginOfError = marginOfError;
            }
            this.LiquidAssets = liquidAssets;
            // use default value if no "taxRate" provided
            if (taxRate == null)
            {
                this.TaxRate = 0.0F;
            }
            else
            {
                this.TaxRate = taxRate;
            }
            this.OtherDebt = otherDebt;
            this.EndOfLifeExpenses = endOfLifeExpenses;
            this.ExistingLifeInsurance = existingLifeInsurance;
            this.IncomeConfig = incomeConfig;
            this.MortgageBalance = mortgageBalance;
            // use default value if no "benefitAmountRounding" provided
            if (benefitAmountRounding == null)
            {
                this.BenefitAmountRounding = 0;
            }
            else
            {
                this.BenefitAmountRounding = benefitAmountRounding;
            }
            this.ChildrenEducationConfig = childrenEducationConfig;
            // use default value if no "generalInflationRate" provided
            if (generalInflationRate == null)
            {
                this.GeneralInflationRate = 0.0F;
            }
            else
            {
                this.GeneralInflationRate = generalInflationRate;
            }
        }
        
        /// <summary>
        /// Gets or Sets ClientId
        /// </summary>
        [DataMember(Name="client_id", EmitDefaultValue=false)]
        public Guid? ClientId { get; set; }

        /// <summary>
        /// Gets or Sets BeneficiaryBequestConfig
        /// </summary>
        [DataMember(Name="beneficiary_bequest_config", EmitDefaultValue=false)]
        public List<BeneficiaryBequestConfig> BeneficiaryBequestConfig { get; set; }

        /// <summary>
        /// Gets or Sets EducationInflationRate
        /// </summary>
        [DataMember(Name="education_inflation_rate", EmitDefaultValue=false)]
        public float? EducationInflationRate { get; set; }

        /// <summary>
        /// Gets or Sets MarginOfError
        /// </summary>
        [DataMember(Name="margin_of_error", EmitDefaultValue=false)]
        public float? MarginOfError { get; set; }

        /// <summary>
        /// Gets or Sets LiquidAssets
        /// </summary>
        [DataMember(Name="liquid_assets", EmitDefaultValue=false)]
        public decimal? LiquidAssets { get; set; }

        /// <summary>
        /// Gets or Sets TaxRate
        /// </summary>
        [DataMember(Name="tax_rate", EmitDefaultValue=false)]
        public float? TaxRate { get; set; }

        /// <summary>
        /// Gets or Sets OtherDebt
        /// </summary>
        [DataMember(Name="other_debt", EmitDefaultValue=false)]
        public decimal? OtherDebt { get; set; }

        /// <summary>
        /// Gets or Sets EndOfLifeExpenses
        /// </summary>
        [DataMember(Name="end_of_life_expenses", EmitDefaultValue=false)]
        public decimal? EndOfLifeExpenses { get; set; }

        /// <summary>
        /// Gets or Sets ExistingLifeInsurance
        /// </summary>
        [DataMember(Name="existing_life_insurance", EmitDefaultValue=false)]
        public decimal? ExistingLifeInsurance { get; set; }

        /// <summary>
        /// Gets or Sets IncomeConfig
        /// </summary>
        [DataMember(Name="income_config", EmitDefaultValue=false)]
        public List<IncomeConfig> IncomeConfig { get; set; }

        /// <summary>
        /// Gets or Sets MortgageBalance
        /// </summary>
        [DataMember(Name="mortgage_balance", EmitDefaultValue=false)]
        public decimal? MortgageBalance { get; set; }

        /// <summary>
        /// Gets or Sets BenefitAmountRounding
        /// </summary>
        [DataMember(Name="benefit_amount_rounding", EmitDefaultValue=false)]
        public int? BenefitAmountRounding { get; set; }

        /// <summary>
        /// Gets or Sets InterestRate
        /// </summary>
        [DataMember(Name="interest_rate", EmitDefaultValue=false)]
        public float? InterestRate { get; set; }

        /// <summary>
        /// Gets or Sets ChildrenEducationConfig
        /// </summary>
        [DataMember(Name="children_education_config", EmitDefaultValue=false)]
        public List<ChildrenEducationConfig> ChildrenEducationConfig { get; set; }

        /// <summary>
        /// Gets or Sets GeneralInflationRate
        /// </summary>
        [DataMember(Name="general_inflation_rate", EmitDefaultValue=false)]
        public float? GeneralInflationRate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class LifeInsuranceNeedsCalculatorRequest {\n");
            sb.Append("  ClientId: ").Append(ClientId).Append("\n");
            sb.Append("  BeneficiaryBequestConfig: ").Append(BeneficiaryBequestConfig).Append("\n");
            sb.Append("  EducationInflationRate: ").Append(EducationInflationRate).Append("\n");
            sb.Append("  MarginOfError: ").Append(MarginOfError).Append("\n");
            sb.Append("  LiquidAssets: ").Append(LiquidAssets).Append("\n");
            sb.Append("  TaxRate: ").Append(TaxRate).Append("\n");
            sb.Append("  OtherDebt: ").Append(OtherDebt).Append("\n");
            sb.Append("  EndOfLifeExpenses: ").Append(EndOfLifeExpenses).Append("\n");
            sb.Append("  ExistingLifeInsurance: ").Append(ExistingLifeInsurance).Append("\n");
            sb.Append("  IncomeConfig: ").Append(IncomeConfig).Append("\n");
            sb.Append("  MortgageBalance: ").Append(MortgageBalance).Append("\n");
            sb.Append("  BenefitAmountRounding: ").Append(BenefitAmountRounding).Append("\n");
            sb.Append("  InterestRate: ").Append(InterestRate).Append("\n");
            sb.Append("  ChildrenEducationConfig: ").Append(ChildrenEducationConfig).Append("\n");
            sb.Append("  GeneralInflationRate: ").Append(GeneralInflationRate).Append("\n");
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
            return this.Equals(input as LifeInsuranceNeedsCalculatorRequest);
        }

        /// <summary>
        /// Returns true if LifeInsuranceNeedsCalculatorRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of LifeInsuranceNeedsCalculatorRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(LifeInsuranceNeedsCalculatorRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ClientId == input.ClientId ||
                    (this.ClientId != null &&
                    this.ClientId.Equals(input.ClientId))
                ) && 
                (
                    this.BeneficiaryBequestConfig == input.BeneficiaryBequestConfig ||
                    this.BeneficiaryBequestConfig != null &&
                    this.BeneficiaryBequestConfig.SequenceEqual(input.BeneficiaryBequestConfig)
                ) && 
                (
                    this.EducationInflationRate == input.EducationInflationRate ||
                    (this.EducationInflationRate != null &&
                    this.EducationInflationRate.Equals(input.EducationInflationRate))
                ) && 
                (
                    this.MarginOfError == input.MarginOfError ||
                    (this.MarginOfError != null &&
                    this.MarginOfError.Equals(input.MarginOfError))
                ) && 
                (
                    this.LiquidAssets == input.LiquidAssets ||
                    (this.LiquidAssets != null &&
                    this.LiquidAssets.Equals(input.LiquidAssets))
                ) && 
                (
                    this.TaxRate == input.TaxRate ||
                    (this.TaxRate != null &&
                    this.TaxRate.Equals(input.TaxRate))
                ) && 
                (
                    this.OtherDebt == input.OtherDebt ||
                    (this.OtherDebt != null &&
                    this.OtherDebt.Equals(input.OtherDebt))
                ) && 
                (
                    this.EndOfLifeExpenses == input.EndOfLifeExpenses ||
                    (this.EndOfLifeExpenses != null &&
                    this.EndOfLifeExpenses.Equals(input.EndOfLifeExpenses))
                ) && 
                (
                    this.ExistingLifeInsurance == input.ExistingLifeInsurance ||
                    (this.ExistingLifeInsurance != null &&
                    this.ExistingLifeInsurance.Equals(input.ExistingLifeInsurance))
                ) && 
                (
                    this.IncomeConfig == input.IncomeConfig ||
                    this.IncomeConfig != null &&
                    this.IncomeConfig.SequenceEqual(input.IncomeConfig)
                ) && 
                (
                    this.MortgageBalance == input.MortgageBalance ||
                    (this.MortgageBalance != null &&
                    this.MortgageBalance.Equals(input.MortgageBalance))
                ) && 
                (
                    this.BenefitAmountRounding == input.BenefitAmountRounding ||
                    (this.BenefitAmountRounding != null &&
                    this.BenefitAmountRounding.Equals(input.BenefitAmountRounding))
                ) && 
                (
                    this.InterestRate == input.InterestRate ||
                    (this.InterestRate != null &&
                    this.InterestRate.Equals(input.InterestRate))
                ) && 
                (
                    this.ChildrenEducationConfig == input.ChildrenEducationConfig ||
                    this.ChildrenEducationConfig != null &&
                    this.ChildrenEducationConfig.SequenceEqual(input.ChildrenEducationConfig)
                ) && 
                (
                    this.GeneralInflationRate == input.GeneralInflationRate ||
                    (this.GeneralInflationRate != null &&
                    this.GeneralInflationRate.Equals(input.GeneralInflationRate))
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
                if (this.ClientId != null)
                    hashCode = hashCode * 59 + this.ClientId.GetHashCode();
                if (this.BeneficiaryBequestConfig != null)
                    hashCode = hashCode * 59 + this.BeneficiaryBequestConfig.GetHashCode();
                if (this.EducationInflationRate != null)
                    hashCode = hashCode * 59 + this.EducationInflationRate.GetHashCode();
                if (this.MarginOfError != null)
                    hashCode = hashCode * 59 + this.MarginOfError.GetHashCode();
                if (this.LiquidAssets != null)
                    hashCode = hashCode * 59 + this.LiquidAssets.GetHashCode();
                if (this.TaxRate != null)
                    hashCode = hashCode * 59 + this.TaxRate.GetHashCode();
                if (this.OtherDebt != null)
                    hashCode = hashCode * 59 + this.OtherDebt.GetHashCode();
                if (this.EndOfLifeExpenses != null)
                    hashCode = hashCode * 59 + this.EndOfLifeExpenses.GetHashCode();
                if (this.ExistingLifeInsurance != null)
                    hashCode = hashCode * 59 + this.ExistingLifeInsurance.GetHashCode();
                if (this.IncomeConfig != null)
                    hashCode = hashCode * 59 + this.IncomeConfig.GetHashCode();
                if (this.MortgageBalance != null)
                    hashCode = hashCode * 59 + this.MortgageBalance.GetHashCode();
                if (this.BenefitAmountRounding != null)
                    hashCode = hashCode * 59 + this.BenefitAmountRounding.GetHashCode();
                if (this.InterestRate != null)
                    hashCode = hashCode * 59 + this.InterestRate.GetHashCode();
                if (this.ChildrenEducationConfig != null)
                    hashCode = hashCode * 59 + this.ChildrenEducationConfig.GetHashCode();
                if (this.GeneralInflationRate != null)
                    hashCode = hashCode * 59 + this.GeneralInflationRate.GetHashCode();
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
            // EducationInflationRate (float?) minimum
            if(this.EducationInflationRate < (float?)-1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for EducationInflationRate, must be a value greater than or equal to -1.", new [] { "EducationInflationRate" });
            }

            // MarginOfError (float?) minimum
            if(this.MarginOfError < (float?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for MarginOfError, must be a value greater than or equal to 0.", new [] { "MarginOfError" });
            }

            // LiquidAssets (decimal?) minimum
            if(this.LiquidAssets < (decimal?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for LiquidAssets, must be a value greater than or equal to 0.", new [] { "LiquidAssets" });
            }

            // TaxRate (float?) maximum
            if(this.TaxRate > (float?)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for TaxRate, must be a value less than or equal to 1.", new [] { "TaxRate" });
            }

            // TaxRate (float?) minimum
            if(this.TaxRate < (float?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for TaxRate, must be a value greater than or equal to 0.", new [] { "TaxRate" });
            }

            // OtherDebt (decimal?) minimum
            if(this.OtherDebt < (decimal?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for OtherDebt, must be a value greater than or equal to 0.", new [] { "OtherDebt" });
            }

            // EndOfLifeExpenses (decimal?) minimum
            if(this.EndOfLifeExpenses < (decimal?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for EndOfLifeExpenses, must be a value greater than or equal to 0.", new [] { "EndOfLifeExpenses" });
            }

            // ExistingLifeInsurance (decimal?) minimum
            if(this.ExistingLifeInsurance < (decimal?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for ExistingLifeInsurance, must be a value greater than or equal to 0.", new [] { "ExistingLifeInsurance" });
            }

            // MortgageBalance (decimal?) minimum
            if(this.MortgageBalance < (decimal?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for MortgageBalance, must be a value greater than or equal to 0.", new [] { "MortgageBalance" });
            }

            // BenefitAmountRounding (int?) maximum
            if(this.BenefitAmountRounding > (int?)12)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for BenefitAmountRounding, must be a value less than or equal to 12.", new [] { "BenefitAmountRounding" });
            }

            // BenefitAmountRounding (int?) minimum
            if(this.BenefitAmountRounding < (int?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for BenefitAmountRounding, must be a value greater than or equal to 0.", new [] { "BenefitAmountRounding" });
            }

            // InterestRate (float?) minimum
            if(this.InterestRate < (float?)-1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for InterestRate, must be a value greater than or equal to -1.", new [] { "InterestRate" });
            }

            // GeneralInflationRate (float?) minimum
            if(this.GeneralInflationRate < (float?)-1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for GeneralInflationRate, must be a value greater than or equal to -1.", new [] { "GeneralInflationRate" });
            }

            yield break;
        }
    }

}