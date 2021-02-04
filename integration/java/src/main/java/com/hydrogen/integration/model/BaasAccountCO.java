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
 * BaasAccountCO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class BaasAccountCO {
  @SerializedName("nucleus_account_id")
  private UUID nucleusAccountId = null;

  @SerializedName("nucleus_client_id")
  private UUID nucleusClientId = null;

  public BaasAccountCO nucleusAccountId(UUID nucleusAccountId) {
    this.nucleusAccountId = nucleusAccountId;
    return this;
  }

   /**
   * Get nucleusAccountId
   * @return nucleusAccountId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusAccountId() {
    return nucleusAccountId;
  }

  public void setNucleusAccountId(UUID nucleusAccountId) {
    this.nucleusAccountId = nucleusAccountId;
  }

  public BaasAccountCO nucleusClientId(UUID nucleusClientId) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BaasAccountCO baasAccountCO = (BaasAccountCO) o;
    return Objects.equals(this.nucleusAccountId, baasAccountCO.nucleusAccountId) &&
        Objects.equals(this.nucleusClientId, baasAccountCO.nucleusClientId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nucleusAccountId, nucleusClientId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BaasAccountCO {\n");
    
    sb.append("    nucleusAccountId: ").append(toIndentedString(nucleusAccountId)).append("\n");
    sb.append("    nucleusClientId: ").append(toIndentedString(nucleusClientId)).append("\n");
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

