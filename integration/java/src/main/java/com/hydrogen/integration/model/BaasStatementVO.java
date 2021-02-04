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
 * BaasStatementVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class BaasStatementVO {
  @SerializedName("statement_content")
  private Object statementContent = null;

  @SerializedName("statement_content_type")
  private String statementContentType = null;

  @SerializedName("statement_date")
  private String statementDate = null;

  @SerializedName("statement_link")
  private String statementLink = null;

  @SerializedName("statement_link_expiry")
  private String statementLinkExpiry = null;

  @SerializedName("statement_name")
  private String statementName = null;

  public BaasStatementVO statementContent(Object statementContent) {
    this.statementContent = statementContent;
    return this;
  }

   /**
   * Get statementContent
   * @return statementContent
  **/
  @ApiModelProperty(value = "")
  public Object getStatementContent() {
    return statementContent;
  }

  public void setStatementContent(Object statementContent) {
    this.statementContent = statementContent;
  }

  public BaasStatementVO statementContentType(String statementContentType) {
    this.statementContentType = statementContentType;
    return this;
  }

   /**
   * Get statementContentType
   * @return statementContentType
  **/
  @ApiModelProperty(value = "")
  public String getStatementContentType() {
    return statementContentType;
  }

  public void setStatementContentType(String statementContentType) {
    this.statementContentType = statementContentType;
  }

  public BaasStatementVO statementDate(String statementDate) {
    this.statementDate = statementDate;
    return this;
  }

   /**
   * Get statementDate
   * @return statementDate
  **/
  @ApiModelProperty(value = "")
  public String getStatementDate() {
    return statementDate;
  }

  public void setStatementDate(String statementDate) {
    this.statementDate = statementDate;
  }

  public BaasStatementVO statementLink(String statementLink) {
    this.statementLink = statementLink;
    return this;
  }

   /**
   * Get statementLink
   * @return statementLink
  **/
  @ApiModelProperty(value = "")
  public String getStatementLink() {
    return statementLink;
  }

  public void setStatementLink(String statementLink) {
    this.statementLink = statementLink;
  }

  public BaasStatementVO statementLinkExpiry(String statementLinkExpiry) {
    this.statementLinkExpiry = statementLinkExpiry;
    return this;
  }

   /**
   * Get statementLinkExpiry
   * @return statementLinkExpiry
  **/
  @ApiModelProperty(value = "")
  public String getStatementLinkExpiry() {
    return statementLinkExpiry;
  }

  public void setStatementLinkExpiry(String statementLinkExpiry) {
    this.statementLinkExpiry = statementLinkExpiry;
  }

  public BaasStatementVO statementName(String statementName) {
    this.statementName = statementName;
    return this;
  }

   /**
   * Get statementName
   * @return statementName
  **/
  @ApiModelProperty(value = "")
  public String getStatementName() {
    return statementName;
  }

  public void setStatementName(String statementName) {
    this.statementName = statementName;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BaasStatementVO baasStatementVO = (BaasStatementVO) o;
    return Objects.equals(this.statementContent, baasStatementVO.statementContent) &&
        Objects.equals(this.statementContentType, baasStatementVO.statementContentType) &&
        Objects.equals(this.statementDate, baasStatementVO.statementDate) &&
        Objects.equals(this.statementLink, baasStatementVO.statementLink) &&
        Objects.equals(this.statementLinkExpiry, baasStatementVO.statementLinkExpiry) &&
        Objects.equals(this.statementName, baasStatementVO.statementName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(statementContent, statementContentType, statementDate, statementLink, statementLinkExpiry, statementName);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BaasStatementVO {\n");
    
    sb.append("    statementContent: ").append(toIndentedString(statementContent)).append("\n");
    sb.append("    statementContentType: ").append(toIndentedString(statementContentType)).append("\n");
    sb.append("    statementDate: ").append(toIndentedString(statementDate)).append("\n");
    sb.append("    statementLink: ").append(toIndentedString(statementLink)).append("\n");
    sb.append("    statementLinkExpiry: ").append(toIndentedString(statementLinkExpiry)).append("\n");
    sb.append("    statementName: ").append(toIndentedString(statementName)).append("\n");
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

