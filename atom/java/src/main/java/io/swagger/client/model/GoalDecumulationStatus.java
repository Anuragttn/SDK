/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.GoalDepositConfig;
import io.swagger.client.model.GoalRecommendationConfigStatus;
import io.swagger.client.model.GoalWithdrawalConfig;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * GoalDecumulationStatus
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-09-16T14:10:50.140-04:00")
public class GoalDecumulationStatus {
  @SerializedName("p_ret")
  private List<BigDecimal> pRet = new ArrayList<BigDecimal>();

  @SerializedName("p_risk")
  private List<BigDecimal> pRisk = new ArrayList<BigDecimal>();

  @SerializedName("curr_inv")
  private BigDecimal currInv = null;

  @SerializedName("a_horizon")
  private Integer aHorizon = null;

  @SerializedName("d_horizon")
  private Integer dHorizon = null;

  /**
   * Frequency in relation to the horizon
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
  private HorizonFrequencyEnum horizonFrequency = null;

  @SerializedName("withdrawal_config")
  private List<GoalWithdrawalConfig> withdrawalConfig = new ArrayList<GoalWithdrawalConfig>();

  @SerializedName("deposit_config")
  private List<GoalDepositConfig> depositConfig = null;

  @SerializedName("recommendation_config")
  private GoalRecommendationConfigStatus recommendationConfig = null;

  /**
   * The type of recommended action
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

  @SerializedName("conf_tgt")
  private BigDecimal confTgt = null;

  @SerializedName("n")
  private Integer n = null;

  @SerializedName("remove_outliers")
  private Boolean removeOutliers = true;

  /**
   * The goal deviation threshold type
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

  @SerializedName("thresh")
  private BigDecimal thresh = null;

  @SerializedName("withdrawal_tax")
  private BigDecimal withdrawalTax = null;

  @SerializedName("trading_days_per_year")
  private Integer tradingDaysPerYear = null;

  @SerializedName("adjust_for_compounding")
  private Boolean adjustForCompounding = false;

  @SerializedName("compounding_rate")
  private BigDecimal compoundingRate = null;

  public GoalDecumulationStatus pRet(List<BigDecimal> pRet) {
    this.pRet = pRet;
    return this;
  }

  public GoalDecumulationStatus addPRetItem(BigDecimal pRetItem) {
    this.pRet.add(pRetItem);
    return this;
  }

   /**
   * The annualized portfolio return
   * @return pRet
  **/
  @ApiModelProperty(required = true, value = "The annualized portfolio return")
  public List<BigDecimal> getPRet() {
    return pRet;
  }

  public void setPRet(List<BigDecimal> pRet) {
    this.pRet = pRet;
  }

  public GoalDecumulationStatus pRisk(List<BigDecimal> pRisk) {
    this.pRisk = pRisk;
    return this;
  }

  public GoalDecumulationStatus addPRiskItem(BigDecimal pRiskItem) {
    this.pRisk.add(pRiskItem);
    return this;
  }

   /**
   * The annualized portfolio standard deviation
   * @return pRisk
  **/
  @ApiModelProperty(required = true, value = "The annualized portfolio standard deviation")
  public List<BigDecimal> getPRisk() {
    return pRisk;
  }

  public void setPRisk(List<BigDecimal> pRisk) {
    this.pRisk = pRisk;
  }

  public GoalDecumulationStatus currInv(BigDecimal currInv) {
    this.currInv = currInv;
    return this;
  }

   /**
   * The current amount invested
   * minimum: 0
   * @return currInv
  **/
  @ApiModelProperty(required = true, value = "The current amount invested")
  public BigDecimal getCurrInv() {
    return currInv;
  }

  public void setCurrInv(BigDecimal currInv) {
    this.currInv = currInv;
  }

  public GoalDecumulationStatus aHorizon(Integer aHorizon) {
    this.aHorizon = aHorizon;
    return this;
  }

   /**
   * The accumulation goal horizon
   * minimum: 0
   * maximum: 350
   * @return aHorizon
  **/
  @ApiModelProperty(required = true, value = "The accumulation goal horizon")
  public Integer getAHorizon() {
    return aHorizon;
  }

  public void setAHorizon(Integer aHorizon) {
    this.aHorizon = aHorizon;
  }

