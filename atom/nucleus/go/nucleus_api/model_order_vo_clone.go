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



// OrderVoClone Object
type OrderVoClone struct {
	// accountId
	AccountId string `json:"account_id,omitempty"`
	// date
	Date string `json:"date,omitempty"`
	// isRead
	IsRead bool `json:"is_read,omitempty"`
	// metadata
	Metadata map[string]string `json:"metadata,omitempty"`
	// modelId
	ModelId string `json:"model_id,omitempty"`
	// orderBulkId
	OrderBulkId string `json:"order_bulk_id,omitempty"`
	// orderTicketId
	OrderTicketId string `json:"order_ticket_id,omitempty"`
	// orderType
	OrderType string `json:"order_type,omitempty"`
	// portfolioId
	PortfolioId string  `json:"portfolio_id,omitempty"`
	Price       float64 `json:"price,omitempty"`
	// quantity
	Quantity float64 `json:"quantity,omitempty"`
	// securityId
	SecurityId string `json:"security_id,omitempty"`
	// transactionCodeId
	TransactionCodeId string `json:"transaction_code_id,omitempty"`
}
