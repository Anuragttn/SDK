/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.PortfolioHoldingPayload;
import java.io.IOException;
import java.util.UUID;
import org.threeten.bp.LocalDate;

/**
 * CreatePortfolioHoldingResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class CreatePortfolioHoldingResponse {
  @SerializedName("date")
  private LocalDate date = null;

  @SerializedName("portfolio_id")
  private UUID portfolioId = null;

  @SerializedName("security_id")
  private UUID securityId = null;

  @SerializedName("shares")
  private Double shares = null;

  @SerializedName("amount")
  private Double amount = null;

  @SerializedName("weight")
  private Integer weight = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("create_date")
  private String createDate = null;

  public CreatePortfolioHoldingResponse date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * Date for this security holding record
   * @return date
  **/
  @ApiModelProperty(required = true, value = "Date for this security holding record")
  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public CreatePortfolioHoldingResponse portfolioId(UUID portfolioId) {
    this.portfolioId = portfolioId;
    return this;
  }

   /**
   * The ID of the portfolio to which the holding record belongs
   * @return portfolioId
  **/
  @ApiModelProperty(required = true, value = "The ID of the portfolio to which the holding record belongs")
  public UUID getPortfolioId() {
    return portfolioId;
  }

  public void setPortfolioId(UUID portfolioId) {
    this.portfolioId = portfolioId;
  }

  public CreatePortfolioHoldingResponse securityId(UUID securityId) {
    this.securityId = securityId;
    return this;
  }

   /**
   * The ID of the security included in the holding record
   * @return securityId
  **/
  @ApiModelProperty(required = true, value = "The ID of the security included in the holding record")
  public UUID getSecurityId() {
    return securityId;
  }

  public void setSecurityId(UUID securityId) {
    this.securityId = securityId;
  }

  public CreatePortfolioHoldingResponse shares(Double shares) {
    this.shares = shares;
    return this;
  }

   /**
   * The quantity of shares of the security being held
   * @return shares
  **/
  @ApiModelProperty(required = true, value = "The quantity of shares of the security being held")
  public Double getShares() {
    return shares;
  }

  public void setShares(Double shares) {
    this.shares = shares;
  }

  public CreatePortfolioHoldingResponse amount(Double amount) {
    this.amount = amount;
    return this;
  }

   /**
   * Total monetary value of the security being held. Used to calculate weights
   * @return amount
  **/
  @ApiModelProperty(value = "Total monetary value of the security being held. Used to calculate weights")
  public Double getAmount() {
    return amount;
  }

  public void setAmount(Double amount) {
    this.amount = amount;
  }

  public CreatePortfolioHoldingResponse weight(Integer weight) {
    this.weight = weight;
    return this;
  }

   /**
   * Weight of the holding as a percentage of a portfolio’s total monetary value; ex. 20 representing 20%. If the security is the only one, enter 100
   * @return weight
  **/
  @ApiModelProperty(value = "Weight of the holding as a percentage of a portfolio’s total monetary value; ex. 20 representing 20%. If the security is the only one, enter 100")
  public Integer getWeight() {
    return weight;
  }

  public void setWeight(Integer weight) {
    this.weight = weight;
  }

  public CreatePortfolioHoldingResponse secondaryId(String secondaryId) {
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

  public CreatePortfolioHoldingResponse id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * ID of the portfolio holding record
   * @return id
  **/
  @ApiModelProperty(value = "ID of the portfolio holding record")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public CreatePortfolioHoldingResponse createDate(String createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Datetime the portfolio holding record was created
   * @return createDate
  **/
  @ApiModelProperty(value = "Datetime the portfolio holding record was created")
  public String getCreateDate() {
    return createDate;
  }

  public void setCreateDate(String createDate) {
    this.createDate = createDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreatePortfolioHoldingResponse createPortfolioHoldingResponse = (CreatePortfolioHoldingResponse) o;
    return Objects.equals(this.date, createPortfolioHoldingResponse.date) &&
        Objects.equals(this.portfolioId, createPortfolioHoldingResponse.portfolioId) &&
        Objects.equals(this.securityId, createPortfolioHoldingResponse.securityId) &&
        Objects.equals(this.shares, createPortfolioHoldingResponse.shares) &&
        Objects.equals(this.amount, createPortfolioHoldingResponse.amount) &&
        Objects.equals(this.weight, createPortfolioHoldingResponse.weight) &&
        Objects.equals(this.secondaryId, createPortfolioHoldingResponse.secondaryId) &&
        Objects.equals(this.id, createPortfolioHoldingResponse.id) &&
        Objects.equals(this.createDate, createPortfolioHoldingResponse.createDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(date, portfolioId, securityId, shares, amount, weight, secondaryId, id, createDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreatePortfolioHoldingResponse {\n");
    
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    portfolioId: ").append(toIndentedString(portfolioId)).append("\n");
    sb.append("    securityId: ").append(toIndentedString(securityId)).append("\n");
    sb.append("    shares: ").append(toIndentedString(shares)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
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
