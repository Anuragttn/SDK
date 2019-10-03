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
import java.io.IOException;

/**
 * Transaction information if from a bank of credit card account
 */
@ApiModel(description = "Transaction information if from a bank of credit card account")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-09-16T14:10:50.140-04:00")
public class AggregationAccountTransactionPayloadBankCredit {
  /**
   * Type of the transaction. Value may be Debit or Credit
   */
  @JsonAdapter(TransactionTypeEnum.Adapter.class)
  public enum TransactionTypeEnum {
    DEBIT("debit"),
    
    CREDIT("credit");

    private String value;

    TransactionTypeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static TransactionTypeEnum fromValue(String text) {
      for (TransactionTypeEnum b : TransactionTypeEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<TransactionTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final TransactionTypeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public TransactionTypeEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return TransactionTypeEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("transaction_type")
  private TransactionTypeEnum transactionType = null;

  @SerializedName("amount")
  private Double amount = null;

  @SerializedName("merchant")
  private String merchant = null;

  @SerializedName("category")
  private String category = null;

  @SerializedName("subcategory")
  private String subcategory = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("memo")
  private String memo = null;

  public AggregationAccountTransactionPayloadBankCredit transactionType(TransactionTypeEnum transactionType) {
    this.transactionType = transactionType;
    return this;
  }

   /**
   * Type of the transaction. Value may be Debit or Credit
   * @return transactionType
  **/
  @ApiModelProperty(required = true, value = "Type of the transaction. Value may be Debit or Credit")
  public TransactionTypeEnum getTransactionType() {
    return transactionType;
  }

  public void setTransactionType(TransactionTypeEnum transactionType) {
    this.transactionType = transactionType;
  }

  public AggregationAccountTransactionPayloadBankCredit amount(Double amount) {
    this.amount = amount;
    return this;
  }

   /**
   * Amount of the transaction
   * @return amount
  **/
  @ApiModelProperty(required = true, value = "Amount of the transaction")
  public Double getAmount() {
    return amount;
  }

  public void setAmount(Double amount) {
    this.amount = amount;
  }

  public AggregationAccountTransactionPayloadBankCredit merchant(String merchant) {
    this.merchant = merchant;
    return this;
  }

   /**
   * The merchant for the transaction such as the merchant posted for a credit card charge
   * @return merchant
  **/
  @ApiModelProperty(required = true, value = "The merchant for the transaction such as the merchant posted for a credit card charge")
  public String getMerchant() {
    return merchant;
  }

  public void setMerchant(String merchant) {
    this.merchant = merchant;
  }

  public AggregationAccountTransactionPayloadBankCredit category(String category) {
    this.category = category;
    return this;
  }

   /**
   * Category of the transaction
   * @return category
  **/
  @ApiModelProperty(value = "Category of the transaction")
  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public AggregationAccountTransactionPayloadBankCredit subcategory(String subcategory) {
    this.subcategory = subcategory;
    return this;
  }

   /**
   * Subcategory of the transaction
   * @return subcategory
  **/
  @ApiModelProperty(value = "Subcategory of the transaction")
  public String getSubcategory() {
    return subcategory;
  }

  public void setSubcategory(String subcategory) {
    this.subcategory = subcategory;
  }

  public AggregationAccountTransactionPayloadBankCredit description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Description of the transaction
   * @return description
  **/
  @ApiModelProperty(value = "Description of the transaction")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public AggregationAccountTransactionPayloadBankCredit memo(String memo) {
    this.memo = memo;
    return this;
  }

   /**
   * Memo attached to the transaction
   * @return memo
  **/
  @ApiModelProperty(value = "Memo attached to the transaction")
  public String getMemo() {
    return memo;
  }

  public void setMemo(String memo) {
    this.memo = memo;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AggregationAccountTransactionPayloadBankCredit aggregationAccountTransactionPayloadBankCredit = (AggregationAccountTransactionPayloadBankCredit) o;
    return Objects.equals(this.transactionType, aggregationAccountTransactionPayloadBankCredit.transactionType) &&
        Objects.equals(this.amount, aggregationAccountTransactionPayloadBankCredit.amount) &&
        Objects.equals(this.merchant, aggregationAccountTransactionPayloadBankCredit.merchant) &&
        Objects.equals(this.category, aggregationAccountTransactionPayloadBankCredit.category) &&
        Objects.equals(this.subcategory, aggregationAccountTransactionPayloadBankCredit.subcategory) &&
        Objects.equals(this.description, aggregationAccountTransactionPayloadBankCredit.description) &&
        Objects.equals(this.memo, aggregationAccountTransactionPayloadBankCredit.memo);
  }

  @Override
  public int hashCode() {
    return Objects.hash(transactionType, amount, merchant, category, subcategory, description, memo);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AggregationAccountTransactionPayloadBankCredit {\n");
    
    sb.append("    transactionType: ").append(toIndentedString(transactionType)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    merchant: ").append(toIndentedString(merchant)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    subcategory: ").append(toIndentedString(subcategory)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    memo: ").append(toIndentedString(memo)).append("\n");
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

