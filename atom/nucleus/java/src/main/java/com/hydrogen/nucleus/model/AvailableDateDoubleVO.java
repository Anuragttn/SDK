/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.model;

import java.util.Objects;

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * Available Date-Double Mapping Object
 */
@ApiModel(description = "Available Date-Double Mapping Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-28T16:21:02.928Z")



public class AvailableDateDoubleVO {
  @SerializedName("additions")
  private Double additions = null;

  @SerializedName("cash_flow")
  private Double cashFlow = null;

  @SerializedName("currency_code")
  private String currencyCode = null;

  @SerializedName("date")
  private String date = null;

  @SerializedName("value")
  private Double value = null;

  @SerializedName("value_available")
  private Double valueAvailable = null;

  @SerializedName("value_pending")
  private Double valuePending = null;

  public AvailableDateDoubleVO additions(Double additions) {
    this.additions = additions;
    return this;
  }

   /**
   * additions
   * @return additions
  **/
  @ApiModelProperty(example = "0.0", value = "additions")
  public Double getAdditions() {
    return additions;
  }

  public void setAdditions(Double additions) {
    this.additions = additions;
  }

  public AvailableDateDoubleVO cashFlow(Double cashFlow) {
    this.cashFlow = cashFlow;
    return this;
  }

   /**
   * cashFlow
   * @return cashFlow
  **/
  @ApiModelProperty(example = "20000.0", value = "cashFlow")
  public Double getCashFlow() {
    return cashFlow;
  }

  public void setCashFlow(Double cashFlow) {
    this.cashFlow = cashFlow;
  }

  public AvailableDateDoubleVO currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * currencyCode
   * @return currencyCode
  **/
  @ApiModelProperty(example = "USD", value = "currencyCode")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }

  public AvailableDateDoubleVO date(String date) {
    this.date = date;
    return this;
  }

   /**
   * date
   * @return date
  **/
  @ApiModelProperty(example = "2018-02-03", value = "date")
  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public AvailableDateDoubleVO value(Double value) {
    this.value = value;
    return this;
  }

   /**
   * value
   * @return value
  **/
  @ApiModelProperty(example = "20000.0", value = "value")
  public Double getValue() {
    return value;
  }

  public void setValue(Double value) {
    this.value = value;
  }

  public AvailableDateDoubleVO valueAvailable(Double valueAvailable) {
    this.valueAvailable = valueAvailable;
    return this;
  }

   /**
   * valueAvailable
   * @return valueAvailable
  **/
  @ApiModelProperty(example = "20000.0", value = "valueAvailable")
  public Double getValueAvailable() {
    return valueAvailable;
  }

  public void setValueAvailable(Double valueAvailable) {
    this.valueAvailable = valueAvailable;
  }

  public AvailableDateDoubleVO valuePending(Double valuePending) {
    this.valuePending = valuePending;
    return this;
  }

   /**
   * valuePending
   * @return valuePending
  **/
  @ApiModelProperty(example = "20000.0", value = "valuePending")
  public Double getValuePending() {
    return valuePending;
  }

  public void setValuePending(Double valuePending) {
    this.valuePending = valuePending;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AvailableDateDoubleVO availableDateDoubleVO = (AvailableDateDoubleVO) o;
    return Objects.equals(this.additions, availableDateDoubleVO.additions) &&
        Objects.equals(this.cashFlow, availableDateDoubleVO.cashFlow) &&
        Objects.equals(this.currencyCode, availableDateDoubleVO.currencyCode) &&
        Objects.equals(this.date, availableDateDoubleVO.date) &&
        Objects.equals(this.value, availableDateDoubleVO.value) &&
        Objects.equals(this.valueAvailable, availableDateDoubleVO.valueAvailable) &&
        Objects.equals(this.valuePending, availableDateDoubleVO.valuePending);
  }

  @Override
  public int hashCode() {
    return Objects.hash(additions, cashFlow, currencyCode, date, value, valueAvailable, valuePending);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AvailableDateDoubleVO {\n");
    
    sb.append("    additions: ").append(toIndentedString(additions)).append("\n");
    sb.append("    cashFlow: ").append(toIndentedString(cashFlow)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    valueAvailable: ").append(toIndentedString(valueAvailable)).append("\n");
    sb.append("    valuePending: ").append(toIndentedString(valuePending)).append("\n");
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

