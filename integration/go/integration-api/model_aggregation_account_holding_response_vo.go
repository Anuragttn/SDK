/*
 * Hydrogen Integration API
 *
 * The Hydrogen Integration API
 *
 * API version: 1.3.1
 * Contact: info@hydrogenplatform.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package integration_api

type AggregationAccountHoldingResponseVo struct {
	Message                     string                                              `json:"message,omitempty"`
	NucleusAggregationAccountId string                                              `json:"nucleus_aggregation_account_id,omitempty"`
	NucleusHoldingsPosted       []AggregationAccountHoldingResponseInternalObjectVo `json:"nucleus_holdings_posted,omitempty"`
	VendorName                  string                                              `json:"vendor_name,omitempty"`
}
