/*
 * Hydrogen Nucleus API
 *
 * The Hydrogen Nucleus API
 *
 * API version: 1.9.5
 * Contact: info@hydrogenplatform.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package nucleus_api

// Customer Revenue Object
type CustomerRevenue struct {
	// accounting_method
	AccountingMethod string `json:"accounting_method"`
	// contactId
	ContactId  string `json:"contact_id"`
	CreateDate string `json:"create_date,omitempty"`
	// currency_code
	CurrencyCode string `json:"currency_code"`
	// date
	Date string `json:"date"`
	Id   string `json:"id,omitempty"`
	// metadata
	Metadata map[string]string `json:"metadata,omitempty"`
	// revenue
	Revenue     float64 `json:"revenue"`
	SecondaryId string  `json:"secondary_id,omitempty"`
	UpdateDate  string  `json:"update_date,omitempty"`
}
