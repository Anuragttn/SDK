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
import io.swagger.annotations.ApiModelProperty;

import java.util.Map;
import java.util.UUID;

/**
 * Answer
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-28T16:21:02.928Z")



public class Answer {
  @SerializedName("id")
  private UUID id = null;

  @SerializedName("image")
  private String image = null;

  @SerializedName("is_default")
  private Boolean isDefault = null;

  @SerializedName("label")
  private String label = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("order_index")
  private String orderIndex = null;

  @SerializedName("question")
  private Question question = null;

  @SerializedName("question_id")
  private UUID questionId = null;

  @SerializedName("tooltip")
  private String tooltip = null;

  @SerializedName("value")
  private String value = null;

  @SerializedName("weight")
  private Double weight = null;

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

  public Answer image(String image) {
    this.image = image;
    return this;
  }

   /**
   * image
   * @return image
  **/
  @ApiModelProperty(example = "image", value = "image")
  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public Answer isDefault(Boolean isDefault) {
    this.isDefault = isDefault;
    return this;
  }

   /**
   * isDefault
   * @return isDefault
  **/
  @ApiModelProperty(example = "false", value = "isDefault")
  public Boolean isIsDefault() {
    return isDefault;
  }

  public void setIsDefault(Boolean isDefault) {
    this.isDefault = isDefault;
  }

  public Answer label(String label) {
    this.label = label;
    return this;
  }

   /**
   * label
   * @return label
  **/
  @ApiModelProperty(example = "label", value = "label")
  public String getLabel() {
    return label;
  }

  public void setLabel(String label) {
    this.label = label;
  }

   /**
   * metadata
   * @return metadata
  **/
  @ApiModelProperty(example = "{}", value = "metadata")
  public Map<String, String> getMetadata() {
    return metadata;
  }

  public Answer orderIndex(String orderIndex) {
    this.orderIndex = orderIndex;
    return this;
  }

   /**
   * orderIndex
   * @return orderIndex
  **/
  @ApiModelProperty(example = "1", value = "orderIndex")
  public String getOrderIndex() {
    return orderIndex;
  }

  public void setOrderIndex(String orderIndex) {
    this.orderIndex = orderIndex;
  }

  public Answer question(Question question) {
    this.question = question;
    return this;
  }

   /**
   * Get question
   * @return question
  **/
  @ApiModelProperty(value = "")
  public Question getQuestion() {
    return question;
  }

  public void setQuestion(Question question) {
    this.question = question;
  }

  public Answer questionId(UUID questionId) {
    this.questionId = questionId;
    return this;
  }

   /**
   * questionId
   * @return questionId
  **/
  @ApiModelProperty(example = "2feae367-77be-4613-9cd0-f62fd5b3cff9", value = "questionId")
  public UUID getQuestionId() {
    return questionId;
  }

  public void setQuestionId(UUID questionId) {
    this.questionId = questionId;
  }

  public Answer tooltip(String tooltip) {
    this.tooltip = tooltip;
    return this;
  }

   /**
   * Get tooltip
   * @return tooltip
  **/
  @ApiModelProperty(value = "")
  public String getTooltip() {
    return tooltip;
  }

  public void setTooltip(String tooltip) {
    this.tooltip = tooltip;
  }

  public Answer value(String value) {
    this.value = value;
    return this;
  }

   /**
   * value
   * @return value
  **/
  @ApiModelProperty(example = "0-40", required = true, value = "value")
  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public Answer weight(Double weight) {
    this.weight = weight;
    return this;
  }

   /**
   * weight
   * @return weight
  **/
  @ApiModelProperty(example = "10.0", value = "weight")
  public Double getWeight() {
    return weight;
  }

  public void setWeight(Double weight) {
    this.weight = weight;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Answer answer = (Answer) o;
    return Objects.equals(this.id, answer.id) &&
        Objects.equals(this.image, answer.image) &&
        Objects.equals(this.isDefault, answer.isDefault) &&
        Objects.equals(this.label, answer.label) &&
        Objects.equals(this.metadata, answer.metadata) &&
        Objects.equals(this.orderIndex, answer.orderIndex) &&
        Objects.equals(this.question, answer.question) &&
        Objects.equals(this.questionId, answer.questionId) &&
        Objects.equals(this.tooltip, answer.tooltip) &&
        Objects.equals(this.value, answer.value) &&
        Objects.equals(this.weight, answer.weight);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, image, isDefault, label, metadata, orderIndex, question, questionId, tooltip, value, weight);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Answer {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    isDefault: ").append(toIndentedString(isDefault)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    orderIndex: ").append(toIndentedString(orderIndex)).append("\n");
    sb.append("    question: ").append(toIndentedString(question)).append("\n");
    sb.append("    questionId: ").append(toIndentedString(questionId)).append("\n");
    sb.append("    tooltip: ").append(toIndentedString(tooltip)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
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

