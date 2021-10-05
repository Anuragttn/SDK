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
    /// MonteCarloRequest
    /// </summary>
    [DataContract]
    public partial class MonteCarloRequest :  IEquatable<MonteCarloRequest>, IValidatableObject
    {
        /// <summary>
        /// Defines ResultType
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ResultTypeEnum
        {
            
            /// <summary>
            /// Enum Raw for value: raw
            /// </summary>
            [EnumMember(Value = "raw")]
            Raw = 1,
            
            /// <summary>
            /// Enum Custom for value: custom
            /// </summary>
            [EnumMember(Value = "custom")]
            Custom = 2,
            
            /// <summary>
            /// Enum Median for value: median
            /// </summary>
            [EnumMember(Value = "median")]
            Median = 3,
            
            /// <summary>
            /// Enum Mean for value: mean
            /// </summary>
            [EnumMember(Value = "mean")]
            Mean = 4,
            
            /// <summary>
            /// Enum Tens for value: tens
            /// </summary>
            [EnumMember(Value = "tens")]
            Tens = 5
        }

        /// <summary>
        /// Gets or Sets ResultType
        /// </summary>
        [DataMember(Name="result_type", EmitDefaultValue=false)]
        public ResultTypeEnum? ResultType { get; set; }
        /// <summary>
        /// Defines MarketDataSource
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum MarketDataSourceEnum
        {
            
            /// <summary>
            /// Enum Nucleus for value: nucleus
            /// </summary>
            [EnumMember(Value = "nucleus")]
            Nucleus = 1,
            
            /// <summary>
            /// Enum Integration for value: integration
            /// </summary>
            [EnumMember(Value = "integration")]
            Integration = 2
        }

        /// <summary>
        /// Gets or Sets MarketDataSource
        /// </summary>
        [DataMember(Name="market_data_source", EmitDefaultValue=false)]
        public MarketDataSourceEnum? MarketDataSource { get; set; }
        /// <summary>
        /// Defines FrequencyInterval
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum FrequencyIntervalEnum
        {
            
            /// <summary>
            /// Enum Year for value: year
            /// </summary>
            [EnumMember(Value = "year")]
            Year = 1,
            
            /// <summary>
            /// Enum Sixmonths for value: six_months
            /// </summary>
            [EnumMember(Value = "six_months")]
            Sixmonths = 2,
            
            /// <summary>
            /// Enum Quarter for value: quarter
            /// </summary>
            [EnumMember(Value = "quarter")]
            Quarter = 3,
            
            /// <summary>
            /// Enum Month for value: month
            /// </summary>
            [EnumMember(Value = "month")]
            Month = 4,
            
            /// <summary>
            /// Enum Twoweeks for value: two_weeks
            /// </summary>
            [EnumMember(Value = "two_weeks")]
            Twoweeks = 5,
            
            /// <summary>
            /// Enum Week for value: week
            /// </summary>
            [EnumMember(Value = "week")]
            Week = 6,
            
            /// <summary>
            /// Enum Day for value: day
            /// </summary>
            [EnumMember(Value = "day")]
            Day = 7
        }

        /// <summary>
        /// Gets or Sets FrequencyInterval
        /// </summary>
        [DataMember(Name="frequency_interval", EmitDefaultValue=false)]
        public FrequencyIntervalEnum? FrequencyInterval { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="MonteCarloRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected MonteCarloRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="MonteCarloRequest" /> class.
        /// </summary>
        /// <param name="minBal">minBal.</param>
        /// <param name="maxBal">maxBal.</param>
        /// <param name="p">p.</param>
        /// <param name="allocationId">allocationId.</param>
        /// <param name="initBal">initBal.</param>
        /// <param name="maxSample">maxSample.</param>
        /// <param name="modelId">modelId.</param>
        /// <param name="cf">cf (required).</param>
        /// <param name="createLog">createLog (default to false).</param>
        /// <param name="aggregationAccountId">aggregationAccountId.</param>
        /// <param name="n">n (default to 1000).</param>
        /// <param name="removeOutliers">removeOutliers (default to false).</param>
        /// <param name="sigma">sigma.</param>
        /// <param name="mu">mu.</param>
        /// <param name="portfolioId">portfolioId.</param>
        /// <param name="resultType">resultType (default to ResultTypeEnum.Raw).</param>
        /// <param name="accountId">accountId.</param>
        /// <param name="useProxyData">useProxyData (default to false).</param>
        /// <param name="marketDataSource">marketDataSource (default to MarketDataSourceEnum.Nucleus).</param>
        /// <param name="retMod">retMod.</param>
        /// <param name="frequencyInterval">frequencyInterval (default to FrequencyIntervalEnum.Year).</param>
        /// <param name="minSample">minSample.</param>
        public MonteCarloRequest(List<decimal?> minBal = default(List<decimal?>), List<decimal?> maxBal = default(List<decimal?>), List<decimal?> p = default(List<decimal?>), Guid? allocationId = default(Guid?), decimal? initBal = default(decimal?), List<float?> maxSample = default(List<float?>), Guid? modelId = default(Guid?), List<List<decimal?>> cf = default(List<List<decimal?>>), bool? createLog = false, Guid? aggregationAccountId = default(Guid?), int? n = 1000, bool? removeOutliers = false, List<float?> sigma = default(List<float?>), List<float?> mu = default(List<float?>), Guid? portfolioId = default(Guid?), ResultTypeEnum? resultType = ResultTypeEnum.Raw, Guid? accountId = default(Guid?), bool? useProxyData = false, MarketDataSourceEnum? marketDataSource = MarketDataSourceEnum.Nucleus, List<float?> retMod = default(List<float?>), FrequencyIntervalEnum? frequencyInterval = FrequencyIntervalEnum.Year, List<float?> minSample = default(List<float?>))
        {
            // to ensure "cf" is required (not null)
            if (cf == null)
            {
                throw new InvalidDataException("cf is a required property for MonteCarloRequest and cannot be null");
            }
            else
            {
                this.Cf = cf;
            }
            this.MinBal = minBal;
            this.MaxBal = maxBal;
            this.P = p;
            this.AllocationId = allocationId;
            this.InitBal = initBal;
            this.MaxSample = maxSample;
            this.ModelId = modelId;
            // use default value if no "createLog" provided
            if (createLog == null)
            {
                this.CreateLog = false;
            }
            else
            {
                this.CreateLog = createLog;
            }
            this.AggregationAccountId = aggregationAccountId;
            // use default value if no "n" provided
            if (n == null)
            {
                this.N = 1000;
            }
            else
            {
                this.N = n;
            }
            // use default value if no "removeOutliers" provided
            if (removeOutliers == null)
            {
                this.RemoveOutliers = false;
            }
            else
            {
                this.RemoveOutliers = removeOutliers;
            }
            this.Sigma = sigma;
            this.Mu = mu;
            this.PortfolioId = portfolioId;
            // use default value if no "resultType" provided
            if (resultType == null)
            {
                this.ResultType = ResultTypeEnum.Raw;
            }
            else
            {
                this.ResultType = resultType;
            }
            this.AccountId = accountId;
            // use default value if no "useProxyData" provided
            if (useProxyData == null)
            {
                this.UseProxyData = false;
            }
            else
            {
                this.UseProxyData = useProxyData;
            }
            // use default value if no "marketDataSource" provided
            if (marketDataSource == null)
            {
                this.MarketDataSource = MarketDataSourceEnum.Nucleus;
            }
            else
            {
                this.MarketDataSource = marketDataSource;
            }
            this.RetMod = retMod;
            // use default value if no "frequencyInterval" provided
            if (frequencyInterval == null)
            {
                this.FrequencyInterval = FrequencyIntervalEnum.Year;
            }
            else
            {
                this.FrequencyInterval = frequencyInterval;
            }
            this.MinSample = minSample;
        }
        
        /// <summary>
        /// Gets or Sets MinBal
        /// </summary>
        [DataMember(Name="min_bal", EmitDefaultValue=false)]
        public List<decimal?> MinBal { get; set; }

        /// <summary>
        /// Gets or Sets MaxBal
        /// </summary>
        [DataMember(Name="max_bal", EmitDefaultValue=false)]
        public List<decimal?> MaxBal { get; set; }

        /// <summary>
        /// Gets or Sets P
        /// </summary>
        [DataMember(Name="p", EmitDefaultValue=false)]
        public List<decimal?> P { get; set; }

        /// <summary>
        /// Gets or Sets AllocationId
        /// </summary>
        [DataMember(Name="allocation_id", EmitDefaultValue=false)]
        public Guid? AllocationId { get; set; }

        /// <summary>
        /// Gets or Sets InitBal
        /// </summary>
        [DataMember(Name="init_bal", EmitDefaultValue=false)]
        public decimal? InitBal { get; set; }

        /// <summary>
        /// Gets or Sets MaxSample
        /// </summary>
        [DataMember(Name="max_sample", EmitDefaultValue=false)]
        public List<float?> MaxSample { get; set; }

        /// <summary>
        /// Gets or Sets ModelId
        /// </summary>
        [DataMember(Name="model_id", EmitDefaultValue=false)]
        public Guid? ModelId { get; set; }

        /// <summary>
        /// Gets or Sets Cf
        /// </summary>
        [DataMember(Name="cf", EmitDefaultValue=false)]
        public List<List<decimal?>> Cf { get; set; }

        /// <summary>
        /// Gets or Sets CreateLog
        /// </summary>
        [DataMember(Name="create_log", EmitDefaultValue=false)]
        public bool? CreateLog { get; set; }

        /// <summary>
        /// Gets or Sets AggregationAccountId
        /// </summary>
        [DataMember(Name="aggregation_account_id", EmitDefaultValue=false)]
        public Guid? AggregationAccountId { get; set; }

        /// <summary>
        /// Gets or Sets N
        /// </summary>
        [DataMember(Name="n", EmitDefaultValue=false)]
        public int? N { get; set; }

        /// <summary>
        /// Gets or Sets RemoveOutliers
        /// </summary>
        [DataMember(Name="remove_outliers", EmitDefaultValue=false)]
        public bool? RemoveOutliers { get; set; }

        /// <summary>
        /// Gets or Sets Sigma
        /// </summary>
        [DataMember(Name="sigma", EmitDefaultValue=false)]
        public List<float?> Sigma { get; set; }

        /// <summary>
        /// Gets or Sets Mu
        /// </summary>
        [DataMember(Name="mu", EmitDefaultValue=false)]
        public List<float?> Mu { get; set; }

        /// <summary>
        /// Gets or Sets PortfolioId
        /// </summary>
        [DataMember(Name="portfolio_id", EmitDefaultValue=false)]
        public Guid? PortfolioId { get; set; }


        /// <summary>
        /// Gets or Sets AccountId
        /// </summary>
        [DataMember(Name="account_id", EmitDefaultValue=false)]
        public Guid? AccountId { get; set; }

        /// <summary>
        /// Gets or Sets UseProxyData
        /// </summary>
        [DataMember(Name="use_proxy_data", EmitDefaultValue=false)]
        public bool? UseProxyData { get; set; }


        /// <summary>
        /// Gets or Sets RetMod
        /// </summary>
        [DataMember(Name="ret_mod", EmitDefaultValue=false)]
        public List<float?> RetMod { get; set; }


        /// <summary>
        /// Gets or Sets MinSample
        /// </summary>
        [DataMember(Name="min_sample", EmitDefaultValue=false)]
        public List<float?> MinSample { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MonteCarloRequest {\n");
            sb.Append("  MinBal: ").Append(MinBal).Append("\n");
            sb.Append("  MaxBal: ").Append(MaxBal).Append("\n");
            sb.Append("  P: ").Append(P).Append("\n");
            sb.Append("  AllocationId: ").Append(AllocationId).Append("\n");
            sb.Append("  InitBal: ").Append(InitBal).Append("\n");
            sb.Append("  MaxSample: ").Append(MaxSample).Append("\n");
            sb.Append("  ModelId: ").Append(ModelId).Append("\n");
            sb.Append("  Cf: ").Append(Cf).Append("\n");
            sb.Append("  CreateLog: ").Append(CreateLog).Append("\n");
            sb.Append("  AggregationAccountId: ").Append(AggregationAccountId).Append("\n");
            sb.Append("  N: ").Append(N).Append("\n");
            sb.Append("  RemoveOutliers: ").Append(RemoveOutliers).Append("\n");
            sb.Append("  Sigma: ").Append(Sigma).Append("\n");
            sb.Append("  Mu: ").Append(Mu).Append("\n");
            sb.Append("  PortfolioId: ").Append(PortfolioId).Append("\n");
            sb.Append("  ResultType: ").Append(ResultType).Append("\n");
            sb.Append("  AccountId: ").Append(AccountId).Append("\n");
            sb.Append("  UseProxyData: ").Append(UseProxyData).Append("\n");
            sb.Append("  MarketDataSource: ").Append(MarketDataSource).Append("\n");
            sb.Append("  RetMod: ").Append(RetMod).Append("\n");
            sb.Append("  FrequencyInterval: ").Append(FrequencyInterval).Append("\n");
            sb.Append("  MinSample: ").Append(MinSample).Append("\n");
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
            return this.Equals(input as MonteCarloRequest);
        }

        /// <summary>
        /// Returns true if MonteCarloRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of MonteCarloRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MonteCarloRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.MinBal == input.MinBal ||
                    this.MinBal != null &&
                    this.MinBal.SequenceEqual(input.MinBal)
                ) && 
                (
                    this.MaxBal == input.MaxBal ||
                    this.MaxBal != null &&
                    this.MaxBal.SequenceEqual(input.MaxBal)
                ) && 
                (
                    this.P == input.P ||
                    this.P != null &&
                    this.P.SequenceEqual(input.P)
                ) && 
                (
                    this.AllocationId == input.AllocationId ||
                    (this.AllocationId != null &&
                    this.AllocationId.Equals(input.AllocationId))
                ) && 
                (
                    this.InitBal == input.InitBal ||
                    (this.InitBal != null &&
                    this.InitBal.Equals(input.InitBal))
                ) && 
                (
                    this.MaxSample == input.MaxSample ||
                    this.MaxSample != null &&
                    this.MaxSample.SequenceEqual(input.MaxSample)
                ) && 
                (
                    this.ModelId == input.ModelId ||
                    (this.ModelId != null &&
                    this.ModelId.Equals(input.ModelId))
                ) && 
                (
                    this.Cf == input.Cf ||
                    this.Cf != null &&
                    this.Cf.SequenceEqual(input.Cf)
                ) && 
                (
                    this.CreateLog == input.CreateLog ||
                    (this.CreateLog != null &&
                    this.CreateLog.Equals(input.CreateLog))
                ) && 
                (
                    this.AggregationAccountId == input.AggregationAccountId ||
                    (this.AggregationAccountId != null &&
                    this.AggregationAccountId.Equals(input.AggregationAccountId))
                ) && 
                (
                    this.N == input.N ||
                    (this.N != null &&
                    this.N.Equals(input.N))
                ) && 
                (
                    this.RemoveOutliers == input.RemoveOutliers ||
                    (this.RemoveOutliers != null &&
                    this.RemoveOutliers.Equals(input.RemoveOutliers))
                ) && 
                (
                    this.Sigma == input.Sigma ||
                    this.Sigma != null &&
                    this.Sigma.SequenceEqual(input.Sigma)
                ) && 
                (
                    this.Mu == input.Mu ||
                    this.Mu != null &&
                    this.Mu.SequenceEqual(input.Mu)
                ) && 
                (
                    this.PortfolioId == input.PortfolioId ||
                    (this.PortfolioId != null &&
                    this.PortfolioId.Equals(input.PortfolioId))
                ) && 
                (
                    this.ResultType == input.ResultType ||
                    (this.ResultType != null &&
                    this.ResultType.Equals(input.ResultType))
                ) && 
                (
                    this.AccountId == input.AccountId ||
                    (this.AccountId != null &&
                    this.AccountId.Equals(input.AccountId))
                ) && 
                (
                    this.UseProxyData == input.UseProxyData ||
                    (this.UseProxyData != null &&
                    this.UseProxyData.Equals(input.UseProxyData))
                ) && 
                (
                    this.MarketDataSource == input.MarketDataSource ||
                    (this.MarketDataSource != null &&
                    this.MarketDataSource.Equals(input.MarketDataSource))
                ) && 
                (
                    this.RetMod == input.RetMod ||
                    this.RetMod != null &&
                    this.RetMod.SequenceEqual(input.RetMod)
                ) && 
                (
                    this.FrequencyInterval == input.FrequencyInterval ||
                    (this.FrequencyInterval != null &&
                    this.FrequencyInterval.Equals(input.FrequencyInterval))
                ) && 
                (
                    this.MinSample == input.MinSample ||
                    this.MinSample != null &&
                    this.MinSample.SequenceEqual(input.MinSample)
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
                if (this.MinBal != null)
                    hashCode = hashCode * 59 + this.MinBal.GetHashCode();
                if (this.MaxBal != null)
                    hashCode = hashCode * 59 + this.MaxBal.GetHashCode();
                if (this.P != null)
                    hashCode = hashCode * 59 + this.P.GetHashCode();
                if (this.AllocationId != null)
                    hashCode = hashCode * 59 + this.AllocationId.GetHashCode();
                if (this.InitBal != null)
                    hashCode = hashCode * 59 + this.InitBal.GetHashCode();
                if (this.MaxSample != null)
                    hashCode = hashCode * 59 + this.MaxSample.GetHashCode();
                if (this.ModelId != null)
                    hashCode = hashCode * 59 + this.ModelId.GetHashCode();
                if (this.Cf != null)
                    hashCode = hashCode * 59 + this.Cf.GetHashCode();
                if (this.CreateLog != null)
                    hashCode = hashCode * 59 + this.CreateLog.GetHashCode();
                if (this.AggregationAccountId != null)
                    hashCode = hashCode * 59 + this.AggregationAccountId.GetHashCode();
                if (this.N != null)
                    hashCode = hashCode * 59 + this.N.GetHashCode();
                if (this.RemoveOutliers != null)
                    hashCode = hashCode * 59 + this.RemoveOutliers.GetHashCode();
                if (this.Sigma != null)
                    hashCode = hashCode * 59 + this.Sigma.GetHashCode();
                if (this.Mu != null)
                    hashCode = hashCode * 59 + this.Mu.GetHashCode();
                if (this.PortfolioId != null)
                    hashCode = hashCode * 59 + this.PortfolioId.GetHashCode();
                if (this.ResultType != null)
                    hashCode = hashCode * 59 + this.ResultType.GetHashCode();
                if (this.AccountId != null)
                    hashCode = hashCode * 59 + this.AccountId.GetHashCode();
                if (this.UseProxyData != null)
                    hashCode = hashCode * 59 + this.UseProxyData.GetHashCode();
                if (this.MarketDataSource != null)
                    hashCode = hashCode * 59 + this.MarketDataSource.GetHashCode();
                if (this.RetMod != null)
                    hashCode = hashCode * 59 + this.RetMod.GetHashCode();
                if (this.FrequencyInterval != null)
                    hashCode = hashCode * 59 + this.FrequencyInterval.GetHashCode();
                if (this.MinSample != null)
                    hashCode = hashCode * 59 + this.MinSample.GetHashCode();
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
            // InitBal (decimal?) minimum
            if(this.InitBal < (decimal?)0)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for InitBal, must be a value greater than or equal to 0.", new [] { "InitBal" });
            }

            // N (int?) maximum
            if(this.N > (int?)10000)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for N, must be a value less than or equal to 10000.", new [] { "N" });
            }

            // N (int?) minimum
            if(this.N < (int?)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for N, must be a value greater than or equal to 1.", new [] { "N" });
            }

            yield break;
        }
    }

}
