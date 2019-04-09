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
import io.swagger.client.model.ScenarioResults;
import java.io.IOException;
import java.math.BigDecimal;

/**
 * ScenarioAnalysisResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class ScenarioAnalysisResponse {
  @SerializedName("portfolio_impact")
  private BigDecimal portfolioImpact = null;

  @SerializedName("scenario_results")
  private ScenarioResults scenarioResults = null;

  public ScenarioAnalysisResponse portfolioImpact(BigDecimal portfolioImpact) {
    this.portfolioImpact = portfolioImpact;
    return this;
  }

   /**
   * Expected impact of scenario factors on the portfolio&#39;s return. The associated unit of time is the base unit indicated by frequency_interval (for example, week &#x3D; 1 week).
   * @return portfolioImpact
  **/
  @ApiModelProperty(required = true, value = "Expected impact of scenario factors on the portfolio's return. The associated unit of time is the base unit indicated by frequency_interval (for example, week = 1 week).")
  public BigDecimal getPortfolioImpact() {
    return portfolioImpact;
  }

  public void setPortfolioImpact(BigDecimal portfolioImpact) {
    this.portfolioImpact = portfolioImpact;
  }

  public ScenarioAnalysisResponse scenarioResults(ScenarioResults scenarioResults) {
    this.scenarioResults = scenarioResults;
    return this;
  }

   /**
   * Get scenarioResults
   * @return scenarioResults
  **/
  @ApiModelProperty(required = true, value = "")
  public ScenarioResults getScenarioResults() {
    return scenarioResults;
  }

  public void setScenarioResults(ScenarioResults scenarioResults) {
    this.scenarioResults = scenarioResults;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ScenarioAnalysisResponse scenarioAnalysisResponse = (ScenarioAnalysisResponse) o;
    return Objects.equals(this.portfolioImpact, scenarioAnalysisResponse.portfolioImpact) &&
        Objects.equals(this.scenarioResults, scenarioAnalysisResponse.scenarioResults);
  }

  @Override
  public int hashCode() {
    return Objects.hash(portfolioImpact, scenarioResults);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ScenarioAnalysisResponse {\n");
    
    sb.append("    portfolioImpact: ").append(toIndentedString(portfolioImpact)).append("\n");
    sb.append("    scenarioResults: ").append(toIndentedString(scenarioResults)).append("\n");
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
