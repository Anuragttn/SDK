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

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.Map;
import java.util.UUID;
import org.threeten.bp.OffsetDateTime;

/**
 * RiskProfile Object
 */
@ApiModel(description = "RiskProfile Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-28T16:21:02.928Z")



public class RiskProfile {
  @SerializedName("category")
  private String category = null;

  @SerializedName("client_id")
  private UUID clientId = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("risk_score_max")
  private Double riskScoreMax = null;

  @SerializedName("risk_score_min")
  private Double riskScoreMin = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public RiskProfile category(String category) {
    this.category = category;
    return this;
  }

   /**
   * description
   * @return category
  **/
  @ApiModelProperty(example = "risk profile category", value = "description")
  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public RiskProfile clientId(UUID clientId) {
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

   /**
   * Get createDate
   * @return createDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getCreateDate() {
    return createDate;
  }

  public RiskProfile description(String description) {
    this.description = description;
    return this;
  }

   /**
   * description
   * @return description
  **/
  @ApiModelProperty(example = "risk profile desc", value = "description")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

   /**
   * metadata
   * @return metadata
  **/
  @ApiModelProperty(example = "{}", value = "metadata")
  public Map<String, String> getMetadata() {
    return metadata;
  }

  public RiskProfile name(String name) {
    this.name = name;
    return this;
  }

   /**
   * name
   * @return name
  **/
  @ApiModelProperty(example = "profile name", required = true, value = "name")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public RiskProfile riskScoreMax(Double riskScoreMax) {
    this.riskScoreMax = riskScoreMax;
    return this;
  }

   /**
   * risk_score_max
   * @return riskScoreMax
  **/
  @ApiModelProperty(example = "50.0", value = "risk_score_max")
  public Double getRiskScoreMax() {
    return riskScoreMax;
  }

  public void setRiskScoreMax(Double riskScoreMax) {
    this.riskScoreMax = riskScoreMax;
  }

  public RiskProfile riskScoreMin(Double riskScoreMin) {
    this.riskScoreMin = riskScoreMin;
    return this;
  }

   /**
   * risk_score_min
   * @return riskScoreMin
  **/
  @ApiModelProperty(example = "25.0000001", value = "risk_score_min")
  public Double getRiskScoreMin() {
    return riskScoreMin;
  }

  public void setRiskScoreMin(Double riskScoreMin) {
    this.riskScoreMin = riskScoreMin;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(example = "7289243787238", value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

   /**
   * Get updateDate
   * @return updateDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getUpdateDate() {
    return updateDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RiskProfile riskProfile = (RiskProfile) o;
    return Objects.equals(this.category, riskProfile.category) &&
        Objects.equals(this.clientId, riskProfile.clientId) &&
        Objects.equals(this.createDate, riskProfile.createDate) &&
        Objects.equals(this.description, riskProfile.description) &&
        Objects.equals(this.id, riskProfile.id) &&
        Objects.equals(this.metadata, riskProfile.metadata) &&
        Objects.equals(this.name, riskProfile.name) &&
        Objects.equals(this.riskScoreMax, riskProfile.riskScoreMax) &&
        Objects.equals(this.riskScoreMin, riskProfile.riskScoreMin) &&
        Objects.equals(this.secondaryId, riskProfile.secondaryId) &&
        Objects.equals(this.updateDate, riskProfile.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(category, clientId, createDate, description, id, metadata, name, riskScoreMax, riskScoreMin, secondaryId, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RiskProfile {\n");
    
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    riskScoreMax: ").append(toIndentedString(riskScoreMax)).append("\n");
    sb.append("    riskScoreMin: ").append(toIndentedString(riskScoreMin)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    updateDate: ").append(toIndentedString(updateDate)).append("\n");
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

