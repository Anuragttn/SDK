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
 * UpdateBusinessResponseVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-07-12T04:16:13.881Z")
public class UpdateBusinessResponseVO {
  @SerializedName("message")
  private String message = null;

  @SerializedName("nucleus_business_id")
  private UUID nucleusBusinessId = null;

  @SerializedName("vendor_name")
  private String vendorName = null;

  @SerializedName("vendor_request_data")
  private BusinessVendorRequestDataVO vendorRequestData = null;

  @SerializedName("vendor_response")
  private Object vendorResponse = null;

  public UpdateBusinessResponseVO message(String message) {
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

  public UpdateBusinessResponseVO nucleusBusinessId(UUID nucleusBusinessId) {
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

  public UpdateBusinessResponseVO vendorName(String vendorName) {
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

  public UpdateBusinessResponseVO vendorRequestData(BusinessVendorRequestDataVO vendorRequestData) {
    this.vendorRequestData = vendorRequestData;
    return this;
  }

   /**
   * Get vendorRequestData
   * @return vendorRequestData
  **/
  @ApiModelProperty(value = "")
  public BusinessVendorRequestDataVO getVendorRequestData() {
    return vendorRequestData;
  }

  public void setVendorRequestData(BusinessVendorRequestDataVO vendorRequestData) {
    this.vendorRequestData = vendorRequestData;
  }

  public UpdateBusinessResponseVO vendorResponse(Object vendorResponse) {
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
    UpdateBusinessResponseVO updateBusinessResponseVO = (UpdateBusinessResponseVO) o;
    return Objects.equals(this.message, updateBusinessResponseVO.message) &&
        Objects.equals(this.nucleusBusinessId, updateBusinessResponseVO.nucleusBusinessId) &&
        Objects.equals(this.vendorName, updateBusinessResponseVO.vendorName) &&
        Objects.equals(this.vendorRequestData, updateBusinessResponseVO.vendorRequestData) &&
        Objects.equals(this.vendorResponse, updateBusinessResponseVO.vendorResponse);
  }

  @Override
  public int hashCode() {
    return Objects.hash(message, nucleusBusinessId, vendorName, vendorRequestData, vendorResponse);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateBusinessResponseVO {\n");
    
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    nucleusBusinessId: ").append(toIndentedString(nucleusBusinessId)).append("\n");
    sb.append("    vendorName: ").append(toIndentedString(vendorName)).append("\n");
    sb.append("    vendorRequestData: ").append(toIndentedString(vendorRequestData)).append("\n");
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

