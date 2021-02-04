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

import java.util.UUID;
import org.threeten.bp.OffsetDateTime;

/**
 * KycResponseVo
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class KycResponseVo {
  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("kyc_status")
  private String kycStatus = null;

  @SerializedName("kyc_type")
  private String kycType = null;

  @SerializedName("nucleus_business_id")
  private UUID nucleusBusinessId = null;

  @SerializedName("nucleus_client_id")
  private UUID nucleusClientId = null;

  @SerializedName("nucleus_document_id")
  private UUID nucleusDocumentId = null;

  @SerializedName("product")
  private String product = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  @SerializedName("vendor_name")
  private String vendorName = null;

  @SerializedName("vendor_request_data")
  private KycVendorRequestDataVO vendorRequestData = null;

  @SerializedName("vendor_response")
  private Object vendorResponse = null;

  public KycResponseVo createDate(OffsetDateTime createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Get createDate
   * @return createDate
  **/
  @ApiModelProperty(value = "")
  public OffsetDateTime getCreateDate() {
    return createDate;
  }

  public void setCreateDate(OffsetDateTime createDate) {
    this.createDate = createDate;
  }

  public KycResponseVo kycStatus(String kycStatus) {
    this.kycStatus = kycStatus;
    return this;
  }

   /**
   * Get kycStatus
   * @return kycStatus
  **/
  @ApiModelProperty(value = "")
  public String getKycStatus() {
    return kycStatus;
  }

  public void setKycStatus(String kycStatus) {
    this.kycStatus = kycStatus;
  }

  public KycResponseVo kycType(String kycType) {
    this.kycType = kycType;
    return this;
  }

   /**
   * Get kycType
   * @return kycType
  **/
  @ApiModelProperty(value = "")
  public String getKycType() {
    return kycType;
  }

  public void setKycType(String kycType) {
    this.kycType = kycType;
  }

  public KycResponseVo nucleusBusinessId(UUID nucleusBusinessId) {
    this.nucleusBusinessId = nucleusBusinessId;
    return this;
  }

   /**
   * Get nucleusBusinessId
   * @return nucleusBusinessId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusBusinessId() {
    return nucleusBusinessId;
  }

  public void setNucleusBusinessId(UUID nucleusBusinessId) {
    this.nucleusBusinessId = nucleusBusinessId;
  }

  public KycResponseVo nucleusClientId(UUID nucleusClientId) {
    this.nucleusClientId = nucleusClientId;
    return this;
  }

   /**
   * Get nucleusClientId
   * @return nucleusClientId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusClientId() {
    return nucleusClientId;
  }

  public void setNucleusClientId(UUID nucleusClientId) {
    this.nucleusClientId = nucleusClientId;
  }

  public KycResponseVo nucleusDocumentId(UUID nucleusDocumentId) {
    this.nucleusDocumentId = nucleusDocumentId;
    return this;
  }

   /**
   * Get nucleusDocumentId
   * @return nucleusDocumentId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusDocumentId() {
    return nucleusDocumentId;
  }

  public void setNucleusDocumentId(UUID nucleusDocumentId) {
    this.nucleusDocumentId = nucleusDocumentId;
  }

  public KycResponseVo product(String product) {
    this.product = product;
    return this;
  }

   /**
   * Get product
   * @return product
  **/
  @ApiModelProperty(value = "")
  public String getProduct() {
    return product;
  }

  public void setProduct(String product) {
    this.product = product;
  }

  public KycResponseVo updateDate(OffsetDateTime updateDate) {
    this.updateDate = updateDate;
    return this;
  }

   /**
   * Get updateDate
   * @return updateDate
  **/
  @ApiModelProperty(value = "")
  public OffsetDateTime getUpdateDate() {
    return updateDate;
  }

  public void setUpdateDate(OffsetDateTime updateDate) {
    this.updateDate = updateDate;
  }

  public KycResponseVo vendorName(String vendorName) {
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

  public KycResponseVo vendorRequestData(KycVendorRequestDataVO vendorRequestData) {
    this.vendorRequestData = vendorRequestData;
    return this;
  }

   /**
   * Get vendorRequestData
   * @return vendorRequestData
  **/
  @ApiModelProperty(value = "")
  public KycVendorRequestDataVO getVendorRequestData() {
    return vendorRequestData;
  }

  public void setVendorRequestData(KycVendorRequestDataVO vendorRequestData) {
    this.vendorRequestData = vendorRequestData;
  }

  public KycResponseVo vendorResponse(Object vendorResponse) {
    this.vendorResponse = vendorResponse;
    return this;
  }

   /**
   * Get vendorResponse
   * @return vendorResponse
  **/
  @ApiModelProperty(value = "")
  public Object getVendorResponse() {
    return vendorResponse;
  }

  public void setVendorResponse(Object vendorResponse) {
    this.vendorResponse = vendorResponse;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    KycResponseVo kycResponseVo = (KycResponseVo) o;
    return Objects.equals(this.createDate, kycResponseVo.createDate) &&
        Objects.equals(this.kycStatus, kycResponseVo.kycStatus) &&
        Objects.equals(this.kycType, kycResponseVo.kycType) &&
        Objects.equals(this.nucleusBusinessId, kycResponseVo.nucleusBusinessId) &&
        Objects.equals(this.nucleusClientId, kycResponseVo.nucleusClientId) &&
        Objects.equals(this.nucleusDocumentId, kycResponseVo.nucleusDocumentId) &&
        Objects.equals(this.product, kycResponseVo.product) &&
        Objects.equals(this.updateDate, kycResponseVo.updateDate) &&
        Objects.equals(this.vendorName, kycResponseVo.vendorName) &&
        Objects.equals(this.vendorRequestData, kycResponseVo.vendorRequestData) &&
        Objects.equals(this.vendorResponse, kycResponseVo.vendorResponse);
  }

  @Override
  public int hashCode() {
    return Objects.hash(createDate, kycStatus, kycType, nucleusBusinessId, nucleusClientId, nucleusDocumentId, product, updateDate, vendorName, vendorRequestData, vendorResponse);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class KycResponseVo {\n");
    
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    kycStatus: ").append(toIndentedString(kycStatus)).append("\n");
    sb.append("    kycType: ").append(toIndentedString(kycType)).append("\n");
    sb.append("    nucleusBusinessId: ").append(toIndentedString(nucleusBusinessId)).append("\n");
    sb.append("    nucleusClientId: ").append(toIndentedString(nucleusClientId)).append("\n");
    sb.append("    nucleusDocumentId: ").append(toIndentedString(nucleusDocumentId)).append("\n");
    sb.append("    product: ").append(toIndentedString(product)).append("\n");
    sb.append("    updateDate: ").append(toIndentedString(updateDate)).append("\n");
    sb.append("    vendorName: ").append(toIndentedString(vendorName)).append("\n");
    sb.append("    vendorRequestData: ").append(toIndentedString(vendorRequestData)).append("\n");
    sb.append("    vendorResponse: ").append(toIndentedString(vendorResponse)).append("\n");
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

