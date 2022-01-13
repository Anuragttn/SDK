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

/**
 * Currency Object
 */
@ApiModel(description = "Currency Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class Currency {
  @SerializedName("alphabetic_code")
  private String alphabeticCode = null;

  @SerializedName("currency")
  private String currency = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("numeric_code")
  private String numericCode = null;

  public Currency alphabeticCode(String alphabeticCode) {
    this.alphabeticCode = alphabeticCode;
    return this;
  }

   /**
   * alphabetic_code
   * @return alphabeticCode
  **/
  @ApiModelProperty(example = "AWG", value = "alphabetic_code")
  public String getAlphabeticCode() {
    return alphabeticCode;
  }

  public void setAlphabeticCode(String alphabeticCode) {
    this.alphabeticCode = alphabeticCode;
  }

  public Currency currency(String currency) {
    this.currency = currency;
    return this;
  }

   /**
   * currency
   * @return currency
  **/
  @ApiModelProperty(example = "Azerbaijan Manat", value = "currency")
  public String getCurrency() {
    return currency;
  }

  public void setCurrency(String currency) {
    this.currency = currency;
  }

  public Currency id(UUID id) {
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

  public Currency numericCode(String numericCode) {
    this.numericCode = numericCode;
    return this;
  }

   /**
   * numeric_code
   * @return numericCode
  **/
  @ApiModelProperty(example = "944", value = "numeric_code")
  public String getNumericCode() {
    return numericCode;
  }

  public void setNumericCode(String numericCode) {
    this.numericCode = numericCode;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Currency currency = (Currency) o;
    return Objects.equals(this.alphabeticCode, currency.alphabeticCode) &&
        Objects.equals(this.currency, currency.currency) &&
        Objects.equals(this.id, currency.id) &&
        Objects.equals(this.numericCode, currency.numericCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(alphabeticCode, currency, id, numericCode);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Currency {\n");
    
    sb.append("    alphabeticCode: ").append(toIndentedString(alphabeticCode)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    numericCode: ").append(toIndentedString(numericCode)).append("\n");
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

