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

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * BrokerageAccountCO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class BrokerageAccountCO {
  @SerializedName("nucleus_account_id")
  private UUID nucleusAccountId = null;

  @SerializedName("nucleus_document_ids")
  private List<UUID> nucleusDocumentIds = null;

  public BrokerageAccountCO nucleusAccountId(UUID nucleusAccountId) {
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

  public BrokerageAccountCO nucleusDocumentIds(List<UUID> nucleusDocumentIds) {
    this.nucleusDocumentIds = nucleusDocumentIds;
    return this;
  }

  public BrokerageAccountCO addNucleusDocumentIdsItem(UUID nucleusDocumentIdsItem) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BrokerageAccountCO brokerageAccountCO = (BrokerageAccountCO) o;
    return Objects.equals(this.nucleusAccountId, brokerageAccountCO.nucleusAccountId) &&
        Objects.equals(this.nucleusDocumentIds, brokerageAccountCO.nucleusDocumentIds);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nucleusAccountId, nucleusDocumentIds);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BrokerageAccountCO {\n");
    
    sb.append("    nucleusAccountId: ").append(toIndentedString(nucleusAccountId)).append("\n");
    sb.append("    nucleusDocumentIds: ").append(toIndentedString(nucleusDocumentIds)).append("\n");
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

