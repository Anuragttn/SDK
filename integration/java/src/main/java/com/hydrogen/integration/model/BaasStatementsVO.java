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

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * BaasStatementsVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class BaasStatementsVO {
  @SerializedName("nucleus_account_id")
  private UUID nucleusAccountId = null;

  @SerializedName("statements")
  private List<BaasStatementVO> statements = null;

  @SerializedName("vendor_name")
  private Object vendorName = null;

  public BaasStatementsVO nucleusAccountId(UUID nucleusAccountId) {
    this.nucleusAccountId = nucleusAccountId;
    return this;
  }

   /**
   * Get nucleusAccountId
   * @return nucleusAccountId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusAccountId() {
    return nucleusAccountId;
  }

  public void setNucleusAccountId(UUID nucleusAccountId) {
    this.nucleusAccountId = nucleusAccountId;
  }

  public BaasStatementsVO statements(List<BaasStatementVO> statements) {
    this.statements = statements;
    return this;
  }

  public BaasStatementsVO addStatementsItem(BaasStatementVO statementsItem) {
    if (this.statements == null) {
      this.statements = new ArrayList<BaasStatementVO>();
    }
    this.statements.add(statementsItem);
    return this;
  }

   /**
   * Get statements
   * @return statements
  **/
  @ApiModelProperty(value = "")
  public List<BaasStatementVO> getStatements() {
    return statements;
  }

  public void setStatements(List<BaasStatementVO> statements) {
    this.statements = statements;
  }

  public BaasStatementsVO vendorName(Object vendorName) {
    this.vendorName = vendorName;
    return this;
  }

   /**
   * Get vendorName
   * @return vendorName
  **/
  @ApiModelProperty(value = "")
  public Object getVendorName() {
    return vendorName;
  }

  public void setVendorName(Object vendorName) {
    this.vendorName = vendorName;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BaasStatementsVO baasStatementsVO = (BaasStatementsVO) o;
    return Objects.equals(this.nucleusAccountId, baasStatementsVO.nucleusAccountId) &&
        Objects.equals(this.statements, baasStatementsVO.statements) &&
        Objects.equals(this.vendorName, baasStatementsVO.vendorName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nucleusAccountId, statements, vendorName);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BaasStatementsVO {\n");
    
    sb.append("    nucleusAccountId: ").append(toIndentedString(nucleusAccountId)).append("\n");
    sb.append("    statements: ").append(toIndentedString(statements)).append("\n");
    sb.append("    vendorName: ").append(toIndentedString(vendorName)).append("\n");
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

