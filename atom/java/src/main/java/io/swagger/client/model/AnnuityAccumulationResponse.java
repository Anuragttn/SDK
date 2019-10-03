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
import io.swagger.client.model.AnnuityHorizon;
import io.swagger.client.model.AnnuityReturnDetail;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * AnnuityAccumulationResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-09-16T14:10:50.140-04:00")
public class AnnuityAccumulationResponse {
  @SerializedName("accumulation_horizon")
  private AnnuityHorizon accumulationHorizon = null;

  @SerializedName("total_earnings")
  private BigDecimal totalEarnings = null;

  @SerializedName("total_contributions")
  private BigDecimal totalContributions = null;

  @SerializedName("cumulative_annuity_amount")
  private BigDecimal cumulativeAnnuityAmount = null;

  @SerializedName("total_taxes")
  private BigDecimal totalTaxes = null;

  @SerializedName("return_details")
  private Map<String, AnnuityReturnDetail> returnDetails = new HashMap<String, AnnuityReturnDetail>();

  public AnnuityAccumulationResponse accumulationHorizon(AnnuityHorizon accumulationHorizon) {
    this.accumulationHorizon = accumulationHorizon;
    return this;
  }

   /**
   * Get accumulationHorizon
   * @return accumulationHorizon
  **/
  @ApiModelProperty(required = true, value = "")
  public AnnuityHorizon getAccumulationHorizon() {
    return accumulationHorizon;
  }

  public void setAccumulationHorizon(AnnuityHorizon accumulationHorizon) {
    this.accumulationHorizon = accumulationHorizon;
  }

  public AnnuityAccumulationResponse totalEarnings(BigDecimal totalEarnings) {
    this.totalEarnings = totalEarnings;
    return this;
  }

   /**
   * The total earnings generated over the horizon.
   * @return totalEarnings
  **/
  @ApiModelProperty(required = true, value = "The total earnings generated over the horizon.")
  public BigDecimal getTotalEarnings() {
    return totalEarnings;
  }

  public void setTotalEarnings(BigDecimal totalEarnings) {
    this.totalEarnings = totalEarnings;
  }

  public AnnuityAccumulationResponse totalContributions(BigDecimal totalContributions) {
    this.totalContributions = totalContributions;
    return this;
  }

   /**
   * The total contributinos added over the horizon.
   * @return totalContributions
  **/
  @ApiModelProperty(required = true, value = "The total contributinos added over the horizon.")
  public BigDecimal getTotalContributions() {
    return totalContributions;
  }

  public void setTotalContributions(BigDecimal totalContributions) {
    this.totalContributions = totalContributions;
  }

  public AnnuityAccumulationResponse cumulativeAnnuityAmount(BigDecimal cumulativeAnnuityAmount) {
    this.cumulativeAnnuityAmount = cumulativeAnnuityAmount;
    return this;
  }

   /**
   * The total amount received from the annuity over the course of the plan.
   * minimum: 0
   * @return cumulativeAnnuityAmount
  **/
  @ApiModelProperty(required = true, value = "The total amount received from the annuity over the course of the plan.")
  public BigDecimal getCumulativeAnnuityAmount() {
    return cumulativeAnnuityAmount;
  }

  public void setCumulativeAnnuityAmount(BigDecimal cumulativeAnnuityAmount) {
    this.cumulativeAnnuityAmount = cumulativeAnnuityAmount;
  }

  public AnnuityAccumulationResponse totalTaxes(BigDecimal totalTaxes) {
    this.totalTaxes = totalTaxes;
    return this;
  }

   /**
   * The total taxes paid on annuity payments over decumulation_horizon.
   * @return totalTaxes
  **/
  @ApiModelProperty(required = true, value = "The total taxes paid on annuity payments over decumulation_horizon.")
  public BigDecimal getTotalTaxes() {
    return totalTaxes;
  }

  public void setTotalTaxes(BigDecimal totalTaxes) {
    this.totalTaxes = totalTaxes;
  }

  public AnnuityAccumulationResponse returnDetails(Map<String, AnnuityReturnDetail> returnDetails) {
    this.returnDetails = returnDetails;
    return this;
  }

  public AnnuityAccumulationResponse putReturnDetailsItem(String key, AnnuityReturnDetail returnDetailsItem) {
    this.returnDetails.put(key, returnDetailsItem);
    return this;
  }

   /**
   * Get returnDetails
   * @return returnDetails
  **/
  @ApiModelProperty(required = true, value = "")
  public Map<String, AnnuityReturnDetail> getReturnDetails() {
    return returnDetails;
  }

  public void setReturnDetails(Map<String, AnnuityReturnDetail> returnDetails) {
    this.returnDetails = returnDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AnnuityAccumulationResponse annuityAccumulationResponse = (AnnuityAccumulationResponse) o;
    return Objects.equals(this.accumulationHorizon, annuityAccumulationResponse.accumulationHorizon) &&
        Objects.equals(this.totalEarnings, annuityAccumulationResponse.totalEarnings) &&
        Objects.equals(this.totalContributions, annuityAccumulationResponse.totalContributions) &&
        Objects.equals(this.cumulativeAnnuityAmount, annuityAccumulationResponse.cumulativeAnnuityAmount) &&
        Objects.equals(this.totalTaxes, annuityAccumulationResponse.totalTaxes) &&
        Objects.equals(this.returnDetails, annuityAccumulationResponse.returnDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accumulationHorizon, totalEarnings, totalContributions, cumulativeAnnuityAmount, totalTaxes, returnDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AnnuityAccumulationResponse {\n");
    
    sb.append("    accumulationHorizon: ").append(toIndentedString(accumulationHorizon)).append("\n");
    sb.append("    totalEarnings: ").append(toIndentedString(totalEarnings)).append("\n");
    sb.append("    totalContributions: ").append(toIndentedString(totalContributions)).append("\n");
    sb.append("    cumulativeAnnuityAmount: ").append(toIndentedString(cumulativeAnnuityAmount)).append("\n");
    sb.append("    totalTaxes: ").append(toIndentedString(totalTaxes)).append("\n");
    sb.append("    returnDetails: ").append(toIndentedString(returnDetails)).append("\n");
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

