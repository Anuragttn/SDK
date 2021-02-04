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
import io.swagger.annotations.ApiModelProperty;
import org.threeten.bp.OffsetDateTime;

/**
 * Transaction
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class Transaction {
  @SerializedName("account_amount")
  private Double accountAmount = null;

  @SerializedName("account_balance")
  private Double accountBalance = null;

  @SerializedName("account_type")
  private String accountType = null;

  @SerializedName("comment")
  private String comment = null;

  @SerializedName("dividend")
  private Dividend dividend = null;

  @SerializedName("dividend_tax")
  private DividendTax dividendTax = null;

  @SerializedName("dnb")
  private Boolean dnb = null;

  @SerializedName("fee_base")
  private Double feeBase = null;

  @SerializedName("fee_exchange")
  private Double feeExchange = null;

  @SerializedName("fee_sec")
  private Double feeSec = null;

  @SerializedName("fee_taf")
  private Double feeTaf = null;

  @SerializedName("fee_xtra_shares")
  private Double feeXtraShares = null;

  @SerializedName("fill_px")
  private Double fillPx = null;

  @SerializedName("fill_qty")
  private Double fillQty = null;

  @SerializedName("fin_tran_id")
  private String finTranId = null;

  @SerializedName("fin_tran_type_id")
  private String finTranTypeId = null;

  @SerializedName("instrument")
  private Instrument instrument = null;

  @SerializedName("merger_acquisition")
  private MergerAcquisition mergerAcquisition = null;

  @SerializedName("order_id")
  private String orderId = null;

  @SerializedName("position_delta")
  private Double positionDelta = null;

  @SerializedName("system_amount")
  private Double systemAmount = null;

  @SerializedName("tran_when")
  private OffsetDateTime tranWhen = null;

  public Transaction accountAmount(Double accountAmount) {
    this.accountAmount = accountAmount;
    return this;
  }

   /**
   * Get accountAmount
   * @return accountAmount
  **/
  @ApiModelProperty(value = "")
  public Double getAccountAmount() {
    return accountAmount;
  }

  public void setAccountAmount(Double accountAmount) {
    this.accountAmount = accountAmount;
  }

  public Transaction accountBalance(Double accountBalance) {
    this.accountBalance = accountBalance;
    return this;
  }

   /**
   * Get accountBalance
   * @return accountBalance
  **/
  @ApiModelProperty(value = "")
  public Double getAccountBalance() {
    return accountBalance;
  }

  public void setAccountBalance(Double accountBalance) {
    this.accountBalance = accountBalance;
  }

  public Transaction accountType(String accountType) {
    this.accountType = accountType;
    return this;
  }

   /**
   * Get accountType
   * @return accountType
  **/
  @ApiModelProperty(value = "")
  public String getAccountType() {
    return accountType;
  }

  public void setAccountType(String accountType) {
    this.accountType = accountType;
  }

  public Transaction comment(String comment) {
    this.comment = comment;
    return this;
  }

   /**
   * Get comment
   * @return comment
  **/
  @ApiModelProperty(value = "")
  public String getComment() {
    return comment;
  }

  public void setComment(String comment) {
    this.comment = comment;
  }

  public Transaction dividend(Dividend dividend) {
    this.dividend = dividend;
    return this;
  }

   /**
   * Get dividend
   * @return dividend
  **/
  @ApiModelProperty(value = "")
  public Dividend getDividend() {
    return dividend;
  }

  public void setDividend(Dividend dividend) {
    this.dividend = dividend;
  }

  public Transaction dividendTax(DividendTax dividendTax) {
    this.dividendTax = dividendTax;
    return this;
  }

   /**
   * Get dividendTax
   * @return dividendTax
  **/
  @ApiModelProperty(value = "")
  public DividendTax getDividendTax() {
    return dividendTax;
  }

  public void setDividendTax(DividendTax dividendTax) {
    this.dividendTax = dividendTax;
  }

  public Transaction dnb(Boolean dnb) {
    this.dnb = dnb;
    return this;
  }

   /**
   * Get dnb
   * @return dnb
  **/
  @ApiModelProperty(value = "")
  public Boolean isDnb() {
    return dnb;
  }

  public void setDnb(Boolean dnb) {
    this.dnb = dnb;
  }

  public Transaction feeBase(Double feeBase) {
    this.feeBase = feeBase;
    return this;
  }

   /**
   * Get feeBase
   * @return feeBase
  **/
  @ApiModelProperty(value = "")
  public Double getFeeBase() {
    return feeBase;
  }

  public void setFeeBase(Double feeBase) {
    this.feeBase = feeBase;
  }

  public Transaction feeExchange(Double feeExchange) {
    this.feeExchange = feeExchange;
    return this;
  }

   /**
   * Get feeExchange
   * @return feeExchange
  **/
  @ApiModelProperty(value = "")
  public Double getFeeExchange() {
    return feeExchange;
  }

  public void setFeeExchange(Double feeExchange) {
    this.feeExchange = feeExchange;
  }

  public Transaction feeSec(Double feeSec) {
    this.feeSec = feeSec;
    return this;
  }

   /**
   * Get feeSec
   * @return feeSec
  **/
  @ApiModelProperty(value = "")
  public Double getFeeSec() {
    return feeSec;
  }

  public void setFeeSec(Double feeSec) {
    this.feeSec = feeSec;
  }

  public Transaction feeTaf(Double feeTaf) {
    this.feeTaf = feeTaf;
    return this;
  }

   /**
   * Get feeTaf
   * @return feeTaf
  **/
  @ApiModelProperty(value = "")
  public Double getFeeTaf() {
    return feeTaf;
  }

  public void setFeeTaf(Double feeTaf) {
    this.feeTaf = feeTaf;
  }

  public Transaction feeXtraShares(Double feeXtraShares) {
    this.feeXtraShares = feeXtraShares;
    return this;
  }

   /**
   * Get feeXtraShares
   * @return feeXtraShares
  **/
  @ApiModelProperty(value = "")
  public Double getFeeXtraShares() {
    return feeXtraShares;
  }

  public void setFeeXtraShares(Double feeXtraShares) {
    this.feeXtraShares = feeXtraShares;
  }

  public Transaction fillPx(Double fillPx) {
    this.fillPx = fillPx;
    return this;
  }

   /**
   * Get fillPx
   * @return fillPx
  **/
  @ApiModelProperty(value = "")
  public Double getFillPx() {
    return fillPx;
  }

  public void setFillPx(Double fillPx) {
    this.fillPx = fillPx;
  }

  public Transaction fillQty(Double fillQty) {
    this.fillQty = fillQty;
    return this;
  }

   /**
   * Get fillQty
   * @return fillQty
  **/
  @ApiModelProperty(value = "")
  public Double getFillQty() {
    return fillQty;
  }

  public void setFillQty(Double fillQty) {
    this.fillQty = fillQty;
  }

  public Transaction finTranId(String finTranId) {
    this.finTranId = finTranId;
    return this;
  }

   /**
   * Get finTranId
   * @return finTranId
  **/
  @ApiModelProperty(value = "")
  public String getFinTranId() {
    return finTranId;
  }

  public void setFinTranId(String finTranId) {
    this.finTranId = finTranId;
  }

  public Transaction finTranTypeId(String finTranTypeId) {
    this.finTranTypeId = finTranTypeId;
    return this;
  }

   /**
   * Get finTranTypeId
   * @return finTranTypeId
  **/
  @ApiModelProperty(value = "")
  public String getFinTranTypeId() {
    return finTranTypeId;
  }

  public void setFinTranTypeId(String finTranTypeId) {
    this.finTranTypeId = finTranTypeId;
  }

  public Transaction instrument(Instrument instrument) {
    this.instrument = instrument;
    return this;
  }

   /**
   * Get instrument
   * @return instrument
  **/
  @ApiModelProperty(value = "")
  public Instrument getInstrument() {
    return instrument;
  }

  public void setInstrument(Instrument instrument) {
    this.instrument = instrument;
  }

  public Transaction mergerAcquisition(MergerAcquisition mergerAcquisition) {
    this.mergerAcquisition = mergerAcquisition;
    return this;
  }

   /**
   * Get mergerAcquisition
   * @return mergerAcquisition
  **/
  @ApiModelProperty(value = "")
  public MergerAcquisition getMergerAcquisition() {
    return mergerAcquisition;
  }

  public void setMergerAcquisition(MergerAcquisition mergerAcquisition) {
    this.mergerAcquisition = mergerAcquisition;
  }

  public Transaction orderId(String orderId) {
    this.orderId = orderId;
    return this;
  }

   /**
   * Get orderId
   * @return orderId
  **/
  @ApiModelProperty(value = "")
  public String getOrderId() {
    return orderId;
  }

  public void setOrderId(String orderId) {
    this.orderId = orderId;
  }

  public Transaction positionDelta(Double positionDelta) {
    this.positionDelta = positionDelta;
    return this;
  }

   /**
   * Get positionDelta
   * @return positionDelta
  **/
  @ApiModelProperty(value = "")
  public Double getPositionDelta() {
    return positionDelta;
  }

  public void setPositionDelta(Double positionDelta) {
    this.positionDelta = positionDelta;
  }

  public Transaction systemAmount(Double systemAmount) {
    this.systemAmount = systemAmount;
    return this;
  }

   /**
   * Get systemAmount
   * @return systemAmount
  **/
  @ApiModelProperty(value = "")
  public Double getSystemAmount() {
    return systemAmount;
  }

  public void setSystemAmount(Double systemAmount) {
    this.systemAmount = systemAmount;
  }

  public Transaction tranWhen(OffsetDateTime tranWhen) {
    this.tranWhen = tranWhen;
    return this;
  }

   /**
   * Get tranWhen
   * @return tranWhen
  **/
  @ApiModelProperty(value = "")
  public OffsetDateTime getTranWhen() {
    return tranWhen;
  }

  public void setTranWhen(OffsetDateTime tranWhen) {
    this.tranWhen = tranWhen;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Transaction transaction = (Transaction) o;
    return Objects.equals(this.accountAmount, transaction.accountAmount) &&
        Objects.equals(this.accountBalance, transaction.accountBalance) &&
        Objects.equals(this.accountType, transaction.accountType) &&
        Objects.equals(this.comment, transaction.comment) &&
        Objects.equals(this.dividend, transaction.dividend) &&
        Objects.equals(this.dividendTax, transaction.dividendTax) &&
        Objects.equals(this.dnb, transaction.dnb) &&
        Objects.equals(this.feeBase, transaction.feeBase) &&
        Objects.equals(this.feeExchange, transaction.feeExchange) &&
        Objects.equals(this.feeSec, transaction.feeSec) &&
        Objects.equals(this.feeTaf, transaction.feeTaf) &&
        Objects.equals(this.feeXtraShares, transaction.feeXtraShares) &&
        Objects.equals(this.fillPx, transaction.fillPx) &&
        Objects.equals(this.fillQty, transaction.fillQty) &&
        Objects.equals(this.finTranId, transaction.finTranId) &&
        Objects.equals(this.finTranTypeId, transaction.finTranTypeId) &&
        Objects.equals(this.instrument, transaction.instrument) &&
        Objects.equals(this.mergerAcquisition, transaction.mergerAcquisition) &&
        Objects.equals(this.orderId, transaction.orderId) &&
        Objects.equals(this.positionDelta, transaction.positionDelta) &&
        Objects.equals(this.systemAmount, transaction.systemAmount) &&
        Objects.equals(this.tranWhen, transaction.tranWhen);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountAmount, accountBalance, accountType, comment, dividend, dividendTax, dnb, feeBase, feeExchange, feeSec, feeTaf, feeXtraShares, fillPx, fillQty, finTranId, finTranTypeId, instrument, mergerAcquisition, orderId, positionDelta, systemAmount, tranWhen);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Transaction {\n");
    
    sb.append("    accountAmount: ").append(toIndentedString(accountAmount)).append("\n");
    sb.append("    accountBalance: ").append(toIndentedString(accountBalance)).append("\n");
    sb.append("    accountType: ").append(toIndentedString(accountType)).append("\n");
    sb.append("    comment: ").append(toIndentedString(comment)).append("\n");
    sb.append("    dividend: ").append(toIndentedString(dividend)).append("\n");
    sb.append("    dividendTax: ").append(toIndentedString(dividendTax)).append("\n");
    sb.append("    dnb: ").append(toIndentedString(dnb)).append("\n");
    sb.append("    feeBase: ").append(toIndentedString(feeBase)).append("\n");
    sb.append("    feeExchange: ").append(toIndentedString(feeExchange)).append("\n");
    sb.append("    feeSec: ").append(toIndentedString(feeSec)).append("\n");
    sb.append("    feeTaf: ").append(toIndentedString(feeTaf)).append("\n");
    sb.append("    feeXtraShares: ").append(toIndentedString(feeXtraShares)).append("\n");
    sb.append("    fillPx: ").append(toIndentedString(fillPx)).append("\n");
    sb.append("    fillQty: ").append(toIndentedString(fillQty)).append("\n");
    sb.append("    finTranId: ").append(toIndentedString(finTranId)).append("\n");
    sb.append("    finTranTypeId: ").append(toIndentedString(finTranTypeId)).append("\n");
    sb.append("    instrument: ").append(toIndentedString(instrument)).append("\n");
    sb.append("    mergerAcquisition: ").append(toIndentedString(mergerAcquisition)).append("\n");
    sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
    sb.append("    positionDelta: ").append(toIndentedString(positionDelta)).append("\n");
    sb.append("    systemAmount: ").append(toIndentedString(systemAmount)).append("\n");
    sb.append("    tranWhen: ").append(toIndentedString(tranWhen)).append("\n");
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

