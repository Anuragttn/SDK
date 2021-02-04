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

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * BrokerageBalanceVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class BrokerageBalanceVO {
  @SerializedName("message")
  private String message = null;

  @SerializedName("nucleus_asset_sizes_posted")
  private List<PortfolioAssetSizeLog> nucleusAssetSizesPosted = null;

  @SerializedName("nucleus_portfolio_id")
  private UUID nucleusPortfolioId = null;

  @SerializedName("status")
  private String status = null;

  @SerializedName("vendor_name")
  private String vendorName = null;

  @SerializedName("vendor_response")
  private Object vendorResponse = null;

  public BrokerageBalanceVO message(String message) {
    this.message = message;
    return this;
  }

   /**
   * Get message
   * @return message
  **/
  @ApiModelProperty(value = "")
  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public BrokerageBalanceVO nucleusAssetSizesPosted(List<PortfolioAssetSizeLog> nucleusAssetSizesPosted) {
    this.nucleusAssetSizesPosted = nucleusAssetSizesPosted;
    return this;
  }

  public BrokerageBalanceVO addNucleusAssetSizesPostedItem(PortfolioAssetSizeLog nucleusAssetSizesPostedItem) {
    if (this.nucleusAssetSizesPosted == null) {
      this.nucleusAssetSizesPosted = new ArrayList<PortfolioAssetSizeLog>();
    }
    this.nucleusAssetSizesPosted.add(nucleusAssetSizesPostedItem);
    return this;
  }

   /**
   * Get nucleusAssetSizesPosted
   * @return nucleusAssetSizesPosted
  **/
  @ApiModelProperty(value = "")
  public List<PortfolioAssetSizeLog> getNucleusAssetSizesPosted() {
    return nucleusAssetSizesPosted;
  }

  public void setNucleusAssetSizesPosted(List<PortfolioAssetSizeLog> nucleusAssetSizesPosted) {
    this.nucleusAssetSizesPosted = nucleusAssetSizesPosted;
  }

  public BrokerageBalanceVO nucleusPortfolioId(UUID nucleusPortfolioId) {
    this.nucleusPortfolioId = nucleusPortfolioId;
    return this;
  }

   /**
   * Get nucleusPortfolioId
   * @return nucleusPortfolioId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusPortfolioId() {
    return nucleusPortfolioId;
  }

  public void setNucleusPortfolioId(UUID nucleusPortfolioId) {
    this.nucleusPortfolioId = nucleusPortfolioId;
  }

  public BrokerageBalanceVO status(String status) {
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @ApiModelProperty(value = "")
  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public BrokerageBalanceVO vendorName(String vendorName) {
    this.vendorName = vendorName;
    return this;
  }

   /**
   * Get vendorName
   * @return vendorName
  **/
  @ApiModelProperty(value = "")
  public String getVendorName() {
    return vendorName;
  }

  public void setVendorName(String vendorName) {
    this.vendorName = vendorName;
  }

  public BrokerageBalanceVO vendorResponse(Object vendorResponse) {
    this.vendorResponse = vendorResponse;
    return this;
  }

   /**
   * Get vendorResponse
   * @return vendorResponse
  **/
  @ApiModelProperty(value = "")
  public Object getVendorResponse() {
    return vendorResponse;
  }

  public void setVendorResponse(Object vendorResponse) {
    this.vendorResponse = vendorResponse;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BrokerageBalanceVO brokerageBalanceVO = (BrokerageBalanceVO) o;
    return Objects.equals(this.message, brokerageBalanceVO.message) &&
        Objects.equals(this.nucleusAssetSizesPosted, brokerageBalanceVO.nucleusAssetSizesPosted) &&
        Objects.equals(this.nucleusPortfolioId, brokerageBalanceVO.nucleusPortfolioId) &&
        Objects.equals(this.status, brokerageBalanceVO.status) &&
        Objects.equals(this.vendorName, brokerageBalanceVO.vendorName) &&
        Objects.equals(this.vendorResponse, brokerageBalanceVO.vendorResponse);
  }

  @Override
  public int hashCode() {
    return Objects.hash(message, nucleusAssetSizesPosted, nucleusPortfolioId, status, vendorName, vendorResponse);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BrokerageBalanceVO {\n");
    
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    nucleusAssetSizesPosted: ").append(toIndentedString(nucleusAssetSizesPosted)).append("\n");
    sb.append("    nucleusPortfolioId: ").append(toIndentedString(nucleusPortfolioId)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    vendorName: ").append(toIndentedString(vendorName)).append("\n");
    sb.append("    vendorResponse: ").append(toIndentedString(vendorResponse)).append("\n");
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

