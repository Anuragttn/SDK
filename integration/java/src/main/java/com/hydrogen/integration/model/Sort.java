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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * Sort Object
 */
@ApiModel(description = "Sort Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-07-12T04:16:13.881Z")
public class Sort {
  @SerializedName("ascending")
  private Boolean ascending = null;

  @SerializedName("descending")
  private Boolean descending = null;

  @SerializedName("direction")
  private String direction = null;

  @SerializedName("ignore_case")
  private Boolean ignoreCase = null;

  @SerializedName("null_handling")
  private String nullHandling = null;

  @SerializedName("property")
  private String property = null;

  public Sort ascending(Boolean ascending) {
    this.ascending = ascending;
    return this;
  }

   /**
   * ascending
   * @return ascending
  **/
  @ApiModelProperty(example = "true", value = "ascending")
  public Boolean isAscending() {
    return ascending;
  }

  public void setAscending(Boolean ascending) {
    this.ascending = ascending;
  }

  public Sort descending(Boolean descending) {
    this.descending = descending;
    return this;
  }

   /**
   * descending
   * @return descending
  **/
  @ApiModelProperty(example = "false", value = "descending")
  public Boolean isDescending() {
    return descending;
  }

  public void setDescending(Boolean descending) {
    this.descending = descending;
  }

  public Sort direction(String direction) {
    this.direction = direction;
    return this;
  }

   /**
   * direction
   * @return direction
  **/
  @ApiModelProperty(example = "DESC", value = "direction")
  public String getDirection() {
    return direction;
  }

  public void setDirection(String direction) {
    this.direction = direction;
  }

  public Sort ignoreCase(Boolean ignoreCase) {
    this.ignoreCase = ignoreCase;
    return this;
  }

   /**
   * ignoreCase
   * @return ignoreCase
  **/
  @ApiModelProperty(example = "false", value = "ignoreCase")
  public Boolean isIgnoreCase() {
    return ignoreCase;
  }

  public void setIgnoreCase(Boolean ignoreCase) {
    this.ignoreCase = ignoreCase;
  }

  public Sort nullHandling(String nullHandling) {
    this.nullHandling = nullHandling;
    return this;
  }

   /**
   * nullHandling
   * @return nullHandling
  **/
  @ApiModelProperty(example = "NATIVE", value = "nullHandling")
  public String getNullHandling() {
    return nullHandling;
  }

  public void setNullHandling(String nullHandling) {
    this.nullHandling = nullHandling;
  }

  public Sort property(String property) {
    this.property = property;
    return this;
  }

   /**
   * property
   * @return property
  **/
  @ApiModelProperty(example = "updateDate", value = "property")
  public String getProperty() {
    return property;
  }

  public void setProperty(String property) {
    this.property = property;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Sort sort = (Sort) o;
    return Objects.equals(this.ascending, sort.ascending) &&
        Objects.equals(this.descending, sort.descending) &&
        Objects.equals(this.direction, sort.direction) &&
        Objects.equals(this.ignoreCase, sort.ignoreCase) &&
        Objects.equals(this.nullHandling, sort.nullHandling) &&
        Objects.equals(this.property, sort.property);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ascending, descending, direction, ignoreCase, nullHandling, property);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Sort {\n");
    
    sb.append("    ascending: ").append(toIndentedString(ascending)).append("\n");
    sb.append("    descending: ").append(toIndentedString(descending)).append("\n");
    sb.append("    direction: ").append(toIndentedString(direction)).append("\n");
    sb.append("    ignoreCase: ").append(toIndentedString(ignoreCase)).append("\n");
    sb.append("    nullHandling: ").append(toIndentedString(nullHandling)).append("\n");
    sb.append("    property: ").append(toIndentedString(property)).append("\n");
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

