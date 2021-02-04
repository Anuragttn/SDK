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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * CheckImages Object
 */
@ApiModel(description = "CheckImages Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-28T16:21:02.928Z")



public class CheckImages {
  @SerializedName("image_type")
  private String imageType = null;

  @SerializedName("image_url")
  private String imageUrl = null;

  public CheckImages imageType(String imageType) {
    this.imageType = imageType;
    return this;
  }

   /**
   * imageType
   * @return imageType
  **/
  @ApiModelProperty(example = "jpeg", value = "imageType")
  public String getImageType() {
    return imageType;
  }

  public void setImageType(String imageType) {
    this.imageType = imageType;
  }

  public CheckImages imageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
    return this;
  }

   /**
   * imageUrl
   * @return imageUrl
  **/
  @ApiModelProperty(example = "http://www.abc.com/test.jpeg", required = true, value = "imageUrl")
  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CheckImages checkImages = (CheckImages) o;
    return Objects.equals(this.imageType, checkImages.imageType) &&
        Objects.equals(this.imageUrl, checkImages.imageUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(imageType, imageUrl);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CheckImages {\n");
    
    sb.append("    imageType: ").append(toIndentedString(imageType)).append("\n");
    sb.append("    imageUrl: ").append(toIndentedString(imageUrl)).append("\n");
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