  public GoalDecumulationStatus dHorizon(Integer dHorizon) {
    this.dHorizon = dHorizon;
    return this;
  }

   /**
   * The decumulation goal horizon
   * minimum: 0
   * maximum: 350
   * @return dHorizon
  **/
  @ApiModelProperty(required = true, value = "The decumulation goal horizon")
  public Integer getDHorizon() {
    return dHorizon;
  }

  public void setDHorizon(Integer dHorizon) {
    this.dHorizon = dHorizon;
  }

  public GoalDecumulationStatus horizonFrequency(HorizonFrequencyEnum horizonFrequency) {
    this.horizonFrequency = horizonFrequency;
    return this;
  }

   /**
   * Frequency in relation to the horizon
   * @return horizonFrequency
  **/
  @ApiModelProperty(required = true, value = "Frequency in relation to the horizon")
  public HorizonFrequencyEnum getHorizonFrequency() {
    return horizonFrequency;
  }

  public void setHorizonFrequency(HorizonFrequencyEnum horizonFrequency) {
    this.horizonFrequency = horizonFrequency;
  }

  public GoalDecumulationStatus withdrawalConfig(List<GoalWithdrawalConfig> withdrawalConfig) {
    this.withdrawalConfig = withdrawalConfig;
    return this;
  }

  public GoalDecumulationStatus addWithdrawalConfigItem(GoalWithdrawalConfig withdrawalConfigItem) {
    this.withdrawalConfig.add(withdrawalConfigItem);
    return this;
  }

   /**
   * The withdrawal attributes
   * @return withdrawalConfig
  **/
  @ApiModelProperty(required = true, value = "The withdrawal attributes")
  public List<GoalWithdrawalConfig> getWithdrawalConfig() {
    return withdrawalConfig;
  }

  public void setWithdrawalConfig(List<GoalWithdrawalConfig> withdrawalConfig) {
    this.withdrawalConfig = withdrawalConfig;
  }

  public GoalDecumulationStatus depositConfig(List<GoalDepositConfig> depositConfig) {
    this.depositConfig = depositConfig;
    return this;
  }

  public GoalDecumulationStatus addDepositConfigItem(GoalDepositConfig depositConfigItem) {
    if (this.depositConfig == null) {
      this.depositConfig = new ArrayList<GoalDepositConfig>();
    }
    this.depositConfig.add(depositConfigItem);
    return this;
  }

   /**
   * The deposit attributes
   * @return depositConfig
  **/
  @ApiModelProperty(value = "The deposit attributes")
  public List<GoalDepositConfig> getDepositConfig() {
    return depositConfig;
  }

  public void setDepositConfig(List<GoalDepositConfig> depositConfig) {
    this.depositConfig = depositConfig;
  }

  public GoalDecumulationStatus recommendationConfig(GoalRecommendationConfigStatus recommendationConfig) {
    this.recommendationConfig = recommendationConfig;
    return this;
  }

   /**
   * Get recommendationConfig
   * @return recommendationConfig
  **/
  @ApiModelProperty(value = "")
  public GoalRecommendationConfigStatus getRecommendationConfig() {
    return recommendationConfig;
  }

  public void setRecommendationConfig(GoalRecommendationConfigStatus recommendationConfig) {
    this.recommendationConfig = recommendationConfig;
  }

  public GoalDecumulationStatus recommendType(RecommendTypeEnum recommendType) {
    this.recommendType = recommendType;
    return this;
  }

   /**
   * The type of recommended action
   * @return recommendType
  **/
  @ApiModelProperty(value = "The type of recommended action")
  public RecommendTypeEnum getRecommendType() {
    return recommendType;
  }

  public void setRecommendType(RecommendTypeEnum recommendType) {
    this.recommendType = recommendType;
  }

  public GoalDecumulationStatus confTgt(BigDecimal confTgt) {
    this.confTgt = confTgt;
    return this;
  }

   /**
   * The confidence target
   * minimum: 0
   * maximum: 1
   * @return confTgt
  **/
  @ApiModelProperty(value = "The confidence target")
  public BigDecimal getConfTgt() {
    return confTgt;
  }

  public void setConfTgt(BigDecimal confTgt) {
    this.confTgt = confTgt;
  }

