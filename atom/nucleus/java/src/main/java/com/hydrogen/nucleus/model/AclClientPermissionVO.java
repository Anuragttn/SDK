/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.model;

import java.util.Objects;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.UUID;

/**
 * AclClientPermissionVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-28T16:21:02.928Z")



public class AclClientPermissionVO {
  @SerializedName("account_id")
  private UUID accountId = null;

  @SerializedName("client_id")
  private UUID clientId = null;

  /**
   * permissionType
   */
  @JsonAdapter(PermissionTypeEnum.Adapter.class)
  public enum PermissionTypeEnum {
    INQUIRY_ACCESS("INQUIRY_ACCESS"),
    
    LIMITED_AUTHORITY("LIMITED_AUTHORITY"),
    
    FULL_AUTHORITY("FULL_AUTHORITY"),
    
    POWER_OF_ATTORNEY("POWER_OF_ATTORNEY");

    private String value;

    PermissionTypeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static PermissionTypeEnum fromValue(String text) {
      for (PermissionTypeEnum b : PermissionTypeEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<PermissionTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final PermissionTypeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public PermissionTypeEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return PermissionTypeEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("permission_type")
  private PermissionTypeEnum permissionType = null;

  public AclClientPermissionVO accountId(UUID accountId) {
    this.accountId = accountId;
    return this;
  }

   /**
   * accountId
   * @return accountId
  **/
  @ApiModelProperty(example = "1c28dade-8679-4df5-9b9d-c508d04fcb0c", value = "accountId")
  public UUID getAccountId() {
    return accountId;
  }

  public void setAccountId(UUID accountId) {
    this.accountId = accountId;
  }

  public AclClientPermissionVO clientId(UUID clientId) {
    this.clientId = clientId;
    return this;
  }

   /**
   * clientId
   * @return clientId
  **/
  @ApiModelProperty(example = "2035f52d-2c5b-4e07-8904-cb037bad7aff", value = "clientId")
  public UUID getClientId() {
    return clientId;
  }

  public void setClientId(UUID clientId) {
    this.clientId = clientId;
  }

  public AclClientPermissionVO permissionType(PermissionTypeEnum permissionType) {
    this.permissionType = permissionType;
    return this;
  }

   /**
   * permissionType
   * @return permissionType
  **/
  @ApiModelProperty(example = "INQUIRY_ACCESS", value = "permissionType")
  public PermissionTypeEnum getPermissionType() {
    return permissionType;
  }

  public void setPermissionType(PermissionTypeEnum permissionType) {
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
    AclClientPermissionVO aclClientPermissionVO = (AclClientPermissionVO) o;
    return Objects.equals(this.accountId, aclClientPermissionVO.accountId) &&
        Objects.equals(this.clientId, aclClientPermissionVO.clientId) &&
        Objects.equals(this.permissionType, aclClientPermissionVO.permissionType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountId, clientId, permissionType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AclClientPermissionVO {\n");
    
    sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
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

