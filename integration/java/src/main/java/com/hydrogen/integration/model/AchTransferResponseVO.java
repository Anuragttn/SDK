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

import java.util.UUID;

/**
 * AchTransferResponseVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-07-12T04:16:13.881Z")
public class AchTransferResponseVO {
  @SerializedName("card_load_response")
  private AchCardLoadResponseVO cardLoadResponse = null;

  @SerializedName("message")
  private String message = null;

  @SerializedName("nucleus_funding_id")
  private UUID nucleusFundingId = null;

  @SerializedName("status")
  private String status = null;

  @SerializedName("status_details")
  private String statusDetails = null;

  @SerializedName("vendor_name")
  private String vendorName = null;

  @SerializedName("vendor_request")
  private Object vendorRequest = null;

  @SerializedName("vendor_response")
  private Object vendorResponse = null;

  public AchTransferResponseVO cardLoadResponse(AchCardLoadResponseVO cardLoadResponse) {
    this.cardLoadResponse = cardLoadResponse;
    return this;
  }

   /**
   * Get cardLoadResponse
   * @return cardLoadResponse
  **/
  @ApiModelProperty(value = "")
  public AchCardLoadResponseVO getCardLoadResponse() {
    return cardLoadResponse;
  }

  public void setCardLoadResponse(AchCardLoadResponseVO cardLoadResponse) {
    this.cardLoadResponse = cardLoadResponse;
  }

  public AchTransferResponseVO message(String message) {
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

  public AchTransferResponseVO nucleusFundingId(UUID nucleusFundingId) {
    this.nucleusFundingId = nucleusFundingId;
    return this;
  }

   /**
   * Get nucleusFundingId
   * @return nucleusFundingId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusFundingId() {
    return nucleusFundingId;
  }

  public void setNucleusFundingId(UUID nucleusFundingId) {
    this.nucleusFundingId = nucleusFundingId;
  }

  public AchTransferResponseVO status(String status) {
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

  public AchTransferResponseVO statusDetails(String statusDetails) {
    this.statusDetails = statusDetails;
    return this;
  }

   /**
   * Get statusDetails
   * @return statusDetails
  **/
  @ApiModelProperty(value = "")
  public String getStatusDetails() {
    return statusDetails;
  }

  public void setStatusDetails(String statusDetails) {
    this.statusDetails = statusDetails;
  }

  public AchTransferResponseVO vendorName(String vendorName) {
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

  public AchTransferResponseVO vendorRequest(Object vendorRequest) {
    this.vendorRequest = vendorRequest;
    return this;
  }

   /**
   * Get vendorRequest
   * @return vendorRequest
  **/
  @ApiModelProperty(value = "")
  public Object getVendorRequest() {
    return vendorRequest;
  }

  public void setVendorRequest(Object vendorRequest) {
    this.vendorRequest = vendorRequest;
  }

  public AchTransferResponseVO vendorResponse(Object vendorResponse) {
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
    AchTransferResponseVO achTransferResponseVO = (AchTransferResponseVO) o;
    return Objects.equals(this.cardLoadResponse, achTransferResponseVO.cardLoadResponse) &&
        Objects.equals(this.message, achTransferResponseVO.message) &&
        Objects.equals(this.nucleusFundingId, achTransferResponseVO.nucleusFundingId) &&
        Objects.equals(this.status, achTransferResponseVO.status) &&
        Objects.equals(this.statusDetails, achTransferResponseVO.statusDetails) &&
        Objects.equals(this.vendorName, achTransferResponseVO.vendorName) &&
        Objects.equals(this.vendorRequest, achTransferResponseVO.vendorRequest) &&
        Objects.equals(this.vendorResponse, achTransferResponseVO.vendorResponse);
  }

  @Override
  public int hashCode() {
    return Objects.hash(cardLoadResponse, message, nucleusFundingId, status, statusDetails, vendorName, vendorRequest, vendorResponse);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AchTransferResponseVO {\n");
    
    sb.append("    cardLoadResponse: ").append(toIndentedString(cardLoadResponse)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    nucleusFundingId: ").append(toIndentedString(nucleusFundingId)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    statusDetails: ").append(toIndentedString(statusDetails)).append("\n");
    sb.append("    vendorName: ").append(toIndentedString(vendorName)).append("\n");
    sb.append("    vendorRequest: ").append(toIndentedString(vendorRequest)).append("\n");
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