  public GoalDecumulationStatus n(Integer n) {
    this.n = n;
    return this;
  }

   /**
   * The number of Monte Carlo simulations to run
   * minimum: 0
   * maximum: 10000
   * @return n
  **/
  @ApiModelProperty(value = "The number of Monte Carlo simulations to run")
  public Integer getN() {
    return n;
  }

  public void setN(Integer n) {
    this.n = n;
  }

  public GoalDecumulationStatus removeOutliers(Boolean removeOutliers) {
    this.removeOutliers = removeOutliers;
    return this;
  }

   /**
   * If TRUE, remove outlying results
   * @return removeOutliers
  **/
  @ApiModelProperty(value = "If TRUE, remove outlying results")
  public Boolean isRemoveOutliers() {
    return removeOutliers;
  }

  public void setRemoveOutliers(Boolean removeOutliers) {
    this.removeOutliers = removeOutliers;
  }

  public GoalDecumulationStatus threshType(ThreshTypeEnum threshType) {
    this.threshType = threshType;
    return this;
  }

   /**
   * The goal deviation threshold type
   * @return threshType
  **/
  @ApiModelProperty(value = "The goal deviation threshold type")
  public ThreshTypeEnum getThreshType() {
    return threshType;
  }

  public void setThreshType(ThreshTypeEnum threshType) {
    this.threshType = threshType;
  }

  public GoalDecumulationStatus thresh(BigDecimal thresh) {
    this.thresh = thresh;
    return this;
  }

   /**
   * The goal deviation threshold value
   * minimum: 0
   * @return thresh
  **/
  @ApiModelProperty(value = "The goal deviation threshold value")
  public BigDecimal getThresh() {
    return thresh;
  }

  public void setThresh(BigDecimal thresh) {
    this.thresh = thresh;
  }

  public GoalDecumulationStatus withdrawalTax(BigDecimal withdrawalTax) {
    this.withdrawalTax = withdrawalTax;
    return this;
  }

   /**
   * The tax rate for withdrawals
   * minimum: 0
   * maximum: 1
   * @return withdrawalTax
  **/
  @ApiModelProperty(value = "The tax rate for withdrawals")
  public BigDecimal getWithdrawalTax() {
    return withdrawalTax;
  }

  public void setWithdrawalTax(BigDecimal withdrawalTax) {
    this.withdrawalTax = withdrawalTax;
  }

  public GoalDecumulationStatus tradingDaysPerYear(Integer tradingDaysPerYear) {
    this.tradingDaysPerYear = tradingDaysPerYear;
    return this;
  }

   /**
   * Days per year a portfolio trades
   * minimum: 0
   * maximum: 365
   * @return tradingDaysPerYear
  **/
  @ApiModelProperty(value = "Days per year a portfolio trades")
  public Integer getTradingDaysPerYear() {
    return tradingDaysPerYear;
  }

  public void setTradingDaysPerYear(Integer tradingDaysPerYear) {
    this.tradingDaysPerYear = tradingDaysPerYear;
  }

  public GoalDecumulationStatus adjustForCompounding(Boolean adjustForCompounding) {
    this.adjustForCompounding = adjustForCompounding;
    return this;
  }

   /**
   * If true, adjust periodic deposit amounts for compounding based on compounding_rate. This applies when a deposit’s dep_frequency is shorter than horizon_frequency. Defaults to false.
   * @return adjustForCompounding
  **/
  @ApiModelProperty(value = "If true, adjust periodic deposit amounts for compounding based on compounding_rate. This applies when a deposit’s dep_frequency is shorter than horizon_frequency. Defaults to false.")
  public Boolean isAdjustForCompounding() {
    return adjustForCompounding;
  }

  public void setAdjustForCompounding(Boolean adjustForCompounding) {
    this.adjustForCompounding = adjustForCompounding;
  }

  public GoalDecumulationStatus compoundingRate(BigDecimal compoundingRate) {
    this.compoundingRate = compoundingRate;
    return this;
  }

   /**
   * The annualized rate to use when approximating a compounding effect on deposits. This value must be defined and adjust_for_compounding must be true in order to activate compounding adjustment. Defaults to 0.
   * @return compoundingRate
  **/
  @ApiModelProperty(value = "The annualized rate to use when approximating a compounding effect on deposits. This value must be defined and adjust_for_compounding must be true in order to activate compounding adjustment. Defaults to 0.")
  public BigDecimal getCompoundingRate() {
    return compoundingRate;
  }

