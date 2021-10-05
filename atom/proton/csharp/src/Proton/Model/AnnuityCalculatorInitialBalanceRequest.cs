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
    /// AnnuityCalculatorInitialBalanceRequest
    /// </summary>
    [DataContract]
    public partial class AnnuityCalculatorInitialBalanceRequest :  IEquatable<AnnuityCalculatorInitialBalanceRequest>, IValidatableObject
    {
        /// <summary>
        /// Defines AnnuityFrequencyInterval
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum AnnuityFrequencyIntervalEnum
        {
            
            /// <summary>
            /// Enum Year for value: year
            /// </summary>
            [EnumMember(Value = "year")]
            Year = 1,
            
            /// <summary>
            /// Enum Quarter for value: quarter
            /// </summary>
            [EnumMember(Value = "quarter")]
            Quarter = 2,
            
            /// <summary>
            /// Enum Month for value: month
            /// </summary>
            [EnumMember(Value = "month")]
            Month = 3,
            
            /// <summary>
            /// Enum Week for value: week
            /// </summary>
            [EnumMember(Value = "week")]
            Week = 4,
            
            /// <summary>
            /// Enum Day for value: day
            /// </summary>
            [EnumMember(Value = "day")]
            Day = 5
        }

        /// <summary>
        /// Gets or Sets AnnuityFrequencyInterval
        /// </summary>
        [DataMember(Name="annuity_frequency_interval", EmitDefaultValue=false)]
        public AnnuityFrequencyIntervalEnum? AnnuityFrequencyInterval { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="AnnuityCalculatorInitialBalanceRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected AnnuityCalculatorInitialBalanceRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="AnnuityCalculatorInitialBalanceRequest" /> class.
        /// </summary>
        /// <param name="inflationRate">inflationRate (default to 0.0F).</param>
        /// <param name="decumulationHorizon">decumulationHorizon (required).</param>
        /// <param name="accountIds">accountIds.</param>
        /// <param name="taxRate">taxRate (default to 0.0F).</param>
        /// <param name="accumulationHorizon">accumulationHorizon (required).</param>
        /// <param name="annuityAmount">annuityAmount (required).</param>
        /// <param name="portfolioReturn">portfolioReturn (required).</param>
        /// <param name="depositSchedule">depositSchedule.</param>
        /// <param name="annuityFrequencyInterval">annuityFrequencyInterval (default to AnnuityFrequencyIntervalEnum.Year).</param>
        /// <param name="initialBalance">initialBalance (default to 0.0F).</param>
        /// <param name="aggregationAccountIds">aggregationAccountIds.</param>
        /// <param name="createLog">createLog (default to false).</param>
        public AnnuityCalculatorInitialBalanceRequest(float? inflationRate = 0.0F, int? decumulationHorizon = default(int?), List<Guid?> accountIds = default(List<Guid?>), float? taxRate = 0.0F, int? accumulationHorizon = default(int?), float? annuityAmount = default(float?), float? portfolioReturn = default(float?), AnnuityDepositSchedule depositSchedule = default(AnnuityDepositSchedule), AnnuityFrequencyIntervalEnum? annuityFrequencyInterval = AnnuityFrequencyIntervalEnum.Year, float? initialBalance = 0.0F, List<Guid?> aggregationAccountIds = default(List<Guid?>), bool? createLog = false)
        {
            // to ensure "decumulationHorizon" is required (not null)
            if (decumulationHorizon == null)
            {
                throw new InvalidDataException("decumulationHorizon is a required property for AnnuityCalculatorInitialBalanceRequest and cannot be null");
            }
            else
            {
                this.DecumulationHorizon = decumulationHorizon;
            }
            // to ensure "accumulationHorizon" is required (not null)
            if (accumulationHorizon == null)
            {
                throw new InvalidDataException("accumulationHorizon is a required property for AnnuityCalculatorInitialBalanceRequest and cannot be null");
            }
            else
            {
                this.AccumulationHorizon = accumulationHorizon;
            }
            // to ensure "annuityAmount" is required (not null)
            if (annuityAmount == null)
            {
                throw new InvalidDataException("annuityAmount is a required property for AnnuityCalculatorInitialBalanceRequest and cannot be null");
            }
            else
            {
                this.AnnuityAmount = annuityAmount;
            }
            // to ensure "portfolioReturn" is required (not null)
            if (portfolioReturn == null)
            {
                throw new InvalidDataException("portfolioReturn is a required property for AnnuityCalculatorInitialBalanceRequest and cannot be null");
            }
            else
            {
                this.PortfolioReturn = portfolioReturn;
            }
            // use default value if no "inflationRate" provided
            if (inflationRate == null)
            {
                this.InflationRate = 0.0F;
            }
            else
            {
                this.InflationRate = inflationRate;
            }
            this.AccountIds = accountIds;
            // use default value if no "taxRate" provided
            if (taxRate == null)
            {
                this.TaxRate = 0.0F;
            }
            else
            {
                this.TaxRate = taxRate;
            }
            this.DepositSchedule = depositSchedule;
            // use default value if no "annuityFrequencyInterval" provided
            if (annuityFrequencyInterval == null)
            {
                this.AnnuityFrequencyInterval = AnnuityFrequencyIntervalEnum.Year;
            }
            else
            {
                this.AnnuityFrequencyInterval = annuityFrequencyInterval;
            }
            // use default value if no "initialBalance" provided
            if (initialBalance == null)
            {
                this.InitialBalance = 0.0F;
            }
            else
            {
                this.InitialBalance = initialBalance;
            }
            this.AggregationAccountIds = aggregationAccountIds;
            // use default value if no "createLog" provided
            if (createLog == null)
            {
                this.CreateLog = false;
            }
            else
            {
                this.CreateLog = createLog;
            }
        }
        
        /// <summary>
        /// Gets or Sets InflationRate
        /// </summary>
        [DataMember(Name="inflation_rate", EmitDefaultValue=false)]
        public float? InflationRate { get; set; }

        /// <summary>
        /// Gets or Sets DecumulationHorizon
        /// </summary>
        [DataMember(Name="decumulation_horizon", EmitDefaultValue=false)]
        public int? DecumulationHorizon { get; set; }

        /// <summary>
        /// Gets or Sets AccountIds
        /// </summary>
        [DataMember(Name="account_ids", EmitDefaultValue=false)]
        public List<Guid?> AccountIds { get; set; }

        /// <summary>
        /// Gets or Sets TaxRate
        /// </summary>
        [DataMember(Name="tax_rate", EmitDefaultValue=false)]
        public float? TaxRate { get; set; }

        /// <summary>
        /// Gets or Sets AccumulationHorizon
        /// </summary>
        [DataMember(Name="accumulation_horizon", EmitDefaultValue=false)]
        public int? AccumulationHorizon { get; set; }

        /// <summary>
        /// Gets or Sets AnnuityAmount
        /// </summary>
        [DataMember(Name="annuity_amount", EmitDefaultValue=false)]
        public float? AnnuityAmount { get; set; }

        /// <summary>
        /// Gets or Sets PortfolioReturn
        /// </summary>
        [DataMember(Name="portfolio_return", EmitDefaultValue=false)]
        public float? PortfolioReturn { get; set; }

        /// <summary>
        /// Gets or Sets DepositSchedule
        /// </summary>
        [DataMember(Name="deposit_schedule", EmitDefaultValue=false)]
        public AnnuityDepositSchedule DepositSchedule { get; set; }


        /// <summary>
        /// Gets or Sets InitialBalance
        /// </summary>
        [DataMember(Name="initial_balance", EmitDefaultValue=false)]
        public float? InitialBalance { get; set; }

        /// <summary>
        /// Gets or Sets AggregationAccountIds
        /// </summary>
        [DataMember(Name="aggregation_account_ids", EmitDefaultValue=false)]
        public List<Guid?> AggregationAccountIds { get; set; }

        /// <summary>
        /// Gets or Sets CreateLog
        /// </summary>
        [DataMember(Name="create_log", EmitDefaultValue=false)]
        public bool? CreateLog { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class AnnuityCalculatorInitialBalanceRequest {\n");
            sb.Append("  InflationRate: ").Append(InflationRate).Append("\n");
            sb.Append("  DecumulationHorizon: ").Append(DecumulationHorizon).Append("\n");
            sb.Append("  AccountIds: ").Append(AccountIds).Append("\n");
            sb.Append("  TaxRate: ").Append(TaxRate).Append("\n");
            sb.Append("  AccumulationHorizon: ").Append(AccumulationHorizon).Append("\n");
            sb.Append("  AnnuityAmount: ").Append(AnnuityAmount).Append("\n");
            sb.Append("  PortfolioReturn: ").Append(PortfolioReturn).Append("\n");
            sb.Append("  DepositSchedule: ").Append(DepositSchedule).Append("\n");
            sb.Append("  AnnuityFrequencyInterval: ").Append(AnnuityFrequencyInterval).Append("\n");
            sb.Append("  InitialBalance: ").Append(InitialBalance).Append("\n");
            sb.Append("  AggregationAccountIds: ").Append(AggregationAccountIds).Append("\n");
            sb.Append("  CreateLog: ").Append(CreateLog).Append("\n");
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
            return this.Equals(input as AnnuityCalculatorInitialBalanceRequest);
        }

        /// <summary>
        /// Returns true if AnnuityCalculatorInitialBalanceRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of AnnuityCalculatorInitialBalanceRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(AnnuityCalculatorInitialBalanceRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.InflationRate == input.InflationRate ||
                    (this.InflationRate != null &&
                    this.InflationRate.Equals(input.InflationRate))
                ) && 
                (
                    this.DecumulationHorizon == input.DecumulationHorizon ||
                    (this.DecumulationHorizon != null &&
                    this.DecumulationHorizon.Equals(input.DecumulationHorizon))
                ) && 
                (
                    this.AccountIds == input.AccountIds ||
                    this.AccountIds != null &&
                    this.AccountIds.SequenceEqual(input.AccountIds)
                ) && 
                (
                    this.TaxRate == input.TaxRate ||
                    (this.TaxRate != null &&
                    this.TaxRate.Equals(input.TaxRate))
                ) && 
                (
                    this.AccumulationHorizon == input.AccumulationHorizon ||
                    (this.AccumulationHorizon != null &&
                    this.AccumulationHorizon.Equals(input.AccumulationHorizon))
                ) && 
                (
                    this.AnnuityAmount == input.AnnuityAmount ||
                    (this.AnnuityAmount != null &&
                    this.AnnuityAmount.Equals(input.AnnuityAmount))
                ) && 
                (
                    this.PortfolioReturn == input.PortfolioReturn ||
                    (this.PortfolioReturn != null &&
                    this.PortfolioReturn.Equals(input.PortfolioReturn))
                ) && 
                (
                    this.DepositSchedule == input.DepositSchedule ||
                    (this.DepositSchedule != null &&
                    this.DepositSchedule.Equals(input.DepositSchedule))
                ) && 
                (
                    this.AnnuityFrequencyInterval == input.AnnuityFrequencyInterval ||
                    (this.AnnuityFrequencyInterval != null &&
                    this.AnnuityFrequencyInterval.Equals(input.AnnuityFrequencyInterval))
                ) && 
                (
                    this.InitialBalance == input.InitialBalance ||
                    (this.InitialBalance != null &&
                    this.InitialBalance.Equals(input.InitialBalance))
                ) && 
                (
                    this.AggregationAccountIds == input.AggregationAccountIds ||
                    this.AggregationAccountIds != null &&
                    this.AggregationAccountIds.SequenceEqual(input.AggregationAccountIds)
                ) && 
                (
                    this.CreateLog == input.CreateLog ||
                    (this.CreateLog != null &&
                    this.CreateLog.Equals(input.CreateLog))
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
                if (this.InflationRate != null)
                    hashCode = hashCode * 59 + this.InflationRate.GetHashCode();
                if (this.DecumulationHorizon != null)
                    hashCode = hashCode * 59 + this.DecumulationHorizon.GetHashCode();
                if (this.AccountIds != null)
                    hashCode = hashCode * 59 + this.AccountIds.GetHashCode();
                if (this.TaxRate != null)
                    hashCode = hashCode * 59 + this.TaxRate.GetHashCode();
                if (this.AccumulationHorizon != null)
                    hashCode = hashCode * 59 + this.AccumulationHorizon.GetHashCode();
                if (this.AnnuityAmount != null)
                    hashCode = hashCode * 59 + this.AnnuityAmount.GetHashCode();
                if (this.PortfolioReturn != null)
                    hashCode = hashCode * 59 + this.PortfolioReturn.GetHashCode();
                if (this.DepositSchedule != null)
                    hashCode = hashCode * 59 + this.DepositSchedule.GetHashCode();
                if (this.AnnuityFrequencyInterval != null)
                    hashCode = hashCode * 59 + this.AnnuityFrequencyInterval.GetHashCode();
                if (this.InitialBalance != null)
                    hashCode = hashCode * 59 + this.InitialBalance.GetHashCode();
                if (this.AggregationAccountIds != null)
                    hashCode = hashCode * 59 + this.AggregationAccountIds.GetHashCode();
                if (this.CreateLog != null)
                    hashCode = hashCode * 59 + this.CreateLog.GetHashCode();
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
            // InflationRate (float?) maximum
            if(this.InflationRate > (float?)20)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for InflationRate, must be a value less than or equal to 20.", new [] { "InflationRate" });
            }

            // InflationRate (float?) minimum
            if(this.InflationRate < (float?)-1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for InflationRate, must be a value greater than or equal to -1.", new [] { "InflationRate" });
            }

            // DecumulationHorizon (int?) minimum
            if(this.DecumulationHorizon < (int?)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for DecumulationHorizon, must be a value greater than or equal to 1.", new [] { "DecumulationHorizon" });
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

            // AccumulationHorizon (int?) minimum
            if(this.AccumulationHorizon < (int?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for AccumulationHorizon, must be a value greater than or equal to 0.", new [] { "AccumulationHorizon" });
            }

            // AnnuityAmount (float?) minimum
            if(this.AnnuityAmount < (float?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for AnnuityAmount, must be a value greater than or equal to 0.", new [] { "AnnuityAmount" });
            }

            // InitialBalance (float?) minimum
            if(this.InitialBalance < (float?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for InitialBalance, must be a value greater than or equal to 0.", new [] { "InitialBalance" });
            }

            yield break;
        }
    }

}
