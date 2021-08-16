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
 * CreateBaasBusinessCO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-07-12T04:16:13.881Z")
public class CreateBaasBusinessCO {
  @SerializedName("nucleus_business_id")
  private UUID nucleusBusinessId = null;

  @SerializedName("nucleus_document_ids")
  private List<UUID> nucleusDocumentIds = null;

  public CreateBaasBusinessCO nucleusBusinessId(UUID nucleusBusinessId) {
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

  public CreateBaasBusinessCO nucleusDocumentIds(List<UUID> nucleusDocumentIds) {
    this.nucleusDocumentIds = nucleusDocumentIds;
    return this;
  }

  public CreateBaasBusinessCO addNucleusDocumentIdsItem(UUID nucleusDocumentIdsItem) {
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
    CreateBaasBusinessCO createBaasBusinessCO = (CreateBaasBusinessCO) o;
    return Objects.equals(this.nucleusBusinessId, createBaasBusinessCO.nucleusBusinessId) &&
        Objects.equals(this.nucleusDocumentIds, createBaasBusinessCO.nucleusDocumentIds);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nucleusBusinessId, nucleusDocumentIds);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateBaasBusinessCO {\n");
    
    sb.append("    nucleusBusinessId: ").append(toIndentedString(nucleusBusinessId)).append("\n");
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

