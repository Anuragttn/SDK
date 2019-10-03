/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.1
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
import io.swagger.client.model.SecurityPayloadSecurityComposition;
import io.swagger.client.model.SecurityPayloadSecurityCountry;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * SecurityPayload
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-09-16T14:10:50.140-04:00")
public class SecurityPayload {
  @SerializedName("name")
  private String name = null;

  @SerializedName("ticker")
  private String ticker = null;

  @SerializedName("asset_class")
  private String assetClass = null;

  @SerializedName("sector")
  private String sector = null;

  @SerializedName("industry")
  private String industry = null;

  @SerializedName("security_class")
  private String securityClass = null;

  @SerializedName("exchange")
  private String exchange = null;

  @SerializedName("proxy_id")
  private UUID proxyId = null;

  @SerializedName("currency_code")
  private String currencyCode = null;

  @SerializedName("is_active")
  private Boolean isActive = true;

  @SerializedName("security_composition")
  private List<SecurityPayloadSecurityComposition> securityComposition = null;

  @SerializedName("security_country")
  private List<SecurityPayloadSecurityCountry> securityCountry = null;

  public SecurityPayload name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name for the security
   * @return name
  **/
  @ApiModelProperty(required = true, value = "Name for the security")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public SecurityPayload ticker(String ticker) {
    this.ticker = ticker;
    return this;
  }

   /**
   * Security’s ticker on the exchange where it is traded
   * @return ticker
  **/
  @ApiModelProperty(required = true, value = "Security’s ticker on the exchange where it is traded")
  public String getTicker() {
    return ticker;
  }

  public void setTicker(String ticker) {
    this.ticker = ticker;
  }

  public SecurityPayload assetClass(String assetClass) {
    this.assetClass = assetClass;
    return this;
  }

   /**
   * The asset class for the security such as “equity”, “fixed-income”, “cash”, etc.
   * @return assetClass
  **/
  @ApiModelProperty(value = "The asset class for the security such as “equity”, “fixed-income”, “cash”, etc.")
  public String getAssetClass() {
    return assetClass;
  }

  public void setAssetClass(String assetClass) {
    this.assetClass = assetClass;
  }

  public SecurityPayload sector(String sector) {
    this.sector = sector;
    return this;
  }

   /**
   * Sector for the security such as “Technology” or “Pharmaceuticals”
   * @return sector
  **/
  @ApiModelProperty(value = "Sector for the security such as “Technology” or “Pharmaceuticals”")
  public String getSector() {
    return sector;
  }

  public void setSector(String sector) {
    this.sector = sector;
  }

  public SecurityPayload industry(String industry) {
    this.industry = industry;
    return this;
  }

   /**
   * The industry of the security such as “Consumer Tech” or “Enterprise Systems”
   * @return industry
  **/
  @ApiModelProperty(value = "The industry of the security such as “Consumer Tech” or “Enterprise Systems”")
  public String getIndustry() {
    return industry;
  }

  public void setIndustry(String industry) {
    this.industry = industry;
  }

  public SecurityPayload securityClass(String securityClass) {
    this.securityClass = securityClass;
    return this;
  }

   /**
   * The security class of the security such as “stock”, “mutual fund”, “ETF” (exchange-traded fund), etc.
   * @return securityClass
  **/
  @ApiModelProperty(value = "The security class of the security such as “stock”, “mutual fund”, “ETF” (exchange-traded fund), etc.")
  public String getSecurityClass() {
    return securityClass;
  }

  public void setSecurityClass(String securityClass) {
    this.securityClass = securityClass;
  }

  public SecurityPayload exchange(String exchange) {
    this.exchange = exchange;
    return this;
  }

   /**
   * The exchange on which the security is traded
   * @return exchange
  **/
  @ApiModelProperty(value = "The exchange on which the security is traded")
  public String getExchange() {
    return exchange;
  }

  public void setExchange(String exchange) {
    this.exchange = exchange;
  }

  public SecurityPayload proxyId(UUID proxyId) {
    this.proxyId = proxyId;
    return this;
  }

   /**
   * ID of a security that will serve as a proxy in financial analytics
   * @return proxyId
  **/
  @ApiModelProperty(value = "ID of a security that will serve as a proxy in financial analytics")
  public UUID getProxyId() {
    return proxyId;
  }

  public void setProxyId(UUID proxyId) {
    this.proxyId = proxyId;
  }

