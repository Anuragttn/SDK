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
import java.io.IOException;
import java.math.BigDecimal;

/**
 * LifeInsuranceReturnDetail
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-09-16T14:10:50.140-04:00")
public class LifeInsuranceReturnDetail {
  @SerializedName("period_earnings")
  private BigDecimal periodEarnings = null;

  @SerializedName("period_withdrawal")
  private BigDecimal periodWithdrawal = null;

  @SerializedName("cumulative_earnings")
  private BigDecimal cumulativeEarnings = null;

  @SerializedName("cumulative_withdrawals")
  private BigDecimal cumulativeWithdrawals = null;

  @SerializedName("ending_balance")
  private BigDecimal endingBalance = null;

  public LifeInsuranceReturnDetail periodEarnings(BigDecimal periodEarnings) {
    this.periodEarnings = periodEarnings;
    return this;
  }

   /**
   * The investment earnings for this period. Earnings are calculated at the beginning of each period, before contributions or withdrawals are made.
   * minimum: 0
   * @return periodEarnings
  **/
  @ApiModelProperty(required = true, value = "The investment earnings for this period. Earnings are calculated at the beginning of each period, before contributions or withdrawals are made.")
  public BigDecimal getPeriodEarnings() {
    return periodEarnings;
  }

  public void setPeriodEarnings(BigDecimal periodEarnings) {
    this.periodEarnings = periodEarnings;
  }

  public LifeInsuranceReturnDetail periodWithdrawal(BigDecimal periodWithdrawal) {
    this.periodWithdrawal = periodWithdrawal;
    return this;
  }

   /**
   * The withdrawal made for this period.
   * minimum: 0
   * @return periodWithdrawal
  **/
  @ApiModelProperty(required = true, value = "The withdrawal made for this period.")
  public BigDecimal getPeriodWithdrawal() {
    return periodWithdrawal;
  }

  public void setPeriodWithdrawal(BigDecimal periodWithdrawal) {
    this.periodWithdrawal = periodWithdrawal;
  }

  public LifeInsuranceReturnDetail cumulativeEarnings(BigDecimal cumulativeEarnings) {
    this.cumulativeEarnings = cumulativeEarnings;
    return this;
  }

   /**
   * The cumulative investment earnings made up to and including this period.
   * minimum: 0
   * @return cumulativeEarnings
  **/
  @ApiModelProperty(required = true, value = "The cumulative investment earnings made up to and including this period.")
  public BigDecimal getCumulativeEarnings() {
    return cumulativeEarnings;
  }

  public void setCumulativeEarnings(BigDecimal cumulativeEarnings) {
    this.cumulativeEarnings = cumulativeEarnings;
  }

  public LifeInsuranceReturnDetail cumulativeWithdrawals(BigDecimal cumulativeWithdrawals) {
    this.cumulativeWithdrawals = cumulativeWithdrawals;
    return this;
  }

   /**
   * The cumulative withdrawals made up to and including this period.
   * minimum: 0
   * @return cumulativeWithdrawals
  **/
  @ApiModelProperty(required = true, value = "The cumulative withdrawals made up to and including this period.")
  public BigDecimal getCumulativeWithdrawals() {
    return cumulativeWithdrawals;
  }

  public void setCumulativeWithdrawals(BigDecimal cumulativeWithdrawals) {
    this.cumulativeWithdrawals = cumulativeWithdrawals;
  }

  public LifeInsuranceReturnDetail endingBalance(BigDecimal endingBalance) {
    this.endingBalance = endingBalance;
    return this;
  }

   /**
   * The ending balance, inclusive of earnings and contributions for the current period.
   * minimum: 0
   * @return endingBalance
  **/
  @ApiModelProperty(required = true, value = "The ending balance, inclusive of earnings and contributions for the current period.")
  public BigDecimal getEndingBalance() {
    return endingBalance;
  }

  public void setEndingBalance(BigDecimal endingBalance) {
    this.endingBalance = endingBalance;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LifeInsuranceReturnDetail lifeInsuranceReturnDetail = (LifeInsuranceReturnDetail) o;
    return Objects.equals(this.periodEarnings, lifeInsuranceReturnDetail.periodEarnings) &&
        Objects.equals(this.periodWithdrawal, lifeInsuranceReturnDetail.periodWithdrawal) &&
        Objects.equals(this.cumulativeEarnings, lifeInsuranceReturnDetail.cumulativeEarnings) &&
        Objects.equals(this.cumulativeWithdrawals, lifeInsuranceReturnDetail.cumulativeWithdrawals) &&
        Objects.equals(this.endingBalance, lifeInsuranceReturnDetail.endingBalance);
  }

  @Override
  public int hashCode() {
    return Objects.hash(periodEarnings, periodWithdrawal, cumulativeEarnings, cumulativeWithdrawals, endingBalance);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LifeInsuranceReturnDetail {\n");
    
    sb.append("    periodEarnings: ").append(toIndentedString(periodEarnings)).append("\n");
    sb.append("    periodWithdrawal: ").append(toIndentedString(periodWithdrawal)).append("\n");
    sb.append("    cumulativeEarnings: ").append(toIndentedString(cumulativeEarnings)).append("\n");
    sb.append("    cumulativeWithdrawals: ").append(toIndentedString(cumulativeWithdrawals)).append("\n");
    sb.append("    endingBalance: ").append(toIndentedString(endingBalance)).append("\n");
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