  public void setCompoundingRate(BigDecimal compoundingRate) {
    this.compoundingRate = compoundingRate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GoalDecumulationStatus goalDecumulationStatus = (GoalDecumulationStatus) o;
    return Objects.equals(this.pRet, goalDecumulationStatus.pRet) &&
        Objects.equals(this.pRisk, goalDecumulationStatus.pRisk) &&
        Objects.equals(this.currInv, goalDecumulationStatus.currInv) &&
        Objects.equals(this.aHorizon, goalDecumulationStatus.aHorizon) &&
        Objects.equals(this.dHorizon, goalDecumulationStatus.dHorizon) &&
        Objects.equals(this.horizonFrequency, goalDecumulationStatus.horizonFrequency) &&
        Objects.equals(this.withdrawalConfig, goalDecumulationStatus.withdrawalConfig) &&
        Objects.equals(this.depositConfig, goalDecumulationStatus.depositConfig) &&
        Objects.equals(this.recommendationConfig, goalDecumulationStatus.recommendationConfig) &&
        Objects.equals(this.recommendType, goalDecumulationStatus.recommendType) &&
        Objects.equals(this.confTgt, goalDecumulationStatus.confTgt) &&
        Objects.equals(this.n, goalDecumulationStatus.n) &&
        Objects.equals(this.removeOutliers, goalDecumulationStatus.removeOutliers) &&
        Objects.equals(this.threshType, goalDecumulationStatus.threshType) &&
        Objects.equals(this.thresh, goalDecumulationStatus.thresh) &&
        Objects.equals(this.withdrawalTax, goalDecumulationStatus.withdrawalTax) &&
        Objects.equals(this.tradingDaysPerYear, goalDecumulationStatus.tradingDaysPerYear) &&
        Objects.equals(this.adjustForCompounding, goalDecumulationStatus.adjustForCompounding) &&
        Objects.equals(this.compoundingRate, goalDecumulationStatus.compoundingRate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(pRet, pRisk, currInv, aHorizon, dHorizon, horizonFrequency, withdrawalConfig, depositConfig, recommendationConfig, recommendType, confTgt, n, removeOutliers, threshType, thresh, withdrawalTax, tradingDaysPerYear, adjustForCompounding, compoundingRate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GoalDecumulationStatus {\n");
    
    sb.append("    pRet: ").append(toIndentedString(pRet)).append("\n");
    sb.append("    pRisk: ").append(toIndentedString(pRisk)).append("\n");
    sb.append("    currInv: ").append(toIndentedString(currInv)).append("\n");
    sb.append("    aHorizon: ").append(toIndentedString(aHorizon)).append("\n");
    sb.append("    dHorizon: ").append(toIndentedString(dHorizon)).append("\n");
    sb.append("    horizonFrequency: ").append(toIndentedString(horizonFrequency)).append("\n");
    sb.append("    withdrawalConfig: ").append(toIndentedString(withdrawalConfig)).append("\n");
    sb.append("    depositConfig: ").append(toIndentedString(depositConfig)).append("\n");
    sb.append("    recommendationConfig: ").append(toIndentedString(recommendationConfig)).append("\n");
    sb.append("    recommendType: ").append(toIndentedString(recommendType)).append("\n");
    sb.append("    confTgt: ").append(toIndentedString(confTgt)).append("\n");
    sb.append("    n: ").append(toIndentedString(n)).append("\n");
    sb.append("    removeOutliers: ").append(toIndentedString(removeOutliers)).append("\n");
    sb.append("    threshType: ").append(toIndentedString(threshType)).append("\n");
    sb.append("    thresh: ").append(toIndentedString(thresh)).append("\n");
    sb.append("    withdrawalTax: ").append(toIndentedString(withdrawalTax)).append("\n");
    sb.append("    tradingDaysPerYear: ").append(toIndentedString(tradingDaysPerYear)).append("\n");
    sb.append("    adjustForCompounding: ").append(toIndentedString(adjustForCompounding)).append("\n");
    sb.append("    compoundingRate: ").append(toIndentedString(compoundingRate)).append("\n");
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

