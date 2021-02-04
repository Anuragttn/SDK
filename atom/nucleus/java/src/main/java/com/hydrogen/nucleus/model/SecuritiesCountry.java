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

/**
 * SecuritiesCountry
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-28T16:21:02.928Z")



public class SecuritiesCountry {
  @SerializedName("country")
  private String country = null;

  @SerializedName("weight")
  private Double weight = null;

  public SecuritiesCountry country(String country) {
    this.country = country;
    return this;
  }

   /**
   * country
   * @return country
  **/
  @ApiModelProperty(example = "US", required = true, value = "country")
  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public SecuritiesCountry weight(Double weight) {
    this.weight = weight;
    return this;
  }

   /**
   * Securities Country weight
   * @return weight
  **/
  @ApiModelProperty(example = "1.0", required = true, value = "Securities Country weight")
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
    SecuritiesCountry securitiesCountry = (SecuritiesCountry) o;
    return Objects.equals(this.country, securitiesCountry.country) &&
        Objects.equals(this.weight, securitiesCountry.weight);
  }

  @Override
  public int hashCode() {
    return Objects.hash(country, weight);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritiesCountry {\n");
    
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
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

