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

import java.util.List;
import java.util.UUID;
import org.threeten.bp.OffsetDateTime;

/**
 * Overflow Object
 */
@ApiModel(description = "Overflow Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-28T16:21:02.928Z")



public class Overflow {
  @SerializedName("account_id")
  private UUID accountId = null;

  @SerializedName("client_id")
  private UUID clientId = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("funding_requests")
  private List<FundingRequestMap> fundingRequests = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("overflow_setting_id")
  private UUID overflowSettingId = null;

  @SerializedName("total_overflow_amount")
  private Double totalOverflowAmount = null;

  @SerializedName("update_balances")
  private Boolean updateBalances = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public Overflow accountId(UUID accountId) {
    this.accountId = accountId;
    return this;
  }

   /**
   * accountId
   * @return accountId
  **/
  @ApiModelProperty(example = "099961da-7f41-4309-950f-2b51689a0033", required = true, value = "accountId")
  public UUID getAccountId() {
    return accountId;
  }

  public void setAccountId(UUID accountId) {
    this.accountId = accountId;
  }

  public Overflow clientId(UUID clientId) {
    this.clientId = clientId;
    return this;
  }

   /**
   * clientId
   * @return clientId
  **/
  @ApiModelProperty(example = "099961da-7f41-4309-950f-2b51689a0033", required = true, value = "clientId")
  public UUID getClientId() {
    return clientId;
  }

  public void setClientId(UUID clientId) {
    this.clientId = clientId;
  }

   /**
   * Get createDate
   * @return createDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getCreateDate() {
    return createDate;
  }

   /**
   * Get fundingRequests
   * @return fundingRequests
  **/
  @ApiModelProperty(example = "[]", value = "")
  public List<FundingRequestMap> getFundingRequests() {
    return fundingRequests;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

  public Overflow overflowSettingId(UUID overflowSettingId) {
    this.overflowSettingId = overflowSettingId;
    return this;
  }

   /**
   * overflowSettingId
   * @return overflowSettingId
  **/
  @ApiModelProperty(example = "099961da-7f41-4309-950f-2b51689a0033", required = true, value = "overflowSettingId")
  public UUID getOverflowSettingId() {
    return overflowSettingId;
  }

  public void setOverflowSettingId(UUID overflowSettingId) {
    this.overflowSettingId = overflowSettingId;
  }

  public Overflow totalOverflowAmount(Double totalOverflowAmount) {
    this.totalOverflowAmount = totalOverflowAmount;
    return this;
  }

   /**
   * totalOverflowAmount
   * @return totalOverflowAmount
  **/
  @ApiModelProperty(example = "9000.0", required = true, value = "totalOverflowAmount")
  public Double getTotalOverflowAmount() {
    return totalOverflowAmount;
  }

  public void setTotalOverflowAmount(Double totalOverflowAmount) {
    this.totalOverflowAmount = totalOverflowAmount;
  }

  public Overflow updateBalances(Boolean updateBalances) {
    this.updateBalances = updateBalances;
    return this;
  }

   /**
   * updateBalances
   * @return updateBalances
  **/
  @ApiModelProperty(example = "true", value = "updateBalances")
  public Boolean isUpdateBalances() {
    return updateBalances;
  }

  public void setUpdateBalances(Boolean updateBalances) {
    this.updateBalances = updateBalances;
  }

   /**
   * Get updateDate
   * @return updateDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getUpdateDate() {
    return updateDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Overflow overflow = (Overflow) o;
    return Objects.equals(this.accountId, overflow.accountId) &&
        Objects.equals(this.clientId, overflow.clientId) &&
        Objects.equals(this.createDate, overflow.createDate) &&
        Objects.equals(this.fundingRequests, overflow.fundingRequests) &&
        Objects.equals(this.id, overflow.id) &&
        Objects.equals(this.overflowSettingId, overflow.overflowSettingId) &&
        Objects.equals(this.totalOverflowAmount, overflow.totalOverflowAmount) &&
        Objects.equals(this.updateBalances, overflow.updateBalances) &&
        Objects.equals(this.updateDate, overflow.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountId, clientId, createDate, fundingRequests, id, overflowSettingId, totalOverflowAmount, updateBalances, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Overflow {\n");
    
    sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    fundingRequests: ").append(toIndentedString(fundingRequests)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    overflowSettingId: ").append(toIndentedString(overflowSettingId)).append("\n");
    sb.append("    totalOverflowAmount: ").append(toIndentedString(totalOverflowAmount)).append("\n");
    sb.append("    updateBalances: ").append(toIndentedString(updateBalances)).append("\n");
    sb.append("    updateDate: ").append(toIndentedString(updateDate)).append("\n");
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

