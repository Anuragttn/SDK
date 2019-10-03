/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.1
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
import io.swagger.client.model.CreateClientResponseResponse;
import java.io.IOException;
import java.util.UUID;

/**
 * SpecificClientResponseResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-09-16T14:10:50.140-04:00")
public class SpecificClientResponseResponse {
  @SerializedName("id")
  private UUID id = null;

  @SerializedName("create_date")
  private String createDate = null;

  @SerializedName("answer_id")
  private UUID answerId = null;

  @SerializedName("answer_value")
  private String answerValue = null;

  @SerializedName("client_id")
  private UUID clientId = null;

  @SerializedName("account_id")
  private UUID accountId = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("metadata")
  private Object metadata = null;

  @SerializedName("update_date")
  private String updateDate = null;

  public SpecificClientResponseResponse id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * ID of the client response
   * @return id
  **/
  @ApiModelProperty(value = "ID of the client response")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public SpecificClientResponseResponse createDate(String createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Datetime the client response was created
   * @return createDate
  **/
  @ApiModelProperty(value = "Datetime the client response was created")
  public String getCreateDate() {
    return createDate;
  }

  public void setCreateDate(String createDate) {
    this.createDate = createDate;
  }

  public SpecificClientResponseResponse answerId(UUID answerId) {
    this.answerId = answerId;
    return this;
  }

   /**
   * The ID of the answer provided to link the response to a question
   * @return answerId
  **/
  @ApiModelProperty(required = true, value = "The ID of the answer provided to link the response to a question")
  public UUID getAnswerId() {
    return answerId;
  }

  public void setAnswerId(UUID answerId) {
    this.answerId = answerId;
  }

  public SpecificClientResponseResponse answerValue(String answerValue) {
    this.answerValue = answerValue;
    return this;
  }

   /**
   * Body of the client’s response
   * @return answerValue
  **/
  @ApiModelProperty(required = true, value = "Body of the client’s response")
  public String getAnswerValue() {
    return answerValue;
  }

  public void setAnswerValue(String answerValue) {
    this.answerValue = answerValue;
  }

  public SpecificClientResponseResponse clientId(UUID clientId) {
    this.clientId = clientId;
    return this;
  }

   /**
   * The ID of the client to whom the response belongs
   * @return clientId
  **/
  @ApiModelProperty(value = "The ID of the client to whom the response belongs")
  public UUID getClientId() {
    return clientId;
  }

  public void setClientId(UUID clientId) {
    this.clientId = clientId;
  }

  public SpecificClientResponseResponse accountId(UUID accountId) {
    this.accountId = accountId;
    return this;
  }

   /**
   * In the case that the response applies to only one of a client’s accounts and not the client as a whole, the ID of the account to which the response belongs
   * @return accountId
  **/
  @ApiModelProperty(value = "In the case that the response applies to only one of a client’s accounts and not the client as a whole, the ID of the account to which the response belongs")
  public UUID getAccountId() {
    return accountId;
  }

  public void setAccountId(UUID accountId) {
    this.accountId = accountId;
  }

  public SpecificClientResponseResponse secondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
    return this;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public void setSecondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
  }

  public SpecificClientResponseResponse metadata(Object metadata) {
    this.metadata = metadata;
    return this;
  }

   /**
   * Custom information associated with the client response in the format key:value
   * @return metadata
  **/
  @ApiModelProperty(value = "Custom information associated with the client response in the format key:value")
  public Object getMetadata() {
    return metadata;
  }

  public void setMetadata(Object metadata) {
    this.metadata = metadata;
  }

  public SpecificClientResponseResponse updateDate(String updateDate) {
    this.updateDate = updateDate;
    return this;
  }

   /**
   * Latest datetime the client response was updated
   * @return updateDate
  **/
  @ApiModelProperty(value = "Latest datetime the client response was updated")
  public String getUpdateDate() {
    return updateDate;
  }

  public void setUpdateDate(String updateDate) {
    this.updateDate = updateDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SpecificClientResponseResponse specificClientResponseResponse = (SpecificClientResponseResponse) o;
    return Objects.equals(this.id, specificClientResponseResponse.id) &&
        Objects.equals(this.createDate, specificClientResponseResponse.createDate) &&
        Objects.equals(this.answerId, specificClientResponseResponse.answerId) &&
        Objects.equals(this.answerValue, specificClientResponseResponse.answerValue) &&
        Objects.equals(this.clientId, specificClientResponseResponse.clientId) &&
        Objects.equals(this.accountId, specificClientResponseResponse.accountId) &&
        Objects.equals(this.secondaryId, specificClientResponseResponse.secondaryId) &&
        Objects.equals(this.metadata, specificClientResponseResponse.metadata) &&
        Objects.equals(this.updateDate, specificClientResponseResponse.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, createDate, answerId, answerValue, clientId, accountId, secondaryId, metadata, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SpecificClientResponseResponse {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    answerId: ").append(toIndentedString(answerId)).append("\n");
    sb.append("    answerValue: ").append(toIndentedString(answerValue)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
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

