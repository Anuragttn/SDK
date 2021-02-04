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

import java.util.ArrayList;
import java.util.List;

/**
 * CategoryInternalResponseVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-28T16:21:02.928Z")



public class CategoryInternalResponseVO {
  @SerializedName("category")
  private String category = null;

  @SerializedName("subcategories")
  private List<String> subcategories = null;

  @SerializedName("tenant_name")
  private String tenantName = null;

  public CategoryInternalResponseVO category(String category) {
    this.category = category;
    return this;
  }

   /**
   * Get category
   * @return category
  **/
  @ApiModelProperty(value = "")
  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public CategoryInternalResponseVO subcategories(List<String> subcategories) {
    this.subcategories = subcategories;
    return this;
  }

  public CategoryInternalResponseVO addSubcategoriesItem(String subcategoriesItem) {
    if (this.subcategories == null) {
      this.subcategories = new ArrayList<String>();
    }
    this.subcategories.add(subcategoriesItem);
    return this;
  }

   /**
   * Get subcategories
   * @return subcategories
  **/
  @ApiModelProperty(value = "")
  public List<String> getSubcategories() {
    return subcategories;
  }

  public void setSubcategories(List<String> subcategories) {
    this.subcategories = subcategories;
  }

  public CategoryInternalResponseVO tenantName(String tenantName) {
    this.tenantName = tenantName;
    return this;
  }

   /**
   * Get tenantName
   * @return tenantName
  **/
  @ApiModelProperty(value = "")
  public String getTenantName() {
    return tenantName;
  }

  public void setTenantName(String tenantName) {
    this.tenantName = tenantName;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CategoryInternalResponseVO categoryInternalResponseVO = (CategoryInternalResponseVO) o;
    return Objects.equals(this.category, categoryInternalResponseVO.category) &&
        Objects.equals(this.subcategories, categoryInternalResponseVO.subcategories) &&
        Objects.equals(this.tenantName, categoryInternalResponseVO.tenantName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(category, subcategories, tenantName);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CategoryInternalResponseVO {\n");
    
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    subcategories: ").append(toIndentedString(subcategories)).append("\n");
    sb.append("    tenantName: ").append(toIndentedString(tenantName)).append("\n");
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

