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

/**
 * ApplePayload
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class ApplePayload {
  @SerializedName("activation_data")
  private String activationData = null;

  @SerializedName("encrypted_pass_data")
  private String encryptedPassData = null;

  @SerializedName("ephemeral_public_key")
  private String ephemeralPublicKey = null;

  public ApplePayload activationData(String activationData) {
    this.activationData = activationData;
    return this;
  }

   /**
   * Get activationData
   * @return activationData
  **/
  @ApiModelProperty(value = "")
  public String getActivationData() {
    return activationData;
  }

  public void setActivationData(String activationData) {
    this.activationData = activationData;
  }

  public ApplePayload encryptedPassData(String encryptedPassData) {
    this.encryptedPassData = encryptedPassData;
    return this;
  }

   /**
   * Get encryptedPassData
   * @return encryptedPassData
  **/
  @ApiModelProperty(value = "")
  public String getEncryptedPassData() {
    return encryptedPassData;
  }

  public void setEncryptedPassData(String encryptedPassData) {
    this.encryptedPassData = encryptedPassData;
  }

  public ApplePayload ephemeralPublicKey(String ephemeralPublicKey) {
    this.ephemeralPublicKey = ephemeralPublicKey;
    return this;
  }

   /**
   * Get ephemeralPublicKey
   * @return ephemeralPublicKey
  **/
  @ApiModelProperty(value = "")
  public String getEphemeralPublicKey() {
    return ephemeralPublicKey;
  }

  public void setEphemeralPublicKey(String ephemeralPublicKey) {
    this.ephemeralPublicKey = ephemeralPublicKey;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplePayload applePayload = (ApplePayload) o;
    return Objects.equals(this.activationData, applePayload.activationData) &&
        Objects.equals(this.encryptedPassData, applePayload.encryptedPassData) &&
        Objects.equals(this.ephemeralPublicKey, applePayload.ephemeralPublicKey);
  }

  @Override
  public int hashCode() {
    return Objects.hash(activationData, encryptedPassData, ephemeralPublicKey);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplePayload {\n");
    
    sb.append("    activationData: ").append(toIndentedString(activationData)).append("\n");
    sb.append("    encryptedPassData: ").append(toIndentedString(encryptedPassData)).append("\n");
    sb.append("    ephemeralPublicKey: ").append(toIndentedString(ephemeralPublicKey)).append("\n");
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

