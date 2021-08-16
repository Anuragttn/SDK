/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.1
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
 * AchReserveLinkResponseVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-07-12T04:16:13.881Z")
public class AchReserveLinkResponseVO {
  @SerializedName("funding_source_id")
  private List<String> fundingSourceId = null;

  @SerializedName("message")
  private String message = null;

  @SerializedName("nucleus_business_id")
  private UUID nucleusBusinessId = null;

  @SerializedName("vendor_name")
  private String vendorName = null;

  @SerializedName("vendor_response")
  private Object vendorResponse = null;

  public AchReserveLinkResponseVO fundingSourceId(List<String> fundingSourceId) {
    this.fundingSourceId = fundingSourceId;
    return this;
  }

  public AchReserveLinkResponseVO addFundingSourceIdItem(String fundingSourceIdItem) {
    if (this.fundingSourceId == null) {
      this.fundingSourceId = new ArrayList<String>();
    }
    this.fundingSourceId.add(fundingSourceIdItem);
    return this;
  }

   /**
   * Get fundingSourceId
   * @return fundingSourceId
  **/
  @ApiModelProperty(value = "")
  public List<String> getFundingSourceId() {
    return fundingSourceId;
  }

  public void setFundingSourceId(List<String> fundingSourceId) {
    this.fundingSourceId = fundingSourceId;
  }

  public AchReserveLinkResponseVO message(String message) {
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

  public AchReserveLinkResponseVO nucleusBusinessId(UUID nucleusBusinessId) {
    this.nucleusBusinessId = nucleusBusinessId;
    return this;
  }

   /**
   * Get nucleusBusinessId
   * @return nucleusBusinessId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusBusinessId() {
    return nucleusBusinessId;
  }

  public void setNucleusBusinessId(UUID nucleusBusinessId) {
    this.nucleusBusinessId = nucleusBusinessId;
  }

  public AchReserveLinkResponseVO vendorName(String vendorName) {
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

  public AchReserveLinkResponseVO vendorResponse(Object vendorResponse) {
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
    AchReserveLinkResponseVO achReserveLinkResponseVO = (AchReserveLinkResponseVO) o;
    return Objects.equals(this.fundingSourceId, achReserveLinkResponseVO.fundingSourceId) &&
        Objects.equals(this.message, achReserveLinkResponseVO.message) &&
        Objects.equals(this.nucleusBusinessId, achReserveLinkResponseVO.nucleusBusinessId) &&
        Objects.equals(this.vendorName, achReserveLinkResponseVO.vendorName) &&
        Objects.equals(this.vendorResponse, achReserveLinkResponseVO.vendorResponse);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fundingSourceId, message, nucleusBusinessId, vendorName, vendorResponse);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AchReserveLinkResponseVO {\n");
    
    sb.append("    fundingSourceId: ").append(toIndentedString(fundingSourceId)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    nucleusBusinessId: ").append(toIndentedString(nucleusBusinessId)).append("\n");
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

