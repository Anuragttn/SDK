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

type OrderReconcileReturnObject struct {
	AccountId              []string `json:"account_id,omitempty"`
	PortfolioAssetSizeId   []string `json:"portfolio_asset_size_id,omitempty"`
	PortfolioHoldingId     []string `json:"portfolio_holding_id,omitempty"`
	PortfolioId            []string `json:"portfolio_id,omitempty"`
	PortfolioTransactionId []string `json:"portfolio_transaction_id,omitempty"`
}
