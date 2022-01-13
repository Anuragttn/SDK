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

// OrderReconcileRequest Object
type OrderReconcileRequest struct {
	AccountId     string   `json:"account_id,omitempty"`
	NonFractional bool     `json:"non_fractional,omitempty"`
	OrderTrackIds []string `json:"order_track_ids,omitempty"`
	PortfolioId   string   `json:"portfolio_id,omitempty"`
	TenantId      string   `json:"tenant_id,omitempty"`
}
