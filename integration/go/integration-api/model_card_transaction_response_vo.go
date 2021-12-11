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

type CardTransactionResponseVo struct {
	Message                    string        `json:"message,omitempty"`
	NucleusCardId              string        `json:"nucleus_card_id,omitempty"`
	NucleusTransactionsPosted  []interface{} `json:"nucleus_transactions_posted,omitempty"`
	NucleusTransactionsUpdated []interface{} `json:"nucleus_transactions_updated,omitempty"`
	VendorName                 string        `json:"vendor_name,omitempty"`
	VendorResponse             interface{}   `json:"vendor_response,omitempty"`
}