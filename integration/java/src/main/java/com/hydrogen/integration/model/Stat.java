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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * Stat Object
 */
@ApiModel(description = "Stat Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class Stat {
  @SerializedName("stat_name")
  private String statName = null;

  @SerializedName("stat_value")
  private Double statValue = null;

  public Stat statName(String statName) {
    this.statName = statName;
    return this;
  }

   /**
   * statName
   * @return statName
  **/
  @ApiModelProperty(example = "total_expenses", required = true, value = "statName")
  public String getStatName() {
    return statName;
  }

  public void setStatName(String statName) {
    this.statName = statName;
  }

  public Stat statValue(Double statValue) {
    this.statValue = statValue;
    return this;
  }

   /**
   * statValue
   * @return statValue
  **/
  @ApiModelProperty(example = "23.9", required = true, value = "statValue")
  public Double getStatValue() {
    return statValue;
  }

  public void setStatValue(Double statValue) {
    this.statValue = statValue;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Stat stat = (Stat) o;
    return Objects.equals(this.statName, stat.statName) &&
        Objects.equals(this.statValue, stat.statValue);
  }

  @Override
  public int hashCode() {
    return Objects.hash(statName, statValue);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Stat {\n");
    
    sb.append("    statName: ").append(toIndentedString(statName)).append("\n");
    sb.append("    statValue: ").append(toIndentedString(statValue)).append("\n");
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

