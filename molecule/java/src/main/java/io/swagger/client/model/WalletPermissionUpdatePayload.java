/*
 * Hydrogen Molecule API
 * The Hydrogen Molecule API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.UUID;

/**
 * WalletPermissionUpdatePayload
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-02-28T13:58:42.401-05:00")
public class WalletPermissionUpdatePayload {
  @SerializedName("nucleus_client_id")
  private UUID nucleusClientId = null;

  @SerializedName("permission_type")
  private String permissionType = null;

  public WalletPermissionUpdatePayload nucleusClientId(UUID nucleusClientId) {
    this.nucleusClientId = nucleusClientId;
    return this;
  }

   /**
   * The id of the client associated with the wallet
   * @return nucleusClientId
  **/
  @ApiModelProperty(required = true, value = "The id of the client associated with the wallet")
  public UUID getNucleusClientId() {
    return nucleusClientId;
  }

  public void setNucleusClientId(UUID nucleusClientId) {
    this.nucleusClientId = nucleusClientId;
  }

  public WalletPermissionUpdatePayload permissionType(String permissionType) {
    this.permissionType = permissionType;
    return this;
  }

   /**
   * The permission of the client over the wallet
   * @return permissionType
  **/
  @ApiModelProperty(required = true, value = "The permission of the client over the wallet")
  public String getPermissionType() {
    return permissionType;
  }

  public void setPermissionType(String permissionType) {
    this.permissionType = permissionType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    WalletPermissionUpdatePayload walletPermissionUpdatePayload = (WalletPermissionUpdatePayload) o;
    return Objects.equals(this.nucleusClientId, walletPermissionUpdatePayload.nucleusClientId) &&
        Objects.equals(this.permissionType, walletPermissionUpdatePayload.permissionType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nucleusClientId, permissionType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class WalletPermissionUpdatePayload {\n");
    
    sb.append("    nucleusClientId: ").append(toIndentedString(nucleusClientId)).append("\n");
    sb.append("    permissionType: ").append(toIndentedString(permissionType)).append("\n");
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

