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

import java.util.UUID;

/**
 * AchClientRequestCO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class AchClientRequestCO {
  @SerializedName("kyc_required")
  private Boolean kycRequired = null;

  @SerializedName("nucleus_client_id")
  private UUID nucleusClientId = null;

  @SerializedName("vendor_request")
  private Object vendorRequest = null;

  public AchClientRequestCO kycRequired(Boolean kycRequired) {
    this.kycRequired = kycRequired;
    return this;
  }

   /**
   * Get kycRequired
   * @return kycRequired
  **/
  @ApiModelProperty(value = "")
  public Boolean isKycRequired() {
    return kycRequired;
  }

  public void setKycRequired(Boolean kycRequired) {
    this.kycRequired = kycRequired;
  }

  public AchClientRequestCO nucleusClientId(UUID nucleusClientId) {
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

  public AchClientRequestCO vendorRequest(Object vendorRequest) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AchClientRequestCO achClientRequestCO = (AchClientRequestCO) o;
    return Objects.equals(this.kycRequired, achClientRequestCO.kycRequired) &&
        Objects.equals(this.nucleusClientId, achClientRequestCO.nucleusClientId) &&
        Objects.equals(this.vendorRequest, achClientRequestCO.vendorRequest);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kycRequired, nucleusClientId, vendorRequest);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AchClientRequestCO {\n");
    
    sb.append("    kycRequired: ").append(toIndentedString(kycRequired)).append("\n");
    sb.append("    nucleusClientId: ").append(toIndentedString(nucleusClientId)).append("\n");
    sb.append("    vendorRequest: ").append(toIndentedString(vendorRequest)).append("\n");
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

