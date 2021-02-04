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

import java.util.UUID;
import org.threeten.bp.LocalDate;

/**
 * SecuritiesComposition
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-28T16:21:02.928Z")



public class SecuritiesComposition {
  @SerializedName("component_id")
  private UUID componentId = null;

  @SerializedName("end_date")
  private LocalDate endDate = null;

  @SerializedName("start_date")
  private LocalDate startDate = null;

  @SerializedName("weight")
  private Double weight = null;

  public SecuritiesComposition componentId(UUID componentId) {
    this.componentId = componentId;
    return this;
  }

   /**
   * Securities Composition component Id
   * @return componentId
  **/
  @ApiModelProperty(example = "0000c009-e76f-40cd-a0ad-d4f73bbc700f", required = true, value = "Securities Composition component Id")
  public UUID getComponentId() {
    return componentId;
  }

  public void setComponentId(UUID componentId) {
    this.componentId = componentId;
  }

  public SecuritiesComposition endDate(LocalDate endDate) {
    this.endDate = endDate;
    return this;
  }

   /**
   * Securities Composition End Date
   * @return endDate
  **/
  @ApiModelProperty(example = "2018-01-09'T'12:00:00", required = true, value = "Securities Composition End Date")
  public LocalDate getEndDate() {
    return endDate;
  }

  public void setEndDate(LocalDate endDate) {
    this.endDate = endDate;
  }

  public SecuritiesComposition startDate(LocalDate startDate) {
    this.startDate = startDate;
    return this;
  }

   /**
   * Securities Composition Start Date
   * @return startDate
  **/
  @ApiModelProperty(example = "2017-01-09'T'12:00:00", required = true, value = "Securities Composition Start Date")
  public LocalDate getStartDate() {
    return startDate;
  }

  public void setStartDate(LocalDate startDate) {
    this.startDate = startDate;
  }

  public SecuritiesComposition weight(Double weight) {
    this.weight = weight;
    return this;
  }

   /**
   * Securities Composition weight
   * @return weight
  **/
  @ApiModelProperty(example = "100.0", required = true, value = "Securities Composition weight")
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
    SecuritiesComposition securitiesComposition = (SecuritiesComposition) o;
    return Objects.equals(this.componentId, securitiesComposition.componentId) &&
        Objects.equals(this.endDate, securitiesComposition.endDate) &&
        Objects.equals(this.startDate, securitiesComposition.startDate) &&
        Objects.equals(this.weight, securitiesComposition.weight);
  }

  @Override
  public int hashCode() {
    return Objects.hash(componentId, endDate, startDate, weight);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritiesComposition {\n");
    
    sb.append("    componentId: ").append(toIndentedString(componentId)).append("\n");
    sb.append("    endDate: ").append(toIndentedString(endDate)).append("\n");
    sb.append("    startDate: ").append(toIndentedString(startDate)).append("\n");
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

