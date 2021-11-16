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

type BaasTransactionsVo struct {
	Message                    string        `json:"message,omitempty"`
	NucleusPortfolioId         string        `json:"nucleus_portfolio_id,omitempty"`
	NucleusTransactionsPosted  []interface{} `json:"nucleus_transactions_posted,omitempty"`
	NucleusTransactionsUpdated []interface{} `json:"nucleus_transactions_updated,omitempty"`
	VendorName                 interface{}   `json:"vendor_name,omitempty"`
}
