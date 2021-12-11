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

type GetCardStatementResponseVo struct {
	CurrencyCode   string        `json:"currency_code,omitempty"`
	EndingBalance  float64       `json:"ending_balance,omitempty"`
	FirstName      string        `json:"first_name,omitempty"`
	InitialBalance float64       `json:"initial_balance,omitempty"`
	LastName       string        `json:"last_name,omitempty"`
	Message        string        `json:"message,omitempty"`
	NucleusCardId  string        `json:"nucleus_card_id,omitempty"`
	PeriodFees     float64       `json:"period_fees,omitempty"`
	Transactions   []interface{} `json:"transactions,omitempty"`
	VendorName     string        `json:"vendor_name,omitempty"`
	VendorResponse interface{}   `json:"vendor_response,omitempty"`
	YtdFees        float64       `json:"ytd_fees,omitempty"`
}