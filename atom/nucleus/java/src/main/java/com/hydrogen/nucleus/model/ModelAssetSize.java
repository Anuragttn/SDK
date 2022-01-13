/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.5
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.model;

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
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;

/**
 * Model Asset_Size Object
 */
@ApiModel(description = "Model Asset_Size Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class ModelAssetSize {
  @SerializedName("asset_size")
  private Double assetSize = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("currency_code")
  private String currencyCode = null;

  @SerializedName("date")
  private LocalDate date = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("is_reconciled")
  private Boolean isReconciled = null;

  @SerializedName("model_id")
  private UUID modelId = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public ModelAssetSize assetSize(Double assetSize) {
    this.assetSize = assetSize;
    return this;
  }

   /**
   * Model asset_size
   * @return assetSize
  **/
  @ApiModelProperty(example = "0.9", required = true, value = "Model asset_size")
  public Double getAssetSize() {
    return assetSize;
  }

  public void setAssetSize(Double assetSize) {
    this.assetSize = assetSize;
  }

  public ModelAssetSize createDate(OffsetDateTime createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Get createDate
   * @return createDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getCreateDate() {
    return createDate;
  }

  public void setCreateDate(OffsetDateTime createDate) {
    this.createDate = createDate;
  }

  public ModelAssetSize currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * currency_code
   * @return currencyCode
  **/
  @ApiModelProperty(example = "USD", value = "currency_code")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }

  public ModelAssetSize date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * Model asset_size date
   * @return date
  **/
  @ApiModelProperty(example = "2018-01-09'T'12:00:00", required = true, value = "Model asset_size date")
  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public ModelAssetSize id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public ModelAssetSize isReconciled(Boolean isReconciled) {
    this.isReconciled = isReconciled;
    return this;
  }

   /**
   * Model asset_size is reconciled
   * @return isReconciled
  **/
  @ApiModelProperty(example = "true", value = "Model asset_size is reconciled")
  public Boolean isIsReconciled() {
    return isReconciled;
  }

  public void setIsReconciled(Boolean isReconciled) {
    this.isReconciled = isReconciled;
  }

  public ModelAssetSize modelId(UUID modelId) {
    this.modelId = modelId;
    return this;
  }

   /**
   * Model asset_size Model id
   * @return modelId
  **/
  @ApiModelProperty(example = "62fd0a9f-4bac-4b1d-94d2-2c5ea2adca3d", required = true, value = "Model asset_size Model id")
  public UUID getModelId() {
    return modelId;
  }

  public void setModelId(UUID modelId) {
    this.modelId = modelId;
  }

  public ModelAssetSize secondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
    return this;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(example = "7289243787238", value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public void setSecondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
  }

  public ModelAssetSize updateDate(OffsetDateTime updateDate) {
    this.updateDate = updateDate;
    return this;
  }

   /**
   * Get updateDate
   * @return updateDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getUpdateDate() {
    return updateDate;
  }

  public void setUpdateDate(OffsetDateTime updateDate) {
    this.updateDate = updateDate;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ModelAssetSize modelAssetSize = (ModelAssetSize) o;
    return Objects.equals(this.assetSize, modelAssetSize.assetSize) &&
        Objects.equals(this.createDate, modelAssetSize.createDate) &&
        Objects.equals(this.currencyCode, modelAssetSize.currencyCode) &&
        Objects.equals(this.date, modelAssetSize.date) &&
        Objects.equals(this.id, modelAssetSize.id) &&
        Objects.equals(this.isReconciled, modelAssetSize.isReconciled) &&
        Objects.equals(this.modelId, modelAssetSize.modelId) &&
        Objects.equals(this.secondaryId, modelAssetSize.secondaryId) &&
        Objects.equals(this.updateDate, modelAssetSize.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assetSize, createDate, currencyCode, date, id, isReconciled, modelId, secondaryId, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ModelAssetSize {\n");
    
    sb.append("    assetSize: ").append(toIndentedString(assetSize)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    isReconciled: ").append(toIndentedString(isReconciled)).append("\n");
    sb.append("    modelId: ").append(toIndentedString(modelId)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    updateDate: ").append(toIndentedString(updateDate)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

