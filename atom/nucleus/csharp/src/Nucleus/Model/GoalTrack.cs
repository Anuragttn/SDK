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
    /// Goal Simulation Result Object
    /// </summary>
    [DataContract]
    public partial class GoalTrack :  IEquatable<GoalTrack>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GoalTrack" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected GoalTrack() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="GoalTrack" /> class.
        /// </summary>
        /// <param name="accounts">accounts.</param>
        /// <param name="accumulationHorizon">accumulationHorizon.</param>
        /// <param name="clientId">clientId.</param>
        /// <param name="createDate">createDate.</param>
        /// <param name="currentInvestment">currentInvestment.</param>
        /// <param name="decumulationHorizon">decumulationHorizon.</param>
        /// <param name="goalAchievementScore">goalAchievementScore.</param>
        /// <param name="goalAmount">goalAmount.</param>
        /// <param name="goalId">goalId (required).</param>
        /// <param name="goalProbability">goalProbability.</param>
        /// <param name="id">id.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="onTrack">onTrack.</param>
        /// <param name="progress">progress.</param>
        /// <param name="projectionBalance">projectionBalance.</param>
        /// <param name="projectionDate">projectionDate.</param>
        /// <param name="secondaryId">secondaryId.</param>
        /// <param name="statusTimeStamp">statusTimeStamp (required).</param>
        /// <param name="updateDate">updateDate.</param>
        public GoalTrack(List<GoalTrackAccounts> accounts = default(List<GoalTrackAccounts>), double? accumulationHorizon = default(double?), Guid? clientId = default(Guid?), DateTime? createDate = default(DateTime?), double? currentInvestment = default(double?), double? decumulationHorizon = default(double?), double? goalAchievementScore = default(double?), double? goalAmount = default(double?), Guid? goalId = default(Guid?), double? goalProbability = default(double?), Guid? id = default(Guid?), Dictionary<string, string> metadata = default(Dictionary<string, string>), bool? onTrack = default(bool?), double? progress = default(double?), double? projectionBalance = default(double?), DateTime? projectionDate = default(DateTime?), string secondaryId = default(string), DateTime? statusTimeStamp = default(DateTime?), DateTime? updateDate = default(DateTime?))
        {
            // to ensure "goalId" is required (not null)
            if (goalId == null)
            {
                throw new InvalidDataException("goalId is a required property for GoalTrack and cannot be null");
            }
            else
            {
                this.GoalId = goalId;
            }
            // to ensure "statusTimeStamp" is required (not null)
            if (statusTimeStamp == null)
            {
                throw new InvalidDataException("statusTimeStamp is a required property for GoalTrack and cannot be null");
            }
            else
            {
                this.StatusTimeStamp = statusTimeStamp;
            }
            this.Accounts = accounts;
            this.AccumulationHorizon = accumulationHorizon;
            this.ClientId = clientId;
            this.CreateDate = createDate;
            this.CurrentInvestment = currentInvestment;
            this.DecumulationHorizon = decumulationHorizon;
            this.GoalAchievementScore = goalAchievementScore;
            this.GoalAmount = goalAmount;
            this.GoalProbability = goalProbability;
            this.Id = id;
            this.Metadata = metadata;
            this.OnTrack = onTrack;
            this.Progress = progress;
            this.ProjectionBalance = projectionBalance;
            this.ProjectionDate = projectionDate;
            this.SecondaryId = secondaryId;
            this.UpdateDate = updateDate;
        }
        
        /// <summary>
        /// Gets or Sets Accounts
        /// </summary>
        [DataMember(Name="accounts", EmitDefaultValue=false)]
        public List<GoalTrackAccounts> Accounts { get; set; }

        /// <summary>
        /// accumulationHorizon
        /// </summary>
        /// <value>accumulationHorizon</value>
        [DataMember(Name="accumulation_horizon", EmitDefaultValue=false)]
        public double? AccumulationHorizon { get; set; }

        /// <summary>
        /// clientId
        /// </summary>
        /// <value>clientId</value>
        [DataMember(Name="client_id", EmitDefaultValue=false)]
        public Guid? ClientId { get; set; }

        /// <summary>
        /// Gets or Sets CreateDate
        /// </summary>
        [DataMember(Name="create_date", EmitDefaultValue=false)]
        public DateTime? CreateDate { get; set; }

        /// <summary>
        /// currentInvestment
        /// </summary>
        /// <value>currentInvestment</value>
        [DataMember(Name="current_investment", EmitDefaultValue=false)]
        public double? CurrentInvestment { get; set; }

        /// <summary>
        /// decumulationHorizon
        /// </summary>
        /// <value>decumulationHorizon</value>
        [DataMember(Name="decumulation_horizon", EmitDefaultValue=false)]
        public double? DecumulationHorizon { get; set; }

        /// <summary>
        /// goalAchievementScore
        /// </summary>
        /// <value>goalAchievementScore</value>
        [DataMember(Name="goal_achievement_score", EmitDefaultValue=false)]
        public double? GoalAchievementScore { get; set; }

        /// <summary>
        /// goalAmount
        /// </summary>
        /// <value>goalAmount</value>
        [DataMember(Name="goal_amount", EmitDefaultValue=false)]
        public double? GoalAmount { get; set; }

        /// <summary>
        /// goalId
        /// </summary>
        /// <value>goalId</value>
        [DataMember(Name="goal_id", EmitDefaultValue=false)]
        public Guid? GoalId { get; set; }

        /// <summary>
        /// goalProbability
        /// </summary>
        /// <value>goalProbability</value>
        [DataMember(Name="goal_probability", EmitDefaultValue=false)]
        public double? GoalProbability { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public Guid? Id { get; set; }

        /// <summary>
        /// metadata
        /// </summary>
        /// <value>metadata</value>
        [DataMember(Name="metadata", EmitDefaultValue=false)]
        public Dictionary<string, string> Metadata { get; set; }

        /// <summary>
        /// onTrack
        /// </summary>
        /// <value>onTrack</value>
        [DataMember(Name="on_track", EmitDefaultValue=false)]
        public bool? OnTrack { get; set; }

        /// <summary>
        /// progress
        /// </summary>
        /// <value>progress</value>
        [DataMember(Name="progress", EmitDefaultValue=false)]
        public double? Progress { get; set; }

        /// <summary>
        /// projectionBalance
        /// </summary>
        /// <value>projectionBalance</value>
        [DataMember(Name="projection_balance", EmitDefaultValue=false)]
        public double? ProjectionBalance { get; set; }

        /// <summary>
        /// projectionDate
        /// </summary>
        /// <value>projectionDate</value>
        [DataMember(Name="projection_date", EmitDefaultValue=false)]
        [JsonConverter(typeof(SwaggerDateConverter))]
        public DateTime? ProjectionDate { get; set; }

        /// <summary>
        /// Gets or Sets SecondaryId
        /// </summary>
        [DataMember(Name="secondary_id", EmitDefaultValue=false)]
        public string SecondaryId { get; set; }

        /// <summary>
        /// statusTimeStamp
        /// </summary>
        /// <value>statusTimeStamp</value>
        [DataMember(Name="status_time_stamp", EmitDefaultValue=false)]
        public DateTime? StatusTimeStamp { get; set; }

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
            sb.Append("class GoalTrack {\n");
            sb.Append("  Accounts: ").Append(Accounts).Append("\n");
            sb.Append("  AccumulationHorizon: ").Append(AccumulationHorizon).Append("\n");
            sb.Append("  ClientId: ").Append(ClientId).Append("\n");
            sb.Append("  CreateDate: ").Append(CreateDate).Append("\n");
            sb.Append("  CurrentInvestment: ").Append(CurrentInvestment).Append("\n");
            sb.Append("  DecumulationHorizon: ").Append(DecumulationHorizon).Append("\n");
            sb.Append("  GoalAchievementScore: ").Append(GoalAchievementScore).Append("\n");
            sb.Append("  GoalAmount: ").Append(GoalAmount).Append("\n");
            sb.Append("  GoalId: ").Append(GoalId).Append("\n");
            sb.Append("  GoalProbability: ").Append(GoalProbability).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  OnTrack: ").Append(OnTrack).Append("\n");
            sb.Append("  Progress: ").Append(Progress).Append("\n");
            sb.Append("  ProjectionBalance: ").Append(ProjectionBalance).Append("\n");
            sb.Append("  ProjectionDate: ").Append(ProjectionDate).Append("\n");
            sb.Append("  SecondaryId: ").Append(SecondaryId).Append("\n");
            sb.Append("  StatusTimeStamp: ").Append(StatusTimeStamp).Append("\n");
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
            return this.Equals(input as GoalTrack);
        }

        /// <summary>
        /// Returns true if GoalTrack instances are equal
        /// </summary>
        /// <param name="input">Instance of GoalTrack to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GoalTrack input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Accounts == input.Accounts ||
                    this.Accounts != null &&
                    this.Accounts.SequenceEqual(input.Accounts)
                ) && 
                (
                    this.AccumulationHorizon == input.AccumulationHorizon ||
                    (this.AccumulationHorizon != null &&
                    this.AccumulationHorizon.Equals(input.AccumulationHorizon))
                ) && 
                (
                    this.ClientId == input.ClientId ||
                    (this.ClientId != null &&
                    this.ClientId.Equals(input.ClientId))
                ) && 
                (
                    this.CreateDate == input.CreateDate ||
                    (this.CreateDate != null &&
                    this.CreateDate.Equals(input.CreateDate))
                ) && 
                (
                    this.CurrentInvestment == input.CurrentInvestment ||
                    (this.CurrentInvestment != null &&
                    this.CurrentInvestment.Equals(input.CurrentInvestment))
                ) && 
                (
                    this.DecumulationHorizon == input.DecumulationHorizon ||
                    (this.DecumulationHorizon != null &&
                    this.DecumulationHorizon.Equals(input.DecumulationHorizon))
                ) && 
                (
                    this.GoalAchievementScore == input.GoalAchievementScore ||
                    (this.GoalAchievementScore != null &&
                    this.GoalAchievementScore.Equals(input.GoalAchievementScore))
                ) && 
                (
                    this.GoalAmount == input.GoalAmount ||
                    (this.GoalAmount != null &&
                    this.GoalAmount.Equals(input.GoalAmount))
                ) && 
                (
                    this.GoalId == input.GoalId ||
                    (this.GoalId != null &&
                    this.GoalId.Equals(input.GoalId))
                ) && 
                (
                    this.GoalProbability == input.GoalProbability ||
                    (this.GoalProbability != null &&
                    this.GoalProbability.Equals(input.GoalProbability))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    this.Metadata != null &&
                    this.Metadata.SequenceEqual(input.Metadata)
                ) && 
                (
                    this.OnTrack == input.OnTrack ||
                    (this.OnTrack != null &&
                    this.OnTrack.Equals(input.OnTrack))
                ) && 
                (
                    this.Progress == input.Progress ||
                    (this.Progress != null &&
                    this.Progress.Equals(input.Progress))
                ) && 
                (
                    this.ProjectionBalance == input.ProjectionBalance ||
                    (this.ProjectionBalance != null &&
                    this.ProjectionBalance.Equals(input.ProjectionBalance))
                ) && 
                (
                    this.ProjectionDate == input.ProjectionDate ||
                    (this.ProjectionDate != null &&
                    this.ProjectionDate.Equals(input.ProjectionDate))
                ) && 
                (
                    this.SecondaryId == input.SecondaryId ||
                    (this.SecondaryId != null &&
                    this.SecondaryId.Equals(input.SecondaryId))
                ) && 
                (
                    this.StatusTimeStamp == input.StatusTimeStamp ||
                    (this.StatusTimeStamp != null &&
                    this.StatusTimeStamp.Equals(input.StatusTimeStamp))
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
                if (this.Accounts != null)
                    hashCode = hashCode * 59 + this.Accounts.GetHashCode();
                if (this.AccumulationHorizon != null)
                    hashCode = hashCode * 59 + this.AccumulationHorizon.GetHashCode();
                if (this.ClientId != null)
                    hashCode = hashCode * 59 + this.ClientId.GetHashCode();
                if (this.CreateDate != null)
                    hashCode = hashCode * 59 + this.CreateDate.GetHashCode();
                if (this.CurrentInvestment != null)
                    hashCode = hashCode * 59 + this.CurrentInvestment.GetHashCode();
                if (this.DecumulationHorizon != null)
                    hashCode = hashCode * 59 + this.DecumulationHorizon.GetHashCode();
                if (this.GoalAchievementScore != null)
                    hashCode = hashCode * 59 + this.GoalAchievementScore.GetHashCode();
                if (this.GoalAmount != null)
                    hashCode = hashCode * 59 + this.GoalAmount.GetHashCode();
                if (this.GoalId != null)
                    hashCode = hashCode * 59 + this.GoalId.GetHashCode();
                if (this.GoalProbability != null)
                    hashCode = hashCode * 59 + this.GoalProbability.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.OnTrack != null)
                    hashCode = hashCode * 59 + this.OnTrack.GetHashCode();
                if (this.Progress != null)
                    hashCode = hashCode * 59 + this.Progress.GetHashCode();
                if (this.ProjectionBalance != null)
                    hashCode = hashCode * 59 + this.ProjectionBalance.GetHashCode();
                if (this.ProjectionDate != null)
                    hashCode = hashCode * 59 + this.ProjectionDate.GetHashCode();
                if (this.SecondaryId != null)
                    hashCode = hashCode * 59 + this.SecondaryId.GetHashCode();
                if (this.StatusTimeStamp != null)
                    hashCode = hashCode * 59 + this.StatusTimeStamp.GetHashCode();
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