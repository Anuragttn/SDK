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

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.threeten.bp.OffsetDateTime;

import java.util.Objects;
import java.util.UUID;

/**
 * SMS Object
 */
@ApiModel(description = "SMS Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-28T05:22:42.466Z")
public class SMS {
  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("delivery_status")
  private String deliveryStatus = null;

  @SerializedName("delivery_status_timestamp")
  private OffsetDateTime deliveryStatusTimestamp = null;

  @SerializedName("from")
  private String from = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("nucleus_business_id")
  private UUID nucleusBusinessId = null;

  @SerializedName("nucleus_client_id")
  private UUID nucleusClientId = null;

  @SerializedName("reply_message")
  private String replyMessage = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("sms_id")
  private UUID smsId = null;

  @SerializedName("to")
  private String to = null;

  @SerializedName("type")
  private String type = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  @SerializedName("vendor_account_id")
  private String vendorAccountId = null;

  @SerializedName("vendor_id")
  private UUID vendorId = null;

  @SerializedName("vendor_name")
  private String vendorName = null;

  @SerializedName("vendor_sms_id")
  private String vendorSmsId = null;

  public SMS createDate(OffsetDateTime createDate) {
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

  public SMS deliveryStatus(String deliveryStatus) {
    this.deliveryStatus = deliveryStatus;
    return this;
  }

   /**
   * deliveryStatus
   * @return deliveryStatus
  **/
  @ApiModelProperty(example = "delivered", value = "deliveryStatus")
  public String getDeliveryStatus() {
    return deliveryStatus;
  }

  public void setDeliveryStatus(String deliveryStatus) {
    this.deliveryStatus = deliveryStatus;
  }

  public SMS deliveryStatusTimestamp(OffsetDateTime deliveryStatusTimestamp) {
    this.deliveryStatusTimestamp = deliveryStatusTimestamp;
    return this;
  }

   /**
   * deliveryStatusTimestamp
   * @return deliveryStatusTimestamp
  **/
  @ApiModelProperty(example = "2018-11-29T14:48:38.000+0000", value = "deliveryStatusTimestamp")
  public OffsetDateTime getDeliveryStatusTimestamp() {
    return deliveryStatusTimestamp;
  }

  public void setDeliveryStatusTimestamp(OffsetDateTime deliveryStatusTimestamp) {
    this.deliveryStatusTimestamp = deliveryStatusTimestamp;
  }

  public SMS from(String from) {
    this.from = from;
    return this;
  }

   /**
   * from
   * @return from
  **/
  @ApiModelProperty(example = "+13044519882", value = "from")
  public String getFrom() {
    return from;
  }

  public void setFrom(String from) {
    this.from = from;
  }

  public SMS id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(value = "")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public SMS nucleusBusinessId(UUID nucleusBusinessId) {
    this.nucleusBusinessId = nucleusBusinessId;
    return this;
  }

   /**
   * nucleusBusinessId
   * @return nucleusBusinessId
  **/
  @ApiModelProperty(example = "2035f52d-2c5b-4e07-8904-cb037bad7aff", value = "nucleusBusinessId")
  public UUID getNucleusBusinessId() {
    return nucleusBusinessId;
  }

  public void setNucleusBusinessId(UUID nucleusBusinessId) {
    this.nucleusBusinessId = nucleusBusinessId;
  }

  public SMS nucleusClientId(UUID nucleusClientId) {
    this.nucleusClientId = nucleusClientId;
    return this;
  }

   /**
   * nucleusClientId
   * @return nucleusClientId
  **/
  @ApiModelProperty(example = "2035f52d-2c5b-4e07-8904-cb037bad7aff", value = "nucleusClientId")
  public UUID getNucleusClientId() {
    return nucleusClientId;
  }

  public void setNucleusClientId(UUID nucleusClientId) {
    this.nucleusClientId = nucleusClientId;
  }

  public SMS replyMessage(String replyMessage) {
    this.replyMessage = replyMessage;
    return this;
  }

   /**
   * replyMessage
   * @return replyMessage
  **/
  @ApiModelProperty(example = "We have received your message", value = "replyMessage")
  public String getReplyMessage() {
    return replyMessage;
  }

  public void setReplyMessage(String replyMessage) {
    this.replyMessage = replyMessage;
  }

  public SMS secondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
    return this;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public void setSecondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
  }

  public SMS smsId(UUID smsId) {
    this.smsId = smsId;
    return this;
  }

   /**
   * Get smsId
   * @return smsId
  **/
  @ApiModelProperty(value = "")
  public UUID getSmsId() {
    return smsId;
  }

