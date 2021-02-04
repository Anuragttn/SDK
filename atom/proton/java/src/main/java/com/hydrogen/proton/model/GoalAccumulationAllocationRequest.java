/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.proton.model;

import java.util.Objects;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModelProperty;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * GoalAccumulationAllocationRequest
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-03T15:06:55.665Z")



public class GoalAccumulationAllocationRequest {
  /**
   * Gets or Sets threshType
   */
  @JsonAdapter(ThreshTypeEnum.Adapter.class)
  public enum ThreshTypeEnum {
    AMNT("amnt"),
    
    PERC("perc");

    private String value;

    ThreshTypeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ThreshTypeEnum fromValue(String text) {
      for (ThreshTypeEnum b : ThreshTypeEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<ThreshTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ThreshTypeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ThreshTypeEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return ThreshTypeEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("thresh_type")
  private ThreshTypeEnum threshType = ThreshTypeEnum.PERC;

  @SerializedName("goal_id")
  private UUID goalId = null;

  @SerializedName("client_id")
  private UUID clientId = null;

  @SerializedName("conf_tgt")
  private Float confTgt = 0.9f;

  @SerializedName("risk_score")
  private BigDecimal riskScore = null;

  @SerializedName("remove_outliers")
  private Boolean removeOutliers = true;

  /**
   * Gets or Sets allocationPriority
   */
  @JsonAdapter(AllocationPriorityEnum.Adapter.class)
  public enum AllocationPriorityEnum {
    GOAL("goal"),
    
    RISK("risk");

    private String value;

    AllocationPriorityEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static AllocationPriorityEnum fromValue(String text) {
      for (AllocationPriorityEnum b : AllocationPriorityEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<AllocationPriorityEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final AllocationPriorityEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public AllocationPriorityEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return AllocationPriorityEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("allocation_priority")
  private AllocationPriorityEnum allocationPriority = null;

  /**
   * Gets or Sets marketDataSource
   */
  @JsonAdapter(MarketDataSourceEnum.Adapter.class)
  public enum MarketDataSourceEnum {
    NUCLEUS("nucleus"),
    
    INTEGRATION("integration");

    private String value;

    MarketDataSourceEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static MarketDataSourceEnum fromValue(String text) {
      for (MarketDataSourceEnum b : MarketDataSourceEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<MarketDataSourceEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final MarketDataSourceEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public MarketDataSourceEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return MarketDataSourceEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("market_data_source")
  private MarketDataSourceEnum marketDataSource = MarketDataSourceEnum.NUCLEUS;

  @SerializedName("compounding_rate")
  private Float compoundingRate = 0.0f;

  @SerializedName("adjust_for_compounding")
  private Boolean adjustForCompounding = false;

  @SerializedName("opt_config")
  private OptConfig optConfig = null;

  @SerializedName("deposit_config")
  private List<AccumulationGoalDepositConfig> depositConfig = null;

  @SerializedName("use_proxy_data")
  private Boolean useProxyData = false;

  @SerializedName("thresh")
  private BigDecimal thresh = null;

  /**
   * Gets or Sets horizonFrequency
   */
  @JsonAdapter(HorizonFrequencyEnum.Adapter.class)
  public enum HorizonFrequencyEnum {
    YEAR("year"),
    
    SIX_MONTHS("six_months"),
    
    QUARTER("quarter"),
    
    MONTH("month"),
    
    TWO_WEEKS("two_weeks"),
    
    WEEK("week"),
    
    DAY("day");

    private String value;

    HorizonFrequencyEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static HorizonFrequencyEnum fromValue(String text) {
      for (HorizonFrequencyEnum b : HorizonFrequencyEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<HorizonFrequencyEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final HorizonFrequencyEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public HorizonFrequencyEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return HorizonFrequencyEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("horizon_frequency")
  private HorizonFrequencyEnum horizonFrequency = HorizonFrequencyEnum.YEAR;

  @SerializedName("recommendation_config")
  private RecommendationConfig recommendationConfig = null;

  @SerializedName("create_log")
  private Boolean createLog = false;

  @SerializedName("withdrawal_tax")
  private Float withdrawalTax = 0.0f;

  @SerializedName("goal_config")
  private GoalConfig goalConfig = null;

  @SerializedName("trading_days_per_year")
  private Integer tradingDaysPerYear = 252;

  @SerializedName("allocations")
  private List<UUID> allocations = null;

  @SerializedName("n")
  private Integer n = 1000;

  @SerializedName("horizon")
  private Integer horizon = null;

  /**
   * Gets or Sets recommendType
   */
  @JsonAdapter(RecommendTypeEnum.Adapter.class)
  public enum RecommendTypeEnum {
    RECURRING("recurring"),
    
    ONE_TIME("one-time"),
    
    COMBO("combo"),
    
    HORIZON("horizon");

    private String value;

    RecommendTypeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static RecommendTypeEnum fromValue(String text) {
      for (RecommendTypeEnum b : RecommendTypeEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<RecommendTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final RecommendTypeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public RecommendTypeEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return RecommendTypeEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("recommend_type")
  private RecommendTypeEnum recommendType = RecommendTypeEnum.HORIZON;

  @SerializedName("curr_inv")
  private BigDecimal currInv = null;

  /**
   * Gets or Sets allocationMethod
   */
  @JsonAdapter(AllocationMethodEnum.Adapter.class)
  public enum AllocationMethodEnum {
    SELECT("select"),
    
    CREATE("create");

    private String value;

    AllocationMethodEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static AllocationMethodEnum fromValue(String text) {
      for (AllocationMethodEnum b : AllocationMethodEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<AllocationMethodEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final AllocationMethodEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public AllocationMethodEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return AllocationMethodEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("allocation_method")
  private AllocationMethodEnum allocationMethod = null;

  public GoalAccumulationAllocationRequest threshType(ThreshTypeEnum threshType) {
    this.threshType = threshType;
    return this;
  }

   /**
   * Get threshType
   * @return threshType
  **/
  @ApiModelProperty(value = "")
  public ThreshTypeEnum getThreshType() {
    return threshType;
  }

  public void setThreshType(ThreshTypeEnum threshType) {
    this.threshType = threshType;
  }

  public GoalAccumulationAllocationRequest goalId(UUID goalId) {
    this.goalId = goalId;
    return this;
  }

   /**
   * Get goalId
   * @return goalId
  **/
  @ApiModelProperty(value = "")
  public UUID getGoalId() {
    return goalId;
  }

  public void setGoalId(UUID goalId) {
    this.goalId = goalId;
  }

  public GoalAccumulationAllocationRequest clientId(UUID clientId) {
    this.clientId = clientId;
    return this;
  }

   /**
   * Get clientId
   * @return clientId
  **/
  @ApiModelProperty(value = "")
  public UUID getClientId() {
    return clientId;
  }

  public void setClientId(UUID clientId) {
    this.clientId = clientId;
  }

  public GoalAccumulationAllocationRequest confTgt(Float confTgt) {
    this.confTgt = confTgt;
    return this;
  }

   /**
   * Get confTgt
   * minimum: 0
   * maximum: 1
   * @return confTgt
  **/
  @ApiModelProperty(value = "")
  public Float getConfTgt() {
    return confTgt;
  }

  public void setConfTgt(Float confTgt) {
    this.confTgt = confTgt;
  }

  public GoalAccumulationAllocationRequest riskScore(BigDecimal riskScore) {
    this.riskScore = riskScore;
    return this;
  }

   /**
   * Get riskScore
   * minimum: 0
   * maximum: 100
   * @return riskScore
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getRiskScore() {
    return riskScore;
  }

  public void setRiskScore(BigDecimal riskScore) {
    this.riskScore = riskScore;
  }

  public GoalAccumulationAllocationRequest removeOutliers(Boolean removeOutliers) {
    this.removeOutliers = removeOutliers;
    return this;
  }

   /**
   * Get removeOutliers
   * @return removeOutliers
  **/
  @ApiModelProperty(value = "")
  public Boolean isRemoveOutliers() {
    return removeOutliers;
  }

  public void setRemoveOutliers(Boolean removeOutliers) {
    this.removeOutliers = removeOutliers;
  }

  public GoalAccumulationAllocationRequest allocationPriority(AllocationPriorityEnum allocationPriority) {
    this.allocationPriority = allocationPriority;
    return this;
  }

   /**
   * Get allocationPriority
   * @return allocationPriority
  **/
  @ApiModelProperty(required = true, value = "")
  public AllocationPriorityEnum getAllocationPriority() {
    return allocationPriority;
  }

  public void setAllocationPriority(AllocationPriorityEnum allocationPriority) {
    this.allocationPriority = allocationPriority;
  }

  public GoalAccumulationAllocationRequest marketDataSource(MarketDataSourceEnum marketDataSource) {
    this.marketDataSource = marketDataSource;
    return this;
  }

   /**
   * Get marketDataSource
   * @return marketDataSource
  **/
  @ApiModelProperty(value = "")
  public MarketDataSourceEnum getMarketDataSource() {
    return marketDataSource;
  }

  public void setMarketDataSource(MarketDataSourceEnum marketDataSource) {
    this.marketDataSource = marketDataSource;
  }

  public GoalAccumulationAllocationRequest compoundingRate(Float compoundingRate) {
    this.compoundingRate = compoundingRate;
    return this;
  }

   /**
   * Get compoundingRate
   * minimum: -1
   * @return compoundingRate
  **/
  @ApiModelProperty(value = "")
  public Float getCompoundingRate() {
    return compoundingRate;
  }

  public void setCompoundingRate(Float compoundingRate) {
    this.compoundingRate = compoundingRate;
  }

  public GoalAccumulationAllocationRequest adjustForCompounding(Boolean adjustForCompounding) {
    this.adjustForCompounding = adjustForCompounding;
    return this;
  }

   /**
   * Get adjustForCompounding
   * @return adjustForCompounding
  **/
  @ApiModelProperty(value = "")
  public Boolean isAdjustForCompounding() {
    return adjustForCompounding;
  }

  public void setAdjustForCompounding(Boolean adjustForCompounding) {
    this.adjustForCompounding = adjustForCompounding;
  }

  public GoalAccumulationAllocationRequest optConfig(OptConfig optConfig) {
    this.optConfig = optConfig;
    return this;
  }

   /**
   * Get optConfig
   * @return optConfig
  **/
  @ApiModelProperty(value = "")
  public OptConfig getOptConfig() {
    return optConfig;
  }

  public void setOptConfig(OptConfig optConfig) {
    this.optConfig = optConfig;
  }

  public GoalAccumulationAllocationRequest depositConfig(List<AccumulationGoalDepositConfig> depositConfig) {
    this.depositConfig = depositConfig;
    return this;
  }

  public GoalAccumulationAllocationRequest addDepositConfigItem(AccumulationGoalDepositConfig depositConfigItem) {
    if (this.depositConfig == null) {
      this.depositConfig = new ArrayList<AccumulationGoalDepositConfig>();
    }
    this.depositConfig.add(depositConfigItem);
    return this;
  }

   /**
   * Get depositConfig
   * @return depositConfig
  **/
  @ApiModelProperty(value = "")
  public List<AccumulationGoalDepositConfig> getDepositConfig() {
    return depositConfig;
  }

  public void setDepositConfig(List<AccumulationGoalDepositConfig> depositConfig) {
    this.depositConfig = depositConfig;
  }

  public GoalAccumulationAllocationRequest useProxyData(Boolean useProxyData) {
    this.useProxyData = useProxyData;
    return this;
  }

   /**
   * Get useProxyData
   * @return useProxyData
  **/
  @ApiModelProperty(value = "")
  public Boolean isUseProxyData() {
    return useProxyData;
  }

  public void setUseProxyData(Boolean useProxyData) {
    this.useProxyData = useProxyData;
  }

  public GoalAccumulationAllocationRequest thresh(BigDecimal thresh) {
    this.thresh = thresh;
    return this;
  }

   /**
   * Get thresh
   * minimum: 0
   * @return thresh
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getThresh() {
    return thresh;
  }

  public void setThresh(BigDecimal thresh) {
    this.thresh = thresh;
  }

  public GoalAccumulationAllocationRequest horizonFrequency(HorizonFrequencyEnum horizonFrequency) {
    this.horizonFrequency = horizonFrequency;
    return this;
  }

   /**
   * Get horizonFrequency
   * @return horizonFrequency
  **/
  @ApiModelProperty(value = "")
  public HorizonFrequencyEnum getHorizonFrequency() {
    return horizonFrequency;
  }

  public void setHorizonFrequency(HorizonFrequencyEnum horizonFrequency) {
    this.horizonFrequency = horizonFrequency;
  }

  public GoalAccumulationAllocationRequest recommendationConfig(RecommendationConfig recommendationConfig) {
    this.recommendationConfig = recommendationConfig;
    return this;
  }

   /**
   * Get recommendationConfig
   * @return recommendationConfig
  **/
  @ApiModelProperty(value = "")
  public RecommendationConfig getRecommendationConfig() {
    return recommendationConfig;
  }

  public void setRecommendationConfig(RecommendationConfig recommendationConfig) {
    this.recommendationConfig = recommendationConfig;
  }

  public GoalAccumulationAllocationRequest createLog(Boolean createLog) {
    this.createLog = createLog;
    return this;
  }

   /**
   * Get createLog
   * @return createLog
  **/
  @ApiModelProperty(value = "")
  public Boolean isCreateLog() {
    return createLog;
  }

  public void setCreateLog(Boolean createLog) {
    this.createLog = createLog;
  }

  public GoalAccumulationAllocationRequest withdrawalTax(Float withdrawalTax) {
    this.withdrawalTax = withdrawalTax;
    return this;
  }

   /**
   * Get withdrawalTax
   * minimum: 0
   * maximum: 1
   * @return withdrawalTax
  **/
  @ApiModelProperty(value = "")
  public Float getWithdrawalTax() {
    return withdrawalTax;
  }

  public void setWithdrawalTax(Float withdrawalTax) {
    this.withdrawalTax = withdrawalTax;
  }

  public GoalAccumulationAllocationRequest goalConfig(GoalConfig goalConfig) {
    this.goalConfig = goalConfig;
    return this;
  }

   /**
   * Get goalConfig
   * @return goalConfig
  **/
  @ApiModelProperty(value = "")
  public GoalConfig getGoalConfig() {
    return goalConfig;
  }

  public void setGoalConfig(GoalConfig goalConfig) {
    this.goalConfig = goalConfig;
  }

  public GoalAccumulationAllocationRequest tradingDaysPerYear(Integer tradingDaysPerYear) {
    this.tradingDaysPerYear = tradingDaysPerYear;
    return this;
  }

   /**
   * Get tradingDaysPerYear
   * minimum: 1
   * maximum: 365
   * @return tradingDaysPerYear
  **/
  @ApiModelProperty(value = "")
  public Integer getTradingDaysPerYear() {
    return tradingDaysPerYear;
  }

  public void setTradingDaysPerYear(Integer tradingDaysPerYear) {
    this.tradingDaysPerYear = tradingDaysPerYear;
  }

  public GoalAccumulationAllocationRequest allocations(List<UUID> allocations) {
    this.allocations = allocations;
    return this;
  }

  public GoalAccumulationAllocationRequest addAllocationsItem(UUID allocationsItem) {
    if (this.allocations == null) {
      this.allocations = new ArrayList<UUID>();
    }
    this.allocations.add(allocationsItem);
    return this;
  }

   /**
   * Get allocations
   * @return allocations
  **/
  @ApiModelProperty(value = "")
  public List<UUID> getAllocations() {
    return allocations;
  }

  public void setAllocations(List<UUID> allocations) {
    this.allocations = allocations;
  }

  public GoalAccumulationAllocationRequest n(Integer n) {
    this.n = n;
    return this;
  }

   /**
   * Get n
   * minimum: 1
   * maximum: 10000
   * @return n
  **/
  @ApiModelProperty(value = "")
  public Integer getN() {
    return n;
  }

  public void setN(Integer n) {
    this.n = n;
  }

  public GoalAccumulationAllocationRequest horizon(Integer horizon) {
    this.horizon = horizon;
    return this;
  }

   /**
   * Get horizon
   * minimum: 0
   * maximum: 350
   * @return horizon
  **/
  @ApiModelProperty(value = "")
  public Integer getHorizon() {
    return horizon;
  }

  public void setHorizon(Integer horizon) {
    this.horizon = horizon;
  }

  public GoalAccumulationAllocationRequest recommendType(RecommendTypeEnum recommendType) {
    this.recommendType = recommendType;
    return this;
  }

   /**
   * Get recommendType
   * @return recommendType
  **/
  @ApiModelProperty(value = "")
  public RecommendTypeEnum getRecommendType() {
    return recommendType;
  }

  public void setRecommendType(RecommendTypeEnum recommendType) {
    this.recommendType = recommendType;
  }

  public GoalAccumulationAllocationRequest currInv(BigDecimal currInv) {
    this.currInv = currInv;
    return this;
  }

   /**
   * Get currInv
   * minimum: 0
   * @return currInv
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getCurrInv() {
    return currInv;
  }

  public void setCurrInv(BigDecimal currInv) {
    this.currInv = currInv;
  }

  public GoalAccumulationAllocationRequest allocationMethod(AllocationMethodEnum allocationMethod) {
    this.allocationMethod = allocationMethod;
    return this;
  }

   /**
   * Get allocationMethod
   * @return allocationMethod
  **/
  @ApiModelProperty(required = true, value = "")
  public AllocationMethodEnum getAllocationMethod() {
    return allocationMethod;
  }

  public void setAllocationMethod(AllocationMethodEnum allocationMethod) {
    this.allocationMethod = allocationMethod;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GoalAccumulationAllocationRequest goalAccumulationAllocationRequest = (GoalAccumulationAllocationRequest) o;
    return Objects.equals(this.threshType, goalAccumulationAllocationRequest.threshType) &&
        Objects.equals(this.goalId, goalAccumulationAllocationRequest.goalId) &&
        Objects.equals(this.clientId, goalAccumulationAllocationRequest.clientId) &&
        Objects.equals(this.confTgt, goalAccumulationAllocationRequest.confTgt) &&
        Objects.equals(this.riskScore, goalAccumulationAllocationRequest.riskScore) &&
        Objects.equals(this.removeOutliers, goalAccumulationAllocationRequest.removeOutliers) &&
        Objects.equals(this.allocationPriority, goalAccumulationAllocationRequest.allocationPriority) &&
        Objects.equals(this.marketDataSource, goalAccumulationAllocationRequest.marketDataSource) &&
        Objects.equals(this.compoundingRate, goalAccumulationAllocationRequest.compoundingRate) &&
        Objects.equals(this.adjustForCompounding, goalAccumulationAllocationRequest.adjustForCompounding) &&
        Objects.equals(this.optConfig, goalAccumulationAllocationRequest.optConfig) &&
        Objects.equals(this.depositConfig, goalAccumulationAllocationRequest.depositConfig) &&
        Objects.equals(this.useProxyData, goalAccumulationAllocationRequest.useProxyData) &&
        Objects.equals(this.thresh, goalAccumulationAllocationRequest.thresh) &&
        Objects.equals(this.horizonFrequency, goalAccumulationAllocationRequest.horizonFrequency) &&
        Objects.equals(this.recommendationConfig, goalAccumulationAllocationRequest.recommendationConfig) &&
        Objects.equals(this.createLog, goalAccumulationAllocationRequest.createLog) &&
        Objects.equals(this.withdrawalTax, goalAccumulationAllocationRequest.withdrawalTax) &&
        Objects.equals(this.goalConfig, goalAccumulationAllocationRequest.goalConfig) &&
        Objects.equals(this.tradingDaysPerYear, goalAccumulationAllocationRequest.tradingDaysPerYear) &&
        Objects.equals(this.allocations, goalAccumulationAllocationRequest.allocations) &&
        Objects.equals(this.n, goalAccumulationAllocationRequest.n) &&
        Objects.equals(this.horizon, goalAccumulationAllocationRequest.horizon) &&
        Objects.equals(this.recommendType, goalAccumulationAllocationRequest.recommendType) &&
        Objects.equals(this.currInv, goalAccumulationAllocationRequest.currInv) &&
        Objects.equals(this.allocationMethod, goalAccumulationAllocationRequest.allocationMethod);
  }

  @Override
  public int hashCode() {
    return Objects.hash(threshType, goalId, clientId, confTgt, riskScore, removeOutliers, allocationPriority, marketDataSource, compoundingRate, adjustForCompounding, optConfig, depositConfig, useProxyData, thresh, horizonFrequency, recommendationConfig, createLog, withdrawalTax, goalConfig, tradingDaysPerYear, allocations, n, horizon, recommendType, currInv, allocationMethod);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GoalAccumulationAllocationRequest {\n");
    
    sb.append("    threshType: ").append(toIndentedString(threshType)).append("\n");
    sb.append("    goalId: ").append(toIndentedString(goalId)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    confTgt: ").append(toIndentedString(confTgt)).append("\n");
    sb.append("    riskScore: ").append(toIndentedString(riskScore)).append("\n");
    sb.append("    removeOutliers: ").append(toIndentedString(removeOutliers)).append("\n");
    sb.append("    allocationPriority: ").append(toIndentedString(allocationPriority)).append("\n");
    sb.append("    marketDataSource: ").append(toIndentedString(marketDataSource)).append("\n");
    sb.append("    compoundingRate: ").append(toIndentedString(compoundingRate)).append("\n");
    sb.append("    adjustForCompounding: ").append(toIndentedString(adjustForCompounding)).append("\n");
    sb.append("    optConfig: ").append(toIndentedString(optConfig)).append("\n");
    sb.append("    depositConfig: ").append(toIndentedString(depositConfig)).append("\n");
    sb.append("    useProxyData: ").append(toIndentedString(useProxyData)).append("\n");
    sb.append("    thresh: ").append(toIndentedString(thresh)).append("\n");
    sb.append("    horizonFrequency: ").append(toIndentedString(horizonFrequency)).append("\n");
    sb.append("    recommendationConfig: ").append(toIndentedString(recommendationConfig)).append("\n");
    sb.append("    createLog: ").append(toIndentedString(createLog)).append("\n");
    sb.append("    withdrawalTax: ").append(toIndentedString(withdrawalTax)).append("\n");
    sb.append("    goalConfig: ").append(toIndentedString(goalConfig)).append("\n");
    sb.append("    tradingDaysPerYear: ").append(toIndentedString(tradingDaysPerYear)).append("\n");
    sb.append("    allocations: ").append(toIndentedString(allocations)).append("\n");
    sb.append("    n: ").append(toIndentedString(n)).append("\n");
    sb.append("    horizon: ").append(toIndentedString(horizon)).append("\n");
    sb.append("    recommendType: ").append(toIndentedString(recommendType)).append("\n");
    sb.append("    currInv: ").append(toIndentedString(currInv)).append("\n");
    sb.append("    allocationMethod: ").append(toIndentedString(allocationMethod)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

