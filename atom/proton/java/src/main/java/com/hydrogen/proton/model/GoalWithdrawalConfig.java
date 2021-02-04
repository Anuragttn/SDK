/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.proton.model;

import java.util.Objects;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;

/**
 * GoalWithdrawalConfig
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-03T15:06:55.665Z")



public class GoalWithdrawalConfig {
  /**
   * Gets or Sets withStartReference
   */
  @JsonAdapter(WithStartReferenceEnum.Adapter.class)
  public enum WithStartReferenceEnum {
    A_END("a_end"),
    
    D_END("d_end");

    private String value;

    WithStartReferenceEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static WithStartReferenceEnum fromValue(String text) {
      for (WithStartReferenceEnum b : WithStartReferenceEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<WithStartReferenceEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final WithStartReferenceEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public WithStartReferenceEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return WithStartReferenceEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("with_start_reference")
  private WithStartReferenceEnum withStartReference = WithStartReferenceEnum.A_END;

  @SerializedName("with_amount")
  private BigDecimal withAmount = null;

  @SerializedName("with_inflation")
  private Float withInflation = 0.0f;

  @SerializedName("with_start_period")
  private Integer withStartPeriod = 0;

  @SerializedName("with_end_period")
  private Integer withEndPeriod = 0;

  /**
   * Gets or Sets withEndReference
   */
  @JsonAdapter(WithEndReferenceEnum.Adapter.class)
  public enum WithEndReferenceEnum {
    A_END("a_end"),
    
    D_END("d_end");

    private String value;

    WithEndReferenceEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static WithEndReferenceEnum fromValue(String text) {
      for (WithEndReferenceEnum b : WithEndReferenceEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<WithEndReferenceEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final WithEndReferenceEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public WithEndReferenceEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return WithEndReferenceEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("with_end_reference")
  private WithEndReferenceEnum withEndReference = WithEndReferenceEnum.D_END;

  /**
   * Gets or Sets withFrequency
   */
  @JsonAdapter(WithFrequencyEnum.Adapter.class)
  public enum WithFrequencyEnum {
    YEAR("year"),
    
    SIX_MONTHS("six_months"),
    
    QUARTER("quarter"),
    
    MONTH("month"),
    
    TWO_WEEKS("two_weeks"),
    
    WEEK("week"),
    
    DAY("day");

    private String value;

    WithFrequencyEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static WithFrequencyEnum fromValue(String text) {
      for (WithFrequencyEnum b : WithFrequencyEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<WithFrequencyEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final WithFrequencyEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public WithFrequencyEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return WithFrequencyEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("with_frequency")
  private WithFrequencyEnum withFrequency = WithFrequencyEnum.YEAR;

  public GoalWithdrawalConfig withStartReference(WithStartReferenceEnum withStartReference) {
    this.withStartReference = withStartReference;
    return this;
  }

   /**
   * Get withStartReference
   * @return withStartReference
  **/
  @ApiModelProperty(value = "")
  public WithStartReferenceEnum getWithStartReference() {
    return withStartReference;
  }

  public void setWithStartReference(WithStartReferenceEnum withStartReference) {
    this.withStartReference = withStartReference;
  }

  public GoalWithdrawalConfig withAmount(BigDecimal withAmount) {
    this.withAmount = withAmount;
    return this;
  }

   /**
   * Get withAmount
   * minimum: 0
   * @return withAmount
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getWithAmount() {
    return withAmount;
  }

  public void setWithAmount(BigDecimal withAmount) {
    this.withAmount = withAmount;
  }

  public GoalWithdrawalConfig withInflation(Float withInflation) {
    this.withInflation = withInflation;
    return this;
  }

   /**
   * Get withInflation
   * minimum: -1
   * @return withInflation
  **/
  @ApiModelProperty(value = "")
  public Float getWithInflation() {
    return withInflation;
  }

  public void setWithInflation(Float withInflation) {
    this.withInflation = withInflation;
  }

  public GoalWithdrawalConfig withStartPeriod(Integer withStartPeriod) {
    this.withStartPeriod = withStartPeriod;
    return this;
  }

   /**
   * Get withStartPeriod
   * @return withStartPeriod
  **/
  @ApiModelProperty(value = "")
  public Integer getWithStartPeriod() {
    return withStartPeriod;
  }

  public void setWithStartPeriod(Integer withStartPeriod) {
    this.withStartPeriod = withStartPeriod;
  }

  public GoalWithdrawalConfig withEndPeriod(Integer withEndPeriod) {
    this.withEndPeriod = withEndPeriod;
    return this;
  }

   /**
   * Get withEndPeriod
   * @return withEndPeriod
  **/
  @ApiModelProperty(value = "")
  public Integer getWithEndPeriod() {
    return withEndPeriod;
  }

  public void setWithEndPeriod(Integer withEndPeriod) {
    this.withEndPeriod = withEndPeriod;
  }

  public GoalWithdrawalConfig withEndReference(WithEndReferenceEnum withEndReference) {
    this.withEndReference = withEndReference;
    return this;
  }

   /**
   * Get withEndReference
   * @return withEndReference
  **/
  @ApiModelProperty(value = "")
  public WithEndReferenceEnum getWithEndReference() {
    return withEndReference;
  }

  public void setWithEndReference(WithEndReferenceEnum withEndReference) {
    this.withEndReference = withEndReference;
  }

  public GoalWithdrawalConfig withFrequency(WithFrequencyEnum withFrequency) {
    this.withFrequency = withFrequency;
    return this;
  }

   /**
   * Get withFrequency
   * @return withFrequency
  **/
  @ApiModelProperty(value = "")
  public WithFrequencyEnum getWithFrequency() {
    return withFrequency;
  }

  public void setWithFrequency(WithFrequencyEnum withFrequency) {
    this.withFrequency = withFrequency;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GoalWithdrawalConfig goalWithdrawalConfig = (GoalWithdrawalConfig) o;
    return Objects.equals(this.withStartReference, goalWithdrawalConfig.withStartReference) &&
        Objects.equals(this.withAmount, goalWithdrawalConfig.withAmount) &&
        Objects.equals(this.withInflation, goalWithdrawalConfig.withInflation) &&
        Objects.equals(this.withStartPeriod, goalWithdrawalConfig.withStartPeriod) &&
        Objects.equals(this.withEndPeriod, goalWithdrawalConfig.withEndPeriod) &&
        Objects.equals(this.withEndReference, goalWithdrawalConfig.withEndReference) &&
        Objects.equals(this.withFrequency, goalWithdrawalConfig.withFrequency);
  }

  @Override
  public int hashCode() {
    return Objects.hash(withStartReference, withAmount, withInflation, withStartPeriod, withEndPeriod, withEndReference, withFrequency);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GoalWithdrawalConfig {\n");
    
    sb.append("    withStartReference: ").append(toIndentedString(withStartReference)).append("\n");
    sb.append("    withAmount: ").append(toIndentedString(withAmount)).append("\n");
    sb.append("    withInflation: ").append(toIndentedString(withInflation)).append("\n");
    sb.append("    withStartPeriod: ").append(toIndentedString(withStartPeriod)).append("\n");
    sb.append("    withEndPeriod: ").append(toIndentedString(withEndPeriod)).append("\n");
    sb.append("    withEndReference: ").append(toIndentedString(withEndReference)).append("\n");
    sb.append("    withFrequency: ").append(toIndentedString(withFrequency)).append("\n");
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

