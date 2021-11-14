/*
 * Hydrogen Nucleus API
 *
 * The Hydrogen Nucleus API
 *
 * API version: 1.9.4
 * Contact: info@hydrogenplatform.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package nucleus_api



// PortfolioHoldingLog Object
type PortfolioHoldingLog struct {
	// accountId
	AccountId string `json:"account_id"`
	// amount
	Amount float64 `json:"amount,omitempty"`
	// cost_basis
	CostBasis  float64   `json:"cost_basis,omitempty"`
	CreateDate string `json:"create_date,omitempty"`
	// currency_code
	CurrencyCode string `json:"currency_code,omitempty"`
	// date
	Date string `json:"date"`
	Id   string    `json:"id,omitempty"`
	// modelId
	ModelId string `json:"model_id"`
	// portfolioId
	PortfolioId string `json:"portfolio_id"`
	SecondaryId string `json:"secondary_id,omitempty"`
	// securityId
	SecurityId string `json:"security_id"`
	// shares
	Shares     float64   `json:"shares"`
	UpdateDate string `json:"update_date,omitempty"`
	// weight
	Weight float64 `json:"weight,omitempty"`
}