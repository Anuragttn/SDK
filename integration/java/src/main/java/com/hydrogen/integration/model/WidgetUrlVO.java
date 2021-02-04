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
import io.swagger.annotations.ApiModelProperty;

/**
 * WidgetUrlVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class WidgetUrlVO {
  @SerializedName("vendor_name")
  private String vendorName = null;

  @SerializedName("widget_url")
  private String widgetUrl = null;

  public WidgetUrlVO vendorName(String vendorName) {
    this.vendorName = vendorName;
    return this;
  }

   /**
   * Get vendorName
   * @return vendorName
  **/
  @ApiModelProperty(value = "")
  public String getVendorName() {
    return vendorName;
  }

  public void setVendorName(String vendorName) {
    this.vendorName = vendorName;
  }

  public WidgetUrlVO widgetUrl(String widgetUrl) {
    this.widgetUrl = widgetUrl;
    return this;
  }

   /**
   * Get widgetUrl
   * @return widgetUrl
  **/
  @ApiModelProperty(value = "")
  public String getWidgetUrl() {
    return widgetUrl;
  }

  public void setWidgetUrl(String widgetUrl) {
    this.widgetUrl = widgetUrl;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    WidgetUrlVO widgetUrlVO = (WidgetUrlVO) o;
    return Objects.equals(this.vendorName, widgetUrlVO.vendorName) &&
        Objects.equals(this.widgetUrl, widgetUrlVO.widgetUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(vendorName, widgetUrl);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class WidgetUrlVO {\n");
    
    sb.append("    vendorName: ").append(toIndentedString(vendorName)).append("\n");
    sb.append("    widgetUrl: ").append(toIndentedString(widgetUrl)).append("\n");
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

