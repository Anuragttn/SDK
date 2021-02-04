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

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import org.threeten.bp.OffsetDateTime;

/**
 * ClientStatus Object
 */
@ApiModel(description = "ClientStatus Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-28T16:21:02.928Z")



public class ClientStatus {
  @SerializedName("client_id")
  private UUID clientId = null;

  @SerializedName("comments")
  private String comments = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("stage_id")
  private UUID stageId = null;

  @SerializedName("status")
  private String status = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public ClientStatus clientId(UUID clientId) {
    this.clientId = clientId;
    return this;
  }

   /**
   * clientId
   * @return clientId
  **/
  @ApiModelProperty(example = "11c28dade-8679-4df5-9b9d-c508d04fcb0c", required = true, value = "clientId")
  public UUID getClientId() {
    return clientId;
  }

  public void setClientId(UUID clientId) {
    this.clientId = clientId;
  }

  public ClientStatus comments(String comments) {
    this.comments = comments;
    return this;
  }

   /**
   * comments
   * @return comments
  **/
  @ApiModelProperty(example = "invested", value = "comments")
  public String getComments() {
    return comments;
  }

  public void setComments(String comments) {
    this.comments = comments;
  }

   /**
   * Get createDate
   * @return createDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getCreateDate() {
    return createDate;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

  public ClientStatus metadata(Map<String, String> metadata) {
    this.metadata = metadata;
    return this;
  }

  public ClientStatus putMetadataItem(String key, String metadataItem) {
    if (this.metadata == null) {
      this.metadata = new HashMap<String, String>();
    }
    this.metadata.put(key, metadataItem);
    return this;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @ApiModelProperty(value = "")
  public Map<String, String> getMetadata() {
    return metadata;
  }

  public void setMetadata(Map<String, String> metadata) {
    this.metadata = metadata;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(example = "7289243787238", value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public ClientStatus stageId(UUID stageId) {
    this.stageId = stageId;
    return this;
  }

   /**
   * clientLevelId
   * @return stageId
  **/
  @ApiModelProperty(example = "2035f52d-2c5b-4e07-8904-cb037bad7aff", required = true, value = "clientLevelId")
  public UUID getStageId() {
    return stageId;
  }

  public void setStageId(UUID stageId) {
    this.stageId = stageId;
  }

  public ClientStatus status(String status) {
    this.status = status;
    return this;
  }

   /**
   * status
   * @return status
  **/
  @ApiModelProperty(example = "complete", required = true, value = "status")
  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
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
    ClientStatus clientStatus = (ClientStatus) o;
    return Objects.equals(this.clientId, clientStatus.clientId) &&
        Objects.equals(this.comments, clientStatus.comments) &&
        Objects.equals(this.createDate, clientStatus.createDate) &&
        Objects.equals(this.id, clientStatus.id) &&
        Objects.equals(this.metadata, clientStatus.metadata) &&
        Objects.equals(this.secondaryId, clientStatus.secondaryId) &&
        Objects.equals(this.stageId, clientStatus.stageId) &&
        Objects.equals(this.status, clientStatus.status) &&
        Objects.equals(this.updateDate, clientStatus.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(clientId, comments, createDate, id, metadata, secondaryId, stageId, status, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ClientStatus {\n");
    
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    comments: ").append(toIndentedString(comments)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    stageId: ").append(toIndentedString(stageId)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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

