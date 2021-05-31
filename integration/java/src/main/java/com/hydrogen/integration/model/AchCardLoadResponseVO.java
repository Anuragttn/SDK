/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.integration.model;

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

/**
 * AchCardLoadResponseVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-18T13:00:49.675Z")
public class AchCardLoadResponseVO {
  @SerializedName("card_load")
  private Object cardLoad = null;

  @SerializedName("card_load_status_code")
  private Integer cardLoadStatusCode = null;

  public AchCardLoadResponseVO cardLoad(Object cardLoad) {
    this.cardLoad = cardLoad;
    return this;
  }

   /**
   * Get cardLoad
   * @return cardLoad
  **/
  @ApiModelProperty(value = "")
  public Object getCardLoad() {
    return cardLoad;
  }

  public void setCardLoad(Object cardLoad) {
    this.cardLoad = cardLoad;
  }

  public AchCardLoadResponseVO cardLoadStatusCode(Integer cardLoadStatusCode) {
    this.cardLoadStatusCode = cardLoadStatusCode;
    return this;
  }

   /**
   * Get cardLoadStatusCode
   * @return cardLoadStatusCode
  **/
  @ApiModelProperty(value = "")
  public Integer getCardLoadStatusCode() {
    return cardLoadStatusCode;
  }

  public void setCardLoadStatusCode(Integer cardLoadStatusCode) {
    this.cardLoadStatusCode = cardLoadStatusCode;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AchCardLoadResponseVO achCardLoadResponseVO = (AchCardLoadResponseVO) o;
    return Objects.equals(this.cardLoad, achCardLoadResponseVO.cardLoad) &&
        Objects.equals(this.cardLoadStatusCode, achCardLoadResponseVO.cardLoadStatusCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(cardLoad, cardLoadStatusCode);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AchCardLoadResponseVO {\n");
    
    sb.append("    cardLoad: ").append(toIndentedString(cardLoad)).append("\n");
    sb.append("    cardLoadStatusCode: ").append(toIndentedString(cardLoadStatusCode)).append("\n");
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
