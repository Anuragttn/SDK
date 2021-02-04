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

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModelProperty;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * CategoryResponseVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-30T23:14:41.249Z")
public class CategoryResponseVO {
  @SerializedName("categories")
  private List<CategoryInternalResponseVO> categories = null;

  public CategoryResponseVO categories(List<CategoryInternalResponseVO> categories) {
    this.categories = categories;
    return this;
  }

  public CategoryResponseVO addCategoriesItem(CategoryInternalResponseVO categoriesItem) {
    if (this.categories == null) {
      this.categories = new ArrayList<CategoryInternalResponseVO>();
    }
    this.categories.add(categoriesItem);
    return this;
  }

   /**
   * Get categories
   * @return categories
  **/
  @ApiModelProperty(value = "")
  public List<CategoryInternalResponseVO> getCategories() {
    return categories;
  }

  public void setCategories(List<CategoryInternalResponseVO> categories) {
    this.categories = categories;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CategoryResponseVO categoryResponseVO = (CategoryResponseVO) o;
    return Objects.equals(this.categories, categoryResponseVO.categories);
  }

  @Override
  public int hashCode() {
    return Objects.hash(categories);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CategoryResponseVO {\n");

    sb.append("    categories: ").append(toIndentedString(categories)).append("\n");
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

