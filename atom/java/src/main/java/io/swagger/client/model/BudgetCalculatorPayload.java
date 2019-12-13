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
import java.util.UUID;
import org.threeten.bp.LocalDate;

/**
 * BudgetCalculatorPayload
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-09-16T14:10:50.140-04:00")
public class BudgetCalculatorPayload {
  @SerializedName("budget_id")
  private UUID budgetId = null;

  @SerializedName("as_of_date")
  private LocalDate asOfDate = null;

  @SerializedName("lookback_periods")
  private Integer lookbackPeriods = null;

  @SerializedName("relative_lookback")
  private Boolean relativeLookback = null;

  public BudgetCalculatorPayload budgetId(UUID budgetId) {
    this.budgetId = budgetId;
    return this;
  }

   /**
   * Identifier for a budget defined in Nucleus
   * @return budgetId
  **/
  @ApiModelProperty(required = true, value = "Identifier for a budget defined in Nucleus")
  public UUID getBudgetId() {
    return budgetId;
  }

  public void setBudgetId(UUID budgetId) {
    this.budgetId = budgetId;
  }

  public BudgetCalculatorPayload asOfDate(LocalDate asOfDate) {
    this.asOfDate = asOfDate;
    return this;
  }

   /**
   * Reference date of the analysis. Calculations will run through the earlier of this date and budget.end_date
   * @return asOfDate
  **/
  @ApiModelProperty(value = "Reference date of the analysis. Calculations will run through the earlier of this date and budget.end_date")
  public LocalDate getAsOfDate() {
    return asOfDate;
  }

  public void setAsOfDate(LocalDate asOfDate) {
    this.asOfDate = asOfDate;
  }

  public BudgetCalculatorPayload lookbackPeriods(Integer lookbackPeriods) {
    this.lookbackPeriods = lookbackPeriods;
    return this;
  }

   /**
   * Number of lookback periods to analyze. Each period length is defined by the combination of budget.frequency and budget.frequency_unit
   * @return lookbackPeriods
  **/
  @ApiModelProperty(value = "Number of lookback periods to analyze. Each period length is defined by the combination of budget.frequency and budget.frequency_unit")
  public Integer getLookbackPeriods() {
    return lookbackPeriods;
  }

  public void setLookbackPeriods(Integer lookbackPeriods) {
    this.lookbackPeriods = lookbackPeriods;
  }

  public BudgetCalculatorPayload relativeLookback(Boolean relativeLookback) {
    this.relativeLookback = relativeLookback;
    return this;
  }

   /**
   * If true, determine dates using a relative calendar basis
   * @return relativeLookback
  **/
  @ApiModelProperty(value = "If true, determine dates using a relative calendar basis")
  public Boolean isRelativeLookback() {
    return relativeLookback;
  }

  public void setRelativeLookback(Boolean relativeLookback) {
    this.relativeLookback = relativeLookback;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BudgetCalculatorPayload budgetCalculatorPayload = (BudgetCalculatorPayload) o;
    return Objects.equals(this.budgetId, budgetCalculatorPayload.budgetId) &&
        Objects.equals(this.asOfDate, budgetCalculatorPayload.asOfDate) &&
        Objects.equals(this.lookbackPeriods, budgetCalculatorPayload.lookbackPeriods) &&
        Objects.equals(this.relativeLookback, budgetCalculatorPayload.relativeLookback);
  }

  @Override
  public int hashCode() {
    return Objects.hash(budgetId, asOfDate, lookbackPeriods, relativeLookback);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BudgetCalculatorPayload {\n");
    
    sb.append("    budgetId: ").append(toIndentedString(budgetId)).append("\n");
    sb.append("    asOfDate: ").append(toIndentedString(asOfDate)).append("\n");
    sb.append("    lookbackPeriods: ").append(toIndentedString(lookbackPeriods)).append("\n");
    sb.append("    relativeLookback: ").append(toIndentedString(relativeLookback)).append("\n");
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
