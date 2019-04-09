/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
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
import io.swagger.client.model.CampaignPlanPayload;
import io.swagger.client.model.CampaignPlanPayloadPlanRates;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * CreateCampaignPlanResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class CreateCampaignPlanResponse {
  @SerializedName("description")
  private String description = null;

  @SerializedName("is_active")
  private Boolean isActive = true;

  @SerializedName("plan_rates")
  private List<CampaignPlanPayloadPlanRates> planRates = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("create_date")
  private String createDate = null;

  public CreateCampaignPlanResponse description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Description for the campaign plan
   * @return description
  **/
  @ApiModelProperty(required = true, value = "Description for the campaign plan")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public CreateCampaignPlanResponse isActive(Boolean isActive) {
    this.isActive = isActive;
    return this;
  }

   /**
   * Indicates if the campaign plan is currently active. Defaults to true which indicates that it is active
   * @return isActive
  **/
  @ApiModelProperty(value = "Indicates if the campaign plan is currently active. Defaults to true which indicates that it is active")
  public Boolean isIsActive() {
    return isActive;
  }

  public void setIsActive(Boolean isActive) {
    this.isActive = isActive;
  }

  public CreateCampaignPlanResponse planRates(List<CampaignPlanPayloadPlanRates> planRates) {
    this.planRates = planRates;
    return this;
  }

  public CreateCampaignPlanResponse addPlanRatesItem(CampaignPlanPayloadPlanRates planRatesItem) {
    if (this.planRates == null) {
      this.planRates = new ArrayList<CampaignPlanPayloadPlanRates>();
    }
    this.planRates.add(planRatesItem);
    return this;
  }

   /**
   * Get planRates
   * @return planRates
  **/
  @ApiModelProperty(value = "")
  public List<CampaignPlanPayloadPlanRates> getPlanRates() {
    return planRates;
  }

  public void setPlanRates(List<CampaignPlanPayloadPlanRates> planRates) {
    this.planRates = planRates;
  }

  public CreateCampaignPlanResponse secondaryId(String secondaryId) {
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

  public CreateCampaignPlanResponse id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * ID of the marketing campaign plan
   * @return id
  **/
  @ApiModelProperty(value = "ID of the marketing campaign plan")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public CreateCampaignPlanResponse createDate(String createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Datetime the marketing campaign plan was created
   * @return createDate
  **/
  @ApiModelProperty(value = "Datetime the marketing campaign plan was created")
  public String getCreateDate() {
    return createDate;
  }

  public void setCreateDate(String createDate) {
    this.createDate = createDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateCampaignPlanResponse createCampaignPlanResponse = (CreateCampaignPlanResponse) o;
    return Objects.equals(this.description, createCampaignPlanResponse.description) &&
        Objects.equals(this.isActive, createCampaignPlanResponse.isActive) &&
        Objects.equals(this.planRates, createCampaignPlanResponse.planRates) &&
        Objects.equals(this.secondaryId, createCampaignPlanResponse.secondaryId) &&
        Objects.equals(this.id, createCampaignPlanResponse.id) &&
        Objects.equals(this.createDate, createCampaignPlanResponse.createDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, isActive, planRates, secondaryId, id, createDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateCampaignPlanResponse {\n");
    
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    isActive: ").append(toIndentedString(isActive)).append("\n");
    sb.append("    planRates: ").append(toIndentedString(planRates)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
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
