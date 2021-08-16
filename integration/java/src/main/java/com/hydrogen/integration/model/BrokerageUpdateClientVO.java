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
 * BrokerageUpdateClientVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-07-12T04:16:13.881Z")
public class BrokerageUpdateClientVO {
  @SerializedName("message")
  private String message = null;

  @SerializedName("nucleus_client_id")
  private UUID nucleusClientId = null;

  @SerializedName("nucleus_document_ids")
  private List<UUID> nucleusDocumentIds = null;

  @SerializedName("status")
  private String status = null;

  @SerializedName("vendor_name")
  private String vendorName = null;

  @SerializedName("vendor_request_data")
  private Object vendorRequestData = null;

  @SerializedName("vendor_response")
  private Object vendorResponse = null;

  public BrokerageUpdateClientVO message(String message) {
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

  public BrokerageUpdateClientVO nucleusClientId(UUID nucleusClientId) {
    this.nucleusClientId = nucleusClientId;
    return this;
  }

   /**
   * Get nucleusClientId
   * @return nucleusClientId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusClientId() {
    return nucleusClientId;
  }

  public void setNucleusClientId(UUID nucleusClientId) {
    this.nucleusClientId = nucleusClientId;
  }

  public BrokerageUpdateClientVO nucleusDocumentIds(List<UUID> nucleusDocumentIds) {
    this.nucleusDocumentIds = nucleusDocumentIds;
    return this;
  }

  public BrokerageUpdateClientVO addNucleusDocumentIdsItem(UUID nucleusDocumentIdsItem) {
    if (this.nucleusDocumentIds == null) {
      this.nucleusDocumentIds = new ArrayList<UUID>();
    }
    this.nucleusDocumentIds.add(nucleusDocumentIdsItem);
    return this;
  }

   /**
   * Get nucleusDocumentIds
   * @return nucleusDocumentIds
  **/
  @ApiModelProperty(value = "")
  public List<UUID> getNucleusDocumentIds() {
    return nucleusDocumentIds;
  }

  public void setNucleusDocumentIds(List<UUID> nucleusDocumentIds) {
    this.nucleusDocumentIds = nucleusDocumentIds;
  }

  public BrokerageUpdateClientVO status(String status) {
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

  public BrokerageUpdateClientVO vendorName(String vendorName) {
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

  public BrokerageUpdateClientVO vendorRequestData(Object vendorRequestData) {
    this.vendorRequestData = vendorRequestData;
    return this;
  }

   /**
   * Get vendorRequestData
   * @return vendorRequestData
  **/
  @ApiModelProperty(value = "")
  public Object getVendorRequestData() {
    return vendorRequestData;
  }

  public void setVendorRequestData(Object vendorRequestData) {
    this.vendorRequestData = vendorRequestData;
  }

  public BrokerageUpdateClientVO vendorResponse(Object vendorResponse) {
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
    BrokerageUpdateClientVO brokerageUpdateClientVO = (BrokerageUpdateClientVO) o;
    return Objects.equals(this.message, brokerageUpdateClientVO.message) &&
        Objects.equals(this.nucleusClientId, brokerageUpdateClientVO.nucleusClientId) &&
        Objects.equals(this.nucleusDocumentIds, brokerageUpdateClientVO.nucleusDocumentIds) &&
        Objects.equals(this.status, brokerageUpdateClientVO.status) &&
        Objects.equals(this.vendorName, brokerageUpdateClientVO.vendorName) &&
        Objects.equals(this.vendorRequestData, brokerageUpdateClientVO.vendorRequestData) &&
        Objects.equals(this.vendorResponse, brokerageUpdateClientVO.vendorResponse);
  }

  @Override
  public int hashCode() {
    return Objects.hash(message, nucleusClientId, nucleusDocumentIds, status, vendorName, vendorRequestData, vendorResponse);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BrokerageUpdateClientVO {\n");
    
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    nucleusClientId: ").append(toIndentedString(nucleusClientId)).append("\n");
    sb.append("    nucleusDocumentIds: ").append(toIndentedString(nucleusDocumentIds)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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

