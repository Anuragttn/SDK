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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.UUID;

/**
 * VendorAccessConfigVO Object
 */
@ApiModel(description = "VendorAccessConfigVO Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class VendorAccessConfigVO {
  @SerializedName("active")
  private Boolean active = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("vendor_name")
  private String vendorName = null;

  public VendorAccessConfigVO active(Boolean active) {
    this.active = active;
    return this;
  }

   /**
   * Get active
   * @return active
  **/
  @ApiModelProperty(value = "")
  public Boolean isActive() {
    return active;
  }

  public void setActive(Boolean active) {
    this.active = active;
  }

  public VendorAccessConfigVO id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * id
   * @return id
  **/
  @ApiModelProperty(example = "5236b981-d632-4e4c-b2b9-c6f1ccc74b72", value = "id")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public VendorAccessConfigVO vendorName(String vendorName) {
    this.vendorName = vendorName;
    return this;
  }

   /**
   * vendorName
   * @return vendorName
  **/
  @ApiModelProperty(example = "Xero", value = "vendorName")
  public String getVendorName() {
    return vendorName;
  }

  public void setVendorName(String vendorName) {
    this.vendorName = vendorName;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    VendorAccessConfigVO vendorAccessConfigVO = (VendorAccessConfigVO) o;
    return Objects.equals(this.active, vendorAccessConfigVO.active) &&
        Objects.equals(this.id, vendorAccessConfigVO.id) &&
        Objects.equals(this.vendorName, vendorAccessConfigVO.vendorName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(active, id, vendorName);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class VendorAccessConfigVO {\n");
    
    sb.append("    active: ").append(toIndentedString(active)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    vendorName: ").append(toIndentedString(vendorName)).append("\n");
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

