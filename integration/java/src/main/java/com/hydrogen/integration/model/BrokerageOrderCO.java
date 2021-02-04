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
 * BrokerageOrderCO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class BrokerageOrderCO {
  @SerializedName("nucleus_order_id")
  private UUID nucleusOrderId = null;

  public BrokerageOrderCO nucleusOrderId(UUID nucleusOrderId) {
    this.nucleusOrderId = nucleusOrderId;
    return this;
  }

   /**
   * Get nucleusOrderId
   * @return nucleusOrderId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusOrderId() {
    return nucleusOrderId;
  }

  public void setNucleusOrderId(UUID nucleusOrderId) {
    this.nucleusOrderId = nucleusOrderId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BrokerageOrderCO brokerageOrderCO = (BrokerageOrderCO) o;
    return Objects.equals(this.nucleusOrderId, brokerageOrderCO.nucleusOrderId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nucleusOrderId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BrokerageOrderCO {\n");
    
    sb.append("    nucleusOrderId: ").append(toIndentedString(nucleusOrderId)).append("\n");
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

