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
import io.swagger.annotations.ApiModelProperty;

import java.util.UUID;
import org.threeten.bp.LocalDate;

/**
 * VAccountVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-28T16:21:02.928Z")



public class VAccountVO {
  @SerializedName("account_id")
  private UUID accountId = null;

  @SerializedName("account_name")
  private String accountName = null;

  @SerializedName("account_type_id")
  private UUID accountTypeId = null;

  @SerializedName("account_type_name")
  private String accountTypeName = null;

  @SerializedName("goal_asset_size_by_account")
  private Double goalAssetSizeByAccount = null;

  @SerializedName("goal_asset_size_by_account_date")
  private LocalDate goalAssetSizeByAccountDate = null;

  public VAccountVO accountId(UUID accountId) {
    this.accountId = accountId;
    return this;
  }

   /**
   * Get accountId
   * @return accountId
  **/
  @ApiModelProperty(value = "")
  public UUID getAccountId() {
    return accountId;
  }

  public void setAccountId(UUID accountId) {
    this.accountId = accountId;
  }

  public VAccountVO accountName(String accountName) {
    this.accountName = accountName;
    return this;
  }

   /**
   * Get accountName
   * @return accountName
  **/
  @ApiModelProperty(value = "")
  public String getAccountName() {
    return accountName;
  }

  public void setAccountName(String accountName) {
    this.accountName = accountName;
  }

  public VAccountVO accountTypeId(UUID accountTypeId) {
    this.accountTypeId = accountTypeId;
    return this;
  }

   /**
   * Get accountTypeId
   * @return accountTypeId
  **/
  @ApiModelProperty(value = "")
  public UUID getAccountTypeId() {
    return accountTypeId;
  }

  public void setAccountTypeId(UUID accountTypeId) {
    this.accountTypeId = accountTypeId;
  }

  public VAccountVO accountTypeName(String accountTypeName) {
    this.accountTypeName = accountTypeName;
    return this;
  }

   /**
   * Get accountTypeName
   * @return accountTypeName
  **/
  @ApiModelProperty(value = "")
  public String getAccountTypeName() {
    return accountTypeName;
  }

  public void setAccountTypeName(String accountTypeName) {
    this.accountTypeName = accountTypeName;
  }

  public VAccountVO goalAssetSizeByAccount(Double goalAssetSizeByAccount) {
    this.goalAssetSizeByAccount = goalAssetSizeByAccount;
    return this;
  }

   /**
   * Get goalAssetSizeByAccount
   * @return goalAssetSizeByAccount
  **/
  @ApiModelProperty(value = "")
  public Double getGoalAssetSizeByAccount() {
    return goalAssetSizeByAccount;
  }

  public void setGoalAssetSizeByAccount(Double goalAssetSizeByAccount) {
    this.goalAssetSizeByAccount = goalAssetSizeByAccount;
  }

  public VAccountVO goalAssetSizeByAccountDate(LocalDate goalAssetSizeByAccountDate) {
    this.goalAssetSizeByAccountDate = goalAssetSizeByAccountDate;
    return this;
  }

   /**
   * Get goalAssetSizeByAccountDate
   * @return goalAssetSizeByAccountDate
  **/
  @ApiModelProperty(value = "")
  public LocalDate getGoalAssetSizeByAccountDate() {
    return goalAssetSizeByAccountDate;
  }

  public void setGoalAssetSizeByAccountDate(LocalDate goalAssetSizeByAccountDate) {
    this.goalAssetSizeByAccountDate = goalAssetSizeByAccountDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    VAccountVO vaccountVO = (VAccountVO) o;
    return Objects.equals(this.accountId, vaccountVO.accountId) &&
        Objects.equals(this.accountName, vaccountVO.accountName) &&
        Objects.equals(this.accountTypeId, vaccountVO.accountTypeId) &&
        Objects.equals(this.accountTypeName, vaccountVO.accountTypeName) &&
        Objects.equals(this.goalAssetSizeByAccount, vaccountVO.goalAssetSizeByAccount) &&
        Objects.equals(this.goalAssetSizeByAccountDate, vaccountVO.goalAssetSizeByAccountDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountId, accountName, accountTypeId, accountTypeName, goalAssetSizeByAccount, goalAssetSizeByAccountDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class VAccountVO {\n");
    
    sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
    sb.append("    accountName: ").append(toIndentedString(accountName)).append("\n");
    sb.append("    accountTypeId: ").append(toIndentedString(accountTypeId)).append("\n");
    sb.append("    accountTypeName: ").append(toIndentedString(accountTypeName)).append("\n");
    sb.append("    goalAssetSizeByAccount: ").append(toIndentedString(goalAssetSizeByAccount)).append("\n");
    sb.append("    goalAssetSizeByAccountDate: ").append(toIndentedString(goalAssetSizeByAccountDate)).append("\n");
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