  public SecurityPayload currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * Alphabetic currency code for the base currency of the security, limited to 3 characters
   * @return currencyCode
  **/
  @ApiModelProperty(value = "Alphabetic currency code for the base currency of the security, limited to 3 characters")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }

  public SecurityPayload isActive(Boolean isActive) {
    this.isActive = isActive;
    return this;
  }

   /**
   * Indicates if the security is active. Defaults to true which indicates that the it is active
   * @return isActive
  **/
  @ApiModelProperty(value = "Indicates if the security is active. Defaults to true which indicates that the it is active")
  public Boolean isIsActive() {
    return isActive;
  }

  public void setIsActive(Boolean isActive) {
    this.isActive = isActive;
  }

  public SecurityPayload securityComposition(List<SecurityPayloadSecurityComposition> securityComposition) {
    this.securityComposition = securityComposition;
    return this;
  }

  public SecurityPayload addSecurityCompositionItem(SecurityPayloadSecurityComposition securityCompositionItem) {
    if (this.securityComposition == null) {
      this.securityComposition = new ArrayList<SecurityPayloadSecurityComposition>();
    }
    this.securityComposition.add(securityCompositionItem);
    return this;
  }

   /**
   * Details on the components of a security, their relative weight within the security, and their start and end dates
   * @return securityComposition
  **/
  @ApiModelProperty(value = "Details on the components of a security, their relative weight within the security, and their start and end dates")
  public List<SecurityPayloadSecurityComposition> getSecurityComposition() {
    return securityComposition;
  }

  public void setSecurityComposition(List<SecurityPayloadSecurityComposition> securityComposition) {
    this.securityComposition = securityComposition;
  }

  public SecurityPayload securityCountry(List<SecurityPayloadSecurityCountry> securityCountry) {
    this.securityCountry = securityCountry;
    return this;
  }

  public SecurityPayload addSecurityCountryItem(SecurityPayloadSecurityCountry securityCountryItem) {
    if (this.securityCountry == null) {
      this.securityCountry = new ArrayList<SecurityPayloadSecurityCountry>();
    }
    this.securityCountry.add(securityCountryItem);
    return this;
  }

   /**
   * Each country where the security is traded and its relative weight within the security
   * @return securityCountry
  **/
  @ApiModelProperty(value = "Each country where the security is traded and its relative weight within the security")
  public List<SecurityPayloadSecurityCountry> getSecurityCountry() {
    return securityCountry;
  }

  public void setSecurityCountry(List<SecurityPayloadSecurityCountry> securityCountry) {
    this.securityCountry = securityCountry;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecurityPayload securityPayload = (SecurityPayload) o;
    return Objects.equals(this.name, securityPayload.name) &&
        Objects.equals(this.ticker, securityPayload.ticker) &&
        Objects.equals(this.assetClass, securityPayload.assetClass) &&
        Objects.equals(this.sector, securityPayload.sector) &&
        Objects.equals(this.industry, securityPayload.industry) &&
        Objects.equals(this.securityClass, securityPayload.securityClass) &&
        Objects.equals(this.exchange, securityPayload.exchange) &&
        Objects.equals(this.proxyId, securityPayload.proxyId) &&
        Objects.equals(this.currencyCode, securityPayload.currencyCode) &&
        Objects.equals(this.isActive, securityPayload.isActive) &&
        Objects.equals(this.securityComposition, securityPayload.securityComposition) &&
        Objects.equals(this.securityCountry, securityPayload.securityCountry);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, ticker, assetClass, sector, industry, securityClass, exchange, proxyId, currencyCode, isActive, securityComposition, securityCountry);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecurityPayload {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    ticker: ").append(toIndentedString(ticker)).append("\n");
    sb.append("    assetClass: ").append(toIndentedString(assetClass)).append("\n");
    sb.append("    sector: ").append(toIndentedString(sector)).append("\n");
    sb.append("    industry: ").append(toIndentedString(industry)).append("\n");
    sb.append("    securityClass: ").append(toIndentedString(securityClass)).append("\n");
    sb.append("    exchange: ").append(toIndentedString(exchange)).append("\n");
    sb.append("    proxyId: ").append(toIndentedString(proxyId)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    isActive: ").append(toIndentedString(isActive)).append("\n");
    sb.append("    securityComposition: ").append(toIndentedString(securityComposition)).append("\n");
    sb.append("    securityCountry: ").append(toIndentedString(securityCountry)).append("\n");
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