  public void setSmsId(UUID smsId) {
    this.smsId = smsId;
  }

  public SMS to(String to) {
    this.to = to;
    return this;
  }

   /**
   * to
   * @return to
  **/
  @ApiModelProperty(example = "+13044519882", value = "to")
  public String getTo() {
    return to;
  }

  public void setTo(String to) {
    this.to = to;
  }

  public SMS type(String type) {
    this.type = type;
    return this;
  }

   /**
   * type
   * @return type
  **/
  @ApiModelProperty(example = "sms_sent", value = "type")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public SMS updateDate(OffsetDateTime updateDate) {
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

  public SMS vendorAccountId(String vendorAccountId) {
    this.vendorAccountId = vendorAccountId;
    return this;
  }

   /**
   * Get vendorAccountId
   * @return vendorAccountId
  **/
  @ApiModelProperty(value = "")
  public String getVendorAccountId() {
    return vendorAccountId;
  }

  public void setVendorAccountId(String vendorAccountId) {
    this.vendorAccountId = vendorAccountId;
  }

  public SMS vendorId(UUID vendorId) {
    this.vendorId = vendorId;
    return this;
  }

   /**
   * vendorId
   * @return vendorId
  **/
  @ApiModelProperty(example = "2035f52d-2c5b-4e07-8904-cb037bad7aff", value = "vendorId")
  public UUID getVendorId() {
    return vendorId;
  }

  public void setVendorId(UUID vendorId) {
    this.vendorId = vendorId;
  }

  public SMS vendorName(String vendorName) {
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

  public SMS vendorSmsId(String vendorSmsId) {
    this.vendorSmsId = vendorSmsId;
    return this;
  }

   /**
   * Get vendorSmsId
   * @return vendorSmsId
  **/
  @ApiModelProperty(value = "")
  public String getVendorSmsId() {
    return vendorSmsId;
  }

  public void setVendorSmsId(String vendorSmsId) {
    this.vendorSmsId = vendorSmsId;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SMS SMS = (SMS) o;
    return Objects.equals(this.createDate, SMS.createDate) &&
        Objects.equals(this.deliveryStatus, SMS.deliveryStatus) &&
        Objects.equals(this.deliveryStatusTimestamp, SMS.deliveryStatusTimestamp) &&
        Objects.equals(this.from, SMS.from) &&
        Objects.equals(this.id, SMS.id) &&
        Objects.equals(this.nucleusBusinessId, SMS.nucleusBusinessId) &&
        Objects.equals(this.nucleusClientId, SMS.nucleusClientId) &&
        Objects.equals(this.replyMessage, SMS.replyMessage) &&
        Objects.equals(this.secondaryId, SMS.secondaryId) &&
        Objects.equals(this.smsId, SMS.smsId) &&
        Objects.equals(this.to, SMS.to) &&
        Objects.equals(this.type, SMS.type) &&
        Objects.equals(this.updateDate, SMS.updateDate) &&
        Objects.equals(this.vendorAccountId, SMS.vendorAccountId) &&
        Objects.equals(this.vendorId, SMS.vendorId) &&
        Objects.equals(this.vendorName, SMS.vendorName) &&
        Objects.equals(this.vendorSmsId, SMS.vendorSmsId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(createDate, deliveryStatus, deliveryStatusTimestamp, from, id, nucleusBusinessId, nucleusClientId, replyMessage, secondaryId, smsId, to, type, updateDate, vendorAccountId, vendorId, vendorName, vendorSmsId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SMS {\n");

    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    deliveryStatus: ").append(toIndentedString(deliveryStatus)).append("\n");
    sb.append("    deliveryStatusTimestamp: ").append(toIndentedString(deliveryStatusTimestamp)).append("\n");
    sb.append("    from: ").append(toIndentedString(from)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    nucleusBusinessId: ").append(toIndentedString(nucleusBusinessId)).append("\n");
    sb.append("    nucleusClientId: ").append(toIndentedString(nucleusClientId)).append("\n");
    sb.append("    replyMessage: ").append(toIndentedString(replyMessage)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    smsId: ").append(toIndentedString(smsId)).append("\n");
    sb.append("    to: ").append(toIndentedString(to)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    updateDate: ").append(toIndentedString(updateDate)).append("\n");
    sb.append("    vendorAccountId: ").append(toIndentedString(vendorAccountId)).append("\n");
    sb.append("    vendorId: ").append(toIndentedString(vendorId)).append("\n");
    sb.append("    vendorName: ").append(toIndentedString(vendorName)).append("\n");
    sb.append("    vendorSmsId: ").append(toIndentedString(vendorSmsId)).append("\n");
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

