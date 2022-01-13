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
    /// FundingTransaction Object
    /// </summary>
    [DataContract]
    public partial class FundingTransaction :  IEquatable<FundingTransaction>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FundingTransaction" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected FundingTransaction() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="FundingTransaction" /> class.
        /// </summary>
        /// <param name="accountId">accountId.</param>
        /// <param name="amount">amount (required).</param>
        /// <param name="comments">comments.</param>
        /// <param name="createDate">createDate.</param>
        /// <param name="currencyCode">currency_code (required).</param>
        /// <param name="fees">fees.</param>
        /// <param name="fundingId">fundingId (required).</param>
        /// <param name="id">id.</param>
        /// <param name="investedDate">investedDate.</param>
        /// <param name="isDeposit">is deposit (required).</param>
        /// <param name="lastRequestDate">lastRequestDate.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="portfolioId">portfolio_id.</param>
        /// <param name="portfolioTransactionId">portfolioTransactionId.</param>
        /// <param name="receivedDate">receivedDate.</param>
        /// <param name="secondaryId">secondaryId.</param>
        /// <param name="status">status.</param>
        /// <param name="statusTimeStamp">statusTimeStamp.</param>
        /// <param name="type">type.</param>
        /// <param name="updateDate">updateDate.</param>
        public FundingTransaction(Guid? accountId = default(Guid?), double? amount = default(double?), string comments = default(string), DateTime? createDate = default(DateTime?), string currencyCode = default(string), double? fees = default(double?), Guid? fundingId = default(Guid?), Guid? id = default(Guid?), DateTime? investedDate = default(DateTime?), bool? isDeposit = default(bool?), DateTime? lastRequestDate = default(DateTime?), Dictionary<string, string> metadata = default(Dictionary<string, string>), Guid? portfolioId = default(Guid?), Guid? portfolioTransactionId = default(Guid?), DateTime? receivedDate = default(DateTime?), string secondaryId = default(string), string status = default(string), DateTime? statusTimeStamp = default(DateTime?), string type = default(string), DateTime? updateDate = default(DateTime?))
        {
            // to ensure "amount" is required (not null)
            if (amount == null)
            {
                throw new InvalidDataException("amount is a required property for FundingTransaction and cannot be null");
            }
            else
            {
                this.Amount = amount;
            }
            // to ensure "currencyCode" is required (not null)
            if (currencyCode == null)
            {
                throw new InvalidDataException("currencyCode is a required property for FundingTransaction and cannot be null");
            }
            else
            {
                this.CurrencyCode = currencyCode;
            }
            // to ensure "fundingId" is required (not null)
            if (fundingId == null)
            {
                throw new InvalidDataException("fundingId is a required property for FundingTransaction and cannot be null");
            }
            else
            {
                this.FundingId = fundingId;
            }
            // to ensure "isDeposit" is required (not null)
            if (isDeposit == null)
            {
                throw new InvalidDataException("isDeposit is a required property for FundingTransaction and cannot be null");
            }
            else
            {
                this.IsDeposit = isDeposit;
            }
            this.AccountId = accountId;
            this.Comments = comments;
            this.CreateDate = createDate;
            this.Fees = fees;
            this.Id = id;
            this.InvestedDate = investedDate;
            this.LastRequestDate = lastRequestDate;
            this.Metadata = metadata;
            this.PortfolioId = portfolioId;
            this.PortfolioTransactionId = portfolioTransactionId;
            this.ReceivedDate = receivedDate;
            this.SecondaryId = secondaryId;
            this.Status = status;
            this.StatusTimeStamp = statusTimeStamp;
            this.Type = type;
            this.UpdateDate = updateDate;
        }
        
        /// <summary>
        /// accountId
        /// </summary>
        /// <value>accountId</value>
        [DataMember(Name="account_id", EmitDefaultValue=false)]
        public Guid? AccountId { get; set; }

        /// <summary>
        /// amount
        /// </summary>
        /// <value>amount</value>
        [DataMember(Name="amount", EmitDefaultValue=false)]
        public double? Amount { get; set; }

        /// <summary>
        /// comments
        /// </summary>
        /// <value>comments</value>
        [DataMember(Name="comments", EmitDefaultValue=false)]
        public string Comments { get; set; }

        /// <summary>
        /// Gets or Sets CreateDate
        /// </summary>
        [DataMember(Name="create_date", EmitDefaultValue=false)]
        public DateTime? CreateDate { get; set; }

        /// <summary>
        /// currency_code
        /// </summary>
        /// <value>currency_code</value>
        [DataMember(Name="currency_code", EmitDefaultValue=false)]
        public string CurrencyCode { get; set; }

        /// <summary>
        /// fees
        /// </summary>
        /// <value>fees</value>
        [DataMember(Name="fees", EmitDefaultValue=false)]
        public double? Fees { get; set; }

        /// <summary>
        /// fundingId
        /// </summary>
        /// <value>fundingId</value>
        [DataMember(Name="funding_id", EmitDefaultValue=false)]
        public Guid? FundingId { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public Guid? Id { get; set; }

        /// <summary>
        /// investedDate
        /// </summary>
        /// <value>investedDate</value>
        [DataMember(Name="invested_date", EmitDefaultValue=false)]
        public DateTime? InvestedDate { get; set; }

        /// <summary>
        /// is deposit
        /// </summary>
        /// <value>is deposit</value>
        [DataMember(Name="is_deposit", EmitDefaultValue=false)]
        public bool? IsDeposit { get; set; }

        /// <summary>
        /// lastRequestDate
        /// </summary>
        /// <value>lastRequestDate</value>
        [DataMember(Name="last_request_date", EmitDefaultValue=false)]
        public DateTime? LastRequestDate { get; set; }

        /// <summary>
        /// Gets or Sets Metadata
        /// </summary>
        [DataMember(Name="metadata", EmitDefaultValue=false)]
        public Dictionary<string, string> Metadata { get; set; }

        /// <summary>
        /// portfolio_id
        /// </summary>
        /// <value>portfolio_id</value>
        [DataMember(Name="portfolio_id", EmitDefaultValue=false)]
        public Guid? PortfolioId { get; set; }

        /// <summary>
        /// portfolioTransactionId
        /// </summary>
        /// <value>portfolioTransactionId</value>
        [DataMember(Name="portfolio_transaction_id", EmitDefaultValue=false)]
        public Guid? PortfolioTransactionId { get; set; }

        /// <summary>
        /// receivedDate
        /// </summary>
        /// <value>receivedDate</value>
        [DataMember(Name="received_date", EmitDefaultValue=false)]
        public DateTime? ReceivedDate { get; set; }

        /// <summary>
        /// Gets or Sets SecondaryId
        /// </summary>
        [DataMember(Name="secondary_id", EmitDefaultValue=false)]
        public string SecondaryId { get; set; }

        /// <summary>
        /// status
        /// </summary>
        /// <value>status</value>
        [DataMember(Name="status", EmitDefaultValue=false)]
        public string Status { get; set; }

        /// <summary>
        /// statusTimeStamp
        /// </summary>
        /// <value>statusTimeStamp</value>
        [DataMember(Name="status_time_stamp", EmitDefaultValue=false)]
        public DateTime? StatusTimeStamp { get; set; }

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
            sb.Append("class FundingTransaction {\n");
            sb.Append("  AccountId: ").Append(AccountId).Append("\n");
            sb.Append("  Amount: ").Append(Amount).Append("\n");
            sb.Append("  Comments: ").Append(Comments).Append("\n");
            sb.Append("  CreateDate: ").Append(CreateDate).Append("\n");
            sb.Append("  CurrencyCode: ").Append(CurrencyCode).Append("\n");
            sb.Append("  Fees: ").Append(Fees).Append("\n");
            sb.Append("  FundingId: ").Append(FundingId).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  InvestedDate: ").Append(InvestedDate).Append("\n");
            sb.Append("  IsDeposit: ").Append(IsDeposit).Append("\n");
            sb.Append("  LastRequestDate: ").Append(LastRequestDate).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  PortfolioId: ").Append(PortfolioId).Append("\n");
            sb.Append("  PortfolioTransactionId: ").Append(PortfolioTransactionId).Append("\n");
            sb.Append("  ReceivedDate: ").Append(ReceivedDate).Append("\n");
            sb.Append("  SecondaryId: ").Append(SecondaryId).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  StatusTimeStamp: ").Append(StatusTimeStamp).Append("\n");
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
            return this.Equals(input as FundingTransaction);
        }

        /// <summary>
        /// Returns true if FundingTransaction instances are equal
        /// </summary>
        /// <param name="input">Instance of FundingTransaction to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(FundingTransaction input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.AccountId == input.AccountId ||
                    (this.AccountId != null &&
                    this.AccountId.Equals(input.AccountId))
                ) && 
                (
                    this.Amount == input.Amount ||
                    (this.Amount != null &&
                    this.Amount.Equals(input.Amount))
                ) && 
                (
                    this.Comments == input.Comments ||
                    (this.Comments != null &&
                    this.Comments.Equals(input.Comments))
                ) && 
                (
                    this.CreateDate == input.CreateDate ||
                    (this.CreateDate != null &&
                    this.CreateDate.Equals(input.CreateDate))
                ) && 
                (
                    this.CurrencyCode == input.CurrencyCode ||
                    (this.CurrencyCode != null &&
                    this.CurrencyCode.Equals(input.CurrencyCode))
                ) && 
                (
                    this.Fees == input.Fees ||
                    (this.Fees != null &&
                    this.Fees.Equals(input.Fees))
                ) && 
                (
                    this.FundingId == input.FundingId ||
                    (this.FundingId != null &&
                    this.FundingId.Equals(input.FundingId))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.InvestedDate == input.InvestedDate ||
                    (this.InvestedDate != null &&
                    this.InvestedDate.Equals(input.InvestedDate))
                ) && 
                (
                    this.IsDeposit == input.IsDeposit ||
                    (this.IsDeposit != null &&
                    this.IsDeposit.Equals(input.IsDeposit))
                ) && 
                (
                    this.LastRequestDate == input.LastRequestDate ||
                    (this.LastRequestDate != null &&
                    this.LastRequestDate.Equals(input.LastRequestDate))
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    this.Metadata != null &&
                    this.Metadata.SequenceEqual(input.Metadata)
                ) && 
                (
                    this.PortfolioId == input.PortfolioId ||
                    (this.PortfolioId != null &&
                    this.PortfolioId.Equals(input.PortfolioId))
                ) && 
                (
                    this.PortfolioTransactionId == input.PortfolioTransactionId ||
                    (this.PortfolioTransactionId != null &&
                    this.PortfolioTransactionId.Equals(input.PortfolioTransactionId))
                ) && 
                (
                    this.ReceivedDate == input.ReceivedDate ||
                    (this.ReceivedDate != null &&
                    this.ReceivedDate.Equals(input.ReceivedDate))
                ) && 
                (
                    this.SecondaryId == input.SecondaryId ||
                    (this.SecondaryId != null &&
                    this.SecondaryId.Equals(input.SecondaryId))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
                ) && 
                (
                    this.StatusTimeStamp == input.StatusTimeStamp ||
                    (this.StatusTimeStamp != null &&
                    this.StatusTimeStamp.Equals(input.StatusTimeStamp))
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
                if (this.AccountId != null)
                    hashCode = hashCode * 59 + this.AccountId.GetHashCode();
                if (this.Amount != null)
                    hashCode = hashCode * 59 + this.Amount.GetHashCode();
                if (this.Comments != null)
                    hashCode = hashCode * 59 + this.Comments.GetHashCode();
                if (this.CreateDate != null)
                    hashCode = hashCode * 59 + this.CreateDate.GetHashCode();
                if (this.CurrencyCode != null)
                    hashCode = hashCode * 59 + this.CurrencyCode.GetHashCode();
                if (this.Fees != null)
                    hashCode = hashCode * 59 + this.Fees.GetHashCode();
                if (this.FundingId != null)
                    hashCode = hashCode * 59 + this.FundingId.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.InvestedDate != null)
                    hashCode = hashCode * 59 + this.InvestedDate.GetHashCode();
                if (this.IsDeposit != null)
                    hashCode = hashCode * 59 + this.IsDeposit.GetHashCode();
                if (this.LastRequestDate != null)
                    hashCode = hashCode * 59 + this.LastRequestDate.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.PortfolioId != null)
                    hashCode = hashCode * 59 + this.PortfolioId.GetHashCode();
                if (this.PortfolioTransactionId != null)
                    hashCode = hashCode * 59 + this.PortfolioTransactionId.GetHashCode();
                if (this.ReceivedDate != null)
                    hashCode = hashCode * 59 + this.ReceivedDate.GetHashCode();
                if (this.SecondaryId != null)
                    hashCode = hashCode * 59 + this.SecondaryId.GetHashCode();
                if (this.Status != null)
                    hashCode = hashCode * 59 + this.Status.GetHashCode();
                if (this.StatusTimeStamp != null)
                    hashCode = hashCode * 59 + this.StatusTimeStamp.GetHashCode();
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
