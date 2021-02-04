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

/**
 * PortfolioGoalMap
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-28T16:21:02.928Z")



public class PortfolioGoalMap {
  @SerializedName("goal_id")
  private UUID goalId = null;

  @SerializedName("weight")
  private Double weight = null;

  public PortfolioGoalMap goalId(UUID goalId) {
    this.goalId = goalId;
    return this;
  }

   /**
   * goal_id
   * @return goalId
  **/
  @ApiModelProperty(example = "6e14259a-9a68-4593-9e6d-8fcd0d05cf44", required = true, value = "goal_id")
  public UUID getGoalId() {
    return goalId;
  }

  public void setGoalId(UUID goalId) {
    this.goalId = goalId;
  }

  public PortfolioGoalMap weight(Double weight) {
    this.weight = weight;
    return this;
  }

   /**
   * weight
   * @return weight
  **/
  @ApiModelProperty(example = "0.88", required = true, value = "weight")
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
    PortfolioGoalMap portfolioGoalMap = (PortfolioGoalMap) o;
    return Objects.equals(this.goalId, portfolioGoalMap.goalId) &&
        Objects.equals(this.weight, portfolioGoalMap.weight);
  }

  @Override
  public int hashCode() {
    return Objects.hash(goalId, weight);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PortfolioGoalMap {\n");
    
    sb.append("    goalId: ").append(toIndentedString(goalId)).append("\n");
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

