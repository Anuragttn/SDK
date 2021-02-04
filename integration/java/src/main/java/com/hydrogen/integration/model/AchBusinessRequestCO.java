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
 * AchBusinessRequestCO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class AchBusinessRequestCO {
  @SerializedName("kyc_required")
  private Boolean kycRequired = null;

  @SerializedName("nucleus_business_id")
  private UUID nucleusBusinessId = null;

  @SerializedName("vendor_request")
  private Object vendorRequest = null;

  public AchBusinessRequestCO kycRequired(Boolean kycRequired) {
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

  public AchBusinessRequestCO nucleusBusinessId(UUID nucleusBusinessId) {
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

  public AchBusinessRequestCO vendorRequest(Object vendorRequest) {
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
    AchBusinessRequestCO achBusinessRequestCO = (AchBusinessRequestCO) o;
    return Objects.equals(this.kycRequired, achBusinessRequestCO.kycRequired) &&
        Objects.equals(this.nucleusBusinessId, achBusinessRequestCO.nucleusBusinessId) &&
        Objects.equals(this.vendorRequest, achBusinessRequestCO.vendorRequest);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kycRequired, nucleusBusinessId, vendorRequest);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AchBusinessRequestCO {\n");
    
    sb.append("    kycRequired: ").append(toIndentedString(kycRequired)).append("\n");
    sb.append("    nucleusBusinessId: ").append(toIndentedString(nucleusBusinessId)).append("\n");
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

