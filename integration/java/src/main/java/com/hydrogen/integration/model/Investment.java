/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.integration.model;

import java.util.Objects;

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.threeten.bp.OffsetDateTime;

/**
 * Investment Object
 */
@ApiModel(description = "Investment Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class Investment {
  @SerializedName("fee")
  private Double fee = null;

  @SerializedName("investment_type")
  private String investmentType = null;

  @SerializedName("price")
  private Double price = null;

  @SerializedName("quantity")
  private Double quantity = null;

  @SerializedName("settle_date")
  private OffsetDateTime settleDate = null;

  @SerializedName("ticker")
  private String ticker = null;

  @SerializedName("ticker_name")
  private String tickerName = null;

  @SerializedName("trade_signal")
  private String tradeSignal = null;

  @SerializedName("value")
  private Double value = null;

  public Investment fee(Double fee) {
    this.fee = fee;
    return this;
  }

   /**
   * fee
   * @return fee
  **/
  @ApiModelProperty(example = "2345.0", value = "fee")
  public Double getFee() {
    return fee;
  }

  public void setFee(Double fee) {
    this.fee = fee;
  }

  public Investment investmentType(String investmentType) {
    this.investmentType = investmentType;
    return this;
  }

   /**
   * investmentType
   * @return investmentType
  **/
  @ApiModelProperty(example = "investmentType", value = "investmentType")
  public String getInvestmentType() {
    return investmentType;
  }

  public void setInvestmentType(String investmentType) {
    this.investmentType = investmentType;
  }

  public Investment price(Double price) {
    this.price = price;
    return this;
  }

   /**
   * price
   * @return price
  **/
  @ApiModelProperty(example = "23.9", required = true, value = "price")
  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public Investment quantity(Double quantity) {
    this.quantity = quantity;
    return this;
  }

   /**
   * quantity
   * @return quantity
  **/
  @ApiModelProperty(example = "33.9", required = true, value = "quantity")
  public Double getQuantity() {
    return quantity;
  }

  public void setQuantity(Double quantity) {
    this.quantity = quantity;
  }

  public Investment settleDate(OffsetDateTime settleDate) {
    this.settleDate = settleDate;
    return this;
  }

   /**
   * settleDate
   * @return settleDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "settleDate")
  public OffsetDateTime getSettleDate() {
    return settleDate;
  }

  public void setSettleDate(OffsetDateTime settleDate) {
    this.settleDate = settleDate;
  }

  public Investment ticker(String ticker) {
    this.ticker = ticker;
    return this;
  }

   /**
   * ticker
   * @return ticker
  **/
  @ApiModelProperty(example = "ticker", required = true, value = "ticker")
  public String getTicker() {
    return ticker;
  }

  public void setTicker(String ticker) {
    this.ticker = ticker;
  }

  public Investment tickerName(String tickerName) {
    this.tickerName = tickerName;
    return this;
  }

   /**
   * tickerName
   * @return tickerName
  **/
  @ApiModelProperty(example = "tickerName", value = "tickerName")
  public String getTickerName() {
    return tickerName;
  }

  public void setTickerName(String tickerName) {
    this.tickerName = tickerName;
  }

  public Investment tradeSignal(String tradeSignal) {
    this.tradeSignal = tradeSignal;
    return this;
  }

   /**
   * tradeSignal
   * @return tradeSignal
  **/
  @ApiModelProperty(example = "tradeSignal", required = true, value = "tradeSignal")
  public String getTradeSignal() {
    return tradeSignal;
  }

  public void setTradeSignal(String tradeSignal) {
    this.tradeSignal = tradeSignal;
  }

  public Investment value(Double value) {
    this.value = value;
    return this;
  }

   /**
   * value
   * @return value
  **/
  @ApiModelProperty(example = "2345.0", value = "value")
  public Double getValue() {
    return value;
  }

  public void setValue(Double value) {
    this.value = value;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Investment investment = (Investment) o;
    return Objects.equals(this.fee, investment.fee) &&
        Objects.equals(this.investmentType, investment.investmentType) &&
        Objects.equals(this.price, investment.price) &&
        Objects.equals(this.quantity, investment.quantity) &&
        Objects.equals(this.settleDate, investment.settleDate) &&
        Objects.equals(this.ticker, investment.ticker) &&
        Objects.equals(this.tickerName, investment.tickerName) &&
        Objects.equals(this.tradeSignal, investment.tradeSignal) &&
        Objects.equals(this.value, investment.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fee, investmentType, price, quantity, settleDate, ticker, tickerName, tradeSignal, value);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Investment {\n");
    
    sb.append("    fee: ").append(toIndentedString(fee)).append("\n");
    sb.append("    investmentType: ").append(toIndentedString(investmentType)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    settleDate: ").append(toIndentedString(settleDate)).append("\n");
    sb.append("    ticker: ").append(toIndentedString(ticker)).append("\n");
    sb.append("    tickerName: ").append(toIndentedString(tickerName)).append("\n");
    sb.append("    tradeSignal: ").append(toIndentedString(tradeSignal)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
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

