/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.model;

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
import org.threeten.bp.OffsetDateTime;

/**
 * CardBalance Mapping Object
 */
@ApiModel(description = "CardBalance Mapping Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class CardBalanceVO {
  @SerializedName("balance")
  private Double balance = null;

  @SerializedName("balance_available")
  private Double balanceAvailable = null;

  @SerializedName("balance_timestamp")
  private OffsetDateTime balanceTimestamp = null;

  @SerializedName("currency_code")
  private String currencyCode = null;

  public CardBalanceVO balance(Double balance) {
    this.balance = balance;
    return this;
  }

   /**
   * balance
   * @return balance
  **/
  @ApiModelProperty(example = "20000.0", value = "balance")
  public Double getBalance() {
    return balance;
  }

  public void setBalance(Double balance) {
    this.balance = balance;
  }

  public CardBalanceVO balanceAvailable(Double balanceAvailable) {
    this.balanceAvailable = balanceAvailable;
    return this;
  }

   /**
   * balanceAvailable
   * @return balanceAvailable
  **/
  @ApiModelProperty(example = "20000.0", value = "balanceAvailable")
  public Double getBalanceAvailable() {
    return balanceAvailable;
  }

  public void setBalanceAvailable(Double balanceAvailable) {
    this.balanceAvailable = balanceAvailable;
  }

  public CardBalanceVO balanceTimestamp(OffsetDateTime balanceTimestamp) {
    this.balanceTimestamp = balanceTimestamp;
    return this;
  }

   /**
   * balanceTimestamp
   * @return balanceTimestamp
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "balanceTimestamp")
  public OffsetDateTime getBalanceTimestamp() {
    return balanceTimestamp;
  }

  public void setBalanceTimestamp(OffsetDateTime balanceTimestamp) {
    this.balanceTimestamp = balanceTimestamp;
  }

  public CardBalanceVO currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * currencyCode
   * @return currencyCode
  **/
  @ApiModelProperty(example = "AED", value = "currencyCode")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CardBalanceVO cardBalanceVO = (CardBalanceVO) o;
    return Objects.equals(this.balance, cardBalanceVO.balance) &&
        Objects.equals(this.balanceAvailable, cardBalanceVO.balanceAvailable) &&
        Objects.equals(this.balanceTimestamp, cardBalanceVO.balanceTimestamp) &&
        Objects.equals(this.currencyCode, cardBalanceVO.currencyCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(balance, balanceAvailable, balanceTimestamp, currencyCode);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CardBalanceVO {\n");
    
    sb.append("    balance: ").append(toIndentedString(balance)).append("\n");
    sb.append("    balanceAvailable: ").append(toIndentedString(balanceAvailable)).append("\n");
    sb.append("    balanceTimestamp: ").append(toIndentedString(balanceTimestamp)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
